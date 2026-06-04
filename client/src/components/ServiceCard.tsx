import { useState } from "react";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useResponsive from "@/hooks/use-responsive";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index?: number;
}

export default function ServiceCard({ icon: Icon, title, description, features, index = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return (
    <Card 
      className="group hover-elevate active-elevate-2 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
      }`} />
      
      {/* Animated Border Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-primary via-transparent to-accent transition-all duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} style={{ padding: '2px' }}>
        <div className="w-full h-full bg-background rounded-lg" />
      </div>
      
      <CardContent className={`relative ${
        isMobile ? 'p-4' : isTablet ? 'p-6' : 'p-8'
      } text-center z-10`}>
        {/* Enhanced 3D Icon */}
        <div className={`relative ${
          isMobile ? 'mb-6' : isTablet ? 'mb-7' : 'mb-8'
        }`}>
          <div className={`${
            isMobile ? 'w-16 h-16' : isTablet ? 'w-20 h-20' : 'w-24 h-24'
          } mx-auto bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl ${
            isHovered ? 'rotate-12 scale-110 shadow-primary/25' : 'rotate-0 scale-100'
          }`}>
            <Icon className={`${
              isMobile ? 'w-8 h-8' : isTablet ? 'w-10 h-10' : 'w-12 h-12'
            } text-primary-foreground transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`} />
          </div>
          
          {/* Enhanced 3D Shadow Effect */}
          <div className={`absolute inset-0 ${
            isMobile ? 'w-16 h-16' : isTablet ? 'w-20 h-20' : 'w-24 h-24'
          } mx-auto bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl transform transition-all duration-500 -z-10 ${
            isHovered ? 'translate-x-4 translate-y-4 scale-110' : 'translate-x-2 translate-y-2 scale-100'
          }`} />
          
          {/* Floating Particles Effect */}
          <div className={`absolute inset-0 ${
            isMobile ? 'w-16 h-16' : isTablet ? 'w-20 h-20' : 'w-24 h-24'
          } mx-auto transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="particle absolute top-2 right-2 w-1 h-1 bg-primary rounded-full animate-ping" />
            <div className="particle absolute bottom-3 left-3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="particle absolute top-4 left-1 w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Enhanced Content */}
        <h3 className={`${
          isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-xl'
        } font-bold ${
          isMobile ? 'mb-3' : isTablet ? 'mb-4' : 'mb-4'
        } transition-all duration-300 ${
          isHovered ? 'text-primary transform -translate-y-1' : 'text-foreground'
        }`}>
          {title}
        </h3>
        
        <p className={`${
          isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base'
        } text-muted-foreground ${
          isMobile ? 'mb-4' : isTablet ? 'mb-5' : 'mb-6'
        } leading-relaxed transition-all duration-300 ${
          isHovered ? 'text-foreground/80' : ''
        }`}>
          {description}
        </p>

        {/* Enhanced Features with Staggered Animation */}
        <ul className={`${
          isMobile ? 'space-y-2' : isTablet ? 'space-y-2.5' : 'space-y-3'
        } ${
          isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-sm'
        } text-left ${
          isMobile ? 'mb-4' : isTablet ? 'mb-5' : 'mb-6'
        }`}>
          {features.map((feature, featureIndex) => (
            <li 
              key={featureIndex} 
              className={`flex items-center text-muted-foreground transition-all duration-300 ${
                isHovered ? 'transform translate-x-2 text-foreground/80' : ''
              }`}
              style={{ transitionDelay: `${featureIndex * 100}ms` }}
            >
              <div className={`${
                isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'
              } bg-primary rounded-full ${
                isMobile ? 'mr-3' : 'mr-4'
              } flex-shrink-0 transition-all duration-300 ${
                isHovered ? 'scale-125 shadow-lg shadow-primary/50' : 'scale-100'
              }`} />
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Call to Action Button */}

      </CardContent>
      
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl" />
      </div>
    </Card>
  );
}