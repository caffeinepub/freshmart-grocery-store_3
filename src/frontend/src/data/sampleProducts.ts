import type { Product } from "../backend.d";

export const SAMPLE_PRODUCTS: Product[] = [
  // ── Fruits ────────────────────────────────────────────────────────────────
  {
    id: BigInt(1),
    name: "Organic Honeycrisp Apples",
    description:
      "Crisp, sweet apples sourced from local farms. Perfect for snacking or baking.",
    category: "Fruits",
    price: 4.99,
    rating: 4.8,
    inStock: true,
    imageUrl: "/assets/generated/product-apples-transparent.dim_400x400.png",
  },
  {
    id: BigInt(2),
    name: "Ripe Hass Avocados (3-pack)",
    description:
      "Hand-picked, perfectly ripe avocados. Creamy texture, ready to eat.",
    category: "Fruits",
    price: 5.49,
    rating: 4.7,
    inStock: true,
    imageUrl: "/assets/generated/product-avocados-transparent.dim_400x400.png",
  },
  {
    id: BigInt(13),
    name: "Yellow Bananas (Bunch)",
    description:
      "Perfectly ripe yellow bananas, rich in potassium and natural energy.",
    category: "Fruits",
    price: 1.49,
    rating: 4.6,
    inStock: true,
    imageUrl: "/assets/generated/product-bananas-transparent.dim_400x400.png",
  },
  {
    id: BigInt(14),
    name: "Navel Oranges (4-pack)",
    description:
      "Juicy, seedless navel oranges packed with vitamin C. Great for juicing or snacking.",
    category: "Fruits",
    price: 3.99,
    rating: 4.7,
    inStock: true,
    imageUrl: "/assets/generated/product-oranges-transparent.dim_400x400.png",
  },
  {
    id: BigInt(15),
    name: "Ataulfo Mango",
    description:
      "Sweet and buttery Ataulfo mango with minimal fiber. Perfect for smoothies and desserts.",
    category: "Fruits",
    price: 2.29,
    rating: 4.8,
    inStock: true,
    imageUrl: "/assets/generated/product-mango-transparent.dim_400x400.png",
  },
  {
    id: BigInt(16),
    name: "Red Seedless Grapes (1 lb)",
    description:
      "Plump, sweet red seedless grapes. Washed and ready to enjoy straight from the bag.",
    category: "Fruits",
    price: 4.49,
    rating: 4.5,
    inStock: true,
    imageUrl: "/assets/generated/product-grapes-transparent.dim_400x400.png",
  },
  {
    id: BigInt(17),
    name: "Fresh Strawberries (1 lb)",
    description:
      "Bright red, locally sourced strawberries bursting with sweetness.",
    category: "Fruits",
    price: 3.99,
    rating: 4.9,
    inStock: true,
    imageUrl:
      "/assets/generated/product-strawberries-transparent.dim_400x400.png",
  },
  {
    id: BigInt(12),
    name: "Cherry Tomatoes (Pint)",
    description:
      "Bite-sized heirloom cherry tomatoes. Bursting with sweet flavor.",
    category: "Fruits",
    price: 3.99,
    rating: 4.6,
    inStock: true,
    imageUrl:
      "/assets/generated/product-cherry-tomatoes-transparent.dim_400x400.png",
  },

  // ── Vegetables ────────────────────────────────────────────────────────────
  {
    id: BigInt(3),
    name: "Fresh Baby Spinach",
    description:
      "Tender young spinach leaves, triple-washed and ready to serve.",
    category: "Vegetables",
    price: 3.29,
    rating: 4.6,
    inStock: true,
    imageUrl: "/assets/generated/product-spinach-transparent.dim_400x400.png",
  },
  {
    id: BigInt(4),
    name: "Organic Broccoli Crown",
    description:
      "Vibrant green broccoli, packed with nutrients. Great for stir-fries.",
    category: "Vegetables",
    price: 2.79,
    rating: 4.5,
    inStock: true,
    imageUrl: "/assets/generated/product-broccoli-transparent.dim_400x400.png",
  },
  {
    id: BigInt(18),
    name: "Baby Carrots (1 lb bag)",
    description:
      "Crunchy, sweet baby carrots washed and peeled. Great for snacking and cooking.",
    category: "Vegetables",
    price: 2.49,
    rating: 4.5,
    inStock: true,
    imageUrl: "/assets/generated/product-carrots-transparent.dim_400x400.png",
  },
  {
    id: BigInt(19),
    name: "Tri-Color Bell Peppers (3-pack)",
    description:
      "Red, yellow, and green bell peppers. Crisp, sweet, and perfect for any dish.",
    category: "Vegetables",
    price: 4.99,
    rating: 4.6,
    inStock: true,
    imageUrl:
      "/assets/generated/product-bell-peppers-transparent.dim_400x400.png",
  },
  {
    id: BigInt(20),
    name: "Russet Potatoes (5 lb bag)",
    description:
      "Classic russet potatoes perfect for baking, mashing, or frying.",
    category: "Vegetables",
    price: 5.49,
    rating: 4.4,
    inStock: true,
    imageUrl: "/assets/generated/product-potatoes-transparent.dim_400x400.png",
  },
  {
    id: BigInt(21),
    name: "Sweet Yellow Onions (3 lb bag)",
    description:
      "Mild, sweet yellow onions. A kitchen staple for soups, sautés, and salads.",
    category: "Vegetables",
    price: 3.79,
    rating: 4.3,
    inStock: true,
    imageUrl: "/assets/generated/product-onions-transparent.dim_400x400.png",
  },
  {
    id: BigInt(22),
    name: "English Cucumber",
    description:
      "Long, thin-skinned seedless cucumber. Cool and crisp for salads and snacking.",
    category: "Vegetables",
    price: 1.99,
    rating: 4.5,
    inStock: true,
    imageUrl: "/assets/generated/product-cucumber-transparent.dim_400x400.png",
  },

  // ── Dairy ─────────────────────────────────────────────────────────────────
  {
    id: BigInt(5),
    name: "Whole Milk (1 Gallon)",
    description:
      "Rich, creamy whole milk from grass-fed cows. No artificial hormones.",
    category: "Dairy",
    price: 5.99,
    rating: 4.9,
    inStock: true,
    imageUrl: "/assets/generated/product-milk-transparent.dim_400x400.png",
  },
  {
    id: BigInt(6),
    name: "Free-Range Large Eggs (12ct)",
    description:
      "Farm-fresh eggs from free-range hens raised on a vegetarian diet.",
    category: "Dairy",
    price: 6.49,
    rating: 4.8,
    inStock: true,
    imageUrl: "/assets/generated/product-eggs-transparent.dim_400x400.png",
  },
  {
    id: BigInt(11),
    name: "Greek Yogurt (32oz)",
    description:
      "Thick, creamy plain Greek yogurt. High protein, live active cultures.",
    category: "Dairy",
    price: 7.99,
    rating: 4.7,
    inStock: true,
    imageUrl: "/assets/generated/product-yogurt-transparent.dim_400x400.png",
  },

  // ── Meat ──────────────────────────────────────────────────────────────────
  {
    id: BigInt(7),
    name: "Atlantic Salmon Fillet",
    description:
      "Premium, wild-caught Atlantic salmon. Rich in Omega-3 fatty acids.",
    category: "Meat",
    price: 12.99,
    rating: 4.7,
    inStock: true,
    imageUrl: "/assets/generated/product-salmon-transparent.dim_400x400.png",
  },

  // ── Bakery ────────────────────────────────────────────────────────────────
  {
    id: BigInt(8),
    name: "Artisan Sourdough Bread",
    description:
      "Naturally leavened sourdough with a chewy crust and tangy flavor.",
    category: "Bakery",
    price: 7.49,
    rating: 4.9,
    inStock: true,
    imageUrl: "/assets/generated/product-sourdough-transparent.dim_400x400.png",
  },

  // ── Beverages ─────────────────────────────────────────────────────────────
  {
    id: BigInt(9),
    name: "Sparkling Water Variety Pack",
    description:
      "12 cans of assorted flavored sparkling waters. Zero calories, no sugar.",
    category: "Beverages",
    price: 8.99,
    rating: 4.6,
    inStock: true,
    imageUrl:
      "/assets/generated/product-sparkling-water-transparent.dim_400x400.png",
  },

  // ── Snacks ────────────────────────────────────────────────────────────────
  {
    id: BigInt(10),
    name: "Organic Tortilla Chips",
    description:
      "Stone-ground corn chips with sea salt. Certified organic, non-GMO.",
    category: "Snacks",
    price: 4.29,
    rating: 4.4,
    inStock: true,
    imageUrl: "/assets/generated/product-chips-transparent.dim_400x400.png",
  },
];
