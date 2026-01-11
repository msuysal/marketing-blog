"use client";

import { Suspense } from "react";
import Link from "next/link";
import { posts, allIndustries } from "@/lib/posts";
import styles from "../knowledge-base/page.module.css";
import { useSearchParams, useRouter } from "next/navigation";

function IndustryBestPracticesContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentIndustries = searchParams.get("industry")?.split(",").filter(Boolean) || [];

    // Filter only posts that have the "Deconstruction" tag
    const allBestPractices = posts.filter(post => post.tags.includes("Deconstruction"));

    const filteredPosts = currentIndustries.length > 0
        ? allBestPractices.filter((post) => post.industry && currentIndustries.includes(post.industry))
        : allBestPractices;

    const handleIndustryClick = (industry: string) => {
        let newIndustries: string[];
        if (currentIndustries.includes(industry)) {
            newIndustries = currentIndustries.filter((i) => i !== industry);
        } else {
            newIndustries = [...currentIndustries, industry];
        }

        if (newIndustries.length === 0) {
            router.push("/deconstructions");
        } else {
            router.push(`/deconstructions?industry=${encodeURIComponent(newIndustries.join(","))}`);
        }
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h3>Industries</h3>
                    <button
                        onClick={() => router.push("/deconstructions")}
                        className={styles.clearBtn}
                        disabled={currentIndustries.length === 0}
                        aria-label="Clear all active industry filters"
                    >
                        Reset
                    </button>
                </div>
                <ul className={styles.tagList}>
                    {allIndustries.map((industry) => (
                        <li key={industry}>
                            <button
                                onClick={() => handleIndustryClick(industry)}
                                className={`${styles.tagBtn} ${currentIndustries.includes(industry) ? styles.activeTag : ""}`}
                                aria-pressed={currentIndustries.includes(industry)}
                            >
                                {industry}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles.sidebarFooter}>
                    <p aria-hidden="true">Foundation Archive / Deconstructions</p>
                </div>
            </aside>

            <main className={styles.main}>
                <header className={styles.resultsHeader}>
                    <h1 className={styles.pageTitle}>The Deconstructions</h1>
                    <p className={styles.disclaimer} style={{ marginBottom: '2rem', fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem', maxWidth: '600px', lineHeight: '1.5' }}>
                        Displaying global best practices of how marketing systems and integrated design are applied across various industries.
                        Note: The global brand examples provided here are for educational analysis and do not reflect our own work.
                    </p>
                    <div className={styles.resultsMeta}>
                        {currentIndustries.length > 0 ? (
                            <span>Selected Industries: {currentIndustries.map(i => <span key={i} className="highlight" style={{ marginRight: '0.5rem' }}>{i}</span>)} &mdash; {filteredPosts.length} Deconstructions</span>
                        ) : (
                            <span>All Deconstructions &mdash; {allBestPractices.length} Total</span>
                        )}
                    </div>
                </header>

                <div className={styles.list}>
                    {filteredPosts.map((post) => (
                        <article key={post.slug} className={styles.item}>
                            <div className={styles.itemMeta}>
                                <span className={styles.itemDate}>{post.date}</span>
                                <span className={styles.itemTag}>{post.industry || "General"}</span>
                            </div>
                            <div className={styles.itemBody}>
                                <h2 className={styles.itemTitle}>
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className={styles.itemExcerpt}>{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className={styles.readMore}>VIEW DECONSTRUCTION &rarr;</Link>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className={styles.noResults}>
                        <p>No deconstructions found for the selected industries.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default function DeconstructionsPage() {
    return (
        <div className={styles.pageWrapper}>
            <Suspense fallback={<div className={styles.loading}>Accessing Deconstruction Archive...</div>}>
                <IndustryBestPracticesContent />
            </Suspense>
        </div>
    );
}
