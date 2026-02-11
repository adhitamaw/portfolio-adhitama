interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  isCurrent: boolean;
  color: "primary" | "accent";
}

const careerTimeline: TimelineItem[] = [
  {
    title: "Data Analyst & Engineer - Fleet Management",
    company: "PT. Toyota-Astra Motor",
    period: "Oct 2025 — Dec 2025",
    description:
      "Developed and maintained Sales & Aftersales dashboards using Power BI to support fleet performance analysis. Built Python-based data cleansing pipelines to improve data accuracy and consistency. Supported data-driven decision-making through interactive and insightful visualizations.",
    isCurrent: false,
    color: "primary",
  },
  {
    title: "Laravel 11 Web Developer Bootcamp",
    company: "Sanbercode",
    period: "Feb 2025 — Mar 2025",
    description:
      "Built SANBERBOOK, a Laravel-based web application with authentication and role-based access. Implemented CRUD features for admin and user roles.",
    isCurrent: false,
    color: "accent",
  },
  {
    title: "Backend Developer (Internship)",
    company: "BP Batam",
    period: "Jun 2024 — Aug 2024",
    description:
      "Designed and implemented APIs for the SPPD Mobile Application. Developed and managed MySQL databases, including schema design and data integration. Ensured seamless integration between mobile application and backend services.",
    isCurrent: false,
    color: "primary",
  },
  {
    title: "Backend Application Development",
    company: "Kampus Merdeka x Ruangguru",
    period: "Feb 2024 — Jun 2024",
    description:
      "Implemented JWT-based authentication middleware in a Golang backend to enhance user access security. Developed four secure and efficient backend API endpoints to support data management and processing.",
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
                  }`}
                >
                  {item.period}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-3">{item.company}</p>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
