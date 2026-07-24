import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FileSpreadsheet, X } from "lucide-react";

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`;
}

export default function Dropzone({ file, onFile, onClear }) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = useCallback(
    (fileList) => {
      const f = fileList?.[0];
      if (!f) return;
      if (!f.name.toLowerCase().endsWith(".csv")) return;
      onFile(f);
    },
    [onFile]
  );

  if (file) {
    return (
      <div className="glass rounded-2xl p-6 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 border border-brand-cyan/30">
          <FileSpreadsheet size={20} className="text-brand-cyan" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-ink font-medium truncate">{file.name}</p>
          <p className="font-mono text-xs text-muted mt-0.5">
            {formatBytes(file.size)} · CSV file
          </p>
        </div>
        <button
          onClick={onClear}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted hover:text-ink hover:bg-white/[0.06] transition-colors"
          aria-label="Remove file"
        >
          <X size={15} />
        </button>
      </div>
    );
  }

  return (
    <motion.div
      onDragOver={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragActive(false);
        handleFiles(e.dataTransfer.files);
      }}
      onClick={() => inputRef.current?.click()}
      animate={{
        borderColor: dragActive ? "rgba(124,92,255,0.6)" : "rgba(255,255,255,0.12)",
        scale: dragActive ? 1.01 : 1,
      }}
      className="relative cursor-pointer rounded-2xl border-2 border-dashed bg-white/[0.02] px-6 py-16 text-center transition-colors"
    >
      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <div className="flex flex-col items-center gap-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-300 ${
            dragActive
              ? "bg-brand-violet/20 border-brand-violet/50 shadow-glow"
              : "bg-white/[0.04] border-white/10"
          }`}
        >
          <UploadCloud size={26} className={dragActive ? "text-brand-violet" : "text-muted"} />
        </div>
        <div>
          <p className="text-sm font-medium text-ink mb-1">
            Drag and drop your CSV file here
          </p>
          <p className="text-xs text-muted">
            or <span className="text-brand-cyan">browse</span> from your device
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted/70">
          .csv only · text column required
        </p>
      </div>
    </motion.div>
  );
}
