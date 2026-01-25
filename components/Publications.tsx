import Link from "next/link";

interface Publication {
  title: string;
  publisher: string;
  year: string;
  url: string;
}

const publications: Publication[] = [
  {
    title: "Network Anomaly Detection for Intrusion Detection Systems Using Q-Learning and Deep Q-Learning",
    publisher: "IEEE ICSECS Conference",
    year: "2025",
    url: "#",
  },
];

export default function Publications() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-accent text-2xl">
          menu_book
        </span>
        <h3 className="text-xl font-bold">Publications</h3>
      </div>

      <ul className="space-y-3">
        {publications.map((pub, index) => (
          <li key={index} className="group">
            <Link
              href={pub.url}
              className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
            >
              <div>
                <p className="text-sm font-medium">{pub.title}</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold">
                  {pub.publisher} • {pub.year}
                </p>
              </div>
              <span className="material-symbols-outlined text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all text-xl">
                arrow_right_alt
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
