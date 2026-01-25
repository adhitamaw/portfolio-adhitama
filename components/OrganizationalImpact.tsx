interface ImpactItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

const impactItems: ImpactItem[] = [
  {
    title: "Logistics Member - Carnival 2023",
    organization: "HIMAIF Telkom University",
    period: "Oct 2023 — Nov 2023",
    description:
      "Served as a logistics member responsible for managing permits for the use of buildings and fields, providing and managing all logistical needs for the event, and supporting the smooth execution before, during, and after Carnival 2023.",
  },
  {
    title: "Logistics Member - Batavia On Telkom",
    organization: "Telkom University",
    period: "Oct 2022 — Jun 2023",
    description:
      "Handled event venue permits, sourced suitable vendors, and provided event requirements for Batavia On Telkom event.",
  },
];

export default function OrganizationalImpact() {
  return (
    <section className="space-y-10">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">
          volunteer_activism
        </span>
        <h2 className="text-2xl font-bold">Organization Experience</h2>
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
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="text-xs text-slate-500 font-bold">
                  {item.period}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-3">{item.organization}</p>
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
