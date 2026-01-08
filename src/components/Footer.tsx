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
                        <li><Link href="/industry-best-practices">Industry Best Practices</Link></li>
                        <li><Link href="/about">About the Author</Link></li>
                        <li><Link href="/contact">Contact & Inquiries</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Topics</h4>
                    <ul className={styles.list}>
                        <li><Link href="/knowledge-base?tag=Marketing%20Architecture">Marketing Architecture</Link></li>
                        <li><Link href="/knowledge-base?tag=Systems%20Architecture">Systems Architecture</Link></li>
                        <li><Link href="/knowledge-base?tag=Influence,%20Authority%20&%20Intelligence">Influence & Authority</Link></li>
                        <li><Link href="/knowledge-base?tag=Marketing%20Ethics">Marketing Ethics</Link></li>
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
