"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Education.module.css";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
  icon: string;
  iconColor: "primary" | "accent";
  coursework?: string[];
}

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor of Informatics",
    institution: "Telkom University, Bandung",
    year: "2021 — 2025",
    gpa: "GPA: 3.34/4.00",
    icon: "school",
    iconColor: "primary",
    coursework: [
      "Data Visualization",
      "Backend Engineering",
      "Database Systems",
      "Machine Learning",
      "Software Engineering",
      "Cyber Security",
      "Computer Networks"
    ]
  },
];

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className={styles.section}>
      <div className="section-header">
        <span className="section-icon material-symbols-outlined">school</span>
        <h2 className="section-title">{t("edu.title")}</h2>
      </div>

      <div className={styles.list}>
        {educationItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.iconBox}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className={styles.degreeInfo}>
                <h3 className={styles.degreeName}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <p className={styles.meta}>{item.year} | {item.gpa}</p>
              </div>
            </div>
            {item.coursework && (
              <div className={styles.coursework}>
                <h4 className={styles.courseworkTitle}>Relevant Coursework</h4>
                <div className={styles.courseworkList}>
                  {item.coursework.map((course, idx) => (
                    <div key={idx} className={styles.courseItem}>
                      <span className={styles.courseBullet}>•</span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
