import { Suspense } from "react";
import styles from "./page.module.css";
import ArticlesPageContent from "./ArticlesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Index | Foundational Articles on Marketing Systems",
    description: "A comprehensive repository of essays decrypting the mechanics of influence, behavioral logic, and systemic marketing architecture.",
    keywords: ["Marketing Essays", "Influence Mechanics", "Behavioral Logic", "Marketing Index", "System Design Archive"]
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
