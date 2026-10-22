import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  className?: string;
  asLink?: boolean;
}

export function Logo({
  size = "md",
  showSubtitle = true,
  className = "",
  asLink = true,
}: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8 rounded-lg",
    md: "w-11 h-11 rounded-xl",
    lg: "w-14 h-14 rounded-2xl",
  };

  const titleSizes = {
    sm: "text-base tracking-tight",
    md: "text-xl tracking-tight",
    lg: "text-2xl sm:text-3xl tracking-tight",
  };

  const subtitleSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  const content = (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Emblem */}
      <div
        className={`${iconSizes[size]} overflow-hidden border border-slate-700/80 shadow-lg shadow-black/40 shrink-0 bg-[#080F1A] flex items-center justify-center p-0.5`}
      >
        <img
          src="/images/logo.jpg"
          alt="Vejara Facility Services Emblem"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <span className={`font-black text-white flex items-center gap-1.5 ${titleSizes[size]}`}>
          VEJARA <span className="text-[#E88030]">FACILITY</span>
        </span>
        {showSubtitle && (
          <span
            className={`tracking-wider uppercase text-slate-400 -mt-1 font-semibold ${subtitleSizes[size]}`}
          >
            Manpower & Logistics Services
          </span>
        )}
      </div>
    </div>
  );

  if (!asLink) {
    return content;
  }

  return (
    <Link href="/" className="hover:opacity-95 transition-opacity">
      {content}
    </Link>
  );
}
