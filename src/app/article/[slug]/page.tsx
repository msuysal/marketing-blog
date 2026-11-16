import { posts } from "@/lib/posts";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import PostContent from "@/components/PostContent";
import AudioReader from "@/components/AudioReader";

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return posts
        .filter((post) => !post.tags.includes("Deconstruction"))
        .map((post) => ({
            slug: post.slug,
        }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) return { title: "Not Found" };

    const url = `https://olguuysal.com/article/${post.slug}`;
    const isoDate = new Date(`${post.date} UTC`).toISOString().split("T")[0];

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${post.title} | Olgu Uysal`,
            description: post.excerpt,
            url: url,
            siteName: "Olgu Uysal",
            type: "article",
            publishedTime: isoDate,
            authors: ["Olgu Uysal"],
            tags: post.tags,
            images: [{
                url: "https://olguuysal.com/og-image.png",
                width: 1200,
                height: 630,
                alt: post.title
            }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${post.title} | Olgu Uysal`,
            description: post.excerpt,
            images: ["https://olguuysal.com/og-image.png"],
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    const articlePosts = posts.filter(p => !p.tags.includes("Deconstruction"));
    const currentIndex = articlePosts.findIndex((p) => p.slug === slug);
    const nextPost = currentIndex > 0 ? articlePosts[currentIndex - 1] : null;
    const prevPost = currentIndex < articlePosts.length - 1 ? articlePosts[currentIndex + 1] : null;

    if (!post) {
        notFound();
    }

    // Redirect deconstructions to the correct route
    if (post.tags.includes("Deconstruction")) {
        return (
            <div className={styles.container}>
                <p>Redirecting...</p>
                <meta httpEquiv="refresh" content={`0;url=/deconstruction/${post.slug}`} />
            </div>
        );
    }

    const shareUrl = `https://olguuysal.com/article/${post.slug}`;
    const shareText = `"${post.title}" by Olgu Uysal`;
    const isoDate = new Date(`${post.date} UTC`).toISOString().split("T")[0];

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": isoDate,
        "author": {
            "@type": "Person",
            "name": "Olgu Uysal",
            "url": "https://olguuysal.com",
            "sameAs": [
                "https://linkedin.com/in/olguuysal",
                "https://www.linkedin.com/in/olguuysal/"
            ]
        },
        "url": shareUrl,
        "image": "https://olguuysal.com/og-image.png",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": shareUrl
        },
        "publisher": {
            "@type": "Person",
            "name": "Olgu Uysal",
            "url": "https://olguuysal.com"
        }
    };

    if (!post.content || post.content.trim() === "") {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>{post.title}</h1>
                <p>Content is currently being archived. Please check back shortly.</p>
                <Link href="/articles" className={styles.backLink}>&larr; Return to Articles</Link>
            </div>
        );
    }

    return (
        <article className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Link href="/articles" className={styles.backToIndex}>
                ← Back to Articles
            </Link>

            <header className={styles.header}>
                <div className={styles.metaTop}>
                    <span className={styles.date}>{post.date}</span>
                </div>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.lead}>{post.excerpt}</p>
                <div className={styles.metaBottom}>
                    {post.tags.map(tag => (
                        <Link key={tag} href={`/articles?tag=${encodeURIComponent(tag)}`} className={styles.tag}>
                            {tag}
                        </Link>
                    ))}
                </div>
                <div className={styles.divider}></div>
            </header>

            <div className={styles.layout}>
                <div className={styles.tocColumn}>
                    <TableOfContents />

                    <div className={styles.shareSidebar}>
                        <h4>Share Perspectives</h4>
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
                    <Link href={`/article/${prevPost.slug}`} className={styles.navLinkPrev}>
                        <span className={styles.navLabel}>&larr; Previous</span>
                        <span className={styles.navTitle}>{prevPost.title}</span>
                    </Link>
                ) : <div></div>}

                {nextPost ? (
                    <Link href={`/article/${nextPost.slug}`} className={styles.navLinkNext}>
                        <span className={styles.navLabel}>Next &rarr;</span>
                        <span className={styles.navTitle}>{nextPost.title}</span>
                    </Link>
                ) : <div></div>}
            </nav>

            <section className={styles.relatedSection}>
                <div className={styles.relatedHeader}>
                    <h3>Related Articles</h3>
                    <div className={styles.relatedDivider}></div>
                </div>
                <div className={styles.relatedGrid}>
                    {posts
                        .filter(p => p.slug !== post.slug && !p.tags.includes("Deconstruction"))
                        .map(p => ({
                            post: p,
                            score: p.tags.filter(t => post.tags.includes(t)).length
                        }))
                        .sort((a, b) => b.score - a.score)
                        .slice(0, 3)
                        .map(({ post: relPost }) => (
                            <article key={relPost.slug} className={styles.relatedCard}>
                                <div className={styles.relatedCardTop}>
                                    <span className={styles.relatedCardTag}>{relPost.tags[0]}</span>
                                    <span className={styles.relatedCardDate}>{relPost.date}</span>
                                </div>
                                <h4 className={styles.relatedCardTitle}>
                                    <Link href={`/article/${relPost.slug}`}>{relPost.title}</Link>
                                </h4>
                                <p className={styles.relatedCardExcerpt}>{relPost.excerpt}</p>
                            </article>
                        ))
                    }
                </div>
            </section>

            <footer className={styles.footer}>
                <Link href="/articles" className={styles.backLink}>&larr; Return to Articles</Link>
            </footer>

            <ScrollToTop />
        </article>
    );
}
