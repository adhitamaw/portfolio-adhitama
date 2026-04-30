"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Skills.module.css";

const programmingLanguages = [
  "Python",
  "SQL",
  "Golang",
  "PHP",
];

const dataAnalytics = [
  "Exploratory Data Analysis (EDA)",
  "Data Cleaning",
  "Data Preprocessing",
  "Predictive Analytics",
  "Reporting",
  "Excel",
];

const dataVisualization = [
  "Power BI",
  "Dashboard Development",
  "Data Storytelling",
];

const databaseManagement = [
  "MySQL",
  "PostgreSQL",
];

const dataEngineering = [
  "Data Pipeline Development",
  "ETL",
  "Data Scraping",
  "REST API Integration",
];

const webDevelopment = [
  "Laravel",
  "Golang",
];

const developmentTools = [
  "Visual Studio Code",
  "GitHub",
];

const languages = [
  "English",
  "Indonesia",
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className={styles.section}>
      <div className="section-header">
        <span className="section-icon material-symbols-outlined">psychology</span>
        <h2 className="section-title">{t("skills.title")}</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.skillCard}>
          <p className={styles.skillTitle}>
            <span className="material-symbols-outlined">code</span>
            {t("skills.categories.tools")}
          </p>
          <div className={styles.skillTags}>
            {programmingLanguages.map((skill) => (
              <span key={skill} className="pop-badge pop-badge-blue">{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.skillCard}>
          <p className={styles.skillTitle}>
            <span className="material-symbols-outlined">analytics</span>
            {t("skills.categories.data")}
          </p>
          <div className={styles.skillTags}>
            {dataAnalytics.map((skill) => (
              <span key={skill} className="pop-badge pop-badge-red">{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.skillCard}>
          <p className={styles.skillTitle}>
            <span className="material-symbols-outlined">bar_chart</span>
            {t("skills.categories.viz")}
          </p>
          <div className={styles.skillTags}>
            {dataVisualization.map((skill) => (
              <span key={skill} className="pop-badge pop-badge-yellow" style={{color: "var(--pop-black)"}}>{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.skillCard}>
          <p className={styles.skillTitle}>
            <span className="material-symbols-outlined">storage</span>
            {t("skills.categories.db")}
          </p>
          <div className={styles.skillTags}>
            {databaseManagement.map((skill) => (
              <span key={skill} className="pop-badge pop-badge-blue">{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.skillCard}>
          <p className={styles.skillTitle}>
            <span className="material-symbols-outlined">hub</span>
            {t("skills.categories.eng")}
          </p>
          <div className={styles.skillTags}>
            {dataEngineering.map((skill) => (
              <span key={skill} className="pop-badge pop-badge-magenta">{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.skillCard}>
          <p className={styles.skillTitle}>
            <span className="material-symbols-outlined">api</span>
            {t("skills.categories.web")}
          </p>
          <div className={styles.skillTags}>
            {webDevelopment.map((skill) => (
              <span key={skill} className="pop-badge pop-badge-red">{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.skillCard}>
          <p className={styles.skillTitle}>
            <span className="material-symbols-outlined">build</span>
            {t("skills.categories.dev")}
          </p>
          <div className={styles.skillTags}>
            {developmentTools.map((tool) => (
              <span key={tool} className="pop-badge pop-badge-blue">{tool}</span>
            ))}
          </div>
        </div>

        <div className={styles.skillCard}>
          <p className={styles.skillTitle}>
            <span className="material-symbols-outlined">translate</span>
            {t("skills.categories.lang")}
          </p>
          <div className={styles.skillTags}>
            {languages.map((lang) => (
              <span key={lang} className="pop-badge pop-badge-magenta">{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
