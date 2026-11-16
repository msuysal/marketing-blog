import HomeClient from "@/components/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Marketing Strategy & Growth Essays | Olgu Uysal"
  },
  description: "Practical essays on marketing strategy, creator partnerships, attribution, and customer retention by economist and marketer Olgu Uysal.",
  alternates: {
    canonical: "https://olguuysal.com"
  },
  openGraph: {
    title: "Marketing Strategy & Growth Essays | Olgu Uysal",
    description: "Practical essays on marketing strategy, creator partnerships, attribution, and customer retention by economist and marketer Olgu Uysal.",
    url: "https://olguuysal.com",
    siteName: "Olgu Uysal",
    type: "website",
    images: [{
      url: "https://olguuysal.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Olgu Uysal - Marketing Strategy & Growth Essays"
    }],
  },
};

export default function Home() {
  return <HomeClient />;
}
