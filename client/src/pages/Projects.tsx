import React, { useState, useEffect } from "react";
import { Calendar, MapPin, ArrowRight, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import useResponsive from "@/hooks/use-responsive";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", "Roofing", "Residential", "Commercial", "Remodeling", "Sliding", "Windows"];
  const locations = ["All", "Minneapolis", "St. Paul", "Maple Grove", "Plymouth", "Rogers", "Coon Rapids", "Anoka", "Edina", "Wayzata", "Minnetonka", "St. Louis Park", "Bloomington", "Richfield", "Uptown Minneapolis", "Eden Prairie", "Shoreview", "White Bear Lake", "Stillwater"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesLocation = selectedLocation === "All" || project.location === selectedLocation;
    const matchesSearch = searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.features || []).some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className={`relative ${isMobile ? 'pt-20 pb-8' : isTablet ? 'py-16' : 'py-20'} bg-gradient-to-br from-primary/10 via-background to-secondary/20`}>
        <div className="container-responsive text-center px-4 sm:px-6">
          <h1 className={`${isMobile ? 'text-3xl' : isTablet ? 'text-4xl md:text-5xl' : 'text-6xl lg:text-7xl'} font-black text-foreground`}>
            OUR <span className="text-primary block">PROJECTS</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">Explore our portfolio of exceptional construction projects across the Twin Cities.</p>
        </div>
      </section>

      {/* Filters */}
      <section className={`${isMobile ? 'py-4' : isTablet ? 'py-6' : 'py-8'} bg-secondary/30`}>
        <div className="container-responsive px-4 sm:px-6">
          {/* Mobile: stacked controls; Desktop: inline */}
          <div className={`w-full ${isMobile ? 'flex flex-col gap-3' : 'flex items-center gap-4 flex-wrap'}`}>
            {/* Search */}
            <div className={`${isMobile ? 'w-full' : 'relative w-full sm:w-80'}`}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 ${isMobile ? 'text-base' : 'text-sm'} border-2 border-border rounded-xl bg-background/50`}
                  aria-label="Search projects"
                />
              </div>
            </div>

            {/* Filters group */}
            <div className={`flex ${isMobile ? 'flex-col gap-3 w-full' : 'items-center gap-3'}`}>
              <div className={`${isMobile ? 'w-full' : 'flex items-center gap-2'}`}>
                <Filter className="text-muted-foreground mr-2 hidden sm:inline" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`w-full ${isMobile ? 'py-3 px-4' : 'py-3 px-4'} border-2 rounded-xl bg-background/50`}
                  aria-label="Filter by category"
                >
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div className={`${isMobile ? 'w-full' : 'flex items-center gap-2'}`}>
                <MapPin className="text-muted-foreground mr-2 hidden sm:inline" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className={`w-full ${isMobile ? 'py-3 px-4' : 'py-3 px-4'} border-2 rounded-xl bg-background/50`}
                  aria-label="Filter by location"
                >
                  {locations.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>

              {/* Clear on mobile full width, on desktop small button */}
              <div className={`${isMobile ? 'w-full' : ''}`}>
                <Button
                  onClick={() => { setSelectedCategory("All"); setSelectedLocation("All"); setSearchTerm(""); }}
                  className={`${isMobile ? 'w-full py-3' : 'py-3 px-4'}`}
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid — USE ProjectCard (anchor inside) so clicks navigate to /projects/:slug */}
      <section className="py-8">
        <div className="container-responsive px-4 sm:px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">Showing {filteredProjects.length} of {projects.length} projects</p>
          </div>

          {/* grid with larger gutters on mobile to avoid congestion */}
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-6 gap-x-4' : isTablet ? 'grid-cols-2 gap-8' : 'grid-cols-3 gap-8'}`}>
            {filteredProjects.map((p, i) => (
              <div key={p.slug ?? `${p.title}-${i}`} className="animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                {/* add inner padding/gutter on mobile so card content doesn't touch edges */}
                <div className={`${isMobile ? 'px-2' : ''}`}>
                  <ProjectCard
                    id={p.id}
                    slug={p.slug}
                    title={p.title}
                    category={p.category}
                    location={p.location}
                    description={p.description}
                    imageUrl={p.imageUrl}
                    completionDate={p.completionDate}
                    size={p.size}
                    budget={p.budget}
                    features={p.features}
                    status={p.status}
                    showButton={true}
                  />
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No projects found matching your criteria.</p>
              <Button onClick={() => { setSelectedCategory("All"); setSelectedLocation("All"); setSearchTerm(""); }}>Clear Filters</Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container-responsive px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Ready to Start Your Project?</h2>
          <p className="mb-6">Let's create something amazing together. Contact us today for a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary w-full sm:w-auto"
              onClick={() => { window.location.href = "/contact"; }}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}