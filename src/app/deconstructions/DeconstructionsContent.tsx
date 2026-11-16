"use client";

import { useMemo } from "react";
import Link from "next/link";
import { posts, allIndustries } from "@/lib/posts";
import { getLocalizedPost } from "@/lib/posts-tr";
import { useLanguage, translateIndustry } from "@/context/LanguageContext";
import styles from "../articles/page.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";

const ITEMS_PER_PAGE = 5;

export default function DeconstructionsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { lang } = useLanguage();
    const currentIndustries = searchParams.get("industry")?.split(",").filter(Boolean) || [];

    const currentPage = Number(searchParams.get("page")) || 1;
    const allBestPractices = posts.filter(post => post.tags.includes("Deconstruction"));

    const filteredPosts = useMemo(() => {
        const results = currentIndustries.length > 0
            ? allBestPractices.filter((post) => post.industry && currentIndustries.includes(post.industry))
            : allBestPractices;
        return results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, [currentIndustries, allBestPractices]);

    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

    const paginatedPosts = filteredPosts
        .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
        .map(p => getLocalizedPost(p, lang));

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
                    <h3>{lang === "tr" ? "Sektörler" : "Industries"}</h3>
                    <button
                        onClick={() => router.push("/deconstructions")}
                        className={styles.clearBtn}
                        disabled={currentIndustries.length === 0}
                        aria-label={lang === "tr" ? "Sektör filtrelerini temizle" : "Clear all active industry filters"}
                    >
                        {lang === "tr" ? "Sıfırla" : "Reset"}
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
                                {translateIndustry(industry, lang)}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles.sidebarFooter}>
                    <p aria-hidden="true">{lang === "tr" ? "Arşiv / Vaka Analizleri" : "Foundation Archive / Deconstructions"}</p>
                </div>
            </aside>

            <main className={styles.main}>
                <header className={styles.resultsHeader}>
                    <h1 className={styles.pageTitle}>{lang === "tr" ? "Vaka Analizleri" : "Deconstructions"}</h1>
                    <p className={styles.disclaimer} style={{ marginBottom: '2rem', fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem', maxWidth: '600px', lineHeight: '1.5' }}>
                        {lang === "tr"
                            ? "Küresel markaların güven kaybetmeden büyümek için ürünlerini, fiyat katmanlarını ve yerel operasyonlarını nasıl kurguladığının analizi."
                            : "Breakdowns of how large brands structure their products, pricing tiers, and local operations to grow without losing trust."}
                    </p>
                    <div className={styles.resultsMeta} aria-live="polite">
                        {currentIndustries.length > 0 ? (
                            <span>
                                {lang === "tr" ? "Seçili Sektörler" : "Selected Industries"}: {currentIndustries.map(i => <span key={i} className="highlight" style={{ marginRight: '0.5rem' }}>{translateIndustry(i, lang)}</span>)} / {filteredPosts.length} {lang === "tr" ? "Vaka Analizi" : "Deconstructions"}
                            </span>
                        ) : (
                            <span>{lang === "tr" ? `Tüm Vaka Analizleri (${allBestPractices.length})` : `All Deconstructions (${allBestPractices.length})`}</span>
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
                                <span className={styles.itemTag}>{translateIndustry(post.industry, lang)}</span>
                            </div>
                            <div className={styles.itemBody}>
                                <h2 className={styles.itemTitle}>
                                    <Link href={`/deconstruction/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className={styles.itemExcerpt}>{post.excerpt}</p>
                                <Link href={`/deconstruction/${post.slug}`} className={styles.readMore}>
                                    {lang === "tr" ? "İncelemeyi Oku →" : "Read Article →"}
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className={styles.noResults}>
                        <p>{lang === "tr" ? "Seçilen sektör için vaka analizi bulunamadı." : "No deconstructions found for the selected industries."}</p>
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
