"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";
import { posts } from "@/lib/posts";
import { getLocalizedPost } from "@/lib/posts-tr";
import { useLanguage, translateTag } from "@/context/LanguageContext";
import GridIllustration from "@/components/GridIllustration";
import HeroPlaceholder from "@/components/HeroPlaceholder";
import SyndicateForm from "@/components/SyndicateForm";

export default function HomeClient() {
    const { lang } = useLanguage();
    const articlePosts = posts.filter(post => !post.tags.includes("Deconstruction"));
    const latestPost = getLocalizedPost(articlePosts[0], lang);
    const otherPosts = articlePosts.slice(1, 4).map(p => getLocalizedPost(p, lang));

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroMain}>
                    <h1 className={styles.heroTitle}>
                        {lang === "tr" ? (
                            <>
                                Pazarlama bir{" "}
                                <span className={styles.dimmed}>sistem tasarımı.</span>
                            </>
                        ) : (
                            <>
                                Marketing is{" "}
                                <span className={styles.dimmed}>system design.</span>
                            </>
                        )}
                    </h1>
                    <div className={styles.heroContent}>
                        <p className={styles.heroBody}>
                            {lang === "tr"
                                ? "Veri bilimi, insan davranışı ve ekonomik modellerin pazarlamayı nasıl şekillendirdiğini yazıyorum. İnsanların neye göre karar verdiğini, kurulan yapıların büyümeyi nasıl yönlendirdiğini ve markaların neden hep aynı yerde takıldığını inceliyorum."
                                : "I write about how data science, human behavior, and economic models shape marketing. How people actually make decisions, how incentives drive growth, and why most budgets fail in the same places."}
                        </p>
                    </div>
                    <Link href="/the-perspective" className={styles.heroCta}>
                        {lang === "tr" ? "YAKLAŞIMI OKU →" : "EXPLORE THE PERSPECTIVE →"}
                    </Link>
                </div>

                <div className={styles.heroIllustration}>
                    <HeroPlaceholder />
                </div>
            </section>

            <section className={styles.featuredSection}>
                <div className={styles.sectionHeaderLine}>
                    <span className={styles.sectionLabel}>
                        {lang === "tr" ? "ÖNE ÇIKAN MAKALE" : "FEATURED ARTICLE"}
                    </span>
                </div>
                <article className={styles.featuredHorizontal}>
                    <div className={styles.featuredHorizontalContent}>
                        <h2 className={styles.featuredHorizontalTitle}>
                            <Link href={latestPost.tags.includes("Deconstruction") ? `/deconstruction/${latestPost.slug}` : `/article/${latestPost.slug}`}>
                                {latestPost.title}
                            </Link>
                        </h2>
                        <p className={styles.featuredHorizontalExcerpt}>{latestPost.excerpt}</p>
                        <div className={styles.featuredHorizontalMeta}>
                            <span>{latestPost.date}</span>
                            <span className={styles.dot}>•</span>
                            <span>{translateTag(latestPost.tags[0], lang)}</span>
                        </div>
                    </div>
                    <div className={styles.featuredHorizontalLink}>
                        <Link
                            href={latestPost.tags.includes("Deconstruction") ? `/deconstruction/${latestPost.slug}` : `/article/${latestPost.slug}`}
                            className={styles.readMore}
                            aria-label={`${lang === "tr" ? "Makaleyi oku" : "Read featured article"}: ${latestPost.title}`}
                        >
                            {lang === "tr" ? "Makaleyi Oku →" : "Read Article →"}
                        </Link>
                    </div>
                </article>
            </section>

            <section className={styles.gridSection}>
                <div className={styles.sectionHeader}>
                    <h3>{lang === "tr" ? "Son Yazılar" : "Latest"}</h3>
                    <Link href="/articles" aria-label={lang === "tr" ? "Tüm makalelere göz at" : "Browse all articles"}>
                        {lang === "tr" ? "Tüm Makaleler" : "All Articles"}
                    </Link>
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
                                    <span className={styles.cardTag}>{translateTag(post.tags[0], lang)}</span>
                                    <span className={styles.cardDate}>{post.date}</span>
                                </div>
                                <h3 className={styles.cardTitle}>
                                    <Link href={postHref}>{post.title}</Link>
                                </h3>
                                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                <Link href={postHref} className={styles.cardCta} aria-label={post.title}>
                                    {lang === "tr" ? "Makaleyi Oku →" : "Read Article →"}
                                </Link>
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
                        <h3>{lang === "tr" ? "Bültene Katılın" : "Join the Syndicate"}</h3>
                        <p>
                            {lang === "tr"
                                ? "Yeni bir yazı yayınlandığında haberdar olmak için e-posta listesine kaydolun. Spam yok, sadece üzerinde düşünülmüş analizler."
                                : "Sign-up to newsletter to get alerted whenever there is a new article. Promise, only good stuff here."}
                        </p>
                        <SyndicateForm formId="xdakqvgg" />
                    </div>
                </div>
            </section>
        </div>
    );
}
