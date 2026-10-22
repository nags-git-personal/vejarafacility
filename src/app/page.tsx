"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  RefreshCw,
  Clock,
  ArrowRight,
  Check,
  Package,
  HardHat,
  Wrench,
  Sparkles,
  Star,
  Handshake,
  Building2,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  X,
  ExternalLink,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  icon: "package" | "hardhat" | "wrench" | "sparkles";
  description: string;
  points: string[];
  fullDetails: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "labour-packing",
    title: "Labour Packing",
    image: "/images/service_labour_packing.jpg",
    icon: "package",
    description:
      "Skilled and reliable labour for packing, labeling, sorting and general warehouse support.",
    points: [
      "Packing & labeling",
      "Sorting & inspection",
      "Warehouse support",
    ],
    fullDetails:
      "Our Labour Packing workforce is vetted, trained in RF scanners, and prepared for high-volume fulfillment across 3PL warehouses, e-commerce distribution centers, and packaging facilities in Dubai and UAE. 100% MOHRE & WPS compliant.",
  },
  {
    id: "construction-helper",
    title: "Construction Helper",
    image: "/images/service_construction_helper.jpg",
    icon: "hardhat",
    description:
      "Trained and experienced helpers for construction and site support work.",
    points: [
      "Site labour",
      "Material handling",
      "General construction support",
    ],
    fullDetails:
      "We provide robust, safety-inducted construction helpers for rebar handling, site cleanup, concrete staging, and scaffolding support. All staff hold valid UAE civil defense and construction safety gear (PPE).",
  },
  {
    id: "maintenance-services",
    title: "Maintenance Services",
    image: "/images/service_maintenance.jpg",
    icon: "wrench",
    description:
      "Professional maintenance support to keep your facilities in top condition.",
    points: [
      "Electrical",
      "Plumbing",
      "General maintenance",
    ],
    fullDetails:
      "Preventive and reactive maintenance technicians for commercial towers, warehouses, and industrial estates. Experienced with electrical switchboards, MEP installations, pump rooms, and routine building upkeep.",
  },
  {
    id: "cleaning-services",
    title: "Cleaning Services",
    image: "/images/service_cleaning_commercial.jpg",
    icon: "sparkles",
    description:
      "Advanced cleaning solutions for a clean, healthy and safe environment.",
    points: [
      "Office & commercial cleaning",
      "Building cleaning",
      "Deep cleaning",
    ],
    fullDetails:
      "Equipped with modern ride-on floor scrubbers, industrial polishers, and Dubai Municipality-approved sanitizing agents. Delivering spotless commercial hallways, executive offices, and heavy-duty industrial floors.",
  },
];

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-packing",
    title: "Labour Packing & Dispatch",
    category: "Warehouse Logistics",
    image: "/images/gallery_packing_line.jpg",
    description: "High-throughput packing teams sorting, scanning, and packaging cartons onto automated conveyor lines in Dubai logistics hubs.",
  },
  {
    id: "gallery-construction",
    title: "Construction Helper Support",
    category: "Civil & Construction",
    image: "/images/gallery_construction_site.jpg",
    description: "Safety-equipped construction helpers and rebar crews assembling skyscraper structural framework on prime UAE sites.",
  },
  {
    id: "gallery-maintenance",
    title: "Plant Room & MEP Maintenance",
    category: "Technical Services",
    image: "/images/gallery_mep_maintenance.jpg",
    description: "Certified facility technicians performing preventive maintenance and diagnostics on commercial HVAC chillers and industrial pumps.",
  },
  {
    id: "gallery-cleaning",
    title: "Commercial & Atrium Cleaning",
    category: "Janitorial Solutions",
    image: "/images/gallery_commercial_cleaning.jpg",
    description: "Professional cleaning teams sanitizing high-traffic corporate atriums, glass facades, and polished marble entrance lobbies.",
  },
];

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Form submission state
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    service: "Labour Packing",
    contact: "",
    message: "",
  });

  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+971 4 388 5003";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "97143885003";

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          service: formData.service,
          phone: formData.contact,
          email: formData.contact.includes("@") ? formData.contact : "",
          message: formData.message,
        }),
      });
      if (res.ok) {
        setFormSubmitted(true);
      } else {
        alert("Thank you! Please also message us on WhatsApp for fastest deployment.");
        setFormSubmitted(true);
      }
    } catch {
      setFormSubmitted(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  const renderServiceIcon = (type: ServiceItem["icon"]) => {
    switch (type) {
      case "package":
        return <Package className="w-5 h-5 text-white" />;
      case "hardhat":
        return <HardHat className="w-5 h-5 text-white" />;
      case "wrench":
        return <Wrench className="w-5 h-5 text-white" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (DUBAI SKYLINE + FACILITY MANAGEMENT HEADLINE)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#071326] overflow-hidden">
        {/* Background Dubai Skyline Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_dubai_skyline.jpg"
            alt="Vejara Facility Management Services Dubai Skyline"
            className="w-full h-full object-cover object-center"
          />
          {/* Left Dark Gradient Vignette for Razor-Sharp Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/85 sm:via-[#071326]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-[#071326]/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 max-w-2xl">
              
              {/* Kicker */}
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#38BDF8] mb-4 flex items-center gap-2">
                <span>PROFESSIONAL</span>
                <span className="text-slate-400">•</span>
                <span>RELIABLE</span>
                <span className="text-slate-400">•</span>
                <span>EFFICIENT</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Your Trusted Partner in{" "}
                <span className="text-[#38BDF8] block sm:inline">
                  Facility Management Services
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-xl">
                We provide skilled manpower and professional support services to keep your business running smoothly.
              </p>

              {/* 4 Feature Badges (Horizontal Row) */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                
                {/* 1. Skilled Workforce */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-sky-400/60 bg-sky-500/10 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-sky-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-100 leading-tight">
                    Skilled<br />Workforce
                  </span>
                </div>

                {/* 2. Safe & Reliable */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-sky-400/60 bg-sky-500/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-100 leading-tight">
                    Safe & Reliable<br />Services
                  </span>
                </div>

                {/* 3. Flexible Solutions */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-sky-400/60 bg-sky-500/10 flex items-center justify-center shrink-0">
                    <RefreshCw className="w-4 h-4 text-sky-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-100 leading-tight">
                    Flexible<br />Solutions
                  </span>
                </div>

                {/* 4. 24/7 Support */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-sky-400/60 bg-sky-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-sky-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-100 leading-tight">
                    24/7<br />Support
                  </span>
                </div>

              </div>

              {/* Primary Call to Action Button */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#quote"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-bold shadow-xl shadow-sky-500/30 transition transform hover:-translate-y-0.5"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${whatsapp}?text=Hello%20Vejara%20Facility,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900/80 hover:bg-[#25D366] text-white hover:text-slate-950 border border-slate-700 hover:border-[#25D366] text-sm font-semibold transition"
                >
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>

            {/* Right Side: Script Callout over the Skyline */}
            <div className="lg:col-span-4 flex justify-end items-end relative lg:h-full pt-6 lg:pt-0">
              <div className="bg-slate-950/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10 lg:translate-y-12">
                <p className="font-script text-white text-3xl sm:text-4xl lg:text-5xl leading-tight -rotate-2 select-none drop-shadow-lg">
                  Better People<br />
                  Better Spaces<br />
                  A Stronger Tomorrow
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. OUR SERVICES SECTION (4 COMPLETE FACILITY SOLUTION CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-2">
              <span className="w-8 h-px bg-[#0284C7]" />
              <span>OUR SERVICES</span>
              <span className="w-8 h-px bg-[#0284C7]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] tracking-tight">
              Complete Facility Management Solutions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              We offer a wide range of professional services to meet your business needs.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Service Image with Floating Blue Circular Badge */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Blue Circle Badge */}
                    <div className="absolute -bottom-5 left-5 w-12 h-12 rounded-full bg-[#0284C7] border-4 border-white shadow-md flex items-center justify-center z-10">
                      {renderServiceIcon(service.icon)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-8 px-5 pb-4">
                    <h3 className="text-lg font-bold text-[#0B1B33] group-hover:text-[#0284C7] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[48px]">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                      {service.points.map((pt, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-5 pb-5 pt-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SPLIT SECTION: ABOUT VEJARA + WHY CHOOSE US
          ───────────────────────────────────────────────────────────── */}
      <section id="about" className="overflow-hidden border-y border-slate-200 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          
          {/* Left Block: ABOUT VEJARA (Dark Navy with Skyline) */}
          <div className="lg:col-span-5 bg-[#0B1B33] relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-white overflow-hidden">
            {/* Skyline Silhouette Backdrop */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero_dubai_skyline.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33] via-[#0B1B33]/90 to-[#0B1B33]" />

            <div className="relative z-10 max-w-md">
              <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 block">
                ABOUT VEJARA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Providing Skilled Support for a Better Tomorrow
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Vejara Facility Management Services is a trusted provider of manpower and support services in UAE. We are committed to delivering quality, reliability and professionalism in every project we handle.
              </p>

              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-[#0B1B33] text-xs font-semibold transition"
                >
                  <span>Learn More About Us</span>
                  <span className="text-sm font-bold">+</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Block: WHY CHOOSE US (Crisp Light Background) */}
          <div id="why-us" className="lg:col-span-7 bg-[#F8FAFC] p-8 sm:p-12 lg:p-16 flex flex-col justify-center scroll-mt-20">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-2 block">
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1B33] tracking-tight">
                Your Success is Our Priority
              </h2>

              {/* 2x2 Grid of Solid Navy Circles */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                
                {/* 1. Skilled & Trained Workforce */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0B1B33] flex items-center justify-center shrink-0 shadow-md">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1B33]">
                      Skilled & Trained Workforce
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Professional and experienced staff for every service.
                    </p>
                  </div>
                </div>

                {/* 2. Reliable & On-Time */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0B1B33] flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1B33]">
                      Reliable & On-Time
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      We deliver as promised, when you need us.
                    </p>
                  </div>
                </div>

                {/* 3. Quality Service */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0B1B33] flex items-center justify-center shrink-0 shadow-md">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1B33]">
                      Quality Service
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Committed to high standards and customer satisfaction.
                    </p>
                  </div>
                </div>

                {/* 4. Flexible Solutions */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0B1B33] flex items-center justify-center shrink-0 shadow-md">
                    <Handshake className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1B33]">
                      Flexible Solutions
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Customized services to fit your business needs.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. KEY METRICS / STATS BAR (FULL WIDTH DARK NAVY)
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#071529] py-10 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            
            {/* Metric 1 */}
            <div className="flex items-center gap-4 px-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <HardHat className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Skilled Workers</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">100+</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-4 px-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Projects Completed</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">200+</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-4 px-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <Handshake className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Happy Clients</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">100+</div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-4 px-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Support 24/7</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">Always</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. OUR WORK IN ACTION / GALLERY
          ───────────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-2 block">
                OUR WORK IN ACTION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1B33]">
                See Our Services in Action
              </h2>
            </div>
            
            <button
              onClick={() => setGalleryModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white text-xs font-bold transition shadow-sm"
            >
              <span>View Gallery</span>
            </button>
          </div>

          {/* 4 Widescreen Image Cards with Different Action Photography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveGalleryIndex(idx);
                  setGalleryModalOpen(true);
                }}
                className="relative h-60 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-slate-900 border border-slate-100 hover:border-sky-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />

                {/* Bottom Title Bar with Category */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 block mb-0.5">
                      {item.category}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors leading-tight block">
                      {item.title}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. GET IN TOUCH / REQUEST A FREE QUOTE (DARK NAVY WITH SKYLINE)
          ───────────────────────────────────────────────────────────── */}
      <section id="quote" className="py-20 bg-[#071529] text-white relative overflow-hidden scroll-mt-20">
        
        {/* Subtle Skyline Backdrop Silhouette on Left */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-left"
          style={{ backgroundImage: "url('/images/hero_dubai_skyline.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071529] via-[#071529]/95 to-[#071529]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline & Details */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] block">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Request a Free Quote
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md">
                Tell us about your requirements and we will get back to you as soon as possible.
              </p>

              {/* Contact Desk Highlights */}
              <div className="pt-6 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@vejarafacility.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>
            </div>

            {/* Right Quote Submission Form */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#0B1E3B]/90 border border-sky-500/40 text-center space-y-4 animate-fade-in shadow-2xl">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Quote Request Received!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name || "Client"}</strong>. Our facility operations desk will contact you within 2 hours.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${whatsapp}?text=Hi%20Vejara%20Facility,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.service)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-slate-950 font-bold text-xs hover:brightness-110 transition shadow-md"
                    >
                      <span>Fast-Track on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-4 bg-[#0A1A33]/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-2xl"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Your Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-[#0B1E3B]/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-400 transition"
                      />
                    </div>

                    {/* Select Service */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Select Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#0B1E3B]/80 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400 transition"
                      >
                        <option value="Labour Packing">Labour Packing</option>
                        <option value="Construction Helper">Construction Helper</option>
                        <option value="Maintenance Services">Maintenance Services</option>
                        <option value="Cleaning Services">Cleaning Services</option>
                        <option value="General Warehouse Support">General Warehouse Support</option>
                        <option value="Integrated Facility Management">Integrated Facility Management</option>
                      </select>
                    </div>
                  </div>

                  {/* Your Email / Phone */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Email or Phone Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. info@company.com or +971 50 123 4567"
                      className="w-full px-4 py-3 rounded-lg bg-[#0B1E3B]/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-400 transition"
                    />
                  </div>

                  {/* Your Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your facility location, required headcount, and shift details..."
                      className="w-full px-4 py-3 rounded-lg bg-[#0B1E3B]/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-400 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-3.5 px-6 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs shadow-lg shadow-sky-500/25 transition flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {formSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. MODAL: SERVICE DETAIL POPUP
          ───────────────────────────────────────────────────────────── */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-scale-up">
            
            {/* Modal Image Header */}
            <div className="relative h-48 w-full bg-slate-900">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0284C7] mb-1">
                <span>Vejara Facility Solutions</span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1B33]">
                {selectedService.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedService.fullDetails}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-[#0B1B33] uppercase mb-2">Scope Highlights:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedService.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={`https://wa.me/${whatsapp}?text=Hello%20Vejara%20Facility,%20I%20am%20interested%20in%20${encodeURIComponent(selectedService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold text-center transition shadow-md"
                >
                  Request Service Deployment
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold transition"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          8. MODAL: GALLERY LIGHTBOX
          ───────────────────────────────────────────────────────────── */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <button
              onClick={() => setGalleryModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[420px] sm:h-[500px] w-full bg-black">
              <img
                src={GALLERY_ITEMS[activeGalleryIndex].image}
                alt={GALLERY_ITEMS[activeGalleryIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  {GALLERY_ITEMS[activeGalleryIndex].category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {GALLERY_ITEMS[activeGalleryIndex].title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-lg">
                  {GALLERY_ITEMS[activeGalleryIndex].description}
                </p>
              </div>

              {/* Gallery Thumbnails Selector */}
              <div className="flex items-center gap-2 shrink-0">
                {GALLERY_ITEMS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`w-12 h-9 rounded-lg overflow-hidden border-2 transition ${
                      activeGalleryIndex === idx
                        ? "border-sky-400 scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
