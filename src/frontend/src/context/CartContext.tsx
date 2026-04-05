import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../backend.d";
import type { CartItem, CartState } from "../types/cart";

const CartContext = createContext<CartState | null>(null);

// Valid promo codes: code -> discount percentage
const PROMO_CODES: Record<string, number> = {
  FRESH10: 10,
  SAVE15: 15,
  MART20: 20,
  WELCOME25: 25,
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: bigint) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: bigint, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.product.id !== productId));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i)),
      );
    }
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setPromoCode("");
    setPromoDiscount(0);
  }, []);

  const applyPromoCode = useCallback(
    (code: string): { success: boolean; message: string } => {
      const upper = code.trim().toUpperCase();
      if (!upper)
        return { success: false, message: "Please enter a promo code." };
      if (PROMO_CODES[upper] !== undefined) {
        setPromoCode(upper);
        setPromoDiscount(PROMO_CODES[upper]);
        return {
          success: true,
          message: `Promo code applied! ${PROMO_CODES[upper]}% off your order.`,
        };
      }
      return {
        success: false,
        message: "Invalid promo code. Please try again.",
      };
    },
    [],
  );

  const removePromoCode = useCallback(() => {
    setPromoCode("");
    setPromoDiscount(0);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        promoCode,
        promoDiscount,
        applyPromoCode,
        removePromoCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
