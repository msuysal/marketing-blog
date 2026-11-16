"use client";

import { posts, Post } from "@/lib/posts";
import { getLocalizedPost } from "@/lib/posts-tr";
import { useLanguage, translateTag, translateIndustry } from "@/context/LanguageContext";
import styles from "../app/deconstruction/[slug]/page.module.css";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import PostContent from "@/components/PostContent";
import AudioReader from "@/components/AudioReader";

interface Props {
    slug: string;
}

export default function DeconstructionDetailClient({ slug }: Props) {
    const { lang } = useLanguage();
    const rawPost = posts.find((p) => p.slug === slug) as Post;
    const post = getLocalizedPost(rawPost, lang);

    const deconstructionPosts = posts.filter(p => p.tags.includes("Deconstruction"));
    const currentIndex = deconstructionPosts.findIndex((p) => p.slug === slug);
    const nextPost = currentIndex > 0 ? getLocalizedPost(deconstructionPosts[currentIndex - 1], lang) : null;
    const prevPost = currentIndex < deconstructionPosts.length - 1 ? getLocalizedPost(deconstructionPosts[currentIndex + 1], lang) : null;

    const shareUrl = `https://olguuysal.com/deconstruction/${post.slug}`;
    const shareText = `"${post.title}" - Olgu Uysal`;

    return (
        <>
            <Link href="/deconstructions" className={styles.backToIndex}>
                ← {lang === "tr" ? "Vaka Analizlerine Dön" : "Back to Deconstructions"}
            </Link>

            <header className={styles.header}>
                <div className={styles.metaTop}>
                    <span className={styles.date}>{post.date}</span>
                </div>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.lead}>{post.excerpt}</p>
                <div className={styles.metaBottom}>
                    {post.tags.map(tag => (
                        <Link key={tag} href={`/deconstructions?industry=${encodeURIComponent(post.industry || "")}`} className={styles.tag}>
                            {translateTag(tag, lang)}
                        </Link>
                    ))}
                </div>
                <div className={styles.divider}></div>
            </header>

            <div className={styles.layout}>
                <div className={styles.tocColumn}>
                    <TableOfContents />

                    <div className={styles.shareSidebar}>
                        <h4>{lang === "tr" ? "Yazıyı Paylaş" : "Share Perspectives"}</h4>
                        <ShareButtons shareUrl={shareUrl} shareText={shareText} />
                    </div>
                </div>

                <div className={styles.contentColumn} data-content="true">
                    <AudioReader content={post.content} title={post.title} />
                    <PostContent content={post.content} />
                </div>
            </div>

            <nav className={styles.navigation}>
                {prevPost ? (
                    <Link href={`/deconstruction/${prevPost.slug}`} className={styles.navLinkPrev}>
                        <span className={styles.navLabel}>&larr; {lang === "tr" ? "Önceki" : "Previous"}</span>
                        <span className={styles.navTitle}>{prevPost.title}</span>
                    </Link>
                ) : <div></div>}

                {nextPost ? (
                    <Link href={`/deconstruction/${nextPost.slug}`} className={styles.navLinkNext}>
                        <span className={styles.navLabel}>{lang === "tr" ? "Sonraki" : "Next"} &rarr;</span>
                        <span className={styles.navTitle}>{nextPost.title}</span>
                    </Link>
                ) : <div></div>}
            </nav>

            <section className={styles.relatedSection}>
                <div className={styles.relatedHeader}>
                    <h3>{lang === "tr" ? "İlgili Vaka Analizleri" : "Related Case Studies"}</h3>
                    <div className={styles.relatedDivider}></div>
                </div>
                <div className={styles.relatedGrid}>
                    {posts
                        .filter(p => p.slug !== post.slug && p.tags.includes("Deconstruction"))
                        .map(p => ({
                            post: getLocalizedPost(p, lang),
                            score: p.industry === post.industry ? 2 : 0
                        }))
                        .sort((a, b) => b.score - a.score)
                        .slice(0, 3)
                        .map(({ post: relPost }) => (
                            <article key={relPost.slug} className={styles.relatedCard}>
                                <div className={styles.relatedCardTop}>
                                    <span className={styles.relatedCardTag}>{translateIndustry(relPost.industry, lang)}</span>
                                    <span className={styles.relatedCardDate}>{relPost.date}</span>
                                </div>
                                <h4 className={styles.relatedCardTitle}>
                                    <Link href={`/deconstruction/${relPost.slug}`}>{relPost.title}</Link>
                                </h4>
                                <p className={styles.relatedCardExcerpt}>{relPost.excerpt}</p>
                            </article>
                        ))
                    }
                </div>
            </section>

            <footer className={styles.footer}>
                <Link href="/deconstructions" className={styles.backLink}>
                    &larr; {lang === "tr" ? "Vaka Analizlerine Dön" : "Return to Deconstructions"}
                </Link>
            </footer>

            <ScrollToTop />
        </>
    );
}
