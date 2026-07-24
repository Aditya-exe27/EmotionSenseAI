/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05060A",
        deep: "#0A0D18",
        surface: "#0F1322",
        line: "rgba(255,255,255,0.08)",
        muted: "#8A93A6",
        ink: "#E7E9F2",
        brand: {
          violet: "#7C5CFF",
          cyan: "#35D0BA",
        },
        emotion: {
          joy: "#FFC857",
          sadness: "#5B8DEF",
          anger: "#FF5C5C",
          fear: "#9D6BFF",
          surprise: "#35D0BA",
          neutral: "#8A93A6",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(90deg, #7C5CFF 0%, #35D0BA 100%)",
        "spectrum-gradient":
          "linear-gradient(90deg, #FFC857 0%, #FF5C5C 20%, #9D6BFF 40%, #5B8DEF 60%, #35D0BA 80%, #8A93A6 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124,92,255,0.45)",
        "glow-cyan": "0 0 40px -10px rgba(53,208,186,0.45)",
        "inner-line": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0%,0%) scale(1)" },
          "33%": { transform: "translate(4%,-6%) scale(1.08)" },
          "66%": { transform: "translate(-3%,4%) scale(0.96)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(6px)" },
        },
        drift: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.55 },
          "50%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        aurora1: "aurora 22s ease-in-out infinite",
        aurora2: "aurora 28s ease-in-out infinite reverse",
        aurora3: "aurora 34s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        drift: "drift 6s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
