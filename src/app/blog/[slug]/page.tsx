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

    return {
        title: `${post.title} | Olgu Uysal`,
        description: post.excerpt,
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

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
                        <h4>Share this article</h4>
                        <ul className={styles.shareLinks}>
                            <li>
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://olguuysal.com/blog/${post.slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    X / Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://olguuysal.com/blog/${post.slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: https://olguuysal.com/blog/${post.slug}`)}`}
                                >
                                    Email
                                </a>
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
                        .filter(p => p.slug !== post.slug)
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
