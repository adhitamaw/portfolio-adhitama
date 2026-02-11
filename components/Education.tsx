interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  icon: string;
  iconColor: "primary" | "accent";
}

const educationItems: EducationItem[] = [
  {
    degree: "S1 Informatika",
    institution: "Telkom University",
    year: "2021 — 2025 • GPA: 3.34",
    icon: "school",
    iconColor: "primary",
  },
  {
    degree: "SMA Negeri 89 Jakarta",
    institution: "Jakarta",
    year: "2018 — 2021",
    icon: "menu_book",
    iconColor: "accent",
  },
];

export default function Education() {
  return (
    <section id="education" className="space-y-8 scroll-mt-24">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">
          school
        </span>
        <h2 className="text-2xl font-bold">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationItems.map((item, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-2xl flex items-center gap-6 group"
          >
            <div className="size-16 rounded-xl glass-card flex items-center justify-center p-3 grayscale group-hover:grayscale-0 transition-all">
              <span
                className={`material-symbols-outlined text-4xl ${
                  item.iconColor === "primary" ? "text-primary" : "text-accent"
                }`}
              >
                {item.icon}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-base">{item.degree}</h3>
              <p className="text-xs text-slate-400">
                {item.institution} • {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
