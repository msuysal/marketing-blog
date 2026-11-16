import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://olguuysal.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Marketing Strategy & Growth Essays | Olgu Uysal",
    template: "%s | Olgu Uysal"
  },
  description: "Practical essays on marketing strategy, creator partnerships, attribution, and customer retention by economist and marketer Olgu Uysal.",
  authors: [{ name: "Olgu Uysal", url: "https://linkedin.com/in/olguuysal" }],
  creator: "Olgu Uysal",
  publisher: "Olgu Uysal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Olgu Uysal",
    title: "Marketing Strategy & Growth Essays | Olgu Uysal",
    description: "Practical essays on marketing strategy, creator partnerships, attribution, and customer retention by economist and marketer Olgu Uysal.",
    images: [{
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "Olgu Uysal - Marketing Strategy & Growth Essays"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Strategy & Growth Essays | Olgu Uysal",
    description: "Practical essays on marketing strategy, creator partnerships, attribution, and customer retention by economist and marketer Olgu Uysal.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@olguuysal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://olguuysal.com/#person",
    "name": "Olgu Uysal",
    "url": "https://olguuysal.com",
    "jobTitle": "Marketing Strategist",
    "sameAs": [
      "https://linkedin.com/in/olguuysal",
      "https://www.linkedin.com/in/olguuysal/"
    ]
  };

  return (
    <html lang="en">
      <head>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1c1c1d" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${newsreader.variable}`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" style={{ minHeight: "calc(100vh - 400px)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
