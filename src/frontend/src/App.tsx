import { Toaster } from "@/components/ui/sonner";
import { useMemo, useRef, useState } from "react";
import CartPanel from "./components/CartPanel";
import CategoryGrid from "./components/CategoryGrid";
import FeatureStrip from "./components/FeatureStrip";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductGrid from "./components/ProductGrid";
import { CartProvider } from "./context/CartContext";
import { SAMPLE_PRODUCTS } from "./data/sampleProducts";
import { useGetAllProducts } from "./hooks/useQueries";

function AppContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  const { data: backendProducts, isLoading } = useGetAllProducts();

  // Use backend products if available and non-empty, otherwise show sample data.
  // We always have initialData so isLoading never blocks the first render.
  const allProducts = useMemo(() => {
    if (backendProducts && backendProducts.length > 0) {
      return backendProducts;
    }
    return SAMPLE_PRODUCTS;
  }, [backendProducts]);

  const filteredProducts = useMemo(() => {
    let products = allProducts;
    if (activeCategory !== "all") {
      products = products.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase(),
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    return products;
  }, [allProducts, activeCategory, searchQuery]);

  const handleShopNow = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    setSearchQuery("");
    setTimeout(() => {
      productsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const isSearching = searchQuery.trim().length > 0;
  const isFiltered = activeCategory !== "all" || isSearching;

  const sectionTitle = isSearching
    ? `Search results for "${searchQuery}"`
    : activeCategory !== "all"
      ? `${activeCategory} Products`
      : "Featured Fresh Products";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCartOpen={() => setCartOpen(true)}
        onCategorySelect={handleCategorySelect}
        activeCategory={activeCategory}
      />

      <main className="flex-1">
        {/* Hero - only show when not filtering */}
        {!isFiltered && <HeroBanner onShopNow={handleShopNow} />}

        {/* Categories grid */}
        {!isFiltered && (
          <CategoryGrid
            activeCategory={activeCategory}
            onSelect={handleCategorySelect}
          />
        )}

        {/* Products section */}
        <div ref={productsRef}>
          <ProductGrid
            products={filteredProducts}
            isLoading={isLoading && filteredProducts.length === 0}
            title={sectionTitle}
            onSeeAll={
              isFiltered
                ? () => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }
                : undefined
            }
          />
        </div>

        {/* Feature strip - only on homepage */}
        {!isFiltered && <FeatureStrip />}
      </main>

      <Footer />

      {/* Cart panel */}
      <CartPanel isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
