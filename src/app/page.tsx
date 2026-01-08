import Link from "next/link";
import styles from "./page.module.css";
import { posts } from "@/lib/posts";
import GridIllustration from "@/components/GridIllustration";

export default function Home() {
  const latestPost = posts[0];
  const otherPosts = posts.slice(1, 4);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroMain}>
          <h1 className={styles.heroTitle}>
            The Architecture <br />
            of <span className="highlight">Marketing</span>
          </h1>
          <div className={styles.heroContent}>
            <p className={styles.heroBody}>
              From behavioral systems and AI-driven decision logic to the ethics of influence, we explore how systems architecture is redefining modern growth.
            </p>
          </div>
          <Link href="/manifesto" className={styles.heroCta}>READ THE MANIFESTO &rarr;</Link>
        </div>

        <div className={styles.heroFeatured}>
          <article className={styles.featuredCard}>
            <span className={styles.label}>FEATURED ARTICLE</span>
            <h2 className={styles.featuredTitle}>
              <Link href={`/blog/${latestPost.slug}`}>{latestPost.title}</Link>
            </h2>
            <p className={styles.featuredExcerpt}>{latestPost.excerpt}</p>
            <div className={styles.meta}>
              <span>{latestPost.date}</span>
              <span>{latestPost.tags[0]}</span>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.sectionHeader}>
          <h3>Latest Intelligence</h3>
          <Link href="/knowledge-base">Explore Articles</Link>
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
              <input type="email" name="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
