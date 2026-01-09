import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={`${styles.column} ${styles.brandColumn}`}>
                    <div className={styles.brand}>
                        <div className={styles.logoSection}>
                            <div className={styles.logoBar}></div>
                            <div className={styles.logoText}>
                                <div className={styles.logoMain}>Olgu Uysal</div>
                                <div className={styles.logoSub}>Brand & Marketing Strategist</div>
                            </div>
                        </div>
                        <p className={styles.tagline}>
                            Dedicated to the rigorous study of marketing systems, behavioral architecture, and digital ethics.
                        </p>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Sections</h4>
                    <ul className={styles.list}>
                        <li><Link href="/knowledge-base">Articles</Link></li>
                        <li><Link href="/best-practices">Best Practices</Link></li>
                        <li><Link href="/about">About the Author</Link></li>
                        <li><Link href="/contact">Contact & Engagement</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Topics</h4>
                    <ul className={styles.list}>
                        <li><Link href="/knowledge-base?tag=Systems%20Infrastructure">Systems Architecture</Link></li>
                        <li><Link href="/knowledge-base?tag=Influence%20%26%20Authority">Influence & Authority</Link></li>
                        <li><Link href="/knowledge-base?tag=Behavioral%20Logic">Behavioral Logic</Link></li>
                        <li><Link href="/knowledge-base?tag=Data%20Signals">Data Signals</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <div className={styles.bottomContent}>
                    <span>&copy; {new Date().getFullYear()} Olgu Uysal. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
