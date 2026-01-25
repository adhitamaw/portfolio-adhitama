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
      "Responsible for improving, developing, and maintaining Sales and Aftersales Dashboard visualizations using Power BI Desktop in Fleet Management. Built and maintained data cleansing programs using Python to ensure data quality and consistency for optimal analysis.",
    isCurrent: true,
    color: "primary",
  },
  {
    title: "Laravel 11 Web Developer Bootcamp",
    company: "Sanbercode",
    period: "Feb 2025 — Mar 2025",
    description:
      "Participated in a bootcamp with a final project of building SANBERBOOK website using Laravel with CRUD and authentication features. Implemented admin and user roles with full functionality.",
    isCurrent: false,
    color: "accent",
  },
  {
    title: "Backend and Database Developer Intern",
    company: "BP Batam",
    period: "Jun 2024 — Aug 2024",
    description:
      "Responsible for the development of SPPD Mobile Application, including API development as well as database design and management for BP Batam.",
    isCurrent: false,
    color: "primary",
  },
  {
    title: "AI Integration in Backend App Development",
    company: "MSIB 6 Kampus Merdeka - Ruangguru",
    period: "Feb 2024 — Jun 2024",
    description:
      "Completed the Certified Independent Study Internship Program (Batch 6) with a focus on AI integration in backend application development using Golang.",
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
