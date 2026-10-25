// Vennila Construction - Packages & Pricing Matrix
// Extracted and structured for seamless user comparison

export interface PackageTier {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  price: number;
  originalPrice: number;
  isPopular?: boolean;
  highlightIcon: 'house' | 'star' | 'shield';
  summaryFeatures: string[];
}

export interface SpecificationCategory {
  id: string;
  name: string;
  specs: {
    [packageId: string]: string[];
  };
}

export const CONSTRUCTION_PACKAGES: PackageTier[] = [
  {
    id: 'value-for-money',
    name: 'Value for Money',
    slug: 'value-for-money',
    tagline: 'Balanced Specifications for Smart Homeowners',
    price: 2299,
    originalPrice: 2449,
    isPopular: false,
    highlightIcon: 'house',
    summaryFeatures: [
      '2D Plans & 3D Elevations Included',
      'RCC Framed Structure (M20 Grade)',
      'Flooring Tiles up to ₹50/sq.ft',
      'Ready Made Teak Door worth ₹30,000',
      'Orbit / Equivalent FRLS Concealed Wiring',
      'Asian Paints Tractor Emulsion Finish'
    ]
  },
  {
    id: 'builders-choice',
    name: "Builder's Choice",
    slug: 'builders-choice',
    tagline: 'Our Most Popular & Recommended Specification Tier',
    price: 2499,
    originalPrice: 2699,
    isPopular: true,
    highlightIcon: 'house',
    summaryFeatures: [
      '2D Plans, Furniture Layout & 3D Elevations',
      'RCC Framed Structure + Fe550 TMT Steel',
      'Large Format 4x2 Vitrified Tiles (₹60/sq.ft)',
      'Granite Staircase Flooring (₹120/sq.ft)',
      'Premium Teak Door worth ₹40,000',
      'SS 304 Staircase & Balcony Railing',
      'Finolex FRLS Wiring + GM Modular Switches'
    ]
  },
  {
    id: 'vennila-elite',
    name: 'Vennila Elite',
    slug: 'vennila-elite',
    tagline: 'Luxury Handpicked Materials & Ultra-Premium Finishes',
    price: 2799,
    originalPrice: 2999,
    isPopular: false,
    highlightIcon: 'star',
    summaryFeatures: [
      'Full Architectural, Working & Electrical Drawings',
      'RCC Framed Structure + Heavy Footings',
      'Luxury Vitrified Tiles (₹70/sq.ft) + Granite Stairs (₹140/sq.ft)',
      'Royal Teak Entrance Door with Digital Smart Lock (₹50,000)',
      '10mm Toughened Glass Balcony Elevation',
      'Polycab FRLS Wiring + Legrand Mylinc Switches',
      '2000L Sintex Tank with Raised Platform'
    ]
  },
  {
    id: 'budget-friendly',
    name: 'Budget Friendly',
    slug: 'budget-friendly',
    tagline: 'Solid Structural Integrity on an Optimized Budget',
    price: 1999,
    originalPrice: 2199,
    isPopular: false,
    highlightIcon: 'shield',
    summaryFeatures: [
      '2D Floor Plans & 3D Elevation',
      'Semi-Framed / Framed RCC Structure',
      'Vitrified Floor Tiles (₹45/sq.ft)',
      'Ready Made Door with Teak Frame',
      'Anchor Roma Modular Switches',
      '1000L Overhead Sintex Tank'
    ]
  }
];

export const SPECIFICATION_CATEGORIES: SpecificationCategory[] = [
  {
    "id": "design-drawings",
    "name": "Design & Drawings",
    "specs": {
      "budget-friendly": [
        "2D – Floor Plans - 01 No.",
        "3D - Elevation Design - 01 No."
      ],
      "value-for-money": [
        "2D – Floor Plans",
        "2D - Structural Design",
        "3D - Elevation Design"
      ],
      "builders-choice": [
        "2D – Floor Plans",
        "2D - Furniture Layout",
        "2D - Structural Design",
        "3D - Elevation Design",
        "2D - Electrical drawing"
      ],
      "vennila-elite": [
        "2D – Floor Plans",
        "2D - Furniture Layout",
        "2D - Structural Design",
        "2D - Working drawing",
        "3D - Elevation Design",
        "2D - Electrical drawing"
      ]
    }
  },
  {
    "id": "structure-core-construction-materials",
    "name": "Structure & Core construction Materials",
    "specs": {
      "budget-friendly": [
        "Basement height -2 feet from the Natural ground level",
        "Foundation height - Up to 5 feet",
        "Above given Sqft rate considered for Safe bearing capacity of soil is 230 kPa, if the value is getting below 230 kPa based upon the structural design the cost may vary.",
        "Car parking basement height - 1.5 feet from the Natural ground level",
        "Ceiling height - 9 feet (Finished floor level to finished floor level)",
        "Semi-Framed RCC structure",
        "Cut lintel over doors and windows",
        "Steel - Any ISI brand",
        "Cement - Any ISI brand",
        "Aggregates- 20mm,40mm",
        "Concrete- M20 Grade",
        "Sand- M sand (Blockwork)",
        "P sand (Plastering)",
        "Fly ash- Up to Basement, sump, septic tank, compound walls, Ramp.",
        "Fly ash Bricks",
        "Anti-Termite - Not applicable"
      ],
      "value-for-money": [
        "Basement height - 3 feet from the Natural ground level",
        "Foundation height - Up to 5 feet",
        "Above given Sqft rate considered for Safe bearing capacity of soil is 230 kPa, if the value is getting below 230 kPa based upon the structural design the cost may vary.",
        "Car parking basement height - 1.5 feet from the Natural ground level",
        "Ceiling height - 10 feet and Head room height - 8 feet (Finished floor level to finished floor level) Parapet wall - 3'3\" height 4.5\" thickness wall (Head room above 1'6\" height 4.5\" thickness wall)",
        "RCC Framed Structure (Typical floor plan cost is considered in this package)",
        "Cut lintel over doors and windows",
        "Steel - Arun or Sumangala or Viki or GBR or Equivalent brand",
        "Cement - Zuari",
        "Aggregates -20mm,40mm",
        "Concrete- M20 Grade",
        "Sand- M sand (Blockwork)",
        "P sand (Plastering)",
        "Fly ash- Up to Basement, sump, septic tank, compound walls, Ramp.",
        "Red Bricks (Sulai)",
        "Anti-Termite (only at basement floor level)"
      ],
      "builders-choice": [
        "Basement height - 3 feet from the Natural ground level (outer wall inner plastering is applicable)",
        "Foundation height - Up to 5 feet",
        "Above given Sqft rate considered for Safe bearing capacity of soil is 230 kPa, if the value is getting below 230 kPa based upon the structural design the cost may vary",
        "Car parking basement height -1.5 feet from the Natural ground level",
        "Ceiling height - 10 feet and Head room height - 8 feet (Finished floor level to finished floor level) Parapet wall - 3'3\" height 4.5\" thickness wall (Head room above 1'6\" height 4.5\" thickness wall)",
        "RCC Framed Structure (Typical floor plan cost is considered in this package)",
        "Cut lintel over doors and windows",
        "Steel - ARS",
        "Cement - Chettinad Cement",
        "Aggregates- 20mm,40mm",
        "Concrete- M20 Grade",
        "Sand- M sand (Blockwork)",
        "P sand (Plastering)",
        "Fly ash- Up to Basement, sump, septic tank, compound walls, Ramp.",
        "Red Bricks- Box / Chamber cutting brick",
        "Anti-Termite (only at basement floor level)"
      ],
      "vennila-elite": [
        "Basement height - 3 feet from the Natural ground level (outer wall inner plastering is applicable)",
        "Foundation height - Up to 5 feet",
        "Above given Sqft rate considered for Safe bearing capacity of soil is 230 kPa, if the value is getting below 230 kPa based upon the structural design the cost may vary.",
        "Car parking basement height -1.5 feet from the Natural ground level",
        "Ceiling height - 10.5 feet and Head room height - 8 feet (Finished floor level to finished floor level) Parapet wall - 3'3\" height 4.5\" thickness wall (Head room above 1'6\" height 4.5\" thickness wall)",
        "RCC Framed Structure (Typical floor plan cost is considered in this package)",
        "Cut lintel over doors and windows",
        "Steel - JSW",
        "Cement - Ultratech",
        "Aggregates -20mm,40mm",
        "Concrete- M20 Grade",
        "Sand- M sand (Blockwork)",
        "P sand (Plastering)",
        "Fly ash- Up to Basement, sump, septic tank, compound walls, Ramp.",
        "Red Bricks- Wire cut bricks",
        "Anti-Termite (only at basement floor level)"
      ]
    }
  },
  {
    "id": "flooring",
    "name": "Flooring",
    "specs": {
      "budget-friendly": [
        "Living, Dining, Bedroom & Kitchen Flooring-Tiles value Up to 45 Rs Per Sq ft (2x2) (Paper joint tiling)",
        "Balcony & Open Area Flooring-Tiles value Up to 35 RsPer Sq ft (Paper joint tiling)",
        "Staircase Flooring-Anti-skid Tiles value Up to 35 Rs Per Sq ft (Paper joint tiling)",
        "Parking Tiles -Anti-skid Tiles value Up to 35 Rs Per Sq ft (Paper joint tiling)"
      ],
      "value-for-money": [
        "Living, Dining, Bedroom & Kitchen Flooring-Tiles value Up to 50 Rs Per Sq ft (2x2)(4x2) (Paper joint tiling)",
        "Balcony & Open Area Flooring-Tiles value Up to 45 Rs Per Sq ft (Paper joint tiling)",
        "Staircase Flooring-Anti-skid Tiles value Up to 50 Rs Per Sq ft (1x1) (Paper joint tiling)",
        "Parking Tiles-Anti-skid Tiles value Up to 50 Rs Per Sq ft (Paper joint tiling)"
      ],
      "builders-choice": [
        "Living, Dining, Bedroom & Kitchen Flooring- Tiles value Up to 60 Rs Per Sq ft (4X2) (Paper joint tiling",
        "Balcony & Open Area Flooring-Tiles value Up to 50 Rs Per Sq ft (Paper joint tiling)",
        "Staircase Flooring- Granite value Up to 120 Rs Per Sqft (Paper joint tiling)",
        "Parking Tiles-Anti-skid Tiles value Up to 60 Rs Per Sq ft (Paper joint tiling)"
      ],
      "vennila-elite": [
        "Living, Dining, Bedroom & Kitchen Flooring- Tiles value Up to 70 Rs Per Sq ft (4X2) (Paper joint tiling)",
        "Balcony & Open Area Flooring-Tiles value Up to 60 Rs Per Sq ft (Paper joint tiling)",
        "Staircase Flooring- Granite value Up to 140 Rs Per Sqft (Paper joint tiling)",
        "Parking Tiles-Anti-skid Tiles value Up to 70 Rs Per Sq ft (Paper joint tiling)"
      ]
    }
  },
  {
    "id": "fixtures",
    "name": "Fixtures",
    "specs": {
      "budget-friendly": [
        "Kitchen",
        "Ceramic Wall Tiles - 2 Feet above Kitchen Slab Tiles Rate - 45 per sqft (Paper joint tiling)",
        "Main Sink Faucet - up to Rs. 1500/-",
        "Kitchen Sink - Stainless Steel up to Rs. 3000/-",
        "Kitchen Granite Counters - 20mm Thick up to Rs. 100 per Sqft",
        "Bathroom",
        "Wall Tiles-7 Feet",
        "Tiles Rate - 35Rs/- per sqft (Spacer joint tiling with normal white cement grout)",
        "Sanitary Ware & CP Fitting value up to Rs. 8000/- per bathroom",
        "CPVC / PVC - Neroplast or Equivalent",
        "Bathroom accessories-EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower"
      ],
      "value-for-money": [
        "Kitchen",
        "Ceramic Wall Tiles - 4 Feet above Kitchen Slab Tiles Rate - 50 per Sqft (1x1.5) (1x2) (Paper joint tiling)",
        "Main Sink Faucet - up to Rs. 2500/- as per ISI standard (1Nos)",
        "Kitchen Sink - Stainless Steel up to Rs. 4000/- (1 Nos)",
        "Kitchen Granite Slab - 20mm thick up to 130 per Sqft",
        "Bathroom",
        "Wall Tiles - 7 Feet",
        "Tiles Rate -45Rs/ per sqft (Spacer joint tiling with normal white cement grout)",
        "Sanitary Ware & CP Fitting value up to Rs. 16000/- per bathroom",
        "CPVC / PVC – Supreme, Neroplast or Equivalent",
        "Bathroom accessories-EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower"
      ],
      "builders-choice": [
        "Kitchen",
        "Ceramic Wall Tiles - 4 Feet above Kitchen Slab Tiles Rate – 55 per Sqft (2x2)(4x2) (Paper joint tiling)",
        "Main Sink Faucet - up to Rs. 3000/- as per ISI standard (1Nos)",
        "Kitchen Sink - Stainless Steel up to Rs. 4500/- (1 Nos)",
        "Kitchen Granite Slab - 20mm thick up to 150 per Sqft",
        "Bathroom",
        "Wall Tiles-10 Feet",
        "Tiles Rate - 55 Rs / per Sqft (Spacer joint tiling with normal white cement grout)",
        "Sanitary Ware & CP Fitting value up to Rs. 25000/- per bathroom",
        "CPVC / PVC - Finolex or Equivalent",
        "Bathroom accessories-EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower"
      ],
      "vennila-elite": [
        "Kitchen",
        "Ceramic Wall Tiles- Upto ceiling height above Kitchen Slab Tiles Rate – 60 per Sqft (2x2)(4x2) (Paper joint tiling)",
        "Main Sink Faucet -upto Rs-3500/- as per ISI standard (1Nos)",
        "Kitchen Sink - Quartz upto Rs - 9000/- (1 Nos)",
        "Kitchen Granite Slab -20mm Thick upto 165 per Sqft",
        "Bathroom",
        "Wall Tiles-10 Feet",
        "Tiles Rate - 65 Rs / per Sqft (Spacer joint tiling with normal white cement grout)",
        "Sanitary Ware & CP Fitting value up to Rs. 30000/- per bathroom",
        "CPVC / PVC -Ashirwad or Equivalent",
        "Bathroom accessories-EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower"
      ]
    }
  },
  {
    "id": "plumbing",
    "name": "Plumbing",
    "specs": {
      "budget-friendly": [
        "Bathroom",
        "1 no wash basin with tap.",
        "1 no shower with wall mixer for hot & cold water.",
        "1 no floor mount western closet with health faucet",
        "(All bathroom fittings are white color & basic model in any ISI brand).",
        "Kitchen",
        "1 no Single stainless-steel sink with 1 tap service.",
        "Service 1 no tap point & water outlet point for washing machine."
      ],
      "value-for-money": [
        "Bathroom",
        "1 no wash basin with tap.",
        "1 no shower with wall mixer for hot & cold water.",
        "1 no floor mount western closet with health faucet.",
        "(All bathroom fittings are white color & basic model in Parryware).",
        "Dining",
        "1 no wash basin with tap.",
        "Kitchen",
        "1 no Double stainless-steel sink with 1 tap.",
        "1 no RO point.",
        "Service 1 no tap point & water outlet point for washing machine."
      ],
      "builders-choice": [
        "Bathroom",
        "1 no wash basin with tap",
        "1 no shower with wall mixer for hot & cold water.",
        "1 no floor mount western closet with health faucet",
        "(All bathroom fittings are white color& basic model in Hindware)",
        "Dining",
        "1 no wash basin with tap.",
        "Kitchen",
        "1 no Double stainless-steel sink with 1 taps.",
        "1 no RO point.",
        "Service 1 no tap point & water outlet point for washing machine."
      ],
      "vennila-elite": [
        "Bathroom",
        "1 no wash basin with tap",
        "1 no shower with wall mixer for hot & cold water.",
        "1 no floor mount western closet with health faucet.",
        "(All bathroom fittings are white color& basic model in Jaquar-Essco)",
        "Dining",
        "1 no wash basin with tap",
        "Kitchen",
        "1 no Double stainless-steel sink with 1 taps.",
        "1 no RO point.",
        "Service 1 no tap point & water outlet point for washing machine."
      ]
    }
  },
  {
    "id": "door-window",
    "name": "Door & Window",
    "specs": {
      "budget-friendly": [
        "Main Door",
        "Ready Made Malaysian Teak Door with Teak Wood Frame 3.5′(Width) X 7′(Height)- Rs 20,000/- including Fixtures(1Nos)",
        "Internal Door",
        "Flush Door Along with Sal Wood Frame of 4 Inch by 3 Inch Rooms-3′(Width) X 7′(Height)-Rs 8,000/- Including fixtures",
        "Bathroom & Balcony Door -PVC Waterproof - 2.5′(Width) X 7′(Height)-Rs 8,000/- Including fixtures",
        "Windows",
        "Standard Aluminum 2 Track as per ISI Standard 4′(Width) X 4′(Height) (1:8 ratio of floor area (380Rs /sqft) excluding Grills",
        "Window grill design basic model (100 Rs / sqft) of window area"
      ],
      "value-for-money": [
        "Main Door",
        "Ready Made Malaysian Teak Door with Teak Wood Frame of 5\" by 3\" thickness 3.5′(Width) X 7′(Height)- Rs 30,000/- including Fixtures(1Nos) and Varnish",
        "Internal Door",
        "Flush Door, Skin door Along with Sal Wood Frame of 4 Inch by 3 Inch Rooms-3′(Width) X 7′(Height) - Rs 9,000/- Including fixtures",
        "Bathroom & Balcony Door -WPC Waterproof - 2.5′(Width) X 7′(Height)-Rs 8,000/- Including fixtures",
        "Windows",
        "Standard UPVC 2 Track as per ISI Standard 4′(Width) X 4′(Height) (1 :10 ratio of floor area (400Rs/sqft) excluding Grills",
        "Window grill design basic model (125 Rs / sqft) of window area"
      ],
      "builders-choice": [
        "Main Door",
        "Ready Made Malaysian Teak Door with Teak Wood Frame of 5\" by 3\" thickness 3.5′(Width) X 7′(Height)- Rs 40,000/- including Fixtures(1Nos) and Varnish",
        "Internal Door",
        "Flush Door with Laminates Along with Sal Wood Frame of 4 Inch by 3 Inch Rooms-3′(Width) X 7′(Height) -Rs 10,000/- Including fixtures",
        "Bathroom & Balcony Door-High quality design WPC Door -2.5′(Width) X 7′(Height)-Rs 9,000/- Including fixtures",
        "Windows",
        "Standard UPVC 2.5 Track with mesh window as per ISI Standard 4′(Width) X 4′(Height) (1 :10 ratio of floor area (430Rs/sqft) excluding Grills",
        "Window grill design basic model (150 Rs / sqft) of window area"
      ],
      "vennila-elite": [
        "Main Door",
        "Ready Made Malaysian Teak Door with Teak Wood Frame of 5\" by 3\" thickness 3.5′(Width) X 7′(Height)- Rs 50,000/- including Fixtures, Digital lock (1Nos) and Varnish",
        "Internal Door",
        "Flush Door with Laminates Along with Sal Wood Frame of 4 Inch by 3 Inch Rooms-3′(Width) X 7′(Height) -Rs 12,000/- Including fixtures",
        "Bathroom & Balcony Door-High quality design WPC Door -2.5′(Width) X 7′(Height)-Rs 10,000/- Including fixtures",
        "Windows",
        "Standard UPVC 2.5 Track with mesh window as per ISI Standard 4′(Width) X 4′(Height) (1 :10 ratio of floor area (450Rs/sqft) excluding Grills",
        "Window grill design basic model (175 Rs / sqft) of window area"
      ]
    }
  },
  {
    "id": "painting",
    "name": "Painting",
    "specs": {
      "budget-friendly": [
        "Interior",
        "1 coat Birla Putty + Tractor Emulsion",
        "Exterior",
        "Asian Primer with Ace Emulsion"
      ],
      "value-for-money": [
        "Interior",
        "2 coat Birla Putty or equivalent + 1coat primer + 2 cost Tractor Emulsion paint (Asian brand)",
        "Exterior",
        "1coat primer + 2coat Ace or equivalent paint (Asian brand)"
      ],
      "builders-choice": [
        "Interior",
        "2 coat Birla Putty or equivalent + 1cost primer + 2coat Premium paint (Asian brand)",
        "Exterior",
        "1coat white cement wash + 1cost primer + 2coat Apex or equivalent paint (Asian brand)"
      ],
      "vennila-elite": [
        "Interior",
        "2 coat Birla Putty or equivalent + 1cost primer + 2coat Premium paint (Asian brand)",
        "Exterior",
        "1coat white cement wash + 1cost primer + 2coat Ultima or equivalent paint (Asian brand)"
      ]
    }
  },
  {
    "id": "electricals",
    "name": "Electricals",
    "specs": {
      "budget-friendly": [
        "Wires - ISI brand or equivalent",
        "Switches- Any ISI Brand (White colour)"
      ],
      "value-for-money": [
        "Wires - Orbit FLRS or equivalent",
        "Switches- Anchor roma (White colour) basic mode"
      ],
      "builders-choice": [
        "Wires -Finolex FLRS or equivalen",
        "Switches - GM (G9 - White colour) basic mode"
      ],
      "vennila-elite": [
        "Wires - Polycab FLRS or equivalent",
        "Switches-Legerand (Mylinc - White colour) basic model"
      ]
    }
  },
  {
    "id": "loft-shelves",
    "name": "Loft & Shelves",
    "specs": {
      "budget-friendly": [
        "Not applicable",
        "Not applicable"
      ],
      "value-for-money": [
        "1 Loft in each bedroom, kitchen",
        "1 Shelf in each bedroom, kitchen and L-Shape kitchen counter top."
      ],
      "builders-choice": [
        "1 Loft in each bedroom, kitchen",
        "1 Shelf in each bedroom, kitchen and L-Shape kitchen counter top."
      ],
      "vennila-elite": [
        "1 Loft in each bedroom, kitchen",
        "1 Shelf in each bedroom, kitchen and L-Shape kitchen counter top."
      ]
    }
  },
  {
    "id": "inclusive",
    "name": "Inclusive",
    "specs": {
      "budget-friendly": [
        "Overhead Tank: Not in our scope"
      ],
      "value-for-money": [
        "Overhead Tank: 1000 liters Sintex (Rest over the roof slab)",
        "MS Staircase Railing",
        "Balcony elevation - MS Staircase handrail upto 15 rft."
      ],
      "builders-choice": [
        "Overhead Tank: .1000 ltrs Sintex (Rest over 6\"inch above the roof slab)",
        "SS 304 Staircase Railing.",
        "Balcony elevation - SS handrail upto 15 rft",
        "Ceiling putty (Putty either RCC ceiling or False ceiling)"
      ],
      "vennila-elite": [
        "Overhead Tank: 2000 ltrs Sintex (Rest over 6\"inch above the roof slab)",
        "SS 304 Staircase Railing.",
        "Balcony elevation - 10mm Toughened glass handrail upto 15 rft.",
        "Safety gates only 01no for Main door (Max size for 3'6\" x 7' feet) model range of 10000 Rupees",
        "Steel ladder for head room basic model",
        "Ceiling putty (Putty either RCC ceiling or False ceiling)"
      ]
    }
  },
  {
    "id": "exclusion",
    "name": "Exclusion",
    "specs": {
      "budget-friendly": [
        "Compound Wall",
        "Lift",
        "Borewell",
        "Roof weathering",
        "Carpentry & other wooden work",
        "EB Connections & Charges",
        "Water Connections & Charges",
        "Underground water storage Sump Rs 23 Per Litre",
        "Underground septic tank Rs 21 Per Litre",
        "Overhead sintex tank Rs.12 per litre",
        "Overhead concrete tank Rs 25 per litre",
        "Set back area development",
        "Ceiling putty",
        "OTS - Open to sky - Glass and grill",
        "Elevation Work",
        "Water recycling tank",
        "Rainwater filtration system",
        "Additional foundation height",
        "Additional basement height",
        "Rainwater Harvesting system",
        "Structural design.",
        "Elevation 3D design.",
        "Govt approval charges.",
        "Safety gates and compound wall gates",
        "Dewatering charges",
        "Soak pits",
        "Soil testing",
        "Cool roof tile",
        "Tie beam additional cost is applicable if basement height goes above 3 feet height.",
        "Depends up on the condition of soil and congested area, neigbours compound wall or any issue in neigbours building will not in our scope.",
        "Steel ladder head room"
      ],
      "value-for-money": [
        "Compound Wall",
        "Lift",
        "Borewell",
        "Front Elevation",
        "Carpentry & other wooden work",
        "EB Connections & Charges",
        "Water Connections & Charges",
        "Underground water storage Sump Rs 24 Per Litre",
        "Underground septic tank Rs 22 Per Litre",
        "Overhead concrete tank Rs 45 per litre",
        "Set back area development",
        "Ceiling putty",
        "OTS - Open to sky - Glass and grill",
        "Elevation Work",
        "Water recycling tank",
        "Rainwater filtration system",
        "Additional foundation height",
        "Additional basement height",
        "Rainwater Harvesting system",
        "Govt approval charges",
        "Safety gates and compound wall gates",
        "Dewatering charges",
        "Soak pits",
        "Soil testing",
        "Cool roof tile",
        "Tie beam additional cost is applicable if basement height goes above 3 feet height.",
        "Depends up on the condition of soil and congested area, neigbours compound wall or any issue in neigbours building will not in our scope.",
        "Steel ladder head room"
      ],
      "builders-choice": [
        "Compound Wall",
        "Lift",
        "Borewell",
        "Front Elevation",
        "Carpentry & other wooden work",
        "EB Connections & Charges",
        "Water Connections & Charges",
        "Underground water storage Sump Rs 26 Per Litre",
        "Underground septic tank Rs 24 Per Litre",
        "Overhead concrete tank Rs.50 per litre",
        "Set back area development",
        "OTS - Open to sky - Glass and grill",
        "Elevation Work",
        "Water recycling tank",
        "Rainwater filtration system",
        "Additional foundation height",
        "Additional basement height",
        "Rainwater Harvesting system",
        "Govt approval Charges.",
        "Safety gates and compound wall gates",
        "Dewatering charges",
        "Soak pits",
        "Soil testing",
        "Cool roof tile",
        "Tie beam additional cost is applicable if basement height goes above 3 feet height.",
        "Depends up on the condition of soil and congested area, neigbours compound wall or any issue in neigbours building will not in our scope.",
        "Steel ladder head room"
      ],
      "vennila-elite": [
        "Compound Wall",
        "Lift",
        "Borewell",
        "Front Elevation",
        "Carpentry & other wooden work",
        "EB Connections & Charges",
        "Water Connections & Charges",
        "Underground water storage Sump Rs 26 Per Litre",
        "Underground septic tank Rs 24 Per Litre",
        "Overhead concrete tank Rs.55 per litre",
        "Set back area development",
        "OTS - Open to sky - Glass and grill",
        "Elevation Work",
        "Water recycling tank",
        "Rainwater filtration system",
        "Additional foundation height",
        "Additional basement height",
        "Rainwater Harvesting system",
        "Govt approval charges",
        "Safety and compound wall gates",
        "Dewatering charges",
        "Soak pits",
        "Soil testing",
        "Cool roof tile",
        "Tie beam additional cost is applicable if basement height goes above 3 feet height.",
        "Depends up on the condition of soil and congested area, neighbours compound wall or any issue in neighbours building will not in our scope."
      ]
    }
  }
];
