import { Home, Wrench, Building } from "lucide-react";
import ServiceCard from '../ServiceCard';

export default function ServiceCardExample() {
  const mockServices = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes and renovations built with precision and style",
      features: ["Custom Home Building", "Kitchen Renovations", "Bathroom Remodeling", "Room Additions"]
    },
    {
      icon: Building,
      title: "Commercial Projects", 
      description: "Professional commercial construction for your business needs",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Tenant Improvements"]
    },
    {
      icon: Wrench,
      title: "Repair & Maintenance",
      description: "Expert repairs and ongoing maintenance for all your properties",
      features: ["Emergency Repairs", "Preventive Maintenance", "Structural Repairs", "Code Compliance"]
    }
  ];

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 bg-background">
      {mockServices.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}