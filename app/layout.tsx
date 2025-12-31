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

const baseUrl = "https://daviszinhoartgallery.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Davis Peñaranda Art Gallery",
    template: "%s | Davis Peñaranda Art Gallery",
  },
  description: "Explore the unique collection of Davis Peñaranda, featuring works in oil, acrylic, watercolor, and mixed media. Contemporary art gallery showcasing original paintings and artworks.",
  keywords: [
    "Davis Peñaranda",
    "art gallery",
    "contemporary art",
    "paintings",
    "oil painting",
    "acrylic painting",
    "watercolor",
    "mixed media",
    "art collection",
    "Costa Rica art",
    "arte contemporáneo",
    "pinturas",
    "galería de arte",
  ],
  authors: [{ name: "Davis Peñaranda" }],
  creator: "Davis Peñaranda",
  publisher: "Davis Peñaranda",
  category: "Art",
  classification: "Art Gallery",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US", "pt_BR", "fr_FR", "it_IT", "de_DE"],
    url: baseUrl,
    siteName: "Davis Peñaranda Art Gallery",
    title: "Davis Peñaranda Art Gallery",
    description: "Explore the unique collection of Davis Peñaranda, featuring works in oil, acrylic, watercolor, and mixed media.",
    images: [
      {
        url: "/images/abstracto2.jpg",
        width: 1200,
        height: 630,
        alt: "Davis Peñaranda Art Gallery - Contemporary Art Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davis Peñaranda Art Gallery",
    description: "Explore the unique collection of Davis Peñaranda, featuring works in oil, acrylic, watercolor, and mixed media.",
    images: ["/images/abstracto2.jpg"],
    creator: "@davispenaranda", // Actualizar si hay cuenta de Twitter
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
    canonical: baseUrl,
    languages: {
      "es": `${baseUrl}/es`,
      "en": `${baseUrl}/en`,
      "pt": `${baseUrl}/pt`,
      "fr": `${baseUrl}/fr`,
      "it": `${baseUrl}/it`,
      "de": `${baseUrl}/de`,
    },
  },
  verification: {
    // Agregar códigos de verificación cuando estén disponibles
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

import { LanguageProvider } from "../context/LanguageContext";
import Footer from "../components/Footer";
import WebsiteSchema from "../components/WebsiteSchema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <WebsiteSchema />
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
