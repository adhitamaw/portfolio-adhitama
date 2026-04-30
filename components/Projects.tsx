"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Projects.module.css";

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
    title: "SPPD (Surat Perintah Perjalanan Dinas) Mobile – BP Batam",
    description:
      "A Flutter-based mobile travel order management system integrated with a PHP backend and MySQL database, designed to streamline business trip administration including SPPD creation, companion management, and travel cost calculation.",
    technologies: ["Flutter", "PHP", "MySQL", "REST API"],
    year: "2024",
    type: "BP Batam Internship Project",
    link: "https://github.com/adhitamaw/sppd",
  },
  {
    title: "Task Tracker Plus",
    description:
      "Web-based task management application built using Go (Golang). Helps users organize tasks through category management, priority levels, and deadline tracking. Implements Monolithic Architecture using RESTful API and follows the MVC (Model-View-Controller) design pattern.",
    technologies: ["Go (Golang)", "REST API", "MVC", "PostgreSQL"],
    year: "2024",
    type: "MSIB 6 Ruangguru Project",
    link: "https://github.com/adhitamaw/task-tracker-plus-go",
  },
  {
    title: "AI Model App: Translate & Chat",
    description:
      "Web-based application built with Go that integrates various AI models from Hugging Face for translation, chat/question-answering, and text processing. Features JWT-authenticated endpoints and clean architecture backend.",
    technologies: ["Go (Golang)", "HuggingFace API", "JWT", "REST API"],
    year: "2024",
    type: "MSIB 6 Ruangguru Project",
    link: "https://github.com/adhitamaw/ai-model-app-using-golang",
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const repoProjects = t("projects.items") as any[];

  return (
    <section id="projects" className={styles.section}>
      <div className="section-header">
        <span className="section-icon material-symbols-outlined">folder_special</span>
        <h2 className="section-title">{t("projects.title")}</h2>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.projectHeader}>
          <div>
            <h3 className={styles.projectTitle}>{repoProjects[0].title}</h3>
            <p className={styles.projectType}>Toyota Astra Motor Internship Project | Power BI</p>
          </div>
        </div>
        <p className={styles.projectDesc}>
          {repoProjects[0].desc}
        </p>
        <div className={styles.tags}>
          <span className="pop-badge pop-badge-blue">Microsoft Power BI</span>
          <span className="pop-badge pop-badge-red">Data Analytics</span>
          <span className="pop-badge pop-badge-magenta">Data Visualization</span>
        </div>

        <div className={styles.pdfSection}>
          <div className={styles.pdfHeader}>
            <h4 className={styles.pdfTitle}>
              <span className="material-symbols-outlined">picture_as_pdf</span>
              Portfolio Documentation
            </h4>
            <a
              href="/Adhitama - Portofolio_Project_Power_BI_Fleet_Sales_Dashboard copy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfMobileLink}
            >
              <span className="material-symbols-outlined" style={{fontSize: 16}}>open_in_new</span>
              Open PDF
            </a>
          </div>
          <div className={styles.pdfViewer}>
            <iframe
              src="/Adhitama - Portofolio_Project_Power_BI_Fleet_Sales_Dashboard copy.pdf"
              title="Toyota Fleet Sales Dashboard PDF"
            />
          </div>
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.projectHeader}>
          <div>
            <h3 className={styles.projectTitle}>Car Sales Performance Dashboard</h3>
            <p className={styles.projectType}>Data Analytics & Visualization Project | Power BI | 2026</p>
          </div>
        </div>
        <div className={styles.embedWrapper} style={{ paddingBottom: "56.25%" }}>
          <iframe
            title="Car Sales Dashboard"
            src="https://app.powerbi.com/view?r=eyJrIjoiZGZhNzdhZTMtODRkYi00ZDE2LTljZTMtZDQ1MzRlY2M0NzZiIiwidCI6IjkwYWZmZTBmLWMyYTMtNDEwOC1iYjk4LTZjZWI0ZTk0ZWYxNSIsImMiOjEwfQ%3D%3D"
            allowFullScreen={true}
          />
        </div>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <span className={styles.featureBullet}>•</span>
            <span>Built comprehensive Power BI dashboard tracking total sales, revenue, customer metrics, and trend analysis</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureBullet}>•</span>
            <span>Implemented dynamic filters and drill-down capabilities for granular performance insights across regions and time periods</span>
          </div>
        </div>
        <div className={styles.tags}>
          <span className="pop-badge pop-badge-blue">Microsoft Power BI</span>
          <span className="pop-badge pop-badge-red">Python</span>
          <span className="pop-badge pop-badge-yellow">Microsoft Excel</span>
          <span className="pop-badge pop-badge-magenta">Critical Thinking</span>
        </div>

        <div className={styles.pdfSection}>
          <div className={styles.pdfHeader}>
            <h4 className={styles.pdfTitle}>
              <span className="material-symbols-outlined">picture_as_pdf</span>
              Portfolio Documentation
            </h4>
            <a
              href="/Data Analyst Car Sales Portofolio_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfMobileLink}
            >
              <span className="material-symbols-outlined" style={{fontSize: 16}}>open_in_new</span>
              Open PDF
            </a>
          </div>
          <div className={styles.pdfViewer}>
            <iframe
              src="/Data Analyst Car Sales Portofolio_compressed.pdf"
              title="Car Sales Portfolio PDF"
            />
          </div>
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.projectHeader}>
          <div>
            <h3 className={styles.projectTitle}>Bakery Sales Data Analysis</h3>
            <p className={styles.projectType}>RevoU Mini Course Project – Intro to Data Analytics | Excel | 2026</p>
          </div>
        </div>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <span className={styles.featureBullet}>•</span>
            <span>Analyzed bakery transaction data for January 2021 to identify peak sales periods and best-selling products</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureBullet}>•</span>
            <span>Provided data-driven recommendations to optimize weekend production and improve inventory management to reduce operational waste</span>
          </div>
        </div>
        <div className={styles.tags}>
          <span className="pop-badge pop-badge-red">Data Analytics</span>
          <span className="pop-badge pop-badge-blue">Data Analysis</span>
          <span className="pop-badge pop-badge-magenta">Data Visualization</span>
          <span className="pop-badge pop-badge-yellow">Microsoft Excel</span>
          <span className="pop-badge pop-badge-red">Spreadsheets</span>
        </div>

        <div className={styles.pdfSection}>
          <div className={styles.pdfHeader}>
            <h4 className={styles.pdfTitle}>
              <span className="material-symbols-outlined">picture_as_pdf</span>
              Analysis Documentation
            </h4>
            <a
              href="/Adhitama Wichaksono_Analisis Tren Penjualan Bakery.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfMobileLink}
            >
              <span className="material-symbols-outlined" style={{fontSize: 16}}>open_in_new</span>
              Open PDF
            </a>
          </div>
          <div className={styles.pdfViewer}>
            <iframe
              src="/Adhitama Wichaksono_Analisis Tren Penjualan Bakery.pdf"
              title="Bakery Sales Analysis PDF"
            />
          </div>
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.projectHeader}>
          <div>
            <h3 className={styles.projectTitle}>Network Anomaly Detection for Intrusion Detection Systems Using Q-Learning and Deep Q-Learning</h3>
            <p className={styles.projectType}>IEEE ICSECS Conference • 2025</p>
          </div>
        </div>
        <p className={styles.projectDesc}>
          Research evaluating Q-Learning and Deep Q-Learning (DQN) for adaptive network anomaly detection using the UNSW-NB15 dataset. 
          Addressing data imbalance via SMOTE-Tomek, it simulates zero-day scenarios by excluding specific attacks. DQN outperformed 
          Q-Learning, achieving 99.09% accuracy and 0.9918 F1-score. The model demonstrated strong generalization against novel threats 
          with negligible performance drops, proving its effectiveness for securing modern network systems.
        </p>
        <div className={styles.links}>
          <div className={styles.inlineTags}>
            <span className="pop-badge pop-badge-blue">Python</span>
            <span className="pop-badge pop-badge-red">Machine Learning</span>
            <span className="pop-badge pop-badge-magenta">Deep Q-Learning</span>
            <span className="pop-badge pop-badge-yellow">SMOTE-Tomek</span>
          </div>
          <div className={styles.inlineLinks}>
            <a
              href="https://ieeexplore.ieee.org/document/11279087"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionLink}
            >
              <span className="material-symbols-outlined">open_in_new</span>
              IEEE Xplore
            </a>
            <a
              href="https://github.com/adhitamaw/Anomaly-Detection-using-Reinforcement-Learning"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionLink}
            >
              <span className="material-symbols-outlined">code</span>
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.pdfSection}>
          <div className={styles.pdfHeader}>
            <h4 className={styles.pdfTitle}>
              <span className="material-symbols-outlined">slideshow</span>
              Conference Presentation
            </h4>
            <a
              href="/Conference Adhit icsecs 2025 (4)_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfMobileLink}
            >
              <span className="material-symbols-outlined" style={{fontSize: 16}}>open_in_new</span>
              Open PDF
            </a>
          </div>
          <div className={styles.pdfViewer}>
            <iframe
              src="/Conference Adhit icsecs 2025 (4)_compressed.pdf"
              title="IEEE ICSECS Conference Paper PDF"
            />
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.miniCard}>
            <div className={styles.miniCardHeader}>
              <div>
                <h3 className={styles.miniCardTitle}>{project.title}</h3>
                <p className={styles.miniCardType}>{project.type}</p>
              </div>
              <span className={styles.miniCardYear}>{project.year}</span>
            </div>
            <p className={styles.miniCardDesc}>{project.description}</p>
            <div className={styles.miniCardFooter}>
              {project.technologies.map((tech) => (
                <span key={tech} className="pop-badge" style={{background: "#eee", color: "var(--pop-black)"}}>
                  {tech}
                </span>
              ))}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.miniCardLink}
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
