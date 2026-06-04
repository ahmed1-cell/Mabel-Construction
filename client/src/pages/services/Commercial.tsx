import { useState, useEffect } from "react";
import { Building, CheckCircle, Star, ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useResponsive from "@/hooks/use-responsive";

export default function Commercial() {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

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
    },
    {
      title: "Healthcare Facilities",
      description: "Specialized medical facilities designed for patient care and efficiency.",
      features: ["Exam Rooms", "Waiting Areas", "Reception", "Storage", "Accessibility"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      startingPrice: "From $80/sq ft"
    },
    {
      title: "Mixed-Use Developments",
      description: "Versatile spaces combining residential, commercial, and retail elements.",
      features: ["Multi-Purpose Design", "Flexible Layouts", "Shared Amenities", "Parking", "Green Spaces"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      startingPrice: "Custom Quote"
    }
  ];

  const projectTypes = [
    { name: "New Construction", description: "Complete building construction from ground up", timeline: "6-18 months" },
    { name: "Renovations", description: "Updating existing commercial spaces", timeline: "2-6 months" },
    { name: "Tenant Improvements", description: "Customizing spaces for specific tenants", timeline: "1-4 months" },
    { name: "Expansions", description: "Adding space to existing buildings", timeline: "3-12 months" }
  ];

  const locations = [
    "Minneapolis", "St. Paul", "Maple Grove", "Plymouth", 
    "Rogers", "Coon Rapids", "Anoka", "Brooklyn Park"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className={`relative ${
        isMobile ? 'py-16' : isTablet ? 'py-20' : 'py-24'
      } bg-gradient-to-br from-primary/10 via-background to-secondary/20`}>
        <div className="container-responsive">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className={`${
              isMobile ? 'text-3xl' : isTablet ? 'text-4xl md:text-5xl' : 'text-6xl'
            } font-black text-foreground ${
              isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-6'
            } leading-tight`}>
              COMMERCIAL
              <span className="block text-primary">CONSTRUCTION</span>
            </h1>
            <p className={`${
              isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
            } text-muted-foreground max-w-4xl mx-auto leading-relaxed ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              Professional commercial construction services for businesses of all sizes. From office buildings 
              to retail spaces, we deliver quality results that support your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`${
        isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-20'
      }`}>
        <div className="container-responsive">
          <div className={`text-center ${
            isMobile ? 'mb-8' : isTablet ? 'mb-12' : 'mb-16'
          }`}>
            <h2 className={`${
              isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'
            } font-black text-foreground ${
              isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-6'
            }`}>
              Commercial Construction Services
            </h2>
            <p className={`${
              isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
            } text-muted-foreground max-w-3xl mx-auto ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              We specialize in creating commercial spaces that enhance business operations and customer experience.
            </p>
          </div>

          <div className={`grid ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
          } ${
            isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-8'
          }`}>
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

      {/* Project Types */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Project Types
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We handle all types of commercial construction projects, from new builds to renovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{type.name}</h3>
                <p className="text-muted-foreground mb-3 text-sm">{type.description}</p>
                <div className="text-sm font-semibold text-primary">Timeline: {type.timeline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
                Why Choose Mabel Construction for Commercial Projects?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Commercial Expertise</h3>
                    <p className="text-muted-foreground">Specialized knowledge of commercial building codes and requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Project Management</h3>
                    <p className="text-muted-foreground">Dedicated project managers ensure on-time, on-budget delivery</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Minimal Disruption</h3>
                    <p className="text-muted-foreground">Work around your business operations to minimize downtime</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Quality Materials</h3>
                    <p className="text-muted-foreground">Commercial-grade materials for durability and performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Licensed & Bonded</h3>
                    <p className="text-muted-foreground">Fully licensed and bonded for commercial construction projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Modern Office Building"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Recent Commercial Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our latest commercial construction projects that demonstrate our expertise in creating functional and attractive business spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - Completed */}
            <div className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Office Building Renovation"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">Bloomington Office Complex</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">Completed</span>
                </div>
                <p className="text-muted-foreground mb-4">Complete renovation of a 20,000 sq ft office building with modern amenities, energy-efficient systems, and contemporary design. Includes new HVAC, electrical, and flooring throughout.</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <p><strong>Location:</strong> Bloomington</p>
                    <p><strong>Size:</strong> 20,000 sq ft</p>
                  </div>
                  <div>
                    <p><strong>Duration:</strong> 4 months</p>
                    <p><strong>Budget:</strong> $1.2M</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Modern Amenities</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Energy Efficient</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">New HVAC</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Contemporary Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - Under Construction */}
            <div className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                alt="Retail Space Construction"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">Richfield Shopping Center</h3>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full">Under Construction</span>
                </div>
                <p className="text-muted-foreground mb-4">Complete modernization of retail space with open floor plan, modern fixtures, and improved customer flow. Features new flooring, lighting, and display areas for enhanced shopping experience.</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <p><strong>Location:</strong> Richfield</p>
                    <p><strong>Size:</strong> 8,500 sq ft</p>
                  </div>
                  <div>
                    <p><strong>Expected:</strong> 6 weeks</p>
                    <p><strong>Budget:</strong> $450K</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Open Floor Plan</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Modern Fixtures</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Improved Flow</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">New Flooring</span>
                  </div>
                </div>
              </div>
            </div>
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

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-semibold text-foreground">{location}</span>
              </div>
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

      <Footer />
    </div>
  );
}
