import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "About Olgu Uysal | Economist & Marketing Strategist"
    },
    description: "Olgu Uysal is a marketing strategist with 15+ years of experience in economics, data science, and brand growth across Europe and the Middle East.",
    alternates: {
        canonical: "https://olguuysal.com/about"
    },
    openGraph: {
        title: "About Olgu Uysal | Economist & Marketing Strategist",
        description: "Olgu Uysal is a marketing strategist with 15+ years of experience in economics, data science, and brand growth across Europe and the Middle East.",
        url: "https://olguuysal.com/about",
        siteName: "Olgu Uysal",
        type: "profile",
        images: [{
            url: "https://olguuysal.com/og-image.png",
            width: 1200,
            height: 630,
            alt: "About Olgu Uysal"
        }],
    },
};

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.meta}>The Profile</div>
                <h1 className={styles.title}>Olgu Uysal</h1>
                <p className={styles.lead}>
                    I am a brand and marketing strategist with 15+ years of experience leading growth, attribution, and creator programs across Europe, the US, and the Middle East. I trained as an economist first, then completed postgraduate work in data science for marketing.
                </p>
            </header>

            <div className={styles.grid}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.sectionTitle}>Background</h2>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.label}>Economics</span>
                            <p>Economics trained me to look at incentives first. When a campaign or sales funnel underperforms, I check what the setup actually rewards customers and teams for doing.</p>
                        </li>
                        <li>
                            <span className={styles.label}>Data Science</span>
                            <p>My postgraduate work focused on marketing measurement and attribution. I help teams separate real revenue lift from inflated platform dashboards.</p>
                        </li>
                        <li>
                            <span className={styles.label}>International</span>
                            <p>I have worked with consumer, retail, and technology brands across the US, Europe, and the Middle East, currently splitting my time between Istanbul and Lisbon.</p>
                        </li>
                    </ul>
                </div>

                <div className={styles.rightColumn}>
                    <h2 className={styles.sectionTitle}>How I Work</h2>
                    <div className={styles.principles}>
                        <div className={styles.principle}>
                            <h3>15+ Years in Brand & Growth</h3>
                            <p>I started in brand strategy and moved into data-driven growth when most teams still treated A/B testing as an experiment. Most companies still measure the wrong numbers. Closing the gap between what dashboards report and what drives margin is where I spend my time.</p>
                        </div>
                        <div className={styles.principle}>
                            <h3>Systems over one-off campaigns</h3>
                            <p>A single campaign buys a week of attention. Repeat purchase loops, pricing tiers, and long-term creator partnerships keep customers coming back.</p>
                        </div>
                        <div className={styles.principle}>
                            <h3>The method</h3>
                            <p>I start with unit economics and customer incentives, audit the measurement setup, and fix the leaks before scaling media spend.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
