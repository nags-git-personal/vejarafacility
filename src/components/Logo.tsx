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
    md: "w-10 h-10 rounded-xl",
    lg: "w-12 h-12 rounded-xl",
  };

  const titleSizes = {
    sm: "text-sm sm:text-base tracking-tight",
    md: "text-base sm:text-lg tracking-tight",
    lg: "text-lg sm:text-xl tracking-tight",
  };

  const subtitleSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-[11px]",
  };

  const content = (
    <div className={`flex items-center gap-2.5 select-none min-w-0 ${className}`}>
      {/* Brand Emblem */}
      <div
        className={`${iconSizes[size]} overflow-hidden border border-slate-700/80 shadow-md shadow-black/40 shrink-0 bg-[#080F1A] flex items-center justify-center p-0.5`}
      >
        <img
          src="/images/logo.jpg"
          alt="Vejara Facility Services Emblem"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col min-w-0">
        <span className={`font-black text-white flex items-center gap-1.5 whitespace-nowrap leading-tight ${titleSizes[size]}`}>
          VEJARA <span className="text-[#E88030]">FACILITY</span>
        </span>
        {showSubtitle && (
          <span
            className={`tracking-wider uppercase text-slate-400 font-semibold whitespace-nowrap overflow-hidden text-ellipsis ${subtitleSizes[size]}`}
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
    <Link href="/" className="hover:opacity-95 transition-opacity shrink-0">
      {content}
    </Link>
  );
}
