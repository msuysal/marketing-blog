import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <div className={styles.logoSection}>
                        <div className={styles.logoMain}>Olgu Uysal</div>
                        <div className={styles.logoSub}>Marketing System Design</div>
                    </div>
                    <p className={styles.tagline}>
                        Essays on influence, behavioral logic, and marketing systems.
                    </p>
                </div>

                <div className={styles.nav}>
                    <div className={styles.column}>
                        <h4 className={styles.heading}>Articles</h4>
                        <ul className={styles.list}>
                            <li><Link href="/knowledge-base?tag=Behavioral%20Logic">Behavioral Logic</Link></li>
                            <li><Link href="/knowledge-base?tag=Systems%20Infrastructure">Systems Architecture</Link></li>
                            <li><Link href="/knowledge-base?tag=Influence%20%26%20Authority">Influence & Authority</Link></li>
                            <li><Link href="/knowledge-base?tag=Marketing%20Game%20Theory">Game Theory</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.heading}>Explorer</h4>
                        <ul className={styles.list}>
                            <li><Link href="/knowledge-base">All Articles</Link></li>
                            <li><Link href="/cases">Cases</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.bottomContent}>
                    <span>&copy; {new Date().getFullYear()} Olgu Uysal &mdash; All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
