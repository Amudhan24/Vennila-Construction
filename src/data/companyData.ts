export interface CompanyInfo {
  name: string;
  tagline: string;
  heroHeading: string;
  heroSubheading: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  address: string;
  city: string;
  pincode: string;
  mapUrl: string;
  workingHours: string;
  logo: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  benefits: string[];
  process: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Residential' | 'Villas' | 'Commercial' | 'Renovation' | 'Interior';
  location: string;
  builtUpArea: string;
  year: string;
  image: string;
  gallery: string[];
  shortDesc: string;
  story: string;
  designConcept: string;
  highlights: string[];
  isFeatured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: 'Construction' | 'Architecture' | 'Interior Design' | 'Home Planning' | 'Materials' | 'Budgeting';
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface GalleryPhoto {
  id: number;
  url: string;
  title: string;
  category: 'Interiors' | 'Exteriors';
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Vennila Construction",
  tagline: "BUILDING SPACES. CREATING LEGACIES.",
  heroHeading: "Where Exceptional Design Meets Exceptional Construction.",
  heroSubheading: "From concept to completion, Vennila Construction transforms your vision into thoughtfully designed, beautifully built spaces.",
  phone: "+91 78100 45253",
  whatsapp: "+91 78100 45253",
  email: "Vennilaconstruction1995@gmail.com",
  instagram: "vennilaconstruction",
  instagramUrl: "https://instagram.com/vennilaconstruction",
  address: "65, VSM Garden St, West Saidapet, West Jafferkhanpet",
  city: "Chennai, Tamil Nadu 600083",
  pincode: "600083",
  mapUrl: "https://share.google/t4FBX6nHKfiPdsMRl",
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  logo: "/Logo.jpg",
};

export const COMPANY_STATS: StatItem[] = [
  { id: "experience", value: "15+", label: "Years of Experience", description: "Deep industry expertise in civil engineering and architectural execution." },
  { id: "quality", value: "100%", label: "Quality Commitment", description: "Rigorous 12-stage quality checks at every phase of build." }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-1",
    slug: "residential-construction",
    number: "01",
    title: "Residential Construction",
    shortDesc: "From independent homes to luxury residences, we manage every stage of construction with precision, quality, and attention to detail.",
    fullDesc: "Our residential construction service covers end-to-end planning, structural civil engineering, architectural coordination, and meticulous finishing for independent houses and family residences. We engineer homes with thermal efficiency, structural longevity, and elegant spatial design.",
    image: "/images/3.jpeg",
    features: [
      "Custom floor planning and architectural customization",
      "RCC framing with super-grade TMT steel and M25/M30 concrete",
      "Advanced waterproofing and moisture control systems",
      "Premium interior wood joinery and custom wardrobe fabrication",
      "Dedicated project manager and daily digital site reporting"
    ],
    benefits: [
      "Zero hidden costs with transparent line-item estimates",
      "Strict timeline adherence with milestone tracking",
      "Post-handover warranty and structural guarantee"
    ],
    process: [
      "Requirement Analysis & Site Survey",
      "Architectural Blueprinting & 3D Modeling",
      "Foundation & Structural Framework",
      "Masonry, Plumbing & Electrical Rough-ins",
      "Custom Interior Joinery & Premium Finishes",
      "Quality Audit & Seamless Handover"
    ]
  },
  {
    id: "serv-2",
    slug: "villa-construction",
    number: "02",
    title: "Villa Construction",
    shortDesc: "Luxury villas designed and executed around your lifestyle, architectural preferences, and functional requirements.",
    fullDesc: "We specialize in constructing modern luxury villas that harmonize grand architectural forms with interior comfort. From sprawling courtyards to double-height living spaces, floor-to-ceiling glass systems, and custom wooden cabinetry, our team crafts bespoke living sanctuaries.",
    image: "/images/6.jpeg",
    features: [
      "Bespoke architectural elevations with contemporary materials",
      "Double-height ceiling execution and expansive glass facades",
      "Custom wood paneling, pooja units, and luxury walk-in wardrobes",
      "Landscape integration and indoor-outdoor living design",
      "Smart home wiring and sustainable climate controls"
    ],
    benefits: [
      "Architectural singularity tailored to your exact lifestyle",
      "High-end craftsmanship using imported hardware and natural woods",
      "Turnkey management eliminating contractor coordination hassle"
    ],
    process: [
      "Concept Workshop & Lifestyle Brief",
      "Custom Architectural Design & Material Selection",
      "Engineered Substructure & Superstructure Build",
      "High-End Interior Woodwork & Lighting Installation",
      "Landscape & Exterior Detailing",
      "Private Villa Handover & Orientation"
    ]
  },
  {
    id: "serv-3",
    slug: "commercial-construction",
    number: "03",
    title: "Commercial Construction",
    shortDesc: "Professional commercial spaces engineered for durability, functionality, and long-term business performance.",
    fullDesc: "Vennila Construction delivers commercial developments including corporate offices, retail spaces, boutique showrooms, and institutional buildings. We focus on efficient spatial utilization, compliance, fire safety, robust structural engineering, and timely delivery.",
    image: "/images/12.jpeg",
    features: [
      "Structural steel and RCC heavy load-bearing frames",
      "Acoustic partitioning and modular glass partitions",
      "High-traffic flooring systems (vitrified/granite/epoxy)",
      "HVAC, fire safety, and electrical panel integration",
      "Strict adherence to commercial building codes and safety norms"
    ],
    benefits: [
      "Optimized square footage for maximum business utility",
      "Fast-track construction schedules minimizing downtime",
      "High resale and rental value through premium build standards"
    ],
    process: [
      "Commercial Feasibility & Zoning Audit",
      "Structural & Mechanical Engineering Blueprinting",
      "Fast-Track Foundation & Framework Execution",
      "MEP & Interior Utility Fit-outs",
      "Safety Inspection & Occupancy Handover"
    ]
  },
  {
    id: "serv-4",
    slug: "architecture-planning",
    number: "04",
    title: "Architecture & Planning",
    shortDesc: "Thoughtful architectural planning that balances aesthetics, functionality, structure, and site requirements.",
    fullDesc: "Our architectural wing develops intelligent space plans, elevation designs, 3D visualizations, and structural schematics tailored to site geometry, natural orientation (Vastu compliant when requested), sun-path analysis, and ventilation.",
    image: "/images/hero-slide-1.jpg",
    features: [
      "2D Floor Plans & 3D Photorealistic Exterior/Interior Renders",
      "Vastu-compliant architectural planning option",
      "Structural design and load calculations by licensed engineers",
      "Municipal approval drawing packages",
      "Material selection schedules and specifications"
    ],
    benefits: [
      "Clear visual clarity before turning a single spade of soil",
      "Engineered optimization reducing material wastage",
      "Seamless alignment between design vision and construction team"
    ],
    process: [
      "Site Context & Orientation Assessment",
      "Conceptual Layouts & Elevation Options",
      "3D Rendering & Virtual Walkthroughs",
      "Detailed Working Drawings & Structural Approval"
    ]
  },
  {
    id: "serv-5",
    slug: "interior-design",
    number: "05",
    title: "Interior Design & Execution",
    shortDesc: "Refined interior spaces combining premium materials, intelligent planning, and elegant detailing.",
    fullDesc: "From custom fluted glass wardrobe doors and teakwood pooja mandapams to modern modular kitchens, wall paneling, and ceiling lighting layouts, our in-house interior execution division brings refined elegance to every square foot.",
    image: "/images/2.jpeg",
    features: [
      "Custom wooden wardrobe fabrication with fluted and clear glass",
      "Traditional & modern handcrafted wooden pooja units with bell motifs",
      "Modular kitchens with acrylic, PU, or veneer finishes",
      "False ceiling designs with integrated cove lighting",
      "Bespoke storage units, TV units, and shoe consoles"
    ],
    benefits: [
      "Factory-finished modular components with precision fitting",
      "Durable moisture-resistant marine ply and soft-close hardware",
      "Harmonious aesthetic alignment with civil architecture"
    ],
    process: [
      "Interior Concept & Moodboard Review",
      "3D Interior Design & Material Approval",
      "Factory Joinery Fabrication & On-Site Prep",
      "Installation, Lighting & Fine Detailing"
    ]
  },
  {
    id: "serv-6",
    slug: "renovation-remodeling",
    number: "06",
    title: "Renovation & Remodeling",
    shortDesc: "Transform existing spaces with carefully planned renovation, structural improvements, and contemporary design.",
    fullDesc: "Revitalize your existing independent home, apartment, or commercial structure. We handle structural modifications, beam retrofitting, plumbing/electrical rewiring, bathroom modernizations, facade makeovers, and floor replacements.",
    image: "/images/26.jpeg",
    features: [
      "Structural wall removal and steel beam reinforcing",
      "Complete bathroom and kitchen modernizations",
      "Electrical rewiring and plumbing replacement",
      "Facade transformation and exterior tile work",
      "Custom woodwork retrofitting and refinishing"
    ],
    benefits: [
      "Dramatically increases property value and modern comfort",
      "Safe structural engineering executed without compromising integrity",
      "Cost-effective alternative to complete demolition"
    ],
    process: [
      "Existing Structure Health Check & Audit",
      "Renovation Blueprint & Material Plan",
      "Controlled Demolition & Structural Prep",
      "Civil Work, Systems Replacement & Woodwork",
      "Final Polish & Handover"
    ]
  },
  {
    id: "serv-7",
    slug: "civil-structural",
    number: "07",
    title: "Structural & Civil Works",
    shortDesc: "Reliable structural and civil execution backed by careful planning, engineering coordination, and quality control.",
    fullDesc: "The backbone of any enduring structure is its civil foundation. We undertake core civil execution including foundation excavation, pile capping, RCC columns, beams, slabs, brickwork, waterproofing membranes, and exterior plastering.",
    image: "/images/28.jpeg",
    features: [
      "Soil testing and foundation engineering (isolated, raft, pile)",
      "Fe415 / Fe500 grade TMT steel reinforcement detailing",
      "Computerized batching plant concrete pouring (M20/M25/M30)",
      "Multi-layer waterproofing for sumps, roofs, and basements",
      "External plastering with fiber-mesh anti-crack protection"
    ],
    benefits: [
      "Earthquake-resistant structural integrity built for generations",
      "Protection against dampness, efflorescence, and seepage",
      "Compliance with IS codes and national building specifications"
    ],
    process: [
      "Soil Test & Foundation Load Calculations",
      "Excavation & Footing Pouring",
      "Column & Beam Framework Reinforcement",
      "Slab Concrete Pouring & Curing Protocol",
      "Masonry & Waterproofing Application"
    ]
  },
  {
    id: "serv-8",
    slug: "turnkey-construction",
    number: "08",
    title: "Turnkey Construction",
    shortDesc: "One integrated team managing your project from initial concept through construction, interiors, and final handover.",
    fullDesc: "Our flagship comprehensive package where Vennila Construction takes 100% single-point responsibility for everything: architectural drawings, site clearance, foundation, civil structure, MEP utilities, flooring, interior woodwork, painting, and key handover.",
    image: "/images/1.jpeg",
    features: [
      "Single-point contact for design, civil, and interior execution",
      "Fixed timeline and fixed budget contract",
      "Comprehensive material procurement from certified manufacturers",
      "Weekly video/photo site updates for out-of-town clients",
      "Complete move-in readiness at handover"
    ],
    benefits: [
      "Zero stress dealing with multiple individual contractors",
      "Streamlined procurement savings passed on to the client",
      "Guaranteed delivery date backed by milestone agreements"
    ],
    process: [
      "Turnkey Requirement Brief & Land Audit",
      "Comprehensive Design, Material & Budget Agreement",
      "Civil Construction & Structural Completion",
      "Interior Woodwork, MEP & Fixture Fitting",
      "Deep Clean, Inspection & Ceremony Key Handover"
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "modern-luxury-villa-ecr",
    title: "Modern Luxury Villa - ECR Sanctuary",
    category: "Villas",
    location: "East Coast Road, Chennai",
    builtUpArea: "4,800 Sq. Ft.",
    year: "2025",
    image: "/images/6.jpeg",
    gallery: ["/images/6.jpeg", "/images/1.jpeg", "/images/2.jpeg", "/images/14.jpeg", "/images/26.jpeg", "/images/31.jpeg", "/images/32.jpeg"],
    shortDesc: "An architectural expression of contemporary luxury, designed around natural light, open spaces, fluted glass joinery, and custom teakwood interiors.",
    story: "Designed for a discerning family, this luxury villa balances modern geometric facade lines with warm interior textures. Vennila Construction managed the project on a turnkey basis, executing everything from soil stabilization and RCC framing to custom wood cabinets and a serene pooja mandapam.",
    designConcept: "Contemporary architectural minimalism seamlessly integrated with rich South Indian teak craft and textured fluted glass cabinetry.",
    highlights: [
      "Custom fluted-glass wardrobing with interior LED backlighting",
      "Handcrafted wooden pooja cabinet featuring traditional brass bell inserts",
      "Spacious living area with continuous Italian marble flooring",
      "Energy-efficient glass facades maximizing coastal daylight"
    ],
    isFeatured: true
  },
  {
    id: "proj-2",
    slug: "the-granite-courtyard-residence",
    title: "The Granite Courtyard Residence",
    category: "Residential",
    location: "Anna Nagar, Chennai",
    builtUpArea: "3,500 Sq. Ft.",
    year: "2024",
    image: "/images/1.jpeg",
    gallery: ["/images/1.jpeg", "/images/3.jpeg", "/images/7.jpeg", "/images/10.jpeg", "/images/33.jpeg", "/images/34.jpeg"],
    shortDesc: "A multi-generational family residence combining private retreat bedrooms, custom cane-inset wardrobes, and a open living hall.",
    story: "Built on a compact urban plot, this residential design maximized vertical volume without sacrificing privacy. The interior highlights custom-built bedroom wardrobes with hand-woven cane panel insets framed in solid teakwood.",
    designConcept: "Urban tropical warm modernism celebrating natural textures, cane craftsmanship, and concealed ambient lighting.",
    highlights: [
      "Master bedroom with cane-work wardrobe shutters and brass hardware",
      "Monolithic RCC stairwell with hidden step lights",
      "Rooftop terrace garden with weather-proof pergola",
      "Integrated rainwater harvesting and solar water system"
    ]
  },
  {
    id: "proj-3",
    slug: "serenity-wood-interior-suite",
    title: "Serenity Wood Interior & Villa Transformation",
    category: "Interior",
    location: "Velachery, Chennai",
    builtUpArea: "2,900 Sq. Ft.",
    year: "2025",
    image: "/images/2.jpeg",
    gallery: ["/images/2.jpeg", "/images/4.jpeg", "/images/15.jpeg", "/images/22.jpeg", "/images/35.jpeg", "/images/36.jpeg"],
    shortDesc: "Full-scale interior overhaul featuring floor-to-ceiling smoked glass display cabinets, warm walnut woodwork, and fluted glass partitions.",
    story: "The client wanted a sophisticated interior upgrade for their existing villa. Our team designed and fabricated custom display cabinets featuring reeded glass doors, anodized aluminum frames, and open display shelves.",
    designConcept: "Refined minimalist luxury highlighting high-clarity fluted glass, dark walnut textures, and concealed linear warm lighting.",
    highlights: [
      "Custom tall display unit with fluted glass doors and integrated strip lights",
      "Ergonomic handle-less wardrobe wall in guest bedroom",
      "Concealed AC ducting and acoustic wall paneling"
    ]
  },
  {
    id: "proj-4",
    slug: "heritage-pooja-sanctuary",
    title: "Heritage Pooja Unit & Contemporary Home",
    category: "Residential",
    location: "Adyar, Chennai",
    builtUpArea: "4,200 Sq. Ft.",
    year: "2024",
    image: "/images/26.jpeg",
    gallery: ["/images/26.jpeg", "/images/27.jpeg", "/images/29.jpeg", "/images/30.jpeg", "/images/37.jpeg", "/images/38.jpeg"],
    shortDesc: "Custom luxury home construction showcasing a bespoke teakwood pooja unit adorned with traditional brass bells and frosted glass cutouts.",
    story: "Combining sacred heritage motifs with modern residential layout, Vennila Construction crafted this multi-level house featuring custom wooden joinery, floating staircases, and specialized lighting systems.",
    designConcept: "Spiritual heritage meets contemporary residential architectural finesse.",
    highlights: [
      "Bespoke teak pooja mandapam with suspended brass temple bells",
      "Hand-carved wooden door handles and solid wood frames",
      "Double-glazed noise insulated windows throughout"
    ]
  },
  {
    id: "proj-5",
    slug: "apex-commercial-square",
    title: "Apex Commercial Hub & Showroom",
    category: "Commercial",
    location: "Nungambakkam, Chennai",
    builtUpArea: "8,500 Sq. Ft.",
    year: "2024",
    image: "/images/12.jpeg",
    gallery: ["/images/12.jpeg", "/images/11.jpeg", "/images/13.jpeg", "/images/17.jpeg", "/images/39.jpeg", "/images/40.jpeg"],
    shortDesc: "A modern commercial building featuring clear span office floors, glass partitioning, heavy load structural RCC slabs, and energy-efficient facade.",
    story: "Engineered for high-traffic commercial utility, Apex Square was constructed in a fast-track 10-month schedule. The project includes underground parking, fire-retardant structural walls, and modular interior office suites.",
    designConcept: "Sleek corporate architecture emphasizing structural permanence, daylight optimization, and adaptable workspace floorplates.",
    highlights: [
      "Post-tensioned RCC slab design reducing column clutter",
      "High-performance acoustic ceiling systems and glass partitions",
      "VRF air conditioning and power backup generator integration"
    ]
  },
  {
    id: "proj-6",
    slug: "urban-villa-renovation",
    title: "Urban Villa Remodeling & Modernization",
    category: "Renovation",
    location: "Mylapore, Chennai",
    builtUpArea: "3,200 Sq. Ft.",
    year: "2025",
    image: "/images/20.jpeg",
    gallery: ["/images/20.jpeg", "/images/21.jpeg", "/images/23.jpeg", "/images/24.jpeg", "/images/41.jpeg", "/images/42.jpeg"],
    shortDesc: "Complete structural renovation transforming a 30-year-old home into a open-plan modern luxury residence.",
    story: "This renovation project involved removing internal load-bearing walls, installing steel supporting beams, updating all plumbing and electrical networks, and installing new custom woodwork throughout.",
    designConcept: "Modern structural retrofitting bringing historical charm into contemporary living standard.",
    highlights: [
      "Structural steel beam reinforcement for wide open living room",
      "All-new plumbing with pressure pump integration",
      "Custom wooden cabinetry and updated bathroom suites"
    ]
  }
];

export const QUALITY_CHECKPOINTS = [
  { id: "qp-1", number: "01", title: "Site & Soil Engineering", desc: "Scientific soil bearing tests and site levelling to calculate exact foundation requirements." },
  { id: "qp-2", number: "02", title: "Material Chem-Check", desc: "Verifying test certificates for Fe500 TMT steel grade, cement setting times, and aggregate cleanliness." },
  { id: "qp-3", number: "03", title: "Foundation & Substructure", desc: "Rigorous alignment of footing excavation, anti-termite chemical barrier treatment, and RCC raft inspection." },
  { id: "qp-4", number: "04", title: "RCC Structural Framing", desc: "Concrete cube strength testing (M25/M30 grade) at 7, 14, and 28-day curing intervals." },
  { id: "qp-5", number: "05", title: "Precision Masonry", desc: "Laser-guided wall verticality checks using first-class wire-cut bricks / AAC blocks with fiber mesh joints." },
  { id: "qp-6", number: "06", title: "Electrical & Piping Rough-in", desc: "Pressure testing plumbing lines up to 10 bar pressure before concealing inside walls." },
  { id: "qp-7", number: "07", title: "Waterproofing Barrier", desc: "3-coat elastomeric membrane waterproofing on roofs, bathrooms, and sumps with 48-hour flood test." },
  { id: "qp-8", number: "08", title: "Flooring & Tiling Leveling", desc: "Zero-slump mortar bed layout ensuring perfectly flat vitrified / marble tile surfaces." },
  { id: "qp-9", number: "09", title: "Precision Woodwork", desc: "Calibrated moisture check on all teakwood, plywood, and veneer materials before joinery assembly." },
  { id: "qp-10", number: "10", title: "Plastering & Primer Base", desc: "3-coat smooth putty wall preparation checking surface flatness under rake lighting." },
  { id: "qp-11", number: "11", title: "Fixtures & Electrical Audit", desc: "Testing earth pit resistance, MCB trip times, and sanitaryware water seal traps." },
  { id: "qp-12", number: "12", title: "Pre-Handover Walkthrough", desc: "Final 120-point comprehensive inspection before presenting keys to the owner." }
];

export const MATERIAL_CATEGORIES = [
  { title: "Cement", spec: "Coromandel / Ultratech / Ramco 53 Grade OPC & PPC", desc: "High early strength cement ensuring dense concrete matrix." },
  { title: "Steel Reinforcement", spec: "Tata Tiscon / JSW Neosteel / SAIL Fe500D TMT", desc: "Ductile high-yield corrosion-resistant steel bars." },
  { title: "Bricks & Blocks", spec: "First-Class Kiln Red Bricks / High-Density AAC Blocks", desc: "Thermal insulation and uniform compressive strength." },
  { title: "Flooring", spec: "Kajaria / Somany Vitrified Tiles or Italian Marble", desc: "Stain-resistant, low-porosity, high-traffic flooring." },
  { title: "Doors & Windows", spec: "First Quality Teak Wood Frames / Fenesta uPVC Systems", desc: "Acoustic sealing and weather-resistant joinery." },
  { title: "Electrical", spec: "Finolex / Havells Wires & Legrand / Schneider Switches", desc: "Fire-retardant low smoke copper wiring systems." },
  { title: "Plumbing", spec: "Ashirvad / Astral CPVC & PVC Pipes with Jaquar / Kohler", desc: "Lead-free, non-corrosive, pressure-tested pipework." },
  { title: "Paint", spec: "Asian Paints Royale Luxury Emulsion / Apex Ultima Exterior", desc: "Low VOC, anti-fungal, washable smooth wall finishes." },
  { title: "Sanitaryware", spec: "Kohler / Grohe / Hindware Premium Range", desc: "Water-efficient dual flush systems and brass chrome fittings." },
  { title: "Hardware & Joinery", spec: "Hafele / Hettich Soft-Close Hinges & Blum Drawers", desc: "Heavy-duty tested German hardware for lifelong smooth operation." }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Getting Started",
    question: "How do I start a construction project with Vennila Construction?",
    answer: "Getting started is simple. Contact us via our consultation form, WhatsApp, or phone. We begin with an initial discovery meeting to discuss your vision, plot location, space requirements, and budget. From there, we conduct a site visit and present a preliminary design & cost estimation framework."
  },
  {
    id: "faq-2",
    category: "Services",
    question: "What types of projects do you undertake?",
    answer: "We undertake independent house construction, luxury villa construction, turnkey residential developments, commercial space construction, architectural planning, custom interior woodwork, and structural renovation projects."
  },
  {
    id: "faq-3",
    category: "Design",
    question: "Do you provide architectural planning and 3D design?",
    answer: "Yes. Our team provides comprehensive architectural design, 2D floor plans, 3D exterior elevations, structural engineering drawings, and photorealistic interior renderings prior to commencing construction."
  },
  {
    id: "faq-4",
    category: "Turnkey",
    question: "What is included in turnkey construction?",
    answer: "Turnkey construction is our all-inclusive service where Vennila Construction handles everything: architectural design, municipal approval drawings, foundation, RCC civil structure, brickwork, plumbing, electrical, flooring, interior woodwork, painting, fixture installation, and final deep clean handover."
  },
  {
    id: "faq-5",
    category: "Costing",
    question: "How is the project cost calculated?",
    answer: "Project cost is calculated based on built-up square footage, structural design complexity, foundation type required by site soil conditions, and selected material specification tier. We provide a transparent line-item estimate so you know exact itemized costs before signing."
  },
  {
    id: "faq-6",
    category: "Timelines",
    question: "How long does house construction normally take?",
    answer: "A standard 2,500 - 3,500 sq. ft. independent house or villa typically takes between 8 to 12 months from foundation excavation to final handover, depending on weather, design complexity, and material selections."
  },
  {
    id: "faq-7",
    category: "Customization",
    question: "Can I customize materials and interior finishes?",
    answer: "Absolutely. Every client has unique aesthetic preferences. You can select custom floor tiles, sanitary fixtures, paint shades, wood finishes, and cabinet hardware during our material selection stage."
  },
  {
    id: "faq-8",
    category: "Updates",
    question: "How are project updates communicated during construction?",
    answer: "Each project is assigned a dedicated Project Engineer. Clients receive regular photo/video updates, weekly progress logs, and scheduled site walkthroughs. Out-of-town and NRI clients can access digital progress reports."
  },
  {
    id: "faq-9",
    category: "Renovation",
    question: "Do you handle renovation and remodeling projects?",
    answer: "Yes, we undertake major structural renovations, house extensions, bathroom and kitchen modernization, exterior elevation upgrades, and complete interior redesigns for existing residential properties."
  },
  {
    id: "faq-10",
    category: "Consultation",
    question: "How can I schedule a consultation with your team?",
    answer: "You can schedule a consultation by filling out the online request form on our website, calling us directly at +91 78100 45253, or dropping a WhatsApp message. Our team will coordinate a convenient time for an in-person or virtual consultation."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rajesh Kumar",
    role: "Villa Owner",
    location: "ECR, Chennai",
    projectType: "Luxury Villa Construction",
    rating: 5,
    comment: "Vennila Construction transformed our dream of an ECR villa into reality. Their commitment to structural quality and interior woodwork detailing is exceptional. The fluted glass wardrobe fittings and pooja unit were executed flawlessly.",
    date: "January 2026"
  },
  {
    id: "test-2",
    name: "Dr. Ananya Sundaram",
    role: "Homeowner",
    location: "Anna Nagar, Chennai",
    projectType: "Turnkey Residence",
    rating: 5,
    comment: "What impressed me most was their complete transparency. Every material brought to the site matched the exact specifications in our contract. Delivered our 3,500 sq. ft. home right on schedule.",
    date: "November 2025"
  },
  {
    id: "test-3",
    name: "S. Venkatesh",
    role: "Managing Director",
    location: "Nungambakkam, Chennai",
    projectType: "Commercial Office Building",
    rating: 5,
    comment: "We hired Vennila Construction for our 8,500 sq. ft. commercial office space. The civil engineering coordination and fast-track execution were stellar. Highly professional team.",
    date: "February 2026"
  },
  {
    id: "test-4",
    name: "Kavitha & Karthik",
    role: "Homeowners",
    location: "Adyar, Chennai",
    projectType: "Independent House",
    rating: 5,
    comment: "From the initial architectural drawings to the final key handover, Vennila Construction handled everything with care. The quality of concrete curing, masonry, and teakwood doors is top tier.",
    date: "December 2025"
  },
  {
    id: "test-5",
    name: "M. Ramanathan",
    role: "Property Investor",
    location: "Velachery, Chennai",
    projectType: "Renovation & Remodeling",
    rating: 5,
    comment: "They renovated our ancestral 30-year-old home into a modern architectural villa. The structural wall removals were executed safely with zero hassle. Truly an end-to-end expert company.",
    date: "August 2025"
  }
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: "blog-1",
    slug: "complete-guide-to-building-a-house",
    title: "Complete Guide to Building a House: Step-by-Step Construction Process",
    category: "Construction",
    date: "February 14, 2026",
    readTime: "6 min read",
    image: "/images/3.jpeg",
    excerpt: "Demystifying the complete journey of home construction from soil testing and floor planning to RCC structural framework, plumbing, and key handover.",
    content: `Building a home is one of the most significant life investments. A clear understanding of the construction stages empowers homeowners to make informed decisions regarding budget, materials, and timeline.

### Phase 1: Pre-Construction & Site Assessment
Before turning soil, accurate land surveying, soil testing, and architectural planning are paramount. Soil testing determines whether isolated footings, raft foundations, or pile foundations are structurally required.

### Phase 2: Structural Substructure & Superstructure
Once foundation excavation completes, steel reinforcement cage placement and concrete pouring begin. The RCC frame—comprising footings, columns, plinth beams, and roof slabs—forms the skeleton of your structure. Using certified Fe500D grade steel and high-grade concrete ensures earthquake-resistant longevity.

### Phase 3: Masonry & Service Utilities
Brickwork using first-class kiln red bricks or lightweight AAC blocks encloses the structure. Concurrently, electrical conduits and CPVC plumbing lines are routed through wall chasing before plastering.

### Phase 4: Waterproofing & Finishing
Waterproofing roofs, basements, and wet areas prevents future dampness. Tile laying, plastering, interior woodwork, and multi-coat painting complete the residence, turning structural concrete into a warm, liveable sanctuary.`
  },
  {
    id: "blog-2",
    slug: "how-to-plan-a-modern-villa-construction",
    title: "How to Plan a Modern Luxury Villa: Architecture, Light & Spatial Flow",
    category: "Architecture",
    date: "January 28, 2026",
    readTime: "5 min read",
    image: "/images/6.jpeg",
    excerpt: "Explore architectural strategies for modern luxury villas—balancing double-height volumes, glass facades, custom woodwork, and indoor-outdoor courtyards.",
    content: `Modern villa design is defined by openness, fluid spatial transitions, and high-end material authenticity.

### Maximizing Natural Light
Large floor-to-ceiling glass fenestrations reduce artificial lighting reliance during the day while connecting indoor living rooms with outdoor gardens. Deep roof overhangs protect interiors from direct tropical heat glare.

### Architectural Woodwork & Textures
Integrating natural wood elements—such as fluted glass wardrobe panels, teakwood entrance doors, and slatted pergolas—injects organic warmth into contemporary geometric lines.`
  },
  {
    id: "blog-3",
    slug: "turnkey-construction-vs-item-rate-contractors",
    title: "Turnkey Construction vs Item-Rate Contractors: What Homeowners Should Know",
    category: "Home Planning",
    date: "January 10, 2026",
    readTime: "7 min read",
    image: "/images/1.jpeg",
    excerpt: "Comparing single-point turnkey construction responsibility with managing separate civil, electrical, and carpentry contractors.",
    content: `When embarking on a home build, choosing the right contracting model directly impacts your budget, mental peace, and construction timeline.

### Turnkey Construction
In a turnkey model, one integrated engineering firm oversees everything from blueprint drawings to final key handover. 

**Key Advantages:**
- Single-point accountability
- Guaranteed fixed budget and timeline contract
- Coordinated MEP and interior woodwork integration
- Bulk procurement savings passed to the owner`
  }
];

const exteriorImageNumbers = new Set([20, 37, 40, 41]);

export const GALLERY_PHOTOS: GalleryPhoto[] = Array.from({ length: 42 }, (_, i) => {
  const num = i + 1;
  const cat: 'Interiors' | 'Exteriors' = exteriorImageNumbers.has(num) ? 'Exteriors' : 'Interiors';
  return {
    id: num,
    url: `/images/${num}.jpeg`,
    title: `${cat} Showcase #${num} - Vennila Construction`,
    category: cat,
  };
});

