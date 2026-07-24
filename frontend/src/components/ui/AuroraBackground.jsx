export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 grid-fade" />
      <div
        className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full opacity-40 blur-[120px] animate-aurora1"
        style={{ background: "radial-gradient(circle, #7C5CFF 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full opacity-30 blur-[120px] animate-aurora2"
        style={{ background: "radial-gradient(circle, #35D0BA 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[460px] w-[460px] rounded-full opacity-25 blur-[120px] animate-aurora3"
        style={{ background: "radial-gradient(circle, #FF5C5C 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void" />
    </div>
  );
}
