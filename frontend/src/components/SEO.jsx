import React from "react";
import { Helmet } from "react-helmet-async";
import { validateSchema } from "@/lib/seoSchemas";

const DEFAULT_SITE_URL = "https://legitworksolutions.com";
const DEFAULT_IMAGE = "https://legitworksolutions.com/og-image.png";
const DEFAULT_SITE_NAME = "LegitWork Solutions";

// Helper to ensure URL is absolute
const ensureAbsoluteUrl = (url, baseUrl = DEFAULT_SITE_URL) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${baseUrl}${url}`;
};

/**
 * SEO Component - Comprehensive metadata management
 * Handles title, description, canonical URLs, Open Graph, Twitter Cards, and JSON-LD schemas
 * Production-ready with validation and fallbacks
 */
export default function SEO({
  // Core metadata
  title,
  description,
  keywords,
  canonicalUrl,

  // Open Graph
  ogImage,
  ogType = "website",
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogImageAlt,

  // Twitter Cards
  twitterCard = "summary_large_image",
  twitterSite = "@legitwork",
  twitterCreator,

  // Robots & Crawling
  robots = "index, follow",

  // Structured Data
  schema,
  schemas, // Multiple schemas

  // Additional metadata
  author,
  datePublished,
  dateModified,
  language = "en",
  locale = "en_IN",
  alternateLanguages = [],
}) {
  const siteName = DEFAULT_SITE_NAME;

  // Build full title with site name (avoid keyword stuffing)
  const fullTitle = title
    ? title.length > 60
      ? `${title} | ${siteName}`
      : `${title} | ${siteName}`
    : siteName;

  // Ensure description is not too long
  const safeDescription = description
    ? description.length > 160
      ? description.substring(0, 157) + "..."
      : description
    : "";

  // Ensure OG image is absolute and valid
  const absoluteOgImage = ogImage
    ? ensureAbsoluteUrl(ogImage, DEFAULT_SITE_URL)
    : DEFAULT_IMAGE;

  // Build full canonical URL
  const fullCanonicalUrl = canonicalUrl
    ? ensureAbsoluteUrl(canonicalUrl)
    : DEFAULT_SITE_URL;

  // Validate and process schemas
  let finalSchema = null;
  if (schema) {
    if (validateSchema(schema)) {
      finalSchema = schema;
    } else {
      console.warn("Invalid schema provided to SEO component");
    }
  }

  // Handle multiple schemas
  if (schemas && schemas.length > 0) {
    const validSchemas = schemas.filter(s => validateSchema(s));
    if (validSchemas.length > 1) {
      finalSchema = {
        "@context": "https://schema.org",
        "@graph": validSchemas,
      };
    } else if (validSchemas.length === 1) {
      finalSchema = validSchemas[0];
    }
  }

  return (
    <Helmet>
      {/* Basic Title & Meta */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      {safeDescription && <meta name="description" content={safeDescription} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Author & Dates for Articles */}
      {author && <meta name="author" content={author} />}
      {datePublished && <meta property="article:published_time" content={datePublished} />}
      {dateModified && <meta property="article:modified_time" content={dateModified} />}

      {/* Canonical URL - Critical for SEO */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Alternate Language Links for International SEO */}
      {alternateLanguages.map(alt => (
        <link
          key={alt.lang}
          rel="alternate"
          hrefLang={alt.lang}
          href={alt.url}
        />
      ))}

      {/* Robots & Crawling Instructions */}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="bingbot" content={robots} />

      {/* Open Graph Tags - Critical for Social Sharing */}
      <meta property="og:title" content={fullTitle} />
      {safeDescription && <meta property="og:description" content={safeDescription} />}
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card Tags - Critical for Twitter Sharing */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      <meta name="twitter:title" content={fullTitle} />
      {safeDescription && <meta name="twitter:description" content={safeDescription} />}
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:image:alt" content={ogImageAlt || "LegitWork Solutions"} />

      {/* JSON-LD Structured Data - For Rich Results */}
      {finalSchema && (
        <script type="application/ld+json">
          {JSON.stringify(finalSchema)}
        </script>
      )}

      {/* Preload critical resources */}
      <link rel="preload" as="image" href={absoluteOgImage} />
    </Helmet>
  );
}
