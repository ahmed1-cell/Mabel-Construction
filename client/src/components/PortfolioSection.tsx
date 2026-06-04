import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import useResponsive from "@/hooks/use-responsive";
import projects from "@/data/projects"; // use canonical data

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { isMobile, isTablet } = useResponsive();

  const categories = ["All", "Roofing", "Residential", "Commercial", "Remodeling", "Sliding", "Windows"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className={`${isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-20'} bg-background`}>
      <div className="container-responsive">
        {/* Section Header */}
        <div className={`text-center ${isMobile ? 'mb-8' : isTablet ? 'mb-12' : 'mb-16'}`}>
          <h2 className={`${isMobile ? 'text-2xl' : isTablet ? 'text-3xl md:text-4xl' : 'text-5xl'} font-black text-foreground ${isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-8'}`}>
            OUR <span className="block text-primary">PORTFOLIO</span>
          </h2>
          <p className={`${isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'} text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isMobile ? 'px-4' : 'px-0'}`}>
            Explore our showcase of exceptional construction projects that demonstrate our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center ${isMobile ? 'gap-2' : isTablet ? 'gap-3' : 'gap-4'} ${isMobile ? 'mb-6' : isTablet ? 'mb-8' : 'mb-12'} ${isMobile ? 'px-4' : 'px-0'}`}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${isMobile ? 'text-xs px-3 py-2' : isTablet ? 'text-sm px-4 py-2' : 'text-base px-6 py-3'}`}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'} ${isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8'}`}>
          {filteredProjects.map((project, index) => (
            <div key={project.slug ?? `${project.title}-${index}`} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <ProjectCard
                id={(project as any).id}
                slug={project.slug}
                title={project.title}
                category={project.category}
                description={project.description}
                imageUrl={project.imageUrl}
                completionDate={project.completionDate}
                status={project.status}
                showButton={false} // maybe hide button on homepage cards
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Ready to start your own construction project? Let's discuss your vision.
          </p>
          <Button
            size="lg"
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}