import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { posts } from "@/lib/posts";
import GridIllustration from "@/components/GridIllustration";
import HeroPlaceholder from "@/components/HeroPlaceholder";
import SyndicateForm from "@/components/SyndicateForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Marketing Strategy & Growth Essays | Olgu Uysal"
  },
  description: "Practical essays on marketing strategy, creator partnerships, attribution, and customer retention by economist and marketer Olgu Uysal.",
  alternates: {
    canonical: "https://olguuysal.com"
  },
  openGraph: {
    title: "Marketing Strategy & Growth Essays | Olgu Uysal",
    description: "Practical essays on marketing strategy, creator partnerships, attribution, and customer retention by economist and marketer Olgu Uysal.",
    url: "https://olguuysal.com",
    siteName: "Olgu Uysal",
    type: "website",
    images: [{
      url: "https://olguuysal.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Olgu Uysal - Marketing Strategy & Growth Essays"
    }],
  },
};

export default function Home() {
  const articlePosts = posts.filter(post => !post.tags.includes("Deconstruction"));
  const latestPost = articlePosts[0];
  const otherPosts = articlePosts.slice(1, 4);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroMain}>
          <h1 className={styles.heroTitle}>
            Marketing is a system.{" "}
            <span className={styles.dimmed}>Not a function.</span>
          </h1>
          <div className={styles.heroContent}>
            <p className={styles.heroBody}>
              I write about how marketing works in practice. How incentives shape buyer behavior, how creator partnerships actually convert, and why most budgets fail in the same places.
            </p>
          </div>
          <Link href="/the-perspective" className={styles.heroCta}>EXPLORE THE PERSPECTIVE &rarr;</Link>
        </div>

        <div className={styles.heroIllustration}>
          <HeroPlaceholder />
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.sectionHeaderLine}>
          <span className={styles.sectionLabel}>FEATURED ARTICLE</span>
        </div>
        <article className={styles.featuredHorizontal}>
          <div className={styles.featuredHorizontalContent}>
            <h2 className={styles.featuredHorizontalTitle}>
              <Link href={latestPost.tags.includes("Deconstruction") ? `/deconstruction/${latestPost.slug}` : `/article/${latestPost.slug}`}>{latestPost.title}</Link>
            </h2>
            <p className={styles.featuredHorizontalExcerpt}>{latestPost.excerpt}</p>
            <div className={styles.featuredHorizontalMeta}>
              <span>{latestPost.date}</span>
              <span className={styles.dot}>•</span>
              <span>{latestPost.tags[0]}</span>
            </div>
          </div>
          <div className={styles.featuredHorizontalLink}>
            <Link href={latestPost.tags.includes("Deconstruction") ? `/deconstruction/${latestPost.slug}` : `/article/${latestPost.slug}`} className={styles.readMore} aria-label={`Read featured article: ${latestPost.title}`}>Read Article &rarr;</Link>
          </div>
        </article>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.sectionHeader}>
          <h3>Latest</h3>
          <Link href="/articles" aria-label="Browse all articles">All Articles</Link>
        </div>

        <div className={styles.grid}>
          {otherPosts.map((post, index) => {
            let type: 'nudges' | 'feedback' | 'ltv' = 'nudges';
            if (index === 1) type = 'feedback';
            if (index === 2) type = 'ltv';

            const postHref = post.tags.includes("Deconstruction") ? `/deconstruction/${post.slug}` : `/article/${post.slug}`;

            return (
              <article key={post.slug} className={styles.card}>
                <div className={styles.cardImageLink} aria-hidden="true">
                  <GridIllustration type={type} />
                </div>
                <div className={styles.cardTop}>
                  <span className={styles.cardTag}>{post.tags[0]}</span>
                  <span className={styles.cardDate}>{post.date}</span>
                </div>
                <h3 className={styles.cardTitle}>
                  <Link href={postHref}>{post.title}</Link>
                </h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <Link href={postHref} className={styles.cardCta} aria-label={post.title}>Read Article &rarr;</Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletterImage}>
            <Image
              src="/newsletter-illustration.png"
              alt="Newsletter illustration"
              width={600}
              height={400}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.newsletterContent}>
            <h3>Join the Syndicate</h3>
            <p>Sign-up to newsletter to get alerted whenever there is a new article. Promise, only good stuff here.</p>
            <SyndicateForm formId="xdakqvgg" />
          </div>
        </div>
      </section>
    </div>
  );
}
