"use client";

import { Suspense, useMemo } from "react";
import Link from "next/link";
import { posts, allTags } from "@/lib/posts";
import styles from "./page.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";

const ITEMS_PER_PAGE = 5;

function ArticlesPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentTags = (searchParams.get("tag")?.split(",").filter(Boolean) || [])
        .filter(tag => tag !== "Deconstruction");
    const searchQuery = searchParams.get("search") || "";
    // Get page from URL, default to 1
    const currentPage = Number(searchParams.get("page")) || 1;

    // Filter out posts that are Deconstructions
    const articlePosts = posts.filter(post => !post.tags.includes("Deconstruction"));

    // Filter out the 'Deconstruction' tag itself from the sidebar index
    const articleTags = allTags.filter(tag => tag !== "Deconstruction");

    // Combined filtering: tags + search
    const filteredPosts = useMemo(() => {
        let results = articlePosts;

        // Apply tag filter
        if (currentTags.length > 0) {
            results = results.filter((post) => currentTags.some(tag => post.tags.includes(tag)));
        }

        // Apply search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            results = results.filter((post) => {
                const searchableContent = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase();
                return searchableContent.includes(query);
            });
        }

        return results;
    }, [currentTags, searchQuery, articlePosts]);

    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

    // Slice posts for current page
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const updateParams = (newParams: URLSearchParams) => {
        router.push(newParams.toString() ? `/articles?${newParams.toString()}` : "/articles");
    };

    const handleTagClick = (tag: string) => {
        let newTags: string[];
        if (currentTags.includes(tag)) {
            newTags = currentTags.filter((t) => t !== tag);
        } else {
            newTags = [...currentTags, tag];
        }

        const params = new URLSearchParams();
        if (newTags.length > 0) {
            params.set("tag", newTags.join(","));
        }
        if (searchQuery) {
            params.set("search", searchQuery);
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

    const handleClearAll = () => {
        router.push("/articles");
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h3>The Index</h3>
                    <button
                        onClick={handleClearAll}
                        className={styles.clearBtn}
                        disabled={currentTags.length === 0 && !searchQuery}
                        aria-label="Clear all active filters"
                    >
                        Reset
                    </button>
                </div>
                <ul className={styles.tagList}>
                    {articleTags.map((tag) => (
                        <li key={tag}>
                            <button
                                onClick={() => handleTagClick(tag)}
                                className={`${styles.tagBtn} ${currentTags.includes(tag) ? styles.activeTag : ""}`}
                                aria-pressed={currentTags.includes(tag)}
                            >
                                {tag}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles.sidebarFooter}>
                    <p aria-hidden="true">Foundation Archive / Articles</p>
                </div>
            </aside>

            <main className={styles.main}>
                <header className={styles.resultsHeader}>
                    <h1 className={styles.pageTitle}>Articles</h1>
                    <p className={styles.disclaimer} style={{ marginBottom: '2rem', fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem', maxWidth: '600px', lineHeight: '1.5' }}>
                        A repository of foundational frameworks. These essays decrypt the invisible mechanics of influence, behavioral economics, and system design that govern modern markets.
                    </p>

                    <div className={styles.resultsMeta}>
                        {currentTags.length > 0 || searchQuery ? (
                            <span>
                                {currentTags.length > 0 && (
                                    <>Filters: {currentTags.map(t => <span key={t} className="highlight" style={{ marginRight: '0.5rem' }}>{t}</span>)}</>
                                )}
                                {searchQuery && (
                                    <> {currentTags.length > 0 && '+'} Search: "{searchQuery}"</>
                                )}
                                {' '}&mdash; {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
                            </span>
                        ) : (
                            <span>All Articles &mdash; {articlePosts.length} Total</span>
                        )}
                        {totalPages > 1 && (
                            <span style={{ marginLeft: '1rem', opacity: 0.6 }}>
                                &bull; Page {currentPage} of {totalPages}
                            </span>
                        )}
                    </div>
                </header>

                <div className={styles.list}>
                    {paginatedPosts.map((post) => (
                        <article key={post.slug} className={styles.item}>
                            <div className={styles.itemMeta}>
                                <span className={styles.itemDate}>{post.date}</span>
                                <span className={styles.itemTag}>{post.tags[0]}</span>
                            </div>
                            <div className={styles.itemBody}>
                                <h2 className={styles.itemTitle}>
                                    <Link href={`/article/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className={styles.itemExcerpt}>{post.excerpt}</p>
                                <Link href={`/article/${post.slug}`} className={styles.readMore}>DECRYPT FOUNDATION &rarr;</Link>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className={styles.noResults}>
                        <p>No foundational records found.</p>
                        <button onClick={handleClearAll} className={styles.resetButton}>
                            Clear Filters
                        </button>
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

export default function ArticlesPage() {
    return (
        <div className={styles.pageWrapper}>
            <Suspense fallback={<div className={styles.loading}>Accessing Articles...</div>}>
                <ArticlesPageContent />
            </Suspense>
        </div>
    );
}
