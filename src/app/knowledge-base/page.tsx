"use client";

import { Suspense, useMemo } from "react";
import Link from "next/link";
import { posts, allTags } from "@/lib/posts";
import styles from "./page.module.css";
import { useSearchParams, useRouter } from "next/navigation";

function KnowledgeBaseContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentTags = (searchParams.get("tag")?.split(",").filter(Boolean) || [])
        .filter(tag => tag !== "Deconstruction");
    const searchQuery = searchParams.get("search") || "";

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

        router.push(params.toString() ? `/knowledge-base?${params.toString()}` : "/knowledge-base");
    };

    const handleClearAll = () => {
        router.push("/knowledge-base");
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
                    <p aria-hidden="true">Foundation Archive / Vol. 1</p>
                </div>
            </aside>

            <main className={styles.main}>
                <header className={styles.resultsHeader}>
                    <h1 className={styles.pageTitle}>Articles</h1>

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
                            <span>All Foundation Articles &mdash; {articlePosts.length} Total</span>
                        )}
                    </div>
                </header>

                <div className={styles.list}>
                    {filteredPosts.map((post) => (
                        <article key={post.slug} className={styles.item}>
                            <div className={styles.itemMeta}>
                                <span className={styles.itemDate}>{post.date}</span>
                                <span className={styles.itemTag}>{post.tags[0]}</span>
                            </div>
                            <div className={styles.itemBody}>
                                <h2 className={styles.itemTitle}>
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className={styles.itemExcerpt}>{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className={styles.readMore}>DECRYPT FOUNDATION &rarr;</Link>
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
            </main>
        </div>
    );
}

export default function KnowledgeBase() {
    return (
        <div className={styles.pageWrapper}>
            <Suspense fallback={<div className={styles.loading}>Accessing Foundational Index...</div>}>
                <KnowledgeBaseContent />
            </Suspense>
        </div>
    );
}
