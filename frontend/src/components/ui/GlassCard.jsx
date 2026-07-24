import { motion } from "framer-motion";
import clsx from "../../lib/clsx.js";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  as: Component = motion.div,
  ...props
}) {
  return (
    <Component
      className={clsx(
        "glass rounded-2xl",
        hover &&
          "transition-all duration-300 hover:border-white/20 hover:shadow-glow hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
