import styles from "./page.module.css";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How I Approach Marketing Strategy",
    description: "Why most marketing problems come down to incentives, product defaults, and measurement rather than ad copy or channel tactics.",
    alternates: {
        canonical: "https://olguuysal.com/the-perspective"
    },
    openGraph: {
        title: "How I Approach Marketing Strategy | Olgu Uysal",
        description: "Why most marketing problems come down to incentives, product defaults, and measurement rather than ad copy or channel tactics.",
        url: "https://olguuysal.com/the-perspective",
        siteName: "Olgu Uysal",
        type: "website",
        images: [{
            url: "https://olguuysal.com/og-image.png",
            width: 1200,
            height: 630,
            alt: "How I Approach Marketing Strategy | Olgu Uysal"
        }],
    },
};

export default function ThePerspective() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <span className={styles.label}>Purpose & Method</span>
                <h1 className={styles.title}>The Perspective</h1>

                <div className={styles.lead}>
                    <p>
                        Most marketing post-mortems blame the creative or the channel. Usually the setup behind the campaign decided the outcome before the first ad ran.
                    </p>
                </div>

                <section className={styles.section}>
                    <p>
                        I look at marketing as a system of incentives and constraints.
                    </p>
                    <p>
                        Attention gets allocated, choices get framed, and payoffs determine what people actually do. Data does not just report the past. It changes how teams behave next quarter. Automation speeds up those feedback loops, and small product defaults quietly decide which actions happen and which ones die out.
                    </p>
                    <p>
                        Changing the copy rarely fixes a broken setup.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>01. The Attention Trap</h2>
                    <p>
                        For a decade, the main question in digital marketing was how to buy or earn attention. Platforms rewarded reach and frequency. More impressions and more clicks looked like progress on a weekly report.
                    </p>
                    <p>
                        Systems built only to capture attention produce continuous stimulation with no finish line. As algorithms take over more targeting decisions, this gets worse. People scroll more and remember less. A product or brand that feels complete and worth returning to becomes rare.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>02. Connected Layers</h2>
                    <p>
                        Modern marketing runs through connected layers: product defaults, recommendation rules, data pipelines, and feedback loops. Each layer feeds the next.
                    </p>
                    <p>
                        A bad metric chosen at the reporting layer changes what the creative team makes six months later. By the time retention drops, the cause is buried three layers deep.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>03. Behavior and Measurement</h2>
                    <p>
                        I wrote the essays on this site to look at those layers one by one.
                    </p>
                    <p>
                        Behavior matters because people respond to context and cost, not slogans. Data matters because whatever a company chooses to count becomes the only thing its teams will build.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>04. Designing the Setup</h2>
                    <p>
                        Good marketing setups account for limits, bad incentives, and audience fatigue before launch.
                    </p>
                    <p>
                        They make the useful action easy without burning out the user. They slow things down when speed ruins trust, and they let an interaction end cleanly when the job is done.
                    </p>
                </section>

                <div className={styles.footer}>
                    <p>
                        "Campaigns get attention. The system behind them decides whether anyone stays."
                    </p>
                    <p className={styles.signature}>Olgu Uysal</p>
                </div>

                <div className={styles.postFlow}>
                    <div className={styles.flowLabel}>Next Step</div>
                    <Link href="/articles" className={styles.flowLink}>
                        Read the Articles &rarr;
                    </Link>
                </div>
            </div>
            <ScrollToTop />
        </main>
    );
}
