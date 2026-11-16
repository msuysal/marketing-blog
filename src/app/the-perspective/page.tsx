import PerspectiveClient from "@/components/PerspectiveClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How I Approach Marketing Strategy",
    description: "Why most marketing problems come down to incentives, product defaults, and measurement rather than ad copy or channel tactics.",
    alternates: {
        canonical: "https://olguuysal.com/the-perspective"
    },
    openGraph: {
        title: "How I Approach Marketing Strategy | Olgu Uysal",
        description: "Why most marketing problems come down to incentives, product defaults, and measurement rather than ad copy or channel tactics.",
        url: "https://olguuysal.com/the-perspective",
        siteName: "Olgu Uysal",
        type: "website",
        images: [{
            url: "https://olguuysal.com/og-image.png",
            width: 1200,
            height: 630,
            alt: "How I Approach Marketing Strategy | Olgu Uysal"
        }],
    },
};

export default function ThePerspective() {
    return <PerspectiveClient />;
}
