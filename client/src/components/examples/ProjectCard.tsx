import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  const mockProjects = [
    {
      title: "Modern Luxury Home",
      category: "Residential",
      description: "A stunning 4,500 sq ft contemporary home featuring floor-to-ceiling windows, smart home technology, and sustainable materials.",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      completionDate: "March 2024",
      onClick: () => console.log("Viewing Modern Luxury Home project")
    },
    {
      title: "Corporate Office Complex",
      category: "Commercial", 
      description: "A 50,000 sq ft office building with modern amenities, energy-efficient systems, and flexible workspace design.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      completionDate: "January 2024",
      onClick: () => console.log("Viewing Corporate Office Complex project")
    },
    {
      title: "Kitchen Renovation",
      category: "Renovation",
      description: "Complete kitchen transformation featuring custom cabinetry, quartz countertops, and high-end appliances.",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      completionDate: "February 2024",
      onClick: () => console.log("Viewing Kitchen Renovation project")
    }
  ];

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 bg-background">
      {mockProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}