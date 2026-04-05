import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Leaf, Mail, Twitter } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-footer text-white">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-green-400" />
              </div>
              <span className="font-heading font-bold text-xl">
                Fresh<span className="text-green-400">Mart</span>
              </span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-4">
              Your neighborhood grocery store, delivering farm-fresh produce and
              pantry essentials right to your door.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
                data-ocid="footer.instagram.link"
              >
                <Instagram className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
                data-ocid="footer.facebook.link"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter / X"
                data-ocid="footer.twitter.link"
              >
                <Twitter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-white/80 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              {[
                "Help Center",
                "Track Your Order",
                "Returns & Refunds",
                "Contact Us",
                "FAQs",
              ].map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-sm text-white/65 hover:text-white transition-colors"
                    data-ocid="footer.service.link"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-white/80 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {[
                "Fresh Fruits",
                "Vegetables",
                "Dairy & Eggs",
                "Meat & Seafood",
                "Bakery",
                "Beverages",
              ].map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-sm text-white/65 hover:text-white transition-colors"
                    data-ocid="footer.category.link"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-white/80 mb-4">
              Get Fresh Deals
            </h3>
            <p className="text-sm text-white/65 mb-3">
              Subscribe for weekly deals, recipes, and new arrivals.
            </p>
            {subscribed ? (
              <p
                className="text-sm text-green-400 font-semibold"
                data-ocid="footer.newsletter.success_state"
              >
                ✓ Thanks! You're subscribed.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-green-400 rounded-lg text-sm"
                  data-ocid="footer.newsletter.input"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-brand-green hover:bg-brand-green-dark text-white rounded-lg shrink-0"
                  data-ocid="footer.newsletter.submit_button"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year}. Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="px-2 py-0.5 rounded border border-white/20 font-bold">
              VISA
            </span>
            <span className="px-2 py-0.5 rounded border border-white/20 font-bold">
              MC
            </span>
            <span className="px-2 py-0.5 rounded border border-white/20 font-bold">
              PayPal
            </span>
            <span className="px-2 py-0.5 rounded border border-white/20 font-bold">
              Amex
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
