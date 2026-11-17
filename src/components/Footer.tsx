"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
    const { lang } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <div className={styles.logoSection}>
                        <div className={styles.logoMain}>Olgu Uysal</div>
                    </div>
                    <p className={styles.tagline}>
                        {lang === "tr"
                            ? "Veri bilimi, insan davranışı ve ekonomik modeller ekseninde pazarlama yazıları."
                            : "Essays on data science, human behavior, and economic models in marketing."}
                    </p>
                    <a href="https://www.linkedin.com/in/olguuysal/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                        LinkedIn
                    </a>
                </div>

                <nav className={styles.nav}>
                    <div className={styles.column}>
                        <h4 className={styles.heading}>{lang === "tr" ? "Konular" : "Articles"}</h4>
                        <ul className={styles.list}>
                            <li><Link href="/articles?tag=Behavioral%20Logic">{lang === "tr" ? "Tüketici Davranışı" : "Behavior & Incentives"}</Link></li>
                            <li><Link href="/articles?tag=Systems%20Infrastructure">{lang === "tr" ? "Pazarlama Tasarımı" : "Marketing Systems"}</Link></li>
                            <li><Link href="/articles?tag=Influence%20%26%20Authority">{lang === "tr" ? "Etki ve Güven" : "Influence & Trust"}</Link></li>
                            <li><Link href="/articles?tag=Marketing%20Game%20Theory">{lang === "tr" ? "Oyun Teorisi" : "Game Theory"}</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.heading}>{lang === "tr" ? "Menü" : "Explorer"}</h4>
                        <ul className={styles.list}>
                            <li><Link href="/articles">{lang === "tr" ? "Tüm Makaleler" : "All Articles"}</Link></li>
                            <li><Link href="/deconstructions">{lang === "tr" ? "Vaka Analizleri" : "Deconstructions"}</Link></li>
                            <li><Link href="/about">{lang === "tr" ? "Hakkımda" : "About"}</Link></li>
                            <li><Link href="/contact">{lang === "tr" ? "İletişim" : "Contact"}</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className={styles.bottom}>
                <div className={styles.bottomContent}>
                    <span>
                        &copy; {new Date().getFullYear()} Olgu Uysal. {lang === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
