/**
 * ============================================
 *  方向盤商品資料  |  STEERING WHEEL CATALOG
 * ============================================
 *
 * 欄位說明：
 *   id       - 唯一編號
 *   name     - 產品名稱
 *   category - 品牌分類
 *   brand    - 品牌
 *   material - 材質（可選）
 *   price    - 價格（可選）
 *   code     - 型號/貨號（可選）
 *   image    - 圖片路徑
 *   desc     - 描述（可選，用於搜尋）
 *   specs    - 規格亮點陣列（可選）
 *   tags     - 標籤陣列（可選）：新品 熱銷 限量 碳纖維
 *
 * 圖片放在 images/ 資料夾，替換即可上線
 */

const PRODUCTS = [

  // ==================== TOYOTA ====================
  {
    id: 1001,
    name: "TOYOTA Altis / Cross 碳纖維運動方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    material: "碳纖維 / 真皮",
    price: "NT$12,800",
    code: "XY-TY-CF01",
    image: "images/placeholder.svg",
    desc: "TOYOTA Altis、Corolla Cross 專用，碳纖維+真皮混搭，D形平底設計",
    specs: ["D形平底", "碳纖維飾板", "真皮握把", "Altis/Cross專用"],
    tags: ["熱銷"]
  },
  {
    id: 1002,
    name: "TOYOTA RAV4 / Camry 真皮運動方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    material: "Nappa真皮",
    price: "NT$10,800",
    code: "XY-TY-LT02",
    image: "images/placeholder.svg",
    desc: "RAV4、Camry 專車專用，Nappa真皮手工縫製，保留原廠加熱功能",
    specs: ["Nappa真皮", "手工縫線", "加熱功能", "RAV4/Camry專用"],
    tags: ["熱銷", "新品"]
  },
  {
    id: 1003,
    name: "TOYOTA GR Supra 賽車碳纖維方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    material: "碳纖維 / Alcantara",
    price: "NT$18,800",
    code: "XY-TY-GR03",
    image: "images/placeholder.svg",
    desc: "GR Supra / GR Yaris 專用，全碳纖維主體，Alcantara握把，賽道級",
    specs: ["全碳纖維", "Alcantara", "賽道級", "GR系列專用"],
    tags: ["碳纖維", "限量"]
  },

  // ==================== BMW ====================
  {
    id: 2001,
    name: "BMW 3/5 系 M-Sport 碳纖維方向盤",
    category: "BMW",
    brand: "煊怡車改",
    material: "碳纖維 / Nappa真皮",
    price: "NT$22,800",
    code: "XY-BM-MS01",
    image: "images/placeholder.svg",
    desc: "BMW 3系/5系 F30/G20/G30 專用，M三色縫線，碳纖維飾板",
    specs: ["M三色縫線", "碳纖維飾板", "Nappa真皮", "保留原廠功能"],
    tags: ["碳纖維", "熱銷"]
  },
  {
    id: 2002,
    name: "BMW M3/M4 賽道版 Alcantara 方向盤",
    category: "BMW",
    brand: "煊怡車改",
    material: "Alcantara / 碳纖維",
    price: "NT$28,800",
    code: "XY-BM-MP02",
    image: "images/placeholder.svg",
    desc: "M3/M4 專用賽道版，全Alcantara包裹，碳纖維飾板，競技快拆接口",
    specs: ["全Alcantara", "碳纖維飾板", "快拆接口", "M3/M4專用"],
    tags: ["碳纖維", "限量", "熱銷"]
  },
  {
    id: 2003,
    name: "BMW X5/X6 豪華真皮方向盤",
    category: "BMW",
    brand: "煊怡車改",
    material: "Nappa真皮",
    price: "NT$19,800",
    code: "XY-BM-X503",
    image: "images/placeholder.svg",
    desc: "X5/X6/X7 專用，義大利Nappa真皮，加熱功能，豪華升級首選",
    specs: ["Nappa真皮", "加熱功能", "豪華縫線", "X5/X6/X7專用"],
    tags: ["新品"]
  },

  // ==================== 賓士 ====================
  {
    id: 3001,
    name: "賓士 C/E/S-Class AMG 碳纖維方向盤",
    category: "賓士",
    brand: "煊怡車改",
    material: "碳纖維 / Nappa真皮",
    price: "NT$25,800",
    code: "XY-BZ-AM01",
    image: "images/placeholder.svg",
    desc: "C/E/S-Class W205/W213/W222 專用，AMG風格，碳纖維+Nappa真皮",
    specs: ["AMG風格", "碳纖維飾板", "Nappa真皮", "OLED顯示屏"],
    tags: ["碳纖維", "熱銷"]
  },
  {
    id: 3002,
    name: "賓士 GLC/GLE 運動平底方向盤",
    category: "賓士",
    brand: "煊怡車改",
    material: "打孔真皮 / 碳纖維",
    price: "NT$23,800",
    code: "XY-BZ-SU02",
    image: "images/placeholder.svg",
    desc: "GLC/GLE SUV專用運動平底盤，打孔真皮透氣防滑，碳纖飾板點綴",
    specs: ["平底設計", "打孔真皮", "碳纖飾板", "GLC/GLE專用"],
    tags: ["熱銷", "新品"]
  },
  {
    id: 3003,
    name: "賓士 G-Class 越野專用方向盤",
    category: "賓士",
    brand: "煊怡車改",
    material: "Alcantara / 碳纖維",
    price: "NT$32,800",
    code: "XY-BZ-GC03",
    image: "images/placeholder.svg",
    desc: "G-Class W463A 專用，Alcantara全包裹，越野風格，紅色回正標",
    specs: ["全Alcantara", "紅色回正標", "碳纖維飾板", "G-Class專用"],
    tags: ["限量", "碳纖維"]
  },

  // ==================== 福特 ====================
  {
    id: 4001,
    name: "福特 Focus / Kuga ST-Line 運動方向盤",
    category: "福特",
    brand: "煊怡車改",
    material: "打孔真皮",
    price: "NT$12,800",
    code: "XY-FD-ST01",
    image: "images/placeholder.svg",
    desc: "Focus/Kuga ST-Line專用，D形平底，打孔真皮，紅色縫線",
    specs: ["D形平底", "打孔真皮", "紅色縫線", "Focus/Kuga專用"],
    tags: ["熱銷", "新品"]
  },
  {
    id: 4002,
    name: "福特 Mustang 碳纖維競技方向盤",
    category: "福特",
    brand: "煊怡車改",
    material: "碳纖維 / Alcantara",
    price: "NT$22,800",
    code: "XY-FD-MG02",
    image: "images/placeholder.svg",
    desc: "Mustang專用，全碳纖維主體，Alcantara握把，野馬性能風格",
    specs: ["全碳纖維", "Alcantara", "野馬標識", "Mustang專用"],
    tags: ["碳纖維", "限量"]
  },
  {
    id: 4003,
    name: "福特 Ranger 越野運動方向盤",
    category: "福特",
    brand: "煊怡車改",
    material: "真皮 / 碳纖維",
    price: "NT$14,800",
    code: "XY-FD-RG03",
    image: "images/placeholder.svg",
    desc: "Ranger專用越野風格方向盤，真皮+碳纖混搭，粗獷耐用",
    specs: ["越野風格", "真皮+碳纖", "Ranger專用", "防滑設計"],
    tags: ["新品"]
  },

  // ==================== HONDA ====================
  {
    id: 5001,
    name: "HONDA Civic / CR-V 碳纖維方向盤",
    category: "HONDA",
    brand: "煊怡車改",
    material: "碳纖維 / 真皮",
    price: "NT$11,800",
    code: "XY-HD-CV01",
    image: "images/placeholder.svg",
    desc: "Civic/CR-V專用，碳纖維飾板+真皮握把，Type-R風格紅標",
    specs: ["碳纖維飾板", "真皮握把", "Type-R風格", "Civic/CR-V專用"],
    tags: ["碳纖維", "熱銷"]
  },
  {
    id: 5002,
    name: "HONDA Civic Type-R Alcantara 賽車方向盤",
    category: "HONDA",
    brand: "煊怡車改",
    material: "Alcantara / 碳纖維",
    price: "NT$19,800",
    code: "XY-HD-TR02",
    image: "images/placeholder.svg",
    desc: "Civic Type-R FK8/FL5專用，全Alcantara包裹，紅色縫線，賽道利器",
    specs: ["全Alcantara", "紅色縫線", "碳纖飾板", "Type-R專用"],
    tags: ["碳纖維", "限量", "熱銷"]
  },
  {
    id: 5003,
    name: "HONDA Odyssey / HR-V 豪華真皮方向盤",
    category: "HONDA",
    brand: "煊怡車改",
    material: "Nappa真皮",
    price: "NT$10,800",
    code: "XY-HD-OD03",
    image: "images/placeholder.svg",
    desc: "Odyssey/HR-V專用，Nappa真皮手工縫製，家庭舒適升級",
    specs: ["Nappa真皮", "手工縫線", "加熱功能", "Odyssey/HR-V專用"],
    tags: ["新品"]
  },

  // ==================== 馬自達 ====================
  {
    id: 6001,
    name: "馬自達 Mazda3 / CX-5 碳纖維運動方向盤",
    category: "馬自達",
    brand: "煊怡車改",
    material: "碳纖維 / 真皮",
    price: "NT$12,800",
    code: "XY-MZ-CX01",
    image: "images/placeholder.svg",
    desc: "Mazda3/CX-5/CX-30專用，碳纖維飾板，D形平底，魂動紅縫線",
    specs: ["D形平底", "碳纖維飾板", "魂動紅縫線", "Mazda3/CX-5專用"],
    tags: ["碳纖維", "熱銷"]
  },
  {
    id: 6002,
    name: "馬自達 MX-5 賽車輕量化方向盤",
    category: "馬自達",
    brand: "煊怡車改",
    material: "Alcantara / 碳纖維",
    price: "NT$18,800",
    code: "XY-MZ-MX02",
    image: "images/placeholder.svg",
    desc: "MX-5 ND專用，超輕量化設計，Alcantara包裹，純粹駕駛樂趣",
    specs: ["輕量化", "Alcantara", "碳纖飾板", "MX-5 ND專用"],
    tags: ["碳纖維", "限量"]
  },
  {
    id: 6003,
    name: "馬自達 CX-9 / CX-90 豪華真皮方向盤",
    category: "馬自達",
    brand: "煊怡車改",
    material: "Nappa真皮",
    price: "NT$14,800",
    code: "XY-MZ-CX903",
    image: "images/placeholder.svg",
    desc: "CX-9/CX-90旗艦SUV專用，Nappa真皮，加熱功能，豪華升級",
    specs: ["Nappa真皮", "加熱功能", "豪華縫線", "CX-9/CX-90專用"],
    tags: ["新品", "熱銷"]
  },

  // ==================== 奧迪 ====================
  {
    id: 7001,
    name: "奧迪 A4/A6 RS 碳纖維平底方向盤",
    category: "奧迪",
    brand: "煊怡車改",
    material: "碳纖維 / 打孔真皮",
    price: "NT$24,800",
    code: "XY-AD-RS01",
    image: "images/placeholder.svg",
    desc: "A4/A6/A7 RS專用，碳纖維飾板，打孔真皮，RS運動標識",
    specs: ["平底設計", "碳纖維飾板", "打孔真皮", "RS標識"],
    tags: ["碳纖維", "熱銷"]
  },
  {
    id: 7002,
    name: "奧迪 Q5/Q7 豪華運動方向盤",
    category: "奧迪",
    brand: "煊怡車改",
    material: "Nappa真皮 / 碳纖維",
    price: "NT$22,800",
    code: "XY-AD-Q502",
    image: "images/placeholder.svg",
    desc: "Q5/Q7/Q8專用，Nappa真皮+碳纖混搭，加熱功能，科技質感",
    specs: ["Nappa真皮", "碳纖飾板", "加熱功能", "Q5/Q7/Q8專用"],
    tags: ["新品"]
  },
  {
    id: 7003,
    name: "奧迪 R8 / RS3 Alcantara 競技方向盤",
    category: "奧迪",
    brand: "煊怡車改",
    material: "Alcantara / 碳纖維",
    price: "NT$29,800",
    code: "XY-AD-R803",
    image: "images/placeholder.svg",
    desc: "R8/RS3高性能專用，全Alcantara包裹，碳纖維主體，賽道血統",
    specs: ["全Alcantara", "碳纖維主體", "OLED顯示", "R8/RS3專用"],
    tags: ["碳纖維", "限量", "熱銷"]
  },

  // ==================== INFINITI ====================
  {
    id: 8001,
    name: "INFINITI Q50 / QX50 碳纖維運動方向盤",
    category: "INFINITI",
    brand: "煊怡車改",
    material: "碳纖維 / 真皮",
    price: "NT$16,800",
    code: "XY-IF-QX01",
    image: "images/placeholder.svg",
    desc: "Q50/QX50專用，碳纖維飾板+真皮握把，日系豪華運動風",
    specs: ["碳纖維飾板", "真皮握把", "D形平底", "Q50/QX50專用"],
    tags: ["碳纖維", "新品"]
  },
  {
    id: 8002,
    name: "INFINITI QX60 / QX80 豪華真皮方向盤",
    category: "INFINITI",
    brand: "煊怡車改",
    material: "Nappa真皮",
    price: "NT$18,800",
    code: "XY-IF-QX602",
    image: "images/placeholder.svg",
    desc: "QX60/QX80旗艦SUV專用，Nappa真皮，加熱+電動調整，頂級舒適",
    specs: ["Nappa真皮", "加熱功能", "電動調整", "QX60/QX80專用"],
    tags: ["熱銷"]
  },
  {
    id: 8003,
    name: "INFINITI Q60 雙門跑車 Alcantara 方向盤",
    category: "INFINITI",
    brand: "煊怡車改",
    material: "Alcantara / 碳纖維",
    price: "NT$19,800",
    code: "XY-IF-Q603",
    image: "images/placeholder.svg",
    desc: "Q60雙門跑車專用，Alcantara包裹+碳纖飾板，紅色回正標",
    specs: ["Alcantara", "碳纖飾板", "紅色回正標", "Q60專用"],
    tags: ["碳纖維", "限量"]
  },

  // ==================== 瑪莎拉蒂 ====================
  {
    id: 9001,
    name: "瑪莎拉蒂 Ghibli / Quattroporte 碳纖維方向盤",
    category: "瑪莎拉蒂",
    brand: "煊怡車改",
    material: "碳纖維 / Nappa真皮",
    price: "NT$38,800",
    code: "XY-MS-GH01",
    image: "images/placeholder.svg",
    desc: "Ghibli/Quattroporte專用，全碳纖維主體，Nappa真皮握把，三叉戟標識",
    specs: ["全碳纖維", "Nappa真皮", "三叉戟標識", "Ghibli/QP專用"],
    tags: ["碳纖維", "限量"]
  },
  {
    id: 9002,
    name: "瑪莎拉蒂 Levante 豪華運動方向盤",
    category: "瑪莎拉蒂",
    brand: "煊怡車改",
    material: "Nappa真皮 / 碳纖維",
    price: "NT$35,800",
    code: "XY-MS-LV02",
    image: "images/placeholder.svg",
    desc: "Levante SUV專用，義大利Nappa真皮+碳纖混搭，奢華與運動兼備",
    specs: ["Nappa真皮", "碳纖飾板", "義大利工藝", "Levante專用"],
    tags: ["碳纖維", "熱銷"]
  },
  {
    id: 9003,
    name: "瑪莎拉蒂 MC20 賽道競技方向盤",
    category: "瑪莎拉蒂",
    brand: "煊怡車改",
    material: "碳纖維 / Alcantara",
    price: "NT$48,800",
    code: "XY-MS-MC03",
    image: "images/placeholder.svg",
    desc: "MC20超跑專用，鍛造碳纖維主體，Alcantara包裹，F1賽道科技",
    specs: ["鍛造碳纖維", "Alcantara", "LED轉速燈", "MC20專用"],
    tags: ["碳纖維", "限量", "新品"]
  },

  // ==================== NISSAN ====================
  {
    id: 10001,
    name: "NISSAN X-Trail / Kicks 碳纖維運動方向盤",
    category: "NISSAN",
    brand: "煊怡車改",
    material: "碳纖維 / 真皮",
    price: "NT$11,800",
    code: "XY-NS-XT01",
    image: "images/placeholder.svg",
    desc: "X-Trail/Kicks專用，碳纖維飾板+真皮握把，D形運動風格",
    specs: ["D形平底", "碳纖維飾板", "真皮握把", "X-Trail/Kicks專用"],
    tags: ["熱銷", "新品"]
  },
  {
    id: 10002,
    name: "NISSAN GT-R 賽道競技方向盤",
    category: "NISSAN",
    brand: "煊怡車改",
    material: "碳纖維 / Alcantara",
    price: "NT$32,800",
    code: "XY-NS-GR02",
    image: "images/placeholder.svg",
    desc: "GT-R R35專用，全碳纖維主體，Alcantara握把，東瀛戰神專屬",
    specs: ["全碳纖維", "Alcantara", "GT-R標識", "R35專用"],
    tags: ["碳纖維", "限量", "熱銷"]
  },
  {
    id: 10003,
    name: "NISSAN Altima / Teana 豪華真皮方向盤",
    category: "NISSAN",
    brand: "煊怡車改",
    material: "Nappa真皮",
    price: "NT$9,800",
    code: "XY-NS-AT03",
    image: "images/placeholder.svg",
    desc: "Altima/Teena專用，Nappa真皮手工縫製，舒適升級首選",
    specs: ["Nappa真皮", "手工縫線", "加熱功能", "Altima專用"],
    tags: ["新品"]
  }
];
