import { useState, useEffect } from "react";
import { Award, Users, Clock, Shield, CheckCircle, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import useResponsive from "@/hooks/use-responsive";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "20+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Expert Team Members", icon: Users }
  ];

  const values = [
    {
      title: "Quality Craftsmanship",
      description: "We never compromise on quality. Every project is built to last with premium materials and expert workmanship.",
      icon: Shield
    },
    {
      title: "Client-Focused Approach",
      description: "Your vision is our priority. We work closely with you throughout every step of the construction process.",
      icon: Users
    },
    {
      title: "Timely Delivery",
      description: "We respect your time and budget. Our projects are completed on schedule and within budget.",
      icon: Clock
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind and protection.",
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      quote: "Mabel Construction transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations.",
      author: "Sarah Johnson",
      location: "Minneapolis, MN",
      rating: 5
    },
    {
      quote: "From start to finish, the team was professional, punctual, and delivered exceptional quality. Our new roof looks amazing!",
      author: "Michael Chen",
      location: "St. Paul, MN",
      rating: 5
    },
    {
      quote: "The commercial renovation project was completed ahead of schedule. Mabel Construction is now our go-to contractor for all projects.",
      author: "Lisa Rodriguez",
      location: "Maple Grove, MN",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              ABOUT
              <span className="block text-primary">MABEL CONSTRUCTION</span>
            </h1>
            <p className={`${
              isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
            } text-muted-foreground max-w-4xl mx-auto leading-relaxed ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              Building excellence in the Twin Cities for over two decades. We're more than just contractors – 
              we're your partners in bringing your construction dreams to life.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${
        isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-16'
      } bg-secondary/30`}>
        <div className="container-responsive">
          <div className={`grid ${
            isMobile ? 'grid-cols-2' : isTablet ? 'grid-cols-2' : 'grid-cols-4'
          } ${
            isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-8'
          }`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`inline-flex items-center justify-center ${
                  isMobile ? 'w-12 h-12' : isTablet ? 'w-14 h-14' : 'w-16 h-16'
                } bg-primary/20 rounded-full ${
                  isMobile ? 'mb-3' : 'mb-4'
                }`}>
                  <stat.icon className={`${
                    isMobile ? 'w-6 h-6' : isTablet ? 'w-7 h-7' : 'w-8 h-8'
                  } text-primary`} />
                </div>
                <div className={`${
                  isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'
                } font-black text-primary ${
                  isMobile ? 'mb-1' : 'mb-2'
                }`}>{stat.number}</div>
                <div className={`${
                  isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-base'
                } text-muted-foreground font-medium`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
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
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2004, Mabel Construction began as a small family business with a simple mission: 
                to deliver exceptional construction services that exceed client expectations. What started as 
                a local roofing company has grown into a full-service construction firm serving the entire 
                Twin Cities metropolitan area.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we're proud to be one of the most trusted construction companies in Minnesota, 
                known for our commitment to quality, integrity, and customer satisfaction. Our team of 
                skilled professionals brings decades of combined experience to every project.
              </p>
            </div>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                alt="Mabel Construction Team"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className={`${
              isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
            } text-muted-foreground max-w-3xl mx-auto ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              These core values guide everything we do and ensure we deliver the best possible experience for our clients.
            </p>
          </div>
          <div className={`grid ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'
          } ${
            isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-8'
          }`}>
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`inline-flex items-center justify-center ${
                  isMobile ? 'w-12 h-12' : isTablet ? 'w-14 h-14' : 'w-16 h-16'
                } bg-primary/20 rounded-full ${
                  isMobile ? 'mb-4' : isTablet ? 'mb-5' : 'mb-6'
                }`}>
                  <value.icon className={`${
                    isMobile ? 'w-6 h-6' : isTablet ? 'w-7 h-7' : 'w-8 h-8'
                  } text-primary`} />
                </div>
                <h3 className={`${
                  isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-xl'
                } font-bold text-foreground ${
                  isMobile ? 'mb-3' : isTablet ? 'mb-4' : 'mb-4'
                }`}>{value.title}</h3>
                <p className={`${
                  isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base'
                } text-muted-foreground leading-relaxed`}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className={`${
              isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
            } text-muted-foreground max-w-3xl mx-auto ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Mabel Construction.
            </p>
          </div>
          <div className={`grid ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
          } ${
            isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-8'
          }`}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`flex items-center ${
                  isMobile ? 'mb-3' : 'mb-4'
                }`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={`${
                      isMobile ? 'w-4 h-4' : 'w-5 h-5'
                    } text-yellow-400 fill-current`} />
                  ))}
                </div>
                <Quote className={`${
                  isMobile ? 'w-6 h-6' : 'w-8 h-8'
                } text-primary/60 ${
                  isMobile ? 'mb-3' : 'mb-4'
                }`} />
                <p className={`${
                  isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base'
                } text-muted-foreground ${
                  isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-6'
                } leading-relaxed`}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className={`${
                    isMobile ? 'text-sm' : 'text-base'
                  } font-semibold text-foreground`}>{testimonial.author}</div>
                  <div className={`${
                    isMobile ? 'text-xs' : 'text-sm'
                  } text-muted-foreground`}>{testimonial.location}</div>
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
            Let's discuss your construction needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Free Quote
            </Button>
            <a href="tel:763-777-1962">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary w-full"
              >
              Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* DO NOT render Footer here — Layout renders the footer once */}
    </div>
  );
}
