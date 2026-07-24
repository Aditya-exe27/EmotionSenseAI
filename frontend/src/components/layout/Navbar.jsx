import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import clsx from "../../lib/clsx.js";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/text-analysis", label: "Text Analysis" },
  { to: "/dataset-analysis", label: "Dataset Analysis" },
  { to: "/analytics", label: "Analytics" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [window.location?.pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={clsx(
            "glass flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300",
            scrolled ? "h-14" : "h-16"
          )}
        >
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-signal-gradient shadow-glow">
              <Zap size={16} className="text-void" strokeWidth={2.5} />
            </span>
            <span className="font-display text-base font-semibold text-ink tracking-tight">
              EmotionSense<span className="text-brand-cyan">AI</span>
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  clsx(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/10"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/text-analysis"
              className="rounded-full bg-signal-gradient px-5 py-2 text-sm font-display font-medium text-void shadow-glow hover:shadow-glow-cyan hover:brightness-110 transition-all duration-300"
            >
              Try it live
            </NavLink>
          </div>

          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="glass rounded-2xl p-3 flex flex-col gap-1">
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      "rounded-xl px-4 py-3 text-sm font-medium",
                      isActive ? "bg-white/[0.07] text-ink" : "text-muted"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
