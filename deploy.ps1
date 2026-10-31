# 水韵农青 — 一键发布到 GitHub Pages
# 用法: .\deploy.ps1            (提交并发布)
#       .\deploy.ps1 -NoCommit  (跳过提交，仅重新发布当前已提交内容)

param([switch]$NoCommit)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (-not (Test-Path "官网/index.html")) { throw "未找到 官网/index.html，请在项目根目录运行本脚本" }

if (-not $NoCommit) {
    git add -A
    $staged = git diff --cached --name-only
    if ($staged) {
        $msg = "deploy: 更新官网内容 " + (Get-Date -Format "yyyy-MM-dd HH:mm")
        git -c user.name="hys2006iii" -c user.email="hys2006iii@users.noreply.github.com" commit -m $msg | Write-Host
    } else {
        Write-Host "没有需要提交的改动"
    }
}

Write-Host "`n[1/3] 推送 master ..." -ForegroundColor Cyan
git push origin master

Write-Host "`n[2/3] 从 官网/ 生成发布分支 ..." -ForegroundColor Cyan
git branch -D gh-pages-deploy 2>$null | Out-Null
git subtree split --prefix=官网 -b gh-pages-deploy

Write-Host "`n[3/3] 发布到 gh-pages ..." -ForegroundColor Cyan
git push origin gh-pages-deploy:gh-pages --force

Write-Host "`n完成！1 分钟内生效：https://hys2006iii.github.io/SYNQ/" -ForegroundColor Green
