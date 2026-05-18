/**
 * SEO Utilities - Helper functions for metadata, breadcrumbs, and optimizations
 */

const SITE_URL = "https://legitworksolutions.com";
const SITE_NAME = "LegitWork Solutions";

// ====== BREADCRUMB GENERATOR ======
export const generateBreadcrumbs = (pathname) => {
  const breadcrumbMap = {
    "/": [{ name: "Home", url: "/" }],
    "/about": [{ name: "About Us", url: "/about" }],
    "/services": [{ name: "Services", url: "/services" }],
    "/labour-laws": [{ name: "Labour Laws", url: "/labour-laws" }],
    "/gallery": [{ name: "Gallery", url: "/gallery" }],
    "/clients": [{ name: "Clients", url: "/clients" }],
    "/blog": [{ name: "Blog", url: "/blog" }],
    "/contact": [{ name: "Contact", url: "/contact" }],
    "/payment-portals": [{ name: "Payment Portals", url: "/payment-portals" }],
  };

  return breadcrumbMap[pathname] || [{ name: "Home", url: "/" }];
};

// ====== CANONICAL URL BUILDER ======
export const getCanonicalUrl = (pathname) => {
  // Remove trailing slashes except for root
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return `${SITE_URL}${cleanPath}`;
};

// ====== ENSURE ABSOLUTE URL ======
export const ensureAbsoluteUrl = (url, baseUrl = SITE_URL) => {
  if (!url) return baseUrl;
  if (url.startsWith("http")) return url;
  if (url.startsWith("/")) return `${baseUrl}${url}`;
  return `${baseUrl}/${url}`;
};

// ====== PAGE METADATA DEFINITIONS ======
export const pageMetadata = {
  home: {
    title: "Labour Law Compliance & HR Services India",
    description: "LegitWork Solutions - Leading labour law compliance, payroll outsourcing, and HR consulting services in India. Trusted by 100+ companies for statutory compliance.",
    keywords: "labour law compliance, HR services, payroll outsourcing, India",
    ogImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
  },
  about: {
    title: "About Us - 15+ Years of Labour Law Expertise",
    description: "Learn about LegitWork Solutions LLP - a team of seasoned labour law professionals and HR consultants with 15+ years of experience helping Indian businesses achieve 100% statutory compliance.",
    keywords: "about, team, labour law consultants, HR experts",
    ogImage: "https://images.unsplash.com/photo-1758518727707-b023e285b709?w=1200&h=630&fit=crop",
  },
  services: {
    title: "Services - Labour Law Compliance & HR Solutions",
    description: "Explore our comprehensive services including labour law compliance management, payroll outsourcing, contract staffing, HR consulting, audits, and licence & registration services.",
    keywords: "labour law services, HR consulting, payroll outsourcing, compliance services",
    ogImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
  },
  labourLaws: {
    title: "Labour Laws - Comprehensive Guide to Indian Regulations",
    description: "Complete guide to Indian labour laws including Code on Wages, Industrial Relations, Social Security, and Occupational Safety. Understand compliance requirements and statutory obligations.",
    keywords: "labour laws, Indian regulations, statutory compliance, labour codes",
    ogImage: "https://images.unsplash.com/photo-1450101499163-c8917c3971d7?w=1200&h=630&fit=crop",
  },
  gallery: {
    title: "Gallery - LegitWork Solutions Office & Team",
    description: "Explore our office locations, team, and work environment at LegitWork Solutions. See the faces behind our labour law compliance services.",
    keywords: "gallery, office, team, workplace",
    ogImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
  },
  clients: {
    title: "Clients - Trusted by Leading Indian Companies",
    description: "Meet our diverse client base spanning manufacturing, IT, services, and retail sectors. We've helped 100+ companies achieve statutory compliance.",
    keywords: "clients, case studies, companies, testimonials",
    ogImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
  },
  blog: {
    title: "Blog - Labour Law Insights & HR Tips",
    description: "Latest articles on labour law compliance, HR best practices, statutory updates, and industry insights from LegitWork Solutions experts.",
    keywords: "blog, articles, labour law news, HR tips, compliance updates",
    ogImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
  },
  contact: {
    title: "Contact Us - Get in Touch with LegitWork Solutions",
    description: "Contact LegitWork Solutions for labour law compliance, payroll outsourcing, and HR consulting services. Reach us via phone, email, or visit our office in Ahmedabad.",
    keywords: "contact, phone, email, office, enquiry",
    ogImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop",
  },
  paymentPortals: {
    title: "Payment Portals - Access Government Portals",
    description: "Quick links to important government payment portals for statutory compliance including EPF, ESI, tax, and labour-related portals.",
    keywords: "payment portals, EPF, ESI, tax portals",
    ogImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
  },
};

// ====== GET PAGE METADATA ======
export const getPageMetadata = (pageKey) => {
  return pageMetadata[pageKey] || pageMetadata.home;
};

// ====== LOCATION-BASED SEO DATA ======
export const locationSeoData = {
  ahmedabad: {
    name: "Ahmedabad",
    region: "Gujarat",
    latitude: 23.0225,
    longitude: 72.5714,
    title: "Labour Law Compliance Services in Ahmedabad, Gujarat",
    description: "LegitWork Solutions - Trusted labour law compliance, payroll outsourcing, and HR consulting services in Ahmedabad. Serving 100+ companies across Gujarat.",
    address: "104, Akshar Tower, Off. C.G. Road, Ahmedabad, Gujarat 380006",
    phone: "+91-70168-68061",
  },
  mumbai: {
    name: "Mumbai",
    region: "Maharashtra",
    latitude: 19.076,
    longitude: 72.8479,
    title: "Labour Law Compliance Services in Mumbai, Maharashtra",
    description: "LegitWork Solutions - Professional labour law compliance and HR consulting services in Mumbai. Trusted by leading companies across Maharashtra.",
    address: "Business Tower, Bandra, Mumbai, Maharashtra",
    phone: "+91-90540-61354",
  },
};

// ====== ALT TEXT REGISTRY ======
// Centralized registry for meaningful alt text across the site
export const altTextRegistry = {
  // Hero images
  heroHome: "Team working on labour law compliance at LegitWork Solutions",
  heroAbout: "Professional team of labour law consultants and HR experts",
  heroContact: "Contact form for labour law compliance services inquiry",
  heroServices: "Comprehensive labour law and HR services illustration",

  // Team images
  teamJainikShah: "Jainik Shah, Director and Founder of LegitWork Solutions",
  teamHemangShah: "Hemang Shah, Executive Director overseeing business operations",
  teamAmitDesai: "Amit Desai, Compliance Manager specializing in statutory audits",
  teamSneha Patel: "Sneha Patel, Payroll Operations Lead managing compliance for 50+ clients",

  // Service icons/images
  serviceCompliance: "Labour law compliance management services icon",
  servicePayroll: "Payroll processing and outsourcing services icon",
  serviceStaffing: "Contract staffing and manpower outsourcing services icon",
  serviceConsulting: "HR consulting and advisory services icon",
  serviceAudit: "Labour law audit and assessment services icon",
  serviceLicence: "Licence and registration services icon",

  // Logo
  logo: "LegitWork Solutions logo",
  ogImage: "LegitWork Solutions - Professional labour law compliance and HR services",
};

// ====== INTERNAL LINKING DATA ======
// Predefined internal links for optimization
export const internalLinkData = {
  services: [
    {
      title: "Labour Law Compliance Management",
      url: "/services#compliance",
      description: "Complete compliance solutions",
    },
    {
      title: "Payroll Outsourcing & Processing",
      url: "/services#payroll",
      description: "End-to-end payroll management",
    },
    {
      title: "Contract Staffing & Manpower",
      url: "/services#staffing",
      description: "Flexible workforce solutions",
    },
    {
      title: "HR Consulting & Advisory",
      url: "/services#consulting",
      description: "Strategic HR guidance",
    },
    {
      title: "Labour Law Audit & Assessment",
      url: "/services#audit",
      description: "Thorough compliance audits",
    },
  ],
  labourLaws: [
    {
      title: "Code on Wages 2019",
      url: "/labour-laws#wages",
      description: "Wage payment and bonus regulations",
    },
    {
      title: "Industrial Relations Code 2020",
      url: "/labour-laws#industrial",
      description: "Employee relations and dispute resolution",
    },
    {
      title: "Code on Social Security 2020",
      url: "/labour-laws#social-security",
      description: "EPF, ESI, gratuity, and social benefits",
    },
    {
      title: "Occupational Safety Code 2020",
      url: "/labour-laws#ohs",
      description: "Workplace safety and health regulations",
    },
  ],
};

// ====== HEADING HIERARCHY CHECKER ======
export const validateHeadingHierarchy = (headings) => {
  const levels = headings.map((h) => parseInt(h.level));
  const issues = [];

  // Check for single H1
  const h1Count = levels.filter((l) => l === 1).length;
  if (h1Count !== 1) {
    issues.push(`Found ${h1Count} H1 tags. Each page should have exactly 1 H1.`);
  }

  // Check for proper hierarchy (no jumping levels)
  let previousLevel = 0;
  levels.forEach((level, index) => {
    if (level > previousLevel + 1) {
      issues.push(
        `Heading hierarchy jump detected at position ${index}: H${previousLevel} → H${level}`
      );
    }
    previousLevel = level;
  });

  return {
    isValid: issues.length === 0,
    issues,
    summary: `Found ${h1Count} H1, proper hierarchy: ${issues.length === 0 ? "Yes" : "No"}`,
  };
};

// ====== KEYWORDS SUGGESTION ======
export const keywordSuggestions = {
  primary: [
    "labour law compliance India",
    "payroll outsourcing services",
    "HR consulting India",
    "statutory compliance",
    "labour laws India",
    "contract staffing",
    "employee compliance",
  ],
  longTail: [
    "labour law compliance services in Ahmedabad",
    "payroll outsourcing company in India",
    "HR consulting services Gujarat",
    "statutory compliance management India",
    "contract staffing services Mumbai",
    "labour audit services India",
  ],
  locationBased: {
    ahmedabad: [
      "labour law compliance Ahmedabad",
      "payroll services Ahmedabad",
      "HR consulting Ahmedabad",
      "compliance services Gujarat",
    ],
    mumbai: [
      "labour law compliance Mumbai",
      "payroll services Mumbai",
      "HR consulting Mumbai",
      "compliance services Maharashtra",
    ],
  },
};

// ====== IMAGE OPTIMIZATION DATA ======
export const imageOptimizationConfig = {
  // Recommended image dimensions for different use cases
  dimensions: {
    ogImage: { width: 1200, height: 630 },
    heroBanner: { width: 1920, height: 600 },
    serviceThumbnail: { width: 400, height: 300 },
    teamMember: { width: 300, height: 400 },
    heroTeam: { width: 600, height: 600 },
    galleryImage: { width: 600, height: 400 },
    logo: { width: 200, height: 60 },
  },
  // Lazy loading thresholds
  lazyLoad: {
    aboveTheFold: false,
    belowTheFold: true,
    inCarousel: true,
    inModal: false,
  },
};

// ====== CRAWLABILITY RECOMMENDATIONS ======
export const crawlabilityChecks = {
  robots: {
    disallowed: ["/api/", "/admin/", "/private/"],
    allowed: ["/", "/services", "/about", "/contact"],
  },
  noIndexPages: ["/payment-portals"],
  canonicalRequired: true,
  mobileOptimized: true,
};
