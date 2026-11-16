import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Olgu Uysal | Marketing Strategist",
    description: "Olgu Uysal is a brand and marketing strategist with 15+ years of experience across economics, data science, and growth. Based between Europe and the Middle East.",
    alternates: {
        canonical: "/about"
    }
};

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.meta}>The Profile</div>
                <h1 className={styles.title}>Olgu Uysal</h1>
                <p className={styles.lead}>
                    I am interested in what makes ideas last. I trained as an economist, then went deep into data science for marketing. I have spent 15 years trying to understand why some campaigns build something durable and most do not.
                </p>
            </header>

            <div className={styles.grid}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.sectionTitle}>Background</h2>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.label}>Economics</span>
                            <p>I think in terms of incentives first. Economics trained me to ask what people actually respond to, not what they say they respond to.</p>
                        </li>
                        <li>
                            <span className={styles.label}>Data Science</span>
                            <p>My postgraduate work focused on data science for marketing. I learned how to read signals that most dashboards are built to ignore.</p>
                        </li>
                        <li>
                            <span className={styles.label}>Global</span>
                            <p>I have lived and worked across the US, Europe, and the Middle East. Human behavior is consistent. Culture changes the packaging, not the core.</p>
                        </li>
                    </ul>
                </div>

                <div className={styles.rightColumn}>
                    <h2 className={styles.sectionTitle}>How I Work</h2>
                    <div className={styles.principles}>
                        <div className={styles.principle}>
                            <h3>15+ Years</h3>
                            <p>I started in traditional brand strategy. I moved into data-driven growth when most marketing teams still thought A/B testing was experimental. The gap between what brands measure and what actually drives growth has not closed. That gap is where I work.</p>
                        </div>
                        <div className={styles.principle}>
                            <h3>Systems over campaigns</h3>
                            <p>Campaigns get attention. Systems hold it. I care more about the second one.</p>
                        </div>
                        <div className={styles.principle}>
                            <h3>The method</h3>
                            <p>I start with incentives. Then data. Then structure. I am less interested in what a campaign says and more interested in what it rewards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
