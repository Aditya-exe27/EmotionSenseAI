import { Smile, CloudRain, Flame, Ghost, Sparkles, Heart } from "lucide-react";

export const EMOTIONS = [
  {
    id: "joy",
    label: "Joy",
    color: "#FFC857",
    icon: Smile,
    description: "Positive, upbeat language — excitement, delight, and satisfaction.",
    example: "\u201cWe just hit our best quarter ever, I couldn't be happier!\u201d",
  },
  {
    id: "sadness",
    label: "Sadness",
    color: "#5B8DEF",
    icon: CloudRain,
    description: "Low-energy, negative sentiment — grief, disappointment, loss.",
    example: "\u201cI keep thinking about what we lost this year.\u201d",
  },
  {
    id: "anger",
    label: "Anger",
    color: "#FF5C5C",
    icon: Flame,
    description: "High-intensity frustration, irritation, or hostility.",
    example: "\u201cThis is the third time the order has been wrong.\u201d",
  },
  {
    id: "fear",
    label: "Fear",
    color: "#9D6BFF",
    icon: Ghost,
    description: "Anxiety, worry, or anticipation of a negative outcome.",
    example: "\u201cI'm not sure we'll make the deadline in time.\u201d",
  },
  {
    id: "surprise",
    label: "Surprise",
    color: "#35D0BA",
    icon: Sparkles,
    description: "Unexpected information — shock, astonishment, disbelief.",
    example: "\u201cWait, they announced the merger already?\u201d",
  },
  {
  id: "love",
  label: "Love",
  color: "#FF4D8D",
  icon: Heart,
  description: "Affection, care, admiration, warmth, and emotional attachment.",
  example: "I love spending time with my family and friends.",
},
];
