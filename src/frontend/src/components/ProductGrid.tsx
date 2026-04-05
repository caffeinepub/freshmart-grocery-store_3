import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "../backend.d";
import ProductCard from "./ProductCard";

const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"];

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  title: string;
  onSeeAll?: () => void;
}

export default function ProductGrid({
  products,
  isLoading,
  title,
  onSeeAll,
}: ProductGridProps) {
  return (
    <section
      className="py-10 bg-brand-section"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <h2
            id="products-heading"
            className="font-heading font-bold text-2xl text-foreground"
          >
            {title}
          </h2>
          {onSeeAll && (
            <button
              type="button"
              onClick={onSeeAll}
              className="text-sm font-semibold text-brand-green hover:text-brand-green-dark transition-colors"
              data-ocid="products.see_all.link"
            >
              See All →
            </button>
          )}
        </div>

        {isLoading ? (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            data-ocid="products.loading_state"
          >
            {SKELETON_KEYS.map((key) => (
              <div
                key={key}
                className="rounded-2xl border border-border overflow-hidden"
              >
                <Skeleton className="h-40 w-full" />
                <div className="p-3 space-y-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-20" />
                  <div className="flex justify-between pt-1">
                    <Skeleton className="h-5 w-12" />
                    <Skeleton className="h-7 w-24 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16" data-ocid="products.empty_state">
            <p className="text-4xl mb-3">🛒</p>
            <p className="text-muted-foreground font-medium">
              No products found.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Try a different search or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, idx) => (
              <ProductCard
                key={product.id.toString()}
                product={product}
                index={idx}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
