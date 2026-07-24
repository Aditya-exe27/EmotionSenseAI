import { ResponsiveContainer } from "recharts";
import { Inbox } from "lucide-react";

export default function EmptyChart({ height = 260, message = "No data yet", children }) {
  return (
    <div className="relative" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-transparent via-surface/40 to-surface/70">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] border border-white/10">
          <Inbox size={16} className="text-muted" />
        </div>
        <p className="text-xs text-muted font-medium">{message}</p>
      </div>
    </div>
  );
}
