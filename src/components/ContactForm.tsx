"use client";

import { useState } from "react";
import styles from "../app/contact/page.module.css";

interface ContactFormProps {
    formId: string;
}

export default function ContactForm({ formId }: ContactFormProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

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
                setMessage("Correspondence logged. Theoretical response pending.");
                e.currentTarget.reset();
            } else {
                const errorData = await response.json();
                setStatus("error");
                setMessage(errorData.error || "Communication protocol failure. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Total system blackout. Please use direct email.");
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
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required disabled={status === "loading"} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required disabled={status === "loading"} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" disabled={status === "loading"}>
                    <option>General Correspondence</option>
                    <option>Consulting</option>
                    <option>Speaking</option>
                    <option>Press</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} required disabled={status === "loading"}></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
                {status === "loading" ? "Transmitting..." : "Send Message"}
            </button>

            {status === "error" && (
                <p style={{ color: '#d00', fontSize: '0.9rem', marginTop: '1rem', fontWeight: 'bold' }}>
                    {message}
                </p>
            )}
        </form>
    );
}
