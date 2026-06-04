import React, { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const SERVICES = [
  { path: "/roofing-services", label: "Roofing" },
  { path: "/remodeling-services", label: "Remodeling" },
  { path: "/commercial-services", label: "Commercial" },
  { path: "/siding-services", label: "Siding" },
  { path: "/window-services", label: "Windows" },
];

export default function Header(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/" || location === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // header style: transparent only on homepage when not scrolled; otherwise glassy purple
  const isTransparent = isHome && !scrolled;
  const headerClasses = isTransparent
    ? "bg-transparent text-white"
    : "bg-gradient-to-r from-[#5b21b6]/95 to-[#7c3aed]/95 text-white shadow-lg backdrop-blur-md";

  // dropdown background should match non-transparent header (use same purple)
  const dropdownBg = isTransparent ? "bg-white text-foreground" : "bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] text-white";

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${headerClasses}`}
      aria-label="Site header"
    >
      <div className="container-responsive flex items-center justify-between gap-6 py-3">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3">
            <svg width="44" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="0" y="8" width="12" height="12" rx="2" fill="#7C3AED" />
              <rect x="16" y="0" width="12" height="20" rx="2" fill="#C084FC" />
              <rect x="32" y="8" width="12" height="12" rx="2" fill="#7C3AED" />
            </svg>
            <div className="hidden sm:block">
              <div className="text-lg font-extrabold tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                MABEL
              </div>
              <div className="text-xs opacity-90">CONSTRUCTION</div>
            </div>
          </a>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/"><a className="text-sm font-bold hover:opacity-90">HOME</a></Link>
          <Link href="/about"><a className="text-sm font-bold hover:opacity-90">ABOUT</a></Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((s) => !s)}
              className="text-sm font-bold inline-flex items-center gap-2"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              SERVICES
            </button>

            {/* dropdown */}
            <div
              className={`absolute left-0 mt-3 w-48 rounded-lg overflow-hidden transition-opacity duration-150 ${servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
              <div className={`${dropdownBg} py-2 rounded-lg`}>
                {SERVICES.map((s) => (
                  <Link key={s.path} href={s.path}>
                    <a
                      className={`block px-4 py-2 text-sm ${isTransparent ? "hover:bg-muted/5 hover:text-foreground" : "hover:opacity-90"}`}
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/projects"><a className="text-sm font-bold hover:opacity-90">PROJECTS</a></Link>
          <Link href="/locations"><a className="text-sm font-bold hover:opacity-90">LOCATIONS</a></Link>
          <Link href="/contact"><a className="text-sm font-bold hover:opacity-90">CONTACT</a></Link>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <a href="tel:763-777-1962" className="hidden md:inline-flex items-center gap-2 text-sm hover:opacity-90">
            <Phone className="w-4 h-4" /> <span className="font-bold">Call</span>
          </a>

          <Link href="/contact">
            <a className={`inline-flex items-center px-5 py-2 rounded-full font-bold shadow hover:scale-[1.02] transition-transform text-sm ${isTransparent ? "bg-white text-purple-700" : "bg-white text-purple-700"}`}>
              Quote
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Link>

          <button className="lg:hidden p-2 rounded-md" onClick={() => setMobileOpen((s) => !s)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-max-h duration-300 overflow-hidden ${mobileOpen ? "max-h-[420px]" : "max-h-0"}`}>
        <div className={`${isTransparent ? "bg-white/95" : "bg-gradient-to-r from-[#5b21b6] to-[#7c3aed]"} px-4 py-4 border-t`}>
          <nav className="flex flex-col gap-2">
            <Link href="/"><a className="py-2 text-sm font-bold">Home</a></Link>
            <Link href="/about"><a className="py-2 text-sm font-bold">About</a></Link>

            <div>
              <button
                onClick={() => setServicesOpen((s) => !s)}
                className="py-2 w-full text-left text-sm font-bold flex items-center justify-between"
              >
                Services
                <span className="ml-2">{servicesOpen ? "−" : "+"}</span>
              </button>

              {servicesOpen && (
                <div className="mt-2 ml-3 flex flex-col gap-1">
                  {SERVICES.map((s) => (
                    <Link key={s.path} href={s.path}><a className="py-2 text-sm">{s.label}</a></Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/projects"><a className="py-2 text-sm font-bold">Projects</a></Link>
            <Link href="/locations"><a className="py-2 text-sm font-bold">Locations</a></Link>
            <Link href="/contact"><a className="py-2 text-sm font-bold">Contact</a></Link>
          </nav>
        </div>
      </div>
    </header>
  );
}