import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Activity, Gauge, PieChart as PieIcon, Database } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import EmptyChart from "../components/ui/EmptyChart.jsx";
import { EMOTIONS } from "../data/emotions.js";
import { ENDPOINTS } from "../lib/api.js";
import { useAnalysis } from "../context/AnalysisContext";


const AXIS_STYLE = { fontSize: 11, fill: "#8A93A6", fontFamily: "IBM Plex Mono" };

const DASHBOARD_CARDS = [
  { id: "total", label: "Total predictions", icon: Activity },
  { id: "confidence", label: "Average confidence", icon: Gauge },
  { id: "dominant", label: "Most common emotion", icon: PieIcon },
  { id: "datasets", label: "Datasets processed", icon: Database },
];

export default function Analytics() {
  const { results } = useAnalysis()
  // Total predictions
const totalPredictions = results.length;

// Count each emotion
const emotionCounts = EMOTIONS.map((emotion) => ({
  ...emotion,
  count: results.filter(
    (row) => row.emotion === emotion.id
  ).length,
}));

// Most common emotion
const mostCommon =
  emotionCounts.reduce((prev, curr) =>
    curr.count > prev.count ? curr : prev,
    emotionCounts[0]
  );

// Number of unique emotions present
const uniqueEmotions =
  emotionCounts.filter(e => e.count > 0).length;

// We have processed one dataset if results exist
const datasetsProcessed =
  results.length > 0 ? 1 : 0;
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Analytics"
          title="A dashboard ready for live model telemetry"
          description="These cards and charts are fully wired to render real analytics — they're just waiting on data from a connected backend."
        />
      </div>

      {/* Dashboard cards */}
      <div className="mx-auto max-w-6xl mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {DASHBOARD_CARDS.map((card) => (
          <GlassCard key={card.id} className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10">
                <card.icon size={17} className="text-brand-cyan" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted/70">
                Live
              </span>
            </div>
            <p className="font-display text-3xl font-semibold text-ink mb-1">{card.id === "total" && totalPredictions} 
              {card.id === "confidence" && "--"} 
              {card.id === "dominant" && mostCommon.label} 
              {card.id === "datasets" && datasetsProcessed}</p>
            <p className="text-xs text-muted">{card.label}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mx-auto max-w-6xl mt-6">
        <div className="flex items-start gap-2 rounded-xl bg-white/[0.02] border border-white/5 px-4 py-3 font-mono text-[11px] text-muted">
          GET {ENDPOINTS.analyticsSummary}
        </div>
      </div>
    </div>
  );
}
