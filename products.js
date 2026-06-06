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
    id: 1,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-001",
    image: "images/1.jpg",
    tags: ["新品"]
  },
  {
    id: 2,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-002",
    image: "images/2.jpg",
    tags: ["新品"]
  },
  {
    id: 3,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-003",
    image: "images/3.jpg",
    tags: ["新品"]
  },
  {
    id: 4,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-004",
    image: "images/4.jpg",
    tags: ["新品"]
  },
  {
    id: 5,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-005",
    image: "images/5.jpg",
    tags: ["新品"]
  },
  {
    id: 6,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-006",
    image: "images/6.jpg",
    tags: ["新品"]
  },
  {
    id: 7,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-007",
    image: "images/7.jpg",
    tags: ["新品"]
  },
  {
    id: 8,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-008",
    image: "images/8.jpg",
    tags: ["新品"]
  },
  {
    id: 9,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-009",
    image: "images/9.jpg",
    tags: ["新品"]
  },
  {
    id: 10,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-010",
    image: "images/10.jpg",
    tags: ["新品"]
  },
  {
    id: 11,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-011",
    image: "images/11.jpg",
    tags: ["新品"]
  },
  {
    id: 12,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-012",
    image: "images/12.jpg",
    tags: ["新品"]
  },
  {
    id: 13,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-013",
    image: "images/13.jpg",
    tags: ["新品"]
  },
  {
    id: 14,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-014",
    image: "images/14.jpg",
    tags: ["新品"]
  },
  {
    id: 15,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-015",
    image: "images/15.jpg",
    tags: ["新品"]
  },
  {
    id: 16,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-016",
    image: "images/16.jpg",
    tags: ["新品"]
  },
  {
    id: 17,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-017",
    image: "images/17.jpg",
    tags: ["新品"]
  },
  {
    id: 18,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-018",
    image: "images/18.jpg",
    tags: ["新品"]
  },
  {
    id: 19,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-019",
    image: "images/19.jpg",
    tags: ["新品"]
  },
  {
    id: 20,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-020",
    image: "images/20.jpg",
    tags: ["新品"]
  },
  {
    id: 21,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-021",
    image: "images/21.jpg",
    tags: ["新品"]
  },
  {
    id: 22,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-022",
    image: "images/22.jpg",
    tags: ["新品"]
  },
  {
    id: 23,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-023",
    image: "images/23.jpg",
    tags: ["新品"]
  },
  {
    id: 24,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-024",
    image: "images/24.jpg",
    tags: ["新品"]
  },
  {
    id: 25,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-025",
    image: "images/25.jpg",
    tags: ["新品"]
  },
  {
    id: 26,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-026",
    image: "images/26.jpg",
    tags: ["新品"]
  },
  {
    id: 27,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-027",
    image: "images/27.jpg",
    tags: ["新品"]
  },
  {
    id: 28,
    name: "TOYOTA 方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-028",
    image: "images/28.jpg",
    tags: ["新品"]
  },
  {
    id: 29,
    name: "豐田 GR 方向盤客製",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-GR01",
    image: "images/29.jpg",
    tags: ["碳纖維", "熱銷"]
  },
  {
    id: 30,
    name: "豐田方向盤總成",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-ZC01",
    image: "images/30.jpg",
    tags: ["熱銷"]
  },
  {
    id: 31,
    name: "豐田飛機款方向盤",
    category: "TOYOTA",
    brand: "煊怡車改",
    price: "NT$0",
    code: "TY-FJ01",
    image: "images/31.jpg",
    tags: ["新品", "熱銷"]
  },
];
