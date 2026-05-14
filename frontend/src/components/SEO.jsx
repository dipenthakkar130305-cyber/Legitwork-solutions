import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_SITE_URL = "https://legitworksolutions.com";
const DEFAULT_IMAGE = "https://legitworksolutions.com/og-image.png";
const DEFAULT_SITE_NAME = "Legitwork Solutions";

// Helper to ensure URL is absolute
const ensureAbsoluteUrl = (url, baseUrl = DEFAULT_SITE_URL) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${baseUrl}${url}`;
};

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterSite = "@legitwork",
  robots = "index, follow",
  schema,
}) {
  const siteName = DEFAULT_SITE_NAME;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  // Ensure OG image is absolute for social previews
  const absoluteOgImage = ensureAbsoluteUrl(ogImage, DEFAULT_SITE_URL);

  // Build full canonical URL
  const fullCanonicalUrl = canonicalUrl
    ? ensureAbsoluteUrl(canonicalUrl)
    : DEFAULT_SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      {/* Primary meta title */}
      <meta name="title" content={fullTitle} />

      {description && <meta name="description" content={description} />}

      {/* Canonical URL - only set per-page, not overriding base */}
      <link rel="canonical" href={fullCanonicalUrl} />

      <meta name="robots" content={robots} />

      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}