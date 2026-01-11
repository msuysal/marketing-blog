"use client";

import { Suspense } from "react";
import Link from "next/link";
import { posts, allIndustries } from "@/lib/posts";
import styles from "../articles/page.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";

const ITEMS_PER_PAGE = 5;

function IndustryBestPracticesContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentIndustries = searchParams.get("industry")?.split(",").filter(Boolean) || [];

    // Get page from URL, default to 1
    const currentPage = Number(searchParams.get("page")) || 1;

    // Filter only posts that have the "Deconstruction" tag
    const allBestPractices = posts.filter(post => post.tags.includes("Deconstruction"));

    const filteredPosts = currentIndustries.length > 0
        ? allBestPractices.filter((post) => post.industry && currentIndustries.includes(post.industry))
        : allBestPractices;

    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

    // Slice posts for current page
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const updateParams = (newParams: URLSearchParams) => {
        router.push(newParams.toString() ? `/deconstructions?${newParams.toString()}` : "/deconstructions");
    };

    const handleIndustryClick = (industry: string) => {
        let newIndustries: string[];
        if (currentIndustries.includes(industry)) {
            newIndustries = currentIndustries.filter((i) => i !== industry);
        } else {
            newIndustries = [...currentIndustries, industry];
        }

        const params = new URLSearchParams();
        if (newIndustries.length > 0) {
            params.set("industry", newIndustries.join(","));
        }

        // Reset to page 1 when filtering
        params.set("page", "1");

        updateParams(params);
    };

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        updateParams(params);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    <h1 className={styles.pageTitle}>Deconstructions</h1>
                    <p className={styles.disclaimer} style={{ marginBottom: '2rem', fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem', maxWidth: '600px', lineHeight: '1.5' }}>
                        Architectural analysis of global systems. These deconstructions examine the mechanics of market leaders to isolate the principles of their structural success.
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
                    {paginatedPosts.map((post) => (
                        <article key={post.slug} className={styles.item}>
                            <div className={styles.itemMeta}>
                                <span className={styles.itemDate}>{post.date}</span>
                                <span className={styles.itemTag}>{post.industry || "General"}</span>
                            </div>
                            <div className={styles.itemBody}>
                                <h2 className={styles.itemTitle}>
                                    <Link href={`/deconstruction/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className={styles.itemExcerpt}>{post.excerpt}</p>
                                <Link href={`/deconstruction/${post.slug}`} className={styles.readMore}>VIEW DECONSTRUCTION &rarr;</Link>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className={styles.noResults}>
                        <p>No deconstructions found for the selected industries.</p>
                    </div>
                )}

                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={styles.navBtn}
                            aria-label="Previous Page"
                        >
                            &larr;
                        </button>

                        <div className={styles.pageNumbers}>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`${styles.pageNumber} ${currentPage === page ? styles.activePage : ""}`}
                                    aria-current={currentPage === page ? "page" : undefined}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={styles.navBtn}
                            aria-label="Next Page"
                        >
                            &rarr;
                        </button>
                    </div>
                )}
                <ScrollToTop />
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
