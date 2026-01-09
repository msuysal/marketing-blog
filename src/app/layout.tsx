import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://marketing-blog-six.vercel.app"),
  title: {
    default: "Marketing System Design | Olgu Uysal",
    template: "%s | Olgu Uysal"
  },
  description: "Essays on influence, behavioral logic, and marketing systems. Designed at the intersection of Data, Digital Architecture, and Behavioral Economics.",
  keywords: ["Marketing Systems", "Behavioral Economics", "Influence", "Marketing Strategy", "Digital Architecture", "Data Signals", "Olgu Uysal"],
  authors: [{ name: "Olgu Uysal" }],
  creator: "Olgu Uysal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marketing-blog-six.vercel.app",
    siteName: "Marketing System Design",
    title: "Marketing System Design | Olgu Uysal",
    description: "Essays on influence, behavioral logic, and marketing systems.",
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
    description: "Essays on influence, behavioral logic, and marketing systems.",
    images: ["/og-image.png"],
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
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
