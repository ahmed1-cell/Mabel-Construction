import React, { useState, useEffect } from "react";
import { Shield, CheckCircle, Star, ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";

export default function SidingServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sidingServices = [
    {
      title: "Vinyl Siding",
      description: "Durable, low-maintenance vinyl siding in a variety of colors and styles.",
      features: ["Weather Resistant", "Low Maintenance", "Energy Efficient", "Color Options", "Warranty"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      startingPrice: "From $8/sq ft"
    },
    {
      title: "Fiber Cement Siding",
      description: "Premium fiber cement siding that mimics wood with superior durability.",
      features: ["Wood Look", "Fire Resistant", "Insect Resistant", "Long Lasting", "Paintable"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      startingPrice: "From $12/sq ft"
    },
    {
      title: "Wood Siding",
      description: "Classic wood siding for a natural, timeless appearance.",
      features: ["Natural Beauty", "Customizable", "Paintable", "Stainable", "Traditional Look"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      startingPrice: "From $15/sq ft"
    },
    {
      title: "Siding Repair",
      description: "Professional repair and maintenance services for existing siding.",
      features: ["Damage Assessment", "Color Matching", "Weather Sealing", "Maintenance", "Warranty"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      startingPrice: "From $5/sq ft"
    }
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
    "name": "Siding Installation & Repair",
    "description": "Professional siding installation and repair services including vinyl, fiber cement, wood, and metal siding options.",
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
    "serviceType": "Siding Installation & Repair"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Siding Services - Installation & Repair | Mabel Construction"
        description="Professional siding installation and repair services including vinyl, fiber cement, and wood siding. Serving Minneapolis, St. Paul, and surrounding areas."
        keywords="siding services, siding installation, siding repair, vinyl siding, fiber cement siding, Minneapolis siding"
        canonicalUrl="https://buildwithmabel.com/siding-services"
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
              <span className="block text-primary">SIDING SERVICES</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Protect and beautify your property with our expert siding installation and repair services. 
              From vinyl to fiber cement, we offer quality siding solutions for every style and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Complete Siding Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From installation to repair, we provide comprehensive siding services to protect and enhance your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sidingServices.map((service, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Features:</h4>
                    <div className="space-y-1">
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
              Siding Services Near You
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide expert siding services throughout the Twin Cities metropolitan area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {serviceAreas.map((area, index) => (
              <a
                key={index}
                href={`/siding-services-in-${createCitySlug(area)}`}
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
            Ready to Update Your Siding?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free siding inspection and quote. Protect and beautify your property with quality siding.
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
