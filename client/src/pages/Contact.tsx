import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
// removed per-page Navigation/Footer - Layout provides header/footer
import ContactForm from "@/components/ContactForm";
import useResponsive from "@/hooks/use-responsive";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["763-777-1962"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@buildwithmabel.com", "quotes@buildwithmabel.com"],
      description: "Send us your project details"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["10973 bluebird street, Coon rapids mn 55433"],
      description: "Visit our main office"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
      description: "We're here when you need us"
    }
  ];

  const serviceAreas = [
    "Minneapolis", "St. Paul", "Maple Grove", "Plymouth", 
    "Rogers", "Coon Rapids", "Anoka", "Brooklyn Park",
    "Eden Prairie", "Woodbury", "Burnsville", "Eagan"
  ];

  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // TODO: Implement actual form submission
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Layout provides header; do not render Navigation here */}

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
            } font-black text-foreground $${/* keep layout spacing */''} ${
              isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-6'
            } leading-tight`}>
              CONTACT
              <span className="block text-primary">US TODAY</span>
            </h1>
            <p className={`${
              isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
            } text-muted-foreground max-w-4xl mx-auto leading-relaxed ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              Ready to start your construction project? Get in touch with our expert team for a free consultation 
              and personalized quote. We're here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={`${
        isMobile ? 'py-12' : isTablet ? 'py-14' : 'py-16'
      } bg-secondary/30`}>
        <div className="container-responsive">
          <div className={`grid ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'
          } ${
            isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-6'
          }`}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="mb-8">
                <h2 className="text-3xl font-black text-foreground mb-4">
                  Get Your Free Quote
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700 mb-4">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setFormSubmitted(false)}
                    variant="outline"
                    className="border-green-500 text-green-700 hover:bg-green-50"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                // @ts-expect-error: ContactForm does not accept onSubmit prop in type definition
                <ContactForm onSubmit={handleFormSubmit} />
              )}
            </div>

            {/* Contact Details & Map */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="mb-8">
                <h2 className="text-3xl font-black text-foreground mb-4">
                  Why Choose Mabel Construction?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With over 20 years of experience in the Twin Cities, we've built a reputation for excellence, 
                  reliability, and customer satisfaction.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Licensed & Insured</h3>
                    <p className="text-muted-foreground text-sm">Fully licensed, bonded, and insured for your protection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Free Estimates</h3>
                    <p className="text-muted-foreground text-sm">No-obligation quotes for all projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Warranty Guaranteed</h3>
                    <p className="text-muted-foreground text-sm">Comprehensive warranty on all work performed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Local Expertise</h3>
                    <p className="text-muted-foreground text-sm">Deep knowledge of local building codes and regulations</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Areas We Serve</h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary/30 rounded-lg h-64 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  <p className="text-sm text-muted-foreground">10973 bluebird street, 1Coon rapids mn 55433</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our construction services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical construction project take?",
                answer: "Project timelines vary depending on scope and complexity. A kitchen remodel typically takes 4-6 weeks, while a full home renovation can take 3-6 months. We provide detailed timelines during the planning phase."
              },
              {
                question: "Do you provide free estimates?",
                answer: "Yes! We offer free, no-obligation estimates for all projects. Our team will visit your property, assess your needs, and provide a detailed quote within 24-48 hours."
              },
              {
                question: "Are you licensed and insured?",
                answer: "Absolutely. Mabel Construction is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage for your protection."
              },
              {
                question: "What areas do you serve?",
                answer: "We serve the entire Twin Cities metropolitan area, including Minneapolis, St. Paul, and surrounding suburbs. Contact us to confirm service availability in your specific location."
              },
              {
                question: "Do you offer financing options?",
                answer: "Yes, we work with several financing partners to help make your construction project affordable. We can discuss financing options during your consultation."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Contact us today and let's turn your construction dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:763-777-1962">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </a>

            {/* Open Gmail compose in a new tab with recipient pre-filled */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mabelconstruction.com&su=Contact%20from%20Website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-primary"
              aria-label="Send message via Gmail"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer removed — Layout renders footer */}
    </div>
  );
}
