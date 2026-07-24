import { useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "../../lib/clsx.js";

export default function GlowButton({
  children,
  variant = "primary",
  className = "",
  as = "button",
  icon: Icon,
  ...props
}) {
  const Component = useMemo(
    () => (typeof as === "string" ? motion[as] || motion.button : motion(as)),
    [as]
  );

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-void";

  const variants = {
    primary:
      "bg-signal-gradient text-void shadow-glow hover:shadow-glow-cyan hover:brightness-110",
    secondary:
      "glass text-ink hover:border-white/25 hover:bg-white/[0.06]",
    ghost: "text-muted hover:text-ink",
  };

  return (
    <Component
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {Icon && <Icon size={16} strokeWidth={2.25} />}
      {children}
    </Component>
  );
}
