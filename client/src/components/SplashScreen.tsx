import React, { useState, useEffect } from 'react';
import { Loader2, Award, Hammer, Wrench, Building2 } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Show content after a brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Progress animation with mobile-optimized timing
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Complete after progress reaches 100%
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 3; // Faster progress for mobile
      });
    }, 40);

    return () => {
      clearTimeout(contentTimer);
      clearInterval(progressInterval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary/95 via-primary to-purple-900 overflow-hidden">
      {/* Mobile-Optimized Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/animate.gif"
          alt="Mabel Construction Animation"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Mobile App-Style Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 mobile-sm:px-6">
        {/* Logo Section */}
        <div className={`mb-8 mobile-sm:mb-12 transition-all duration-1000 ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl mobile-sm:rounded-[2rem] p-6 mobile-sm:p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center space-x-3 mobile-sm:space-x-4">
              {/* Company Logo */}
              <div className="flex space-x-1">
                <div className="w-8 mobile-sm:w-10 h-8 mobile-sm:h-10 bg-white rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 mobile-sm:w-6 h-5 mobile-sm:h-6 text-primary" />
                </div>
                <div className="w-8 mobile-sm:w-10 h-8 mobile-sm:h-10 bg-white rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 mobile-sm:w-6 h-5 mobile-sm:h-6 text-primary" />
                </div>
              </div>
              <div className="text-white">
                <h1 className="text-lg mobile-sm:text-xl font-black tracking-tight">
                  MABEL
                </h1>
                <p className="text-xs mobile-sm:text-sm text-white/80 font-medium">
                  CONSTRUCTION
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Badge */}
        <div className={`mb-8 mobile-sm:mb-12 transition-all duration-1000 delay-300 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-white/20 backdrop-blur-xl rounded-full px-6 mobile-sm:px-8 py-3 mobile-sm:py-4 border border-white/30">
            <div className="flex items-center space-x-2 mobile-sm:space-x-3">
              <Award className="w-4 mobile-sm:w-5 h-4 mobile-sm:h-5 text-white" />
              <span className="text-white font-bold text-sm mobile-sm:text-base tracking-wide">
                #1 CONSTRUCTION COMPANY
              </span>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className={`w-full max-w-xs mobile-sm:max-w-sm transition-all duration-1000 delay-500 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Progress Bar */}
          <div className="bg-white/20 backdrop-blur-xl rounded-full h-2 mobile-sm:h-3 overflow-hidden mb-4 mobile-sm:mb-6">
            <div 
              className="h-full bg-gradient-to-r from-white to-white/80 transition-all duration-300 ease-out rounded-full shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress Text */}
          <div className="text-center">
            <p className="text-white/80 text-sm mobile-sm:text-base font-medium mb-2">
              {progress}% Complete
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="w-4 mobile-sm:w-5 h-4 mobile-sm:h-5 text-white/60 animate-spin" />
              <span className="text-white/60 text-xs mobile-sm:text-sm">
                Loading your experience...
              </span>
            </div>
          </div>
        </div>

        {/* Floating Construction Icons - Mobile Optimized */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 mobile-sm:top-20 left-4 mobile-sm:left-6 text-white/20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <Hammer className="w-6 mobile-sm:w-8 h-6 mobile-sm:h-8" />
          </div>
          <div className="absolute top-24 mobile-sm:top-32 right-6 mobile-sm:right-8 text-white/15 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
            <Wrench className="w-5 mobile-sm:w-7 h-5 mobile-sm:h-7" />
          </div>
          <div className="absolute bottom-32 mobile-sm:bottom-40 left-8 mobile-sm:left-12 text-white/20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
            <Building2 className="w-7 mobile-sm:w-9 h-7 mobile-sm:h-9" />
          </div>
          <div className="absolute bottom-20 mobile-sm:bottom-24 right-4 mobile-sm:right-6 text-white/15 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.2s' }}>
            <Hammer className="w-5 mobile-sm:w-6 h-5 mobile-sm:h-6" />
          </div>
        </div>
      </div>

      {/* Mobile App-Style Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 mobile-sm:p-6">
        <div className="text-center">
          <p className="text-white/60 text-xs mobile-sm:text-sm">
            Powered by Mabel Construction
          </p>
        </div>
      </div>
    </div>
  );
}
