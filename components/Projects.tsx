interface Project {
  title: string;
  description: string;
  technologies: string[];
  year: string;
  type: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Power BI Dashboard - Car Sales",
    description:
      "Interactive Power BI dashboard for car sales analysis and visualization. Built during Data Analyst & Visualization Bootcamp by DS AREA.",
    technologies: ["Power BI", "Python", "Excel"],
    year: "2025",
    type: "Bootcamp - DS AREA",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZGZhNzdhZTMtODRkYi00ZDE2LTljZTMtZDQ1MzRlY2M0NzZiIiwidCI6IjkwYWZmZTBmLWMyYTMtNDEwOC1iYjk4LTZjZWI0ZTk0ZWYxNSIsImMiOjEwfQ%3D%3D&pageName=25c483cb56256dcc3111",
  },
  {
    title: "Network Anomaly Detection using Q-Learning & DQN",
    description:
      "Research evaluating Q-Learning and Deep Q-Learning for adaptive network anomaly detection using UNSW-NB15 dataset. DQN achieved 99.09% accuracy and 0.9918 F1-score, demonstrating strong generalization against novel threats.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "Q-Learning"],
    year: "2025",
    type: "Research - IEEE ICSECS",
  },
  {
    title: "SANBERBOOK - Book Management Website",
    description:
      "A Laravel-based website to display and manage books with CRUD and authentication features. Includes admin and user roles with commenting functionality.",
    technologies: ["Laravel", "PHP", "MySQL", "Authentication"],
    year: "2025",
    type: "Bootcamp Project",
  },
  {
    title: "CoffeSkuy - Cafe Discovery Platform",
    description:
      "A Laravel-based website designed to find and explore the best cafes. Features include reviewing, rating, favoriting, digital menus, geolocation support, and booking system.",
    technologies: ["Laravel", "PHP", "MySQL", "Geolocation API"],
    year: "2024",
    type: "University Project",
  },
  {
    title: "SPPD Mobile Application - BP Batam",
    description:
      "Backend development for BP Batam's SPPD Mobile Application, including API development and database design and management.",
    technologies: ["REST API", "Database Design", "Backend Development"],
    year: "2024",
    type: "Internship Project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-8 scroll-mt-24">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">
          folder_special
        </span>
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-2xl hover:bg-white/[0.07] transition-all group"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
              <div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-primary font-medium">{project.type}</p>
              </div>
              <span className="text-xs text-slate-500 font-bold shrink-0">
                {project.year}
              </span>
            </div>
            <p className="text-sm text-slate-400 font-sans leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto glass-pill px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 hover:bg-primary/20 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
