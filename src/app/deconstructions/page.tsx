import { Suspense } from "react";
import styles from "../articles/page.module.css";
import DeconstructionsContent from "./DeconstructionsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Deconstructions | Architectural Analysis of Market Leaders",
    description: "In-depth deconstructions of global marketing systems. Examining the mechanics of market leaders to isolate the principles of structural success.",
    keywords: ["Case Studies", "Market Analysis", "Strategic Deconstruction", "Business Architecture", "Marketing Systems Case Study"]
};

export default function DeconstructionsPage() {
    return (
        <div className={styles.pageWrapper}>
            <Suspense fallback={<div className={styles.loading}>Accessing Deconstruction Archive...</div>}>
                <DeconstructionsContent />
            </Suspense>
        </div>
    );
}
