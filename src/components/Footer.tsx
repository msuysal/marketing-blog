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

                <nav className={styles.nav}>
                    <div className={styles.column}>
                        <h4 className={styles.heading}>Explorer</h4>
                        <ul className={styles.list}>
                            <li><Link href="/knowledge-base">Articles</Link></li>
                            <li><Link href="/cases">Cases</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
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
