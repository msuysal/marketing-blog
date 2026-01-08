import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Olgu Uysal",
    description: "Get in touch for consulting, speaking, or syndication.",
};

export default function Contact() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.meta}>Correspondence</div>
                <h1 className={styles.title}>Inquiries</h1>
            </header>

            <div className={styles.grid}>
                <div className={styles.infoColumn}>
                    <div className={styles.infoBlock}>
                        <h3>Inquiry Hubs</h3>
                        <div className={styles.hubItem}>
                            <strong>Istanbul</strong>
                            <p>Strategic Operations & Brand Architecture</p>
                        </div>
                        <div className={styles.hubItem}>
                            <strong>Lisbon</strong>
                            <p>Data Science & International Digital Strategy</p>
                        </div>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>Communication</h3>
                        <p className={styles.directLine}><a href="mailto:olgu@ohmedya.com">olgu@ohmedya.com</a></p>
                        <p className={styles.responseNote}>Analytical priority is given to clear, structured inquiries. Expect a response within 48 systemic hours.</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>Press & Media</h3>
                        <p className={styles.pressText}>
                            For interview requests, technical commentary on marketing systems, or speaking engagements, please flag your inquiry as <strong>[URGENT: PRESS]</strong> in the subject line.
                        </p>
                    </div>
                </div>

                <div className={styles.formColumn}>
                    <form className={styles.form} action="https://formspree.io/f/mqearoql" method="POST">
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <select id="subject" name="subject">
                                <option>General Inquiry</option>
                                <option>Consulting</option>
                                <option>Speaking</option>
                                <option>Press</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={6} required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
