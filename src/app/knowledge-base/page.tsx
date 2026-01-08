"use client";

import { Suspense } from "react";
import Link from "next/link";
import { posts, allTags } from "@/lib/posts";
import styles from "./page.module.css";
import { useSearchParams, useRouter } from "next/navigation";

function KnowledgeBaseContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentTags = (searchParams.get("tag")?.split(",").filter(Boolean) || [])
        .filter(tag => tag !== "Case Study");

    // Filter out posts that are Case Studies
    const articlePosts = posts.filter(post => !post.tags.includes("Case Study"));

    // Filter out the 'Case Study' tag itself from the sidebar index
    const articleTags = allTags.filter(tag => tag !== "Case Study");

    const filteredPosts = currentTags.length > 0
        ? articlePosts.filter((post) => currentTags.some(tag => post.tags.includes(tag)))
        : articlePosts;

    const handleTagClick = (tag: string) => {
        let newTags: string[];
        if (currentTags.includes(tag)) {
            newTags = currentTags.filter((t) => t !== tag);
        } else {
            newTags = [...currentTags, tag];
        }

        if (newTags.length === 0) {
            router.push("/knowledge-base");
        } else {
            router.push(`/knowledge-base?tag=${encodeURIComponent(newTags.join(","))}`);
        }
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h3>The Index</h3>
                    <button
                        onClick={() => router.push("/knowledge-base")}
                        className={styles.clearBtn}
                        disabled={currentTags.length === 0}
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
                        {currentTags.length > 0 ? (
                            <span>Selected Filters: {currentTags.map(t => <span key={t} className="highlight" style={{ marginRight: '0.5rem' }}>{t}</span>)} &mdash; {filteredPosts.length} Articles</span>
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
