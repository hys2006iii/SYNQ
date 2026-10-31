$ErrorActionPreference = "Continue"
$root = "D:\AI\水韵农青\官网"
$base = "https://hys2006iii.github.io/SYNQ"
$utf8 = New-Object System.Text.UTF8Encoding($false)

$pattern = '(photos/|recruitment/|fonts/)[^\s"'',\)\>]+\.(jpg|jpeg|png|JPG|JPEG|PNG|webp|woff2|woff|ttf)'
$set = New-Object System.Collections.Generic.HashSet[string]

$files = Get-ChildItem -Path $root -Recurse -Include *.html, *.js -File
foreach ($f in $files) {
    $txt = [System.IO.File]::ReadAllText($f.FullName, $utf8)
    foreach ($m in [regex]::Matches($txt, $pattern)) {
        [void]$set.Add($m.Value.Replace('\', '/'))
    }
}

Write-Host "引用的媒体/字体文件数: $($set.Count)"
$bad = New-Object System.Collections.Generic.List[string]
foreach ($r in ($set | Sort-Object)) {
    $u = "$base/" + $r
    try {
        $resp = Invoke-WebRequest -Uri ([uri]$u) -UseBasicParsing -TimeoutSec 25 -Method Head -ErrorAction Stop
        if ($resp.StatusCode -ne 200) { $bad.Add("$r -> $($resp.StatusCode)") }
    } catch {
        $bad.Add("$r -> $($_.Exception.Message)")
    }
}
if ($bad.Count -eq 0) { Write-Host "RESULT: 全部媒体/字体 200 OK" }
else { Write-Host "异常 $($bad.Count) 个:"; $bad | ForEach-Object { Write-Host "  $_" } }
