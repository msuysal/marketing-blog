import { Suspense } from "react";
import styles from "./page.module.css";
import ArticlesPageContent from "./ArticlesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Marketing Strategy & Attribution Articles",
    description: "Practical articles on influencer marketing measurement, attribution models, customer retention, and pricing strategy by Olgu Uysal.",
    alternates: {
        canonical: "https://olguuysal.com/articles"
    },
    openGraph: {
        title: "Marketing Strategy & Attribution Articles | Olgu Uysal",
        description: "Practical articles on influencer marketing measurement, attribution models, customer retention, and pricing strategy by Olgu Uysal.",
        url: "https://olguuysal.com/articles",
        siteName: "Olgu Uysal",
        type: "website",
        images: [{
            url: "https://olguuysal.com/og-image.png",
            width: 1200,
            height: 630,
            alt: "Marketing Strategy & Attribution Articles | Olgu Uysal"
        }],
    },
};

export default function ArticlesPage() {
    return (
        <div className={styles.pageWrapper}>
            <Suspense fallback={<div className={styles.loading}>Loading articles...</div>}>
                <ArticlesPageContent />
            </Suspense>
        </div>
    );
}
