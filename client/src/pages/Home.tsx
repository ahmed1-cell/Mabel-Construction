import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mabel Construction",
    "description": "Premium construction services in the Twin Cities. Quality you deserve, prices you can afford.",
    "url": "https://buildwithmabel.com",
    "telephone": "763-777-1962",
    "email": "info@buildwithmabel.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Construction Way",
      "addressLocality": "Minneapolis",
      "addressRegion": "MN",
      "postalCode": "55401",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.9778",
      "longitude": "-93.2650"
    },
    "areaServed": [
      "Minneapolis", "St. Paul", "Maple Grove", "Plymouth", 
      "Rogers", "Coon Rapids", "Anoka", "Brooklyn Park"
    ],
    "serviceType": [
      "Residential Construction", "Commercial Construction", "Roofing", 
      "Remodeling", "Siding", "Windows", "Kitchen Renovations", 
      "Bathroom Remodeling", "Basement Finishing"
    ],
    "openingHours": "Mo-Fr 07:00-18:00,Sa 08:00-16:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <SEOHead
        title="Mabel Construction - Quality You Deserve, Prices You Can Afford"
        description="Mabel Construction delivers premium construction services with bold design and exceptional quality. From custom homes to commercial projects, we build your vision with precision and style in the Twin Cities."
        keywords="construction, remodeling, roofing, siding, windows, Minneapolis, St Paul, Twin Cities, custom homes, commercial construction, Mabel Construction"
        canonicalUrl="https://buildwithmabel.com"
        structuredData={structuredData}
      />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  );
}