export default function DownloadCV() {
  return (
    <div className="pt-8">
      <a 
        href="/2026 CV_ADHITAMA WICHAKSONO.pdf"
        download="CV_Adhitama_Wichaksono.pdf"
        className="w-full md:w-auto flex items-center justify-center gap-3 glass-pill px-8 py-5 rounded-2xl font-bold text-white hover:bg-primary transition-all group overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="relative z-10 material-symbols-outlined">
          download
        </span>
        <span className="relative z-10">Download Full Curriculum Vitae</span>
        <span className="relative z-10 material-symbols-outlined group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </a>
    </div>
  );
}
