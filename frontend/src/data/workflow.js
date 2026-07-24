import { Keyboard, ScanText, Sigma, BrainCircuit, Target } from "lucide-react";

export const WORKFLOW = [
  {
    id: "input",
    title: "Input Text",
    detail: "Raw text is submitted as a single entry or as rows within a CSV dataset.",
    icon: Keyboard,
  },
  {
    id: "preprocessing",
    title: "Text Preprocessing",
    detail: "Lowercasing, tokenization, stop-word removal, and normalization clean the raw input.",
    icon: ScanText,
  },
  {
    id: "vectorization",
    title: "TF-IDF Vectorization",
    detail: "Cleaned tokens are converted into weighted numerical feature vectors.",
    icon: Sigma,
  },
  {
    id: "classifier",
    title: "Machine Learning Classifier",
    detail: "A supervised model scores each vector against the six learned emotion classes.",
    icon: BrainCircuit,
  },
  {
    id: "prediction",
    title: "Emotion Prediction",
    detail: "The dominant emotion and its confidence score are returned to the interface.",
    icon: Target,
  },
];
