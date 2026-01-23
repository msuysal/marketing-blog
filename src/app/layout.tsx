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

export const metadata: Metadata = {
  metadataBase: new URL("https://marketing-blog-teal.vercel.app"),
  title: {
    default: "Marketing System Design | Olgu Uysal",
    template: "%s | Olgu Uysal"
  },
  description: "Essays on influence, behavioral logic and marketing systems. Designed at the intersection of Data, Digital Architecture, and Behavioral Economics.",
  keywords: [
    "Marketing Systems",
    "Behavioral Economics",
    "Influence",
    "Marketing Strategy",
    "Digital Architecture",
    "Data Signals",
    "Olgu Uysal",
    "Marketing Consultant Istanbul",
    "Marketing Consultant Lisbon",
    "Growth Marketing",
    "Marketing Analytics",
    "Behavioral Design",
    "Marketing System Architecture"
  ],
  authors: [{ name: "Olgu Uysal", url: "https://www.linkedin.com/in/olguuysal/" }],
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
    url: "https://marketing-blog-teal.vercel.app",
    siteName: "Marketing System Design",
    title: "Marketing System Design | Olgu Uysal",
    description: "Essays on influence, behavioral logic and marketing systems.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Marketing System Design by Olgu Uysal"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing System Design | Olgu Uysal",
    description: "Essays on influence, behavioral logic and marketing systems.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://marketing-blog-teal.vercel.app",
    languages: {
      'en-US': 'https://marketing-blog-teal.vercel.app',
      'en-GB': 'https://marketing-blog-teal.vercel.app',
      'en': 'https://marketing-blog-teal.vercel.app',
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Marketing",
  other: {
    "geo.region": "TR-34;PT-11",
    "geo.placename": "Istanbul;Lisbon",
    "geo.position": "41.0082;28.9784;38.7223;-9.1393",
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://marketing-blog-teal.vercel.app/#person",
        "name": "Olgu Uysal",
        "url": "https://marketing-blog-teal.vercel.app",
        "sameAs": [
          "https://www.linkedin.com/in/olguuysal/"
        ],
        "jobTitle": "Marketing Systems Consultant",
        "worksFor": {
          "@type": "Organization",
          "name": "Independent"
        },
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Istanbul",
            "addressCountry": "TR"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Lisbon",
            "addressCountry": "PT"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://marketing-blog-teal.vercel.app/#website",
        "url": "https://marketing-blog-teal.vercel.app",
        "name": "Marketing System Design",
        "description": "Essays on influence, behavioral logic and marketing systems",
        "publisher": {
          "@id": "https://marketing-blog-teal.vercel.app/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Blog",
        "@id": "https://marketing-blog-teal.vercel.app/#blog",
        "url": "https://marketing-blog-teal.vercel.app",
        "name": "Marketing System Design",
        "description": "Essays on influence, behavioral logic and marketing systems. Designed at the intersection of Data, Digital Architecture, and Behavioral Economics.",
        "author": {
          "@id": "https://marketing-blog-teal.vercel.app/#person"
        },
        "inLanguage": "en-US"
      }
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
