"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get('q') as string;
        if (query.trim()) {
            router.push(`/knowledge-base?search=${encodeURIComponent(query)}`);
            setIsSearchOpen(false);
        }
    };

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

                    <div className={styles.rightSection}>
                        <nav id="main-nav" className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`} aria-label="Main navigation">
                            <ul className={styles.navList}>
                                <li className={styles.navItem}>
                                    <Link href="/knowledge-base" onClick={() => setIsMenuOpen(false)}>Articles</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="/deconstructions" onClick={() => setIsMenuOpen(false)}>Deconstructions</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="/contact" className={styles.contactLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className={styles.headerActions}>
                            <button
                                className={styles.searchToggle}
                                onClick={() => setIsSearchOpen(true)}
                                aria-label="Open search"
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
                            aria-label="Close search"
                        >
                            &times;
                        </button>
                        <form className={styles.searchForm} onSubmit={handleSearch}>
                            <input
                                type="text"
                                name="q"
                                className={styles.searchInput}
                                placeholder="Search the archives..."
                                autoFocus
                            />
                            <button type="submit" className={styles.searchSubmit}>
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
