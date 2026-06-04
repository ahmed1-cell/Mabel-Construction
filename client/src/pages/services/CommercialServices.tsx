import React, { useState, useEffect } from "react";
import { Building, CheckCircle, Star, ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";

export default function CommercialServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const commercialServices = [
    {
      title: "Office Buildings",
      description: "Modern office spaces designed for productivity and employee satisfaction.",
      features: ["Open Floor Plans", "Conference Rooms", "Break Areas", "Reception Areas", "Storage Solutions"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      startingPrice: "From $50/sq ft"
    },
    {
      title: "Retail Spaces",
      description: "Attractive retail environments that drive customer engagement and sales.",
      features: ["Storefront Design", "Display Areas", "Checkout Counters", "Storage", "Lighting"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      startingPrice: "From $40/sq ft"
    },
    {
      title: "Restaurants",
      description: "Functional and inviting restaurant spaces that enhance the dining experience.",
      features: ["Kitchen Design", "Dining Areas", "Bar Counters", "Restrooms", "Storage"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      startingPrice: "From $60/sq ft"
    },
    {
      title: "Warehouses",
      description: "Efficient warehouse facilities optimized for logistics and operations.",
      features: ["Loading Docks", "Storage Systems", "Office Space", "Security", "HVAC"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      startingPrice: "From $30/sq ft"
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
    "name": "Commercial Construction Services",
    "description": "Professional commercial construction services for office buildings, retail spaces, restaurants, warehouses, and mixed-use developments.",
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
    "serviceType": "Commercial Construction Services"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Commercial Construction Services - Office Buildings & Retail Spaces | Mabel Construction"
        description="Professional commercial construction services for office buildings, retail spaces, restaurants, and warehouses. Serving Minneapolis, St. Paul, and surrounding areas."
        keywords="commercial construction services, office buildings, retail construction, restaurant construction, warehouse construction, Minneapolis commercial"
        canonicalUrl="https://buildwithmabel.com/commercial-services"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
              COMMERCIAL
              <span className="block text-primary">CONSTRUCTION SERVICES</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional commercial construction services for businesses of all sizes. From office buildings 
              to retail spaces, we deliver quality results that support your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Commercial Construction Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We specialize in creating commercial spaces that enhance business operations and customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => (
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
              Commercial Services Near You
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide commercial construction services throughout the Twin Cities metropolitan area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {serviceAreas.map((area, index) => (
              <a
                key={index}
                href={`/commercial-services-in-${createCitySlug(area)}`}
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
            Ready to Build Your Business Space?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your commercial construction project. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
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
