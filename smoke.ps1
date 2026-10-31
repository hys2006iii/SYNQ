# Headless Chrome smoke test for the static site.
# Stages a text-only copy of the site into an ASCII temp path, serves it,
# and checks JS-driven markers in the rendered DOM.
$ErrorActionPreference = 'Continue'

$root = $PSScriptRoot
$stage = Join-Path $env:TEMP 'synq-smoke'
$port = 8899
$chrome = 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
$site = Join-Path $root ([char]0x5B98 + [char]0x7F51)   # the site subdirectory

if (Test-Path $stage) { Remove-Item -Recurse -Force $stage }
New-Item -ItemType Directory -Force -Path $stage | Out-Null

Get-ChildItem -Path $site -Recurse -File -Include '*.html', '*.js', '*.css', '*.json' |
    ForEach-Object {
        $rel = $_.FullName.Substring($site.Length).TrimStart('\')
        $dest = Join-Path $stage $rel
        New-Item -ItemType Directory -Force -Path (Split-Path $dest) | Out-Null
        Copy-Item $_.FullName $dest -Force
    }

# Seed a logged-in session plus sample rows so the admin tables and cloud bar render.
$seed = @'
<!doctype html><meta charset="utf-8">
<script>
var now = Date.now();
localStorage.setItem('water_youth_admin_login', JSON.stringify({ isLoggedIn: true, loginTime: now, lastActivity: now }));
localStorage.setItem('water_youth_apply_submissions', JSON.stringify([{ id: 1, major: 'M', grade: 'G', className: 'C', name: 'LOCAL-APPLY', selfIntro: 'intro', otherInfo: '', qq: '1', phone: '2', timestamp: new Date().toISOString() }]));
localStorage.setItem('water_youth_booking_submissions', JSON.stringify([{ id: 2, course: 'COURSE-X', org: 'ORG-X', contact: 'CT', audience: 'A', requirements: 'R', timestamp: new Date().toISOString() }]));
localStorage.setItem('water_youth_cloud_cache', JSON.stringify({ fetchedAt: new Date().toISOString(), apply: [{ name: 'CLOUD-APPLY', major: 'CM', grade: 'CG', className: 'CC', selfIntro: 'cloud intro', qq: '9', phone: '8', timestamp: new Date().toISOString() }], booking: [{ course: 'CLOUD-COURSE', org: 'CLOUD-ORG', contact: 'CC2', audience: 'CA', requirements: 'CR', timestamp: new Date().toISOString() }] }));
location.replace('admin.html');
</script>
'@
$seedPath = Join-Path $stage 'seed.html'
[System.IO.File]::WriteAllText($seedPath, $seed, [System.Text.UTF8Encoding]::new($false))

$server = Start-Process -FilePath 'python' -ArgumentList '-m', 'http.server', $port, '--bind', '127.0.0.1' `
    -WorkingDirectory $stage -PassThru -WindowStyle Hidden
Start-Sleep -Seconds 2

function Get-Dom {
    param($Url, $OutFile)
    $profile = Join-Path $env:TEMP ('chrome-smoke-' + [guid]::NewGuid().ToString('N').Substring(0, 8))
    $args = @(
        '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
        '--disable-extensions', '--mute-audio',
        "--user-data-dir=$profile",
        '--virtual-time-budget=8000',
        '--dump-dom', $Url
    )
    $p = Start-Process -FilePath $chrome -ArgumentList $args -PassThru -NoNewWindow `
        -RedirectStandardOutput $OutFile -RedirectStandardError ($OutFile + '.err')
    if (-not $p.WaitForExit(90000)) { $p.Kill() }
    Remove-Item -Recurse -Force $profile -ErrorAction SilentlyContinue
}

try {
    Get-Dom -Url "http://127.0.0.1:$port/index.html" -OutFile (Join-Path $stage 'dom-index.html')
    Get-Dom -Url "http://127.0.0.1:$port/seed.html" -OutFile (Join-Path $stage 'dom-admin.html')
    Get-Dom -Url "http://127.0.0.1:$port/apply.html" -OutFile (Join-Path $stage 'dom-apply.html')
    Get-Dom -Url "http://127.0.0.1:$port/booking.html" -OutFile (Join-Path $stage 'dom-booking.html')
}
finally {
    Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
}

function Read-Dom($File) {
    if (-not (Test-Path $File)) { return '' }
    return [System.IO.File]::ReadAllText($File, [System.Text.Encoding]::UTF8)
}

$idx = Read-Dom (Join-Path $stage 'dom-index.html')
$adm = Read-Dom (Join-Path $stage 'dom-admin.html')
$app = Read-Dom (Join-Path $stage 'dom-apply.html')
$bok = Read-Dom (Join-Path $stage 'dom-booking.html')

function Has($text, $pattern) { return ($text -match $pattern) }
function Count-Pattern($text, $pattern) { return ([regex]::Matches($text, $pattern)).Count }

Write-Host ("index   : " + $idx.Length + " chars | loaderRemoved=" + (-not (Has $idx 'id="pageLoader"')) +
    " | tickerSpans=" + (Count-Pattern $idx 'class="news-ticker-item') + " | sections=" + (Count-Pattern $idx 'class="fp-section'))

Write-Host ("admin   : " + $adm.Length + " chars | isAdminPage=" + (Has $adm 'id="panel-apply"') +
    " | cloudBars=" + (Count-Pattern $adm 'class="cloud-bar"') +
    " | cloudRows=" + (Count-Pattern $adm 'CLOUD-APPLY|CLOUD-COURSE') +
    " | localRows=" + (Count-Pattern $adm 'LOCAL-APPLY|COURSE-X') +
    " | cloudCell=" + (Count-Pattern $adm 'class="cloud-cell"'))

Write-Host ("apply   : " + $app.Length + " chars | submitHint=" + (Count-Pattern $app 'id="submitHint"') +
    " | senderScript=" + (Count-Pattern $app 'form-sender\.js'))
Write-Host ("booking : " + $bok.Length + " chars | submitHint=" + (Count-Pattern $bok 'id="submitHint"') +
    " | senderScript=" + (Count-Pattern $bok 'form-sender\.js'))

Write-Host "--- console errors ---"
foreach ($pair in @(@('index', 'dom-index.html'), @('admin', 'dom-admin.html'))) {
    $errFile = Join-Path $stage ($pair[1] + '.err')
    if (Test-Path $errFile) {
        $err = [System.IO.File]::ReadAllText($errFile, [System.Text.Encoding]::UTF8)
        $hits = ($err -split "`n" | Where-Object { $_ -match 'SyntaxError|Uncaught|CONSOLE.*ERROR' })
        if ($hits) { Write-Host ($pair[0] + ': ' + ($hits -join ' | ')) } else { Write-Host ($pair[0] + ': none') }
    }
}
