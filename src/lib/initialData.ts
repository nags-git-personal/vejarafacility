export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  icon: string;
  badge: string;
  deploymentTime: string;
  features: string[];
  benefits: string[];
  responsibilities: string[];
  idealFor: string[];
}

export const INITIAL_SERVICES: ServiceData[] = [
  {
    slug: "warehouse-helper-picker-packer",
    title: "Warehouse Helper, Picker & Packer Manpower Supply",
    subtitle: "Trained logistics & warehouse manpower deployed across Dubai, Abu Dhabi & UAE in 24-48 hours",
    shortDesc: "Vetted warehouse assistants, picker-packers, and order fulfillment staff to ensure uninterrupted warehouse throughput, stock accuracy, and rapid dispatch.",
    fullDesc: "Successful warehouse operations require speed, precision, and reliable staff. Vejara Facility Management supplies trained warehouse assistants, picker-packers, warehouse pickers, warehouse packers, and order picker staff across the UAE. Whether you operate a high-volume eCommerce fulfillment center, a bustling 3PL logistics hub, or a retail distribution facility, we ensure non-stop operations with immediate workforce scalability.",
    category: "Warehouse Manpower",
    icon: "PackageCheck",
    badge: "Most Requested",
    deploymentTime: "24-48 Hours",
    features: [
      "Rapid deployment within 24 to 48 hours across UAE",
      "Proficient in RF barcode scanners & WMS software",
      "Trained in FIFO/LIFO inventory & batch handling",
      "Full MOHRE compliance, health insurance & visas covered",
      "Flexible contracts: temporary, seasonal peak, or permanent",
      "On-site supervisors for large workforce deployments"
    ],
    benefits: [
      "Up to 40% reduction in fulfillment turnaround time",
      "Elimination of costly order return & dispatch errors",
      "Zero recruitment overhead, visa delays, or payroll liability",
      "Scalable manpower during peak sales (Ramadan, Black Friday, Q4)"
    ],
    responsibilities: [
      "Loading and unloading container shipments and delivery trucks",
      "Accurate picking using pick lists and digital handheld scanners",
      "Safe protective packaging, palletizing, bubble wrapping, and shrink wrapping",
      "Stock arrangement, bin allocation, and shelving",
      "Labeling, sorting, and staging goods for courier dispatch",
      "Daily inventory cycle counting and quality inspection"
    ],
    idealFor: [
      "E-Commerce Fulfillment Warehouses",
      "3PL Logistics Hubs (Al Quoz, DIC, JAFZA, KIZAD)",
      "Retail & Supermarket Distribution Centers",
      "FMCG, Food & Cold Storage Facilities"
    ]
  },
  {
    slug: "order-picker-staff",
    title: "Order Picker Staff Supply",
    subtitle: "High-speed, barcode-equipped order pickers for multi-tier fulfillment centers",
    shortDesc: "Trained order pickers experienced in handheld RF scanners, pick-to-light systems, and time-critical dispatch schedules.",
    fullDesc: "Order picking accounts for over 50% of warehouse operational costs. Vejara Facility Management provides skilled order pickers trained in digital scanners, WMS applications, and high-density picking pathways. Our pickers dramatically reduce travel time and pick errors, helping modern logistics companies fulfill same-day and next-day deliveries effortlessly.",
    category: "Order Fulfillment",
    icon: "ScanLine",
    badge: "High Precision",
    deploymentTime: "24-48 Hours",
    features: [
      "Experienced with barcode scanners & voice-directed picking",
      "Trained in piece picking, batch picking, and zone picking",
      "Knowledge of pallet jacks, order picker trucks, and conveyors",
      "Trained in safety protocols, heavy lifting mechanics, and PPE"
    ],
    benefits: [
      "99.6% order pick accuracy rate",
      "Maximized pick-per-hour rates without stock damage",
      "Rapid onboarding with zero disruption to warehouse workflow"
    ],
    responsibilities: [
      "Picking items matching exact SKU, color, and size criteria",
      "Real-time scanning and inventory location updating",
      "Verifying barcode integrity and product expiration dates",
      "Reporting stock discrepancies to warehouse supervisors"
    ],
    idealFor: [
      "Apparel & Fashion Logistics",
      "Consumer Electronics Warehouses",
      "Pharmaceutical & Healthcare Hubs",
      "Same-Day E-Commerce Centers"
    ]
  },
  {
    slug: "warehouse-packers",
    title: "Warehouse Packers & Dispatch Crew",
    subtitle: "Meticulous packing specialists ensuring zero transit damage and pristine unboxing",
    shortDesc: "Expert packaging staff skilled in carton assembly, protective wrapping, fragile handling, and carrier compliant labeling.",
    fullDesc: "A safe, secure, and well-labeled package is the hallmark of premium customer satisfaction. Our trained warehouse packing staff specialize in protective cushioning, carton sizing, automated taping, pallet strapping, and carrier compliant shipping labels (FedEx, DHL, Aramex, etc.).",
    category: "Packaging & Dispatch",
    icon: "Boxes",
    badge: "Quality Guaranteed",
    deploymentTime: "24-48 Hours",
    features: [
      "Packaging standards compliant with domestic & global shipping guidelines",
      "Fragile item protection, custom cushioning & anti-static packing",
      "Carrier label verification (barcode, shipping address, airway bill)",
      "Proficient with strapping machines, heat sealers & shrink wrappers"
    ],
    benefits: [
      "Substantial reduction in transit breakage & customer return costs",
      "Optimized volumetric packaging that lowers shipping freight fees",
      "Consistent, branded unboxing presentation for consumer shipments"
    ],
    responsibilities: [
      "Inspecting picked goods for defects before final boxing",
      "Selecting appropriate carton dimensions and void fill materials",
      "Applying fragile warning labels, tracking barcodes, and invoices",
      "Sorting outgoing cartons by courier hub and distribution zone"
    ],
    idealFor: [
      "Cosmetics, Glassware & Fragile Retail",
      "Automotive Parts & Hardware Distributors",
      "Export & Freight Forwarding Facilities",
      "Subscription Box & Custom Kit Assembly"
    ]
  },
  {
    slug: "warehouse-helpers-loading-unloading",
    title: "General Warehouse Helpers & Loading Crew",
    subtitle: "Heavy-duty loading, offloading, cross-docking, and inventory organizing manpower",
    shortDesc: "Vigorous, safety-certified warehouse helpers for container destuffing, pallet sorting, stock relocation, and daily maintenance.",
    fullDesc: "From 40-foot shipping container unloading to bulk pallet restocking, our general warehouse helpers provide the muscle and diligence your warehouse needs. Trained in ergonomic lifting, hazard avoidance, and floor cleanliness, our staff keep loading docks clear and goods moving fluidly.",
    category: "General Labor",
    icon: "Truck",
    badge: "Heavy Duty",
    deploymentTime: "24-48 Hours",
    features: [
      "Experienced in container destuffing, pallet breakdown, and sorting",
      "Proficient in manual and electric pallet jack operation",
      "Trained in loading dock safety, blind spots, and hazard awareness",
      "Available for 8-hour, 12-hour, or 24/7 rotating shifts"
    ],
    benefits: [
      "Faster truck turnaround times, avoiding costly container demurrage",
      "Safe, organized stockrooms adhering to UAE civil defense & safety codes",
      "Flexible headcounts on demand during sudden inventory arrivals"
    ],
    responsibilities: [
      "Unloading bulk imports and checking physical carton counts against BOL",
      "Transporting pallets to staging zones or racking bays",
      "Re-palletizing and shrink-wrapping goods for high-density storage",
      "Sweeping aisles, disposing of discarded packaging, and keeping docks clean"
    ],
    idealFor: [
      "Import / Export Freight Forwarders",
      "Construction Material Warehouses",
      "Industrial Equipment Suppliers",
      "Central Cold Storage Warehouses"
    ]
  },
  {
    slug: "facility-management-services",
    title: "Integrated Facility Management & Industrial Cleaning",
    subtitle: "Comprehensive facility upkeep, janitorial, sanitization, and technical maintenance",
    shortDesc: "End-to-end facility management solutions covering industrial floor scrubbing, commercial janitorial, MEP support, and perimeter upkeep.",
    fullDesc: "Maintaining a clean, safe, and fully operational commercial or industrial facility is essential for regulatory compliance and employee safety. Vejara Facility Management delivers integrated facility services, including heavy-duty warehouse floor scrubbing, office janitorial cleaning, HVAC filter maintenance, and preventive facility management.",
    category: "Facility Management",
    icon: "Building2",
    badge: "Comprehensive",
    deploymentTime: "Immediate",
    features: [
      "Ride-on scrubber & industrial sweeper operations for large warehouses",
      "Eco-friendly, Dubai Municipality approved detergents and sanitizers",
      "Routine preventive maintenance and prompt emergency repair crew",
      "Tailored Service Level Agreements (SLAs) with dedicated site supervisors"
    ],
    benefits: [
      "Guaranteed compliance with UAE Health, Safety & Environment regulations",
      "Extended lifespan of warehouse epoxy flooring and facility assets",
      "Pristine, hygienic working environment boosting staff morale"
    ],
    responsibilities: [
      "Daily industrial scrubbing of warehouse walkways and loading bays",
      "Deep cleaning of restrooms, cafeterias, and admin offices",
      "Waste segregation, compactor management, and disposal coordination",
      "Routine inspection of light fixtures, fire exits, and safety signage"
    ],
    idealFor: [
      "Large-Scale Logistics Hubs & Industrial Parks",
      "Corporate Head Offices & Commercial Towers",
      "Manufacturing & Food Processing Plants",
      "Retail Centers & Showrooms"
    ]
  },
  {
    slug: "inventory-counting-supervision",
    title: "Inventory Stock Counters & Audit Staff",
    subtitle: "Accurate physical inventory counts, cycle counts, and audit verification manpower",
    shortDesc: "Meticulous inventory counting crews for annual physical audits, monthly cycle counts, and stock reconciliation.",
    fullDesc: "Eliminate stock shrinkage and discrepancy headaches with our dedicated inventory counting crews. Equipped with digital counting tablets and handheld scanners, our audit personnel verify physical inventory against ERP/WMS records with maximum accuracy and speed.",
    category: "Inventory & Audit",
    icon: "ClipboardCheck",
    badge: "Audited Accuracy",
    deploymentTime: "24-48 Hours",
    features: [
      "Trained in blind counts, two-pass audits, and serial number verification",
      "Experienced in SAP, Oracle, NetSuite, and custom WMS data entry",
      "Rapid team scaling for weekend or overnight stocktaking shutdown",
      "Comprehensive discrepancy reporting and variance logging"
    ],
    benefits: [
      "Audit-ready inventory records certified for financial compliance",
      "Instant identification of misplaced, damaged, or slow-moving stock",
      "Zero disruption to daytime customer dispatch operations"
    ],
    responsibilities: [
      "Physical counting of items across bin locations and high-rack storage",
      "Scanning serial numbers, lot numbers, and expiry dates",
      "Re-counting variance discrepancies alongside client auditors",
      "Submitting final reconciliation sheets to management"
    ],
    idealFor: [
      "Annual Financial Inventory Audits",
      "High-Value Luxury Goods & Electronics Warehouses",
      "Automotive Spare Parts Hubs",
      "Wholesale Distribution Centers"
    ]
  }
];

export const INITIAL_TESTIMONIALS = [
  {
    clientName: "Rashid Al-Maktoum",
    company: "Gulf Logistics & Freight Services",
    designation: "Operations Director",
    sector: "3PL Logistics",
    quote: "During our seasonal peak last November, we urgently needed 45 picker-packers in Dubai South. Vejara Facility supplied vetted, hard-working staff within 36 hours. Their order accuracy was outstanding, and we experienced zero dispatch delays.",
    rating: 5
  },
  {
    clientName: "Sarah Jenkins",
    company: "Apex Retail E-Commerce",
    designation: "Supply Chain Manager",
    sector: "E-Commerce",
    quote: "Vejara has been our primary manpower partner for over two years. Their warehouse helpers and order pickers understand handheld scanners and FIFO inventory. Highly professional, fully compliant, and always reliable.",
    rating: 5
  },
  {
    clientName: "Tariq Mansour",
    company: "Emirates Cold Storage LLC",
    designation: "Warehouse General Manager",
    sector: "Cold Chain Logistics",
    quote: "Finding workers who can reliably handle cold storage conditions (-18°C) is extremely difficult. Vejara Facility provided trained staff equipped with cold-climate gear. They are our go-to manpower provider in Abu Dhabi and Dubai.",
    rating: 5
  }
];

export const INITIAL_FAQS = [
  {
    category: "Deployment & Speed",
    question: "How fast can Vejara Facility deploy warehouse helpers and picker-packers?",
    answer: "We maintain an active, fully vetted workforce ready for deployment across Dubai, Abu Dhabi, Sharjah, and other emirates within 24 to 48 hours for standard requests. Emergency deployments can often be coordinated same-day."
  },
  {
    category: "Compliance & Visas",
    question: "Are your workers legally compliant with UAE labor laws (MOHRE)?",
    answer: "Yes, 100%. All Vejara personnel hold valid UAE employment visas, comprehensive medical insurance, and adhere strictly to UAE Ministry of Human Resources and Emiratisation (MOHRE) regulations. You have zero legal, visa, or payroll liabilities."
  },
  {
    category: "Contracts & Flexibility",
    question: "What contract options are available (temporary vs. long-term)?",
    answer: "We offer complete flexibility tailored to your operational needs: short-term emergency support (days to weeks), peak season contracts (Ramadan, White Friday, Q4 surges), and long-term annual supply contracts with dedicated supervisors."
  },
  {
    category: "Training & Skills",
    question: "Are the helpers trained in barcode scanners and warehouse management systems?",
    answer: "Yes. Our picker-packers and order staff are trained in standard RF barcode scanners, pick-to-light workflows, SKU identification, and general WMS concepts. We also provide initial site orientation to align with your specific warehouse protocols."
  },
  {
    category: "Coverage & Locations",
    question: "Which areas in the UAE do you serve?",
    answer: "We provide manpower across all UAE industrial hubs including Dubai (Al Quoz, Dubai Industrial City, JAFZA, Dubai South, Ras Al Khor), Abu Dhabi (Mussafah, KIZAD, ICAD), Sharjah, and Ajman."
  },
  {
    category: "Replacement Policy",
    question: "What happens if a worker is unwell or doesn't meet our performance standards?",
    answer: "We provide an immediate replacement guarantee. If any personnel does not meet your quality or attendance expectations, we provide a trained replacement within 24 hours at no extra administrative charge."
  }
];

export const INDUSTRY_SECTORS = [
  {
    title: "E-Commerce & Quick Commerce",
    desc: "Rapid order picking, packing, and high-velocity fulfillment for online stores and dark stores.",
    icon: "ShoppingBag",
    metric: "40% Faster Fulfillment"
  },
  {
    title: "3PL & Contract Logistics",
    desc: "Scalable warehousing crew for container destuffing, palletizing, cross-docking, and multi-client distribution.",
    icon: "Warehouse",
    metric: "99.4% Dispatch Accuracy"
  },
  {
    title: "Retail & Supermarket Distribution",
    desc: "Bulk stock replenishment, carton sorting, barcode labeling, and store-ready palletizing.",
    icon: "Store",
    metric: "Zero Order Bottlenecks"
  },
  {
    title: "Cold Storage & FMCG",
    desc: "Resilient manpower trained for temperature-controlled food, dairy, and pharmaceutical logistics.",
    icon: "Snowflake",
    metric: "-20°C Certified Crew"
  },
  {
    title: "Manufacturing & Industrial Assembly",
    desc: "Line feeding, raw material staging, finished goods crating, and heavy machinery support.",
    icon: "Factory",
    metric: "Strict Safety Protocols"
  },
  {
    title: "Freight Forwarding & Air Cargo",
    desc: "Fast cargo breakdown, air waybill sorting, pallet wrapping, and air terminal compliance.",
    icon: "Plane",
    metric: "24/7 Shift Flexibility"
  }
];
