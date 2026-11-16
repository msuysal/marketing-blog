"use client";

import styles from "../app/contact/page.module.css";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactClient() {
    const { lang } = useLanguage();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.meta}>{lang === "tr" ? "Yazışma" : "Correspondence"}</div>
                <h1 className={styles.title}>{lang === "tr" ? "İletişim" : "Connecting"}</h1>
            </header>

            <div className={styles.grid}>
                <div className={styles.infoColumn}>
                    <div className={styles.infoBlock}>
                        <h3>{lang === "tr" ? "Konum" : "Location"}</h3>
                        <p>{lang === "tr" ? "İstanbul" : "Istanbul"}</p>
                        <p>{lang === "tr" ? "Lizbon" : "Lisbon"}</p>
                        <p>{lang === "tr" ? "ve aradaki şehirler" : "& places in between"}</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>{lang === "tr" ? "Doğrudan Erişim" : "Communication"}</h3>
                        <p className={styles.directLine}><a href="mailto:olgu@ohmedya.com">olgu@ohmedya.com</a></p>
                        <p><a href="https://www.linkedin.com/in/olguuysal/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>{lang === "tr" ? "Basın ve Konuşma" : "Press & Media"}</h3>
                        <p className={styles.pressText}>
                            {lang === "tr"
                                ? "Danışmanlık, röportaj talepleri, pazarlama sistemleri üzerine görüş veya podcast davetleri için doğrudan e-posta üzerinden ulaşabilirsiniz."
                                : "For interview requests, commentary on marketing systems, consulting, or podcast engagements, please contact me directly via email."}
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
