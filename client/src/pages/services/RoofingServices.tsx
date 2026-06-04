import React, { useState, useEffect } from "react";
import { Shield, CheckCircle, Star, ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";

export default function RoofingServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roofingServices = [
    {
      title: "Residential Roofing",
      description: "Complete roofing solutions for homes including installation, repair, and replacement.",
      features: ["Asphalt Shingles", "Metal Roofing", "Tile Roofing", "Slate Roofing", "Flat Roofing"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      startingPrice: "From $5,000"
    },
    {
      title: "Commercial Roofing",
      description: "Professional roofing services for commercial buildings and industrial facilities.",
      features: ["EPDM Roofing", "TPO Roofing", "Modified Bitumen", "Metal Panels", "Green Roofing"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      startingPrice: "Custom Quote"
    },
    {
      title: "Roof Repair & Maintenance",
      description: "Expert repair services to extend the life of your existing roof system.",
      features: ["Leak Repairs", "Storm Damage", "Gutter Cleaning", "Ventilation", "Insulation"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      startingPrice: "From $200"
    },
    {
      title: "Emergency Roofing",
      description: "24/7 emergency roofing services for urgent repairs and storm damage.",
      features: ["24/7 Service", "Storm Response", "Temporary Repairs", "Insurance Claims", "Quick Response"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      startingPrice: "Emergency Call"
    }
  ];

  const materials = [
    { name: "Asphalt Shingles", description: "Most popular and cost-effective option", warranty: "20-30 years" },
    { name: "Metal Roofing", description: "Durable and energy-efficient", warranty: "40-70 years" },
    { name: "Tile Roofing", description: "Classic look with excellent durability", warranty: "50-100 years" },
    { name: "Slate Roofing", description: "Premium natural stone option", warranty: "75-200 years" },
    { name: "Flat Roofing", description: "Modern commercial and residential", warranty: "15-30 years" }
  ];

  const serviceAreas = [
    "Minneapolis", "St. Paul", "Coon Rapids", "Blaine", "Shoreview", "North Oaks",
    "Plymouth", "Ramsey", "Anoka", "Rogers", "St. Michael", "Maple Grove", 
    "Fridley", "Columbia Heights"
  ];

  // Function to create proper URL slugs
  const createCitySlug = (cityName: string) => {
    return cityName.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roofing Services",
    "description": "Professional roofing services including installation, repair, and maintenance for residential and commercial properties.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mabel Construction",
      "telephone": "763-777-1962",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Construction Way",
        "addressLocality": "Minneapolis",
        "addressRegion": "MN",
        "postalCode": "55401"
      }
    },
    "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": area + ", MN"
    })),
    "serviceType": "Roofing Services"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Roofing Services - Expert Roof Installation & Repair | Mabel Construction"
        description="Professional roofing services including installation, repair, and maintenance. Serving Minneapolis, St. Paul, and surrounding areas. Free estimates available."
        keywords="roofing services, roof installation, roof repair, roofing contractors, Minneapolis roofing, St Paul roofing"
        canonicalUrl="https://buildwithmabel.com/roofing-services"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
              PROFESSIONAL
              <span className="block text-primary">ROOFING SERVICES</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert roofing solutions for residential and commercial properties. From installation to repair, 
              we protect what matters most with quality craftsmanship and reliable service across the Twin Cities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Complete Roofing Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From minor repairs to complete roof replacements, we handle all your roofing needs with expertise and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roofingServices.map((service, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Services Include:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{service.startingPrice}</span>
                    <a href="/contact">
                      <Button variant="outline" size="sm">
                        Get Quote
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              Roofing Services Near You
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide expert roofing services throughout the Twin Cities metropolitan area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {serviceAreas.map((area, index) => (
              <a
                key={index}
                href={`/roofing-services-in-${createCitySlug(area)}`}
                className={`bg-card border border-card-border rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground group block ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground mx-auto mb-2" />
                <span className="text-sm font-semibold text-foreground group-hover:text-primary-foreground">{area}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Need Professional Roofing Services?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free roof inspection and quote. Our expert team is ready to help protect your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Inspection
              </Button>
            </a>
            <a href="tel:763-777-1962">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
