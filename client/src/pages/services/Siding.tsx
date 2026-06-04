import { useState, useEffect } from "react";
import { Shield, CheckCircle, Star, ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useResponsive from "@/hooks/use-responsive";

export default function Siding() {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

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
      title: "Metal Siding",
      description: "Modern metal siding for contemporary homes and commercial buildings.",
      features: ["Modern Look", "Durable", "Low Maintenance", "Energy Efficient", "Recyclable"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      startingPrice: "From $10/sq ft"
    },
    {
      title: "Stone Veneer",
      description: "Elegant stone veneer siding for a luxurious, natural appearance.",
      features: ["Natural Stone", "Elegant Look", "Durable", "Low Maintenance", "Premium Finish"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      startingPrice: "From $20/sq ft"
    },
    {
      title: "Siding Repair",
      description: "Professional repair and maintenance services for existing siding.",
      features: ["Damage Assessment", "Color Matching", "Weather Sealing", "Maintenance", "Warranty"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      startingPrice: "From $5/sq ft"
    },
    {
      title: "Sliding Patio Doors",
      description: "Premium sliding patio doors with energy-efficient glass and smooth operation.",
      features: ["Energy Efficient Glass", "Smooth Operation", "Weatherproofing", "Security Locks", "Custom Sizing"],
      image: "/assets/Sliding/16.jpg",
      startingPrice: "From $1,500"
    },
    {
      title: "Sliding Closet Doors",
      description: "Custom sliding closet doors with mirrored panels and soft-close mechanisms.",
      features: ["Mirrored Panels", "Soft-Close", "Space Maximizing", "Modern Design", "Custom Hardware"],
      image: "/assets/Sliding/17.jpg",
      startingPrice: "From $800"
    },
    {
      title: "Barn Doors",
      description: "Rustic barn door installation with custom hardware and track systems.",
      features: ["Custom Hardware", "Track System", "Rustic Design", "Space Saving", "Unique Style"],
      image: "/assets/Sliding/18.jpg",
      startingPrice: "From $1,200"
    }
  ];

  const sidingTypes = [
    { name: "Vinyl", description: "Most popular and cost-effective option", lifespan: "20-40 years" },
    { name: "Fiber Cement", description: "Premium option with wood appearance", lifespan: "30-50 years" },
    { name: "Wood", description: "Classic natural beauty", lifespan: "20-40 years" },
    { name: "Metal", description: "Modern and durable", lifespan: "40-70 years" },
    { name: "Stone", description: "Luxury natural stone", lifespan: "50-100 years" }
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
        isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-20'
      } bg-gradient-to-br from-primary/10 via-background to-secondary/20`}>
        <div className="container-responsive">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className={`${
              isMobile ? 'text-3xl' : isTablet ? 'text-4xl md:text-5xl' : 'text-6xl'
            } font-black text-foreground ${
              isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-6'
            }`}>
              SIDING & SLIDING
              <span className="block text-primary">SERVICES</span>
            </h1>
            <p className={`${
              isMobile ? 'text-sm' : isTablet ? 'text-base md:text-lg' : 'text-xl'
            } text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              Protect and beautify your property with our expert siding installation and sliding door services. 
              From vinyl siding to custom sliding doors, we offer quality solutions for every style and budget.
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
              Complete Siding & Sliding Solutions
            </h2>
            <p className={`${
              isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
            } text-muted-foreground max-w-3xl mx-auto ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              From siding installation to sliding door services, we provide comprehensive solutions to protect and enhance your property.
            </p>
          </div>

          <div className={`grid ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
          } ${
            isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-8'
          }`}>
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
                  className={`w-full ${
                    isMobile ? 'h-40' : isTablet ? 'h-44' : 'h-48'
                  } object-cover`}
                />
                <div className={`${
                  isMobile ? 'p-4' : isTablet ? 'p-5' : 'p-6'
                }`}>
                  <h3 className={`${
                    isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-xl'
                  } font-bold text-foreground ${
                    isMobile ? 'mb-2' : 'mb-3'
                  }`}>{service.title}</h3>
                  <p className={`${
                    isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base'
                  } text-muted-foreground ${
                    isMobile ? 'mb-3' : 'mb-4'
                  }`}>{service.description}</p>
                  
                  <div className={`${
                    isMobile ? 'mb-3' : 'mb-4'
                  }`}>
                    <h4 className={`${
                      isMobile ? 'text-sm' : 'text-base'
                    } font-semibold text-foreground ${
                      isMobile ? 'mb-2' : 'mb-2'
                    }`}>Features:</h4>
                    <div className={`${
                      isMobile ? 'space-y-1' : 'space-y-1'
                    }`}>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className={`${
                            isMobile ? 'w-3 h-3' : 'w-4 h-4'
                          } text-primary mr-2 flex-shrink-0`} />
                          <span className={`${
                            isMobile ? 'text-xs' : 'text-sm'
                          } text-muted-foreground`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`flex items-center ${
                    isMobile ? 'flex-col gap-3' : 'justify-between'
                  }`}>
                    <span className={`${
                      isMobile ? 'text-base' : 'text-lg'
                    } font-bold text-primary`}>{service.startingPrice}</span>
                    <a href="/contact" className={`${isMobile ? 'w-full' : 'w-auto'}`}>
                      <Button variant="outline" size={isMobile ? "sm" : "sm"} className={`${
                        isMobile ? 'w-full' : 'w-auto'
                      } touch-target`}>
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

      {/* Siding Types */}
      <section className={`${
        isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-20'
      } bg-secondary/30`}>
        <div className="container-responsive">
          <div className={`text-center ${
            isMobile ? 'mb-8' : isTablet ? 'mb-12' : 'mb-16'
          }`}>
            <h2 className={`${
              isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'
            } font-black text-foreground ${
              isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-6'
            }`}>
              Siding Materials
            </h2>
            <p className={`${
              isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
            } text-muted-foreground max-w-3xl mx-auto ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              Choose from a variety of high-quality siding materials to match your style and budget.
            </p>
          </div>

          <div className={`grid ${
            isMobile ? 'grid-cols-2' : isTablet ? 'grid-cols-3' : 'grid-cols-5'
          } ${
            isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-6'
          }`}>
            {sidingTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg ${
                  isMobile ? 'p-4' : 'p-6'
                } text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Shield className={`${
                  isMobile ? 'w-8 h-8' : isTablet ? 'w-10 h-10' : 'w-12 h-12'
                } text-primary mx-auto ${
                  isMobile ? 'mb-3' : 'mb-4'
                }`} />
                <h3 className={`${
                  isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
                } font-bold text-foreground ${
                  isMobile ? 'mb-1' : 'mb-2'
                }`}>{type.name}</h3>
                <p className={`${
                  isMobile ? 'text-xs' : 'text-sm'
                } text-muted-foreground ${
                  isMobile ? 'mb-2' : 'mb-3'
                }`}>{type.description}</p>
                <div className={`${
                  isMobile ? 'text-xs' : 'text-sm'
                } font-semibold text-primary`}>Lifespan: {type.lifespan}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${
        isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-20'
      }`}>
        <div className="container-responsive">
          <div className={`grid ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-1' : 'grid-cols-2'
          } ${
            isMobile ? 'gap-8' : isTablet ? 'gap-10' : 'gap-12'
          } items-center`}>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className={`${
                isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'
              } font-black text-foreground ${
                isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-6'
              }`}>
                Why Choose Mabel Construction for Siding?
              </h2>
              <div className={`${
                isMobile ? 'space-y-4' : isTablet ? 'space-y-5' : 'space-y-6'
              }`}>
                <div className="flex items-start">
                  <CheckCircle className={`${
                    isMobile ? 'w-5 h-5' : 'w-6 h-6'
                  } text-primary mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className={`${
                      isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base'
                    } font-bold text-foreground ${
                      isMobile ? 'mb-1' : 'mb-1'
                    }`}>Expert Installation</h3>
                    <p className={`${
                      isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-sm'
                    } text-muted-foreground`}>Skilled craftsmen with years of siding installation experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className={`${
                    isMobile ? 'w-5 h-5' : 'w-6 h-6'
                  } text-primary mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className={`${
                      isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base'
                    } font-bold text-foreground ${
                      isMobile ? 'mb-1' : 'mb-1'
                    }`}>Quality Materials</h3>
                    <p className={`${
                      isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-sm'
                    } text-muted-foreground`}>We use only premium siding materials from trusted manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Weather Protection</h3>
                    <p className="text-muted-foreground">Proper installation ensures maximum protection from the elements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Energy Efficiency</h3>
                    <p className="text-muted-foreground">Proper siding installation improves your home's energy efficiency</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Warranty Protection</h3>
                    <p className="text-muted-foreground">Comprehensive warranties on both materials and workmanship</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
                alt="Beautiful Home Siding"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
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
              Recent Siding Projects
            </h2>
            <p className={`${
              isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
            } text-muted-foreground max-w-3xl mx-auto ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              See our latest siding and sliding door installations that showcase our quality workmanship and attention to detail.
            </p>
          </div>

          <div className={`grid ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'
          } ${
            isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-8'
          }`}>
            {/* Project 1 - Completed */}
            <div className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
                alt="Vinyl Siding Installation"
                className={`w-full ${
                  isMobile ? 'h-40' : isTablet ? 'h-44' : 'h-48'
                } object-cover`}
              />
              <div className={`${
                isMobile ? 'p-4' : isTablet ? 'p-5' : 'p-6'
              }`}>
                <div className={`flex items-center ${
                  isMobile ? 'flex-col gap-2' : 'justify-between'
                } ${
                  isMobile ? 'mb-2' : 'mb-2'
                }`}>
                  <h3 className={`${
                    isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-lg'
                  } font-bold text-foreground`}>Minneapolis Home Siding</h3>
                  <span className={`${
                    isMobile ? 'px-2 py-1 text-xs' : 'px-2 py-1 text-xs'
                  } bg-green-100 text-green-800 font-semibold rounded-full`}>Completed</span>
                </div>
                <p className={`${
                  isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-sm'
                } text-muted-foreground ${
                  isMobile ? 'mb-3' : 'mb-3'
                }`}>Complete vinyl siding replacement for a 2,500 sq ft home with energy-efficient insulation and custom trim work.</p>
                <div className={`${
                  isMobile ? 'text-xs' : 'text-sm'
                } text-muted-foreground`}>
                  <p><strong>Location:</strong> Minneapolis</p>
                  <p><strong>Size:</strong> 2,500 sq ft</p>
                  <p><strong>Duration:</strong> 5 days</p>
                </div>
              </div>
            </div>

            {/* Project 2 - Under Construction */}
            <div className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
                alt="Fiber Cement Siding Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">St. Paul Luxury Siding</h3>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">Under Construction</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">Premium fiber cement siding installation with stone veneer accents and custom color matching for a modern aesthetic.</p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Location:</strong> St. Paul</p>
                  <p><strong>Size:</strong> 3,200 sq ft</p>
                  <p><strong>Expected:</strong> 8 days</p>
                </div>
              </div>
            </div>

            {/* Project 3 - Completed */}
            <div className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
                alt="Sliding Door Installation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">Maple Grove Patio Doors</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Completed</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">Custom sliding patio door installation with energy-efficient glass and weatherproofing for year-round comfort.</p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Location:</strong> Maple Grove</p>
                  <p><strong>Type:</strong> 8ft Sliding Doors</p>
                  <p><strong>Duration:</strong> 2 days</p>
                </div>
              </div>
            </div>

            {/* Project 4 - Under Construction */}
            <div className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                alt="Commercial Siding Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">Plymouth Office Building</h3>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">Under Construction</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">Commercial metal siding installation with modern architectural panels and integrated ventilation systems.</p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Location:</strong> Plymouth</p>
                  <p><strong>Size:</strong> 15,000 sq ft</p>
                  <p><strong>Expected:</strong> 12 days</p>
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
              Siding Services Near You
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide expert siding services throughout the Twin Cities metropolitan area.
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

      <Footer />
    </div>
  );
}
