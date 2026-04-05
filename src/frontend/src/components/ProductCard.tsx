import { Check, Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";
import type { Product } from "../backend.d";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const CATEGORY_EMOJI: Record<string, string> = {
  Fruits: "🍎",
  Vegetables: "🥦",
  Snacks: "🍿",
  Deals: "🏷️",
};

const CATEGORY_BG: Record<string, string> = {
  Fruits: "bg-red-50",
  Vegetables: "bg-green-50",
  Snacks: "bg-yellow-50",
  Deals: "bg-purple-50",
};

const STAR_POSITIONS = ["s1", "s2", "s3", "s4", "s5"];

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, items } = useCart();
  const cartItem = items.find((i) => i.product.id === product.id);
  const inCart = !!cartItem;

  const emoji = CATEGORY_EMOJI[product.category] ?? "🛒";
  const bgClass = CATEGORY_BG[product.category] ?? "bg-gray-50";
  const roundedRating = Math.round(product.rating);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      className="bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden flex flex-col group"
      data-ocid={`products.item.${index + 1}`}
    >
      {/* Product image area */}
      <div
        className={`relative ${bgClass} flex items-center justify-center h-44 overflow-hidden`}
      >
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-contain p-4"
            loading="lazy"
          />
        ) : (
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </span>
        )}
        {/* Heart button */}
        <button
          type="button"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-red-500 hover:bg-white transition-colors duration-150 shadow-xs"
          aria-label={`Favorite ${product.name}`}
          data-ocid="products.favorite.toggle"
        >
          <Heart className="w-4 h-4" />
        </button>
        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide bg-white px-2 py-1 rounded">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-3">
        <p className="text-xs font-medium text-brand-green uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="font-heading font-semibold text-sm text-foreground leading-snug mb-2 line-clamp-2 flex-1">
          {product.name}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center gap-0.5">
            {STAR_POSITIONS.map((pos, i) => (
              <Star
                key={pos}
                className={`w-3 h-3 ${
                  i < roundedRating
                    ? "fill-amber-400 text-amber-400"
                    : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2 mt-auto">
          <span className="font-bold text-lg text-foreground">
            ₹{product.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200 ${
              inCart
                ? "bg-green-100 text-brand-green border border-brand-green/30"
                : product.inStock
                  ? "bg-brand-green hover:bg-brand-green-dark text-white shadow-xs"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
            data-ocid="products.add_to_cart.button"
          >
            {inCart ? (
              <>
                <Check className="w-3 h-3" />
                In Cart
              </>
            ) : (
              <>
                <ShoppingCart className="w-3 h-3" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
