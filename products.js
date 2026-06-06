/**
 * ========================================
 *  商品数据文件
 *  按以下格式添加你的商品即可，无需改其他文件
 * ========================================
 *
 * 字段说明：
 *   id          - 唯一编号（数字）
 *   name        - 商品名称
 *   category    - 所属分类（用于分类筛选）
 *   price       - 价格（可选）
 *   code        - 货号/款号（可选）
 *   image       - 图片路径（放到 images/ 文件夹里）
 *   description - 简短描述（可选，用于搜索）
 *   tags        - 标签数组（可选），可选值: "新品" "热卖" "特价" "推荐"
 *
 * 示例:
 *   {
 *     id: 1,
 *     name: "复古碎花连衣裙",
 *     category: "连衣裙",
 *     price: "¥299",
 *     code: "D-001",
 *     image: "images/placeholder.svg",
 *     description: "春季新款，法式复古风",
 *     tags: ["新品", "热卖"]
 *   },
 */

const PRODUCTS = [
  // ========== 连衣裙 ==========
  {
    id: 1,
    name: "法式复古碎花连衣裙",
    category: "连衣裙",
    price: "¥299",
    code: "DR-001",
    image: "images/placeholder.svg",
    description: "春夏新款，法式复古碎花设计",
    tags: ["新品", "热卖"]
  },
  {
    id: 2,
    name: "气质收腰小黑裙",
    category: "连衣裙",
    price: "¥359",
    code: "DR-002",
    image: "images/placeholder.svg",
    description: "经典百搭款，通勤约会皆宜",
    tags: ["推荐"]
  },
  {
    id: 3,
    name: "慵懒风针织吊带长裙",
    category: "连衣裙",
    price: "¥259",
    code: "DR-003",
    image: "images/placeholder.svg",
    description: "柔软亲肤，夏季必备",
    tags: ["新品"]
  },
  {
    id: 4,
    name: "新中式改良旗袍裙",
    category: "连衣裙",
    price: "¥429",
    code: "DR-004",
    image: "images/placeholder.svg",
    description: "国风元素，优雅气质",
    tags: ["热卖", "推荐"]
  },
  {
    id: 5,
    name: "波西米亚风长裙",
    category: "连衣裙",
    price: "¥339",
    code: "DR-005",
    image: "images/placeholder.svg",
    description: "度假风，飘逸大裙摆",
    tags: ["推荐"]
  },

  // ========== 上衣 ==========
  {
    id: 10,
    name: "简约棉质白衬衫",
    category: "上衣",
    price: "¥189",
    code: "TP-001",
    image: "images/placeholder.svg",
    description: "基础百搭款，通勤首选",
    tags: ["热卖"]
  },
  {
    id: 11,
    name: "法式泡泡袖雪纺衫",
    category: "上衣",
    price: "¥219",
    code: "TP-002",
    image: "images/placeholder.svg",
    description: "甜美风格，仙气十足",
    tags: ["新品"]
  },
  {
    id: 12,
    name: "宽松针织开衫",
    category: "上衣",
    price: "¥269",
    code: "TP-003",
    image: "images/placeholder.svg",
    description: "空调房必备外搭",
    tags: ["推荐"]
  },
  {
    id: 13,
    name: "短款针织小开衫",
    category: "上衣",
    price: "¥199",
    code: "TP-004",
    image: "images/placeholder.svg",
    description: "搭配连衣裙神器",
    tags: ["热卖"]
  },
  {
    id: 14,
    name: "复古格子衬衫",
    category: "上衣",
    price: "¥239",
    code: "TP-005",
    image: "images/placeholder.svg",
    description: "经典格纹，休闲百搭",
    tags: ["新品"]
  },

  // ========== 裤子 ==========
  {
    id: 20,
    name: "高腰直筒西装裤",
    category: "裤子",
    price: "¥259",
    code: "PT-001",
    image: "images/placeholder.svg",
    description: "显瘦显腿直，通勤必备",
    tags: ["热卖"]
  },
  {
    id: 21,
    name: "垂感阔腿裤",
    category: "裤子",
    price: "¥229",
    code: "PT-002",
    image: "images/placeholder.svg",
    description: "遮肉显瘦，走路带风",
    tags: ["推荐"]
  },
  {
    id: 22,
    name: "小脚牛仔裤",
    category: "裤子",
    price: "¥279",
    code: "PT-003",
    image: "images/placeholder.svg",
    description: "经典修身款，四季百搭",
    tags: ["热卖", "推荐"]
  },
  {
    id: 23,
    name: "冰丝阔腿拖地裤",
    category: "裤子",
    price: "¥199",
    code: "PT-004",
    image: "images/placeholder.svg",
    description: "夏天穿超凉快",
    tags: ["新品"]
  },
  {
    id: 24,
    name: "棉麻九分裤",
    category: "裤子",
    price: "¥219",
    code: "PT-005",
    image: "images/placeholder.svg",
    description: "文艺范，透气舒适",
    tags: ["新品"]
  },

  // ========== 外套 ==========
  {
    id: 30,
    name: "经典双面呢大衣",
    category: "外套",
    price: "¥899",
    code: "CT-001",
    image: "images/placeholder.svg",
    description: "100%羊毛，质感满满",
    tags: ["推荐"]
  },
  {
    id: 31,
    name: "短款牛仔外套",
    category: "外套",
    price: "¥329",
    code: "CT-002",
    image: "images/placeholder.svg",
    description: "复古水洗，百搭神器",
    tags: ["热卖"]
  },
  {
    id: 32,
    name: "中长款风衣",
    category: "外套",
    price: "¥569",
    code: "CT-003",
    image: "images/placeholder.svg",
    description: "经典卡其色，气质通勤",
    tags: ["热卖", "推荐"]
  },
  {
    id: 33,
    name: "小香风短外套",
    category: "外套",
    price: "¥459",
    code: "CT-004",
    image: "images/placeholder.svg",
    description: "名媛风，精致粗花呢",
    tags: ["新品"]
  },
  {
    id: 34,
    name: "轻薄防晒外套",
    category: "外套",
    price: "¥169",
    code: "CT-005",
    image: "images/placeholder.svg",
    description: "UPF50+，夏日防晒必备",
    tags: ["新品", "热卖"]
  },

  // ========== 配饰 ==========
  {
    id: 40,
    name: "真丝小方巾",
    category: "配饰",
    price: "¥129",
    code: "AC-001",
    image: "images/placeholder.svg",
    description: "100%桑蚕丝，多种系法",
    tags: ["推荐"]
  },
  {
    id: 41,
    name: "珍珠发箍",
    category: "配饰",
    price: "¥89",
    code: "AC-002",
    image: "images/placeholder.svg",
    description: "法式复古，精致百搭",
    tags: ["新品"]
  },
  {
    id: 42,
    name: "简约腰带",
    category: "配饰",
    price: "¥109",
    code: "AC-003",
    image: "images/placeholder.svg",
    description: "真皮材质，提升腰线",
    tags: ["推荐"]
  },
  {
    id: 43,
    name: "复古太阳镜",
    category: "配饰",
    price: "¥149",
    code: "AC-004",
    image: "images/placeholder.svg",
    description: "猫眼造型，显脸小",
    tags: ["新品"]
  },
  {
    id: 44,
    name: "链条小方包",
    category: "配饰",
    price: "¥259",
    code: "AC-005",
    image: "images/placeholder.svg",
    description: "牛皮材质，小巧精致",
    tags: ["热卖", "推荐"]
  }
];
