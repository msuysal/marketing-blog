"use client";

import { useState } from "react";
import styles from "../app/page.module.css";

interface SyndicateFormProps {
    formId: string;
}

export default function SyndicateForm({ formId }: SyndicateFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus("success");
                setMessage("Entry confirmed. Welcome to the Syndicate.");
                setEmail("");
            } else {
                const data = await response.json();
                setStatus("error");
                setMessage(data.error || "Submodular interference detected. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Connection failure in the feedback loop. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <div className={styles.successMessage} style={{
                padding: '2rem',
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-text)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '2rem',
                border: '1px solid var(--border-color)'
            }}>
                {message}
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                aria-required="true"
            />
            <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Processing..." : "Subscribe"}
            </button>
            {status === "error" && (
                <p style={{ color: '#d00', fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 'bold' }}>
                    {message}
                </p>
            )}
        </form>
    );
}
