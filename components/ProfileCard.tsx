"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  const { t } = useLanguage();

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageInner}>
          <img
            src="/profile.jpg"
            alt="Adhitama Wichaksono"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.nameSection}>
          <h1 className={styles.name}>Adhitama Wichaksono</h1>
          <p className={styles.tagline}>{t("profile.tagline")}</p>
        </div>

        <div className={styles.bioCard}>
          <h3 className={styles.bioTitle}>
            <span className="material-symbols-outlined">person</span>
            {t("profile.summaryTitle")}
          </h3>
          <p className={styles.bioText}>
            {t("profile.summary")}
          </p>
        </div>

        <div className={styles.location}>
          <span className="material-symbols-outlined">location_on</span>
          <span className={styles.locationText}>{t("profile.location")}</span>
        </div>

        <div id="connect" className={styles.connectSection}>
          <h3 className={styles.connectTitle}>{t("nav.connect")}</h3>
          <div className={styles.connectLinks}>
            <a
              href="mailto:adhit1312@gmail.com"
              className={styles.connectLink}
            >
              <div className={styles.linkIcon}>
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
              <div>
                <p className={styles.linkLabel}>Email</p>
                <p className={styles.linkValue}>adhit1312@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+6281290586078"
              className={styles.connectLink}
            >
              <div className={styles.linkIcon}>
                <span className="material-symbols-outlined">phone</span>
              </div>
              <div>
                <p className={styles.linkLabel}>Phone</p>
                <p className={styles.linkValue}>+62 812-9058-6078</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/adhitama-wichaksono-15b56b199/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connectLink}
            >
              <div className={styles.linkIcon}>
                <span className="material-symbols-outlined">link</span>
              </div>
              <div>
                <p className={styles.linkLabel}>LinkedIn</p>
                <p className={styles.linkValue}>adhitama-wichaksono</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
