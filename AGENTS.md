# 水韵农青 — 项目移交文档

> 最后更新：2026-09-12 21:30 (commit `42285ca`)

---

## 项目概述

「水韵农青」是河海大学青年科技志愿服务队的官方网站，采用全屏滚动 SPA 架构（fullpage.js 风格），深青色主题。

## 技术栈

- **纯静态 HTML/CSS/JS**，无框架依赖
- **fullpage.js CDN** — 全屏滚动（`vendors/fullpage.js` + `vendors.fullpage.css`）
- **中文字体**：Ma Shan Zheng (kai)、Noto Serif SC (song)、Noto Sans SC (sans)
- **主题色**：`--teal-deep: #163737`、`--teal-mid: #1e4d4a`、`--teal-accent: #1fb892`
- **localStorage** 持久化（预约/申请数据）

## 页面结构（index.html，9个section，索引 0-8）

| 索引 | ID | 说明 |
|------|------|------|
| 0 | `top` | 首页 Hero — 标题「水韵农青」，kicker「全国300强志愿队」，三个按钮（活动大厅/加入团队/单位合作） |
| 1 | `origin` | 项目缘起 |
| 2 | `efforts` | 发展成效（从原 section 4 移至此） |
| 3 | `services` | 核心服务（服务篇章 + 服务菜单） |
| 4 | `innov` | 创新理念（4张卡片：跨界融合/数字赋能/赛事联动/思政铸魂） |
| 5 | `vision` | 愿景规划 |
| 6 | `join` | 加入我们（右侧有联系卡片+申请通道） |
| 7 | `partner` | 单位合作 |
| 8 | `ending` | 尾页（Hero 布局，无滚动提示，有致谢、管理端入口） |

## 文件结构

```
官网/
├── index.html          ← 主站 SPA（~2325行）
├── admin.html          ← 管理后台（活动/加入申请/合作申请）
├── booking.html        ← 单位合作预约表单
├── apply.html          ← 加入团队申请表单
├── activities-data.js  ← 活动数据（含 CRUD API）
├── logo-mark.png       ← Logo（已 gitignore *.png，此文件例外）
├── logo-wide.jpg       ← 横版 Logo（例外）
├── recruitment/        ← 招新图片（例外）
├── activities/
│   └── index.html      ← 活动大厅页面
├── activity-detail/
│   ├── index.html      ← 活动列表页
│   └── template.html   ← 活动详情模板
└── vendors/            ← fullpage.js 等第三方库
```

## 关键配置

### 联系方式（硬编码于 index.html）
- 邮箱：`synq666@163.com`
- 电话：`18475136044`
- QQ 群：`1108743305`
- 微信公众号：水韵农青（二维码：`recruitment/公众号.jpg`）

### 管理端登录
- 账号：`admin`
- 密码：`password`
- 入口：尾页「管理端」文字链接 → 登录弹窗 → 跳转 admin.html
- 弹窗显示使用 `style.display='flex'`（非 classList，因 inline `display:none` 会覆盖 class）
- **登录状态管理**：
  - 登录成功后存储登录状态到localStorage（`water_youth_admin_login`）
  - 记录登录时间戳和最后活动时间
  - 30分钟无操作自动退出登录
  - 监听用户活动（鼠标点击、移动、按键、滚动、触摸）更新活动时间
  - 定期检查登录状态（每分钟）
  - 侧边栏底部有退出登录按钮

### localStorage Keys
| Key | 用途 |
|-----|------|
| `water_youth_booking_submissions` | 单位合作预约数据 |
| `water_youth_apply_submissions` | 加入团队申请数据 |
| `water_youth_budget_data` | 预算表暂存数据 |
| `water_youth_reimbursements` | 报销记录数据 |
| `water_youth_expenses` | 消费记录数据 |
| `water_youth_admin_login` | 管理端登录状态 |
| `water_youth_volunteers` | 志愿者档案数据 |
| `water_youth_schedules` | 排班数据 |

### Git Ignore
- 忽略：`*.jpg`、`*.png`、`photos/`、`videos/`
- 例外：`logo-mark.png`、`logo-wide.jpg`、`recruitment/`

## 当前功能状态

### 已完成

**结构重构：**
- 删除原 03 活动菜单板块
- 原 04 发展成效移至 02
- 新增 08 尾页（Hero 布局，致谢+管理端入口）
- 尾页重命名：「单位合作与致谢」→「单位合作」

**导航栏（dock bar）：**
- 不含「尾页」，其余 8 个板块均有对应链接
- data-fp-target 对应正确索引

**fp-nav dots：**
- 9 个导航点（0-8），tooltip 正确

**首页 Hero：**
- Kicker：「全国300强志愿队」，纯白色文字，无边框
- 「探索服务菜单」→ `activities/index.html`（新开标签页）
- 「加入团队」→ `#join`（索引 6）
- 「单位合作」→ `#partner`（索引 7）
- 无「尾页」按钮

**滚动提示（scroll hint bar）：**
- 首页：底部居中，向下箭头
- 尾页：无滚动提示
- 其他页面：左侧24px，垂直居中，图标在文字顶端，文字竖列排放
- 06/07板块已补齐滚动提示

**管理后台（admin.html）：**
- 侧边栏导航布局（数据概览/活动管理/加入申请/合作申请/志愿者管理/排班管理/财务管理系统/数据大屏）
- 活动管理：CRUD + 搜索筛选 + 导入导出
- 加入申请列表：姓名、专业、年级、班级、自我介绍、附件、时间
- 合作申请列表：意向课程、合作单位、联系人、受众学段、需求、时间
- 支持删除操作
- **财务管理系统**：
  - **预算申请**：物品购买申请单填写 + 导出xlsx（SheetJS）
    - 字段：申请人、日期、物品名称、数量、估价、用途、采购地点、采购人、部门领导、分管领导
    - 动态添加/删除行、实时计算合计金额、localStorage暂存
  - **报销管理**：报销申请单填写 + 审批状态管理
    - 字段：申请人、日期、分类、关联预算单、报销项目（名称、金额、日期、说明）
    - 支持待审批/已批准/已驳回/已报销状态
  - **消费记录**：日常消费记录录入 + 分类管理
    - 字段：日期、分类、金额、描述、付款人、凭证
    - 支持按分类、日期筛选 + 导出Excel
  - **财务统计**：预算使用分析 + 支出分类统计 + 月度趋势
    - 预算总额、已报销金额、消费总额、预算使用率
    - 分类支出统计图表、月度支出趋势图表
    - 预算使用明细表格
- **志愿者管理系统**：
  - **志愿者档案**：姓名、专业、年级、技能标签、服务时长、参与活动数
  - **技能管理**：摄影、文案、活动策划、教学、设计等
  - **服务时长统计**：总时长、本月活跃、最高时长排行
  - **导出花名册**：Excel格式导出志愿者信息
- **排班管理系统**：
  - **活动排班**：活动名称、日期、时间、地点、负责人
  - **志愿者分配**：多选志愿者参与排班
  - **状态管理**：待执行/进行中/已完成/已取消
  - **冲突检测**：时间重叠自动提醒
- **数据大屏**：
  - **统计卡片**：志愿者总数、活动总数、服务时长、合作单位
  - **月度活动趋势**：柱状图展示活动数量变化
  - **服务类型分布**：饼图展示篇章活动vs菜单课程
  - **志愿者排行**：服务时长Top10排行榜
  - **近期活动**：最新活动列表
  - **技能分布**：横向柱状图展示志愿者技能分布

**表单页面：**
- `booking.html`：单位合作预约（课程下拉选择 + 单位信息）
- `apply.html`：加入申请（专业、年级、班级、姓名、自我介绍、附件）

**其他：**
- 创新理念 4 张卡片已补充详细描述和 pill 标签
- 联系方式带 email/phone/qq 三种图标
- 尾页致谢卡片含 7 家合作单位
- 招新照片幻灯片 + 双按钮

### 待办/已知问题

- [x] 管理端需要测试 localStorage 数据读取和删除功能是否正常
- [x] booking.html / apply.html 提交后需确认数据写入 localStorage
- [x] 首页「探索服务菜单」按钮应验证活动大厅页面可访问
- [ ] 部分 CSS 选择器可能在特殊状态（如编辑弹窗打开时）有冲突
- [ ] 无自动化测试，所有验证需人工在浏览器完成
- [ ] 财务管理系统：预算申请表单需要测试保存和导出功能
- [ ] 财务管理系统：报销管理需要测试状态变更和筛选功能
- [ ] 财务管理系统：消费记录需要测试分类筛选和导出功能
- [ ] 财务管理系统：财务统计图表需要测试数据准确性

## 开发规范（AGENTS.md 规则）

1. **每次改动必须 Git commit**，便于追踪和回滚
2. **每次改动后编写/更新相关测试**，交付前确保测试通过
3. **当前无自动化测试框架**，所有验证通过浏览器手动完成

## Git 提交历史（最近 15 条）

```
42285ca 重构管理端UI：侧边栏导航+预算表功能+导出xlsx
a71df4c 优化官网：活动大厅改为主题分组展示、滚动提示竖排+0607补齐、fp-nav编号修正
9d69883 docs: 更新测试清单状态，验证核心功能正常
7d8f42e 优化首页：更新kicker文字、调整滚动提示位置、管理端新增申请列表
f9d6e44 优化网站：修复管理端、调整尾页布局、滚动提示移到左边
2e0ed13 优化网站结构：修复管理端、调整布局、新增尾页
c1ca645 全面重构网站结构：调整页面顺序、新增申请表单、优化UI
8876734 全面重构网站：优化UI、删除冗余板块、新增预约表单和管理端登录
33a0104 在加入我们部分添加招新图片展示
dc227d8 添加招新相关图片和更新gitignore配置
21e0a3b 更新加入我们部分：润色招新文案，更新联系方式
d5dfa80 重构志愿服务菜单UI并创建活动详情页面
bd069d9 refactor: 将全屏翻页版本重命名为index.html
5b661a2 feat: 为全屏翻页版本添加搜索和筛选功能
4753faa perf: 添加性能优化测试页面
```

## 测试清单（手动验证）

- [x] 首页 Hero 三个按钮链接正确
- [x] 导航栏 8 个链接指向正确 section
- [x] fp-nav 9 个点 tooltip 正确
- [x] 滚动提示：首页底部、其他页左侧、尾页无
- [x] 活动大厅页面可正常访问
- [x] booking.html 提交后数据写入 localStorage
- [x] apply.html 提交后数据写入 localStorage
- [x] 管理端 admin.html 登录后可看到加入/合作申请列表
- [x] 管理端删除功能正常
- [x] 尾页管理端入口可正常触发登录弹窗
- [ ] 财务管理系统：预算申请表单填写和导出
- [ ] 财务管理系统：报销申请表单填写和状态管理
- [ ] 财务管理系统：消费记录录入和分类筛选
- [ ] 财务管理系统：财务统计数据准确性

---

## 表单数据收集（FormSubmit 邮件后端，2026-10-31 接入）

### 架构

```
apply.html / booking.html
  └─ <script src="form-sender.js">  →  window.synqSendForm(payload, subject)
        └─ POST https://formsubmit.co/ajax/synq666@163.com   (JSON, Accept: application/json)
              └─ 163 邮箱收到表格邮件
admin.html
  └─ GET https://formsubmit.co/api/get-submissions/<apikey>  → 云端近 30 天记录
```

- 选型理由：站点是 GitHub Pages 纯静态托管，没有服务器；FormSubmit 免注册、免密钥、免费，提交即转发邮件（官方宣称无限表单/无限提交）。
- `官网/form-sender.js`：`CONFIG.endpoint` = `https://formsubmit.co/ajax/synq666@163.com`，超时 18s（AbortController），自动附 `_subject`/`_captcha:'false'`/`_template:'table'`，返回 `{ok, data}` / `{ok:false, error}`，并把 FormSubmit 英文报错转成中文提示。
- 两个表单页提交成功后**才**写 localStorage，失败保留表单值并显示重试提示（含邮箱/电话），避免"以为交上了其实没交"。
- 字段映射（邮件里是中文字段名，后台再映射回内部 key）：加入申请 `表单类型/姓名/专业/年级/班级/QQ/手机号/自我介绍/其他说明`；合作预约 `表单类型/意向课程/合作单位/联系人/受众学段/需求说明`。`admin.html` 的 `classifyCloud()` 按 `表单类型` 分流，`mapCloudRecord()` 反查回 name/major/grade/className/selfIntro/qq/phone/otherInfo 与 course/org/contact/audience/requirements。
- 防垃圾：两表单各有一个隐藏蜜罐输入 `id="honeyField" name="_honey"`，有值时才随 payload 发送，FormSubmit 会判为垃圾丢弃。

### 后台云端同步

- `admin.html` 在「加入申请 / 合作预约」两个面板顶部注入 `.cloud-bar`（`injectCloudBars()`，初始化时调用）：按钮「☁️ 从云端同步」`[data-cloud-sync]`、「更换密钥」`[data-cloud-key]`、状态文字 `[data-cloud-status]`。
- 密钥存在 `localStorage.water_youth_formsubmit_apikey`；云端结果缓存在 `localStorage.water_youth_cloud_cache`（`{fetchedAt, apply, booking}`），所以刷新后不用重新拉云端。
- 云端行渲染为 `☁️` 首列 + 末列「云端」，无删除按钮；本地行保留删除按钮和下标。
- **限制**：FormSubmit 归档 API 每天最多 5 次调用、云端只保留 30 天。

### 一次性激活（部署后必做）

首次提交时 FormSubmit 往 `synq666@163.com` 发主题含 **Activate Form** 的邮件；点里面的激活链接后提交才会成功。未激活时页面提示「表单服务尚未激活」。

### 本地自检工具

- `check-js.js`：`node check-js.js 官网\index.html ...` 编译页面内联脚本，抓语法错误（用 `new Function` 编译，不执行）。
- `smoke.ps1`：`powershell -NoProfile -ExecutionPolicy Bypass -File .\smoke.ps1` —— 把文本文件复制到临时目录、起 python http 服务、无头 Chrome 打开首页/后台/两个表单页，检查 JS 真实执行的痕迹（首页 loader 被移除、跑马灯 4 条、后台 2 个 `.cloud-bar`、云端行与本地行都在）并收集控制台错误。

### 已修的隐藏 bug

`官网/index.html` 第 3401 行 `if (feedbackBtn) {` 少了收尾的 `}`（原文件 3414 行 `});` 之后直接接下一段注释），导致该 `<script>`（约 750 行：滚动引擎、计数器、新闻跑马灯、主题切换、意见反馈）整个语法错误、页面全失效。已补齐 `}`。改完用 `check-js.js` + `smoke.ps1` 验证通过。

### 走查时注意

- 本地双击打开 HTML 提交会失败：FormSubmit 要求页面来自 http(s)，会返回「Make sure you open this page through a web server」。
- FormSubmit 的跨域响应头是 `Access-Control-Allow-Origin: *`，所以后台能直接在浏览器里读归档 API。
