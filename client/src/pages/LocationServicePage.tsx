import React, { useState, useEffect } from "react";
import { MapPin, CheckCircle, Star, ArrowRight, Calendar, Phone, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface LocationServicePageProps {
  service: 'roofing' | 'remodeling' | 'commercial' | 'siding' | 'window';
}

export default function LocationServicePage({ service }: LocationServicePageProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Extract city from current URL path
  const getCurrentCity = () => {
    const path = window.location.pathname;
    const cityMatch = path.match(/services-in-(.+)$/);
    if (cityMatch) {
      let cityName = cityMatch[1].replace(/-/g, ' ');
      // Handle special cases
      if (cityName.toLowerCase() === 'st paul') {
        return 'St. Paul';
      }
      if (cityName.toLowerCase() === 'st michael') {
        return 'St. Michael';
      }
      if (cityName.toLowerCase() === 'north oaks') {
        return 'North Oaks';
      }
      if (cityName.toLowerCase() === 'maple grove') {
        return 'Maple Grove';
      }
      if (cityName.toLowerCase() === 'coon rapids') {
        return 'Coon Rapids';
      }
      if (cityName.toLowerCase() === 'columbia heights') {
        return 'Columbia Heights';
      }
      // Default capitalization for other cities
      return cityName.replace(/\b\w/g, l => l.toUpperCase());
    }
    return 'Minneapolis';
  };
  
  const city = getCurrentCity();
  
  // Service configurations
  const serviceConfig = {
    roofing: {
      title: "Roofing Services",
      description: "Expert roofing installation, repair, and maintenance",
      primaryKeyword: "Roofing Services",
      services: [
        "Residential Roofing Installation",
        "Commercial Roofing Systems", 
        "Roof Repair & Maintenance",
        "Emergency Roofing Services",
        "Gutter Installation & Repair",
        "Roof Inspections"
      ],
      heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop",
      startingPrice: "From $5,000",
      icon: "roofing"
    },
    remodeling: {
      title: "Remodeling Services", 
      description: "Complete home renovation and remodeling solutions",
      primaryKeyword: "Remodeling Services",
      services: [
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Basement Finishing",
        "Room Additions",
        "Whole House Remodeling",
        "Historic Restoration"
      ],
      heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop",
      startingPrice: "From $15,000",
      icon: "remodeling"
    },
    commercial: {
      title: "Commercial Services",
      description: "Professional commercial construction and renovation",
      primaryKeyword: "Commercial Construction Services", 
      services: [
        "Office Building Construction",
        "Retail Space Development",
        "Restaurant Construction",
        "Warehouse Facilities",
        "Mixed-Use Developments",
        "Tenant Improvements"
      ],
      heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
      startingPrice: "From $50/sq ft",
      icon: "🏢"
    },
    siding: {
      title: "Siding Services",
      description: "Professional siding installation and repair services",
      primaryKeyword: "Siding Installation & Repair",
      services: [
        "Vinyl Siding Installation",
        "Fiber Cement Siding",
        "Wood Siding Installation",
        "Siding Repair & Maintenance",
        "Trim & Fascia Work",
        "Insulation Services"
      ],
      heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop",
      startingPrice: "From $8/sq ft",
      icon: "🏡"
    },
    window: {
      title: "Window Services",
      description: "Expert window replacement and installation services",
      primaryKeyword: "Window Replacement & Installation",
      services: [
        "Window Replacement",
        "New Window Installation", 
        "Window Repair Services",
        "Storm Window Installation",
        "Energy-Efficient Upgrades",
        "Custom Window Solutions"
      ],
      heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop",
      startingPrice: "From $400/window",
      icon: "🪟"
    }
  };

  const config = serviceConfig[service];
  
  // City-specific data
  const cityData = {
    coordinates: { lat: 44.9778, lng: -93.2650 }, // Default to Minneapolis
    population: "400,000+",
    established: "1867",
    zipCodes: ["55401", "55402", "55403"]
  };

  // Local testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: city,
      rating: 5,
      text: `Mabel Construction did an amazing job with our ${service} project. Professional, on-time, and excellent quality work.`,
      project: config.title
    },
    {
      name: "Mike Thompson", 
      location: city,
      rating: 5,
      text: `Highly recommend Mabel Construction for ${service} services in ${city}. They exceeded our expectations.`,
      project: config.title
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: `How much do ${config.title.toLowerCase()} cost in ${city}?`,
      answer: `${config.title} costs in ${city} typically start at ${config.startingPrice}. The final cost depends on the scope of work, materials chosen, and specific project requirements. We provide free estimates for all projects.`
    },
    {
      question: `Do you provide free estimates for ${config.title.toLowerCase()} in ${city}?`,
      answer: `Yes, we provide free, no-obligation estimates for all ${config.title.toLowerCase()} projects in ${city}. Our team will assess your needs and provide a detailed quote.`
    },
    {
      question: `How long do ${config.title.toLowerCase()} projects take in ${city}?`,
      answer: `Project timelines vary based on scope and complexity. Most ${config.title.toLowerCase()} projects in ${city} are completed within 1-4 weeks. We'll provide a detailed timeline during your consultation.`
    },
    {
      question: `Are you licensed and insured for ${config.title.toLowerCase()} work in ${city}?`,
      answer: `Yes, Mabel Construction is fully licensed, bonded, and insured for all ${config.title.toLowerCase()} work in ${city} and throughout Minnesota. We carry comprehensive liability and workers' compensation insurance.`
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${config.title} in ${city}`,
    "description": `Professional ${config.description} in ${city}, Minnesota. ${config.primaryKeyword} by Mabel Construction.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mabel Construction",
      "telephone": "763-777-1962",
      "address": {
        "@type": "PostalAddress", 
        "streetAddress": "10973 bluebird street",
        "addressLocality": "Minneapolis",
        "addressRegion": "MN",
        "postalCode": "55433"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": `${city}, MN`
    },
    "serviceType": config.primaryKeyword,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${config.title} in ${city}, Mabel Construction`}
        description={`Professional ${config.description} in ${city}, Minnesota. Expert ${config.primaryKeyword.toLowerCase()} with quality craftsmanship and reliable service. Free estimates available.`}
        keywords={`${config.primaryKeyword.toLowerCase()}, ${city.toLowerCase()} ${service}, ${service} contractors ${city.toLowerCase()}, ${city.toLowerCase()} construction`}
        canonicalUrl={`https://buildwithmabel.com/${service}-services-in-${city.toLowerCase().replace(/\s+/g, '-')}`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${config.heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center bg-primary/90 text-primary-foreground px-4 py-2 rounded-full mb-6">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-semibold">Serving {city}, Minnesota</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg">
              {config.icon} {config.title.toUpperCase()}
              <span className="block text-primary">IN {city.toUpperCase()}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Expert {config.description.toLowerCase()} in {city}. Quality craftsmanship, 
              reliable service, and competitive pricing for all your {service} needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Free Estimate
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Our {config.title} in {city}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive {config.description.toLowerCase()} throughout {city} and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map((serviceItem, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold text-foreground">{serviceItem}</h3>
                </div>
                <p className="text-muted-foreground">
                  Professional {serviceItem.toLowerCase()} services in {city} with quality materials and expert craftsmanship.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              {config.title} Service Area in {city}
            </h2>
            <p className="text-lg text-muted-foreground">
              We proudly serve {city} and the surrounding Twin Cities metropolitan area.
            </p>
          </div>

          <div className="bg-card border border-card-border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <div 
                className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative text-center text-white z-10">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">{city}, Minnesota</h3>
                  <p className="text-lg mb-4">Service Area</p>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(city + ', Minnesota')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-bold text-foreground mb-1">Population</h4>
                  <p className="text-muted-foreground">{cityData.population}</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-bold text-foreground mb-1">Established</h4>
                  <p className="text-muted-foreground">{cityData.established}</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-bold text-foreground mb-1">Service Time</h4>
                  <p className="text-muted-foreground">Same Day Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              What {city} Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real reviews from satisfied customers in {city}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our {config.title.toLowerCase()} in {city}.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ready for {config.title} in {city}?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact Mabel Construction today for expert {config.description.toLowerCase()} in {city}. 
            Free estimates and professional service guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Estimate
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
