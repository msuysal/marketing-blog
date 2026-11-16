"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState<string>("");
    const router = useRouter();
    const { lang, setLang } = useLanguage();

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }));
    }, [lang]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get("q") as string;
        if (query.trim()) {
            router.push(`/articles?search=${encodeURIComponent(query)}`);
            setIsSearchOpen(false);
        }
    };

    return (
        <header className={styles.wrapper}>
            <div className={styles.topBar}>
                <div className={styles.topContainer}>
                    <span className={styles.date}>{currentDate}</span>
                    <div className={styles.topLinks}>
                        <span className={styles.tagline}>
                            {lang === "tr" ? "OLGU UYSAL • İSTANBUL • LİZBON" : "BY OLGU UYSAL • ISTANBUL • LISBON"}
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/" className={styles.logoLink}>
                            <div className={styles.logoMasthead}>
                                <span className={styles.logoMain}>
                                    {lang === "tr" ? "Pazarlama Tasarımı" : "Marketing System Design"}
                                </span>
                                <span className={styles.logoSubtitle}>
                                    {lang === "tr"
                                        ? "Marka stratejisi, büyüme ve tüketici davranışı üzerine notlar"
                                        : "Essays on marketing strategy, incentives, and growth"}
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className={styles.rightSection}>
                        <nav id="main-nav" className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`} aria-label="Main navigation">
                            <ul className={styles.navList}>
                                <li className={styles.navItem}>
                                    <Link href="/articles" onClick={() => setIsMenuOpen(false)}>
                                        {lang === "tr" ? "Makaleler" : "Articles"}
                                    </Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="/deconstructions" onClick={() => setIsMenuOpen(false)}>
                                        {lang === "tr" ? "Vaka Analizleri" : "Deconstructions"}
                                    </Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                                        {lang === "tr" ? "Hakkımda" : "About"}
                                    </Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="/contact" className={styles.contactLink} onClick={() => setIsMenuOpen(false)}>
                                        {lang === "tr" ? "İletişim" : "Contact"}
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className={styles.headerActions}>
                            <div className={styles.langSwitch} role="group" aria-label="Language switcher">
                                <button
                                    type="button"
                                    onClick={() => setLang("en")}
                                    className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
                                    aria-pressed={lang === "en"}
                                >
                                    EN
                                </button>
                                <span className={styles.langDivider}>/</span>
                                <button
                                    type="button"
                                    onClick={() => setLang("tr")}
                                    className={`${styles.langBtn} ${lang === "tr" ? styles.langActive : ""}`}
                                    aria-pressed={lang === "tr"}
                                >
                                    TR
                                </button>
                            </div>

                            <button
                                className={styles.searchToggle}
                                onClick={() => setIsSearchOpen(true)}
                                aria-label={lang === "tr" ? "Aramayı aç" : "Open search"}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </div>

                        <button
                            className={styles.mobileToggle}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-controls="main-nav"
                            aria-label="Toggle navigation menu"
                        >
                            <span className={isMenuOpen ? styles.iconClose : styles.iconMenu}></span>
                        </button>
                    </div>
                </div>
            </div>

            {isSearchOpen && (
                <div className={styles.searchOverlay}>
                    <div className={styles.searchContainer}>
                        <button
                            className={styles.searchClose}
                            onClick={() => setIsSearchOpen(false)}
                            aria-label={lang === "tr" ? "Aramayı kapat" : "Close search"}
                        >
                            &times;
                        </button>
                        <form className={styles.searchForm} onSubmit={handleSearch}>
                            <input
                                type="text"
                                name="q"
                                className={styles.searchInput}
                                placeholder={lang === "tr" ? "Yazılarda ara..." : "Search the archives..."}
                                autoFocus
                            />
                            <button type="submit" className={styles.searchSubmit}>
                                {lang === "tr" ? "Ara" : "Search"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
