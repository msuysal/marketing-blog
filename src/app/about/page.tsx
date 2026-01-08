import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Olgu Uysal",
    description: "Marketing System Architect and Behavioral Engineer.",
};

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.meta}>The Profile</div>
                <h1 className={styles.title}>Olgu Uysal</h1>
                <p className={styles.lead}>
                    Ms. Olgu Uysal is a Brand & Marketing Strategist operating at the intersection of structural logic and behavioral resonance. With over 15 years of industry experience, she architects systems that bridge the gap between high-level brand narrative and technical execution.
                </p>
            </header>

            <div className={styles.grid}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.sectionTitle}>The Background</h2>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.label}>Economics</span>
                            <p>Her foundational expertise in Economics provides a rigorous lens for understanding market dynamics, incentives, and systemic value creation.</p>
                        </li>
                        <li>
                            <span className={styles.label}>Data Science</span>
                            <p>With a postgraduate degree in Data Science for Marketing, she translates fragmented data points into coherent, actionable behavioral architectures.</p>
                        </li>
                        <li>
                            <span className={styles.label}>Global Presence</span>
                            <p>Based between the cultural and strategic hubs of <strong>Istanbul</strong> and <strong>Lisbon</strong>, she maintains an international perspective on growth and brand positioning.</p>
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
