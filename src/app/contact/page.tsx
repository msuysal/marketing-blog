import ContactClient from "@/components/ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact for Consulting & Speaking",
    description: "Contact Olgu Uysal for marketing strategy consulting, advisory roles, speaking engagements, or media inquiries in Istanbul and Lisbon.",
    alternates: {
        canonical: "https://olguuysal.com/contact"
    },
    openGraph: {
        title: "Contact for Consulting & Speaking | Olgu Uysal",
        description: "Contact Olgu Uysal for marketing strategy consulting, advisory roles, speaking engagements, or media inquiries in Istanbul and Lisbon.",
        url: "https://olguuysal.com/contact",
        siteName: "Olgu Uysal",
        type: "website",
        images: [{
            url: "https://olguuysal.com/og-image.png",
            width: 1200,
            height: 630,
            alt: "Contact Olgu Uysal"
        }],
    },
};

export default function Contact() {
    return <ContactClient />;
}
