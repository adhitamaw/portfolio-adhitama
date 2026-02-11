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
    title: "Coffeskuy Website",
    description:
      "Developed a Laravel-based platform for discovering and reviewing cafes. Implemented rating, review, favorites, digital menu, and booking features. Integrated user and admin roles within a single ecosystem.",
    technologies: ["Laravel", "PHP", "MySQL", "Authentication"],
    year: "2024",
    type: "Campus Project - Telkom University",
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

      {/* Power BI Dashboard Embed */}
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
          <div>
            <h3 className="font-bold text-lg text-primary">
              Car Sales Dashboard
            </h3>
            <p className="text-xs text-slate-400 font-medium">Data Analyst & Visualization Bootcamp by DS AREA</p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: '56.25%' }}>
          <iframe 
            title="Car Sales Dashboard" 
            src="https://app.powerbi.com/view?r=eyJrIjoiZGZhNzdhZTMtODRkYi00ZDE2LTljZTMtZDQ1MzRlY2M0NzZiIiwidCI6IjkwYWZmZTBmLWMyYTMtNDEwOC1iYjk4LTZjZWI0ZTk0ZWYxNSIsImMiOjEwfQ%3D%3D" 
            className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
            allowFullScreen={true}
          />
        </div>
        <p className="text-sm text-slate-400 font-sans leading-relaxed mb-4 mt-4">
          Developed an interactive car sales dashboard using Power BI to analyze sales performance from 2022 to 2025. 
          The dashboard provides insights into revenue trends, units sold, top-performing brands, dealers, and salespersons, 
          as well as customer demographics, body style preferences, and payment methods. Through data cleaning, modeling, 
          and effective visualization, this dashboard supports performance monitoring and data-driven decision making.
        </p>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Microsoft Power BI</span>
          <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Python</span>
          <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Microsoft Excel</span>
          <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Critical Thinking</span>
        </div>
        
        {/* PDF Viewer */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-slate-300 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">picture_as_pdf</span>
              Portfolio Documentation
            </h4>
            <a
              href="/Data Analyst Car Sales Portofolio_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden glass-pill px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 hover:bg-primary/20 transition-all"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Open PDF
            </a>
          </div>
          <div className="relative w-full overflow-auto rounded-xl border border-white/10 h-[400px] md:h-[600px]" style={{ WebkitOverflowScrolling: 'touch' }}>
            <iframe 
              src="/Data Analyst Car Sales Portofolio_compressed.pdf"
              className="w-full h-full"
              title="Car Sales Portfolio PDF"
            />
          </div>
        </div>
      </div>

      {/* RevoU Mini Course Project */}
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
          <div>
            <h3 className="font-bold text-lg text-primary">
              RevoU Mini Course Project - Intro to Data Analytics
            </h3>
            <p className="text-xs text-slate-400 font-medium">Data Analytics Mini Course • RevoU • 2026</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 font-sans leading-relaxed mb-4">
          Conducted data evaluation on a bakery's sales performance using transaction datasets from January 2021. 
          The analysis successfully identified key trends, such as peak sales periods and the best-selling product 
          (Traditional Baguette), and generated data-driven strategy recommendations to optimize weekend production 
          and minimize operational waste through more accurate inventory management.
        </p>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Data Analytics</span>
          <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Data Analysis</span>
          <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Data Visualization</span>
          <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Microsoft Excel</span>
          <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Spreadsheets</span>
        </div>
        
        {/* PDF Viewer */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-slate-300 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">picture_as_pdf</span>
              Analysis Documentation
            </h4>
            <a
              href="/Adhitama Wichaksono_Analisis Tren Penjualan Bakery.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden glass-pill px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 hover:bg-primary/20 transition-all"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Open PDF
            </a>
          </div>
          <div className="relative w-full overflow-auto rounded-xl border border-white/10 h-[400px] md:h-[600px]" style={{ WebkitOverflowScrolling: 'touch' }}>
            <iframe 
              src="/Adhitama Wichaksono_Analisis Tren Penjualan Bakery.pdf"
              className="w-full h-full"
              title="Bakery Sales Analysis PDF"
            />
          </div>
        </div>
      </div>

      {/* IEEE Conference Paper */}
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
          <div>
            <h3 className="font-bold text-lg text-primary">
              Network Anomaly Detection for Intrusion Detection Systems Using Q-Learning and Deep Q-Learning
            </h3>
            <p className="text-xs text-slate-400 font-medium">IEEE ICSECS Conference • 2025</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 font-sans leading-relaxed mb-4">
          Research evaluating Q-Learning and Deep Q-Learning (DQN) for adaptive network anomaly detection using the UNSW-NB15 dataset. 
          Addressing data imbalance via SMOTE-Tomek, it simulates zero-day scenarios by excluding specific attacks. DQN outperformed 
          Q-Learning, achieving 99.09% accuracy and 0.9918 F1-score. The model demonstrated strong generalization against novel threats 
          with negligible performance drops, proving its effectiveness for securing modern network systems.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap gap-2">
            <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Python</span>
            <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Machine Learning</span>
            <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">Deep Q-Learning</span>
            <span className="glass-pill-neutral px-2 py-1 rounded text-[10px] uppercase tracking-wider">SMOTE-Tomek</span>
          </div>
          <div className="flex gap-2">
            <a
              href="https://ieeexplore.ieee.org/document/11279087"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 hover:bg-primary/20 transition-all"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              View on IEEE Xplore
            </a>
            <a
              href="https://github.com/adhitamaw/Anomaly-Detection-using-Reinforcement-Learning"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 hover:bg-primary/20 transition-all"
            >
              <span className="material-symbols-outlined text-sm">code</span>
              GitHub
            </a>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-slate-300 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">slideshow</span>
              Conference Presentation
            </h4>
            <a
              href="/Conference Adhit icsecs 2025 (4)_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden glass-pill px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 hover:bg-primary/20 transition-all"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Open PDF
            </a>
          </div>
          <div className="relative w-full overflow-auto rounded-xl border border-white/10 h-[400px] md:h-[600px]" style={{ WebkitOverflowScrolling: 'touch' }}>
            <iframe 
              src="/Conference Adhit icsecs 2025 (4)_compressed.pdf"
              className="w-full h-full"
              title="IEEE ICSECS Conference Paper PDF"
            />
          </div>
        </div>
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
