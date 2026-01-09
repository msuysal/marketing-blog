"use client";

import styles from "../app/blog/[slug]/page.module.css";

interface ShareButtonsProps {
    shareUrl: string;
    shareText: string;
}

export default function ShareButtons({ shareUrl, shareText }: ShareButtonsProps) {
    const copyToClipboard = (text: string, message: string) => {
        navigator.clipboard.writeText(text);
        alert(message);
    };

    const shareOnLinkedIn = () => {
        const caption = `${shareText}\n\nRead more here: ${shareUrl}`;
        navigator.clipboard.writeText(caption);
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        window.open(linkedInUrl, '_blank', 'noreferrer');
        alert("A suggested caption has been copied to your clipboard. You can paste it in your LinkedIn post!");
    };

    return (
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
            <li>
                <button
                    onClick={() => copyToClipboard(shareUrl, "Link copied to clipboard")}
                    className={styles.copyBtn}
                >
                    Copy Link
                </button>
            </li>
        </ul>
    );
}
