# 水韵农青 · GitHub Pages 部署说明

## 线上地址

**https://hys2006iii.github.io/SYNQ/**

| 页面 | 地址 |
|------|------|
| 首页 | https://hys2006iii.github.io/SYNQ/ |
| 活动大厅 | https://hys2006iii.github.io/SYNQ/activities/index.html |
| 活动列表 | https://hys2006iii.github.io/SYNQ/activity.html |
| 加入申请 | https://hys2006iii.github.io/SYNQ/apply.html |
| 合作预约 | https://hys2006iii.github.io/SYNQ/booking.html |
| 管理后台 | https://hys2006iii.github.io/SYNQ/admin.html |

仓库：https://github.com/hys2006iii/SYNQ

## 部署架构

```
master 分支   ← 源码（官网/、活动资料、文档等）
gh-pages 分支 ← 由 官网/ 目录自动抽取，作为站点根，GitHub Pages 从这里发布
```

- Pages 源：`gh-pages` 分支，路径 `/`，`build_type: legacy`
- 站点根 = `官网/` 目录内容，因此页面里所有相对路径（`photos/`、`logo-mark.png`、`activities/`）都能直接工作
- 图片总计约 116MB，最大单文件 8.4MB，均在 GitHub 限制内

## 更新网站（推荐）

在项目根目录运行：

```powershell
.\deploy.ps1
```

脚本会自动：提交改动 → 推 master → 从 `官网/` 抽取 `gh-pages-deploy` 分支 → 强推到 `gh-pages`。约 1 分钟生效。

只改了内容不想写提交信息时：

```powershell
.\deploy.ps1 -NoCommit
```

## 更新网站（手动）

```powershell
cd "D:\AI\水韵农青"
git add -A
git commit -m "更新内容"
git push origin master
git branch -D gh-pages-deploy 2>$null
git subtree split --prefix=官网 -b gh-pages-deploy
git push origin gh-pages-deploy:gh-pages --force
```

## 注意事项

1. **Git 走了本地代理** `http://127.0.0.1:7897`（已写入仓库 `.git/config`）。若代理端口变了，执行：
   `git config http.proxy http://127.0.0.1:<新端口>`
2. **Token 已内嵌在 `.git/config` 的 remote URL 中**，方便直接推送。出于安全，建议：
   - 日常使用后到 https://github.com/settings/tokens 撤销旧 token 并换新
   - 或改用 GitHub CLI 登录：`gh auth login`
3. Token 目前**没有 `workflow` 权限**，所以不能用 GitHub Actions 发布，当前用分支发布方式绕过。
4. `.gitignore` 已放行 `官网/photos/` 与 `官网/recruitment/`，新增图片会自动纳入 Git；其他活动资料（docx/pptx/zip/视频）仍被忽略，不会推上去。
5. 管理后台数据存在浏览器 localStorage，**各设备之间不共享**（静态站限制，非 bug）。
