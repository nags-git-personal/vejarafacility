import Link from "next/link";
import {
  INITIAL_SERVICES,
  INITIAL_TESTIMONIALS,
  INITIAL_FAQS,
  INDUSTRY_SECTORS,
} from "@/lib/initialData";
import { ManpowerCalculator } from "@/components/ManpowerCalculator";
import { Logo } from "@/components/Logo";
import {
  PackageCheck,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Warehouse,
  Truck,
  Sparkles,
  PhoneCall,
  Star,
  FileCheck2,
  MapPin,
  ChevronRight,
  TrendingUp,
  Headphones,
  Check,
} from "lucide-react";

// Map service slug to real generated images
const SERVICE_IMAGE_MAP: Record<string, string> = {
  "warehouse-helper-picker-packer": "/images/picker_packer.jpg",
  "forklift-operator-material-handling": "/images/forklift_operator.jpg",
  "inventory-controller-sorting": "/images/facility_team.jpg",
  "loading-unloading-crew": "/images/hero_warehouse.jpg",
  "commercial-facility-cleaning": "/images/facility_team.jpg",
  "seasonal-peak-warehouse-scaling": "/images/hero_warehouse.jpg",
};

export default function HomePage() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+971 4 388 5003";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "97143885003";

  return (
    <div className="space-y-24 pb-20">
      {/* ── HERO SECTION WITH DUAL SCREEN SHOWCASE & INSTANT CONTACT ── */}
      <section className="relative pt-8 sm:pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow Ambient Filter */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & Urgent Contact Icons */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-amber-400 mb-6 shadow-sm">
                <img src="/images/logo-icon.svg" alt="Vejara" className="w-4 h-4 rounded shrink-0" />
                <span>UAE’S #1 ON-DEMAND WAREHOUSE & LOGISTICS MANPOWER</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Vetted Warehouse Helpers, Picker-Packers & Crew in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E88030] to-[#FAB028]">
                  24 to 48 Hours
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                Empower your warehouse fulfillment across Dubai, Abu Dhabi, and UAE. 100% legal MOHRE visas, WPS compliance, and zero recruitment overhead for 3PLs and logistics operators.
              </p>

              {/* ── HERO INSTANT CONTACT BAR (WHATSAPP, CALL, QUOTE) ── */}
              <div className="mt-8 p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl flex flex-wrap sm:flex-nowrap items-center gap-2">
                {/* 1. WhatsApp Instant */}
                <a
                  href={`https://wa.me/${whatsapp}?text=Hello%20Vejara%20Facility,%20I%20need%20urgent%20manpower%20assistance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[150px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.827 2.791.827 3.182 0 5.768-2.587 5.768-5.767.001-3.18-2.585-5.782-5.768-5.782zm0 10.435c-.886 0-1.688-.261-2.434-.694l-.174-.103-1.81.475.483-1.764-.113-.18c-.477-.759-.729-1.574-.728-2.433.001-2.571 2.093-4.663 4.666-4.663 2.573 0 4.665 2.092 4.665 4.664s-2.092 4.698-4.666 4.698zm6.549-11.879c-1.751-1.751-4.079-2.716-6.551-2.716-5.105 0-9.256 4.15-9.258 9.257 0 1.632.426 3.224 1.236 4.629l-1.314 4.799 4.912-1.288c1.353.738 2.875 1.127 4.424 1.127 5.106 0 9.258-4.151 9.259-9.258 0-2.473-.964-4.799-2.708-6.55z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                {/* 2. Urgent Phone Call */}
                <a
                  href={`tel:${phone}`}
                  className="flex-1 min-w-[150px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Call {phone}</span>
                </a>

                {/* 3. Quick Quote Form */}
                <Link
                  href="#inquiry"
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl bg-gradient-to-r from-[#E88030] to-[#FAB028] text-slate-950 font-bold text-xs shadow-md transition hover:brightness-110"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>100% MOHRE</strong> legal visa & WPS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>24-48 Hours</strong> deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Trained</strong> in RF scanners</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase with Real Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/80 group">
                <img
                  src="/images/hero_warehouse.jpg"
                  alt="Modern UAE logistics fulfillment warehouse in Dubai"
                  className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080F1A] via-transparent to-black/20" />

                {/* Floating Badge 1: MOHRE & Active Manpower */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">500+ Active Personnel</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Dubai • Abu Dhabi • Sharjah</div>
                  </div>
                </div>

                {/* Floating Badge 2: Rapid Response Guarantee */}
                <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Rapid 24-48h Mobilization</div>
                    <div className="text-[10px] text-slate-300">Guaranteed Shift Replacement</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── KEY PERFORMANCE METRICS BAR ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#0D1829] border border-slate-800 shadow-xl">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">500+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Active Manpower Deployed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">24h</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Urgent Shift Replacement</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">99.4%</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Attendance & Punctuality</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">0%</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Visa & Recruitment Liability</div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE MANPOWER CALCULATOR SECTION ── */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <ManpowerCalculator />
      </section>

      {/* ── CORE SERVICES SECTION WITH REAL PHOTOGRAPHY ── */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E88030] mb-2">Our Core Solutions</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Specialized Logistics & Warehouse Manpower</h2>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            Supplying dedicated, vetted, and safety-trained teams tailored to the operational pace of modern distribution centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_SERVICES.map((service) => {
            const imagePath = SERVICE_IMAGE_MAP[service.slug] || "/images/picker_packer.jpg";
            return (
              <div
                key={service.slug}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:shadow-2xl hover:shadow-slate-950"
              >
                {/* Service Card Photography */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                  <img
                    src={imagePath}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/20" />
                  
                  <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-amber-400 border border-slate-700 shadow">
                    {service.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">
                      Mobilization: <strong className="text-amber-400">{service.deploymentTime}</strong>
                    </span>
                    <a
                      href={`https://wa.me/${whatsapp}?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-white group-hover:text-amber-400 flex items-center gap-1 transition"
                    >
                      Book on WhatsApp <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PHOTO FEATURE: OUR DEPLOYED TEAMS IN DUBAI & UAE ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0D1829] to-[#050A12] border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Field Excellence</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Safety-Certified Personnel Ready For Day 1 High Productivity
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every team member deployed by Vejara Facility Services undergoes safety induction, barcode scanner operation drills, and UAE warehouse health protocols before stepping onto your distribution floor.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="font-bold text-white text-sm">Full PPE Included</div>
                  <div className="text-xs text-slate-400 mt-1">Steel-toe boots, hi-vis vests & safety gear provided.</div>
                </div>
                <div className="grid-cols-1 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="font-bold text-white text-sm">Bilingual Supervisors</div>
                  <div className="text-xs text-slate-400 mt-1">English, Arabic & Hindi speaking leads for smooth ops.</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`tel:${phone}`}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E88030] to-[#FAB028] text-slate-950 font-bold text-xs shadow-md transition hover:brightness-110 flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Operations Manager</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <img
                  src="/images/facility_team.jpg"
                  alt="Vejara Facility Services workforce deployment team"
                  className="w-full h-80 sm:h-96 object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="bg-[#050A12] py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Sectors & Facilities</div>
            <h2 className="text-3xl font-black text-white">Engineered For Your Industry Pace</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRY_SECTORS.map((sector, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-amber-400 mb-3">
                  <Warehouse className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{sector.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{sector.desc}</p>
                <div className="text-[11px] font-medium text-amber-400/90">{sector.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="why-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#E88030] mb-2">The Vejara Advantage</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Eliminate Manpower Bottlenecks Without Administrative Headaches
            </h2>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              We assume the entire legal, visa, accommodation, medical insurance, and transportation responsibility. You simply set the shift schedule, and our vetted manpower delivers.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-white">100% Legal & MOHRE Compliance</h3>
                  <p className="text-xs text-slate-400 mt-1">All employees hold valid UAE employment visas, Emirates IDs, and comply with Wage Protection System (WPS).</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <Users className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-white">Dedicated On-Site Team Supervisors</h3>
                  <p className="text-xs text-slate-400 mt-1">For teams over 10 staff, we deploy bilingual supervisors to ensure attendance, safety compliance, and KPI targets.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <TrendingUp className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-white">Instant Peak-Season Scalability</h3>
                  <p className="text-xs text-slate-400 mt-1">Instantly ramp from 5 to 50+ staff during Ramadan, White Friday, and high-volume order surges with zero offboarding penalties.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="coverage" className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0D1829] border border-slate-800 relative shadow-2xl scroll-mt-24">
            <h3 className="text-xl font-bold text-white mb-6">UAE Strategic Coverage Zones</h3>
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <div className="font-semibold text-amber-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Dubai Logistics Corridor
                </div>
                <p className="text-xs text-slate-300 mt-1">JAFZA, Dubai South (DWC), Al Quoz Industrial Area, Ras Al Khor, National Industries Park (NIP).</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <div className="font-semibold text-amber-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Abu Dhabi Industrial Zones
                </div>
                <p className="text-xs text-slate-300 mt-1">Mussafah Industrial City, ICAD 1-3, KIZAD, Khalifa Port, and Al Ain logistics centers.</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <div className="font-semibold text-amber-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Sharjah & Northern Emirates
                </div>
                <p className="text-xs text-slate-300 mt-1">SAIF Zone, Hamriyah Free Zone, Sharjah Industrial Areas 1-18, and Ajman.</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 text-center">
              <span className="text-xs text-slate-400">Need immediate mobilization?</span>
              <a
                href={`https://wa.me/${whatsapp}?text=URGENT:%20Need%20workforce%20in%20UAE`}
                className="mt-2 block w-full py-3 rounded-lg bg-[#25D366] text-slate-950 font-bold text-xs hover:brightness-110 transition shadow-lg shadow-emerald-500/20"
              >
                Connect on WhatsApp Dispatch (+971 4 388 5003)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Verified Feedback</div>
          <h2 className="text-3xl font-black text-white">Trusted by Leading UAE Supply Chain Operators</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="text-xs font-bold text-white">{t.clientName}</div>
                <div className="text-[11px] text-amber-400/90">{t.designation} — {t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INQUIRY QUOTE FORM ── */}
      <section id="inquiry" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0A1220] border border-slate-800 shadow-2xl">
          <div className="text-center mb-8">
            <div className="mb-3"><Logo size="sm" asLink={false} /></div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Fast Turnaround Quote</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Request Manpower Deployment</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Fill in your staff requirements below. Our commercial desk will contact you with rate cards and candidate availability within 2 business hours.
            </p>
          </div>

          <form
            onSubmit={undefined}
            action="#"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
          >
            <div>
              <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Company / Organization *</label>
              <input
                type="text"
                required
                placeholder="e.g. Apex 3PL Logistics LLC"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Corporate Email *</label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">UAE Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+971 50 000 0000"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Service Type *</label>
              <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-400">
                <option>Warehouse Helpers / General Labor</option>
                <option>Picker & Packer Teams</option>
                <option>Inventory Controllers & Sorters</option>
                <option>Forklift & Reach Truck Operators</option>
                <option>Facility Cleaning & Janitorial Crew</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Number of Staff Needed</label>
              <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-400">
                <option>1 - 5 staff</option>
                <option>6 - 15 staff</option>
                <option>16 - 30 staff</option>
                <option>30+ workforce (Large project)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-slate-300 font-medium mb-1">Facility Location & Special Instructions</label>
              <textarea
                rows={3}
                placeholder="Location (e.g., Al Quoz, Mussafah), shift timing, and start date..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              ></textarea>
            </div>

            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#E88030] to-[#FAB028] text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:brightness-110 transition"
              >
                Submit Manpower Request (2hr Response)
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Answers & Information</div>
          <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {INITIAL_FAQS.map((faq, i) => (
            <div key={i} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="text-amber-400 text-xs font-mono">Q{i + 1}</span>
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
