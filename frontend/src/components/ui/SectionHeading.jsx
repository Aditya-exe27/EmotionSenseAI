import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${alignment} gap-4 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-cyan">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-base leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
