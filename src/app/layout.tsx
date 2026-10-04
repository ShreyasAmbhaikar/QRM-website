import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { BackToTop } from "@/components/ui/back-to-top";
import { JsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quantumreachmedia.com"),
  title: {
    default: "Quantum Reach Media | Best SEO & Digital Marketing Agency in Pune",
    template: "%s | Quantum Reach Media",
  },
  description:
    "Award-winning SEO & digital marketing agency in Pune. We engineer #1 Google rankings, Google Map Pack dominance, high-ROI paid ads, and high-performance Next.js web applications for ambitious brands.",
  keywords: [
    "best digital marketing agency in pune",
    "seo agency in pune",
    "seo company in pune",
    "best seo company in pune",
    "digital marketing company in pune",
    "local seo services pune",
    "google ads agency in pune",
    "ppc company in pune",
    "social media marketing agency pune",
    "performance marketing agency pune",
    "seo website development company",
    "AEO optimization pune",
    "GEO generative search optimization",
    "Quantum Reach Media",
    "QRM Pune",
  ],
  authors: [
    { name: "Tushar Tanpure", url: "https://quantumreachmedia.com/about" },
    { name: "Shreyas Ambhaikar", url: "https://quantumreachmedia.com/about" },
  ],
  creator: "Quantum Reach Media",
  publisher: "Quantum Reach Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://quantumreachmedia.com",
  },
  openGraph: {
    title: "Quantum Reach Media | Best SEO & Digital Marketing Agency in Pune",
    description:
      "Award-winning SEO & digital marketing agency in Pune. Engineered for #1 Google rankings, Google Map Pack dominance, and high-converting paid acquisition.",
    url: "https://quantumreachmedia.com",
    siteName: "Quantum Reach Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/qrm-logo-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Quantum Reach Media - Premier SEO & Marketing Agency in Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Reach Media | Best SEO & Digital Marketing Agency in Pune",
    description:
      "Rank #1 on Google Search and Map Pack with Pune's leading performance SEO & marketing architects.",
    images: ["/qrm-logo-transparent.webp"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans relative">
        <LenisProvider>
          <Navbar />
          <div className="flex-1 flex flex-col relative z-0">
            {children}
          </div>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
