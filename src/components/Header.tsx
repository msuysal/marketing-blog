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
                    </div>
                </div>
            </div>
            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/" className={styles.logoLink}>
                            <div className={styles.logoMasthead}>
                                <span className={styles.logoMain}>Marketing System Design</span>
                                <span className={styles.logoBy}>by Olgu Uysal</span>
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
                                <Link href="/knowledge-base" onClick={() => setIsMenuOpen(false)}>Articles</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/industry-best-practices" onClick={() => setIsMenuOpen(false)}>Industry Best Practices</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/contact" className={styles.contactLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
