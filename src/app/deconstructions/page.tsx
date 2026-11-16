import { Suspense } from "react";
import styles from "../articles/page.module.css";
import DeconstructionsContent from "./DeconstructionsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brand Strategy Case Studies",
    description: "Case studies on how Nike, HubSpot, Samsung, and McDonald's structure their products, pricing tiers, and global marketing.",
    alternates: {
        canonical: "https://olguuysal.com/deconstructions"
    },
    openGraph: {
        title: "Brand Strategy Case Studies | Olgu Uysal",
        description: "Case studies on how Nike, HubSpot, Samsung, and McDonald's structure their products, pricing tiers, and global marketing.",
        url: "https://olguuysal.com/deconstructions",
        siteName: "Olgu Uysal",
        type: "website",
        images: [{
            url: "https://olguuysal.com/og-image.png",
            width: 1200,
            height: 630,
            alt: "Brand Strategy Case Studies | Olgu Uysal"
        }],
    },
};

export default function DeconstructionsPage() {
    return (
        <div className={styles.pageWrapper}>
            <Suspense fallback={<div className={styles.loading}>Loading case studies...</div>}>
                <DeconstructionsContent />
            </Suspense>
        </div>
    );
}
