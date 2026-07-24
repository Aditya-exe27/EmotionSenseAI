import {
  FileText,
  Table2,
  LineChart,
  ShieldCheck,
  Layers,
  RefreshCw,
} from "lucide-react";

export const STATS = [
  { id: "classes", value: 6, suffix: "", label: "Emotion classes" },
  { id: "pipeline", value: 3, suffix: "-stage", label: "NLP pipeline" },
  { id: "modes", value: 2, suffix: "", label: "Analysis modes" },
  { id: "arch", value: 100, suffix: "%", label: "API-ready architecture" },
];

export const FEATURES = [
  {
    id: "single",
    title: "Single-Text Prediction",
    description:
      "Paste or type any sentence and prepare it for instant emotion classification once the model endpoint is connected.",
    icon: FileText,
  },
  {
    id: "batch",
    title: "Batch CSV Analysis",
    description:
      "Upload a dataset of text entries and identify the dominant emotion across every row in one pass.",
    icon: Table2,
  },
  {
    id: "analytics",
    title: "Visual Analytics",
    description:
      "Explore emotion distribution, confidence trends, and dataset-level insights through interactive charts.",
    icon: LineChart,
  },
  {
    id: "architecture",
    title: "Clean Architecture",
    description:
      "Modular, reusable components built for a straightforward hand-off to any backend inference service.",
    icon: Layers,
  },
  {
    id: "reliable",
    title: "Built for Reliability",
    description:
      "A predictable, well-typed interface layer designed to fail gracefully and surface clear system states.",
    icon: ShieldCheck,
  },
  {
    id: "retrain",
    title: "Retraining-Ready",
    description:
      "Designed with future model retraining and optimization cycles in mind, without locking in assumptions.",
    icon: RefreshCw,
  },
];

export const MODEL_DESCRIPTION =
  "EmotionSense AI is an NLP-based emotion classification system that predicts the underlying emotion in textual data. The model is trained using text preprocessing techniques, TF-IDF vectorization, and a supervised machine learning classifier. It supports both single-text prediction and batch analysis of CSV datasets by identifying the dominant emotion in each text entry. The system is designed to provide accurate and efficient emotion analysis while allowing future improvements through model retraining and optimization.";
