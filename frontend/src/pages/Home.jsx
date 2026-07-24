import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import ParticleField from "../components/ui/ParticleField.jsx";
import SpectrumBar from "../components/ui/SpectrumBar.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import GlowButton from "../components/ui/GlowButton.jsx";
import StatCounter from "../components/ui/StatCounter.jsx";
import EmotionCard from "../components/ui/EmotionCard.jsx";
import FeatureCard from "../components/ui/FeatureCard.jsx";
import WorkflowDiagram from "../components/ui/WorkflowDiagram.jsx";
import { EMOTIONS } from "../data/emotions.js";
import { STATS, FEATURES, MODEL_DESCRIPTION } from "../data/content.js";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-28 overflow-hidden">
        <ParticleField count={30} />
        <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8"
          >
            <Sparkles size={13} className="text-brand-cyan" />
            <span className="font-mono text-xs text-muted tracking-wide">
              NLP · TF-IDF · Supervised Classification
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-ink"
          >
            Read the emotion
            <br />
            <span className="text-gradient">hidden in every sentence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
          >
            EmotionSense AI classifies text into six core emotions using
            classic, explainable NLP — text preprocessing, TF-IDF
            vectorization, and a supervised machine learning classifier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center gap-4"
          >
            <GlowButton as={NavLink} to="/text-analysis" icon={ArrowRight}>
              Analyze text
            </GlowButton>
            <GlowButton as={NavLink} to="/about" variant="secondary" icon={Code2}>
              View project details
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 w-full max-w-md"
          >
            <SpectrumBar />
            <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
              {EMOTIONS.map((e) => (
                <span key={e.id}>{e.label}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-violet/20 blur-[100px]" />
            <SectionHeading
              align="left"
              eyebrow="Model Overview"
              title="A classic, explainable pipeline built for clarity."
            />
            <p className="relative mt-6 text-muted leading-relaxed text-base max-w-3xl">
              {MODEL_DESCRIPTION}
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How it works"
            title="From raw text to a predicted emotion"
            description="Every input passes through the same five-stage pipeline, whether it arrives as a single sentence or a full dataset."
          />
          <div className="mt-14">
            <WorkflowDiagram />
          </div>
        </div>
      </section>

      {/* Emotion classes */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Emotion Classes"
            title="Six emotions, one classifier"
            description="EmotionSense AI is trained to recognize the following emotional categories in text."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EMOTIONS.map((emotion, i) => (
              <EmotionCard key={emotion.id} emotion={emotion} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="Designed for real analysis workflows"
            description="A modular interface layer ready to plug into a live inference backend."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-5xl glass rounded-3xl px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {STATS.map((stat) => (
              <StatCounter key={stat.id} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl glass px-8 py-16 text-center"
        >
          <div className="absolute inset-0 bg-signal-gradient opacity-[0.07]" />
          <h2 className="relative font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
            Ready to see what your text really says?
          </h2>
          <p className="relative text-muted max-w-xl mx-auto mb-8">
            Jump into the text analyzer or upload a dataset — the interface
            is fully wired and waiting on a live model connection.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton as={NavLink} to="/text-analysis" icon={ArrowRight}>
              Start analyzing
            </GlowButton>
            <GlowButton as={NavLink} to="/dataset-analysis" variant="secondary">
              Upload a dataset
            </GlowButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
