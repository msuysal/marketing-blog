"use client";

import { useState } from "react";
import styles from "../app/article/[slug]/page.module.css";

interface ShareButtonsProps {
    shareUrl: string;
    shareText: string;
}

export default function ShareButtons({ shareUrl, shareText }: ShareButtonsProps) {
    const [showToast, setShowToast] = useState(false);

    const shareOnLinkedIn = () => {
        const caption = `${shareText}\n\nRead more here: ${shareUrl}`;
        navigator.clipboard.writeText(caption);
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        window.open(linkedInUrl, '_blank', 'noreferrer');

        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div style={{ position: 'relative' }}>
            <ul className={styles.shareLinks}>
                <li>
                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        X / Twitter
                    </a>
                </li>
                <li>
                    <button
                        onClick={shareOnLinkedIn}
                        className={styles.copyBtn}
                        title="Share on LinkedIn with a suggested caption"
                    >
                        LinkedIn
                    </button>
                </li>
            </ul>
            {showToast && (
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '0',
                    right: '0',
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-text)',
                    padding: '8px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    zIndex: 10,
                    animation: 'fadeIn 0.3s ease-out'
                }}>
                    Caption copied to clipboard.
                </div>
            )}
        </div>
    );
}
