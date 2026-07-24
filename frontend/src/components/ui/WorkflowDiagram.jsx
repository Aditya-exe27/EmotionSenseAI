import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WORKFLOW } from "../../data/workflow.js";

export default function WorkflowDiagram() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3">
        {WORKFLOW.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex items-center md:flex-col"
          >
            <div className="glass group relative flex w-full flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center hover:border-white/20 transition-colors duration-300">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
                Step {i + 1}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal-gradient/10 border border-white/10 group-hover:shadow-glow-cyan transition-shadow duration-300">
                <step.icon size={20} className="text-ink" strokeWidth={1.75} />
              </div>
              <h4 className="font-display text-sm font-semibold text-ink leading-snug">
                {step.title}
              </h4>
              <p className="text-xs text-muted leading-relaxed hidden md:block">
                {step.detail}
              </p>
            </div>

            {i < WORKFLOW.length - 1 && (
              <div className="flex md:hidden items-center justify-center w-10 shrink-0">
                <ArrowRight size={18} className="text-muted" />
              </div>
            )}
            {i < WORKFLOW.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2 items-center justify-center">
                <ArrowRight size={16} className="text-muted" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
