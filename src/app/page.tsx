import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { posts } from "@/lib/posts";
import GridIllustration from "@/components/GridIllustration";
import HeroPlaceholder from "@/components/HeroPlaceholder";
import SyndicateForm from "@/components/SyndicateForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing System Design | Olgu Uysal | Influence & Architecture",
  description: "Advanced frameworks on the intersection of behavioral logic, digital architecture, and marketing systems. Strategic essays by Olgu Uysal on building unassailable authority.",
  keywords: [
    "Marketing System Design",
    "Olgu Uysal",
    "Behavioral Logic",
    "Marketing Architecture",
    "Influence Economics",
    "Data Driven Marketing",
    "Incentive Design",
    "Growth Strategy"
  ]
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
            Marketing is a system.
            <span className={styles.dimmed}>Not a function.</span>
          </h1>
          <div className={styles.heroContent}>
            <p className={styles.heroBody}>
              Exploring the intersection of behavioral logic and systemic architecture. Deconstructing the mechanics of influence to build structures that give ideas meaning and scale.
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
          <h3>Latest Intelligence</h3>
          <Link href="/articles" aria-label="Explore all articles in the knowledge base">Explore Articles</Link>
        </div>

        <div className={styles.grid}>
          {otherPosts.map((post, index) => {
            let type: 'nudges' | 'feedback' | 'ltv' = 'nudges';
            if (index === 1) type = 'feedback';
            if (index === 2) type = 'ltv';

            return (
              <article key={post.slug} className={styles.card}>
                <Link href={post.tags.includes("Deconstruction") ? `/deconstruction/${post.slug}` : `/article/${post.slug}`} className={styles.cardImageLink} aria-hidden="true" tabIndex={-1}>
                  <GridIllustration type={type} />
                </Link>
                <div className={styles.cardTop}>
                  <span className={styles.cardTag}>{post.tags[0]}</span>
                  <span className={styles.cardDate}>{post.date}</span>
                </div>
                <h3 className={styles.cardTitle}>
                  <Link href={post.tags.includes("Deconstruction") ? `/deconstruction/${post.slug}` : `/article/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <Link href={post.tags.includes("Deconstruction") ? `/deconstruction/${post.slug}` : `/article/${post.slug}`} className={styles.cardCta}>Read Article &rarr;</Link>
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
              alt="Marketing Systems Architecture Illustration"
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
    </div >
  );
}
