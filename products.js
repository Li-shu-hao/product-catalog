/**
 * ============================================
 *  方向盤商品資料  |  STEERING WHEEL CATALOG
 * ============================================
 *
 * 欄位說明：
 *   id       - 唯一编号
 *   name     - 产品名称
 *   category - 分類
 *   brand    - 品牌（可选）
 *   material - 材質（可选）：碳纖維 / 真皮 / Alcantara / PU / 鍛造碳纖維
 *   price    - 價格（可选）
 *   code     - 型號/貨號（可选）
 *   image    - 圖片路徑
 *   desc     - 描述（可选，用于搜索）
 *   specs    - 規格亮點陣列（可选）
 *   tags     - 標籤陣列（可选）：新品 熱銷 限量 碳纖維
 *
 * 图片放在 images/ 文件夹，替換占位图即可上线
 */

const PRODUCTS = [

  // ==================== 碳纖維方向盤 ====================
  {
    id: 1001,
    name: "全碳纖維 D 形競技方向盤",
    category: "碳纖維",
    brand: "STEERHUB",
    material: "碳纖維",
    price: "¥3,980",
    code: "SH-CF-D01",
    image: "images/placeholder.svg",
    desc: "F1 風格 D 形平底設計，3K 斜纹碳纖維，鍛造鋁合金骨架",
    specs: ["D形平底", "3K碳纖維", "鍛造铝骨架", "350mm"],
    tags: ["碳纖維", "熱銷"]
  },
  {
    id: 1002,
    name: "碳纖維 + Alcantara 混搭運動盘",
    category: "碳纖維",
    brand: "STEERHUB",
    material: "碳纖維 / Alcantara",
    price: "¥4,580",
    code: "SH-CF-AL02",
    image: "images/placeholder.svg",
    desc: "12点钟方向碳纖維饰条，左右手握区 Alcantara 包裹",
    specs: ["圆盘造型", "碳纖維+Alcantara", "365mm", "红色缝线"],
    tags: ["碳纖維", "新品"]
  },
  {
    id: 1003,
    name: "消光碳纖維賽道版方向盤",
    category: "碳纖維",
    brand: "STEERHUB",
    material: "碳纖維",
    price: "¥5,200",
    code: "SH-CF-MT03",
    image: "images/placeholder.svg",
    desc: "全消光碳纖維，賽道级轻量化，仅重 1.2kg",
    specs: ["消光纹路", "1.2kg超轻", "330mm", "賽道專用"],
    tags: ["碳纖維", "限量"]
  },
  {
    id: 1004,
    name: "鍛造碳纖維運動方向盤",
    category: "碳纖維",
    brand: "STEERHUB",
    material: "鍛造碳纖維",
    price: "¥6,880",
    code: "SH-FC-04",
    image: "images/placeholder.svg",
    desc: "大理石纹鍛造碳纖維，每支纹理独一无二，超轻量化",
    specs: ["鍛造碳纖維", "大理石纹", "专属纹理", "1.05kg"],
    tags: ["碳纖維", "限量", "新品"]
  },
  {
    id: 1005,
    name: "碳纖維 LED 競技方向盤",
    category: "碳纖維",
    brand: "STEERHUB",
    material: "碳纖維",
    price: "¥7,990",
    code: "SH-CF-LED05",
    image: "images/placeholder.svg",
    desc: "内置 RPM 換檔提示灯，碳纖維主体，F1 賽道血统",
    specs: ["LED转速灯", "碳纖維", "D形", "OLED显示屏"],
    tags: ["碳纖維", "熱銷", "新品"]
  },
  {
    id: 1006,
    name: "碳纖維復古三辐方向盤",
    category: "碳纖維",
    brand: "STEERHUB",
    material: "碳纖維 / 真皮",
    price: "¥3,680",
    code: "SH-CF-RT06",
    image: "images/placeholder.svg",
    desc: "復古三辐造型结合现代碳纖維工藝，握把真皮包裹",
    specs: ["三辐復古", "碳纖維辐条", "真皮包裹", "380mm"],
    tags: ["碳纖維"]
  },

  // ==================== 真皮方向盤 ====================
  {
    id: 2001,
    name: "Nappa 真皮運動方向盤",
    category: "真皮",
    brand: "STEERHUB",
    material: "Nappa真皮",
    price: "¥2,580",
    code: "SH-LT-NP01",
    image: "images/placeholder.svg",
    desc: "進口 Nappa 头层皮，手工缝制，细腻手感",
    specs: ["Nappa真皮", "手工缝线", "370mm", "加热功能"],
    tags: ["熱銷"]
  },
  {
    id: 2002,
    name: "打孔真皮 D 形方向盤",
    category: "真皮",
    brand: "STEERHUB",
    material: "打孔真皮",
    price: "¥2,280",
    code: "SH-LT-D02",
    image: "images/placeholder.svg",
    desc: "運動 D 形設計，握把处打孔真皮，透气防滑",
    specs: ["D形平底", "打孔真皮", "紅色回正標", "365mm"],
    tags: ["熱銷", "新品"]
  },
  {
    id: 2003,
    name: "義大利進口小牛皮方向盤",
    category: "真皮",
    brand: "STEERHUB",
    material: "義大利小牛皮",
    price: "¥3,980",
    code: "SH-LT-IT03",
    image: "images/placeholder.svg",
    desc: "義大利植鞣小牛皮，復古做旧工藝，顶级质感",
    specs: ["義大利小牛皮", "植鞣工藝", "380mm", "復古缝线"],
    tags: ["限量"]
  },
  {
    id: 2004,
    name: "双色拼接真皮運動盘",
    category: "真皮",
    brand: "STEERHUB",
    material: "真皮拼接",
    price: "¥2,880",
    code: "SH-LT-DC04",
    image: "images/placeholder.svg",
    desc: "黑白双色真皮拼接，運動感十足，适合改裝風格",
    specs: ["双色拼接", "真皮+Alcantara", "D形", "对比色缝线"],
    tags: ["新品"]
  },
  {
    id: 2005,
    name: "Alcantara 全包裹運動方向盤",
    category: "真皮",
    brand: "STEERHUB",
    material: "Alcantara",
    price: "¥3,280",
    code: "SH-AL-05",
    image: "images/placeholder.svg",
    desc: "全 Alcantara 翻毛皮包裹，賽車级防滑，手感极佳",
    specs: ["全Alcantara", "防滑处理", "355mm", "賽道级"],
    tags: ["熱銷"]
  },
  {
    id: 2006,
    name: "平底真皮碳纖維混搭盘",
    category: "真皮",
    brand: "STEERHUB",
    material: "真皮 / 碳纖維",
    price: "¥3,680",
    code: "SH-LT-CF06",
    image: "images/placeholder.svg",
    desc: "上下碳纖維饰板，左右真皮手握区，兼顾颜值与手感",
    specs: ["碳纖維饰板", "真皮握把", "D形", "360mm"],
    tags: ["熱銷", "碳纖維"]
  },

  // ==================== 賽車方向盤 ====================
  {
    id: 3001,
    name: "F1 方程式賽道方向盤",
    category: "賽車",
    brand: "STEERHUB",
    material: "碳纖維 / Alcantara",
    price: "¥12,800",
    code: "SH-RC-F101",
    image: "images/placeholder.svg",
    desc: "F1 方程式造型，集成按钮面板，賽道專用快拆底座",
    specs: ["F1造型", "集成按钮", "快拆底座", "280mm"],
    tags: ["限量", "碳纖維"]
  },
  {
    id: 3002,
    name: "GT 賽車深凹運動方向盤",
    category: "賽車",
    brand: "STEERHUB",
    material: "Alcantara",
    price: "¥5,980",
    code: "SH-RC-GT02",
    image: "images/placeholder.svg",
    desc: "深凹造型 90mm，賽車级 Alcantara，競技快拆接口",
    specs: ["90mm深凹", "Alcantara", "快拆接口", "320mm"],
    tags: ["熱銷"]
  },
  {
    id: 3003,
    name: "甩尾專用深凹方向盤",
    category: "賽車",
    brand: "STEERHUB",
    material: "Alcantara / 碳纖維",
    price: "¥4,580",
    code: "SH-RC-DR03",
    image: "images/placeholder.svg",
    desc: "甩尾專用深凹設計，顶部碳纖維饰条，快拆系統",
    specs: ["深凹造型", "碳纖維饰条", "甩尾專用", "330mm"],
    tags: ["新品", "碳纖維"]
  },
  {
    id: 3004,
    name: "復古木质賽車方向盤",
    category: "賽車",
    brand: "STEERHUB",
    material: "实木 / 鋁合金",
    price: "¥3,280",
    code: "SH-RC-WD04",
    image: "images/placeholder.svg",
    desc: "經典老爷车風格，实木外圈+鋁合金辐条，情怀之选",
    specs: ["实木外圈", "鋁合金辐条", "復古風格", "380mm"],
    tags: ["限量"]
  },
  {
    id: 3005,
    name: "方程式快拆競技方向盤",
    category: "賽車",
    brand: "STEERHUB",
    material: "碳纖維",
    price: "¥8,880",
    code: "SH-RC-QR05",
    image: "images/placeholder.svg",
    desc: "一体化碳纖維盘体，快拆底座，带转速灯模块接口",
    specs: ["全碳纖維", "快拆系統", "灯光接口", "300mm"],
    tags: ["碳纖維", "新品"]
  },

  // ==================== 改裝方向盤 ====================
  {
    id: 4001,
    name: "通用型運動改裝方向盤",
    category: "改裝",
    brand: "STEERHUB",
    material: "PU / 真皮",
    price: "¥980",
    code: "SH-MD-UN01",
    image: "images/placeholder.svg",
    desc: "入门改裝首选，适配 90% 车型，赠送轉接座一套",
    specs: ["通用适配", "PU皮革", "轉接座附赠", "350mm"],
    tags: ["熱銷"]
  },
  {
    id: 4002,
    name: "BMW M 款改裝方向盤",
    category: "改裝",
    brand: "STEERHUB",
    material: "Nappa真皮 / 碳纖維",
    price: "¥5,880",
    code: "SH-MD-BMW02",
    image: "images/placeholder.svg",
    desc: "BMW 3/5/M 系列专车專用，保留所有原廠功能按键",
    specs: ["BMW專用", "M三色缝线", "保留原廠功能", "碳纖飾板"],
    tags: ["碳纖維", "熱銷"]
  },
  {
    id: 4003,
    name: "Audi 平底運動改裝方向盤",
    category: "改裝",
    brand: "STEERHUB",
    material: "打孔真皮",
    price: "¥4,680",
    code: "SH-MD-AU03",
    image: "images/placeholder.svg",
    desc: "Audi A/S/RS 系列专车專用，運動平底，打孔真皮",
    specs: ["Audi專用", "平底設計", "打孔真皮", "RS標識"],
    tags: ["新品"]
  },
  {
    id: 4004,
    name: "賓士 AMG 款改裝方向盤",
    category: "改裝",
    brand: "STEERHUB",
    material: "Nappa真皮 / Alcantara",
    price: "¥6,280",
    code: "SH-MD-BZ04",
    image: "images/placeholder.svg",
    desc: "Mercedes C/E/S 级专车專用，AMG 運動風格",
    specs: ["賓士專用", "AMG風格", "Nappa+Alcantara", "加热功能"],
    tags: ["限量"]
  },
  {
    id: 4005,
    name: "JDM 日系通用改裝方向盤",
    category: "改裝",
    brand: "STEERHUB",
    material: "Alcantara",
    price: "¥2,580",
    code: "SH-MD-JDM05",
    image: "images/placeholder.svg",
    desc: "日系 JDM 風格，适配丰田/本田/日产/马自达等主流车型",
    specs: ["日系通用", "Alcantara", "JDM風格", "360mm"],
    tags: ["熱銷", "新品"]
  },
  {
    id: 4006,
    name: "特斯拉 Model 3/Y 改裝盘",
    category: "改裝",
    brand: "STEERHUB",
    material: "碳纖維 / 真皮",
    price: "¥5,680",
    code: "SH-MD-TS06",
    image: "images/placeholder.svg",
    desc: "Tesla Model 3/Y 專用，保留滚轮功能，運動造型",
    specs: ["特斯拉專用", "保留滚轮", "碳纖維", "D形"],
    tags: ["碳纖維", "新品", "熱銷"]
  },

  // ==================== 方向盤配件 ====================
  {
    id: 5001,
    name: "賽車快拆底座",
    category: "配件",
    brand: "STEERHUB",
    material: "鋁合金",
    price: "¥1,280",
    code: "SH-AC-QR01",
    image: "images/placeholder.svg",
    desc: "航空级 7075 鋁合金，通用 6 孔/70mm PCD，快拆结构",
    specs: ["7075鋁合金", "6孔通用", "快拆结构", "轻量化"],
    tags: ["熱銷"]
  },
  {
    id: 5002,
    name: "方向盤轉接座套装",
    category: "配件",
    brand: "STEERHUB",
    material: "鋼材",
    price: "¥380",
    code: "SH-AC-AD02",
    image: "images/placeholder.svg",
    desc: "多车型轉接座套装，含 6 种规格，适配主流车型",
    specs: ["6种规格", "鋼材", "安裝螺丝包", "通用"],
    tags: ["熱銷"]
  },
  {
    id: 5003,
    name: "Alcantara 方向盤套",
    category: "配件",
    brand: "STEERHUB",
    material: "Alcantara",
    price: "¥480",
    code: "SH-AC-CV03",
    image: "images/placeholder.svg",
    desc: "专车定制 Alcantara 方向盤套，手工缝制，无需拆盘",
    specs: ["Alcantara", "定制尺寸", "手工缝制", "免拆安裝"],
    tags: ["新品", "熱銷"]
  },
  {
    id: 5004,
    name: "碳纖維換檔拨片",
    category: "配件",
    brand: "STEERHUB",
    material: "碳纖維",
    price: "¥880",
    code: "SH-AC-PD04",
    image: "images/placeholder.svg",
    desc: "加长款碳纖維換檔拨片，3M 背胶+螺丝双重固定",
    specs: ["加长設計", "碳纖維", "双固定", "多车适配"],
    tags: ["碳纖維", "熱銷"]
  },
  {
    id: 5005,
    name: "方向盤碳纖維饰板",
    category: "配件",
    brand: "STEERHUB",
    material: "碳纖維",
    price: "¥680",
    code: "SH-AC-TR05",
    image: "images/placeholder.svg",
    desc: "替換原廠饰板，真碳纖維，多车型可选，免工具安裝",
    specs: ["真碳纖維", "替換安裝", "多车型", "3K斜纹"],
    tags: ["碳纖維", "新品"]
  },
  {
    id: 5006,
    name: "方向盤回正标贴",
    category: "配件",
    brand: "STEERHUB",
    material: "鋁合金",
    price: "¥168",
    code: "SH-AC-MK06",
    image: "images/placeholder.svg",
    desc: "12点钟鋁合金回正标，多色可选，賽車風格点缀",
    specs: ["鋁合金", "多色可选", "3M背胶", "通用"],
    tags: ["新品"]
  }
];
