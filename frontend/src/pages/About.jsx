import { motion } from "framer-motion";
import {
  ScanText,
  Sigma,
  BrainCircuit,
  Layers,
  RefreshCw,
  GitBranch,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import SpectrumBar from "../components/ui/SpectrumBar.jsx";
import { MODEL_DESCRIPTION } from "../data/content.js";
import { EMOTIONS } from "../data/emotions.js";

const PIPELINE_DETAILS = [
  {
    icon: ScanText,
    title: "Text preprocessing",
    detail:
      "Lowercasing, punctuation stripping, tokenization, and stop-word removal normalize raw text before feature extraction.",
  },
  {
    icon: Sigma,
    title: "TF-IDF vectorization",
    detail:
      "Term Frequency–Inverse Document Frequency converts cleaned tokens into weighted numerical vectors that reflect word importance.",
  },
  {
    icon: BrainCircuit,
    title: "Supervised classifier",
    detail:
      "A trained classifier maps each TF-IDF vector to one of six emotion classes, producing a label and confidence score.",
  },
];

const ARCHITECTURE_POINTS = [
  {
    icon: Layers,
    title: "Modular component design",
    detail:
      "UI atoms (cards, buttons, charts) are isolated from page logic, making it straightforward to restyle or extend any view.",
  },
  {
    icon: GitBranch,
    title: "Clear integration boundary",
    detail:
      "All network calls live in a single api.js module with documented request/response contracts, ready for a real backend.",
  },
  {
    icon: RefreshCw,
    title: "Retraining in mind",
    detail:
      "The interface makes no assumptions about a fixed model version, so future retraining or optimization cycles drop in cleanly.",
  },
];

export default function About() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="About the project"
          title="How EmotionSense AI is built"
          description="A closer look at the model pipeline, the interface architecture, and what comes next."
        />
      </div>

      {/* Model description */}
      <div className="mx-auto max-w-4xl mt-14">
        <GlassCard className="p-8 sm:p-12 relative overflow-hidden" hover={false}>
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-cyan/10 blur-[100px]" />
          <h3 className="font-display text-xl font-semibold text-ink mb-4 relative">
            Model description
          </h3>
          <p className="text-muted leading-relaxed text-base relative">
            {MODEL_DESCRIPTION}
          </p>
          <div className="relative mt-8">
            <SpectrumBar />
          </div>
        </GlassCard>
      </div>

      {/* Pipeline breakdown */}
      <div className="mx-auto max-w-5xl mt-20">
        <SectionHeading
          align="left"
          eyebrow="Pipeline"
          title="Three stages, start to finish"
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {PIPELINE_DETAILS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10">
                <item.icon size={19} className="text-brand-violet" />
              </div>
              <h4 className="font-display text-base font-semibold text-ink mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emotion classes recap */}
      <div className="mx-auto max-w-5xl mt-20">
        <SectionHeading align="left" eyebrow="Coverage" title="Supported emotion classes" />
        <div className="mt-10 flex flex-wrap gap-3">
          {EMOTIONS.map((e) => (
            <div
              key={e.id}
              className="flex items-center gap-2 rounded-full glass px-4 py-2"
              style={{ borderColor: `${e.color}30` }}
            >
              <e.icon size={14} style={{ color: e.color }} />
              <span className="text-sm text-ink">{e.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div className="mx-auto max-w-5xl mt-20">
        <SectionHeading
          align="left"
          eyebrow="Engineering"
          title="Frontend architecture"
          description="Built with React + Vite, Tailwind CSS, Framer Motion, React Router, Lucide React, and Recharts."
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {ARCHITECTURE_POINTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10">
                <item.icon size={19} className="text-brand-cyan" />
              </div>
              <h4 className="font-display text-base font-semibold text-ink mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Roadmap note */}
      <div className="mx-auto max-w-4xl mt-20">
        <GlassCard className="p-8 sm:p-10 text-center" hover={false}>
          <h3 className="font-display text-lg font-semibold text-ink mb-3">
            What's next
          </h3>
          <p className="text-sm text-muted leading-relaxed max-w-xl mx-auto">
            This build is intentionally frontend-only. The next milestone is
            connecting a live inference service to <code className="font-mono text-brand-cyan">src/lib/api.js</code>,
            followed by iterative model retraining and optimization as more
            labeled data becomes available.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
