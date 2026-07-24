import { motion } from "framer-motion";

export default function EmotionCard({ emotion, index = 0 }) {
  const { label, color, icon: Icon, description, example } = emotion;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-white/20"
      style={{ "--glow": color }}
    >
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: color }}
      />
      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${color}1A`, border: `1px solid ${color}40` }}
      >
        <Icon size={20} style={{ color }} strokeWidth={2} />
      </div>
      <h3 className="font-display text-lg font-semibold text-ink mb-2">{label}</h3>
      <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
      <p className="font-mono text-xs text-muted/80 italic border-l-2 pl-3" style={{ borderColor: `${color}60` }}>
        {example}
      </p>
    </motion.div>
  );
}
