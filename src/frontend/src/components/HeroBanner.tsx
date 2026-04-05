import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroBannerProps {
  onShopNow: () => void;
}

export default function HeroBanner({ onShopNow }: HeroBannerProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "420px" }}
      aria-label="Hero banner"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-freshmart.dim_1400x600.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div
        className="relative container mx-auto px-4 max-w-7xl flex items-center"
        style={{ minHeight: "420px" }}
      >
        <motion.div
          className="max-w-xl py-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">
            Fresh deliveries daily
          </p>
          <h1
            className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight tracking-tight mb-4"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            Farm Fresh,
            <br />
            <span className="text-green-400">Right To You</span>
          </h1>
          <p className="text-white/85 text-lg mb-8 max-w-sm leading-relaxed">
            Shop the freshest produce, dairy, bakery, and more — delivered to
            your door in 6–7 days.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              type="button"
              onClick={onShopNow}
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200 shadow-lg text-base"
              data-ocid="hero.primary_button"
            >
              Start Shopping
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-white/70 text-sm">
              🎉 Get <strong className="text-white">15% off</strong> your first
              order
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
