import { Suspense } from "react";
import styles from "./page.module.css";
import ArticlesPageContent from "./ArticlesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Articles | Olgu Uysal",
    description: "Essays on marketing systems, incentives, creator partnerships, and measurement.",
    keywords: ["Marketing Essays", "Incentive Design", "Behavioral Economics", "Marketing Measurement", "Creator Economy"],
    alternates: {
        canonical: "/articles"
    }
};

export default function ArticlesPage() {
    return (
        <div className={styles.pageWrapper}>
            <Suspense fallback={<div className={styles.loading}>Accessing Articles...</div>}>
                <ArticlesPageContent />
            </Suspense>
        </div>
    );
}
