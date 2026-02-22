interface ImpactItem {
  title: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const impactItems: ImpactItem[] = [
  {
    title: "Carnival HIMAIF (Informatics, Telkom University)",
    role: "Logistics Division Staff",
    organization: "HIMAIF (Himpunan Mahasiswa Informatika)",
    location: "Telkom University",
    period: "October 2023 — November 2023",
    responsibilities: [
      "Managed venue and field permits for a large-scale university carnival event",
      "Coordinated logistics operations, including equipment procurement, vendor management, and distribution of event materials",
      "Collaborated with cross-functional committees and external stakeholders to ensure the event was executed on time and within budget"
    ],
  },
  {
    title: "Batavia On Telkom (Cultural Festival)",
    role: "Logistics Division Staff",
    organization: "Telkom University",
    location: "Telkom University",
    period: "October 2022 — June 2023",
    responsibilities: [
      "Secured venue permits and maintained vendor coordination for a university cultural festival",
      "Managed procurement and organization of event resources to ensure smooth multi-day operations",
      "Demonstrated strong teamwork and coordination skills in handling logistics for a major university event"
    ],
  },
];

export default function OrganizationalImpact() {
  return (
    <section className="space-y-10">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">
          volunteer_activism
        </span>
        <h2 className="text-2xl font-bold">Leadership & Organizational Experience</h2>
      </div>

      <div className="relative pl-8 space-y-12">
        {/* Timeline Line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-800"></div>

        {impactItems.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-10 top-1 size-4 rounded-full border-2 border-slate-700 bg-background-dark group-hover:border-primary transition-colors"></div>

            {/* Card */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">{item.role}</h3>
                  <p className="text-sm text-primary mt-1">{item.title}</p>
                </div>
                <span className="text-xs text-slate-500 font-bold whitespace-nowrap ml-4">
                  {item.period}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-1">{item.organization}</p>
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
