/**
 * ============================================
 *  方向盘商品数据  |  STEERING WHEEL CATALOG
 * ============================================
 *
 * 字段说明：
 *   id       - 唯一编号
 *   name     - 产品名称
 *   category - 分类
 *   brand    - 品牌（可选）
 *   material - 材质（可选）：碳纤维 / 真皮 / Alcantara / PU / 锻造碳纤维
 *   price    - 价格（可选）
 *   code     - 型号/货号（可选）
 *   image    - 图片路径
 *   desc     - 描述（可选，用于搜索）
 *   specs    - 规格亮点数组（可选）
 *   tags     - 标签数组（可选）：新品 热销 限量 碳纤维
 *
 * 图片放在 images/ 文件夹，替换占位图即可上线
 */

const PRODUCTS = [

  // ==================== 碳纤维方向盘 ====================
  {
    id: 1001,
    name: "全碳纤维 D 形竞技方向盘",
    category: "碳纤维",
    brand: "STEERHUB",
    material: "碳纤维",
    price: "¥3,980",
    code: "SH-CF-D01",
    image: "images/placeholder.svg",
    desc: "F1 风格 D 形平底设计，3K 斜纹碳纤维，锻造铝合金骨架",
    specs: ["D形平底", "3K碳纤维", "锻造铝骨架", "350mm"],
    tags: ["碳纤维", "热销"]
  },
  {
    id: 1002,
    name: "碳纤维 + Alcantara 混搭运动盘",
    category: "碳纤维",
    brand: "STEERHUB",
    material: "碳纤维 / Alcantara",
    price: "¥4,580",
    code: "SH-CF-AL02",
    image: "images/placeholder.svg",
    desc: "12点钟方向碳纤维饰条，左右手握区 Alcantara 包裹",
    specs: ["圆盘造型", "碳纤维+Alcantara", "365mm", "红色缝线"],
    tags: ["碳纤维", "新品"]
  },
  {
    id: 1003,
    name: "哑光碳纤维赛道版方向盘",
    category: "碳纤维",
    brand: "STEERHUB",
    material: "碳纤维",
    price: "¥5,200",
    code: "SH-CF-MT03",
    image: "images/placeholder.svg",
    desc: "全哑光碳纤维，赛道级轻量化，仅重 1.2kg",
    specs: ["哑光纹路", "1.2kg超轻", "330mm", "赛道专用"],
    tags: ["碳纤维", "限量"]
  },
  {
    id: 1004,
    name: "锻造碳纤维运动方向盘",
    category: "碳纤维",
    brand: "STEERHUB",
    material: "锻造碳纤维",
    price: "¥6,880",
    code: "SH-FC-04",
    image: "images/placeholder.svg",
    desc: "大理石纹锻造碳纤维，每支纹理独一无二，超轻量化",
    specs: ["锻造碳纤维", "大理石纹", "专属纹理", "1.05kg"],
    tags: ["碳纤维", "限量", "新品"]
  },
  {
    id: 1005,
    name: "碳纤维 LED 竞技方向盘",
    category: "碳纤维",
    brand: "STEERHUB",
    material: "碳纤维",
    price: "¥7,990",
    code: "SH-CF-LED05",
    image: "images/placeholder.svg",
    desc: "内置 RPM 换挡提示灯，碳纤维主体，F1 赛道血统",
    specs: ["LED转速灯", "碳纤维", "D形", "OLED显示屏"],
    tags: ["碳纤维", "热销", "新品"]
  },
  {
    id: 1006,
    name: "碳纤维复古三辐方向盘",
    category: "碳纤维",
    brand: "STEERHUB",
    material: "碳纤维 / 真皮",
    price: "¥3,680",
    code: "SH-CF-RT06",
    image: "images/placeholder.svg",
    desc: "复古三辐造型结合现代碳纤维工艺，握把真皮包裹",
    specs: ["三辐复古", "碳纤维辐条", "真皮包裹", "380mm"],
    tags: ["碳纤维"]
  },

  // ==================== 真皮方向盘 ====================
  {
    id: 2001,
    name: "Nappa 真皮运动方向盘",
    category: "真皮",
    brand: "STEERHUB",
    material: "Nappa真皮",
    price: "¥2,580",
    code: "SH-LT-NP01",
    image: "images/placeholder.svg",
    desc: "进口 Nappa 头层皮，手工缝制，细腻手感",
    specs: ["Nappa真皮", "手工缝线", "370mm", "加热功能"],
    tags: ["热销"]
  },
  {
    id: 2002,
    name: "打孔真皮 D 形方向盘",
    category: "真皮",
    brand: "STEERHUB",
    material: "打孔真皮",
    price: "¥2,280",
    code: "SH-LT-D02",
    image: "images/placeholder.svg",
    desc: "运动 D 形设计，握把处打孔真皮，透气防滑",
    specs: ["D形平底", "打孔真皮", "红色回正标", "365mm"],
    tags: ["热销", "新品"]
  },
  {
    id: 2003,
    name: "意大利进口小牛皮方向盘",
    category: "真皮",
    brand: "STEERHUB",
    material: "意大利小牛皮",
    price: "¥3,980",
    code: "SH-LT-IT03",
    image: "images/placeholder.svg",
    desc: "意大利植鞣小牛皮，复古做旧工艺，顶级质感",
    specs: ["意大利小牛皮", "植鞣工艺", "380mm", "复古缝线"],
    tags: ["限量"]
  },
  {
    id: 2004,
    name: "双色拼接真皮运动盘",
    category: "真皮",
    brand: "STEERHUB",
    material: "真皮拼接",
    price: "¥2,880",
    code: "SH-LT-DC04",
    image: "images/placeholder.svg",
    desc: "黑白双色真皮拼接，运动感十足，适合改装风格",
    specs: ["双色拼接", "真皮+Alcantara", "D形", "对比色缝线"],
    tags: ["新品"]
  },
  {
    id: 2005,
    name: "Alcantara 全包裹运动方向盘",
    category: "真皮",
    brand: "STEERHUB",
    material: "Alcantara",
    price: "¥3,280",
    code: "SH-AL-05",
    image: "images/placeholder.svg",
    desc: "全 Alcantara 翻毛皮包裹，赛车级防滑，手感极佳",
    specs: ["全Alcantara", "防滑处理", "355mm", "赛道级"],
    tags: ["热销"]
  },
  {
    id: 2006,
    name: "平底真皮碳纤维混搭盘",
    category: "真皮",
    brand: "STEERHUB",
    material: "真皮 / 碳纤维",
    price: "¥3,680",
    code: "SH-LT-CF06",
    image: "images/placeholder.svg",
    desc: "上下碳纤维饰板，左右真皮手握区，兼顾颜值与手感",
    specs: ["碳纤维饰板", "真皮握把", "D形", "360mm"],
    tags: ["热销", "碳纤维"]
  },

  // ==================== 赛车方向盘 ====================
  {
    id: 3001,
    name: "F1 方程式赛道方向盘",
    category: "赛车",
    brand: "STEERHUB",
    material: "碳纤维 / Alcantara",
    price: "¥12,800",
    code: "SH-RC-F101",
    image: "images/placeholder.svg",
    desc: "F1 方程式造型，集成按钮面板，赛道专用快拆底座",
    specs: ["F1造型", "集成按钮", "快拆底座", "280mm"],
    tags: ["限量", "碳纤维"]
  },
  {
    id: 3002,
    name: "GT 赛车深凹运动方向盘",
    category: "赛车",
    brand: "STEERHUB",
    material: "Alcantara",
    price: "¥5,980",
    code: "SH-RC-GT02",
    image: "images/placeholder.svg",
    desc: "深凹造型 90mm，赛车级 Alcantara，竞技快拆接口",
    specs: ["90mm深凹", "Alcantara", "快拆接口", "320mm"],
    tags: ["热销"]
  },
  {
    id: 3003,
    name: "漂移专用深凹方向盘",
    category: "赛车",
    brand: "STEERHUB",
    material: "Alcantara / 碳纤维",
    price: "¥4,580",
    code: "SH-RC-DR03",
    image: "images/placeholder.svg",
    desc: "漂移专用深凹设计，顶部碳纤维饰条，快拆系统",
    specs: ["深凹造型", "碳纤维饰条", "漂移专用", "330mm"],
    tags: ["新品", "碳纤维"]
  },
  {
    id: 3004,
    name: "复古木质赛车方向盘",
    category: "赛车",
    brand: "STEERHUB",
    material: "实木 / 铝合金",
    price: "¥3,280",
    code: "SH-RC-WD04",
    image: "images/placeholder.svg",
    desc: "经典老爷车风格，实木外圈+铝合金辐条，情怀之选",
    specs: ["实木外圈", "铝合金辐条", "复古风格", "380mm"],
    tags: ["限量"]
  },
  {
    id: 3005,
    name: "方程式快拆竞技方向盘",
    category: "赛车",
    brand: "STEERHUB",
    material: "碳纤维",
    price: "¥8,880",
    code: "SH-RC-QR05",
    image: "images/placeholder.svg",
    desc: "一体化碳纤维盘体，快拆底座，带转速灯模块接口",
    specs: ["全碳纤维", "快拆系统", "灯光接口", "300mm"],
    tags: ["碳纤维", "新品"]
  },

  // ==================== 改装方向盘 ====================
  {
    id: 4001,
    name: "通用型运动改装方向盘",
    category: "改装",
    brand: "STEERHUB",
    material: "PU / 真皮",
    price: "¥980",
    code: "SH-MD-UN01",
    image: "images/placeholder.svg",
    desc: "入门改装首选，适配 90% 车型，赠送转接座一套",
    specs: ["通用适配", "PU皮革", "转接座附赠", "350mm"],
    tags: ["热销"]
  },
  {
    id: 4002,
    name: "BMW M 款改装方向盘",
    category: "改装",
    brand: "STEERHUB",
    material: "Nappa真皮 / 碳纤维",
    price: "¥5,880",
    code: "SH-MD-BMW02",
    image: "images/placeholder.svg",
    desc: "BMW 3/5/M 系列专车专用，保留所有原厂功能按键",
    specs: ["BMW专用", "M三色缝线", "保留原厂功能", "碳纤饰板"],
    tags: ["碳纤维", "热销"]
  },
  {
    id: 4003,
    name: "Audi 平底运动改装方向盘",
    category: "改装",
    brand: "STEERHUB",
    material: "打孔真皮",
    price: "¥4,680",
    code: "SH-MD-AU03",
    image: "images/placeholder.svg",
    desc: "Audi A/S/RS 系列专车专用，运动平底，打孔真皮",
    specs: ["Audi专用", "平底设计", "打孔真皮", "RS标识"],
    tags: ["新品"]
  },
  {
    id: 4004,
    name: "奔驰 AMG 款改装方向盘",
    category: "改装",
    brand: "STEERHUB",
    material: "Nappa真皮 / Alcantara",
    price: "¥6,280",
    code: "SH-MD-BZ04",
    image: "images/placeholder.svg",
    desc: "Mercedes C/E/S 级专车专用，AMG 运动风格",
    specs: ["奔驰专用", "AMG风格", "Nappa+Alcantara", "加热功能"],
    tags: ["限量"]
  },
  {
    id: 4005,
    name: "JDM 日系通用改装方向盘",
    category: "改装",
    brand: "STEERHUB",
    material: "Alcantara",
    price: "¥2,580",
    code: "SH-MD-JDM05",
    image: "images/placeholder.svg",
    desc: "日系 JDM 风格，适配丰田/本田/日产/马自达等主流车型",
    specs: ["日系通用", "Alcantara", "JDM风格", "360mm"],
    tags: ["热销", "新品"]
  },
  {
    id: 4006,
    name: "特斯拉 Model 3/Y 改装盘",
    category: "改装",
    brand: "STEERHUB",
    material: "碳纤维 / 真皮",
    price: "¥5,680",
    code: "SH-MD-TS06",
    image: "images/placeholder.svg",
    desc: "Tesla Model 3/Y 专用，保留滚轮功能，运动造型",
    specs: ["特斯拉专用", "保留滚轮", "碳纤维", "D形"],
    tags: ["碳纤维", "新品", "热销"]
  },

  // ==================== 方向盘配件 ====================
  {
    id: 5001,
    name: "赛车快拆底座",
    category: "配件",
    brand: "STEERHUB",
    material: "铝合金",
    price: "¥1,280",
    code: "SH-AC-QR01",
    image: "images/placeholder.svg",
    desc: "航空级 7075 铝合金，通用 6 孔/70mm PCD，快拆结构",
    specs: ["7075铝合金", "6孔通用", "快拆结构", "轻量化"],
    tags: ["热销"]
  },
  {
    id: 5002,
    name: "方向盘转接座套装",
    category: "配件",
    brand: "STEERHUB",
    material: "钢材",
    price: "¥380",
    code: "SH-AC-AD02",
    image: "images/placeholder.svg",
    desc: "多车型转接座套装，含 6 种规格，适配主流车型",
    specs: ["6种规格", "钢材", "安装螺丝包", "通用"],
    tags: ["热销"]
  },
  {
    id: 5003,
    name: "Alcantara 方向盘套",
    category: "配件",
    brand: "STEERHUB",
    material: "Alcantara",
    price: "¥480",
    code: "SH-AC-CV03",
    image: "images/placeholder.svg",
    desc: "专车定制 Alcantara 方向盘套，手工缝制，无需拆盘",
    specs: ["Alcantara", "定制尺寸", "手工缝制", "免拆安装"],
    tags: ["新品", "热销"]
  },
  {
    id: 5004,
    name: "碳纤维换挡拨片",
    category: "配件",
    brand: "STEERHUB",
    material: "碳纤维",
    price: "¥880",
    code: "SH-AC-PD04",
    image: "images/placeholder.svg",
    desc: "加长款碳纤维换挡拨片，3M 背胶+螺丝双重固定",
    specs: ["加长设计", "碳纤维", "双固定", "多车适配"],
    tags: ["碳纤维", "热销"]
  },
  {
    id: 5005,
    name: "方向盘碳纤维饰板",
    category: "配件",
    brand: "STEERHUB",
    material: "碳纤维",
    price: "¥680",
    code: "SH-AC-TR05",
    image: "images/placeholder.svg",
    desc: "替换原厂饰板，真碳纤维，多车型可选，免工具安装",
    specs: ["真碳纤维", "替换安装", "多车型", "3K斜纹"],
    tags: ["碳纤维", "新品"]
  },
  {
    id: 5006,
    name: "方向盘回正标贴",
    category: "配件",
    brand: "STEERHUB",
    material: "铝合金",
    price: "¥168",
    code: "SH-AC-MK06",
    image: "images/placeholder.svg",
    desc: "12点钟铝合金回正标，多色可选，赛车风格点缀",
    specs: ["铝合金", "多色可选", "3M背胶", "通用"],
    tags: ["新品"]
  }
];
