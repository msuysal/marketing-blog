"use client";

import { useMemo } from "react";
import Link from "next/link";
import { posts, allTags } from "@/lib/posts";
import { getLocalizedPost } from "@/lib/posts-tr";
import { useLanguage, translateTag } from "@/context/LanguageContext";
import styles from "./page.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";

const ITEMS_PER_PAGE = 5;

export default function ArticlesPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { lang } = useLanguage();

    const currentTags = (searchParams.get("tag")?.split(",").filter(Boolean) || [])
        .filter(tag => tag !== "Deconstruction");
    const searchQuery = searchParams.get("search") || "";
    const currentPage = Number(searchParams.get("page")) || 1;

    const articlePosts = posts.filter(post => !post.tags.includes("Deconstruction"));
    const articleTags = allTags.filter(tag => tag !== "Deconstruction");

    const filteredPosts = useMemo(() => {
        let results = articlePosts;

        if (currentTags.length > 0) {
            results = results.filter((post) => currentTags.some(tag => post.tags.includes(tag)));
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            results = results.filter((post) => {
                const trPost = getLocalizedPost(post, "tr");
                const searchableContent = `${post.title} ${post.excerpt} ${post.content} ${trPost.title} ${trPost.excerpt} ${trPost.content}`.toLowerCase();
                return searchableContent.includes(query);
            });
        }

        return results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, [currentTags, searchQuery, articlePosts]);

    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

    const paginatedPosts = filteredPosts
        .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
        .map(p => getLocalizedPost(p, lang));

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
                    <h3>{lang === "tr" ? "Kategoriler" : "The Index"}</h3>
                    <button
                        onClick={handleClearAll}
                        className={styles.clearBtn}
                        disabled={currentTags.length === 0 && !searchQuery}
                        aria-label={lang === "tr" ? "Filtreleri temizle" : "Clear all active filters"}
                    >
                        {lang === "tr" ? "Sıfırla" : "Reset"}
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
                                {translateTag(tag, lang)}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles.sidebarFooter}>
                    <p aria-hidden="true">{lang === "tr" ? "Arşiv / Makaleler" : "Foundation Archive / Articles"}</p>
                </div>
            </aside>

            <main className={styles.main}>
                <header className={styles.resultsHeader}>
                    <h1 className={styles.pageTitle}>{lang === "tr" ? "Makaleler" : "Articles"}</h1>
                    <p className={styles.disclaimer} style={{ marginBottom: '2rem', fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem', maxWidth: '600px', lineHeight: '1.5' }}>
                        {lang === "tr"
                            ? "Pazarlamada neyin gerçekten çalıştığı, neyin sadece raporda güzel durduğu üzerine yazılar."
                            : "Notes on how incentives, measurement, and network structure shape what works in marketing."}
                    </p>

                    <div className={styles.resultsMeta} aria-live="polite">
                        {currentTags.length > 0 || searchQuery ? (
                            <span>
                                {currentTags.length > 0 && (
                                    <>{lang === "tr" ? "Filtreler" : "Filters"}: {currentTags.map(t => <span key={t} className="highlight" style={{ marginRight: '0.5rem' }}>{translateTag(t, lang)}</span>)}</>
                                )}
                                {searchQuery && (
                                    <> {currentTags.length > 0 && '+'} {lang === "tr" ? "Arama" : "Search"}: "{searchQuery}"</>
                                )}
                                {' '}/ {filteredPosts.length} {lang === "tr" ? "Makale" : (filteredPosts.length === 1 ? 'Article' : 'Articles')}
                            </span>
                        ) : (
                            <span>{lang === "tr" ? `Tüm Makaleler (${articlePosts.length})` : `All Articles (${articlePosts.length})`}</span>
                        )}
                        {totalPages > 1 && (
                            <span style={{ marginLeft: '1rem', opacity: 0.6 }}>
                                &bull; {lang === "tr" ? `Sayfa ${currentPage} / ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
                            </span>
                        )}
                    </div>
                </header>

                <div className={styles.list}>
                    {paginatedPosts.map((post) => (
                        <article key={post.slug} className={styles.item}>
                            <div className={styles.itemMeta}>
                                <span className={styles.itemDate}>{post.date}</span>
                                <span className={styles.itemTag}>{translateTag(post.tags[0], lang)}</span>
                            </div>
                            <div className={styles.itemBody}>
                                <h2 className={styles.itemTitle}>
                                    <Link href={`/article/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className={styles.itemExcerpt}>{post.excerpt}</p>
                                <Link href={`/article/${post.slug}`} className={styles.readMore}>
                                    {lang === "tr" ? "Makaleyi Oku →" : "Read Article →"}
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className={styles.noResults}>
                        <p>{lang === "tr" ? "Eşleşen makale bulunamadı." : "No matching articles found."}</p>
                        <button onClick={handleClearAll} className={styles.resetButton}>
                            {lang === "tr" ? "Filtreleri Temizle" : "Clear Filters"}
                        </button>
                    </div>
                )}

                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={styles.navBtn}
                            aria-label={lang === "tr" ? "Önceki Sayfa" : "Previous Page"}
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
                            aria-label={lang === "tr" ? "Sonraki Sayfa" : "Next Page"}
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
