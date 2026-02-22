interface TimelineItem {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  isCurrent: boolean;
  color: "primary" | "accent";
}

const careerTimeline: TimelineItem[] = [
  {
    title: "Data Analyst & Engineer – Fleet Management (Internship)",
    company: "PT. Toyota-Astra Motor",
    location: "Jakarta, Indonesia",
    period: "October 2025 — December 2025",
    responsibilities: [
      "Developed and maintained interactive Sales & Aftersales dashboards using Power BI to monitor fleet performance, sales trends, and operational KPIs, reducing dashboard load time from ~45 seconds to 10 seconds by optimizing the data model, minimizing unnecessary calculated columns, and refining DAX measures",
      "Designed and implemented reusable Python-based data cleansing pipelines to automate preprocessing workflows and improve data accuracy and consistency across multiple data sources",
      "Collaborated with cross-functional teams to identify business requirements and translate them into insightful visualizations that support data-driven decision-making",
      "Performed regular data updates, validation, and maintenance to ensure data quality, reliability, and consistency in supporting operational activities and business analysis"
    ],
    isCurrent: false,
    color: "primary",
  },
  {
    title: "Backend Developer (Internship)",
    company: "Badan Pengusahaan Batam (BP Batam)",
    location: "Batam, Indonesia",
    period: "June 2024 — August 2024",
    responsibilities: [
      "Developed 10 RESTful APIs using PHP and MySQL to support the SPPD management system, handling official travel records, employee data, participants, and expense transactions",
      "Designed a MySQL database with an integrated table structure and optimized queries to improve data access efficiency in backend services",
      "Implemented API security through parameterized queries to prevent SQL injection, CORS configuration, and standardized structured JSON responses",
      "Collaborated with front-end developers to integrate APIs and implement business logic to maintain data integrity"
    ],
    isCurrent: false,
    color: "primary",
  },
  {
    title: "AI Integration In Backend Application Development (Independent Study Program)",
    company: "Ruangguru, Kampus Merdeka (MSIB 6)",
    location: "Remote",
    period: "February 2024 — June 2024",
    responsibilities: [
      "Developed RESTful backend services using Golang by applying clean architecture principles, middleware, and modular error handling",
      "Designed and optimized PostgreSQL databases through normalization, indexing, and query optimization (JOIN), integrated using ORM (GORM) for efficient data management",
      "Implemented JWT-based authentication and authorization to secure application endpoints",
      "Integrated AI models (HuggingFace) into the Golang backend to develop text translation and AI-powered chat features via REST API"
    ],
    isCurrent: false,
    color: "accent",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="space-y-10 scroll-mt-24">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">
          work_history
        </span>
        <h2 className="text-2xl font-bold">Career Timeline</h2>
      </div>

      <div className="relative pl-8 space-y-12">
        {/* Timeline Line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent glow-line"></div>

        {careerTimeline.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div
              className={`absolute -left-10 top-0 size-4 rounded-full border-4 border-background-dark ring-4 ${
                item.color === "primary"
                  ? "bg-primary ring-primary/20"
                  : "bg-accent ring-accent/20"
              }`}
            ></div>

            {/* Card */}
            <div className="glass-card p-6 rounded-2xl hover:bg-white/[0.07] transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span
                  className={`text-xs font-bold ${
                    item.isCurrent ? "text-primary" : "text-slate-500"
                  } whitespace-nowrap ml-4`}
                >
                  {item.period}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-1">{item.company}</p>
              <p className="text-slate-500 text-xs mb-4">{item.location}</p>
              <ul className="space-y-2">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-sans leading-relaxed">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
