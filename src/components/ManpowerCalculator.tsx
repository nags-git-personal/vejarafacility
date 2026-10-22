"use client";

import { useState } from "react";
import { Users, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const ROLES = [
  { id: "picker-packer", name: "Picker & Packers", deployment: "24-48h", icon: "📦" },
  { id: "helpers", name: "Warehouse Helpers", deployment: "24h", icon: "👷" },
  { id: "forklift", name: "Forklift Operators", deployment: "48h", icon: "🚜" },
  { id: "inventory", name: "Inventory Sorters", deployment: "24-48h", icon: "📊" },
];

export function ManpowerCalculator() {
  const [selectedRole, setSelectedRole] = useState(ROLES[0].name);
  const [headcount, setHeadcount] = useState(5);
  const [shiftDuration, setShiftDuration] = useState("Monthly Contract");
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "97143885003";

  const message = encodeURIComponent(
    `Hello Vejara Facility, I need a quotation for ${headcount} ${selectedRole} on a ${shiftDuration} basis. Please confirm availability and rates.`
  );

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0D1829] via-[#111D33] to-[#0A1220] border border-slate-700/80 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Interactive Staffing Estimator
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Calculate & Mobilize Your UAE Team
          </h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          500+ Manpower Ready
        </div>
      </div>

      {/* Role Selection */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
          1. Select Role Needed
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {ROLES.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setSelectedRole(r.name)}
              className={`p-3 rounded-xl border text-left transition flex flex-col justify-between gap-2 ${
                selectedRole === r.name
                  ? "bg-amber-500/15 border-amber-500 text-white shadow-md shadow-amber-500/10"
                  : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
              }`}
            >
              <span className="text-xl">{r.icon}</span>
              <span className="text-xs font-bold leading-tight">{r.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Headcount Slider & Number */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            2. Number of Staff Required
          </label>
          <span className="text-lg font-black text-amber-400">
            {headcount} {headcount === 50 ? "50+ Staff" : "Staff"}
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="50"
          value={headcount}
          onChange={(e) => setHeadcount(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#E88030]"
        />
        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
          <span>1 Helper</span>
          <span>10 Helpers</span>
          <span>25 Helpers</span>
          <span>50+ Full Crew</span>
        </div>
      </div>

      {/* Contract Duration */}
      <div className="mb-8">
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
          3. Contract Duration
        </label>
        <div className="grid grid-cols-3 gap-2.5">
          {["Daily / Urgent Shift", "Monthly Contract", "Annual / Permanent"].map((dur) => (
            <button
              key={dur}
              type="button"
              onClick={() => setShiftDuration(dur)}
              className={`py-2 px-3 rounded-lg text-xs font-semibold border transition ${
                shiftDuration === dur
                  ? "bg-white text-slate-950 border-white shadow"
                  : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700"
              }`}
            >
              {dur}
            </button>
          ))}
        </div>
      </div>

      {/* Output Summary & Call to Action */}
      <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Mobilization: <strong className="text-white">24-48 Hours</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span><strong className="text-white">MOHRE & WPS</strong> Included</span>
          </div>
        </div>

        <a
          href={`https://wa.me/${whatsapp}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-emerald-600 hover:brightness-110 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
        >
          <span>Reserve {headcount} Staff on WhatsApp</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

