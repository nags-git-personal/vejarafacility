import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@vejarafacility.com";
  const location = "Dubai, United Arab Emirates";

  return (
    <footer id="contact" className="bg-[#040B15] border-t border-slate-800 text-slate-400 pt-12 pb-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10">
          
          {/* Brand Logo - White version */}
          <div className="shrink-0">
            <Logo theme="dark" size="md" />
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-[#38BDF8] transition"
            >
              <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span>{email}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span>{location}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <Link href="/" className="hover:text-[#38BDF8] transition">Home</Link>
            <Link href="#about" className="hover:text-[#38BDF8] transition">About Us</Link>
            <Link href="#services" className="hover:text-[#38BDF8] transition">Services</Link>
            <Link href="#gallery" className="hover:text-[#38BDF8] transition">Gallery</Link>
            <Link href="#contact" className="hover:text-[#38BDF8] transition">Contact Us</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#0284C7] text-slate-300 hover:text-white flex items-center justify-center transition text-xs font-bold"
            >
              in
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#0284C7] text-slate-300 hover:text-white flex items-center justify-center transition text-xs font-bold"
            >
              f
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#0284C7] text-slate-300 hover:text-white flex items-center justify-center transition text-xs font-bold"
            >
              IG
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#0284C7] text-slate-300 hover:text-white flex items-center justify-center transition text-xs font-bold"
            >
              ✕
            </a>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2025 Vejara Facility Management Services. All rights reserved.</p>
          <p className="tracking-wider uppercase text-slate-400 font-medium">
            Professional &nbsp;|&nbsp; Reliable &nbsp;|&nbsp; Efficient
          </p>
        </div>

      </div>
    </footer>
  );
}
