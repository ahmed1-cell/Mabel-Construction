import mabelLogo from "@assets/4_1758863429202.jpg";

interface Logo3DProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export default function Logo3D({ size = "md", animated = true }: Logo3DProps) {
  const sizeClasses = {
    sm: "h-8 w-24",
    md: "h-12 w-36", 
    lg: "h-16 w-48"
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${animated ? 'logo-3d' : ''}`}>
      <img 
        src={mabelLogo} 
        alt="Mabel Construction" 
        className="h-full w-full object-contain"
        data-testid="logo-mabel"
      />
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <style>{`
        .logo-3d {
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }
        .logo-3d:hover {
          transform: perspective(1000px) rotateY(10deg) rotateX(5deg) scale(1.05);
        }
      `}</style>
    </div>
  );
}