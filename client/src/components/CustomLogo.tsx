interface CustomLogoProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  variant?: "light" | "dark";
}

export default function CustomLogo({ 
  size = "md", 
  animated = true, 
  variant = "dark" 
}: CustomLogoProps) {
  const sizeClasses = {
    sm: "h-8 w-28",
    md: "h-12 w-40", 
    lg: "h-16 w-52"
  };

  const dimensions = {
    sm: { width: 112, height: 32 },
    md: { width: 160, height: 48 },
    lg: { width: 208, height: 64 }
  };

  const currentDimensions = dimensions[size];

  // Color variants for light/dark backgrounds
  const colors = {
    light: {
      primary: "#8B5CF6", // Purple
      secondary: "#8B5CF6", // Dark gray/black
      accent: "#A855F7" // Lighter purple
    },
    dark: {
      primary: "#A855F7", // Lighter purple for dark backgrounds
      secondary: "#F9FAFB", // Light gray/white
      accent: "#8B5CF6" // Purple
    }
  };

  const currentColors = colors[variant];

  return (
    <div className={`relative ${sizeClasses[size]} ${animated ? 'custom-logo-3d' : ''}`}>
      <svg
        width={currentDimensions.width}
        height={currentDimensions.height}
        viewBox="0 0 160 48"
        className="w-full h-full"
        data-testid="custom-logo-mabel"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={currentColors.primary} />
            <stop offset="100%" stopColor={currentColors.accent} />
          </linearGradient>
          <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={currentColors.secondary} />
            <stop offset="100%" stopColor={currentColors.secondary} stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Construction Symbol - Modern Building Blocks */}
        <g transform="translate(2, 6)">
          {/* Main Building Block */}
          <path
            d="M0 20 L8 12 L16 20 L16 32 L0 32 Z"
            fill="url(#purpleGradient)"
            className={animated ? "animate-pulse" : ""}
          />
          
          {/* Second Building Block */}
          <path
            d="M12 16 L20 8 L28 16 L28 32 L12 32 Z"
            fill={currentColors.secondary}
            opacity="0.9"
          />
          
          {/* Third Building Block */}
          <path
            d="M24 20 L32 12 L40 20 L40 32 L24 32 Z"
            fill="url(#purpleGradient)"
            className={animated ? "animate-pulse" : ""}
            style={{ animationDelay: "0.5s" }}
          />
          
          {/* Modern geometric accent lines */}
          <line
            x1="4" y1="24"
            x2="12" y2="24"
            stroke={currentColors.accent}
            strokeWidth="1"
            opacity="0.7"
          />
          <line
            x1="28" y1="24"
            x2="36" y2="24"
            stroke={currentColors.accent}
            strokeWidth="1"
            opacity="0.7"
          />
        </g>

        {/* Company Name - MABEL */}
        <text
          x="50"
          y="20"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="14"
          fontWeight="900"
          fill={currentColors.primary}
          letterSpacing="1px"
        >
          MABEL
        </text>

        {/* Subtitle - CONSTRUCTION */}
        <text
          x="50"
          y="32"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="7"
          fontWeight="700"
          fill="#8B5CF6"
          letterSpacing="2px"
          opacity="0.8"
        >
          CONSTRUCTION
        </text>

        {/* Modern accent line under MABEL */}
        <line
          x1="50"
          y1="23"
          x2="110"
          y2="23"
          stroke={currentColors.accent}
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>

      {/* Animated overlay effect */}
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}

      <style>{`
        .custom-logo-3d {
          transform-style: preserve-3d;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .custom-logo-3d:hover {
          transform: perspective(1000px) rotateY(-8deg) rotateX(3deg) scale(1.05);
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}