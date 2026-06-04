import { useState, useEffect } from "react";
import { ArrowDown, Hammer, Shield, Star, Play, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import useResponsive from "@/hooks/use-responsive";
// Professional HD construction images from Unsplash
const heroImage1 = "https://images.unsplash.com/photo-1590725140246-20acdee442be?w=1920&h=1080&fit=crop&q=90";
const heroImage2 = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&q=90";
const heroImage3 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=90";
const heroImage4 = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=90";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, isTablet, isDesktop, isLargeScreen, windowSize } = useResponsive();
  
  const heroImages = [
    { src: heroImage1, alt: "Professional Construction Site with Cranes" },
    { src: heroImage2, alt: "Construction Workers on Site" },
    { src: heroImage3, alt: "Commercial Construction Project" },
    { src: heroImage4, alt: "Luxury Home Construction" }
  ];
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleVideoPlay = () => {
    console.log('Play company video');
  };

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isMobile ? 'pt-16' : isTablet ? 'pt-18' : 'pt-20'
    }`}>
      {/* Auto-Changing Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      
      {/* Slideshow Indicators */}
      <div className={`absolute ${
        isMobile ? 'bottom-6 right-4' : isTablet ? 'bottom-8 right-6' : 'bottom-8 right-8'
      } z-20 flex space-x-2`}>
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`${
              isMobile ? 'w-2 h-2' : isTablet ? 'w-2.5 h-2.5' : 'w-3 h-3'
            } rounded-full transition-all duration-300 touch-target ${
              index === currentImageIndex 
                ? 'bg-primary scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            data-testid={`hero-indicator-${index}`}
          />
        ))}
      </div>

      {/* Enhanced Floating 3D Icons - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`floating-icon-1 absolute ${
          isMobile ? 'top-16 left-[3%]' : isTablet ? 'top-20 left-[4%]' : 'top-20 left-[5%]'
        } text-white/15`} style={{ animationDelay: '0s' }}>
          <Hammer className={`${
            isMobile ? 'w-8 h-8' : isTablet ? 'w-12 h-12' : 'w-16 h-16'
          }`} />
        </div>
        <div className={`floating-icon-2 absolute ${
          isMobile ? 'top-24 right-[5%]' : isTablet ? 'top-28 right-[6%]' : 'top-32 right-[8%]'
        } text-white/15`} style={{ animationDelay: '1s' }}>
          <Shield className={`${
            isMobile ? 'w-10 h-10' : isTablet ? 'w-16 h-16' : 'w-20 h-20'
          }`} />
        </div>
        <div className={`floating-icon-3 absolute ${
          isMobile ? 'bottom-32 left-[8%]' : isTablet ? 'bottom-36 left-[9%]' : 'bottom-40 left-[10%]'
        } text-white/15`} style={{ animationDelay: '2s' }}>
          <Star className={`${
            isMobile ? 'w-8 h-8' : isTablet ? 'w-10 h-10' : 'w-14 h-14'
          }`} />
        </div>
        <div className={`floating-icon-1 absolute ${
          isMobile ? 'top-[50%] right-[12%]' : isTablet ? 'top-[55%] right-[13%]' : 'top-[60%] right-[15%]'
        } text-white/15`} style={{ animationDelay: '3s' }}>
          <Award className={`${
            isMobile ? 'w-6 h-6' : isTablet ? 'w-8 h-8' : 'w-12 h-12'
          }`} />
        </div>
        <div className={`floating-icon-2 absolute ${
          isMobile ? 'bottom-[15%] right-[3%]' : isTablet ? 'bottom-[18%] right-[4%]' : 'bottom-[20%] right-[5%]'
        } text-white/15`} style={{ animationDelay: '4s' }}>
          <Hammer className={`${
            isMobile ? 'w-6 h-6' : isTablet ? 'w-8 h-8' : 'w-10 h-10'
          }`} />
        </div>
      </div>

      {/* Enhanced Content - Advanced Mobile Optimization */}
      <div className={`relative z-10 container-responsive text-center ${
        isMobile ? 'pb-16' : isTablet ? 'pb-20' : 'pb-24'
      }`}>
        <div className={`max-w-4xl ${
          isLargeScreen ? 'lg:max-w-6xl' : 'lg:max-w-5xl'
        } mx-auto`}>
          {/* Animated Badge - Moved here above main headlines */}
          <div className={`inline-flex items-center ${
            isMobile ? 'px-3 py-2' : isTablet ? 'px-4 py-2' : 'px-6 py-3'
          } bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 ${
            isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-8'
          } transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Award className={`${
              isMobile ? 'w-3 h-3' : isTablet ? 'w-4 h-4' : 'w-5 h-5'
            } text-primary ${isMobile ? 'mr-2' : 'mr-3'}`} />
            <span className={`text-white font-semibold tracking-wide ${
              isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-base'
            }`}>
              #1 CONSTRUCTION COMPANY
            </span>
          </div>
          
          {/* Main Headlines with Advanced Mobile Responsiveness */}
          <h1 className={`${
            isMobile ? 'text-3xl' : isTablet ? 'text-4xl md:text-5xl' : 'text-6xl lg:text-7xl'
          } font-black text-white ${
            isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-8'
          } leading-tight transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="block tracking-tight">THE MODERN</span>
            <span className="block bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              CONSTRUCTION
            </span>
            <span className={`block text-white/90 ${
              isMobile ? 'text-sm' : isTablet ? 'text-lg md:text-xl' : 'text-2xl lg:text-3xl'
            } leading-tight mt-2`}>
              & INDUSTRIAL AGENCY
            </span>
          </h1>
          
          <h2 className={`${
            isMobile ? 'text-lg' : isTablet ? 'text-xl md:text-2xl' : 'text-3xl'
          } font-bold text-white/90 ${
            isMobile ? 'mb-6' : isTablet ? 'mb-8' : 'mb-8'
          } transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="block sm:inline">Quality You Deserve</span>
            <span className="hidden sm:inline"> • </span>
            <span className="block sm:inline">Prices You Can Afford</span>
          </h2>
          
          <p className={`${
            isMobile ? 'text-sm' : isTablet ? 'text-base md:text-lg' : 'text-xl'
          } text-white/80 ${
            isMobile ? 'mb-8' : isTablet ? 'mb-10' : 'mb-12'
          } max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            isMobile ? 'px-4' : 'px-0'
          } ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We take pride in our craftsmanship approach, working closely with clients to understand their vision and deliver projects that exceed expectations.
          </p>
          
          {/* Enhanced Action Buttons */}
          <div className={`flex ${
            isMobile ? 'flex-col' : 'flex-row'
          } ${
            isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8'
          } justify-center items-center transition-all duration-1000 delay-900 ${
            isMobile ? 'px-4' : 'px-0'
          } ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size={isMobile ? "lg" : isTablet ? "lg" : "lg"}
              className={`${
                isMobile ? 'w-full' : 'w-auto'
              } ${
                isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
              } ${
                isMobile ? 'px-6 py-3' : isTablet ? 'px-8 py-4' : 'px-10 py-5'
              } ${
                isMobile ? 'h-12' : isTablet ? 'h-14' : 'h-16'
              } bg-primary border-primary-border hover-elevate active-elevate-2 rounded-full font-bold tracking-wide shadow-2xl hover:shadow-primary/25 transition-all duration-300 group touch-target`}
              data-testid="button-hero-quote"
              onClick={scrollToContact}
            >
              GET STARTED
              <ArrowDown className={`${
                isMobile ? 'w-4 h-4' : isTablet ? 'w-5 h-5' : 'w-6 h-6'
              } ${isMobile ? 'ml-2' : 'ml-3'} rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1`} />
            </Button>
          </div>
          
          {/* Stats Row */}
          <div className={`${
            isMobile ? 'mt-12' : isTablet ? 'mt-16' : 'mt-20'
          } grid ${
            isMobile ? 'grid-cols-1' : 'grid-cols-3'
          } ${
            isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-12'
          } transition-all duration-1000 delay-1100 ${
            isMobile ? 'px-4' : 'px-0'
          } ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className={`${
                isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'
              } font-black text-primary ${
                isMobile ? 'mb-1' : 'mb-2'
              }`}>20+</div>
              <div className={`text-white/80 font-medium ${
                isMobile ? 'text-sm' : 'text-base'
              }`}>Years Experience</div>
            </div>
            <div className="text-center">
              <div className={`${
                isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'
              } font-black text-primary ${
                isMobile ? 'mb-1' : 'mb-2'
              }`}>500+</div>
              <div className={`text-white/80 font-medium ${
                isMobile ? 'text-sm' : 'text-base'
              }`}>Projects Completed</div>
            </div>
            <div className="text-center">
              <div className={`${
                isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'
              } font-black text-primary ${
                isMobile ? 'mb-1' : 'mb-2'
              }`}>100%</div>
              <div className={`text-white/80 font-medium ${
                isMobile ? 'text-sm' : 'text-base'
              }`}>Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`absolute ${
          isMobile ? 'bottom-4' : isTablet ? 'bottom-6' : 'bottom-8'
        } left-1/2 transform -translate-x-1/2 z-20`}>
          <button 
            onClick={scrollToServices}
            className={`flex flex-col items-center text-white/60 hover:text-white transition-all duration-500 group touch-target ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            data-testid="button-scroll-down"
            style={{ animationDelay: '1300ms' }}
          >
            <span className={`${
              isMobile ? 'text-xs' : 'text-sm'
            } font-bold ${
              isMobile ? 'mb-1' : 'mb-2'
            } tracking-wider`}>DISCOVER MORE</span>
            <div className={`${
              isMobile ? 'w-4 h-6' : isTablet ? 'w-5 h-8' : 'w-6 h-10'
            } border-2 border-white/40 rounded-full flex justify-center`}>
              <ArrowDown className={`${
                isMobile ? 'w-2 h-2' : isTablet ? 'w-2.5 h-2.5' : 'w-3 h-3'
              } animate-bounce text-white/60 group-hover:text-primary transition-all duration-300 mt-1`} />
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-15px) rotate(3deg) scale(1.05); }
          50% { transform: translateY(-25px) rotate(-2deg) scale(1.1); }
          75% { transform: translateY(-10px) rotate(4deg) scale(1.05); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-30px) rotate(-5deg) scale(1.08); }
          66% { transform: translateY(-15px) rotate(3deg) scale(1.12); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          20% { transform: translateY(-20px) rotate(2deg) scale(1.06); }
          40% { transform: translateY(-35px) rotate(-3deg) scale(1.1); }
          60% { transform: translateY(-25px) rotate(4deg) scale(1.08); }
          80% { transform: translateY(-10px) rotate(-2deg) scale(1.04); }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .floating-icon-1 {
          animation: float1 8s ease-in-out infinite;
        }
        
        .floating-icon-2 {
          animation: float2 10s ease-in-out infinite;
        }
        
        .floating-icon-3 {
          animation: float3 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}