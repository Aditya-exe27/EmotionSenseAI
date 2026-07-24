import { motion } from "framer-motion";
import { EMOTIONS } from "../../data/emotions.js";

/**
 * The Spectrum Bar is EmotionSense AI's recurring signature motif:
 * a segmented, glowing bar of the six emotion colors. It stands in
 * for "live" model output across the product without ever faking
 * a real prediction — segments are even-weighted and clearly
 * decorative/structural, not data.
 */
export default function SpectrumBar({ className = "", animated = true, thin = false }) {
  return (
    <div
      className={`flex w-full overflow-hidden rounded-full ${thin ? "h-1.5" : "h-2.5"} ${className}`}
    >
      {EMOTIONS.map((e, i) => (
        <motion.div
          key={e.id}
          initial={animated ? { scaleX: 0 } : false}
          whileInView={animated ? { scaleX: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
          style={{ backgroundColor: e.color, transformOrigin: "left" }}
          className="h-full flex-1"
        />
      ))}
    </div>
  );
}
