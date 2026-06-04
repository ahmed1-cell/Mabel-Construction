import React, { useState, useEffect } from "react";
import { Home, Building, Wrench, Hammer, PaintBucket, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Home,
      title: "Custom Home Building",
      description: "From concept to completion, we build your dream home with meticulous attention to detail and modern construction techniques.",
      features: [
        "Architectural Design Consultation", 
        "Luxury Finishes & Materials",
        "Energy-Efficient Construction",
        "Smart Home Integration",
        "Custom Floor Plans",
        "Green Building Practices"
      ],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      startingPrice: "From $200/sq ft"
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Professional commercial spaces that enhance your business image and provide functional, efficient work environments.",
      features: [
        "Office Buildings & Complexes",
        "Retail & Restaurant Spaces", 
        "Warehouse & Industrial",
        "Tenant Improvement Projects",
        "Mixed-Use Developments",
        "Healthcare Facilities"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      startingPrice: "Custom Pricing"
    },
    {
      icon: Wrench,
      title: "Renovations & Remodeling",
      description: "Transform your existing space with our expert renovation services that breathe new life into any property.",
      features: [
        "Kitchen & Bathroom Remodeling",
        "Basement Finishing",
        "Room Additions",
        "Exterior Renovations",
        "Historic Restoration",
        "Universal Design Features"
      ],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      startingPrice: "From $50/sq ft"
    },
    {
      icon: Hammer,
      title: "Structural Work",
      description: "Expert structural engineering and construction services ensuring safety, durability, and code compliance.",
      features: [
        "Foundation Repair & Installation",
        "Load-Bearing Wall Modifications",
        "Structural Reinforcement", 
        "Seismic Retrofitting",
        "Beam & Column Installation",
        "Structural Inspections"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      startingPrice: "From $100/sq ft"
    },
    {
      icon: PaintBucket,
      title: "Finishing Services",
      description: "Professional finishing touches that showcase the quality and craftsmanship of your construction project.",
      features: [
        "Interior & Exterior Painting",
        "Flooring Installation",
        "Trim & Millwork",
        "Custom Cabinetry",
        "Countertop Installation",
        "Hardware & Fixtures"
      ],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      startingPrice: "From $30/sq ft"
    },
    {
      icon: Zap,
      title: "Specialty Services",
      description: "Comprehensive construction solutions including electrical, plumbing, and emergency repair services.",
      features: [
        "Emergency Repair Services",
        "Electrical & Plumbing",
        "HVAC Installation",
        "Disaster Restoration",
        "Water Damage Repair",
        "Mold Remediation"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      startingPrice: "Service Call"
    }
  ];

  const serviceHubs = [
    { name: "Roofing", href: "/roofing-services", description: "Expert roofing solutions for residential and commercial properties" },
    { name: "Remodeling", href: "/remodeling-services", description: "Transform your space with our remodeling expertise" },
    { name: "Commercial", href: "/commercial-services", description: "Professional commercial construction services" },
    { name: "Siding", href: "/siding-services", description: "Protect and beautify your property with quality siding" },
    { name: "Windows", href: "/window-services", description: "Energy-efficient window installation and replacement" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
              OUR
              <span className="block text-primary">SERVICES</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction services designed to meet all your building needs. 
              From custom homes to commercial projects, we deliver excellence in every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Service Hubs */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              Service Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our specialized service areas for detailed information and pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceHubs.map((hub, index) => (
              <a
                key={index}
                href={hub.href}
                className={`bg-card border border-card-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col h-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {hub.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">{hub.description}</p>
                <div className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every project is unique, and so are our solutions. Here's what we can do for you.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <Button
                key={index}
                variant={selectedService === index ? "default" : "outline"}
                onClick={() => setSelectedService(index)}
                className="px-6 py-3 hover-elevate active-elevate-2"
              >
                {service.title}
              </Button>
            ))}
          </div>

          {/* Selected Service Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                  {React.createElement(services[selectedService].icon, { className: "w-8 h-8 text-primary" })}
                </div>
              <h3 className="text-3xl font-black text-foreground mb-4">
                {services[selectedService].title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {services[selectedService].description}
              </p>
              <div className="mb-8">
                <h4 className="text-xl font-bold text-foreground mb-4">What's Included:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Free Quote
                  </Button>
                </a>
                <a href="/projects">
                  <Button size="lg" variant="outline">
                    View Portfolio
                  </Button>
                </a>
              </div>
            </div>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img
                src={services[selectedService].image}
                alt={services[selectedService].title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-2xl font-bold text-primary">
                  {services[selectedService].startingPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a proven process to ensure your project is completed on time, on budget, and to your satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We discuss your vision, needs, and budget" },
              { step: "02", title: "Planning", description: "Detailed project planning and timeline development" },
              { step: "03", title: "Construction", description: "Expert execution with regular progress updates" },
              { step: "04", title: "Completion", description: "Final walkthrough and project handover" }
            ].map((process, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-black mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Free Quote
              </Button>
            </a>
            <a href="tel:763-777-1962">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
               Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
