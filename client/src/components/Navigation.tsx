import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomLogo from "./CustomLogo";
import useResponsive from "@/hooks/use-responsive";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const { isMobile, isTablet, isDesktop, windowSize } = useResponsive();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { 
      label: "Services", 
      href: "/services",
      submenu: [
        { label: "Roofing Services", href: "/roofing-services" },
        { label: "Remodeling Services", href: "/remodeling-services" },
        { label: "Commercial Services", href: "/commercial-services" },
        { label: "Siding Services", href: "/siding-services" },
        { label: "Window Services", href: "/window-services" }
      ]
    },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown-container')) {
          setActiveDropdown(null);
        }
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeDropdown]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMenuOpen]);

  const handleGetQuote = () => {
    if (window.location.pathname === '/') {
      // If on home page, scroll to contact section
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to home page contact section
      window.location.href = '/#contact';
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links for home page sections
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle page navigation
      window.location.href = href;
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
    // close any mobile submenu when navigating
    setOpenMobileSubmenu(null);
  };

  const handleDropdownToggle = (label: string) => {
    if (isMobile) {
      // On mobile, toggle the submenu instead of navigating immediately
      setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
    } else {
      // On desktop, toggle dropdown
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };

  const handleDropdownItemClick = (href: string) => {
    handleNavigation(href);
    setActiveDropdown(null);
  };

  const isHomePage = window.location.pathname === '/';
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isHomePage 
        ? (scrolled 
          ? 'bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50' 
          : 'bg-transparent')
        : 'bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50'
    }`}>
      <div className="container-responsive">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isHomePage 
            ? (scrolled 
              ? (isMobile ? 'h-14' : isTablet ? 'h-16' : 'h-18') 
              : (isMobile ? 'h-16' : isTablet ? 'h-18' : 'h-20'))
            : (isMobile ? 'h-14' : isTablet ? 'h-16' : 'h-18')
        }`}>
          {/* Logo */}
          <div className="transform transition-all duration-300 hover:scale-105">
            <CustomLogo 
              size={isMobile ? "sm" : isTablet ? "md" : "lg"} 
              animated={true} 
              variant={isHomePage ? (scrolled ? "dark" : "light") : "dark"}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.label} className="relative">
                {item.submenu ? (
                  <div className="relative group dropdown-container">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`relative px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold tracking-wide uppercase transition-all duration-300 group min-h-[44px] flex items-center ${
                        isHomePage ? (scrolled ? 'text-foreground' : 'text-white') : 'text-foreground'
                      } hover:text-primary`}
                      data-testid={`nav-${item.label.toLowerCase()}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.label}
                      <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-background/98 backdrop-blur-xl border border-border/50 rounded-lg shadow-xl transition-all duration-300 ${
                      activeDropdown === item.label 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible translate-y-2'
                    }`}>
                      <div className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => handleDropdownItemClick(subItem.href)}
                            className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 flex items-center justify-between group"
                            data-testid={`nav-${subItem.label.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <span>{subItem.label}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`relative px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold tracking-wide uppercase transition-all duration-300 group min-h-[44px] flex items-center ${
                      isHomePage ? (scrolled ? 'text-foreground' : 'text-white') : 'text-foreground'
                    } hover:text-primary`}
                    data-testid={`nav-${item.label.toLowerCase()}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <Button 
              variant="ghost" 
              size={isTablet ? "sm" : "lg"}
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isTablet ? 'text-xs' : 'text-sm'
              } min-h-[44px] px-3 xl:px-4 ${
                isHomePage ? (scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary') : 'text-foreground hover:text-primary'
              }`}
              data-testid="button-call"
              onClick={() => window.location.href = 'tel:763-777-1962'}
            >
              <Phone className={`${isTablet ? 'w-3 h-3' : 'w-4 h-4'} mr-1 xl:mr-2`} />
              <span className="hidden xl:inline">763-777-1962</span>
              <span className="xl:hidden">Call</span>
            </Button>
            <Button 
              size={isTablet ? "sm" : "lg"}
              onClick={handleGetQuote}
              className={`bg-primary text-primary-foreground hover:bg-primary/90 font-semibold ${
                isTablet ? 'px-4 py-2 text-xs' : 'px-6 py-3 text-sm'
              } rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group min-h-[44px]`}
              data-testid="button-quote"
            >
              <span className="hidden xl:inline">Get Free Quote</span>
              <span className="xl:hidden">Quote</span>
              <ArrowRight className={`${isTablet ? 'w-3 h-3' : 'w-4 h-4'} ml-1 xl:ml-2 transition-transform duration-300 group-hover:translate-x-1`} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden transition-all duration-300 hover:scale-110 touch-target ${
              isHomePage ? (scrolled ? 'text-foreground' : 'text-white') : 'text-foreground'
            }`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              // close mobile submenu when opening/closing main menu
              if (isMenuOpen) setOpenMobileSubmenu(null);
            }}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? (
              <X className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
            ) : (
              <Menu className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
            )}
          </Button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setIsMenuOpen(false);
              setOpenMobileSubmenu(null);
            }}
          />
          
          {/* Menu Panel */}
          <div className={`absolute top-0 right-0 h-full w-full ${
            isMobile ? 'max-w-xs' : 'max-w-sm'
          } bg-white/95 backdrop-blur-xl border-l border-gray-200 shadow-2xl transform transition-all duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Header */}
            <div className={`flex items-center justify-between ${
              isMobile ? 'p-4' : 'p-6'
            } border-b border-gray-200 bg-white`}>
              <div className="flex items-center space-x-3">
                <CustomLogo size={isMobile ? "sm" : "md"} variant="dark" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsMenuOpen(false);
                  setOpenMobileSubmenu(null);
                }}
                className="text-gray-600 hover:text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-110 touch-target"
              >
                <X className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
              </Button>
            </div>

            {/* Navigation Items */}
            <div className={`${isMobile ? 'px-4 py-4' : 'px-6 py-6'} space-y-1 overflow-y-auto max-h-[calc(100vh-200px)] bg-white`}>
              {navItems.map((item, index) => (
                <div key={item.label}>
                  {/* If item has submenu -> toggle submenu on mobile */}
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className={`block w-full text-left ${
                          isMobile ? 'text-base' : 'text-lg'
                        } font-semibold text-gray-800 hover:text-primary transition-all duration-300 ${
                          isMobile ? 'py-4 px-4' : 'py-4 px-4'
                        } rounded-lg hover:bg-gray-50 hover:translate-x-2 touch-target flex items-center justify-between group border-b border-gray-100`}
                        data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                        aria-expanded={openMobileSubmenu === item.label}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-gray-400 transition-transform duration-200 ${openMobileSubmenu === item.label ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Mobile Submenu - collapsed by default */}
                      {openMobileSubmenu === item.label && (
                        <div className="ml-4 mt-1 space-y-1 bg-gray-50 rounded-lg p-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={() => handleDropdownItemClick(subItem.href)}
                              className={`block w-full text-left ${
                                isMobile ? 'text-sm' : 'text-base'
                              } text-gray-600 hover:text-primary transition-all duration-300 ${
                                isMobile ? 'py-3 px-3' : 'py-3 px-4'
                              } rounded-md hover:bg-white hover:shadow-sm touch-target`}
                              data-testid={`mobile-nav-${subItem.label.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`block w-full text-left ${
                        isMobile ? 'text-base' : 'text-lg'
                      } font-semibold text-gray-800 hover:text-primary transition-all duration-300 ${
                        isMobile ? 'py-4 px-4' : 'py-4 px-4'
                      } rounded-lg hover:bg-gray-50 hover:translate-x-2 touch-target flex items-center justify-between group border-b border-gray-100`}
                      data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ArrowRight className={`${isMobile ? 'w-4 h-4' : 'w-4 h-4'} text-gray-400 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1`} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className={`absolute bottom-0 left-0 right-0 ${
              isMobile ? 'p-4' : 'p-6'
            } border-t border-gray-200 bg-white`}>
              <div className="space-y-4">
                <div className={`flex items-center justify-center ${
                  isMobile ? 'p-3' : 'p-4'
                } bg-primary/10 rounded-lg border border-primary/20`}>
                  <Phone className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-primary mr-3`} />
                  <span className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-gray-800`}>
                    <a href="tel:763-777-1962">
                      763-777-1962
                    </a>
                  </span>
                </div>
                <Button 
                  onClick={handleGetQuote}
                  className={`w-full ${
                    isMobile ? 'h-12 text-base' : 'h-14 text-lg'
                  } font-bold bg-primary hover:bg-primary/90 text-white rounded-xl hover:scale-105 transition-all duration-300 group shadow-lg touch-target`}
                  data-testid="mobile-button-quote"
                >
                  Get Free Quote
                  <ArrowRight className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} ml-3 transition-transform duration-300 group-hover:translate-x-1`} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Enhancement Styles */}
      <style>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        nav button {
          animation: slideInFromTop 0.8s ease-out forwards;
          opacity: 0;
        }
        
        nav button:nth-child(1) { animation-delay: 100ms; }
        nav button:nth-child(2) { animation-delay: 200ms; }
        nav button:nth-child(3) { animation-delay: 300ms; }
        nav button:nth-child(4) { animation-delay: 400ms; }
        nav button:nth-child(5) { animation-delay: 500ms; }
      `}</style>
    </nav>
  );
}
// ...existing code...