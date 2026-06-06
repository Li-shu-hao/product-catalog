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

  // ==================== BMW ====================
  {
    id: 32,
    name: "BMW 方向盤",
    category: "BMW",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BM-001",
    image: "images/bmw-1.jpg",
    tags: ["新品"]
  },
  {
    id: 33,
    name: "BMW 方向盤",
    category: "BMW",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BM-002",
    image: "images/bmw-2.jpg",
    tags: ["新品"]
  },
  {
    id: 34,
    name: "BMW 方向盤",
    category: "BMW",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BM-003",
    image: "images/bmw-3.jpg",
    tags: ["新品"]
  },
  {
    id: 35,
    name: "BMW 方向盤",
    category: "BMW",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BM-004",
    image: "images/bmw-4.jpg",
    tags: ["新品"]
  },
  {
    id: 36,
    name: "BMW 方向盤",
    category: "BMW",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BM-005",
    image: "images/bmw-5.jpg",
    tags: ["新品"]
  },
  {
    id: 37,
    name: "BMW 方向盤",
    category: "BMW",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BM-006",
    image: "images/bmw-6.png",
    tags: ["新品"]
  },
  {
    id: 38,
    name: "BMW 方向盤",
    category: "BMW",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BM-007",
    image: "images/bmw-7.jpg",
    tags: ["新品"]
  },
  {
    id: 39,
    name: "BMW 方向盤",
    category: "BMW",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BM-008",
    image: "images/bmw-8.jpg",
    tags: ["新品"]
  },
  {
    id: 40,
    name: "BMW 方向盤",
    category: "BMW",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BM-009",
    image: "images/bmw-9.jpg",
    tags: ["新品"]
  },

  // ==================== 賓士 ====================
  {
    id: 41,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-001",
    image: "images/benz-1.jpg",
    tags: ["新品"]
  },
  {
    id: 42,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-002",
    image: "images/benz-2.jpg",
    tags: ["新品"]
  },
  {
    id: 43,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-003",
    image: "images/benz-3.jpg",
    tags: ["新品"]
  },
  {
    id: 44,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-004",
    image: "images/benz-4.jpg",
    tags: ["新品"]
  },
  {
    id: 45,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-005",
    image: "images/benz-5.jpg",
    tags: ["新品"]
  },
  {
    id: 46,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-006",
    image: "images/benz-6.jpg",
    tags: ["新品"]
  },
  {
    id: 47,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-007",
    image: "images/benz-7.jpg",
    tags: ["新品"]
  },
  {
    id: 48,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-008",
    image: "images/benz-8.jpg",
    tags: ["新品"]
  },
  {
    id: 49,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-009",
    image: "images/benz-9.jpg",
    tags: ["新品"]
  },
  {
    id: 50,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-010",
    image: "images/benz-10.jpg",
    tags: ["新品"]
  },
  {
    id: 51,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-011",
    image: "images/benz-11.jpg",
    tags: ["新品"]
  },
  {
    id: 52,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-012",
    image: "images/benz-12.jpg",
    tags: ["新品"]
  },
  {
    id: 53,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-013",
    image: "images/benz-13.jpg",
    tags: ["新品"]
  },
  {
    id: 54,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-014",
    image: "images/benz-14.jpg",
    tags: ["新品"]
  },
  {
    id: 55,
    name: "賓士 方向盤",
    category: "賓士",
    brand: "煊怡車改",
    price: "NT$0",
    code: "BZ-015",
    image: "images/benz-15.jpg",
    tags: ["新品"]
  },

  // ==================== 福特 ====================
  { id: 56, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-001", image: "images/ford-1.jpg", tags: ["新品"] },
  { id: 57, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-002", image: "images/ford-2.jpg", tags: ["新品"] },
  { id: 58, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-003", image: "images/ford-3.jpg", tags: ["新品"] },
  { id: 59, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-004", image: "images/ford-4.jpg", tags: ["新品"] },
  { id: 60, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-005", image: "images/ford-5.jpg", tags: ["新品"] },
  { id: 61, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-006", image: "images/ford-6.jpg", tags: ["新品"] },
  { id: 62, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-007", image: "images/ford-7.jpg", tags: ["新品"] },
  { id: 63, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-008", image: "images/ford-8.jpg", tags: ["新品"] },
  { id: 64, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-009", image: "images/ford-9.jpg", tags: ["新品"] },
  { id: 65, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-010", image: "images/ford-10.jpg", tags: ["新品"] },
  { id: 66, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-011", image: "images/ford-11.jpg", tags: ["新品"] },
  { id: 67, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-012", image: "images/ford-12.jpg", tags: ["新品"] },
  { id: 68, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-013", image: "images/ford-13.jpg", tags: ["新品"] },
  { id: 69, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-014", image: "images/ford-14.jpg", tags: ["新品"] },
  { id: 70, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-015", image: "images/ford-15.jpg", tags: ["新品"] },
  { id: 71, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-016", image: "images/ford-16.jpg", tags: ["新品"] },
  { id: 72, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-017", image: "images/ford-17.jpg", tags: ["新品"] },
  { id: 73, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-018", image: "images/ford-18.jpg", tags: ["新品"] },
  { id: 74, name: "福特 方向盤", category: "福特", brand: "煊怡車改", price: "NT$0", code: "FD-019", image: "images/ford-19.jpg", tags: ["新品"] },

  // ==================== HONDA ====================
  { id: 75, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-001", image: "images/honda-1.jpg", tags: ["新品"] },
  { id: 76, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-002", image: "images/honda-2.jpg", tags: ["新品"] },
  { id: 77, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-003", image: "images/honda-3.jpg", tags: ["新品"] },
  { id: 78, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-004", image: "images/honda-4.jpg", tags: ["新品"] },
  { id: 79, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-005", image: "images/honda-5.jpg", tags: ["新品"] },
  { id: 80, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-006", image: "images/honda-6.jpg", tags: ["新品"] },
  { id: 81, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-007", image: "images/honda-7.jpg", tags: ["新品"] },
  { id: 82, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-008", image: "images/honda-8.jpg", tags: ["新品"] },
  { id: 83, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-009", image: "images/honda-9.jpg", tags: ["新品"] },
  { id: 84, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-010", image: "images/honda-10.jpg", tags: ["新品"] },
  { id: 85, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-011", image: "images/honda-11.jpg", tags: ["新品"] },
  { id: 86, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-012", image: "images/honda-12.jpg", tags: ["新品"] },
  { id: 87, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-013", image: "images/honda-13.jpg", tags: ["新品"] },
  { id: 88, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-014", image: "images/honda-14.jpg", tags: ["新品"] },
  { id: 89, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-015", image: "images/honda-15.jpg", tags: ["新品"] },
  { id: 90, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-016", image: "images/honda-16.jpg", tags: ["新品"] },
  { id: 91, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-017", image: "images/honda-17.jpg", tags: ["新品"] },
  { id: 92, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-018", image: "images/honda-18.jpg", tags: ["新品"] },
  { id: 93, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-019", image: "images/honda-19.jpg", tags: ["新品"] },
  { id: 94, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-020", image: "images/honda-20.jpg", tags: ["新品"] },
  { id: 95, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-021", image: "images/honda-21.jpg", tags: ["新品"] },
  { id: 96, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-022", image: "images/honda-22.jpg", tags: ["新品"] },
  { id: 97, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-023", image: "images/honda-23.jpg", tags: ["新品"] },
  { id: 98, name: "HONDA 方向盤", category: "HONDA", brand: "煊怡車改", price: "NT$0", code: "HD-024", image: "images/honda-24.jpg", tags: ["新品"] },

  // ==================== 馬自達 ====================
  { id: 99, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-001", image: "images/mazda-1.jpg", tags: ["新品"] },
  { id: 100, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-002", image: "images/mazda-2.jpg", tags: ["新品"] },
  { id: 101, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-003", image: "images/mazda-3.jpg", tags: ["新品"] },
  { id: 102, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-004", image: "images/mazda-4.jpg", tags: ["新品"] },
  { id: 103, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-005", image: "images/mazda-5.jpg", tags: ["新品"] },
  { id: 104, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-006", image: "images/mazda-6.jpg", tags: ["新品"] },
  { id: 105, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-007", image: "images/mazda-7.jpg", tags: ["新品"] },
  { id: 106, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-008", image: "images/mazda-8.jpg", tags: ["新品"] },
  { id: 107, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-009", image: "images/mazda-9.jpg", tags: ["新品"] },
  { id: 108, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-010", image: "images/mazda-10.jpg", tags: ["新品"] },
  { id: 109, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-011", image: "images/mazda-11.jpg", tags: ["新品"] },
  { id: 110, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-012", image: "images/mazda-12.jpg", tags: ["新品"] },
  { id: 111, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-013", image: "images/mazda-13.jpg", tags: ["新品"] },
  { id: 112, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-014", image: "images/mazda-14.jpg", tags: ["新品"] },
  { id: 113, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-015", image: "images/mazda-15.jpg", tags: ["新品"] },
  { id: 114, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-016", image: "images/mazda-16.jpg", tags: ["新品"] },
  { id: 115, name: "馬自達 方向盤", category: "馬自達", brand: "煊怡車改", price: "NT$0", code: "MZ-017", image: "images/mazda-17.jpg", tags: ["新品"] },

  // ==================== 奧迪 ====================
  { id: 116, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-001", image: "images/audi-1.jpg", tags: ["新品"] },
  { id: 117, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-002", image: "images/audi-2.jpg", tags: ["新品"] },
  { id: 118, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-003", image: "images/audi-3.jpg", tags: ["新品"] },
  { id: 119, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-004", image: "images/audi-4.jpg", tags: ["新品"] },
  { id: 120, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-005", image: "images/audi-5.jpg", tags: ["新品"] },
  { id: 121, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-006", image: "images/audi-6.jpg", tags: ["新品"] },
  { id: 122, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-007", image: "images/audi-7.jpg", tags: ["新品"] },
  { id: 123, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-008", image: "images/audi-8.jpg", tags: ["新品"] },
  { id: 124, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-009", image: "images/audi-9.jpg", tags: ["新品"] },
  { id: 125, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-010", image: "images/audi-10.jpg", tags: ["新品"] },
  { id: 126, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-012", image: "images/audi-12.jpg", tags: ["新品"] },
  { id: 127, name: "奧迪 方向盤", category: "奧迪", brand: "煊怡車改", price: "NT$0", code: "AD-013", image: "images/audi-13.jpg", tags: ["新品"] },

  // ==================== INFINITI ====================
  { id: 128, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-001", image: "images/infiniti-1.jpg", tags: ["新品"] },
  { id: 129, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-002", image: "images/infiniti-2.jpg", tags: ["新品"] },
  { id: 130, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-003", image: "images/infiniti-3.jpg", tags: ["新品"] },
  { id: 131, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-004", image: "images/infiniti-4.jpg", tags: ["新品"] },
  { id: 132, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-005", image: "images/infiniti-5.jpg", tags: ["新品"] },
  { id: 133, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-006", image: "images/infiniti-6.jpg", tags: ["新品"] },
  { id: 134, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-007", image: "images/infiniti-7.jpg", tags: ["新品"] },
  { id: 135, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-008", image: "images/infiniti-8.jpg", tags: ["新品"] },
  { id: 136, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-009", image: "images/infiniti-9.jpg", tags: ["新品"] },
  { id: 137, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-010", image: "images/infiniti-10.jpg", tags: ["新品"] },
  { id: 138, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-011", image: "images/infiniti-11.jpg", tags: ["新品"] },
  { id: 139, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-012", image: "images/infiniti-12.jpg", tags: ["新品"] },
  { id: 140, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-013", image: "images/infiniti-13.jpg", tags: ["新品"] },
  { id: 141, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-014", image: "images/infiniti-14.jpg", tags: ["新品"] },
  { id: 142, name: "INFINITI 方向盤", category: "INFINITI", brand: "煊怡車改", price: "NT$0", code: "IF-015", image: "images/infiniti-15.jpg", tags: ["新品"] },

  // ==================== 瑪莎拉蒂 ====================
  { id: 143, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-001", image: "images/maserati-1.jpg", tags: ["新品"] },
  { id: 144, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-002", image: "images/maserati-2.jpg", tags: ["新品"] },
  { id: 145, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-003", image: "images/maserati-3.jpg", tags: ["新品"] },
  { id: 146, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-004", image: "images/maserati-4.jpg", tags: ["新品"] },
  { id: 147, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-005", image: "images/maserati-5.jpg", tags: ["新品"] },
  { id: 148, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-006", image: "images/maserati-6.jpg", tags: ["新品"] },
  { id: 149, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-007", image: "images/maserati-7.jpg", tags: ["新品"] },
  { id: 150, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-008", image: "images/maserati-8.jpg", tags: ["新品"] },
  { id: 151, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-009", image: "images/maserati-9.jpg", tags: ["新品"] },
  { id: 152, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-010", image: "images/maserati-10.jpg", tags: ["新品"] },
  { id: 153, name: "瑪莎拉蒂 方向盤", category: "瑪莎拉蒂", brand: "煊怡車改", price: "NT$0", code: "MS-011", image: "images/maserati-11.jpg", tags: ["新品"] },
];
