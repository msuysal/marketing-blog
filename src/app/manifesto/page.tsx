import styles from "./page.module.css";
import Link from "next/link";

export default function Manifesto() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <span className={styles.label}>Purpose & Logic</span>
                <h1 className={styles.title}>The Systemic Perspective</h1>

                <div className={styles.lead}>
                    <p>
                        Marketing is often described as a set of activities: campaigns, channels, content, tactics.
                        What actually shapes outcomes is not what is executed, but how the system behind execution is structured.
                    </p>
                </div>

                <section className={styles.section}>
                    <p>
                        I approach marketing as a system.
                    </p>
                    <p>
                        A system where attention is allocated, choices are framed, incentives are distributed, and behavior emerges over time.
                        A system where data does not merely report the past, but actively participates in decisions.
                        A system where automation accelerates feedback loops, and design choices quietly determine what becomes possible, visible, or likely.
                    </p>
                    <p>
                        Seen this way, marketing is not primarily persuasive. <strong>It is architectural.</strong>
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>01. The Attention Trap</h2>
                    <p>
                        For a long time, the dominant question in marketing was how to capture attention.
                        Platforms optimized for reach, frequency, and engagement.
                        Metrics rewarded activity.
                        More impressions, more clicks, more interactions were interpreted as progress.
                    </p>
                    <p>
                        But systems optimized for attention alone tend to produce a specific outcome:
                        continuous stimulation without resolution.
                        As automation increases and AI mediates more decisions, this dynamic intensifies.
                        Satisfaction — the sense that something is complete, coherent, or worth returning to — becomes increasingly rare.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>02. Layered Mechanisms</h2>
                    <p>
                        Modern marketing operates through layered mechanisms:
                        behavioral cues, recommendation logic, data pipelines, and feedback loops.
                        Each layer influences the next.
                        None of them are neutral.
                    </p>
                    <p>
                        Design decisions made at one layer propagate through the entire system,
                        shaping outcomes in ways that often remain invisible
                        until they become irreversible.
                    </p>
                    <p>
                        Because of this, marketing can no longer be treated as a collection of isolated tactics.
                        Changing a message without understanding the system it enters rarely changes the result.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>03. The Lens of Structure</h2>
                    <p>
                        This space exists to examine those systems.
                        Not to offer shortcuts or growth recipes,
                        but to slow the conversation down enough
                        to see structure where we usually see noise.
                    </p>
                    <p>
                        Behavior matters because systems do not persuade people directly;
                        they shape the contexts in which decisions are made.
                        Data matters because measurement frameworks do not merely observe reality;
                        they actively define what is considered successful, relevant, or worth repeating.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>04. Engineering Meaning</h2>
                    <p>
                        Marketing systems must therefore be engineered, not just managed.
                        Engineering implies understanding constraints, feedback, and unintended consequences.
                        It implies designing for stability as much as for growth.
                    </p>
                    <p>
                        Well-designed systems make desired behavior easier
                        without exhausting attention.
                        They introduce friction where immediacy erodes meaning,
                        and remove friction where unnecessary effort obscures value.
                        They allow for completion, not just continuation.
                    </p>
                </section>

                <div className={styles.footer}>
                    <p>
                        Marketing is not a series of campaigns.
                        It is a system of decisions, incentives, and structures.
                        And systems — whether we acknowledge them or not —
                        always produce outcomes.
                    </p>
                    <p><em>Olgu Uysal</em></p>
                    <Link href="/" className={styles.backLink}>Return to Home</Link>
                </div>
            </div>
        </main>
    );
}
