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
      "Developed and maintained interactive Sales & Aftersales dashboards using Power BI to support fleet performance analysis and strategic decision-making for fleet management operations",
      "Built Python-based data cleansing pipelines to improve data accuracy and ensure consistency across multiple systems",
      "Collaborated with cross-functional teams to translate business requirements into actionable data insights through interactive visualizations"
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
      "Designed and implemented APIs for SPPD Mobile Application, streamlining travel request processes",
      "Developed and optimized MySQL database architecture, including schema design, indexing, and data integration to ensure efficient data retrieval and system performance",
      "Ensured seamless integration between mobile frontend and backend services through comprehensive testing and optimization"
    ],
    isCurrent: false,
    color: "primary",
  },
  {
    title: "AI Integration In Backend Application Development (Independent Study Program)",
    company: "Kampus Merdeka (MSIB 6) x Ruangguru",
    location: "Remote",
    period: "February 2024 — June 2024",
    responsibilities: [
      "Implemented JWT-based authentication middleware in Golang backend, enhancing application security and user access management",
      "Developed 4 secure and efficient RESTful API endpoints for data management, processing, and user operations",
      "Participated in code reviews and agile development practices, improving code quality and team collaboration"
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
