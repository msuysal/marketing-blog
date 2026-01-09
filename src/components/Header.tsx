"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.wrapper}>
            <div className={styles.topBar}>
                <div className={styles.topContainer}>
                    <span className={styles.date}>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <div className={styles.topLinks}>
                        <span className={styles.tagline}>By Ms. Olgu Uysal</span>
                    </div>
                </div>
            </div>
            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/" className={styles.logoLink}>
                            <div className={styles.logoMasthead}>
                                <span className={styles.logoMain}>Marketing System Design</span>
                                <span className={styles.logoSubtitle}>Essays on influence, behavioral logic, and marketing systems</span>
                            </div>
                        </Link>
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

                    <nav id="main-nav" className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`} aria-label="Main navigation">
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <Link href="/knowledge-base" onClick={() => setIsMenuOpen(false)}>articles</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/cases" onClick={() => setIsMenuOpen(false)}>cases</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/about" onClick={() => setIsMenuOpen(false)}>about</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
