import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import useResponsive from "@/hooks/use-responsive";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    
    // //todo: remove mock functionality - implement real form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className={`text-center ${
        isMobile ? 'py-8' : isTablet ? 'py-10' : 'py-12'
      }`}>
        <div className={`${
          isMobile ? 'w-16 h-16' : isTablet ? 'w-18 h-18' : 'w-20 h-20'
        } bg-primary rounded-full flex items-center justify-center mx-auto ${
          isMobile ? 'mb-4' : 'mb-6'
        }`}>
          <Send className={`${
            isMobile ? 'w-8 h-8' : isTablet ? 'w-9 h-9' : 'w-10 h-10'
          } text-primary-foreground`} />
        </div>
        <h3 className={`${
          isMobile ? 'text-xl' : isTablet ? 'text-2xl' : 'text-2xl'
        } font-bold text-foreground ${
          isMobile ? 'mb-3' : 'mb-4'
        }`}>Thank You!</h3>
        <p className={`${
          isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base'
        } text-muted-foreground`}>
          We've received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid ${
      isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-1' : 'grid-cols-2'
    } ${
      isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-12'
    }`}>
      {/* Contact Information */}
      <div>
        <h3 className={`${
          isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'
        } font-bold text-foreground ${
          isMobile ? 'mb-4' : isTablet ? 'mb-5' : 'mb-6'
        }`}>Get In Touch</h3>
        <p className={`${
          isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base'
        } text-muted-foreground ${
          isMobile ? 'mb-6' : isTablet ? 'mb-7' : 'mb-8'
        } leading-relaxed`}>
          Ready to start your construction project? Contact us today for a free consultation 
          and let's discuss how we can bring your vision to life.
        </p>

        <div className={`${
          isMobile ? 'space-y-4' : isTablet ? 'space-y-5' : 'space-y-6'
        }`}>
          <div className={`flex items-center ${
            isMobile ? 'space-x-3' : 'space-x-4'
          }`}>
            <div className={`${
              isMobile ? 'w-10 h-10' : isTablet ? 'w-11 h-11' : 'w-12 h-12'
            } bg-primary rounded-lg flex items-center justify-center flex-shrink-0`}>
              <Phone className={`${
                isMobile ? 'w-5 h-5' : isTablet ? 'w-5 h-5' : 'w-6 h-6'
              } text-primary-foreground`} />
            </div>
            <div>
              <p className={`font-semibold text-foreground ${
                isMobile ? 'text-sm' : 'text-base'
              }`}>Phone</p>
              <p className={`text-muted-foreground ${
                isMobile ? 'text-sm' : 'text-base'
              }`}>763-777-1962</p>
            </div>
          </div>

          <div className={`flex items-center ${
            isMobile ? 'space-x-3' : 'space-x-4'
          }`}>
            <div className={`${
              isMobile ? 'w-10 h-10' : isTablet ? 'w-11 h-11' : 'w-12 h-12'
            } bg-primary rounded-lg flex items-center justify-center flex-shrink-0`}>
              <Mail className={`${
                isMobile ? 'w-5 h-5' : isTablet ? 'w-5 h-5' : 'w-6 h-6'
              } text-primary-foreground`} />
            </div>
            <div>
              <p className={`font-semibold text-foreground ${
                isMobile ? 'text-sm' : 'text-base'
              }`}>Email</p>
              <p className={`text-muted-foreground ${
                isMobile ? 'text-sm' : 'text-base'
              } break-all`}>info@mabelconstruction.com</p>
            </div>
          </div>

          <div className={`flex items-center ${
            isMobile ? 'space-x-3' : 'space-x-4'
          }`}>
            <div className={`${
              isMobile ? 'w-10 h-10' : isTablet ? 'w-11 h-11' : 'w-12 h-12'
            } bg-primary rounded-lg flex items-center justify-center flex-shrink-0`}>
              <MapPin className={`${
                isMobile ? 'w-5 h-5' : isTablet ? 'w-5 h-5' : 'w-6 h-6'
              } text-primary-foreground`} />
            </div>
            <div>
              <p className={`font-semibold text-foreground ${
                isMobile ? 'text-sm' : 'text-base'
              }`}>Office</p>
              <p className={`text-muted-foreground ${
                isMobile ? 'text-sm' : 'text-base'
              }`}>10973 bluebird street<br />Coon rapids mn 55433</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={`${
            isMobile ? 'space-y-4' : isTablet ? 'space-y-5' : 'space-y-6'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">First Name*</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 text-base" data-testid="input-first-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Last Name*</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 text-base" data-testid="input-last-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Email*</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} className="h-12 text-base" data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Phone*</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} className="h-12 text-base" data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Project Type*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 text-base" data-testid="select-project-type">
                        <SelectValue placeholder="Select your project type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="residential">Residential Construction</SelectItem>
                      <SelectItem value="commercial">Commercial Construction</SelectItem>
                      <SelectItem value="renovation">Renovation/Remodeling</SelectItem>
                      <SelectItem value="repair">Repair & Maintenance</SelectItem>
                      <SelectItem value="consultation">Consultation Only</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Message*</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      className="min-h-[120px] text-base"
                      {...field} 
                      data-testid="textarea-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              size="lg" 
              className={`w-full font-semibold hover-elevate active-elevate-2 ${
                isMobile ? 'h-12 text-base' : isTablet ? 'h-13 text-lg' : 'h-14 text-lg'
              } touch-target`}
              disabled={isSubmitting}
              data-testid="button-submit-contact"
            >
              {isSubmitting ? (
                <>
                  <div className={`${
                    isMobile ? 'w-4 h-4' : 'w-5 h-5'
                  } border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2`} />
                  Sending...
                </>
              ) : (
                <>
                  <Send className={`${
                    isMobile ? 'w-4 h-4' : isTablet ? 'w-4 h-4' : 'w-5 h-5'
                  } mr-2`} />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}