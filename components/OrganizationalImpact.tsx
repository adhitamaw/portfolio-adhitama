"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./OrganizationalImpact.module.css";

interface ImpactItem {
  title: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export default function OrganizationalImpact() {
  const { t } = useLanguage();
  const items = t("org.items") as ImpactItem[];

  // Re-map periods and locations as they are consistent across languages
  const enrichedItems = items.map((item, index) => ({
    ...item,
    location: "Telkom University",
    organization: index === 0 ? "HIMAIF (Himpunan Mahasiswa Informatika)" : "Telkom University",
    period: index === 0 ? "October 2023 — November 2023" : "October 2022 — June 2023"
  }));

  return (
    <section className={styles.section}>
      <div className="section-header">
        <span className="section-icon material-symbols-outlined">volunteer_activism</span>
        <h2 className="section-title">{t("org.title")}</h2>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>

        {enrichedItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.dot}></div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.roleTitle}>{item.role}</h3>
                  <p className={styles.eventTitle}>{item.title}</p>
                </div>
                <span className={styles.cardPeriod}>{item.period}</span>
              </div>
              <p className={styles.organization}>{item.organization}</p>
              <p className={styles.eventLocation}>{item.location}</p>
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
