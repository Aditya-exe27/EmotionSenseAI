import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Wand2, Eraser, Terminal, AlertCircle } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import GlowButton from "../components/ui/GlowButton.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import { EMOTIONS } from "../data/emotions.js";
import { predictText, ENDPOINTS } from "../lib/api.js";

const SAMPLE = "The sunrise over the mountains this morning was absolutely breathtaking.";

export default function TextAnalysis() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [errorMsg, setErrorMsg] = useState("");
  const [prediction, setPrediction] = useState(null);

  const wordCount = useMemo(
    () => (text.trim() ? text.trim().split(/\s+/).length : 0),
    [text]
  );
  const charCount = text.length;
  const maxChars = 2000;

  async function handleAnalyze() {
    if (!text.trim()) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      // NOTE: predictText() is a placeholder — see src/lib/api.js
      const result = await predictText(text);
      console.log(result);
      setPrediction(result);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Prediction endpoint is not connected yet. Wire predictText() in src/lib/api.js to your inference backend."
      );
      return;
    }
    setStatus("idle");
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Text Analysis"
          title="Classify the emotion in a single passage"
          description="Type or paste any text below. Once connected to a live model, the result panel will populate with the predicted emotion and confidence breakdown."
        />
      </div>

      <div className="mx-auto max-w-5xl mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Input panel */}
        <GlassCard className="lg:col-span-3 p-6 sm:p-8" hover={false}>
          <div className="flex items-center justify-between mb-4">
            <label className="font-display text-sm font-semibold text-ink">
              Your text
            </label>
            <button
              onClick={() => setText(SAMPLE)}
              className="font-mono text-xs text-brand-cyan hover:underline"
            >
              Use sample
            </button>
          </div>

          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, maxChars))}
              placeholder="Enter a sentence, paragraph, or review to analyze its emotional tone…"
              rows={10}
              className="w-full resize-none rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-4 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/40 transition-colors font-body leading-relaxed"
            />
          </div>

          <div className="flex items-center justify-between mt-3 font-mono text-xs text-muted">
            <span>{wordCount} words</span>
            <span className={charCount >= maxChars ? "text-emotion-anger" : ""}>
              {charCount} / {maxChars}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
            <GlowButton
              icon={Wand2}
              onClick={handleAnalyze}
              disabled={!text.trim() || status === "loading"}
              className="w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              {status === "loading" ? "Analyzing…" : "Analyze emotion"}
            </GlowButton>
            <GlowButton
              variant="secondary"
              icon={Eraser}
              onClick={() => {
                setText("");
                setStatus("idle");
                setErrorMsg("");
              }}
              className="w-full sm:w-auto"
            >
              Clear
            </GlowButton>
          </div>

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 flex items-start gap-3 rounded-xl border border-emotion-anger/30 bg-emotion-anger/[0.06] px-4 py-3"
            >
              <AlertCircle size={16} className="text-emotion-anger mt-0.5 shrink-0" />
              <p className="text-xs text-muted leading-relaxed">{errorMsg}</p>
            </motion.div>
          )}

          <div className="mt-6 flex items-start gap-2 rounded-xl bg-white/[0.02] border border-white/5 px-4 py-3">
            <Terminal size={14} className="text-muted mt-0.5 shrink-0" />
            <p className="font-mono text-[11px] text-muted leading-relaxed">
              POST {ENDPOINTS.predictText}
            </p>
          </div>
        </GlassCard>

        {/* Results panel */}
        <GlassCard className="lg:col-span-2 p-6 sm:p-8 flex flex-col" hover={false}>
          <h3 className="font-display text-sm font-semibold text-ink mb-6">
            Prediction result
          </h3>

          {prediction ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-cyan/30 py-10 mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-cyan/10 border border-brand-cyan/30">
                <Wand2 size={24} className="text-brand-cyan" />
              </div>

              <div className="text-center">
                <p className="text-xs text-muted uppercase tracking-wider">
                  Predicted Emotion
                </p>

                <h2 className="text-3xl font-bold text-white mt-2 capitalize">
                  {prediction.emotion}
                </h2>
                <p className="mt-2 text-sm text-muted">
                Confidence: {prediction.confidence}%
              </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/10 py-10 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.04] border border-white/10">
                <Wand2 size={20} className="text-muted" />
              </div>

              <div className="text-center px-6">
                <p className="text-sm text-ink font-medium mb-1">
                  No prediction yet
                </p>

                <p className="text-xs text-muted">
                  Run an analysis to see the dominant emotion.
                </p>
              </div>
            </div>
          )}

          <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted mb-4">
            Confidence by class
          </h4>
          <div className="flex flex-col gap-4">
            {EMOTIONS.map((emotion) => {

              const score = prediction?.scores?.find(
                (s) => s.emotion === emotion.id
              );

              return (
                <div key={emotion.id} className="flex flex-col gap-1.5">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">
                      <emotion.icon
                        size={13}
                        style={{ color: emotion.color }}
                      />
                       <span className="text-xs text-ink font-medium">
                        {emotion.label}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-muted">{score ? `${score.confidence}%` : "—"}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: score ? `${score.confidence}%` : "0%",
                        backgroundColor: emotion.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
