"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import styles from "./Publications.module.css";

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
    url: "https://ieeexplore.ieee.org/document/11279087",
  },
];

export default function Publications() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className="section-header" style={{marginBottom: 16}}>
        <span className="section-icon material-symbols-outlined" style={{color: "var(--pop-magenta)"}}>menu_book</span>
        <h2 className="section-title" style={{fontSize: 22}}>{t("pub.title")}</h2>
      </div>

      <div className={styles.list}>
        {publications.map((pub, index) => (
          <div key={index}>
            <Link
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <div className={styles.info}>
                <p className={styles.title}>{pub.title}</p>
                <p className={styles.publisher}>{pub.publisher} • {pub.year}</p>
              </div>
              <span className={`${styles.arrow} material-symbols-outlined`}>
                arrow_right_alt
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
