import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum Reach Media | Elite SEO & Marketing Agency",
  description: "An elite SEO & Marketing agency dedicated to elevating brands beyond the standard reach. Founded by Shreyas Ambhaikar & Tushar Tanpure.",
  icons: {
    icon: "/qrm-logo-transparent.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans relative">
        <LenisProvider>
          <Navbar />
          <main className="flex-1 flex flex-col relative z-0">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
