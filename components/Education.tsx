interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
  icon: string;
  iconColor: "primary" | "accent";
  coursework?: string[];
}

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor of Informatics",
    institution: "Telkom University, Bandung",
    year: "2021 — 2025",
    gpa: "GPA: 3.34/4.00",
    icon: "school",
    iconColor: "primary",
    coursework: [
      "Data Visualization",
      "Backend Engineering",
      "Database Systems",
      "Machine Learning",
      "Software Engineering",
      "Cyber Security",
      "Computer Networks"
    ]
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

      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-2xl group"
          >
            <div className="flex items-start gap-6 mb-4">
              <div className="size-16 rounded-xl glass-card flex items-center justify-center p-3 grayscale group-hover:grayscale-0 transition-all flex-shrink-0">
                <span
                  className={`material-symbols-outlined text-4xl ${
                    item.iconColor === "primary" ? "text-primary" : "text-accent"
                  }`}
                >
                  {item.icon}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base">{item.degree}</h3>
                <p className="text-sm text-slate-400 mb-1">
                  {item.institution}
                </p>
                <p className="text-xs text-slate-500">
                  {item.year} | {item.gpa}
                </p>
              </div>
            </div>
            {item.coursework && (
              <div className="ml-[88px]">
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Relevant Coursework</h4>
                <ul className="space-y-2">
                  {item.coursework.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
