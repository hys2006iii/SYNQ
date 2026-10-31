# 水韵农青 GitHub Pages 部署指南

## 方式一：GitHub CLI（推荐，一行命令完成）

1. 安装 GitHub CLI：https://cli.github.com/
2. 登录后在终端执行：

```bash
gh auth login  # 浏览器授权登录
gh repo create SYNQ --public --source=. --push  # 创建并推送
gh variable set PAGES_BUILD_DEPLOYMENT_BRANCH main  # 如需要
gh api repos/{用户名}/SYNQ/pages --method POST --field source[branch]=main --field source[path]/官网  # 开启 Pages
```

## 方式二：Git + Token（手动 3 步）

### 第一步：创建 Personal Access Token
- 访问：https://github.com/settings/personal-access-tokens/new
- 名称：`SYNQ deploy`
- 勾选权限：`repo`（全部仓库权限）
- 生成后复制 token（格式 `ghp_xxxxx`）

### 第二步：执行以下命令（替换 `<用户名>` 和 `<token>`）

```powershell
cd "D:\AI\水韵农青"
git remote add origin https://<token>@github.com/<用户名>/SYNQ.git
git push -u origin master
```

### 第三步：开启 Pages
- 访问：https://github.com/<用户名>/SYNQ/settings/pages
- **Source**: `GitHub Actions`
- **Branch**: `master` / `官网` 目录
- 保存后约 1-3 分钟生效

## 部署后的访问地址
`https://<用户名>.github.io/SYNQ/官网/`

---

## 我已完成的准备工作
- ✅ 修改 `.gitignore` 允许 `官网/photos/` 和 `官网/recruitment/` 目录
- ✅ 将 53 张图片（~116MB）加入 Git 追踪并提交
- ✅ 代码已就绪，等待推送到 GitHub
