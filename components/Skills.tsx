const programmingLanguages = [
  "Python",
  "PHP",
  "Golang",
  "Java",
  "C++",
  "C",
];

const dataAnalytics = [
  "Power BI",
  "Jupyter Notebook",
  "SQL",
  "Data Cleaning",
  "ETL Pipelines",
];

const databaseManagement = [
  "MySQL",
  "Database Design",
  "Query Optimization",
];

const webDevelopment = [
  "Laravel",
  "RESTful API Design",
  "JWT Authentication",
];

const developmentTools = [
  "Visual Studio Code",
  "GitHub",
  "Cursor AI",
];

const languages = [
  "Indonesian (Native)",
  "English (Professional – EPRT Score: 473/677)",
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

        {/* Data Analytics & Visualization */}
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs font-bold text-primary mb-4 uppercase tracking-tighter flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">analytics</span>
            Data Analytics & Visualization
          </p>
          <div className="flex flex-wrap gap-2">
            {dataAnalytics.map((skill) => (
              <span key={skill} className="glass-pill px-3 py-1.5 rounded-lg text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Database Management */}
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs font-bold text-primary mb-4 uppercase tracking-tighter flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">storage</span>
            Database Management
          </p>
          <div className="flex flex-wrap gap-2">
            {databaseManagement.map((skill) => (
              <span key={skill} className="glass-pill px-3 py-1.5 rounded-lg text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Web Development & APIs */}
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs font-bold text-primary mb-4 uppercase tracking-tighter flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">api</span>
            Web Development & APIs
          </p>
          <div className="flex flex-wrap gap-2">
            {webDevelopment.map((skill) => (
              <span key={skill} className="glass-pill px-3 py-1.5 rounded-lg text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs font-bold text-accent mb-4 uppercase tracking-tighter flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">build</span>
            Development Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {developmentTools.map((tool) => (
              <span key={tool} className="glass-pill-purple px-3 py-1.5 rounded-lg text-xs">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-xs font-bold text-accent mb-4 uppercase tracking-tighter flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">translate</span>
            Languages
          </p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span key={lang} className="glass-pill-purple px-3 py-1.5 rounded-lg text-xs">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
