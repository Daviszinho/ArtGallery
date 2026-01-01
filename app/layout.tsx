import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

// Elegant serif font for headings - perfect for art galleries
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Modern sans-serif for body text - clean and readable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Monospace font for technical elements
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Davis Peñaranda Art Gallery",
  description: "Explore the unique collection of Davis Peñaranda, featuring works in oil, acrylic, watercolor, and mixed media.",
  category: "Art",
  openGraph: {
    title: "Davis Peñaranda Art Gallery",
    description: "Explore the unique collection of Davis Peñaranda, featuring works in oil, acrylic, watercolor, and mixed media.",
    url: "https://daviszinhoartgallery.vercel.app/", // Placeholder URL, update if known
    siteName: "Davis Peñaranda Art Gallery",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // Ensure this image exists or is a valid placeholder path
        width: 1200,
        height: 630,
        alt: "Davis Peñaranda Art Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davis Peñaranda Art Gallery",
    description: "Explore the unique collection of Davis Peñaranda, featuring works in oil, acrylic, watercolor, and mixed media.",
    images: ["/images/abstracto2.jpg"], // Same or different image for Twitter
  },
};

import { LanguageProvider } from "../context/LanguageContext";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <LanguageProvider>
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
