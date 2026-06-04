import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Ruler, DollarSign, Hammer, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  completionDate: string;
  size: string;
  budget: string;
  features: string[];
  status: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleGetQuote = () => {
    // Scroll to contact section or open contact modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 mobile-sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-background rounded-2xl mobile-sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 mobile-sm:top-6 right-4 mobile-sm:right-6 z-10 w-10 mobile-sm:w-12 h-10 mobile-sm:h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-all duration-300 hover:scale-110"
        >
          <X className="w-5 mobile-sm:w-6 h-5 mobile-sm:h-6 text-foreground" />
        </button>

        {/* Project Image */}
        <div className="relative h-48 mobile-sm:h-56 sm:h-64 md:h-80 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Project Status Badge */}
          <div className="absolute top-4 mobile-sm:top-6 left-4 mobile-sm:left-6">
            <div className={`px-3 mobile-sm:px-4 py-1 mobile-sm:py-2 rounded-full text-xs mobile-sm:text-sm font-bold ${
              project.status === 'Completed' 
                ? 'bg-green-500/90 text-white' 
                : 'bg-orange-500/90 text-white'
            }`}>
              {project.status}
            </div>
          </div>

          {/* Project Category */}
          <div className="absolute bottom-4 mobile-sm:bottom-6 left-4 mobile-sm:left-6">
            <div className="bg-primary/90 text-white px-3 mobile-sm:px-4 py-1 mobile-sm:py-2 rounded-full text-xs mobile-sm:text-sm font-semibold">
              {project.category}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 mobile-sm:p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-12rem)]">
          {/* Project Title */}
          <h2 className="text-xl mobile-sm:text-2xl sm:text-3xl font-black text-foreground mb-3 mobile-sm:mb-4 leading-tight">
            {project.title}
          </h2>

          {/* Project Description */}
          <p className="text-sm mobile-sm:text-base text-muted-foreground mb-6 mobile-sm:mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 mobile-sm:grid-cols-2 gap-4 mobile-sm:gap-6 mb-6 mobile-sm:mb-8">
            {/* Location */}
            <div className="flex items-center space-x-3 mobile-sm:space-x-4 p-3 mobile-sm:p-4 bg-secondary/30 rounded-xl">
              <MapPin className="w-5 mobile-sm:w-6 h-5 mobile-sm:h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs mobile-sm:text-sm text-muted-foreground">Location</p>
                <p className="text-sm mobile-sm:text-base font-semibold text-foreground">{project.location}</p>
              </div>
            </div>

            {/* Completion Date */}
            <div className="flex items-center space-x-3 mobile-sm:space-x-4 p-3 mobile-sm:p-4 bg-secondary/30 rounded-xl">
              <Calendar className="w-5 mobile-sm:w-6 h-5 mobile-sm:h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs mobile-sm:text-sm text-muted-foreground">Completed</p>
                <p className="text-sm mobile-sm:text-base font-semibold text-foreground">{project.completionDate}</p>
              </div>
            </div>

            {/* Size */}
            <div className="flex items-center space-x-3 mobile-sm:space-x-4 p-3 mobile-sm:p-4 bg-secondary/30 rounded-xl">
              <Ruler className="w-5 mobile-sm:w-6 h-5 mobile-sm:h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs mobile-sm:text-sm text-muted-foreground">Size</p>
                <p className="text-sm mobile-sm:text-base font-semibold text-foreground">{project.size}</p>
              </div>
            </div>

            {/* Budget */}
            <div className="flex items-center space-x-3 mobile-sm:space-x-4 p-3 mobile-sm:p-4 bg-secondary/30 rounded-xl">
              <DollarSign className="w-5 mobile-sm:w-6 h-5 mobile-sm:h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs mobile-sm:text-sm text-muted-foreground">Budget</p>
                <p className="text-sm mobile-sm:text-base font-semibold text-foreground">{project.budget}</p>
              </div>
            </div>
          </div>

          {/* Project Features */}
          <div className="mb-6 mobile-sm:mb-8">
            <h3 className="text-lg mobile-sm:text-xl font-bold text-foreground mb-4 mobile-sm:mb-6 flex items-center">
              <Hammer className="w-5 mobile-sm:w-6 h-5 mobile-sm:h-6 text-primary mr-2 mobile-sm:mr-3" />
              Project Features
            </h3>
            <div className="grid grid-cols-1 mobile-sm:grid-cols-2 gap-3 mobile-sm:gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 mobile-sm:space-x-4">
                  <CheckCircle className="w-4 mobile-sm:w-5 h-4 mobile-sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm mobile-sm:text-base text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl mobile-sm:rounded-3xl p-4 mobile-sm:p-6 border border-primary/20">
            <div className="text-center">
              <h3 className="text-lg mobile-sm:text-xl font-bold text-foreground mb-2 mobile-sm:mb-3">
                Interested in a Similar Project?
              </h3>
              <p className="text-sm mobile-sm:text-base text-muted-foreground mb-4 mobile-sm:mb-6">
                Get a free quote for your construction project today!
              </p>
              <div className="flex flex-col mobile-sm:flex-row gap-3 mobile-sm:gap-4 justify-center">
                <Button
                  onClick={handleGetQuote}
                  className="h-12 mobile-sm:h-14 text-base mobile-sm:text-lg font-bold bg-primary hover:bg-primary/90 rounded-xl hover:scale-105 transition-all duration-300 group shadow-lg"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 mobile-sm:w-6 h-5 mobile-sm:h-6 ml-2 mobile-sm:ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <a href="tel:763-777-1962">
                  <Button
                    variant="outline"
                    className="h-12 mobile-sm:h-14 text-base mobile-sm:text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl transition-all duration-300 w-full"
                  >
                    <Phone className="w-4 mobile-sm:w-5 h-4 mobile-sm:h-5 mr-2 mobile-sm:mr-3" />
                    763-777-1962
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}