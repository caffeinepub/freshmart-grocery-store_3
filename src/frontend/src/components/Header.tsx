import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Leaf, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartOpen: () => void;
  onCategorySelect: (cat: string) => void;
  activeCategory: string;
}

const CATEGORIES = [
  "Shop All",
  "Fruits",
  "Vegetables",
  "Dairy",
  "Meat",
  "Bakery",
  "Beverages",
  "Snacks",
  "Deals",
];

export default function Header({
  searchQuery,
  onSearchChange,
  onCartOpen,
  onCategorySelect,
  activeCategory,
}: HeaderProps) {
  const { totalItems, totalPrice } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Main header row */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center gap-4 h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 shrink-0"
              data-ocid="header.link"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-green">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground tracking-tight hidden sm:block">
                Fresh<span className="text-brand-green">Mart</span>
              </span>
            </a>

            {/* Search bar */}
            <div className="flex-1 max-w-lg relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search groceries…"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9 rounded-full border-border bg-muted/40 focus-visible:ring-brand-green/50 focus-visible:border-brand-green"
                data-ocid="header.search_input"
              />
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-1 sm:gap-2 ml-auto shrink-0">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="hidden sm:flex flex-col items-center gap-0.5 h-auto py-1 px-2 text-muted-foreground hover:text-brand-green hover:bg-accent"
                data-ocid="header.account.button"
              >
                <User className="w-5 h-5" />
                <span className="text-[10px] font-medium">Account</span>
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="hidden sm:flex flex-col items-center gap-0.5 h-auto py-1 px-2 text-muted-foreground hover:text-brand-green hover:bg-accent"
                data-ocid="header.favorites.button"
              >
                <Heart className="w-5 h-5" />
                <span className="text-[10px] font-medium">Favorites</span>
              </Button>

              {/* Cart pill */}
              <button
                type="button"
                onClick={onCartOpen}
                className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 shadow-sm"
                data-ocid="header.cart.button"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>
                  Cart
                  {totalItems > 0 && (
                    <span className="ml-1">({totalItems})</span>
                  )}
                </span>
                {totalItems > 0 && (
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                type="button"
                className="sm:hidden p-2 text-muted-foreground hover:text-brand-green"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <title>Menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category nav */}
      <nav
        className="bg-white border-b border-border"
        aria-label="Product categories"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5">
            {CATEGORIES.map((cat) => {
              const isActive =
                (cat === "Shop All" && activeCategory === "all") ||
                cat.toLowerCase() === activeCategory.toLowerCase();
              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() =>
                    onCategorySelect(cat === "Shop All" ? "all" : cat)
                  }
                  className={`whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors duration-150 border-b-2 ${
                    isActive
                      ? "border-brand-green text-brand-green"
                      : "border-transparent text-muted-foreground hover:text-brand-green hover:border-brand-green/40"
                  }`}
                  data-ocid={`nav.${cat.toLowerCase().replace(/[^a-z0-9]/g, "")}.tab`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-border px-4 py-3 flex gap-4">
          <button
            type="button"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-green"
          >
            <User className="w-4 h-4" /> Account
          </button>
          <button
            type="button"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-green"
          >
            <Heart className="w-4 h-4" /> Favorites
          </button>
        </div>
      )}
    </header>
  );
}
