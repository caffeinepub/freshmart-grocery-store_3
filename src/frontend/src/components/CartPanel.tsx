import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingBag, Tag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

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

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartPanel({ isOpen, onClose }: CartPanelProps) {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
    promoCode,
    promoDiscount,
    applyPromoCode,
    removePromoCode,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoMessage, setPromoMessage] = useState<{
    text: string;
    success: boolean;
  } | null>(null);

  const handleApplyPromo = () => {
    const result = applyPromoCode(promoInput);
    setPromoMessage({ text: result.message, success: result.success });
    if (result.success) setPromoInput("");
  };

  const handleRemovePromo = () => {
    removePromoCode();
    setPromoInput("");
    setPromoMessage(null);
  };

  const deliveryCost = totalPrice >= 999 ? 0 : 99;
  const discountAmount =
    promoDiscount > 0 ? (totalPrice * promoDiscount) / 100 : 0;
  const finalTotal = totalPrice - discountAmount + deliveryCost;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={onClose}
            data-ocid="cart.modal"
          />

          {/* biome-ignore lint/a11y/useSemanticElements: motion.div with aside semantics via role */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            aria-label="Shopping cart"
            aria-modal="true"
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col"
            data-ocid="cart.sheet"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-brand-green" />
                <h2 className="font-heading font-bold text-lg">
                  Your Cart
                  {totalItems > 0 && (
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      ({totalItems} items)
                    </span>
                  )}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Close cart"
                data-ocid="cart.close_button"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center h-full gap-4 text-center px-6"
                  data-ocid="cart.empty_state"
                >
                  <span className="text-6xl">🛒</span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Your cart is empty
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Add some fresh groceries to get started!
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="border-brand-green text-brand-green hover:bg-accent"
                    data-ocid="cart.cancel_button"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <ul className="divide-y divide-border">
                  {items.map((item, idx) => (
                    <li
                      key={item.product.id.toString()}
                      className="flex gap-3 px-5 py-4"
                      data-ocid={`cart.item.${idx + 1}`}
                    >
                      {/* Product thumbnail */}
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden ${
                          CATEGORY_BG[item.product.category] ?? "bg-gray-50"
                        }`}
                      >
                        {item.product.imageUrl ? (
                          <img
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            className="w-full h-full object-contain p-1"
                          />
                        ) : (
                          <span className="text-2xl">
                            {CATEGORY_EMOJI[item.product.category] ?? "🛒"}
                          </span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-foreground truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          ₹{item.product.price} each
                        </p>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity controls */}
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1,
                                )
                              }
                              className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
                              aria-label="Decrease quantity"
                              data-ocid="cart.decrease_qty.button"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-bold w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1,
                                )
                              }
                              className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
                              aria-label="Increase quantity"
                              data-ocid="cart.increase_qty.button"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">
                              ₹{item.product.price * item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeItem(item.product.id)}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                              aria-label={`Remove ${item.product.name}`}
                              data-ocid={`cart.delete_button.${idx + 1}`}
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-5 py-4 space-y-3">
                {/* Promo code section */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-brand-green" />
                    Promo Code
                  </p>
                  {promoCode ? (
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-3 py-2">
                      <div>
                        <span className="text-xs font-bold text-brand-green">
                          {promoCode}
                        </span>
                        <span className="text-xs text-muted-foreground ml-1">
                          ({promoDiscount}% off)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemovePromo}
                        className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                        data-ocid="cart.remove_promo.button"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Input
                        value={promoInput}
                        onChange={(e) => {
                          setPromoInput(e.target.value.toUpperCase());
                          setPromoMessage(null);
                        }}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleApplyPromo()
                        }
                        placeholder="Enter code (e.g. FRESH10)"
                        className="h-8 text-xs rounded-xl flex-1"
                        data-ocid="cart.promo_input"
                      />
                      <Button
                        type="button"
                        onClick={handleApplyPromo}
                        size="sm"
                        className="h-8 px-3 text-xs bg-brand-green hover:bg-brand-green-dark text-white rounded-xl"
                        data-ocid="cart.apply_promo.button"
                      >
                        Apply
                      </Button>
                    </div>
                  )}
                  {promoMessage && !promoCode && (
                    <p
                      className={`text-xs ${
                        promoMessage.success
                          ? "text-brand-green"
                          : "text-destructive"
                      }`}
                    >
                      {promoMessage.text}
                    </p>
                  )}
                </div>

                <Separator />

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Subtotal ({totalItems} items)
                  </span>
                  <span className="font-bold">₹{totalPrice}</span>
                </div>

                {promoDiscount > 0 && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-brand-green font-medium">
                      Discount ({promoDiscount}%)
                    </span>
                    <span className="text-brand-green font-semibold">
                      -₹{discountAmount.toFixed(0)}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="text-brand-green font-semibold">
                    {deliveryCost === 0 ? "Free" : `₹${deliveryCost}`}
                  </span>
                </div>

                {totalPrice < 999 && (
                  <p className="text-xs text-muted-foreground">
                    Add ₹{999 - totalPrice} more for free delivery
                  </p>
                )}

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="font-bold text-base">Total</span>
                  <span className="font-extrabold text-xl text-foreground">
                    ₹{Math.round(finalTotal)}
                  </span>
                </div>

                <Button
                  type="button"
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold rounded-full h-12 text-base"
                  data-ocid="cart.checkout.primary_button"
                >
                  Proceed to Checkout
                </Button>
                <button
                  type="button"
                  onClick={clearCart}
                  className="w-full text-center text-xs text-muted-foreground hover:text-destructive transition-colors"
                  data-ocid="cart.clear.delete_button"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
