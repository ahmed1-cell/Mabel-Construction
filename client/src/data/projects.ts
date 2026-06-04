export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  category: string;
  location?: string;
  description: string;
  imageUrl: string;
  completionDate: string;
  duration?: string;
  architect?: string;
  size?: string;
  client?: string;
  budget?: string;
  features?: string[];
  status?: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    slug: "minneapolis-residential-roof-replacement",
    title: "Minneapolis Residential Roof Replacement",
    category: "Roofing",
    location: "Minneapolis",
    description:
      "This project involved a complete roof replacement for a 2,500 sq ft residential home featuring high-performance architectural shingles. The structure was upgraded with enhanced ventilation and ice dam protection for superior durability. Gutter replacement and skylight installation were also completed, improving both functionality and aesthetic appeal.",
    imageUrl: "/assets/1.jpg",
    completionDate: "March 2024",
    size: "2,500 sq ft",
    duration: "2 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$45K",
    features: ["Premium Shingles", "Enhanced Ventilation", "Ice Dam Protection", "Gutter Replacement"],
    status: "Completed"
  },
  {
    id: 2,
    slug: "st-paul-commercial-roofing-system",
    title: "St. Paul Commercial Roofing System",
    category: "Roofing",
    location: "St. Paul",
    description:
      "A large-scale commercial roofing installation for a 15,000 sq ft office complex. The project utilized TPO membrane roofing to ensure long-term energy efficiency and weather resistance. Enhanced insulation and full warranty coverage provided durability and cost savings for the client.",
    imageUrl: "/assets/2.jpg",
    completionDate: "February 2024",
    size: "15,000 sq ft",
    duration: "3 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$180K",
    features: ["TPO Membrane", "Improved Insulation", "Comprehensive Warranty", "Energy Efficient"],
    status: "Completed"
  },
  {
    id: 3,
    slug: "maple-grove-luxury-home-roofing",
    title: "Maple Grove Luxury Home Roofing",
    category: "Roofing",
    location: "Maple Grove",
    description:
      "A premium residential roofing project featuring hand-selected slate tiles for superior durability and appearance. Custom copper gutters and solar panel-ready installation provided modern functionality. The 30-year warranty ensured long-lasting protection for this luxury home.",
    imageUrl: "/assets/3.jpg",
    completionDate: "January 2024",
    size: "4,200 sq ft",
    duration: "4 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$95K",
    features: ["Premium Slate Tiles", "Custom Copper Gutters", "Solar Panel Ready", "30-Year Warranty"],
    status: "Completed"
  },
  {
    id: 4,
    slug: "plymouth-multi-family-complex-roofing",
    title: "Plymouth Multi-Family Complex Roofing",
    category: "Roofing",
    location: "Plymouth",
    description:
      "This project focused on a multi-family complex roofing upgrade using EPDM membrane technology for energy efficiency. The team implemented modern drainage systems and advanced insulation for climate control. The result was a durable, eco-friendly roofing solution ideal for long-term sustainability.",
    imageUrl: "/assets/4.jpg",
    completionDate: "June 2024",
    size: "75,000 sq ft",
    duration: "6 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$320K",
    features: ["EPDM Membrane", "Energy Efficient", "Enhanced Insulation", "Modern Drainage"],
    status: "Under Construction"
  },
  {
    id: 5,
    slug: "coon-rapids-industrial-facility-roof",
    title: "Coon Rapids Industrial Facility Roof",
    category: "Roofing",
    location: "Coon Rapids",
    description:
      "Heavy-duty roofing installation for a 25,000 sq ft industrial plant, utilizing reinforced metal materials for strength and safety. Specialized ventilation systems were added for temperature regulation and air quality. The project enhanced both structural integrity and operational performance.",
    imageUrl: "/assets/5.jpg",
    completionDate: "July 2024",
    size: "25,000 sq ft",
    duration: "5 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$150K",
    features: ["Reinforced Metal", "Specialized Ventilation", "Enhanced Support", "Industrial Grade"],
    status: "Under Construction"
  },

  // ===== REMODELING PROJECTS =====
  {
    id: 6,
    slug: "chefs-dream-kitchen",
    title: "Chef's Dream Kitchen",
    category: "Remodeling",
    location: "Maple Grove",
    description:
      "This luxury kitchen remodel brought culinary elegance to life with custom-built cabinetry and a marble waterfall island centerpiece. Professional-grade appliances and ambient lighting created a chef’s paradise. The final result blends performance, beauty, and sophistication seamlessly.",
    imageUrl: "/assets/Remodelling/6.jpg",
    completionDate: "February 2024",
    size: "400 sq ft",
    duration: "2 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$150K",
    features: ["Custom Cabinetry", "Marble Island", "Professional Appliances", "Luxury Finishes"],
    status: "Completed"
  },
  {
    id: 7,
    slug: "master-suite-addition",
    title: "Master Suite Addition",
    category: "Remodeling",
    location: "Coon Rapids",
    description:
      "A stunning addition featuring a spa-like bathroom, a spacious walk-in closet, and a private balcony overlooking scenic gardens. This project transformed unused space into a relaxing sanctuary. Every detail was designed for luxury, comfort, and tranquility.",
    imageUrl: "/assets/Remodelling/7.jpg",
    completionDate: "October 2023",
    size: "800 sq ft",
    duration: "4 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$200K",
    features: ["Spa-like Bathroom", "Walk-in Closet", "Private Balcony", "Garden Views"],
    status: "Completed"
  },
  {
    id: 8,
    slug: "luxury-kitchen-remodel",
    title: "Luxury Kitchen Remodel",
    category: "Remodeling",
    location: "Edina",
    description:
      "Complete kitchen transformation using high-end materials and a modern design aesthetic. Quartz countertops, custom cabinetry, and premium appliances enhanced efficiency and style. The new layout maximized both function and beauty in a timeless space.",
    imageUrl: "/assets/Remodelling/8.jpg",
    completionDate: "December 2023",
    size: "350 sq ft",
    duration: "3 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$85K",
    features: ["Custom Cabinetry", "Quartz Countertops", "Premium Appliances", "Modern Design"],
    status: "Completed"
  },
  {
    id: 9,
    slug: "basement-finishing-project",
    title: "Basement Finishing Project",
    category: "Remodeling",
    location: "Plymouth",
    description:
      "Transformation of an unfinished basement into a family entertainment hub. The project included a home theater, wet bar, and game room with energy-efficient insulation. This space now provides comfort, fun, and functionality for family gatherings.",
    imageUrl: "/assets/Remodelling/9.jpg",
    completionDate: "October 2023",
    size: "1,200 sq ft",
    duration: "5 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$95K",
    features: ["Home Theater", "Wet Bar", "Game Room", "Egress Windows"],
    status: "Completed"
  },

  // ===== COMMERCIAL PROJECTS =====
  {
    id: 10,
    slug: "downtown-office-tower",
    title: "Downtown Office Tower",
    category: "Commercial",
    location: "St. Paul",
    description:
      "Construction of a 15-story mixed-use office and retail tower in the downtown core. The design included modern offices, retail outlets, and rooftop amenities. This project strengthened the city’s skyline with elegant urban architecture.",
    imageUrl: "/assets/Commercial/10.jpg",
    completionDate: "January 2024",
    size: "150,000 sq ft",
    duration: "9 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$15M",
    features: ["Mixed-Use", "Rooftop Amenities", "Modern Offices", "Retail Space"],
    status: "Completed"
  },

  // ===== SLIDING PROJECTS =====
  {
    id: 11,
    slug: "patio-door-installation",
    title: "Patio Door Installation",
    category: "Sliding",
    location: "Eden Prairie",
    description:
      "High-quality patio door installation featuring smooth-sliding mechanisms and energy-efficient glass. The doors were weatherproofed for year-round comfort and include secure locking systems. This upgrade enhanced both design and security.",
    imageUrl: "/assets/Sliding/11.jpg",
    completionDate: "February 2023",
    size: "8 ft opening",
    duration: "25 Days",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$3,500",
    features: ["Energy Efficient Glass", "Smooth Operation", "Weatherproofing", "Security Locks"],
    status: "Completed"
  },
  {
    id: 12,
    slug: "minneapolis-home-siding",
    title: "Minneapolis Home Siding",
    category: "Sliding",
    location: "Minneapolis",
    description:
      "A full exterior siding replacement for a 2,500 sq ft home. The project used high-quality vinyl with insulated panels for energy savings. Custom trims and color schemes modernized the home’s appearance while improving resilience.",
    imageUrl: "/assets/Sliding/12.jpg",
    completionDate: "March 2024",
    size: "2,500 sq ft",
    duration: "2 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$22,000",
    features: ["Energy Efficient", "Custom Trim", "Weather Resistant", "Modern Design"],
    status: "Completed"
  },
  {
    id: 13,
    slug: "st-paul-luxury-siding",
    title: "St. Paul Luxury Siding",
    category: "Sliding",
    location: "St. Paul",
    description:
      "Premium fiber cement siding project with stone veneer accents for a high-end aesthetic. The durable materials ensure low maintenance and lasting value. A perfect blend of strength and modern architectural beauty.",
    imageUrl: "/assets/Sliding/13.jpg",
    completionDate: "July 2024",
    size: "3,200 sq ft",
    duration: "3 Months",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$38,500",
    features: ["Fiber Cement", "Stone Veneer", "Custom Colors", "Low Maintenance"],
    status: "Under Construction"
  },

  // ===== WINDOWS PROJECTS =====
  {
    id: 14,
    slug: "bay-window-installation",
    title: "Bay Window Installation",
    category: "Windows",
    location: "Stillwater",
    description:
      "Custom bay window installation designed to enhance space and natural light. The triple-pane glass offers superior insulation and energy efficiency. Elegant trim work completed the aesthetic transformation of the living space.",
    imageUrl: "/assets/Windows/14.jpg",
    completionDate: "November 2022",
    size: "6 ft wide",
    duration: "1 Month",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$4,200",
    features: ["Triple-Pane Glass", "Custom Trim", "Additional Seating", "Natural Light"],
    status: "Completed"
  },
  {
    id: 15,
    slug: "eden-prairie-bay-window",
    title: "Eden Prairie Bay Window",
    category: "Windows",
    location: "Eden Prairie",
    description:
      "A stunning bay window installation featuring energy-efficient glass and built-in seating. The panoramic views create an open, airy atmosphere. Precision craftsmanship ensured seamless integration with existing architecture.",
    imageUrl: "/assets/Windows/15.jpg",
    completionDate: "March 2024",
    size: "8 ft wide",
    duration: "20 Days",
    client: "John Smith",
    architect: "Mabel Construction",
    budget: "$5,500",
    features: ["Triple-Pane Glass", "Built-in Seating", "Panoramic Views", "Energy Efficient"],
    status: "Completed"
  }
];

export default projects;
