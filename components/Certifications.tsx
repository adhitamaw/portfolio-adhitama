interface Certification {
  name: string;
  icon: string;
  iconColor: "primary" | "accent";
}

const certifications: Certification[] = [
  {
    name: "Certificate of Author - IEEE ICSECS 2025",
    icon: "article",
    iconColor: "primary",
  },
  {
    name: "Data Analytics and Visualization - Dsarea",
    icon: "analytics",
    iconColor: "accent",
  },
  {
    name: "Intro to Data Analytics - RevoU Mini Course",
    icon: "query_stats",
    iconColor: "primary",
  },
  {
    name: "MSIB Batch 6 - AI Backend Engineering",
    icon: "smart_toy",
    iconColor: "accent",
  },
  {
    name: "Laravel Web Developer - Sanbercode",
    icon: "code",
    iconColor: "primary",
  },
  {
    name: "ECCT English Communication Test (3.00/4.00)",
    icon: "record_voice_over",
    iconColor: "accent",
  },
  {
    name: "EPRT English Test (473/677)",
    icon: "translate",
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
