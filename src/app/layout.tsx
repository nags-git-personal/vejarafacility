import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContactDock } from "@/components/FloatingContactDock";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vejarafacility.com"),
  title: "Vejara Facility Management Services | Complete Facility Management Solutions UAE",
  description: "Vejara Facility Management Services — Your trusted partner in facility management, labour packing, construction helpers, maintenance, and commercial cleaning across Dubai, Abu Dhabi, and UAE.",
  keywords: [
    "Vejara Facility Management Services",
    "Facility Management Dubai",
    "Labour Packing UAE",
    "Construction Helper Dubai",
    "Maintenance Services UAE",
    "Commercial Cleaning Services Dubai",
    "Facility Management Abu Dhabi",
    "Manpower Supply UAE",
  ],
  icons: {
    icon: "/images/logo-icon.svg",
    shortcut: "/images/logo-icon.svg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Vejara Facility Management Services — UAE",
    description: "Your trusted partner in facility management services. Skilled workforce, 24/7 support, and complete facility solutions across Dubai & UAE.",
    url: "https://vejarafacility.com",
    siteName: "Vejara Facility Management Services",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-[#0284C7] selection:text-white">
        {/* Clean Modern Navbar matching mockup */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Floating Quick Contact Dock (WhatsApp, Call, Map, Quote) */}
        <FloatingContactDock />

        {/* Dark Navy Footer matching mockup */}
        <Footer />
      </body>
    </html>
  );
}
