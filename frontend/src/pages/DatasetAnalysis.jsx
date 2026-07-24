import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Terminal, AlertCircle, BarChart3, Table } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import GlowButton from "../components/ui/GlowButton.jsx";
import Dropzone from "../components/ui/Dropzone.jsx";
import { EMOTIONS } from "../data/emotions.js";
import { predictDataset, ENDPOINTS } from "../lib/api.js";
import { useAnalysis } from "../context/AnalysisContext";

export default function DatasetAnalysis() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [errorMsg, setErrorMsg] = useState("");
  const { results, setResults } = useAnalysis();

  async function handleRun() {
    if (!file) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      // NOTE: predictDataset() is a placeholder — see src/lib/api.js
      const data = await predictDataset(file);

      console.log(data);

      setResults(data);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Dataset inference endpoint is not connected yet. Wire predictDataset() in src/lib/api.js to your backend."
      );
      return;
    }
    setStatus("idle");
  }
  const emotionCounts = EMOTIONS.map((emotion) => ({
  ...emotion,
  count: results.filter(
    (row) => row.emotion === emotion.id
  ).length,
  }));

  const totalPredictions = results.length;
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Dataset Analysis"
          title="Batch-classify emotion across a CSV dataset"
          description="Upload a CSV with a text column and, once connected, EmotionSense AI will identify the dominant emotion in every row."
        />
      </div>

      <div className="mx-auto max-w-4xl mt-14 flex flex-col gap-6">
        <GlassCard className="p-6 sm:p-8" hover={false}>
          <h3 className="font-display text-sm font-semibold text-ink mb-5">
            Upload dataset
          </h3>
          <Dropzone file={file} onFile={setFile} onClear={() => setFile(null)} />

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
            <GlowButton
              icon={PlayCircle}
              onClick={handleRun}
              disabled={!file || status === "loading"}
              className="w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              {status === "loading" ? "Processing…" : "Run batch analysis"}
            </GlowButton>
            <p className="text-xs text-muted">
              Expected column: <code className="font-mono text-brand-cyan">text</code>
            </p>
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
              POST {ENDPOINTS.predictDataset}
            </p>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6 sm:p-8" hover={false}>
            <div className="flex items-center gap-2 mb-6">
              <Table size={16} className="text-brand-cyan" />
              <h3 className="font-display text-sm font-semibold text-ink">
                Row-level results
              </h3>
            </div>
            {results.length > 0 ? (

              <div className="overflow-y-auto max-h-80 rounded-xl border border-white/10">

                <table className="w-full text-sm">

                  <thead className="bg-white/[0.04] sticky top-0">

                    <tr>
                      <th className="text-left px-4 py-3">Text</th>
                      <th className="text-left px-4 py-3">Emotion</th>
                    </tr>

                  </thead>

                  <tbody>

                    {results.map((row, index) => (

                      <tr
                        key={index}
                        className="border-t border-white/5"
                      >

                        <td className="px-4 py-3">
                          {row.text}
                        </td>

                        <td className="px-4 py-3 capitalize font-semibold">
                          {row.emotion}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            ) : (

              <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 py-12 text-center">

                <p className="text-sm text-ink font-medium">
                  No dataset processed yet
                </p>

                <p className="text-xs text-muted max-w-[220px] leading-relaxed">
                  Row-by-row predictions will appear here as a searchable table.
                </p>

              </div>

            )}
          </GlassCard>

          <GlassCard className="p-6 sm:p-8" hover={false}>
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 size={16} className="text-brand-cyan" />
              <h3 className="font-display text-sm font-semibold text-ink">
                Emotion distribution
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {emotionCounts.map((emotion) => {

                const percentage =
                  totalPredictions > 0
                    ? (emotion.count / totalPredictions) * 100
                    : 0;

                return (
                  <div
                    key={emotion.id}
                    className="flex items-center gap-3"
                  >

                    <span className="w-16 text-xs text-muted font-mono">
                      {emotion.label}
                    </span>

                    <div className="h-2 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: emotion.color,
                        }}
                      />
                    </div>

                    <span className="w-10 text-right font-mono text-[11px] text-muted">
                      {emotion.count}
                    </span>

                  </div>
                );

              })}
            </div>
            </GlassCard>
        </div>
      </div>
    </div>
  );
}