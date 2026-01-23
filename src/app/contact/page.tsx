import styles from "./page.module.css";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact | Connect with Olgu Uysal",
    description: "Get in touch for strategic consulting, speaking engagements, or media inquiries regarding marketing system design and behavioral architecture.",
};

export default function Contact() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.meta}>Correspondence</div>
                <h1 className={styles.title}>Connecting</h1>
            </header>

            <div className={styles.grid}>
                <div className={styles.infoColumn}>
                    <div className={styles.infoBlock}>
                        <h3>Location</h3>
                        <p>Istanbul</p>
                        <p>Lisbon</p>
                        <p>& places in between</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>Communication</h3>
                        <p className={styles.directLine}><a href="mailto:olgu@ohmedya.com">olgu@ohmedya.com</a></p>
                        <p><a href="https://www.linkedin.com/in/olguuysal/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>Press & Media</h3>
                        <p className={styles.pressText}>
                            For interview requests, technical commentary on marketing systems, or podcast engagements, please contact me directly via email.
                        </p>
                    </div>
                </div>

                <div className={styles.formColumn}>
                    <ContactForm formId="mqearoql" />
                </div>
            </div>
        </div>
    );
}
