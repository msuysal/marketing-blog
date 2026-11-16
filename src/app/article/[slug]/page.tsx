import { posts } from "@/lib/posts";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleDetailClient from "@/components/ArticleDetailClient";

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

    if (!post) {
        notFound();
    }

    if (post.tags.includes("Deconstruction")) {
        return (
            <div className={styles.container}>
                <p>Redirecting...</p>
                <meta httpEquiv="refresh" content={`0;url=/deconstruction/${post.slug}`} />
            </div>
        );
    }

    const shareUrl = `https://olguuysal.com/article/${post.slug}`;
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
            <ArticleDetailClient slug={slug} />
        </article>
    );
}
