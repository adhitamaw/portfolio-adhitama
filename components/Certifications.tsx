"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Certifications.module.css";

interface Certification {
  name: string;
  icon: string;
  iconColor: "primary" | "accent";
}

const certifications: Certification[] = [
  {
    name: "Becoming Data Engineer : Teori, Praktek dan Mini Project - Dunia Coding (2026)",
    icon: "database",
    iconColor: "primary",
  },
  {
    name: "Data Analytics and Visualization Bootcamp - Dsarea (2026)",
    icon: "analytics",
    iconColor: "accent",
  },
  {
    name: "Introduction to Data Analytics - RevoU Mini Course (2026)",
    icon: "query_stats",
    iconColor: "primary",
  },
  {
    name: "IEEE 9th International Conference on Software Engineering & Computer Systems (ICSECS) - Published Author (2025)",
    icon: "article",
    iconColor: "accent",
  },
  {
    name: "Laravel 11 Web Developer Bootcamp - Sanbercode (2025)",
    icon: "code",
    iconColor: "primary",
  },
  {
    name: "Kampus Merdeka MSIB Batch 6 - AI Integration in Backend Application Development (2024)",
    icon: "smart_toy",
    iconColor: "accent",
  },
];

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className="section-header" style={{marginBottom: 16}}>
        <span className="section-icon material-symbols-outlined">verified</span>
        <h2 className="section-title" style={{fontSize: 22}}>{t("cert.title")}</h2>
      </div>

      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.card}>
            <div className={`${styles.iconCircle} ${cert.iconColor === "primary" ? styles.iconCircleRed : styles.iconCircleMagenta}`}>
              <span className="material-symbols-outlined">{cert.icon}</span>
            </div>
            <span className={styles.name}>{cert.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
