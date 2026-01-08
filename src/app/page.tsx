import Link from "next/link";
import styles from "./page.module.css";
import { posts } from "@/lib/posts";
import GridIllustration from "@/components/GridIllustration";

export default function Home() {
  const articlePosts = posts.filter(post => !post.tags.includes("Case Study"));
  const latestPost = articlePosts[0];
  const otherPosts = articlePosts.slice(1, 4);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroMain}>
          <h1 className={styles.heroTitle}>
            Architecting <br />
            Modern <span className="highlight">Marketing</span>
          </h1>
          <div className={styles.heroContent}>
            <p className={styles.heroBody}>
              Deconstructing marketing into interconnected systems. We explore how emerging architectures and value frameworks can help us think, question, and build with purpose.
            </p>
          </div>
          <Link href="/manifesto" className={styles.heroCta}>EXPLORE THE PERSPECTIVE &rarr;</Link>
        </div>

        <div className={styles.heroIllustration}>
          <img src="/hero-human-systems.png" alt="Human Centric Marketing Systems Inquiry" className={styles.heroImg} />
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.sectionHeaderLine}>
          <span className={styles.sectionLabel}>FEATURED ARTICLE</span>
        </div>
        <article className={styles.featuredHorizontal}>
          <div className={styles.featuredHorizontalContent}>
            <h2 className={styles.featuredHorizontalTitle}>
              <Link href={`/blog/${latestPost.slug}`}>{latestPost.title}</Link>
            </h2>
            <p className={styles.featuredHorizontalExcerpt}>{latestPost.excerpt}</p>
            <div className={styles.featuredHorizontalMeta}>
              <span>{latestPost.date}</span>
              <span className={styles.dot}>•</span>
              <span>{latestPost.tags[0]}</span>
            </div>
          </div>
          <div className={styles.featuredHorizontalLink}>
            <Link href={`/blog/${latestPost.slug}`} className={styles.readMore} aria-label={`Read featured article: ${latestPost.title}`}>Read Article &rarr;</Link>
          </div>
        </article>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.sectionHeader}>
          <h3>Latest Intelligence</h3>
          <Link href="/knowledge-base" aria-label="Explore all articles in the knowledge base">Explore Articles</Link>
        </div>

        <div className={styles.grid}>
          {otherPosts.map((post, index) => {
            let type: 'nudges' | 'feedback' | 'ltv' = 'nudges';
            if (index === 1) type = 'feedback';
            if (index === 2) type = 'ltv';

            return (
              <article key={post.slug} className={styles.card}>
                <GridIllustration type={type} />
                <div className={styles.cardTop}>
                  <span className={styles.cardTag}>{post.tags[0]}</span>
                  <span className={styles.cardDate}>{post.date}</span>
                </div>
                <h3 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletterImage}>
            <img src="/newsletter-illustration.png" alt="Marketing Systems Architecture Illustration" />
          </div>
          <div className={styles.newsletterContent}>
            <h3>Join the Syndicate</h3>
            <p>Sign-up to newsletter to get alerted whenever there is a new article. We promise, only good stuff here.</p>
            <form className={styles.form} action="https://formspree.io/f/xdakqvgg" method="POST">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" name="email" placeholder="Enter your email address" required aria-required="true" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div >
  );
}
