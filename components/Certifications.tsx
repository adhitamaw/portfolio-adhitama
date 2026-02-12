interface Certification {
  name: string;
  icon: string;
  iconColor: "primary" | "accent";
}

const certifications: Certification[] = [
  {
    name: "IEEE 9th International Conference on Software Engineering & Computer Systems (ICSECS) - Published Author (2025)",
    icon: "article",
    iconColor: "primary",
  },
  {
    name: "Data Analytics and Visualization Bootcamp - Dsarea (2026)",
    icon: "analytics",
    iconColor: "accent",
  },
  {
    name: "Kampus Merdeka Batch 6 - AI Integration in Backend Application Development (2024)",
    icon: "smart_toy",
    iconColor: "primary",
  },
  {
    name: "Laravel 11 Web Developer Bootcamp - Sanbercode (2025)",
    icon: "code",
    iconColor: "accent",
  },
  {
    name: "Introduction to Data Analytics - RevoU Mini Course (2026)",
    icon: "query_stats",
    iconColor: "primary",
  },
];

export default function Certifications() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-2xl">
          verified
        </span>
        <h3 className="text-xl font-bold">Certifications</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="glass-card p-3 rounded-xl flex flex-col items-center text-center gap-2 hover:border-primary/50 transition-colors"
          >
            <div
              className={`size-10 rounded-full flex items-center justify-center ${
                cert.iconColor === "primary" ? "bg-primary/10" : "bg-accent/10"
              }`}
            >
              <span
                className={`material-symbols-outlined text-lg ${
                  cert.iconColor === "primary" ? "text-primary" : "text-accent"
                }`}
              >
                {cert.icon}
              </span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
              {cert.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
