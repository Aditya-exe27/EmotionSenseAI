import { NavLink } from "react-router-dom";
import { Zap, Code2, Globe, Mail } from "lucide-react";
import SpectrumBar from "../ui/SpectrumBar.jsx";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-signal-gradient">
                <Zap size={16} className="text-void" strokeWidth={2.5} />
              </span>
              <span className="font-display text-base font-semibold text-ink">
                EmotionSense<span className="text-brand-cyan">AI</span>
              </span>
            </div>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              An NLP-based emotion classification system built with text
              preprocessing, TF-IDF vectorization, and a supervised machine
              learning classifier.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Code2, Globe, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted hover:text-ink hover:border-white/20 transition-colors"
                  aria-label="social link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-ink mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><NavLink to="/text-analysis" className="hover:text-ink transition-colors">Text Analysis</NavLink></li>
              <li><NavLink to="/dataset-analysis" className="hover:text-ink transition-colors">Dataset Analysis</NavLink></li>
              <li><NavLink to="/analytics" className="hover:text-ink transition-colors">Analytics</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-ink mb-4">
              Project
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><NavLink to="/about" className="hover:text-ink transition-colors">About the model</NavLink></li>
              <li><NavLink to="/" className="hover:text-ink transition-colors">Home</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <SpectrumBar thin animated={false} />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-xs text-muted font-mono">
            <span>© {new Date().getFullYear()} EmotionSense AI project.</span>
            <span>Powered by React · FastAPI · Scikit-learn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
