import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
    url: "https://davispenaranda.com", // Placeholder URL, update if known
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
    images: ["/images/og-image.jpg"], // Same or different image for Twitter
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
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
