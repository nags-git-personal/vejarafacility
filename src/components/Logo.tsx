import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
  showSubtitle?: boolean;
  className?: string;
  asLink?: boolean;
}

export function Logo({
  size = "md",
  theme = "light",
  showSubtitle = true,
  className = "",
  asLink = true,
}: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const titleSizes = {
    sm: "text-lg tracking-tight font-black",
    md: "text-xl sm:text-2xl tracking-tight font-black",
    lg: "text-2xl sm:text-3xl tracking-tight font-black",
  };

  const subtitleSizes = {
    sm: "text-[8px] tracking-wider",
    md: "text-[9px] sm:text-[10px] tracking-widest",
    lg: "text-[10px] sm:text-[11px] tracking-widest",
  };

  const isLight = theme === "light";
  const titleColor = isLight ? "text-[#0B1B33]" : "text-white";
  const subtitleColor = isLight ? "text-[#0284C7]" : "text-slate-300";

  const content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none min-w-0 ${className}`}>
      {/* Vejara Dynamic Blue Swoosh V Emblem */}
      <div className={`${iconSizes[size]} shrink-0 relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="vBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0052CC" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
            <linearGradient id="vDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A2540" />
              <stop offset="100%" stopColor="#0047AB" />
            </linearGradient>
            <linearGradient id="vGlowGrad" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Right angled wing */}
          <path
            d="M52 82 L78 20 C81 14 87 14 91 20 L94 25 C97 31 95 38 90 47 L62 90 C57 96 49 96 45 90 Z"
            fill="url(#vDarkGrad)"
          />

          {/* Left sweeping curved swoosh */}
          <path
            d="M6 32 C12 20 25 14 42 22 C34 26 27 34 25 43 C22 55 28 69 41 80 L50 86 C46 91 40 92 34 89 C18 80 8 62 8 46 C8 41 7 36 6 32 Z"
            fill="url(#vBlueGrad)"
          />

          {/* Main dynamic bold V wing */}
          <path
            d="M18 22 C32 18 46 22 50 32 L34 76 C32 81 26 82 22 78 L12 62 C8 55 9 44 14 36 Z"
            fill="url(#vGlowGrad)"
            opacity="0.9"
          />

          {/* Central crest curve */}
          <path
            d="M32 26 C44 26 53 34 50 48 L44 68 C42 72 38 72 36 68 L26 44 C24 37 27 28 32 26 Z"
            fill="#FFFFFF"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col min-w-0">
        <span className={`font-black ${titleColor} leading-none tracking-tight ${titleSizes[size]}`}>
          VEJARA
        </span>
        {showSubtitle && (
          <span
            className={`font-bold uppercase tracking-widest mt-1 leading-none ${subtitleColor} ${subtitleSizes[size]}`}
          >
            FACILITY MANAGEMENT SERVICES
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
