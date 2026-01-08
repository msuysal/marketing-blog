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
  title: "Marketing System Design | Olgu Uysal",
  description: "Personal blog on Marketing System Design, Architecture, and Engineering.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable}`}>
        <Header />
        <main style={{ minHeight: "calc(100vh - 400px)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
