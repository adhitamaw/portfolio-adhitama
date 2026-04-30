"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./DownloadCV.module.css";

export default function DownloadCV() {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <a
        href="/CV_Adhitama Wichaksono ATS.pdf"
        download="CV_Adhitama Wichaksono ATS.pdf"
        className={styles.downloadBtn}
      >
        <span className="material-symbols-outlined">
          file_download
        </span>
        {t("cv.button")}
        <span className="material-symbols-outlined">
          arrow_forward
        </span>
      </a>
    </div>
  );
}
