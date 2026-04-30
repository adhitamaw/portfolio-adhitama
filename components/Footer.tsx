import Link from "next/link";
import styles from "./Footer.module.css";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/adhitama-wichaksono-15b56b199/" },
  { name: "Email", url: "mailto:adhit1312@gmail.com" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Adhitama Wichaksono &mdash; All Rights Reserved
        </p>
        <div className={styles.links}>
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.url} className={styles.socialLink}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
