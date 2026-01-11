import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Olgu Uysal | Marketing System Architect",
    description: "Learn about Ms. Olgu Uysal, a Brand & Marketing Strategist with over 15 years of experience in behavioral economics and data science for marketing.",
};

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.meta}>The Profile</div>
                <h1 className={styles.title}>Olgu Uysal</h1>
                <p className={styles.lead}>
                    I am interested in the invisible logic that makes ideas last. With a background in Economics and Data Science for Marketing, I bridge the gap between human behavior and operational systems. I build the machines that turn influence into infrastructure.
                </p>
            </header>

            <div className={styles.grid}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.sectionTitle}>The Background</h2>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.label}>Economics</span>
                            <p>My background in Economics serves as the primary lens through which I analyze market dynamics and human incentives.</p>
                        </li>
                        <li>
                            <span className={styles.label}>Data Science</span>
                            <p>With a postgraduate focus on Data Science for Marketing, I translate fragmented data points into coherent behavioral architectures.</p>
                        </li>
                        <li>
                            <span className={styles.label}>Global Presence</span>
                            <p>Living and working across several continents, from the USA to the Middle East, has shaped my understanding of the human constant. I view culture as a variable interface, but I design for the core.</p>
                        </li>
                    </ul>
                </div>

                <div className={styles.rightColumn}>
                    <h2 className={styles.sectionTitle}>Marketing Engineering</h2>
                    <div className={styles.principles}>
                        <div className={styles.principle}>
                            <h3>15+ Years of Mastery</h3>
                            <p>A career defined by the evolution from traditional strategy to the engineering of self-sustaining marketing engines.</p>
                        </div>
                        <div className={styles.principle}>
                            <h3>Systems &gt; Campaigns</h3>
                            <p>She believes that while campaigns capture attention, only well-architected systems can hold it and convert it into durable authority.</p>
                        </div>
                        <div className={styles.principle}>
                            <h3>The Analytical Soul</h3>
                            <p>Combining the discipline of an economist with the precision of a data scientist to design brand experiences that are both measurable and meaningful.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
