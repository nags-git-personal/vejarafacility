"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, X, Sparkles, MapPin } from "lucide-react";

export function FloatingContactDock() {
  const [isOpen, setIsOpen] = useState(true);
  const phone = "+971 4 388 5003";
  const telHref = "tel:+97143885003";
  const whatsapp = "97143885003";
  const mapsUrl = "https://maps.google.com/?q=OFF404A%2C%20Mohd%20Abna%20Rashid%20Mana%20AI%20Maktoum%2CMM%20Towers%20Al%20Maktoum%20Rd%20-%20Riggat%20Al%20Buteen%20-%20Dubai%20-%20United%20Arab%20Emirates";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Expanded Quick Contact Menu */}
      {isOpen && (
        <div className="flex flex-col items-end gap-2.5 animate-fade-up">
          {/* WhatsApp Direct Chat */}
          <a
            href={`https://wa.me/${whatsapp}?text=Hello%20Vejara%20Facility,%20I%20need%20manpower%20assistance%20for%20our%20warehouse/facility.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#1F2C34] hover:bg-[#25D366] text-white hover:text-slate-950 px-4 py-2.5 rounded-full shadow-2xl border border-slate-700 hover:border-[#25D366] transition-all duration-300 transform hover:-translate-x-1"
          >
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-emerald-400 group-hover:text-slate-900">
                Online • Instant Reply
              </span>
              <span className="text-xs font-bold">WhatsApp Dispatch</span>
            </div>
            <div className="relative w-9 h-9 rounded-full bg-[#25D366] text-slate-950 flex items-center justify-center font-bold shadow-md">
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.827 2.791.827 3.182 0 5.768-2.587 5.768-5.767.001-3.18-2.585-5.782-5.768-5.782zm0 10.435c-.886 0-1.688-.261-2.434-.694l-.174-.103-1.81.475.483-1.764-.113-.18c-.477-.759-.729-1.574-.728-2.433.001-2.571 2.093-4.663 4.666-4.663 2.573 0 4.665 2.092 4.665 4.664s-2.092 4.698-4.666 4.698zm6.549-11.879c-1.751-1.751-4.079-2.716-6.551-2.716-5.105 0-9.256 4.15-9.258 9.257 0 1.632.426 3.224 1.236 4.629l-1.314 4.799 4.912-1.288c1.353.738 2.875 1.127 4.424 1.127 5.106 0 9.258-4.151 9.259-9.258 0-2.473-.964-4.799-2.708-6.55z" />
              </svg>
            </div>
          </a>

          {/* Direct Phone Call */}
          <a
            href={telHref}
            className="group flex items-center gap-3 bg-slate-900/95 hover:bg-[#E88030] text-white hover:text-slate-950 px-4 py-2.5 rounded-full shadow-2xl border border-slate-700 hover:border-[#E88030] transition-all duration-300 transform hover:-translate-x-1"
          >
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-amber-400 group-hover:text-slate-900">
                Direct Line
              </span>
              <span className="text-xs font-bold">{phone}</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#E88030] text-slate-950 flex items-center justify-center font-bold shadow-md">
              <Phone className="w-4 h-4 fill-current" />
            </div>
          </a>

          {/* Google Maps Location */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-slate-900/95 hover:bg-red-600 text-white px-4 py-2.5 rounded-full shadow-2xl border border-slate-700 hover:border-red-500 transition-all duration-300 transform hover:-translate-x-1"
          >
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-red-400 group-hover:text-white">
                Deira, Dubai
              </span>
              <span className="text-xs font-bold">Open on Google Maps</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold shadow-md">
              <MapPin className="w-4 h-4" />
            </div>
          </a>

          {/* Quick Quote Form Trigger */}
          <Link
            href="#inquiry"
            className="group flex items-center gap-3 bg-slate-900/95 hover:bg-blue-600 text-white px-4 py-2.5 rounded-full shadow-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-x-1"
          >
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-400 group-hover:text-white">
                Online Quote
              </span>
              <span className="text-xs font-bold">Request Staff Quote</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
              <MessageSquare className="w-4 h-4" />
            </div>
          </Link>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Quick Contact"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#E88030] via-amber-500 to-[#25D366] text-slate-950 font-black shadow-2xl shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.5]" />
        ) : (
          <div className="relative">
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
            </span>
            <Sparkles className="w-6 h-6 fill-slate-950" />
          </div>
        )}
      </button>
    </div>
  );
}
