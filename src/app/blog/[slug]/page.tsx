import { posts } from "@/lib/posts";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import TableOfContents from "@/components/TableOfContents";

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) return { title: "Not Found" };

    const url = `https://marketing-blog-six.vercel.app/blog/${post.slug}`;

    return {
        title: `${post.title} | Olgu Uysal`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: url,
            siteName: "Marketing System Design",
            type: "article",
            publishedTime: post.date,
            authors: ["Olgu Uysal"],
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

    if (!post) {
        notFound();
    }

    const shareUrl = `https://marketing-blog-six.vercel.app/blog/${post.slug}`;
    const shareText = `"${post.title}" - Essays on influence, behavioral logic, and marketing systems.`;

    if (!post.content || post.content.trim() === "") {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>{post.title}</h1>
                <p>Content is currently being archived. Please check back shortly.</p>
                <Link href="/knowledge-base" className={styles.backLink}>&larr; Return to Knowledge Base</Link>
            </div>
        );
    }

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <div className={styles.metaTop}>
                    <span className={styles.date}>{post.date}</span>
                </div>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.lead}>{post.excerpt}</p>
                <div className={styles.metaBottom}>
                    {post.tags.map(tag => (
                        <Link key={tag} href={`/knowledge-base?tag=${encodeURIComponent(tag)}`} className={styles.tag}>
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
                        <ul className={styles.shareLinks}>
                            <li>
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    X / Twitter
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        const caption = `${shareText}\n\nRead more here: ${shareUrl}`;
                                        navigator.clipboard.writeText(caption);
                                        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
                                        window.open(linkedInUrl, '_blank', 'noreferrer');
                                        alert("A suggested caption has been copied to your clipboard. You can paste it in your LinkedIn post!");
                                    }}
                                    className={styles.copyBtn}
                                    title="Share on LinkedIn with a suggested caption"
                                >
                                    LinkedIn
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(shareUrl);
                                        alert("Link copied to clipboard");
                                    }}
                                    className={styles.copyBtn}
                                >
                                    Copy Link
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.contentColumn} data-content="true">
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>

            <section className={styles.relatedSection}>
                <div className={styles.relatedHeader}>
                    <h3>Related Intelligence</h3>
                    <div className={styles.relatedDivider}></div>
                </div>
                <div className={styles.relatedGrid}>
                    {posts
                        .filter(p => p.slug !== post.slug && !p.tags.includes("Case Study"))
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
                                    <Link href={`/blog/${relPost.slug}`}>{relPost.title}</Link>
                                </h4>
                                <p className={styles.relatedCardExcerpt}>{relPost.excerpt}</p>
                            </article>
                        ))
                    }
                </div>
            </section>

            <footer className={styles.footer}>
                <Link href="/knowledge-base" className={styles.backLink}>&larr; Return to Articles</Link>
            </footer>

            <ScrollToTop />
        </article>
    );
}
