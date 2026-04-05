import { Clock, ShieldCheck, Truck } from "lucide-react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: Truck,
    title: "Free Delivery",
    description:
      "Free delivery on all orders over $35. Fast, reliable, same-day options available.",
    color: "text-brand-green",
    bg: "bg-green-50",
  },
  {
    icon: ShieldCheck,
    title: "Fresh Guarantee",
    description:
      "100% freshness guaranteed on every item. Not satisfied? Get a full refund.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our customer support team is here around the clock. Chat, call, or email anytime.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function FeatureStrip() {
  return (
    <section className="py-12 bg-white" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2
          id="features-heading"
          className="font-heading font-bold text-2xl text-center text-foreground mb-8"
        >
          Why Shop FreshMart?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-border hover:shadow-card transition-shadow duration-200"
              data-ocid={`features.item.${idx + 1}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feat.bg} flex items-center justify-center mb-4`}
              >
                <feat.icon className={`w-7 h-7 ${feat.color}`} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
