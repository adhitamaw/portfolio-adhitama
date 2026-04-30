"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#skills", label: t("nav.skills") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#education", label: t("nav.education") },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <span className="material-symbols-outlined">deployed_code</span>
          </div>
          <span className={styles.logoText}>Adhitama Profile</span>
        </div>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <button
            onClick={() => setLanguage(language === "en" ? "id" : "en")}
            className={styles.langToggle}
            aria-label="Toggle Language"
          >
            <span className="material-symbols-outlined">language</span>
            {language === "en" ? "EN" : "ID"}
          </button>

          <a
            href="#connect"
            className={styles.ctaButton}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("nav.connect")}
          </a>

          <button
            type="button"
            aria-label="Toggle mobile navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={styles.mobileToggle}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuInner}>
              <div className={styles.mobileLangRow}>
                <button
                  onClick={() => {
                    setLanguage(language === "en" ? "id" : "en");
                    setMobileMenuOpen(false);
                  }}
                  className={styles.mobileLangToggle}
                >
                  <span className="material-symbols-outlined">language</span>
                  {language === "en" ? "Switch to Indonesian" : "Ganti ke Inggris"}
                </button>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={styles.mobileNavLink}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="#connect"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={styles.mobileCta}
              >
                {t("nav.connect")}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
