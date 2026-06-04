import ContactForm from "./ContactForm";
import useResponsive from "@/hooks/use-responsive";

export default function ContactSection() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <section id="contact" className={`${
      isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-20'
    } bg-secondary/30`}>
      <div className="container-responsive">
        {/* Section Header */}
        <div className={`text-center ${
          isMobile ? 'mb-8' : isTablet ? 'mb-12' : 'mb-16'
        }`}>
          <h2 className={`${
            isMobile ? 'text-2xl' : isTablet ? 'text-3xl md:text-4xl' : 'text-5xl'
          } font-black text-foreground ${
            isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-6'
          }`}>
            START YOUR
            <span className="block text-primary">PROJECT TODAY</span>
          </h2>
          <p className={`${
            isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
          } text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
            isMobile ? 'px-4' : 'px-0'
          }`}>
            Ready to transform your vision into reality? Get in touch with our expert team 
            for a free consultation and personalized project quote.
          </p>
        </div>

        {/* Contact Form */}
        <div className={`${
          isMobile ? 'max-w-full' : isTablet ? 'max-w-4xl' : 'max-w-5xl'
        } mx-auto`}>
          <ContactForm />
        </div>

        {/* Additional Info */}
        <div className={`text-center ${
          isMobile ? 'mt-8 pt-8' : isTablet ? 'mt-12 pt-12' : 'mt-16 pt-16'
        } border-t border-border`}>
          <h3 className={`${
            isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-xl'
          } font-bold text-foreground ${
            isMobile ? 'mb-4' : 'mb-4'
          }`}>
            Why Choose Mabel Construction?
          </h3>
          <div className={`grid ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-3' : 'grid-cols-3'
          } ${
            isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-8'
          } ${
            isMobile ? 'mt-6' : 'mt-8'
          }`}>
            <div className="text-center">
              <div className={`${
                isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-3xl'
              } font-black text-primary ${
                isMobile ? 'mb-2' : 'mb-2'
              }`}>20+</div>
              <p className={`${
                isMobile ? 'text-sm' : 'text-base'
              } text-muted-foreground`}>Years Experience</p>
            </div>
            <div className="text-center">
              <div className={`${
                isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-3xl'
              } font-black text-primary ${
                isMobile ? 'mb-2' : 'mb-2'
              }`}>500+</div>
              <p className={`${
                isMobile ? 'text-sm' : 'text-base'
              } text-muted-foreground`}>Projects Completed</p>
            </div>
            <div className="text-center">
              <div className={`${
                isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-3xl'
              } font-black text-primary ${
                isMobile ? 'mb-2' : 'mb-2'
              }`}>100%</div>
              <p className={`${
                isMobile ? 'text-sm' : 'text-base'
              } text-muted-foreground`}>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}