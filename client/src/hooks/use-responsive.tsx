import { useState, useEffect } from 'react';

// Breakpoint definitions
const breakpoints = {
  mobileXs: 320,
  mobileSm: 375,
  mobileMd: 414,
  mobileLg: 480,
  tabletSm: 640,
  tabletMd: 768,
  tabletLg: 896,
  desktopSm: 1024,
  desktopMd: 1280,
  desktopLg: 1536,
  desktopXl: 1920,
} as const;

type Breakpoint = keyof typeof breakpoints;

// Hook for responsive design
export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Breakpoint checks
  const isMobileXs = windowSize.width >= breakpoints.mobileXs && windowSize.width < breakpoints.mobileSm;
  const isMobileSm = windowSize.width >= breakpoints.mobileSm && windowSize.width < breakpoints.mobileMd;
  const isMobileMd = windowSize.width >= breakpoints.mobileMd && windowSize.width < breakpoints.mobileLg;
  const isMobileLg = windowSize.width >= breakpoints.mobileLg && windowSize.width < breakpoints.tabletSm;
  const isTabletSm = windowSize.width >= breakpoints.tabletSm && windowSize.width < breakpoints.tabletMd;
  const isTabletMd = windowSize.width >= breakpoints.tabletMd && windowSize.width < breakpoints.tabletLg;
  const isTabletLg = windowSize.width >= breakpoints.tabletLg && windowSize.width < breakpoints.desktopSm;
  const isDesktopSm = windowSize.width >= breakpoints.desktopSm && windowSize.width < breakpoints.desktopMd;
  const isDesktopMd = windowSize.width >= breakpoints.desktopMd && windowSize.width < breakpoints.desktopLg;
  const isDesktopLg = windowSize.width >= breakpoints.desktopLg && windowSize.width < breakpoints.desktopXl;
  const isDesktopXl = windowSize.width >= breakpoints.desktopXl;

  // Device type checks
  const isMobile = windowSize.width < breakpoints.tabletSm;
  const isTablet = windowSize.width >= breakpoints.tabletSm && windowSize.width < breakpoints.desktopSm;
  const isDesktop = windowSize.width >= breakpoints.desktopSm;
  const isLargeScreen = windowSize.width >= breakpoints.desktopMd;

  // Orientation
  const isPortrait = windowSize.height > windowSize.width;
  const isLandscape = windowSize.width > windowSize.height;

  // Touch device detection
  const isTouchDevice = typeof window !== 'undefined' && 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  // Reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return {
    windowSize,
    breakpoints,
    isMobileXs,
    isMobileSm,
    isMobileMd,
    isMobileLg,
    isTabletSm,
    isTabletMd,
    isTabletLg,
    isDesktopSm,
    isDesktopMd,
    isDesktopLg,
    isDesktopXl,
    isMobile,
    isTablet,
    isDesktop,
    isLargeScreen,
    isPortrait,
    isLandscape,
    isTouchDevice,
    prefersReducedMotion,
  };
}

// Hook for specific breakpoint checks
export function useBreakpoint(breakpoint: Breakpoint) {
  const { windowSize } = useResponsive();
  return windowSize.width >= breakpoints[breakpoint];
}

// Hook for responsive values
export function useResponsiveValue<T>(values: {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  default: T;
}) {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  if (isMobile && values.mobile !== undefined) return values.mobile;
  if (isTablet && values.tablet !== undefined) return values.tablet;
  if (isDesktop && values.desktop !== undefined) return values.desktop;
  return values.default;
}

// Hook for responsive grid columns
export function useResponsiveGrid() {
  const { isMobile, isTablet, isDesktop, isLargeScreen } = useResponsive();
  
  if (isMobile) return 1;
  if (isTablet) return 2;
  if (isDesktop) return 3;
  if (isLargeScreen) return 4;
  return 1;
}

// Hook for responsive spacing
export function useResponsiveSpacing() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return {
    section: isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-20',
    container: isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8',
    gap: isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8',
    margin: isMobile ? 'mb-8' : isTablet ? 'mb-12' : 'mb-16',
  };
}

// Hook for responsive typography
export function useResponsiveTypography() {
  const { isMobile, isTablet, isDesktop, isLargeScreen } = useResponsive();
  
  return {
    heading: isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : isDesktop ? 'text-4xl' : 'text-5xl',
    subheading: isMobile ? 'text-lg' : isTablet ? 'text-xl' : isDesktop ? 'text-2xl' : 'text-3xl',
    body: isMobile ? 'text-sm' : isTablet ? 'text-base' : isDesktop ? 'text-lg' : 'text-xl',
    caption: isMobile ? 'text-xs' : isTablet ? 'text-sm' : isDesktop ? 'text-base' : 'text-lg',
  };
}

// Hook for responsive button sizes
export function useResponsiveButton() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return {
    size: isMobile ? 'sm' : isTablet ? 'md' : 'lg',
    padding: isMobile ? 'px-4 py-2' : isTablet ? 'px-6 py-3' : 'px-8 py-4',
    text: isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg',
    height: isMobile ? 'h-10' : isTablet ? 'h-12' : 'h-14',
  };
}

// Hook for responsive card layouts
export function useResponsiveCard() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return {
    padding: isMobile ? 'p-4' : isTablet ? 'p-6' : 'p-8',
    gap: isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8',
    columns: isMobile ? 1 : isTablet ? 2 : 3,
    imageHeight: isMobile ? 'h-48' : isTablet ? 'h-56' : 'h-64',
  };
}

// Hook for responsive navigation
export function useResponsiveNavigation() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return {
    height: isMobile ? 'h-14' : isTablet ? 'h-16' : 'h-20',
    padding: isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8',
    logoSize: isMobile ? 'sm' : isTablet ? 'md' : 'lg',
    showMobileMenu: isMobile,
    showDesktopMenu: isDesktop,
  };
}

// Hook for responsive hero sections
export function useResponsiveHero() {
  const { isMobile, isTablet, isDesktop, isLargeScreen } = useResponsive();
  
  return {
    minHeight: isMobile ? 'min-h-screen' : 'min-h-screen',
    padding: isMobile ? 'py-16' : isTablet ? 'py-20' : 'py-24',
    textSize: isMobile ? 'text-3xl' : isTablet ? 'text-4xl' : isDesktop ? 'text-5xl' : 'text-6xl',
    subtextSize: isMobile ? 'text-lg' : isTablet ? 'text-xl' : isDesktop ? 'text-2xl' : 'text-3xl',
    buttonSize: isMobile ? 'sm' : isTablet ? 'md' : 'lg',
  };
}

// Hook for responsive modal/drawer
export function useResponsiveModal() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return {
    type: isMobile ? 'drawer' : 'modal',
    width: isMobile ? 'w-full' : isTablet ? 'w-11/12' : 'w-3/4',
    maxWidth: isMobile ? 'max-w-sm' : isTablet ? 'max-w-md' : 'max-w-lg',
    padding: isMobile ? 'p-4' : isTablet ? 'p-6' : 'p-8',
  };
}

// Hook for responsive form layouts
export function useResponsiveForm() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return {
    columns: isMobile ? 1 : isTablet ? 2 : 3,
    gap: isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8',
    inputSize: isMobile ? 'sm' : isTablet ? 'md' : 'lg',
    buttonSize: isMobile ? 'sm' : isTablet ? 'md' : 'lg',
    labelSize: isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg',
  };
}

// Hook for responsive image handling
export function useResponsiveImage() {
  const { isMobile, isTablet, isDesktop, isLargeScreen } = useResponsive();
  
  return {
    aspectRatio: isMobile ? 'aspect-square' : isTablet ? 'aspect-video' : 'aspect-video',
    objectFit: 'object-cover',
    quality: isMobile ? 75 : isTablet ? 85 : 95,
    sizes: isMobile ? '100vw' : isTablet ? '50vw' : '33vw',
  };
}

// Hook for responsive animations
export function useResponsiveAnimation() {
  const { isMobile, prefersReducedMotion } = useResponsive();
  
  return {
    duration: prefersReducedMotion ? 0 : isMobile ? 300 : 500,
    delay: prefersReducedMotion ? 0 : isMobile ? 100 : 200,
    easing: prefersReducedMotion ? 'linear' : 'ease-out',
    enabled: !prefersReducedMotion,
  };
}

// Hook for responsive touch targets
export function useResponsiveTouchTarget() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return {
    minSize: isMobile ? 44 : isTablet ? 48 : 56,
    padding: isMobile ? 'p-2' : isTablet ? 'p-3' : 'p-4',
    margin: isMobile ? 'm-1' : isTablet ? 'm-2' : 'm-3',
  };
}

export default useResponsive;
