import { motion } from "framer-motion";

export default function FeatureCard({ feature, index = 0 }) {
  const { title, description, icon: Icon } = feature;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="glass rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10">
        <Icon size={19} className="text-brand-cyan" strokeWidth={2} />
      </div>
      <h3 className="font-display text-base font-semibold text-ink mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}
