import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
// removed per-page Navigation/Footer - Layout provides header/footer
import useResponsive from "@/hooks/use-responsive";

export default function Locations() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const locations = [
    {
      city: "Minneapolis",
      address: "10973 bluebird street, Coon rapids mn 55433",
      phone: "763-777-1962",
      email: "minneapolis@buildwithmabel.com",
      hours: {
        weekdays: "7:00 AM - 6:00 PM",
        saturday: "8:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      services: ["Residential Construction", "Commercial Projects", "Roofing", "Remodeling", "Siding", "Windows"],
      description: "Our main office and primary service location serving the heart of Minneapolis and surrounding areas.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      coordinates: { lat: 44.9778, lng: -93.2650 }
    },
    {
      city: "St. Paul",
      address: "10973 bluebird street, Coon rapids mn 55433",
      phone: "763-777-1962",
      email: "stpaul@buildwithmabel.com",
      hours: {
        weekdays: "7:00 AM - 6:00 PM",
        saturday: "8:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      services: ["Commercial Construction", "Office Buildings", "Retail Spaces", "Renovations", "Structural Work"],
      description: "Serving St. Paul and the east metro with specialized commercial construction services.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      coordinates: { lat: 44.9537, lng: -93.0900 }
    },
    {
      city: "Maple Grove",
      address: "10973 bluebird street, Coon rapids mn 55433",
      phone: "763-777-1962",
      email: "maplegrove@buildwithmabel.com",
      hours: {
        weekdays: "7:00 AM - 6:00 PM",
        saturday: "8:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      services: ["Custom Homes", "Kitchen Remodeling", "Bathroom Renovations", "Additions", "Finishing Services"],
      description: "Specializing in custom home construction and luxury renovations in the northwest suburbs.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      coordinates: { lat: 45.0725, lng: -93.4558 }
    },
    {
      city: "Plymouth",
      address: "10973 bluebird street, Coon rapids mn 55433",
      phone: "763-777-1962",
      email: "plymouth@buildwithmabel.com",
      hours: {
        weekdays: "7:00 AM - 6:00 PM",
        saturday: "8:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      services: ["Residential Construction", "Basement Finishing", "Deck Construction", "Siding", "Windows"],
      description: "Full-service construction company serving Plymouth and surrounding communities.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      coordinates: { lat: 45.0105, lng: -93.4558 }
    },
    {
      city: "Rogers",
      address: "10973 bluebird street, Coon rapids mn 55433",
      phone: "763-777-1962",
      email: "rogers@buildwithmabel.com",
      hours: {
        weekdays: "7:00 AM - 6:00 PM",
        saturday: "8:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      services: ["Commercial Construction", "Retail Centers", "Restaurants", "Warehouses", "Office Buildings"],
      description: "Commercial construction specialists serving Rogers and the northwest metro area.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      coordinates: { lat: 45.1889, lng: -93.5536 }
    },
    {
      city: "Coon Rapids",
      address: "10973 bluebird street, Coon rapids mn 55433",
      phone: "763-777-1962",
      email: "coonrapids@buildwithmabel.com",
      hours: {
        weekdays: "7:00 AM - 6:00 PM",
        saturday: "8:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      services: ["Home Additions", "Kitchen Remodeling", "Bathroom Renovations", "Basement Finishing", "Roofing"],
      description: "Residential renovation experts serving Coon Rapids and the north metro area.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      coordinates: { lat: 45.1197, lng: -93.2877 }
    },
    {
      city: "Anoka",
      address: "10973 bluebird street, Coon rapids mn 55433",
      phone: "763-777-1962",
      email: "anoka@buildwithmabel.com",
      hours: {
        weekdays: "7:00 AM - 6:00 PM",
        saturday: "8:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      services: ["Historic Restoration", "Custom Homes", "Remodeling", "Structural Work", "Finishing Services"],
      description: "Historic preservation and custom construction specialists in Anoka County.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      coordinates: { lat: 45.1977, lng: -93.3872 }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Minneapolis",
      rating: 5,
      comment: "Mabel Construction transformed our Minneapolis home with a beautiful kitchen remodel. Professional, timely, and excellent quality work."
    },
    {
      name: "Michael Chen",
      location: "St. Paul",
      rating: 5,
      comment: "The commercial office renovation in St. Paul exceeded our expectations. Great team and outstanding results."
    },
    {
      name: "Lisa Rodriguez",
      location: "Maple Grove",
      rating: 5,
      comment: "Our custom home in Maple Grove is absolutely stunning. Mabel Construction made our dream home a reality."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation removed — Layout renders header */}

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
              OUR
              <span className="block text-primary">LOCATIONS</span>
            </h1>
            <p className={`${
              isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
            } text-muted-foreground max-w-4xl mx-auto leading-relaxed ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              Serving the Twin Cities and surrounding areas with multiple convenient locations. 
              Find the Mabel Construction office nearest you for personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4">
              Choose Your Location
            </h2>
            <p className="text-lg text-muted-foreground">
              Select a location to view detailed information and services available in your area.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {locations.map((location, index) => (
              <Button
                key={index}
                variant={selectedLocation === index ? "default" : "outline"}
                onClick={() => setSelectedLocation(index)}
                className="p-4 h-auto flex flex-col items-center hover-elevate active-elevate-2"
              >
                <MapPin className="w-6 h-6 mb-2" />
                <span className="text-sm font-semibold text-center">{location.city}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Location Details */}
      <section id="location-details" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Info */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
                  {locations[selectedLocation].city} Office
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {locations[selectedLocation].description}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">{locations[selectedLocation].address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">{locations[selectedLocation].phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">{locations[selectedLocation].email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mon-Fri: {locations[selectedLocation].hours.weekdays}</p>
                      <p>Sat: {locations[selectedLocation].hours.saturday}</p>
                      <p>Sun: {locations[selectedLocation].hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Services Available</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {locations[selectedLocation].services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => { window.location.href = "/contact"; }}>
                  Get Free Quote
                </Button>
              </div>
            </div>

            {/* Location Image */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img
                src={locations[selectedLocation].image}
                alt={`${locations[selectedLocation].city} Office`}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              
              {/* Map Placeholder */}
              <div className="mt-6 bg-secondary/30 rounded-lg h-64 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">{locations[selectedLocation].address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Coverage */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              Complete Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We proudly serve the entire Twin Cities metropolitan area with multiple locations 
              to ensure convenient access to our construction services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">{location.city}</h3>
                <p className="text-sm text-muted-foreground mb-3">{location.services.length} Services</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    setSelectedLocation(index);
                    document.getElementById('location-details')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from satisfied customers across all our service areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
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
            Contact the Mabel Construction location nearest you for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Find Your Location
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

      {/* Footer removed — Layout renders footer */}
    </div>
  );
}
