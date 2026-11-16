import AboutClient from "@/components/AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "About Olgu Uysal | Economist & Marketing Strategist"
    },
    description: "Olgu Uysal is a marketing strategist with 15+ years of experience in economics, data science, and brand growth across Europe and the Middle East.",
    alternates: {
        canonical: "https://olguuysal.com/about"
    },
    openGraph: {
        title: "About Olgu Uysal | Economist & Marketing Strategist",
        description: "Olgu Uysal is a marketing strategist with 15+ years of experience in economics, data science, and brand growth across Europe and the Middle East.",
        url: "https://olguuysal.com/about",
        siteName: "Olgu Uysal",
        type: "profile",
        images: [{
            url: "https://olguuysal.com/og-image.png",
            width: 1200,
            height: 630,
            alt: "About Olgu Uysal"
        }],
    },
};

export default function About() {
    return <AboutClient />;
}
