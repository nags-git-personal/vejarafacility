"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ChevronDown, Menu, X, Phone, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+971 4 388 5003";
  const telHref = "tel:+97143885003";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo - Official Vejara Facility Management Services */}
        <div className="shrink-0">
          <Logo theme="light" size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          {/* Home with active blue indicator */}
          <Link
            href="/"
            className="text-[#0284C7] relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0284C7]"
          >
            Home
          </Link>

          <Link
            href="#about"
            className="hover:text-[#0284C7] py-2 transition-colors"
          >
            About Us
          </Link>

          {/* Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="#services"
              className="flex items-center gap-1 hover:text-[#0284C7] py-2 transition-colors"
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            {servicesDropdownOpen && (
              <div className="absolute top-full -left-4 w-64 pt-2 z-50 animate-fade-in">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-2 space-y-1">
                  <Link
                    href="#services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#0284C7] hover:bg-sky-50 rounded-lg transition"
                  >
                    Labour Packing
                  </Link>
                  <Link
                    href="#services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#0284C7] hover:bg-sky-50 rounded-lg transition"
                  >
                    Construction Helper
                  </Link>
                  <Link
                    href="#services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#0284C7] hover:bg-sky-50 rounded-lg transition"
                  >
                    Maintenance Services
                  </Link>
                  <Link
                    href="#services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#0284C7] hover:bg-sky-50 rounded-lg transition"
                  >
                    Cleaning Services
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="#team"
            className="hover:text-[#0284C7] py-2 transition-colors"
          >
            Our Team
          </Link>

          <Link
            href="#gallery"
            className="hover:text-[#0284C7] py-2 transition-colors"
          >
            Gallery
          </Link>

          <Link
            href="#contact"
            className="hover:text-[#0284C7] py-2 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right CTA / Phone */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={telHref}
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1B33] transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>{phone}</span>
          </a>

          <Link
            href="#quote"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-md shadow-sky-500/25 transition transform hover:-translate-y-0.5"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#0284C7] hover:bg-slate-100 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fade-down shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#0284C7]"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#0284C7]"
          >
            About Us
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#0284C7]"
          >
            Services
          </Link>
          <Link
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#0284C7]"
          >
            Our Team
          </Link>
          <Link
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#0284C7]"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#0284C7]"
          >
            Contact Us
          </Link>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={telHref}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-[#0284C7]" />
              <span>Call {phone}</span>
            </a>
            <Link
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0284C7] text-white text-xs font-bold shadow-md shadow-sky-500/20"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
