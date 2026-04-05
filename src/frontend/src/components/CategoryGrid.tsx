import { motion } from "motion/react";

interface CategoryGridProps {
  activeCategory: string;
  onSelect: (cat: string) => void;
}

const CATEGORIES = [
  {
    label: "Fruits",
    key: "Fruits",
    emoji: "🍎",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    label: "Vegetables",
    key: "Vegetables",
    emoji: "🥦",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    label: "Snacks",
    key: "Snacks",
    emoji: "🍿",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
  },
  {
    label: "Deals",
    key: "Deals",
    emoji: "🏷️",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function CategoryGrid({
  activeCategory,
  onSelect,
}: CategoryGridProps) {
  return (
    <section className="py-10 bg-white" aria-labelledby="categories-heading">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <h2
            id="categories-heading"
            className="font-heading font-bold text-2xl text-foreground"
          >
            Shop by Category
          </h2>
          <button
            type="button"
            onClick={() => onSelect("all")}
            className="text-sm font-semibold text-brand-green hover:text-brand-green-dark transition-colors"
            data-ocid="categories.see_all.link"
          >
            See All →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CATEGORIES.map((cat, idx) => {
            const isActive =
              cat.key.toLowerCase() === activeCategory.toLowerCase();
            return (
              <motion.button
                type="button"
                key={cat.label}
                onClick={() => onSelect(cat.key)}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 ${
                  isActive
                    ? "border-brand-green bg-accent shadow-md"
                    : `${cat.bg} ${cat.border} hover:border-brand-green/50 hover:shadow-card`
                }`}
                data-ocid={`categories.item.${idx + 1}`}
              >
                <span
                  className="text-3xl sm:text-4xl"
                  role="img"
                  aria-label={cat.label}
                >
                  {cat.emoji}
                </span>
                <span
                  className={`text-sm font-semibold text-center leading-tight ${
                    isActive ? "text-brand-green" : "text-foreground"
                  }`}
                >
                  {cat.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
