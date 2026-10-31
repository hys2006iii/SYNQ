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
5. 管理后台里「加入申请 / 合作预约」列表分两类：`☁️`+「云端」标记的行来自 FormSubmit 云端（跨设备共享），普通行只存在当前浏览器 localStorage。
6. 站点是纯静态托管，**没有自建数据库**；访客提交靠 FormSubmit 转发邮件到 `synq666@163.com`，见下节。

## 表单数据收集（FormSubmit 邮件后端）

纯静态站没有服务器，所以表单走 [FormSubmit](https://formsubmit.co) 的 AJAX 接口，**不需要注册账号、不需要密钥**：

```
官网/apply.html   ← 加入申请
官网/booking.html ← 单位合作预约
官网/form-sender.js ← 公共提交模块（window.synqSendForm）
        ↓ POST
https://formsubmit.co/ajax/synq666@163.com
        ↓
163 邮箱收到表格邮件（管理员手机/电脑都能看）
```

### 一次性激活（只做一次）

第一次提交时 FormSubmit 会往 `synq666@163.com` 发一封主题含 **Activate Form** 的邮件：

1. 打开 163 邮箱，搜索发件人 `formsubmit`；
2. 点邮件里的 **Activate Form**（或激活链接）；
3. 之后再提交就会正常发信。

未激活时页面会提示「提交未成功：表单服务尚未激活…」。

### 后台查看云端记录（可选）

`admin.html` 的「加入申请 / 合作预约」页顶部有「📮 云端收件箱」条：

1. 点「☁️ 从云端同步」，按提示粘贴 **FormSubmit API 密钥**（密钥获取：访问
   `https://formsubmit.co/api/get-apikey/synq666@163.com`，FormSubmit 会把密钥发到该邮箱）；
2. 密钥存在当前浏览器 `localStorage.water_youth_formsubmit_apikey`，只需填一次；
3. 云端记录以 `☁️` + 「云端」标记显示在列表最上方，仅可查看、不能删除。

限制：**每天最多 5 次同步**、云端**只保留 30 天**。所以重要申请请及时转存到本地（localStorage 里那部分是同设备永久保存）。

### 防垃圾提交

两个表单里各有一个隐藏的蜜罐字段 `_honey`（真人看不见）。自动脚本一旦填了它，FormSubmit 会把该提交判为垃圾直接丢弃。

## 本地自检（改完页面建议跑一遍）

```powershell
node check-js.js 官网\index.html 官网\apply.html 官网\booking.html 官网\admin.html
powershell -NoProfile -ExecutionPolicy Bypass -File .\smoke.ps1
```

- `check-js.js`：编译每个页面里的内联 `<script>`，抓语法错误（不执行代码）。
- `smoke.ps1`：把站点文本文件复制到临时目录、起本地 http 服务、用无头 Chrome 打开页面，检查 JS 是否真的跑起来了（首页 loader 移除 / 跑马灯生成 / 后台云端条与列表渲染），并收集控制台错误。需要本机有 Chrome 和 Python。

