const programmingLanguages = [
  "Python",
  "PHP",
  "Golang",
  "Java",
  "C++",
  "C",
];

const frameworks = [
  "Laravel",
  "Power BI",
  "MySQL",
  "REST API",
  "Data Cleaning",
  "Data Visualization",
  "Dashboard Development",
];

const softSkills = [
  "Analytical Thinking",
  "Critical Thinking",
  "Teamwork",
  "Time Management",
];

const tools = [
  "VS Code",
  "Jupyter Notebook",
  "Power BI",
  "Cursor AI",
  "GitHub",
  "MySQL",
  "Microsoft Office",
  "Canva",
  "Figma",
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8 scroll-mt-24">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">
          psychology
        </span>
        <h2 className="text-2xl font-bold">Skills &amp; Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Programming Languages */}
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs font-bold text-primary mb-4 uppercase tracking-tighter flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">code</span>
            Programming Languages
          </p>
          <div className="flex flex-wrap gap-2">
            {programmingLanguages.map((skill) => (
              <span key={skill} className="glass-pill px-3 py-1.5 rounded-lg text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs font-bold text-primary mb-4 uppercase tracking-tighter flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">terminal</span>
            Frameworks & Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((skill) => (
              <span key={skill} className="glass-pill px-3 py-1.5 rounded-lg text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs font-bold text-accent mb-4 uppercase tracking-tighter flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">groups</span>
            Soft Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="glass-pill-purple px-3 py-1.5 rounded-lg text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Software */}
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-tighter flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">build</span>
            Tools & Software
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((item) => (
              <span
                key={item}
                className="glass-pill-neutral px-3 py-1.5 rounded-lg text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
