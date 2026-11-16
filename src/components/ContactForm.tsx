"use client";

import { useState } from "react";
import styles from "../app/contact/page.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface ContactFormProps {
    formId: string;
}

export default function ContactForm({ formId }: ContactFormProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const { lang } = useLanguage();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                setMessage(lang === "tr" ? "Mesajınız iletildi. En kısa sürede dönüş yapacağım." : "Message received. I will get back to you shortly.");
                e.currentTarget.reset();
            } else {
                const errorData = await response.json();
                setStatus("error");
                setMessage(errorData.error || (lang === "tr" ? "Gönderim başarısız oldu. Lütfen tekrar deneyin." : "Submission failed. Please try again."));
            }
        } catch {
            setStatus("error");
            setMessage(lang === "tr" ? "Bağlantı hatası. Lütfen doğrudan e-posta gönderin." : "Connection error. Please use direct email.");
        }
    };

    if (status === "success") {
        return (
            <div className={styles.successMessage} style={{
                padding: '3rem',
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-text)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                textAlign: 'center',
                border: '1px solid var(--border-color)',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {message}
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name">{lang === "tr" ? "İsim" : "Name"}</label>
                <input type="text" id="name" name="name" required disabled={status === "loading"} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">{lang === "tr" ? "E-posta" : "Email"}</label>
                <input type="email" id="email" name="email" required disabled={status === "loading"} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="subject">{lang === "tr" ? "Konu" : "Subject"}</label>
                <select id="subject" name="subject" disabled={status === "loading"}>
                    <option>{lang === "tr" ? "Genel İletişim" : "General Correspondence"}</option>
                    <option>{lang === "tr" ? "Danışmanlık" : "Consulting"}</option>
                    <option>{lang === "tr" ? "Konuşma Daveti" : "Speaking"}</option>
                    <option>{lang === "tr" ? "Basın ve Medya" : "Press"}</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">{lang === "tr" ? "Mesajınız" : "Message"}</label>
                <textarea id="message" name="message" rows={6} required disabled={status === "loading"}></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
                {status === "loading"
                    ? (lang === "tr" ? "Gönderiliyor..." : "Sending...")
                    : (lang === "tr" ? "Mesaj Gönder" : "Send Message")}
            </button>

            {status === "error" && (
                <p style={{ color: '#d00', fontSize: '0.9rem', marginTop: '1rem', fontWeight: 'bold' }}>
                    {message}
                </p>
            )}
        </form>
    );
}
