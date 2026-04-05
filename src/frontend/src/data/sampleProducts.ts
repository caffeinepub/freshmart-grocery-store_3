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
  {
    id: BigInt(23),
    name: "Kiwi Fruit (6-pack)",
    description:
      "Tangy-sweet kiwis loaded with vitamin C and antioxidants. Great for salads and smoothies.",
    category: "Fruits",
    price: 3.49,
    rating: 4.6,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(24),
    name: "Pomegranate",
    description:
      "Juicy pomegranate packed with antioxidants. Perfect for juicing or adding to salads.",
    category: "Fruits",
    price: 4.29,
    rating: 4.7,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(25),
    name: "Fresh Lychee (500g)",
    description:
      "Sweet and fragrant lychees, peeled and ready to enjoy as a tropical treat.",
    category: "Fruits",
    price: 5.99,
    rating: 4.8,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(26),
    name: "Watermelon (Whole)",
    description:
      "Refreshingly sweet seedless watermelon. Hydrating and perfect for summer days.",
    category: "Fruits",
    price: 7.99,
    rating: 4.7,
    inStock: true,
    imageUrl: "",
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
  {
    id: BigInt(27),
    name: "Sweet Corn (4-pack)",
    description:
      "Farm-fresh sweet corn on the cob. Perfect for grilling, boiling, or roasting.",
    category: "Vegetables",
    price: 3.49,
    rating: 4.6,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(28),
    name: "Green Peas (500g)",
    description:
      "Tender, sweet green peas. Great for curries, rice dishes, and stir-fries.",
    category: "Vegetables",
    price: 2.29,
    rating: 4.4,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(29),
    name: "Cauliflower (Head)",
    description:
      "Fresh white cauliflower, versatile for roasting, curries, and stir-fries.",
    category: "Vegetables",
    price: 3.19,
    rating: 4.5,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(30),
    name: "Fresh Ginger Root (250g)",
    description:
      "Aromatic and spicy ginger root. Essential for Indian cooking and herbal teas.",
    category: "Vegetables",
    price: 1.79,
    rating: 4.7,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(31),
    name: "Garlic Bulbs (3-pack)",
    description:
      "Pungent, flavourful garlic bulbs. A must-have for every kitchen.",
    category: "Vegetables",
    price: 1.99,
    rating: 4.8,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(32),
    name: "Bottle Gourd (Lauki)",
    description:
      "Fresh and tender bottle gourd. Light, nutritious, and great for dals and curries.",
    category: "Vegetables",
    price: 2.49,
    rating: 4.3,
    inStock: true,
    imageUrl: "",
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
  {
    id: BigInt(33),
    name: "Roasted Mixed Nuts (250g)",
    description:
      "Crunchy mix of cashews, almonds, and peanuts lightly roasted with sea salt.",
    category: "Snacks",
    price: 6.99,
    rating: 4.7,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(34),
    name: "Masala Peanuts (200g)",
    description:
      "Spicy roasted peanuts coated in a tangy masala blend. Addictively crunchy.",
    category: "Snacks",
    price: 2.49,
    rating: 4.6,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(35),
    name: "Khakhra (Methi) (200g)",
    description:
      "Crispy thin flatbread crackers flavoured with fenugreek. A healthy Indian snack.",
    category: "Snacks",
    price: 3.29,
    rating: 4.5,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(36),
    name: "Popcorn (Butter & Salt)",
    description:
      "Light and airy butter-salted popcorn. Perfect for movie nights.",
    category: "Snacks",
    price: 2.99,
    rating: 4.4,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(37),
    name: "Rice Cakes (Plain, 10-pack)",
    description:
      "Light, gluten-free rice cakes with a satisfying crunch. Great with toppings.",
    category: "Snacks",
    price: 3.49,
    rating: 4.3,
    inStock: true,
    imageUrl: "",
  },
  {
    id: BigInt(38),
    name: "Trail Mix (Tropical, 300g)",
    description:
      "Energising blend of dried mango, pineapple, cashews, and raisins.",
    category: "Snacks",
    price: 5.49,
    rating: 4.6,
    inStock: true,
    imageUrl: "",
  },
];
