import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Clock, CheckCircle2, ExternalLink } from "lucide-react";
import { FloatingContactDock } from "@/components/FloatingContactDock";
import { Logo } from "@/components/Logo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vejara Facility Services | Warehouse Manpower & Facility Management UAE",
  description: "Premier provider of vetted warehouse helpers, picker-packers, inventory controllers, and professional facility management manpower across Dubai, Abu Dhabi, and UAE. Office 404A, MM Towers, Riggat Al Buteen, Deira, Dubai.",
  keywords: [
    "Warehouse Manpower Supply Dubai",
    "Picker Packer Staff UAE",
    "Facility Management Abu Dhabi",
    "Logistics Staffing Mussafah",
    "MOHRE Compliant Staffing Dubai",
    "MM Towers Deira Facility Services",
  ],
  icons: {
    icon: "/images/logo-icon.svg",
    shortcut: "/images/logo-icon.svg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+971 4 388 5003";
  const telHref = "tel:+97143885003";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@vejarafacility.com";
  const address = process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "OFF404A, Mohd Abna Rashid Mana AI Maktoum, MM Towers, Al Maktoum Rd, Riggat Al Buteen, Dubai, United Arab Emirates";
  const mapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://maps.google.com/?q=OFF404A%2C%20Mohd%20Abna%20Rashid%20Mana%20AI%20Maktoum%2CMM%20Towers%20Al%20Maktoum%20Rd%20-%20Riggat%20Al%20Buteen%20-%20Dubai%20-%20United%20Arab%20Emirates";
  const workingHours = process.env.NEXT_PUBLIC_WORKING_HOURS || "Sunday – Saturday: 9:00 AM – 6:00 PM";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "97143885003";

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#080F1A] text-slate-100 flex flex-col font-sans antialiased selection:bg-[#E88030] selection:text-white">
        {/* Top Notification Bar with Hours & Phone */}
        <div className="bg-[#0D1829] border-b border-slate-800 text-xs py-2 px-4 text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% MOHRE Compliant & Insured
              </span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> {workingHours}
              </span>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <a href={telHref} className="flex items-center gap-1 text-white hover:text-amber-400 font-bold transition">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> {phone}
              </a>
              <a href={`mailto:${email}`} className="hidden md:flex items-center gap-1 hover:text-white transition">
                <Mail className="w-3.5 h-3.5 text-amber-400" /> {email}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <header className="sticky top-0 z-40 bg-[#080F1A]/95 backdrop-blur-md border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* Proper Brand Logo */}
            <Logo size="md" />

            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
              <Link href="#services" className="hover:text-amber-400 transition">Services</Link>
              <Link href="#calculator" className="hover:text-amber-400 transition">Staffing Calculator</Link>
              <Link href="#why-us" className="hover:text-amber-400 transition">Why Us</Link>
              <Link href="#coverage" className="hover:text-amber-400 transition">UAE Coverage</Link>
              <Link href="#contact" className="hover:text-amber-400 transition">Contact & Location</Link>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={telHref}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{phone}</span>
              </a>
              <a
                href={`https://wa.me/${whatsapp}?text=Hello%20Vejara%20Facility,%20I%20need%20manpower%20assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-slate-950 border border-[#25D366]/30 transition duration-200"
              >
                WhatsApp Desk
              </a>
              <Link
                href="#inquiry"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold rounded-lg bg-gradient-to-r from-[#E88030] to-[#FAB028] hover:brightness-110 text-slate-950 shadow-md shadow-amber-500/20 transition transform hover:-translate-y-0.5"
              >
                Request Manpower
              </Link>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-grow">{children}</main>

        {/* Floating Quick Contact Dock (WhatsApp, Call, Map, Quote) */}
        <FloatingContactDock />

        {/* Footer with Verified Location & Operating Hours */}
        <footer id="contact" className="bg-[#050A12] border-t border-slate-800 text-slate-400 pt-16 pb-12 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
              
              {/* Proper Brand Logo in Footer */}
              <div className="space-y-4">
                <Logo size="lg" />
                <p className="text-xs leading-relaxed text-slate-400 pt-2">
                  UAE’s dedicated partner for high-performance logistics staff, warehouse helpers, picker-packers, and commercial facility management.
                </p>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> MOHRE & UAE Labour Law Approved
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
                <ul className="space-y-2.5 text-xs">
                  <li><Link href="#services" className="hover:text-amber-400 transition">Warehouse Manpower Supply</Link></li>
                  <li><Link href="#services" className="hover:text-amber-400 transition">Picker & Packer Solutions</Link></li>
                  <li><Link href="#calculator" className="hover:text-amber-400 transition">Manpower Cost Estimator</Link></li>
                  <li><Link href="#services" className="hover:text-amber-400 transition">Forklift & Equipment Operators</Link></li>
                  <li><Link href="#why-us" className="hover:text-amber-400 transition">Compliance & Safety Standards</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Operating Hours</h4>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold">
                    <Clock className="w-4 h-4" /> Working Schedule
                  </div>
                  <p className="text-white font-medium">{workingHours}</p>
                  <p className="text-[11px] text-slate-400 pt-1">
                    Emergency & Night Shift Dispatch: Available 24/7 on WhatsApp
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Corporate Office & Dispatch</h4>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-slate-200 leading-snug">{address}</span>
                    </p>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition pt-1"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="flex items-center gap-2 pt-1">
                    <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                    <a href={telHref} className="text-white font-bold hover:text-amber-400 transition">{phone}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                    <a href={`mailto:${email}`} className="hover:text-white transition">{email}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <p>© {new Date().getFullYear()} Vejara Facility Services. All rights reserved.</p>
              <p>Registered Address: MM Towers Al Maktoum Rd, Riggat Al Buteen, Deira, Dubai, UAE</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
