import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import CustomLogo from "./CustomLogo";
import useResponsive from "@/hooks/use-responsive";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  const { isMobile, isTablet } = useResponsive();

  const footerLinks = {
    services: [
      { label: "Roofing Services", href: "/roofing-services" },
      { label: "Remodeling Services", href: "/remodeling-services" },
      { label: "Commercial Services", href: "/commercial-services" },
      { label: "Siding Services", href: "/siding-services" },
      { label: "Window Services", href: "/window-services" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Project Gallery", href: "/projects" }, 
      { label: "Careers", href: "/careers" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://web.facebook.com/MabelConstruction/?_rdc=1&_rdr#", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/mabel.construction/?hl=en", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammadahmedpolsbudb/", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-responsive">
        <div className={`${isMobile ? "py-10" : isTablet ? "py-12" : "py-16"} grid ${isMobile ? "grid-cols-1 gap-8" : "grid-cols-5 gap-8"}`}>
          {/* Company / Brand */}
          <div className={`${isMobile ? "col-span-1" : "col-span-2"}`}>
            <CustomLogo size={isMobile ? "sm" : isTablet ? "md" : "lg"} animated={false} variant="light" />
            <p className={`${isMobile ? "text-sm mt-4" : "text-base mt-6"} text-background/80 leading-relaxed max-w-md`}>
              Bold construction excellence that transforms your vision into reality. Experience the perfect blend of modern design and proven craftsmanship.
            </p>

            <div className={`${isMobile ? "mt-6 space-y-3" : "mt-8 space-y-4"}`}>
              <div className="flex items-center space-x-3">
                <Phone className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} text-primary`} />
                <a href="tel:763-777-1962" className={`${isMobile ? "text-sm" : "text-base"} text-background/90`}>763-777-1962</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} text-primary`} />
                <a href="mailto:info@mabelconstruction.com" className={`${isMobile ? "text-sm" : "text-base"} text-background/90`}>info@mabelconstruction.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} text-primary`} />
                <span className={`${isMobile ? "text-sm" : "text-base"} text-background/90`}>10973 bluebird street, Coon rapids mn 55433</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className={`${isMobile ? "mt-4" : ""}`}>
            <h3 className={`${isMobile ? "text-base" : "text-lg"} font-bold text-background ${isMobile ? "mb-3" : "mb-6"}`}>Services</h3>
            <ul className={`${isMobile ? "space-y-2" : "space-y-3"}`}>
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className={`${isMobile ? "text-sm" : "text-base"} text-background/80 hover:text-primary transition-colors`}
                    data-testid={`footer-service-${i}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company (with Project Gallery moved here) */}
          <div className={`${isMobile ? "mt-4" : ""}`}>
            <h3 className={`${isMobile ? "text-base" : "text-lg"} font-bold text-background ${isMobile ? "mb-3" : "mb-6"}`}>Company</h3>
            <ul className={`${isMobile ? "space-y-2" : "space-y-3"}`}>
              {footerLinks.company.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className={`${isMobile ? "text-sm" : "text-base"} text-background/80 hover:text-primary transition-colors`}
                    data-testid={`footer-company-${i}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div className={`${isMobile ? "mt-6" : ""}`}>
            <h3 className={`${isMobile ? "text-base" : "text-lg"} font-bold text-background ${isMobile ? "mb-3" : "mb-6"}`}>Legal</h3>
            <ul className={`${isMobile ? "space-y-2 mb-4" : "space-y-3 mb-6"}`}>
              <li>
                <a href="/privacy" className={`${isMobile ? "text-sm" : "text-base"} text-background/80 hover:text-primary transition-colors`} data-testid="footer-privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className={`${isMobile ? "text-sm" : "text-base"} text-background/80 hover:text-primary transition-colors`} data-testid="footer-terms">Terms of Service</a>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              {socialLinks.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    aria-label={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`${isMobile ? "w-8 h-8" : "w-10 h-10"} bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200`}
                    data-testid={`social-${s.label.toLowerCase()}`}
                  >
                    <Icon className={`${isMobile ? "w-4 h-4" : "w-5 h-5"}`} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`${isMobile ? "py-6" : "py-8"} border-t border-background/20`}>
          <div className={`flex ${isMobile ? "flex-col gap-3" : "flex-row"} items-center justify-between`}>
            <p className={`${isMobile ? "text-xs" : "text-sm"} text-background/60`}>© {currentYear} Mabel Construction. All rights reserved.</p>
            {/* Removed Contact / Privacy / Terms links as requested */}
          </div>
        </div>
      </div>
    </footer>
  );
}