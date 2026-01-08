import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.topBar}>
                <div className={styles.topContainer}>
                    <span className={styles.date}>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <div className={styles.topLinks}>
                        <div className={styles.tagline}>Systemic Growth Architecting by Olgu Uysal</div>
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
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <Link href="/knowledge-base">Articles</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/industry-best-practices">Industry Best Practices</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/about">About</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/contact" className={styles.contactLink}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
