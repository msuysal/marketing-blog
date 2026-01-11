import { posts } from "@/lib/posts";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import PostContent from "@/components/PostContent";

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

    const url = `https://marketing-blog-teal.vercel.app/article/${post.slug}`;

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: url,
            siteName: "Marketing System Design",
            type: "article",
            publishedTime: post.date,
            authors: ["Olgu Uysal"],
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    const currentIndex = posts.findIndex((p) => p.slug === slug);
    const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

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

    const shareUrl = `https://marketing-blog-teal.vercel.app/article/${post.slug}`;
    const shareText = `"${post.title}" - Essays on influence, behavioral logic, and marketing systems.`;

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
                    <PostContent content={post.content} />
                </div>
            </div>

            <nav className={styles.navigation}>
                {prevPost ? (
                    <Link href={prevPost.tags.includes("Deconstruction") ? `/deconstruction/${prevPost.slug}` : `/article/${prevPost.slug}`} className={styles.navLinkPrev}>
                        <span className={styles.navLabel}>&larr; Previous</span>
                        <span className={styles.navTitle}>{prevPost.title}</span>
                    </Link>
                ) : <div></div>}

                {nextPost ? (
                    <Link href={nextPost.tags.includes("Deconstruction") ? `/deconstruction/${nextPost.slug}` : `/article/${nextPost.slug}`} className={styles.navLinkNext}>
                        <span className={styles.navLabel}>Next &rarr;</span>
                        <span className={styles.navTitle}>{nextPost.title}</span>
                    </Link>
                ) : <div></div>}
            </nav>

            <section className={styles.relatedSection}>
                <div className={styles.relatedHeader}>
                    <h3>Related Intelligence</h3>
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
