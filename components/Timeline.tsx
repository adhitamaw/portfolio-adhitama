"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Timeline.module.css";

interface TimelineItem {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  isCurrent: boolean;
  color: "primary" | "accent";
}

export default function Timeline() {
  const { t } = useLanguage();
  
  const rawItems = t("experience.items") as any[];
  
  const items: TimelineItem[] = rawItems.map((item, index) => ({
    ...item,
    location: index === 2 ? "Remote" : (index === 1 ? "Batam, Indonesia" : "Jakarta, Indonesia"),
    period: index === 2 ? "February 2024 — June 2024" : (index === 1 ? "June 2024 — August 2024" : "October 2025 — December 2025"),
    isCurrent: false,
    color: index === 2 ? "accent" : "primary",
  }));

  return (
    <section id="experience" className={styles.section}>
      <div className="section-header">
        <span className="section-icon material-symbols-outlined">work_history</span>
        <h2 className="section-title">{t("experience.title")}</h2>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>

        {items.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={`${styles.dot} ${item.color === "accent" ? styles.dotAccent : ""}`}></div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={`${styles.cardPeriod} ${item.isCurrent ? styles.cardPeriodCurrent : ""}`}>
                  {item.period}
                </span>
              </div>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.location}>{item.location}</p>
              <div className={styles.responsibilities}>
                {item.responsibilities.map((resp, idx) => (
                  <div key={idx} className={styles.responsibility}>
                    <span className={styles.bullet}>•</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
