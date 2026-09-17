/**
 * 水韵农青 · 活动数据中心 (Activities Data Store)
 * 统一管理全站篇章活动与特色服务菜单，支持 LocalStorage 持久化与后台增删改查
 * 实拍图片、实拍视频、活动文字已全部精准整理对应
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'water_youth_activities_v1';

  var DEFAULT_ACTIVITIES = (function () {
    var acts = [
/* ============================================================
       01 服务篇章活动 (10 项) · 深度结合实拍照片与真实视频
       ============================================================ */
    {
      id: 'act-01',
      type: 'chapter',
      chapterIndex: 0,
      category: '科研绘科普',
      categoryNo: '壹',
      categoryEn: 'RESEARCH INTO CLASSROOM · 01',
      title: '「土壤医生」低碳科普',
      subtitle: '科研项目进课堂 · 农田重金属治理与双碳助力',
      targetAge: '适合 8-12 岁',
      cover: 'photos/IMG_5612.JPG',
      desc: '以获「CLEER杯」双碳创新与创意大赛全国二等奖的《土壤医生——农田土壤污染修复装置暨“双碳”助力者》项目为原型，将大学实验室的前沿科研成果深度转译为面向中小学生的低碳环保与土壤科普课程。团队骨干通过微观教具、酸碱滴定、重金属吸附模拟，让青少年亲手探寻大地生病的秘密与低碳生态疗法。',
      highlights: ['CLEER杯全国二等奖', '农水·土治·碳汇', '双碳国家战略', '动手酸碱滴定实验'],
      stats: '已开展 2 期 · 覆盖 120+ 青少年',
      photos: [
        { url: 'photos/IMG_5612.JPG', title: '志愿者讲解土壤修复原理', desc: '通过微观教具向青少年展示重金属离子在土壤中的吸附转化过程。' },
        { url: 'photos/IMG_5614.JPG', title: '动手实验：土壤酸碱度检测', desc: '引导学生亲手取样、滴定指示剂，观察土壤健康指标变化。' },
        { url: 'photos/IMG_5616.JPG', title: '双碳知识抢答互动', desc: '结合日常生活中的低碳行为，展开趣味小组积分竞赛。' }
      ],
      video: {
        title: '「土壤医生」双碳科研创新与土壤修复解析',
        embed: '',
        url: '',
        tip: '高校实验室双碳获奖项目科普演示'
      },
      tweets: [
        {
          title: '【科普速递】当科研遇上课堂：土壤医生的低碳探秘之旅',
          platform: '河海水韵农青公众号',
          date: '2024-05-18',
          url: 'https://mp.weixin.qq.com/',
          summary: '把实验室里的国家级竞赛获奖项目搬到青少年面前，让科学的种子在泥土芬芳中悄然萌芽。',
          cover: 'photos/IMG_5612.JPG'
        }
      ],
      curriculum: [
        { step: '1', title: '土壤初识：大地皮肤的秘密', content: '通过显微镜和实物样本观察，了解健康土壤与受损重金属污染土壤的区别。' },
        { step: '2', title: '科学诊断：土壤医生的听诊器', content: '使用便携 pH 试纸与水质笔进行多重土壤浸出液检测。' },
        { step: '3', title: '低碳疗法：生态修复与碳汇', content: '讲解植物吸附与生物炭技术，亲手制作微型生态净土盆栽。' }
      ],
      materials: ['土壤标本盒', '便携 pH 试纸', '生态修复小盆栽材料', '双碳知识手册']
    },
    {
      id: 'act-02',
      type: 'chapter',
      chapterIndex: 0,
      category: '科研绘科普',
      categoryNo: '壹',
      categoryEn: 'RESEARCH INTO CLASSROOM · 01',
      title: '「咫尺青绿——清源讲堂」土壤微塑料科普',
      subtitle: '学科前沿 · 金陵图书馆合作品牌系列课程',
      targetAge: '适合 初高中生 / 高年级小学',
      cover: 'photos/IMG_5619.JPG',
      desc: '团队赴南京市金陵图书馆开展的「咫尺青绿——清源讲堂」7 天系列课程，聚焦土壤微塑料、水土环境污染与碳汇等国际前沿环境科学议题。课程设计从塑料袋的百年降解到餐桌上的微塑料富集，带领青少年开展辨识实验与思辨讨论，启迪青年学生的生态环保责任担当。',
      highlights: ['金陵图书馆定点合作', '7天系统课程', '环境微塑料前沿', '生态思辨讨论'],
      stats: '7 天系统授课 · 累计受益 200+ 人次',
      photos: [
        { url: 'photos/IMG_5619.JPG', title: '清源讲堂系列授课现场', desc: '讲师系统解析微塑料在陆地生态系统中的迁移与生物富集规律。' },
        { url: 'photos/IMG_5621.JPG', title: '微塑料颗粒显微观察', desc: '学生借助放大镜与显微装置识别日常用品中分解出的微米级塑料。' }
      ],
      video: {
        title: '微塑料污染与防治科普微课',
        embed: '',
        url: '',
        tip: '金陵图书馆公开讲堂实录'
      },
      tweets: [
        {
          title: '【清源讲堂】咫尺青绿：警惕土壤中看不见的“塑料刺客”',
          platform: '河海水韵农青公众号',
          date: '2024-04-22',
          url: 'https://mp.weixin.qq.com/',
          summary: '从塑料袋的百年降解到餐桌上的微塑料，带你认识隐藏在土壤中的生态挑战。',
          cover: 'photos/IMG_5619.JPG'
        }
      ],
      curriculum: [
        { step: '1', title: '隐形威胁：什么是土壤微塑料', content: '介绍微塑料定义、工业来源及其在全球土壤与水体中的分布现状。' },
        { step: '2', title: '链条追踪：微塑料的生态循环', content: '探讨微塑料对农作物根系水分养分吸收及食物链安全的影响机制。' },
        { step: '3', title: '减塑行动：青年学子的绿色提案', content: '开展“无塑生活 24 小时”主题讨论，撰写低碳环保提案倡议书。' }
      ],
      materials: ['微塑料标本盒', '便携放大镜', '可降解生物材料对比样品', '环保承诺签名板']
    },
    {
      id: 'act-03',
      type: 'chapter',
      chapterIndex: 1,
      category: '实践出真知',
      categoryNo: '贰',
      categoryEn: 'DO FIRST, LEARN DEEPER · 02',
      title: '「寻觅自然疗愈，倾听生命脉络」植物拓印',
      subtitle: '古林公园户外研学 · 非遗传承与植物学美育',
      targetAge: '适合 亲子全龄 / 小学生',
      cover: 'photos/IMG_5622.JPG',
      desc: '结合农业水土与植物生理学知识，水韵农青团队在南京古林公园开展「寻觅自然疗愈，倾听生命脉络」研学营。指导 35 组亲子家庭在户外园区辨识银杏、枫叶等典型叶脉结构，并利用传统非遗植物拓印技法，用木槌将植物的天然色素与细胞脉络敲打定格在纯棉帆布袋与书签上，感受大自然的疗愈与生机。',
      highlights: ['服务35组家庭', '古林公园户外实景', '非遗植物拓印', '植物叶脉美育'],
      stats: '服务 35 组家庭 · 制作 100+ 幅拓印文创作品',
      photos: [
        { url: 'photos/IMG_5622.JPG', title: '植物标本采集与叶脉鉴赏', desc: '带领孩子们认识古林公园园区内的银杏、枫叶、车前草等常见叶脉特征。' },
        { url: 'photos/IMG_5624.JPG', title: '非遗拓印制作实操', desc: '用木槌敲打棉麻帆布，将植物原本的天然色素与叶脉形态永久定格。' },
        { url: 'photos/IMG_5625.JPG', title: '亲子作品展示与合影', desc: '每一幅拓印手提袋都是独一无二的大自然生态文创创作。' }
      ],
      video: {
        title: '非遗植物拓印制作全过程与自然疗愈教学',
        embed: '',
        url: '',
        tip: '非遗锤拓技艺教学演示'
      },
      tweets: [
        {
          title: '【非遗手作】敲出春意，印下生机——古林公园植物拓印疗愈研学回顾',
          platform: '河海水韵农青公众号',
          date: '2024-05-12',
          url: 'https://mp.weixin.qq.com/',
          summary: '以叶为墨，以锤为笔。记录 35 组家庭在草木香气中感受自然之美的温馨时光。',
          cover: 'photos/IMG_5624.JPG'
        }
      ],
      curriculum: [
        { step: '1', title: '草木寻踪：植物叶形与叶脉分类', content: '讲解平行脉、网状脉的生物学功能，学习植物花青素与叶绿素的物理特性。' },
        { step: '2', title: '非遗锤拓：传统印染技法实操', content: '掌握布料铺设、固定、敲击力度控制与叶片无损剥离技巧。' },
        { step: '3', title: '固色封存：大自然文创手袋制作', content: '使用天然明矾等环保固色剂固色，完成专属生态帆布包。' }
      ],
      materials: ['纯棉帆布袋/方巾', '专用拓印木槌', '吸水垫纸', '新鲜植物叶片花瓣', '天然固色液']
    },
    {
      id: 'act-04',
      type: 'chapter',
      chapterIndex: 1,
      category: '实践出真知',
      categoryNo: '贰',
      categoryEn: 'DO FIRST, LEARN DEEPER · 02',
      title: '「翱翔之翼，飞young想象」航天科普',
      subtitle: '水火箭制作发射 · 空气动力学与牛顿反冲定律',
      targetAge: '适合 4-12 岁',
      cover: 'photos/IMG_5632.JPG',
      desc: '水韵农青品牌系列课程，已累计开展 4 场、服务逾 200 组亲子家庭。通过气球滑索火箭生动直观地演示牛顿第三定律（作用力与反作用力），并带领孩子们动手组装耐高压水火箭舱体、剪裁调平尾翼、测算注水量与气压配比，在操场发射架倒计时一键升空，激发青少年的航天报国热情。',
      highlights: ['累计开展4场', '覆盖200+家庭', '水火箭实操发射', '空气动力学启蒙'],
      stats: '累计开展 4 场 · 覆盖 200+ 亲子家庭',
      photos: [
        { url: 'photos/IMG_5632.JPG', title: '气球火箭滑索发射演示', desc: '孩子们拉直发射滑索，倒计时见证火箭模型瞬间加速冲出。' },
        { url: 'photos/IMG_5635.JPG', title: '水火箭压力舱组装与尾翼调平', desc: '志愿者指导学生设计不同倾角的尾翼以提升高空飞行稳定性。' },
        { url: 'photos/photos_aero_1.jpeg', title: '航天科普课堂讲解现场', desc: '主讲人结合火箭实物模型解析多级推进原理。' },
        { url: 'photos/photos_aero_2.jpeg', title: '青少年学员专注提问交流', desc: '课后互动环节，孩子们热情围拢在航天模型旁讨论。' }
      ],
      video: {
        title: '水火箭户外加压发射升空精彩瞬间',
        embed: '',
        url: '',
        tip: '操场户外实弹发射实录'
      },
      tweets: [
        {
          title: '【科技节专场】翱翔之翼，飞向星空：小小火箭放飞大梦想',
          platform: '河海水韵农青公众号',
          date: '2024-05-25',
          url: 'https://mp.weixin.qq.com/',
          summary: '点燃航天梦想！水韵农青带孩子们在操场上空见证气动力学与科学魔法。',
          cover: 'photos/IMG_5632.JPG'
        }
      ],
      curriculum: [
        { step: '1', title: '万物皆动：力的反作用力原理', content: '用吹气球放气的日常现象切入，讲解现代运载火箭推进的物理机制。' },
        { step: '2', title: '结构工程：火箭箭体与尾翼设计', content: '动手剪裁三片式尾翼，测试气动构型对重心与压心的平衡影响。' },
        { step: '3', title: '发射演练：气水配比与滞空比拼', content: '在安全发射区按指令注水三分之一，高压充气，倒计时升空发射！' }
      ],
      materials: ['高强度耐压水火箭舱体', '发射架与专用气嘴', '高压打气筒', '护目镜', '测距皮尺']
    },
    {
      id: 'act-05',
      type: 'chapter',
      chapterIndex: 2,
      category: '想法无极限',
      categoryNo: '叁',
      categoryEn: 'IDEAS WITHOUT LIMITS · 03',
      title: '「OTNPW」核污水知识地图寻物解密',
      subtitle: '原创实景剧情解密 · 洋流扩散与海洋生态防护',
      targetAge: '适合 中小学 / 亲子团队',
      cover: 'photos/IMG_5831(20240526-230008).JPG',
      desc: '以原创剧情驱动实景探案闯关任务，在校园与科普展馆地图寻物中传递海洋环境保护、放射性元素半衰期与核污水综合治理科学知识。团队精心设计了“O·T·N·P·W”五维特工剧情，把被动的知识灌输转化为主动的实景破译，吸引了 180 余名青少年深度参与。',
      highlights: ['原创剧本杀模式', 'OTNPW五大关卡', '洋流扩散沙盘', '团队协同解密'],
      stats: '原创实景解密 · 参与人数 180+',
      photos: [
        { url: 'photos/IMG_5831(20240526-230008).JPG', title: '线索解密任务卡发放', desc: '参赛队伍根据神秘地图寻找隐藏在科普展馆中的密码箱。' },
        { url: 'photos/IMG_5832.PNG', title: '元素周期与水循环线索推理', desc: '学生们协同破译密码锁背后的化学与物理学常识。' },
        { url: 'photos/photos_jieshui_1.jpg', title: '队员们实地布设打卡点与线索', desc: '青年志愿者们在节水科普园区认真布置实验机关与通关卡。' }
      ],
      video: {
        title: 'OTNPW 守护蔚蓝星球解密闯关先导片',
        embed: '',
        url: '',
        tip: '原创实景解密任务短片'
      },
      tweets: [
        {
          title: '【原创实景解密】OTNPW：守护蔚蓝星球的少年特工行动',
          platform: '河海水韵农青公众号',
          date: '2024-05-30',
          url: 'https://mp.weixin.qq.com/',
          summary: '一场集科学推理、团队协作与环保科普于一体的实景探案剧本游戏。',
          cover: 'photos/IMG_5831(20240526-230008).JPG'
        }
      ],
      curriculum: [
        { step: '1', title: '任务下达：危机情报与角色分工', content: '各小组领取特工身份卡与首张加密线索，学习核素半衰期概念。' },
        { step: '2', title: '实景搜证：地图寻标与科学机关', content: '前往 5 个站点完成海洋洋流模型推演、过滤净化实验等通关任务。' },
        { step: '3', title: '真相拼图：全球水治理方案陈述', content: '整合所有解密密匙，发表小组“海洋生态守护倡议宣言”。' }
      ],
      materials: ['原创解密任务手册', '密码道具箱与UV紫光灯', '洋流拼图道具', '特工结业徽章']
    },
    {
      id: 'act-06',
      type: 'chapter',
      chapterIndex: 2,
      category: '想法无极限',
      categoryNo: '叁',
      categoryEn: 'IDEAS WITHOUT LIMITS · 03',
      title: '「人间天河淠史杭」精神传承与历史展演',
      subtitle: '历史情景剧《佛子岭大学》· 河海校友汪胡桢治水事迹',
      targetAge: '适合 全龄学生 / 党团组织',
      cover: 'photos/IMG_5833.PNG',
      desc: '由农工院暑期实践团队在安徽六安深入走访15天孵化而成的历史情境剧《佛子岭大学》，生动再现了新中国治水巨擘、河海知名校友汪胡桢先生在极为艰难的环境下，带领工程技术人员和治水军民修建新中国第一座钢筋混凝土连拱坝——佛子岭水库的壮阔历程。剧目已巡演 3 场，观众逾 500 人。',
      highlights: ['安徽六安实地走访15天', '《佛子岭大学》剧本', '汪胡桢连拱坝故事', '红色水利工程史'],
      stats: '巡回展演 3 场 · 观众超 500 人',
      photos: [
        { url: 'photos/IMG_5833.PNG', title: '《佛子岭大学》情景剧排演', desc: '青年演员生动再现当年水利专家与治水军民战天斗地的奋斗群像。' },
        { url: 'photos/IMG_5834.PNG', title: '水利工程历史图文展', desc: '配合剧目展示淠史杭灌区工程手绘设计图纸与珍贵老照片。' },
        { url: 'photos/photos_pi_jiangkê.png', title: '宣讲人主讲淠史杭精神', desc: '主讲人生动讲述皖西人民靠肩挑背扛修筑“人间天河”的奇迹。' },
        { url: 'photos/photos_pi_tingke.png', title: '现场观众聚精会神聆听', desc: '中小学生与共青团员沉浸在峥嵘治水历史的崇高精神之中。' },
        { url: 'photos/photos_pi_hezao.png', title: '情景剧演职团队大合影', desc: '7位青年主创在宣讲结束后与现场师生代表合影留念。' }
      ],
      video: {
        title: '情景剧《佛子岭大学》展演实况选段与淠史杭精神宣讲',
        embed: '',
        url: '',
        tip: '原创红色水利历史情境剧'
      },
      tweets: [
        {
          title: '【红色传承】情景剧《佛子岭大学》：让人间天河的故事代代相传',
          platform: '河海水韵农青公众号',
          date: '2024-05-18',
          url: 'https://mp.weixin.qq.com/',
          summary: '以青春之声致敬治水先辈，重温河海水利人的家国担当与奋斗历程。',
          cover: 'photos/IMG_5833.PNG'
        }
      ],
      curriculum: [
        { step: '1', title: '峥嵘岁月：淠史杭灌区建设背景', content: '通过历史文献与纪录片讲述皖西大地水患到万亩粮仓的沧桑巨变。' },
        { step: '2', title: '工程巨擘：连拱坝设计的中国智慧', content: '剖析汪胡桢先生敢为人先设计连拱坝的力学原理与创新思维。' },
        { step: '3', title: '精神共鸣：青年一代的治水答卷', content: '开展水利知识竞答与情景剧台词互动诵读，传承治水兴邦信仰。' }
      ],
      materials: ['历史情境剧剧本', '水库工程构造模型', '历史档案图集', '红色研学明信片']
    },
    {
      id: 'act-07',
      type: 'chapter',
      chapterIndex: 3,
      category: '躬行致真知',
      categoryNo: '肆',
      categoryEn: 'KEEP HANDS ON THE LAND · 04',
      title: '「三农」科普 · 水稻创意指尖生趣',
      subtitle: '水稻生长转盘手作 · 体验从一粒谷到一碗米的农业蜕变',
      targetAge: '适合 亲子家庭 / 5-10 岁',
      cover: 'photos/IMG_5835.PNG',
      desc: '“谁知盘中餐，粒粒皆辛苦。”从一粒小小的谷物切入，团队自主设计了水稻生长二十四节气旋转手盘与稻谷脱壳体验套件。孩子们亲手转动浸种、育秧、分蘖、拔节、孕穗、抽穗到收割的完整生理周期，手持微型脱壳工具体验稻谷去壳碾米过程，在指尖趣味中树立节约粮食与强农兴农理念。',
      highlights: ['水稻二十四节气转盘', '稻谷手工脱壳体验', '一粒米的科学旅程', '耕读文化传承'],
      stats: '已开展 1 场 · 服务 20 组亲子家庭',
      photos: [
        { url: 'photos/IMG_5835.PNG', title: '水稻生长期转盘制作', desc: '孩子们组装水稻从浸种、育秧、拔节到抽穗成熟的科普时间转盘。' },
        { url: 'photos/IMG_5715(20240518-215057).PNG', title: '不同稻谷品种对比观察', desc: '认识籼稻、粳稻、糯稻的形态特征与营养成分区别。' }
      ],
      video: {
        title: '水稻育种与水稻的生长过程纪录片',
        embed: '',
        url: '',
        tip: '可在后台设置水稻生长纪录短片'
      },
      tweets: [
        {
          title: '【耕读科普】一粒米的奇妙旅程：水韵农青水稻指尖趣味课堂',
          platform: '河海水韵农青公众号',
          date: '2024-04-15',
          url: 'https://mp.weixin.qq.com/',
          summary: '从育秧田到大米饭，让城市里的孩子们在指尖触摸农业科学的温度。',
          cover: 'photos/IMG_5835.PNG'
        }
      ],
      curriculum: [
        { step: '1', title: '稻香探秘：水稻生长二十四节气', content: '对照农历节气，梳理水稻生长的 120-150 天关键发育阶段。' },
        { step: '2', title: '指尖工坊：亲手完成稻谷脱壳与碾米', content: '使用传统木杵与便携脱壳器，体验糙米变精白米的过程。' },
        { step: '3', title: '创意转盘：带走属于自己的水稻科普画', content: '完成时间旋转科普教具，写下光盘行动节粮承诺。' }
      ],
      materials: ['水稻各期标本盒', '创意时间转盘卡纸', '微型脱壳体验罐', '五谷贴画材料']
    },
    {
      id: 'act-08',
      type: 'chapter',
      chapterIndex: 3,
      category: '躬行致真知',
      categoryNo: '肆',
      categoryEn: 'KEEP HANDS ON THE LAND · 04',
      title: '废弃农作固体物「焕新生」',
      subtitle: '南京九中科技节精品展区 · 秸秆综合利用与稻草人嘉年华',
      targetAge: '适合 全龄中小学 / 亲子社区',
      cover: 'photos/photos_straw_jiuzhong_1.jpg',
      desc: '累计举办 7 场、服务逾 300 组家庭的王牌项目！曾作为南京九中三农创新科技节特色摊位惊艳亮相。课程将传统露天秸秆焚烧的环保痛点转化为现代循环农业的五化利用（肥料化、饲料化、燃料化、基料化、原料化）。现场设置知识大闯关与秸秆编织工坊，带领中小学生用废弃秸秆制作生态稻草人和创意模型，让废弃固体物在巧手中“焕新生”。',
      highlights: ['南京九中科技节特邀', '累计服务300组家庭', '秸秆五化利用', '配套真实实录视频'],
      stats: '累计开展 7 场 · 覆盖 300+ 组家庭',
      photos: [
        { url: 'photos/photos_straw_jiuzhong_1.jpg', title: '南京九中科技节摆摊现场', desc: '水韵农青志愿者在南京九中操场搭建三农秸秆科普展区。' },
        { url: 'photos/photos_straw_jiuzhong_2.jpg', title: '九中高中生体验秸秆编织', desc: '学生们利用废弃秸秆与麻绳现场编制微型稻草人文创。' },
        { url: 'photos/photos_straw_jiuzhong_3.jpg', title: '秸秆工艺品与模型展示', desc: '用农田废弃秸秆编制的各种创意手工艺品与建筑模型展示。' },
        { url: 'photos/photos_straw_61_1.jpg', title: '六一社区科普摆摊现场', desc: '志愿者向社区家长和儿童普及秸秆还田与绿色养殖循环技术。' },
        { url: 'photos/IMG_5717(20240520-011807).PNG', title: '现场讲解秸秆生物质综合利用', desc: '讲解秸秆还田、生物质发电与环保建材转化链条。' }
      ],
      video: {
        title: '【实拍视频】生态农场循环与鸡场环境实录',
        embed: '',
        url: 'videos/straw_chicken_farm.mp4',
        tip: '实拍视频：展示废弃秸秆垫料与生态养殖循环实况'
      },
      tweets: [
        {
          title: '【绿色循环】田间废弃物变宝藏：水韵农青废弃农作物科普系列活动',
          platform: '河海水韵农青公众号',
          date: '2024-05-20',
          url: 'https://mp.weixin.qq.com/',
          summary: '7 场活动连台好戏，让 300 组家庭领略农业科技点草成金的神奇魅力。',
          cover: 'photos/photos_straw_jiuzhong_1.jpg'
        }
      ],
      curriculum: [
        { step: '1', title: '困局与破局：秸秆从禁烧到综合利用', content: '了解传统露天焚烧危害，学习现代“五化”利用途径。' },
        { step: '2', title: '变废为宝：秸秆编织与创意造型', content: '学习秸秆软化、编织、拼接技巧，动手制作生态稻草人或文创编筐。' },
        { step: '3', title: '绿色倡议：乡村振兴中的低碳青年', content: '探讨如何将乡村农林废弃物转化为文创旅游新产品。' }
      ],
      materials: ['安全消毒秸秆材料包', '环保麻绳与固定胶', '农业循环立体展板', '文创挂饰配件']
    },
    {
      id: 'act-09',
      type: 'chapter',
      chapterIndex: 4,
      category: '未来启新篇',
      categoryNo: '伍',
      categoryEn: 'A NEW CHAPTER FOR TOMORROW · 05',
      title: '「菜园奇遇记」现代农场探秘',
      subtitle: '5G智慧农业 · 智能温室传感物联网与五感式探索',
      targetAge: '适合 幼儿园大班 / 小学 1-4 年级',
      cover: 'photos/photos_garden_1.png',
      desc: '把科普课堂直接搬进现代智能农场与科技温室大棚！结合 5G 智慧农业物联监测视频与实地探访，以视觉、听觉、嗅觉、触觉、味觉五感体验串联现代智慧农业黑科技。孩子们观察水肥一体化滴灌、操作温湿度传感器、亲手移栽水培无土菜苗，深刻理解科技如何赋能中国大粮仓。',
      highlights: ['配套5G智慧农业视频', '五感沉浸式体验', '温室物联传感器', '无土栽培亲手移栽'],
      stats: '实地研学 2 期 · 沉浸式温室探索',
      photos: [
        { url: 'photos/photos_garden_1.png', title: '智慧农业现代温室全景', desc: '科技温室内无土栽培立柱与智能遮阳滴灌系统运转良好。' },
        { url: 'photos/photos_garden_2.png', title: '小朋友五感触摸观察植物根系', desc: '通过触觉和视觉感知气雾栽培和营养液循环下洁白的根系。' },
        { url: 'photos/photos_garden_3.png', title: '智能温室采摘与果实辨识', desc: '在讲师指导下采摘熟透的果蔬，体验劳动的甜美。' },
        { url: 'photos/dahz.png', title: '水韵农青农场风采展大合照', desc: '团队志愿者与参加活动的青少年及家长在现代农场大合影。' }
      ],
      video: {
        title: '【实拍视频】5G智慧农业：现代温室大棚黑科技实录',
        embed: '',
        url: 'videos/5g_smart_farm.mp4',
        tip: '实拍视频：展示5G物联网在现代蔬菜温室中的全自动化应用'
      },
      tweets: [
        {
          title: '【农场探秘】菜园奇遇记：现代农业黑科技与泥土香的奇妙碰撞',
          platform: '河海水韵农青公众号',
          date: '2024-05-18',
          url: 'https://mp.weixin.qq.com/',
          summary: '走进无土栽培智能温室，让孩子在触摸科技与自然中感受农业现代化的蓬勃生机。',
          cover: 'photos/photos_garden_1.png'
        }
      ],
      curriculum: [
        { step: '1', title: '五感唤醒：嗅泥土、观叶色、尝果蔬', content: '在专业讲师引导下观察温室作物生长环境，品尝有机新鲜果蔬。' },
        { step: '2', title: '智控解密：水肥光温的数字大脑', content: '操作小型物联网传感器，观察温度与湿度自动调控联动机制。' },
        { step: '3', title: '农耕初体验：亲手移栽一株菜苗', content: '学习起苗、定植、浇定根水的标准化农作技能。' }
      ],
      materials: ['水培幼苗与定植杯', '便携温湿度光照测试仪', '研学手账本', '采摘篮']
    },
    {
      id: 'act-10',
      type: 'chapter',
      chapterIndex: 4,
      category: '未来启新篇',
      categoryNo: '伍',
      categoryEn: 'A NEW CHAPTER FOR TOMORROW · 05',
      title: '「青苗『当』家」蔬菜市集体验营',
      subtitle: '真实农贸市集沉浸式职业体验 · 选菜品控与小小掌柜财商',
      targetAge: '适合 小学 2-6 年级 / 亲子家庭',
      cover: 'photos/IMG_5625.JPG',
      desc: '走出课堂，走向真实烟火人间！课程在南京兰园集贸市场等真实场景落地。孩子们变身“小小掌柜”，在真实市集里学习辨识蔬菜新鲜度、识别公平秤与防作弊铅封、核算进价与定价、接待真实市民顾客。配套完整的“选蔬菜与市集探秘”实拍视频，让财商、社会沟通与生活常识在充满欢声笑语的真实市集中生动萌芽。',
      highlights: ['双实拍视频配套', '真实农贸市场落地', '公平秤与蔬菜品控', '财商与沟通实战'],
      stats: '情景模拟 + 真实市集实训 · 满意度 99%',
      photos: [
        { url: 'photos/IMG_5625.JPG', title: '小小摊主开张营业', desc: '孩子们设计个性化蔬菜招牌，向顾客热情推介生态蔬菜。' },
        { url: 'photos/IMG_5622.JPG', title: '公平秤与计价算账实训', desc: '学习识别防作弊公平秤，精准计算找零与利润。' }
      ],
      video: {
        title: '【实拍视频】青苗当家：如何选蔬菜与市集掌柜实况',
        embed: '',
        url: 'videos/vegetables_pick.mp4',
        tip: '实拍教学视频：生动展示挑选新鲜蔬菜的标准技巧'
      },
      tweets: [
        {
          title: '【小小掌柜】青苗当家蔬菜市集：生活即教育，烟火皆学问',
          platform: '河海水韵农青公众号',
          date: '2024-05-19',
          url: 'https://mp.weixin.qq.com/',
          summary: '走出象牙塔，扎根生活圈。记录水韵农青小掌柜们的精彩成长足迹。',
          cover: 'photos/IMG_5625.JPG'
        }
      ],
      curriculum: [
        { step: '1', title: '蔬菜质检员：辨农残、分品级', content: '对照新鲜叶菜挑菜口诀，掌握常见根茎、瓜果类蔬菜保存小妙招。' },
        { step: '2', title: '财商小管家：成本定价与摊位布置', content: '规划进货单、绘制爆款推荐海报、学习使用公平秤精确称重。' },
        { step: '3', title: '市集大比拼：真实顾客沟通与销售复盘', content: '接待真实顾客，统计总营收与净利润，评选“金牌小掌柜”。' }
      ],
      materials: ['电子计价秤与托盘', '摊位招牌手绘板', '模拟与真实货币收银袋', '小小店长围裙']
    },

    /* ============================================================
       02 特色服务菜单课程 (22 项)
       ============================================================ */
    {
      id: 'menu-01',
      type: 'menu',
      menuNo: 1,
      category: '科创农野',
      categoryNo: '壹',
      categoryEn: 'SCIENCE · SOIL · GRAIN',
      title: '「土壤医生」农田土壤修复与双碳科普',
      subtitle: 'CLEER 杯全国二等奖项目进课堂',
      targetAge: '适合 8-12 岁',
      cover: 'photos/IMG_5612.JPG',
      desc: '以《农田土壤污染修复装置》科研项目为原型，带孩子们认识土壤团粒结构、理解农田固碳减排与双碳战略，听懂土地的健康密码。',
      highlights: ['科研进课堂', '双碳战略', '土壤修复', '动手实验'],
      stats: '精品成熟课程 · 随时开放点单',
      photos: [
        { url: 'photos/IMG_5612.JPG', title: '土壤修复微型模型演示', desc: '模拟重金属淋洗与微生物固碳过程。' },
        { url: 'photos/IMG_5614.JPG', title: '土壤酸碱度测试', desc: '观察土壤健康试纸反应。' }
      ],
      video: { title: '土壤修复科普实录', embed: '', url: '', tip: '视频' },
      tweets: [{ title: '【课程专栏】土壤医生农田修复方案深度解读', platform: '河海水韵农青', date: '2024-05-20', url: 'https://mp.weixin.qq.com/', summary: '把高校实验室前沿技术拆解为孩子们听得懂的科普实验。', cover: 'photos/IMG_5612.JPG' }],
      curriculum: [{ step: '1', title: '土壤为什么会生病', content: '重金属污染与土壤酸化成因分析。' }, { step: '2', title: '科技如何给土壤治病', content: '物理吸附与生态改良工法。' }],
      materials: ['土壤样品盒', '酸碱指示剂', '实验手套']
    },
    {
      id: 'menu-02',
      type: 'menu',
      menuNo: 2,
      category: '科创农野',
      categoryNo: '壹',
      categoryEn: 'SCIENCE · SOIL · GRAIN',
      title: '「咫尺青绿——清源讲堂」土壤微塑料系列课',
      subtitle: '学科前沿 · 清源系列合作课程',
      targetAge: '适合 中学生 / 小学高年级',
      cover: 'photos/IMG_5619.JPG',
      desc: '7 天系列课程聚焦土壤微塑料、水环境污染与碳汇等国际研究热点，让前沿环境议题在每间课堂里开出思辨讲台。',
      highlights: ['中学生专课', '7天系列课', '环境思辨', '课题式学习'],
      stats: '清源讲堂合作品牌课',
      photos: [
        { url: 'photos/IMG_5619.JPG', title: '微塑料前沿讲座现场', desc: '图解微塑料生态圈迁移路径。' },
        { url: 'photos/IMG_5621.JPG', title: '显微镜下辨识塑料微粒', desc: '高倍镜观察微塑料形态。' }
      ],
      video: { title: '微塑料科普', embed: '', url: '', tip: '' },
      tweets: [{ title: '【清源讲堂】微塑料治理的青年责任', platform: '河海水韵农青', date: '2024-04-22', url: 'https://mp.weixin.qq.com/', summary: '解读土壤微塑料检测前沿。', cover: 'photos/IMG_5619.JPG' }],
      curriculum: [{ step: '1', title: '前沿聚焦', content: '微塑料概念与检测手段。' }, { step: '2', title: '综合治理', content: '生物降解材料研发趋势。' }],
      materials: ['微塑料显微标本', '思辨讨论手册']
    },
    {
      id: 'menu-03',
      type: 'menu',
      menuNo: 3,
      category: '科创农野',
      categoryNo: '壹',
      categoryEn: 'SCIENCE · SOIL · GRAIN',
      title: '「寻觅自然疗愈」植物拓印研学营',
      subtitle: '非遗手作 · 站内 + 游学双模式',
      targetAge: '适合 全龄家庭',
      cover: 'photos/IMG_5624.JPG',
      desc: '用小锤敲出花叶脉络，在非遗植物拓印中亲近自然、疗愈身心，曾服务 35 组家庭，支持场馆与户外双向定制。',
      highlights: ['非遗传承', '亲子互动', '自然美育', '文创手作'],
      stats: '已服务 35+ 组家庭 · 爆款好评课程',
      photos: [
        { url: 'photos/IMG_5624.JPG', title: '植物拓印现场实操', desc: '敲打定格大自然纹理。' },
        { url: 'photos/IMG_5622.JPG', title: '植物标本比对', desc: '认识不同叶脉结构。' }
      ],
      video: { title: '植物拓印教学', embed: '', url: '', tip: '' },
      tweets: [{ title: '【非遗研学】把春色敲进帆布包', platform: '河海水韵农青', date: '2024-05-12', url: 'https://mp.weixin.qq.com/', summary: '植物拓印亲子活动全程回顾。', cover: 'photos/IMG_5624.JPG' }],
      curriculum: [{ step: '1', title: '辨识植物叶脉', content: '采集与观察不同形态叶片。' }, { step: '2', title: '手作拓印体验', content: '敲击固定植物天然色素。' }],
      materials: ['纯棉帆布袋', '拓印木槌', '吸水纸']
    },
    {
      id: 'menu-04',
      type: 'menu',
      menuNo: 4,
      category: '科创农野',
      categoryNo: '壹',
      categoryEn: 'SCIENCE · SOIL · GRAIN',
      title: '「秸秆变形记」稻草人闯关嘉年华',
      subtitle: '废弃农作物科普 · 南京九中科技节同款',
      targetAge: '适合 中小学全龄',
      cover: 'photos/photos_straw_jiuzhong_1.jpg',
      desc: '科普展板 + 农业知识大闯关 + 稻秆稻草人手作，让废弃秸秆在指尖「焕新生」、变宝藏，曾作为南京九中科技节精品展区亮相。',
      highlights: ['科技节同款', '嘉年华闯关', '变废为宝', '手作创意'],
      stats: '南京九中科技节特邀同款项目',
      photos: [
        { url: 'photos/photos_straw_jiuzhong_1.jpg', title: '科技节展区现场全景', desc: '九中学子热烈参与秸秆闯关。' },
        { url: 'photos/photos_straw_jiuzhong_2.jpg', title: '学生现场编制稻草人', desc: '学习秸秆捆扎技巧。' },
        { url: 'photos/photos_straw_61_1.jpg', title: '社区亲子环保摆摊', desc: '向家庭普及秸秆环保知识。' }
      ],
      video: {
        title: '【实录】生态农场废弃秸秆循环视频',
        embed: '',
        url: 'videos/straw_chicken_farm.mp4',
        tip: '农场循环利用实景视频'
      },
      tweets: [{ title: '【科技节专场】秸秆变形记：科技赋能绿色农业', platform: '河海水韵农青', date: '2023-11-15', url: 'https://mp.weixin.qq.com/', summary: '走进南京九中科技节，见证废弃农作物焕发新生。', cover: 'photos/photos_straw_jiuzhong_1.jpg' }],
      curriculum: [{ step: '1', title: '秸秆综合利用知识闯关', content: '农业环保展板竞答。' }, { step: '2', title: '微型稻草人手工搭建', content: '组装编制特色稻草人文创。' }],
      materials: ['处理秸秆', '绑扎线', '答题卡']
    },
    {
      id: 'menu-05',
      type: 'menu',
      menuNo: 5,
      category: '水润江河',
      categoryNo: '贰',
      categoryEn: 'WATER · RIVERS · PEOPLE',
      title: '「大国水利」水利枢纽工程科普',
      subtitle: '纪录片 + 实物模型 + 抢答 + 绘制',
      targetAge: '适合 10-15 岁',
      cover: 'photos/IMG_5834.PNG',
      desc: '重点介绍三峡、葛洲坝、小浪底等国家重大水利枢纽工程，带孩子看懂大国重器如何安澜江河一方水土，并绘制自己心中的生态水库。',
      highlights: ['大国重器', '水利科普', '模型搭建', '工程启蒙'],
      stats: '河海特色王牌水利课程',
      photos: [
        { url: 'photos/IMG_5834.PNG', title: '水利工程沙盘展示', desc: '讲解大坝泄洪与发电系统。' },
        { url: 'photos/photos_pi_tingke.png', title: '学员聚精会神聆听大坝历史', desc: '解析水利大坝结构受力。' }
      ],
      video: { title: '大国重器水利科普', embed: '', url: '', tip: '' },
      tweets: [{ title: '【水润江河】大国水利：安澜江河的中国智慧', platform: '河海水韵农青', date: '2024-03-22', url: 'https://mp.weixin.qq.com/', summary: '揭秘小浪底排沙与三峡防洪的科学奥秘。', cover: 'photos/IMG_5834.PNG' }],
      curriculum: [{ step: '1', title: '为什么修水库', content: '讲解调峰蓄洪与发电灌溉功能。' }, { step: '2', title: '动手画水利枢纽', content: '设计心目中的智慧生态大坝。' }],
      materials: ['大坝模型', '画纸彩笔', '工程图纸样本']
    },
    {
      id: 'menu-06',
      type: 'menu',
      menuNo: 6,
      category: '水润江河',
      categoryNo: '贰',
      categoryEn: 'WATER · RIVERS · PEOPLE',
      title: '「人间天河淠史杭」精神讲座与历史剧展演',
      subtitle: '《佛子岭大学》红色情景剧',
      targetAge: '适合 全龄学生 / 党团组织',
      cover: 'photos/IMG_5833.PNG',
      desc: '重现河海知名校友汪胡桢领导修建佛子岭水库的往事，将红色治水历史转化为生动情景剧与图文微党课，让淠史杭精神在舞台上立起坐标。',
      highlights: ['党团共建', '情景短剧', '红色文化', '治水精神'],
      stats: '优秀暑期实践获奖转化项目',
      photos: [
        { url: 'photos/IMG_5833.PNG', title: '情景剧巡演排练', desc: '生动再现水利筑坝场景。' },
        { url: 'photos/photos_pi_jiangkê.png', title: '主讲人深情宣讲汪胡桢事迹', desc: '诠释老一辈河海水利人奉献精神。' },
        { url: 'photos/photos_pi_hezao.png', title: '宣讲团队大合照', desc: '全体演职人员与听众合影留念。' }
      ],
      video: { title: '淠史杭精神宣讲选段', embed: '', url: '', tip: '' },
      tweets: [{ title: '【红色宣讲】人间天河淠史杭：青春共筑水利魂', platform: '河海水韵农青', date: '2024-05-18', url: 'https://mp.weixin.qq.com/', summary: '情景剧《佛子岭大学》带你重温峥嵘岁月。', cover: 'photos/IMG_5833.PNG' }],
      curriculum: [{ step: '1', title: '历史宣讲', content: '淠史杭灌区工程史诗。' }, { step: '2', title: '短剧品鉴', content: '沉浸式情景诵读互动。' }],
      materials: ['剧本台词卡', '历史图文折页']
    },
    {
      id: 'menu-07',
      type: 'menu',
      menuNo: 7,
      category: '水润江河',
      categoryNo: '贰',
      categoryEn: 'WATER · RIVERS · PEOPLE',
      title: '「中国水周 · 世界水日」系列',
      subtitle: '手抄报征集 + 水知识竞赛',
      targetAge: '适合 高校 / 中小学校园',
      cover: 'photos/IMG_5616.JPG',
      desc: '在每年 3 月 22 日“世界水日”与“中国水周”期间，以手抄报征集、节水倡议快闪与水知识竞答等多元形式，把珍惜水资源理念深植人心。',
      highlights: ['水日主题', '知识竞答', '节水行动', '全校联动'],
      stats: '年度固定主题品牌活动',
      photos: [
        { url: 'photos/IMG_5616.JPG', title: '水知识抢答赛', desc: '积极参与水资源常识抢答。' },
        { url: 'photos/photos_jieshui_1.jpg', title: '节水园区青年志愿服务', desc: '志愿者向市民讲解校园节水设施。' }
      ],
      video: { title: '世界水日节水宣传片', embed: '', url: '', tip: '' },
      tweets: [{ title: '【世界水日】精打细算用好水资源，从一滴水做起', platform: '河海水韵农青', date: '2024-03-22', url: 'https://mp.weixin.qq.com/', summary: '中国水周主题活动全记录。', cover: 'photos/IMG_5616.JPG' }],
      curriculum: [{ step: '1', title: '水资源现状宣讲', content: '全球与我国水资源时空分布。' }, { step: '2', title: '节水妙招大比拼', content: '日常家庭与校园节水金点子。' }],
      materials: ['水资源科普展架', '节水文创徽章', '手抄报画纸']
    },
    {
      id: 'menu-08',
      type: 'menu',
      menuNo: 8,
      category: '水润江河',
      categoryNo: '贰',
      categoryEn: 'WATER · RIVERS · PEOPLE',
      title: '「水能之光」抽水蓄能与绿色电力',
      subtitle: '绿色水电 · 储能黑科技',
      targetAge: '适合 10-16 岁',
      cover: 'photos/IMG_5831(20240526-230008).JPG',
      desc: '水不仅能灌溉，还是巨型“充电宝”！解析抽水蓄能电站如何削峰填谷，用生动模型演示水力发电全流程。',
      highlights: ['绿色电力', '抽水蓄能', '储能科技', '物理实验'],
      stats: '研发打磨中课程 · 支持提前预订',
      photos: [
        { url: 'photos/IMG_5831(20240526-230008).JPG', title: '水力发电小模型', desc: '水流带动微型发电机点亮 LED。' }
      ],
      video: { title: '抽水蓄能电站工作原理', embed: '', url: '', tip: '' },
      tweets: [{ title: '【水电科普】水力发电怎样点亮千家万户', platform: '河海水韵农青', date: '2024-06-01', url: 'https://mp.weixin.qq.com/', summary: '走进绿色水能的广阔世界。', cover: 'photos/IMG_5831(20240526-230008).JPG' }],
      curriculum: [{ step: '1', title: '重力势能到电能', content: '水轮机运转原理解析。' }, { step: '2', title: '抽水蓄能超级充电宝', content: '电网调峰调频机制。' }],
      materials: ['微型水力发电机套件', 'LED指示灯']
    },
    {
      id: 'menu-09',
      type: 'menu',
      menuNo: 9,
      category: '趣玩实验',
      categoryNo: '叁',
      categoryEn: 'HANDS-ON SCIENCE LAB',
      title: '「水运」物理系列科普实验',
      subtitle: '大气压 · 流体压强 · 伯努利浮球',
      targetAge: '适合 1-3 年级',
      cover: 'photos/photos_exp_1.jpg',
      desc: '水下喷发、火焰吸水、伯努利浮球……主讲生动演示+孩子亲自动手，用安全有趣的小实验开启物理启蒙的大门。',
      highlights: ['趣味实验', '物理启蒙', '低龄友好', '亲手验证'],
      stats: '低年级最受喜爱实验课',
      photos: [
        { url: 'photos/photos_exp_1.jpg', title: '流体压强实验演示', desc: '志愿者向小学生展示乒乓球悬浮在气流中。' },
        { url: 'photos/photos_exp_2.jpg', title: '小朋友亲自动手操作', desc: '孩子们轮流体验大气压强覆杯实验。' }
      ],
      video: { title: '趣味物理小实验集锦', embed: '', url: '', tip: '' },
      tweets: [{ title: '【趣玩科学】风的秘密：神奇的伯努利效应', platform: '河海水韵农青', date: '2024-05-18', url: 'https://mp.weixin.qq.com/', summary: '5.18 科技馆专场实验课精彩花絮。', cover: 'photos/photos_exp_1.jpg' }],
      curriculum: [{ step: '1', title: '覆杯实验：看不见的大气压', content: '一张纸片托住满满一杯水。' }, { step: '2', title: '伯努利乐园：吹不跑的乒乓球', content: '体验流速越快、压强越小。' }],
      materials: ['实验量杯', '乒乓球与导管', '安全色素']
    },
    {
      id: 'menu-10',
      type: 'menu',
      menuNo: 10,
      category: '趣玩实验',
      categoryNo: '叁',
      categoryEn: 'HANDS-ON SCIENCE LAB',
      title: '「翱翔之翼 · 让火箭飞」水火箭设计与发射',
      subtitle: '气球火箭 · 火箭力学 · 空气动力学',
      targetAge: '适合 4-12 岁',
      cover: 'photos/IMG_5632.JPG',
      desc: '亲手组装、调试、加压、发射水火箭，在户外操场的欢呼声中把牛顿力学与空气动力学真正“打上天空”。',
      highlights: ['户外实操', '水火箭发射', '力学启蒙', '亲子PK'],
      stats: '户外活动标配爆款 · 200+ 家庭参与',
      photos: [
        { url: 'photos/IMG_5632.JPG', title: '水火箭发射瞬间', desc: '喷水升空数十米高。' },
        { url: 'photos/IMG_5635.JPG', title: '组装舱体与配重', desc: '调整火箭平衡重心。' }
      ],
      video: { title: '水火箭发射实录', embed: '', url: '', tip: '' },
      tweets: [{ title: '【航天科普】水火箭腾空：点燃孩子的科学梦', platform: '河海水韵农青', date: '2024-05-25', url: 'https://mp.weixin.qq.com/', summary: '记录每一次精彩倒计时与发射。', cover: 'photos/IMG_5632.JPG' }],
      curriculum: [{ step: '1', title: '火箭结构与尾翼调平', content: '安装整流罩与减震舱。' }, { step: '2', title: '气压加注与安全发射', content: '调节水量与气压值。' }],
      materials: ['水火箭套件', '高压气筒', '安全护目镜']
    },
    {
      id: 'menu-11',
      type: 'menu',
      menuNo: 11,
      category: '趣玩实验',
      categoryNo: '叁',
      categoryEn: 'HANDS-ON SCIENCE LAB',
      title: '「车来车往」汽车技术发展史探索之旅',
      subtitle: '从木牛流马到无人驾驶',
      targetAge: '适合 10-15 岁',
      cover: 'photos/IMG_5635.JPG',
      desc: '以汽车为切入口看人类科技文明演进：辨车标、讲内燃机与电动车原理、畅想设计未来的智能无人驾驶汽车。',
      highlights: ['智能汽车', '文明史话', '未来设计', '机械启蒙'],
      stats: '工科特色精品课',
      photos: [{ url: 'photos/IMG_5635.JPG', title: '汽车动力系统图解', desc: '讲解齿轮差速器与电驱构造。' }],
      video: { title: '未来汽车技术展望', embed: '', url: '', tip: '' },
      tweets: [{ title: '【科技探索】车来车往：轮子上的科技革命', platform: '河海水韵农青', date: '2024-05-10', url: 'https://mp.weixin.qq.com/', summary: '从蒸汽机车到智能网联汽车的探索之旅。', cover: 'photos/IMG_5635.JPG' }],
      curriculum: [{ step: '1', title: '轮子的故事', content: '人类交通工具演进史。' }, { step: '2', title: '新能源与无人驾驶', content: '雷达传感与算法决策初识。' }],
      materials: ['汽车模型套件', '未来概念车绘图纸']
    },
    {
      id: 'menu-12',
      type: 'menu',
      menuNo: 12,
      category: '趣玩实验',
      categoryNo: '叁',
      categoryEn: 'HANDS-ON SCIENCE LAB',
      title: '「光影魔法」光学棱镜与色彩解密',
      subtitle: '光的折射 · 色散 · 彩虹实验室',
      targetAge: '适合 6-12 岁',
      cover: 'photos/IMG_5614.JPG',
      desc: '用三棱镜分解白光，制作潜望镜与全息投影小装置，在光学奇境中发现光线的折射、反射与全反射奥秘。',
      highlights: ['光学实验', '全息投影', '色彩解密', '动手做教具'],
      stats: '新课试讲中 · 敬请期待',
      photos: [{ url: 'photos/IMG_5614.JPG', title: '三棱镜色散实验', desc: '折射出七色光谱。' }],
      video: { title: '光学小实验', embed: '', url: '', tip: '' },
      tweets: [{ title: '【光学世界】用一束光点亮好奇心', platform: '河海水韵农青', date: '2024-06-05', url: 'https://mp.weixin.qq.com/', summary: '解密彩虹与光的波长。', cover: 'photos/IMG_5614.JPG' }],
      curriculum: [{ step: '1', title: '白光变彩虹', content: '三棱镜折射与色散。' }, { step: '2', title: '简易潜望镜制作', content: '双面镜反射光路组装。' }],
      materials: ['三棱镜', '潜望镜卡纸套件', '激光指示笔']
    },
    {
      id: 'menu-13',
      type: 'menu',
      menuNo: 13,
      category: '绿色未来',
      categoryNo: '肆',
      categoryEn: 'GREEN · CARBON · LIFE',
      title: '「峰回路转 · 共碳未来」碳迹迷踪',
      subtitle: '碳达峰 · 碳中和 · 垃圾分类团战',
      targetAge: '适合 4-8 岁',
      cover: 'photos/IMG_5621.JPG',
      desc: '画环保许愿小树、晒日常节能妙招，再分组玩垃圾分类大作战，用趣味积分制让低碳环保的种子在幼小心灵中生根发芽。',
      highlights: ['双碳科普', '垃圾分类', '积分团战', '幼小衔接'],
      stats: '社区与幼儿园热门定制课',
      photos: [{ url: 'photos/IMG_5621.JPG', title: '垃圾分类沙盘游戏', desc: '快速投递各类生活垃圾卡片。' }],
      video: { title: '碳达峰碳中和趣味动画', embed: '', url: '', tip: '' },
      tweets: [{ title: '【低碳生活】碳迹迷踪：做地球的绿色小卫士', platform: '河海水韵农青', date: '2024-04-20', url: 'https://mp.weixin.qq.com/', summary: '垃圾分类大闯关精彩瞬间。', cover: 'photos/IMG_5621.JPG' }],
      curriculum: [{ step: '1', title: '什么是碳足迹', content: '计算日常吃穿住行的碳排放。' }, { step: '2', title: '四分类大团战', content: '可回收与厨余垃圾精准投放比拼。' }],
      materials: ['分类小垃圾桶道具', '积分卡纸', '低碳卫士贴纸']
    },
    {
      id: 'menu-14',
      type: 'menu',
      menuNo: 14,
      category: '绿色未来',
      categoryNo: '肆',
      categoryEn: 'GREEN · CARBON · LIFE',
      title: '「它们与我们」动物多样性科普之旅',
      subtitle: '问卷闯关 · 知识竞赛 · 动物自画像',
      targetAge: '适合 小学 4-6 年级',
      cover: 'photos/IMG_5624.JPG',
      desc: '从珍稀野生动物习性聊到人与自然和谐共生，在动物自画像与生态链拼图中看见孩子心里的生灵伙伴。',
      highlights: ['生物多样性', '生态保护', '知识竞赛', '生命教育'],
      stats: '生动有趣的生态科普课',
      photos: [{ url: 'photos/IMG_5624.JPG', title: '生态链条拼图竞赛', desc: '还原森林与湿地食物链。' }],
      video: { title: '生物多样性保护公益片', embed: '', url: '', tip: '' },
      tweets: [{ title: '【生物多样性】它们与我们：守护地球生灵之美', platform: '河海水韵农青', date: '2024-05-22', url: 'https://mp.weixin.qq.com/', summary: '国际生物多样性日主题课堂。', cover: 'photos/IMG_5624.JPG' }],
      curriculum: [{ step: '1', title: '神奇的物种朋友圈', content: '长江江豚、朱鹮等珍稀物种介绍。' }, { step: '2', title: '生态链平衡演练', content: '食物网破坏模拟实验。' }],
      materials: ['动物百科图卡', '自画像画板', '生态链积木']
    },
    {
      id: 'menu-15',
      type: 'menu',
      menuNo: 15,
      category: '绿色未来',
      categoryNo: '肆',
      categoryEn: 'GREEN · CARBON · LIFE',
      title: '「OTNPW」核污水知识地图寻宝',
      subtitle: '剧本驱动 · 游戏化学习',
      targetAge: '适合 校内外试点',
      cover: 'photos/IMG_5831(20240526-230008).JPG',
      desc: '以原创剧情驱动解密任务，在校园地图寻物中传递核安全、洋流扩散与海洋环保知识，把「要学的」变成「想玩的」。',
      highlights: ['实景寻宝', '原创剧本', '海洋保护', '团队合作'],
      stats: '高参与度原创实景游戏',
      photos: [{ url: 'photos/IMG_5831(20240526-230008).JPG', title: '地图寻宝解密', desc: '按坐标寻找加密提示。' }],
      video: { title: 'OTNPW 寻宝游戏短片', embed: '', url: '', tip: '' },
      tweets: [{ title: '【沉浸研学】OTNPW 实景解密：守护蔚蓝海洋', platform: '河海水韵农青', date: '2024-05-30', url: 'https://mp.weixin.qq.com/', summary: '环保实景剧本杀精彩回顾。', cover: 'photos/IMG_5831(20240526-230008).JPG' }],
      curriculum: [{ step: '1', title: '危机密电解析', content: '学习核素半衰期与洋流模型。' }, { step: '2', title: '破解净化密码', content: '团队协同通关各打卡点。' }],
      materials: ['寻宝地图', '密码道具', '通关勋章']
    },
    {
      id: 'menu-16',
      type: 'menu',
      menuNo: 16,
      category: '绿色未来',
      categoryNo: '肆',
      categoryEn: 'GREEN · CARBON · LIFE',
      title: '「蔚蓝卫士」水质监测小侦探',
      subtitle: '便携水质笔 · 溶解氧与浊度检测',
      targetAge: '适合 8-14 岁',
      cover: 'photos/IMG_5616.JPG',
      desc: '化身水质检验员，采集校园人工湖与自来水样品，亲手测定 TDS、pH 与溶解氧，读懂水清岸绿背后的指标。',
      highlights: ['水质检测', '科学探究', '户外采样', '环保意识'],
      stats: '水利环境特色实验',
      photos: [{ url: 'photos/IMG_5616.JPG', title: '水质检测实验操作', desc: '记录不同水样的 TDS 读数。' }],
      video: { title: '水环境监测小科普', embed: '', url: '', tip: '' },
      tweets: [{ title: '【生态水利】水质小侦探：让每一条河流清澈见底', platform: '河海水韵农青', date: '2024-06-08', url: 'https://mp.weixin.qq.com/', summary: '实地水质检测实践课。', cover: 'photos/IMG_5616.JPG' }],
      curriculum: [{ step: '1', title: '水质五项指标', content: 'TDS、浊度、pH与余氯。' }, { step: '2', title: '动手水质净化', content: '简易多层砂滤装置制作。' }],
      materials: ['TDS检测笔', '比色卡', '砂滤净化套件']
    },
    {
      id: 'menu-17',
      type: 'menu',
      menuNo: 17,
      category: '烟火城乡',
      categoryNo: '伍',
      categoryEn: 'FROM SOIL TO MARKET',
      title: '「菜摊管家」农产品流通研学营',
      subtitle: '科普小课堂 + 小小摊主 · 兰园农贸市场',
      targetAge: '适合 学生家庭',
      cover: 'photos/IMG_5625.JPG',
      desc: '蔬菜辨认闯关、价格解密、公平秤安全课，再亲手开张当摊主，完成从产地采摘到市集交易的完整闭环，已在兰园集贸市场成功落地。',
      highlights: ['真实市集', '财商体验', '农贸流通', '产销闭环'],
      stats: '兰园集贸市场定点合作项目',
      photos: [
        { url: 'photos/IMG_5625.JPG', title: '菜摊管家开市营业', desc: '孩子们在兰园市场体验售卖。' },
        { url: 'photos/IMG_5622.JPG', title: '公平秤称重实操', desc: '核算蔬菜重量与价格。' }
      ],
      video: {
        title: '【实录】小小掌柜选蔬菜技巧教学',
        embed: '',
        url: 'videos/vegetables_pick.mp4',
        tip: '实拍视频：蔬菜辨识与挑选'
      },
      tweets: [{ title: '【市集研学】菜摊管家：在人间烟火中读懂生活', platform: '河海水韵农青', date: '2024-05-19', url: 'https://mp.weixin.qq.com/', summary: '兰园集贸市场研学营圆满举办。', cover: 'photos/IMG_5625.JPG' }],
      curriculum: [{ step: '1', title: '农产品产销链', content: '田头到餐桌的冷链物流。' }, { step: '2', title: '小小掌柜实训', content: '称重结算与顾客沟通。' }],
      materials: ['围裙', '记账板', '果蔬辨识手册']
    },
    {
      id: 'menu-18',
      type: 'menu',
      menuNo: 18,
      category: '烟火城乡',
      categoryNo: '伍',
      categoryEn: 'FROM SOIL TO MARKET',
      title: '「水稻创意」指尖生趣 · 一粒米的旅程',
      subtitle: '水稻成长转盘手作',
      targetAge: '适合 学生家庭',
      cover: 'photos/IMG_5835.PNG',
      desc: '从一粒米说起，转动「水稻的一生」时间转盘，亲手体验稻谷脱壳与碾米，在指尖趣味中读懂「谁知盘中餐」的农业逻辑。',
      highlights: ['节约粮食', '农耕文化', '动手体验', '时间转盘'],
      stats: '传统耕读经典手作课',
      photos: [{ url: 'photos/IMG_5835.PNG', title: '水稻转盘手作成果', desc: '孩子们展示手绘转盘。' }],
      video: { title: '一粒米的旅程', embed: '', url: '', tip: '' },
      tweets: [{ title: '【耕读润心】指尖生趣：水稻的一生有几步？', platform: '河海水韵农青', date: '2024-04-15', url: 'https://mp.weixin.qq.com/', summary: '水稻科普体验课花絮。', cover: 'photos/IMG_5835.PNG' }],
      curriculum: [{ step: '1', title: '水稻生长图谱', content: '秧苗到金黄稻穗的周期。' }, { step: '2', title: '旋转教具组装', content: '制作可旋转科普转盘。' }],
      materials: ['转盘卡纸', '稻穗标本', '工字钉']
    },
    {
      id: 'menu-19',
      type: 'menu',
      menuNo: 19,
      category: '烟火城乡',
      categoryNo: '伍',
      categoryEn: 'FROM SOIL TO MARKET',
      title: '「菜园奇遇记」现代农场探秘',
      subtitle: '科技 + 农耕 · 五感体验式教育',
      targetAge: '适合 中小学',
      cover: 'photos/photos_garden_1.png',
      desc: '把课堂搬进现代农场，用五感体验串联科技与农耕，探索无土栽培、滴灌与温室物联，让每一次「奇遇」都成为认知世界的起点。',
      highlights: ['现代农场', '五感探秘', '智慧农业', '实践基地'],
      stats: '农场实践基地常设课程',
      photos: [
        { url: 'photos/photos_garden_1.png', title: '智慧农业现代温室', desc: '整齐的无土水培立柱。' },
        { url: 'photos/photos_garden_2.png', title: '小朋友近距离接触植物', desc: '触摸体验植物根系。' },
        { url: 'photos/dahz.png', title: '农场研学大合照', desc: '志愿者与学员合影。' }
      ],
      video: {
        title: '【实录】5G智慧农业温室大棚实况',
        embed: '',
        url: 'videos/5g_smart_farm.mp4',
        tip: '实拍视频：现代温室智慧农业'
      },
      tweets: [{ title: '【农场研学】菜园奇遇记：现代农业如此奇妙', platform: '河海水韵农青', date: '2024-05-18', url: 'https://mp.weixin.qq.com/', summary: '走进智慧温室大棚。', cover: 'photos/photos_garden_1.png' }],
      curriculum: [{ step: '1', title: '智能温室大揭秘', content: '自动水肥与光照调控。' }, { step: '2', title: '农场五感观察笔记', content: '绘制农场研学植物档案。' }],
      materials: ['研学手册', '采摘袋', '植物贴纸']
    },
    {
      id: 'menu-20',
      type: 'menu',
      menuNo: 20,
      category: '烟火城乡',
      categoryNo: '伍',
      categoryEn: 'FROM SOIL TO MARKET',
      title: '「节气田野」二十四节气与农事智慧',
      subtitle: '古法农耕 · 节气与气候变化',
      targetAge: '适合 6-12 岁',
      cover: 'photos/IMG_5622.JPG',
      desc: '春分麦起身，秋分稻谷香。通过节气时钟与应季作物日历，品味中华传统农耕文明中的天人合一智慧。',
      highlights: ['二十四节气', '农耕智慧', '节气美育', '气候科普'],
      stats: '国风传统文化科普课',
      photos: [{ url: 'photos/IMG_5622.JPG', title: '节气日历制作', desc: '拼装二十四节气时钟。' }],
      video: { title: '二十四节气里的中国智慧', embed: '', url: '', tip: '' },
      tweets: [{ title: '【节气科普】跟着节气去耕种：中国人的时间美学', platform: '河海水韵农青', date: '2024-03-20', url: 'https://mp.weixin.qq.com/', summary: '春分节气农事体验课。', cover: 'photos/IMG_5622.JPG' }],
      curriculum: [{ step: '1', title: '太阳与节气', content: '黄道运行与气候变化。' }, { step: '2', title: '节气物候转盘', content: '动手拼插节气农事钟。' }],
      materials: ['节气时钟卡纸', '古诗词配图卡']
    },
    {
      id: 'menu-21',
      type: 'menu',
      menuNo: 21,
      category: '场馆联展 · 专属定制',
      categoryNo: '拼',
      categoryEn: 'VENUE JOINT · CUSTOM-MADE',
      title: '「章上河海」江苏省科技馆集章挑战',
      subtitle: '多学院联展 · 集章换文创',
      targetAge: '适合 场馆散客 / 青少年',
      cover: 'photos/photos_kjg_talk_1.jpg',
      desc: '散落场馆各处的科普摊位连成一条趣味闯关线，集齐河海特色印章即可兑换文创礼品——江苏省科技馆常态化合作样板项目。',
      highlights: ['集章打卡', '科技馆合作', '多学院联展', '文创激励'],
      stats: '江苏省科技馆驻馆合作品牌项目',
      photos: [
        { url: 'photos/photos_kjg_talk_1.jpg', title: '江苏省科技馆来院座谈会', desc: '科技馆展教部负责人与院团委交流座谈。' },
        { url: 'photos/photos_kjg_talk_2.jpg', title: '科技馆驻馆讲解交流现场', desc: '共建“一馆多校”大思政育人阵地。' },
        { url: 'photos/photos_zhaoxin_cert.png', title: '全国科技志愿示范团队证书', desc: '全国优秀示范团队荣誉认证。' }
      ],
      video: { title: '科技馆志愿服务风采展', embed: '', url: '', tip: '' },
      tweets: [{ title: '【场馆快讯】章上河海：科技馆里的志愿青春印记', platform: '河海水韵农青', date: '2024-05-18', url: 'https://mp.weixin.qq.com/', summary: '江苏省科技馆河海风采展圆满落幕。', cover: 'photos/photos_kjg_talk_1.jpg' }],
      curriculum: [{ step: '1', title: '任务通关手册', content: '按展区完成 4 个科学挑战。' }, { step: '2', title: '特制印章兑换', content: '兑换水韵农青专属文创纪念品。' }],
      materials: ['集章护照折页', '特制印章', '文创贴纸']
    },
    {
      id: 'menu-22',
      type: 'menu',
      menuNo: 22,
      category: '场馆联展 · 专属定制',
      categoryNo: '拼',
      categoryEn: 'VENUE JOINT · CUSTOM-MADE',
      title: '幼儿启蒙定制系列',
      subtitle: '防踩踏安全安全课 · 气球火箭 · 小水滴绘本',
      targetAge: '适合 幼儿园大班',
      cover: 'photos/photos_safe_1.jpeg',
      desc: '为幼儿园大班量身组合的安全自护与实验微课包，包括校园防踩踏自我保护技能、小水滴探险绘本与气球火箭，难度、时长、材料按班级量身设计，已与河海大学幼儿园等单位稳定对接。',
      highlights: ['幼儿园定制', '防踩踏安全自护', '短小生动', '直观体验'],
      stats: '已与河海大学幼儿园等定点对接',
      photos: [
        { url: 'photos/photos_safe_1.jpeg', title: '幼儿防踩踏安全演练', desc: '指导幼儿园小朋友学会双手抱头、弓腰自护姿态。' },
        { url: 'photos/photos_safe_2.jpeg', title: '安全互动问答现场', desc: '用生动卡通展板向小朋友讲解排队与避险常识。' },
        { url: 'photos/IMG_5632.JPG', title: '幼儿园启蒙气球小火箭', desc: '指导小朋友放飞小气球火箭。' }
      ],
      video: { title: '幼儿科普实验花絮', embed: '', url: '', tip: '' },
      tweets: [{ title: '【童心探秘】水韵农青走进幼儿园：播撒第一颗科学种子', platform: '河海水韵农青', date: '2024-04-10', url: 'https://mp.weixin.qq.com/', summary: '生动有趣的幼儿启蒙微课堂。', cover: 'photos/photos_safe_1.jpeg' }],
      curriculum: [{ step: '1', title: '安全自护大口诀', content: '不推不挤，双手护头避险动作演练。' }, { step: '2', title: '气球火箭放飞', content: '体验充气反冲的科学小魔法。' }],
      materials: ['安全自护卡通图卡', '气球火箭材料包', '奖励小红花']
    }
    ];

    acts.forEach(function(a) {
      if (!a.visibleSections) {
        a.visibleSections = { photos: true, video: true, tweets: true, curriculum: true };
      }
    });
    return acts;
  })();

  /* ---------------- 数据存取 API ---------------- */
  var WaterYouthData = {
    getAll: function () {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          var parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {
        console.warn('读取 LocalStorage 数据失败，使用默认数据:', e);
      }
      return JSON.parse(JSON.stringify(DEFAULT_ACTIVITIES));
    },

    getById: function (id) {
      var all = this.getAll();
      for (var i = 0; i < all.length; i++) {
        if (all[i].id === id) return all[i];
      }
      return null;
    },

    saveAll: function (list) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        return true;
      } catch (e) {
        console.error('保存数据到 LocalStorage 失败:', e);
        return false;
      }
    },

    save: function (item) {
      if (!item || !item.id) return false;
      if (!item.visibleSections) {
        item.visibleSections = { photos: true, video: true, tweets: true, curriculum: true };
      }
      var all = this.getAll();
      var found = false;
      for (var i = 0; i < all.length; i++) {
        if (all[i].id === item.id) {
          all[i] = item;
          found = true;
          break;
        }
      }
      if (!found) all.push(item);
      return this.saveAll(all);
    },

    delete: function (id) {
      var all = this.getAll();
      var initialLen = all.length;
      all = all.filter(function (x) { return x.id !== id; });
      if (all.length !== initialLen) {
        return this.saveAll(all);
      }
      return false;
    },

    resetToDefault: function () {
      try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
      } catch (e) {
        return false;
      }
    },

    exportJSON: function () {
      var all = this.getAll();
      return JSON.stringify(all, null, 2);
    },

    importJSON: function (jsonStr) {
      try {
        var parsed = JSON.parse(jsonStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.saveAll(parsed);
          return true;
        }
      } catch (e) {
        console.error('导入 JSON 解析失败:', e);
      }
      return false;
    },

    getDefaults: function () {
      return JSON.parse(JSON.stringify(DEFAULT_ACTIVITIES));
    }
  };

  global.WaterYouthData = WaterYouthData;
})(typeof window !== 'undefined' ? window : this);
