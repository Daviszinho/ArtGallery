import type { Metadata } from "next";
import GalleryPageClient from "../components/GalleryPageClient";

export const metadata: Metadata = {
  title: "Galería de Arte - Davis Peñaranda",
  description: "Explora la colección única de Davis Peñaranda. Obras en óleo, acrílico, acuarela y técnica mixta. Galería de arte contemporáneo con obras originales disponibles para compra.",
  keywords: [
    "Davis Peñaranda",
    "galería de arte",
    "arte contemporáneo",
    "pinturas",
    "óleo",
    "acrílico",
    "acuarela",
    "técnica mixta",
    "arte Costa Rica",
    "pinturas originales",
    "arte para comprar",
  ],
  openGraph: {
    title: "Galería de Arte - Davis Peñaranda",
    description: "Explora la colección única de Davis Peñaranda. Obras en óleo, acrílico, acuarela y técnica mixta.",
    url: "https://daviszinhoartgallery.vercel.app",
    type: "website",
  },
};

export default function Home() {
  return <GalleryPageClient />;
}
