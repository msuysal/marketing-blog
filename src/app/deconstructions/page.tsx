import { Suspense } from "react";
import styles from "../articles/page.module.css";
import DeconstructionsContent from "./DeconstructionsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Deconstructions | Olgu Uysal",
    description: "Case studies on how Nike, HubSpot, Samsung, and McDonald's built marketing systems that scale.",
    keywords: ["Case Studies", "Market Analysis", "Brand Strategy", "Growth Loops", "Marketing Systems"],
    alternates: {
        canonical: "/deconstructions"
    }
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
