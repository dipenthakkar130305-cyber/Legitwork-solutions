/**
 * Local SEO Configuration
 * Manages location-specific metadata, schemas, and content
 * Scalable architecture for multi-location businesses
 */

export const locationConfig = {
  ahmedabad: {
    id: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    country: "India",
    countryCode: "IN",
    regionCode: "IN-GJ",
    coordinates: {
      latitude: 23.0225,
      longitude: 72.5714,
    },
    address: {
      street: "104, Akshar Tower, Off. C.G. Road",
      city: "Ahmedabad",
      state: "Gujarat",
      postalCode: "380006",
      country: "India",
    },
    contact: {
      phone: "+91-70168-68061",
      email: "info@legitworksolutions.com",
      whatsapp: "+91-70168-68061",
    },
    seo: {
      title: "Labour Law Compliance Services in Ahmedabad, Gujarat | LegitWork Solutions",
      description:
        "Professional labour law compliance, payroll outsourcing, and HR consulting services in Ahmedabad, Gujarat. Trusted by 50+ businesses across industries for 100% statutory compliance.",
      keywords:
        "labour law compliance Ahmedabad, payroll services Ahmedabad, HR consulting Gujarat, compliance services Ahmedabad",
      slug: "/office/ahmedabad",
      canonicalUrl: "https://legitworksolutions.com/office/ahmedabad",
    },
    serviceAreas: [
      "Ahmedabad",
      "Gandhinagar",
      "Vadodara",
      "Surat",
      "Rajkot",
      "Gujarat",
    ],
    businessHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "10:00-14:00",
      sunday: "closed",
    },
    timezone: "IST",
    established: "2008",
    features: [
      "15+ years of experience",
      "Certified compliance officers",
      "Technology-driven solutions",
      "24/5 customer support",
    ],
  },
  mumbai: {
    id: "mumbai",
    name: "Mumbai",
    region: "Maharashtra",
    country: "India",
    countryCode: "IN",
    regionCode: "IN-MH",
    coordinates: {
      latitude: 19.076,
      longitude: 72.8479,
    },
    address: {
      street: "Business Tower, Fort",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400050",
      country: "India",
    },
    contact: {
      phone: "+91-90540-61354",
      email: "mumbai@legitworksolutions.com",
      whatsapp: "+91-90540-61354",
    },
    seo: {
      title: "Labour Law Compliance Services in Mumbai, Maharashtra | LegitWork Solutions",
      description:
        "Expert labour law compliance, payroll outsourcing, and HR consulting services in Mumbai, Maharashtra. Serving leading businesses with trusted statutory compliance solutions.",
      keywords:
        "labour law compliance Mumbai, payroll services Mumbai, HR consulting Maharashtra, compliance services Mumbai",
      slug: "/office/mumbai",
      canonicalUrl: "https://legitworksolutions.com/office/mumbai",
    },
    serviceAreas: [
      "Mumbai",
      "Thane",
      "Pune",
      "Nagpur",
      "Aurangabad",
      "Maharashtra",
    ],
    businessHours: {
      monday: "09:00-18:00",
      tuesday: "09:00-18:00",
      wednesday: "09:00-18:00",
      thursday: "09:00-18:00",
      friday: "09:00-18:00",
      saturday: "10:00-14:00",
      sunday: "closed",
    },
    timezone: "IST",
    established: "2017",
    features: [
      "Pan-India operations",
      "Expert compliance team",
      "Client-focused approach",
      "Rapid response support",
    ],
  },
};

/**
 * Get location-specific SEO metadata
 */
export const getLocationSEO = (locationId) => {
  const location = locationConfig[locationId];
  if (!location) {
    console.warn(`Location ${locationId} not found in config`);
    return null;
  }

  return {
    title: location.seo.title,
    description: location.seo.description,
    keywords: location.seo.keywords,
    canonicalUrl: location.seo.canonicalUrl,
    ogImage: `https://legitworksolutions.com/og-location-${locationId}.png`,
    ogImageAlt: `LegitWork Solutions ${location.name} office`,
  };
};

/**
 * Generate location schema
 */
export const getLocationSchema = (locationId) => {
  const location = locationConfig[locationId];
  if (!location) return null;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `https://legitworksolutions.com/office/${locationId}`,
    name: `LegitWork Solutions - ${location.name}`,
    description: `Labour law compliance and HR services in ${location.name}, ${location.region}`,
    url: location.seo.canonicalUrl,
    logo: "https://legitworksolutions.com/logo.png",
    image: `https://legitworksolutions.com/og-location-${locationId}.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.street,
      addressLocality: location.address.city,
      addressRegion: location.address.state,
      postalCode: location.address.postalCode,
      addressCountry: location.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    },
    telephone: location.contact.phone,
    email: location.contact.email,
    areaServed: location.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$",
    sameAs: [
      "https://www.linkedin.com/company/legitwork-solutions",
      "https://twitter.com/legitwork",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "50",
      reviewCount: "45",
      bestRating: "5",
      worstRating: "1",
    },
  };
};

/**
 * Get all locations
 */
export const getAllLocations = () => {
  return Object.values(locationConfig);
};

/**
 * Generate breadcrumbs for location pages
 */
export const getLocationBreadcrumbs = (locationId) => {
  const location = locationConfig[locationId];
  if (!location) return [];

  return [
    { name: "Locations", url: "/locations" },
    { name: location.name, url: location.seo.slug },
  ];
};

/**
 * Generate internal links to other locations
 */
export const getRelatedLocations = (currentLocationId) => {
  return getAllLocations().filter((loc) => loc.id !== currentLocationId);
};

/**
 * Format business hours for display
 */
export const formatBusinessHours = (locationId) => {
  const location = locationConfig[locationId];
  if (!location) return null;

  const hours = location.businessHours;
  return {
    weekdays: hours.monday,
    saturday: hours.saturday,
    sunday: hours.sunday,
    note: "All times in IST (Indian Standard Time)",
  };
};

/**
 * Check if service is available in location
 */
export const isServiceAvailableInLocation = (locationId, service) => {
  // Can be customized based on location-specific service availability
  const availableServices = {
    "labour-law-compliance": ["ahmedabad", "mumbai"],
    "payroll-outsourcing": ["ahmedabad", "mumbai"],
    "contract-staffing": ["ahmedabad", "mumbai"],
    "hr-consulting": ["ahmedabad", "mumbai"],
    "labour-law-audit": ["ahmedabad", "mumbai"],
    "licence-registration": ["ahmedabad", "mumbai"],
  };

  return availableServices[service]?.includes(locationId) || false;
};
