/**
 * SEO Schema Generators - Reusable JSON-LD schema generators
 * Ensures valid, structured data for search engines and rich results
 */

const SITE_URL = "https://legitworksolutions.com";
const SITE_NAME = "LegitWork Solutions";

// ====== ORGANIZATION SCHEMA ======
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LegitWork Solutions LLP",
  "alternateName": "Legitwork",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "description": "Labour law compliance, payroll outsourcing, and HR consulting services in India",
  "sameAs": [
    "https://www.linkedin.com/company/legitwork-solutions",
    "https://twitter.com/legitwork",
  ],
  "contact": {
    "@type": "ContactPoint",
    "telephone": "+91-70168-68061",
    "contactType": "Customer Service",
    "email": "info@legitworksolutions.com",
    "areaServed": ["IN-GJ", "IN-MH"],
    "availableLanguage": ["en", "gu", "hi"],
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "104, Akshar Tower, Off. C.G. Road",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380006",
    "addressCountry": "IN",
  },
  "foundingDate": "2008",
  "foundingLocation": "Ahmedabad, Gujarat, India",
  "numberOfEmployees": "15+",
  "areaServed": ["Ahmedabad", "Mumbai", "Gujarat", "Maharashtra", "India"],
};

// ====== LOCAL BUSINESS SCHEMA ======
export const localBusinessSchema = (location = "Ahmedabad") => {
  const locations = {
    Ahmedabad: {
      street: "104, Akshar Tower, Off. C.G. Road",
      city: "Ahmedabad",
      region: "Gujarat",
      postal: "380006",
      phone: "+91-70168-68061",
      coords: { latitude: 23.0225, longitude: 72.5714 },
    },
    Mumbai: {
      street: "Business Tower, Bandra",
      city: "Mumbai",
      region: "Maharashtra",
      postal: "400050",
      phone: "+91-90540-61354",
      coords: { latitude: 19.076, longitude: 72.8479 },
    },
  };

  const loc = locations[location] || locations.Ahmedabad;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": `${SITE_NAME} - ${location}`,
    "description": `Labour law compliance, payroll outsourcing, and HR consulting services in ${location}, India`,
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "image": `${SITE_URL}/og-image.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": loc.street,
      "addressLocality": loc.city,
      "addressRegion": loc.region,
      "postalCode": loc.postal,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": loc.coords.latitude,
      "longitude": loc.coords.longitude,
    },
    "telephone": loc.phone,
    "email": "info@legitworksolutions.com",
    "areaServed": ["Ahmedabad", "Mumbai", "Gujarat", "Maharashtra"],
    "priceRange": "$$",
    "sameAs": [
      "https://www.linkedin.com/company/legitwork-solutions",
      "https://twitter.com/legitwork",
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
        "hoursAvailable": "IST",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00",
      },
    ],
  };
};

// ====== PROFESSIONAL SERVICE SCHEMA ======
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "LegitWork Solutions",
  "description": "Labour law compliance and HR consulting services",
  "url": SITE_URL,
  "telephone": "+91-70168-68061",
  "email": "info@legitworksolutions.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "104, Akshar Tower, Off. C.G. Road",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380006",
    "addressCountry": "IN",
  },
  "priceRange": "$$",
  "image": `${SITE_URL}/og-image.png`,
  "knowsAbout": [
    "Labour Law Compliance",
    "Payroll Outsourcing",
    "HR Consulting",
    "Statutory Compliance",
    "Contract Staffing",
  ],
};

// ====== BREADCRUMB LIST SCHEMA ======
export const breadcrumbSchema = (breadcrumbs = []) => {
  const items = [
    { name: "Home", url: SITE_URL },
    ...breadcrumbs,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url,
    })),
  };
};

// ====== FAQ PAGE SCHEMA ======
export const faqPageSchema = (faqs = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
};

// ====== ARTICLE SCHEMA (Future Blog) ======
export const articleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.description,
    "image": article.image || `${SITE_URL}/og-image.png`,
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "author": {
      "@type": "Organization",
      "name": article.author || SITE_NAME,
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
        "width": 250,
        "height": 60,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
};

// ====== ABOUT PAGE SCHEMA ======
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About LegitWork Solutions",
  "description": "Learn about our team, values, and 15+ years of experience in labour law compliance",
  "url": `${SITE_URL}/about`,
  "mainEntity": {
    "@type": "Organization",
    "name": "LegitWork Solutions",
    "founded": "2008",
    "description": "Labour law compliance and HR consulting firm",
    "knowsAbout": [
      "Labour Law Compliance",
      "HR Management",
      "Payroll Processing",
    ],
  },
};

// ====== SERVICE PAGE SCHEMA ======
export const servicePageSchema = (services = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "ServiceCollection",
    "name": "Professional Services",
    "provider": organizationSchema,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Labour Law & HR Services",
      "itemListElement": services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "Organization",
            "name": SITE_NAME,
          },
        },
      })),
    },
  };
};

// ====== CONTACT PAGE SCHEMA ======
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact LegitWork Solutions",
  "description": "Get in touch with our team for labour law compliance services",
  "url": `${SITE_URL}/contact`,
  "mainEntity": {
    "@type": "Organization",
    "name": SITE_NAME,
    "email": "info@legitworksolutions.com",
    "telephone": "+91-70168-68061",
  },
};

// ====== AggregateRating SCHEMA (Future Reviews) ======
export const aggregateRatingSchema = (ratingData = {}) => {
  const { ratingValue = 4.8, ratingCount = 50, reviewCount = 45 } = ratingData;

  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": ratingValue,
    "ratingCount": ratingCount,
    "reviewCount": reviewCount,
    "bestRating": "5",
    "worstRating": "1",
  };
};

// ====== HELPER: Merge schemas ======
export const mergeSchemas = (schemas) => {
  if (!schemas || schemas.length === 0) return null;
  if (schemas.length === 1) return schemas[0];

  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
};

// ====== HELPER: Validate schema ======
export const validateSchema = (schema) => {
  if (!schema || typeof schema !== "object") {
    console.warn("Invalid schema: must be an object");
    return false;
  }

  if (!schema["@type"]) {
    console.warn("Invalid schema: missing @type");
    return false;
  }

  if (!schema["@context"]) {
    console.warn("Invalid schema: missing @context");
    return false;
  }

  return true;
};
