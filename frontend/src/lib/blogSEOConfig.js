/**
 * Blog SEO Architecture
 * Future-ready structure for blog post management
 * Includes article schema, slug generation, and metadata handling
 */

import { articleSchema, breadcrumbSchema } from "./seoSchemas";

/**
 * Blog Post Interface Template
 * Use this template when creating blog posts in the future
 */
export const blogPostTemplate = {
  id: "",
  slug: "", // URL-friendly version: "understanding-labour-codes"
  title: "",
  description: "",
  content: "",
  author: "LegitWork Solutions",
  authorBio: "Labour law compliance experts",
  category: "", // labour-law, compliance, payroll, hr-tips, etc.
  tags: [],
  featuredImage: "",
  featuredImageAlt: "",
  publishedDate: "", // ISO format: "2024-03-15T10:00:00Z"
  modifiedDate: "", // ISO format
  readingTime: 0, // in minutes
  seoMetadata: {
    title: "",
    description: "",
    keywords: "",
    canonicalUrl: "",
  },
  relatedPosts: [],
  faqs: [], // FAQ schema support
};

/**
 * Blog Categories
 */
export const blogCategories = {
  "labour-law": {
    name: "Labour Law",
    description: "Latest updates and guides on Indian labour laws",
    slug: "labour-law",
    color: "#00AEEF",
  },
  compliance: {
    name: "Compliance",
    description: "Statutory compliance tips and best practices",
    slug: "compliance",
    color: "#00D4AA",
  },
  payroll: {
    name: "Payroll",
    description: "Payroll processing, tax, and salary management",
    slug: "payroll",
    color: "#0D4C73",
  },
  "hr-tips": {
    name: "HR Tips",
    description: "Human resources management and employee relations",
    slug: "hr-tips",
    color: "#00AEEF",
  },
  "case-studies": {
    name: "Case Studies",
    description: "Real-world compliance success stories",
    slug: "case-studies",
    color: "#00D4AA",
  },
};

/**
 * Generate blog post metadata
 */
export const generateBlogPostSEO = (post) => {
  if (!post.slug || !post.title) {
    console.warn("Blog post must have slug and title");
    return null;
  }

  const canonicalUrl = `https://legitworksolutions.com/blog/${post.slug}`;

  return {
    title: `${post.title} | LegitWork Solutions Blog`,
    description: post.description || post.content?.substring(0, 160),
    keywords: post.tags?.join(", "),
    canonicalUrl,
    ogImage: post.featuredImage,
    ogImageAlt: post.featuredImageAlt || post.title,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate || post.publishedDate,
    author: post.author,
    schema: articleSchema({
      title: post.title,
      description: post.description,
      image: post.featuredImage,
      publishedDate: post.publishedDate,
      modifiedDate: post.modifiedDate,
      author: post.author,
      url: canonicalUrl,
    }),
  };
};

/**
 * Generate URL-friendly slug from title
 */
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

/**
 * Validate blog post data
 */
export const validateBlogPost = (post) => {
  const errors = [];

  if (!post.title) errors.push("Title is required");
  if (!post.slug) errors.push("Slug is required");
  if (!post.description) errors.push("Description (meta) is required");
  if (!post.content) errors.push("Content is required");
  if (!post.publishedDate) errors.push("Published date is required");
  if (!post.category || !blogCategories[post.category]) {
    errors.push("Valid category is required");
  }
  if (!post.featuredImage) errors.push("Featured image is required");
  if (!post.featuredImageAlt) errors.push("Featured image alt text is required");

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Sample blog posts for reference (for seeding data)
 */
export const sampleBlogPosts = [
  {
    id: "1",
    slug: "understanding-new-labour-codes",
    title: "Understanding the New Labour Codes: What Employers Need to Know",
    description:
      "A comprehensive guide to the four new labour codes that consolidate 29 central labour laws in India. Learn how these codes will impact your business operations and compliance requirements.",
    category: "labour-law",
    tags: [
      "labour codes",
      "regulations",
      "compliance",
      "employer",
      "2024",
    ],
    readingTime: 8,
    featuredImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    featuredImageAlt: "Understanding Indian labour codes guide",
  },
  {
    id: "2",
    slug: "top-10-compliance-mistakes-indian-businesses",
    title: "Top 10 Compliance Mistakes Indian Businesses Make",
    description:
      "Discover the most common compliance pitfalls that businesses face and learn practical strategies to avoid them. From documentation errors to statutory filing delays, we cover it all.",
    category: "compliance",
    tags: ["compliance", "mistakes", "audit", "regulations"],
    readingTime: 10,
    featuredImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    featuredImageAlt: "Common compliance mistakes checklist",
  },
  {
    id: "3",
    slug: "epf-vs-nps-employee-retirement",
    title: "EPF vs NPS: Which is Better for Your Employees?",
    description:
      "Compare the benefits, tax implications, and long-term advantages of EPF and NPS to make informed decisions for your workforce retirement planning.",
    category: "payroll",
    tags: ["EPF", "NPS", "retirement", "benefits", "payroll"],
    readingTime: 6,
    featuredImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    featuredImageAlt: "EPF and NPS comparison guide",
  },
];

/**
 * Generate breadcrumbs for blog posts
 */
export const getBlogBreadcrumbs = (slug) => {
  return [
    { name: "Blog", url: "/blog" },
    { name: slug.replace(/-/g, " "), url: `/blog/${slug}` },
  ];
};

/**
 * Get related blog posts by category or tags
 */
export const getRelatedBlogPosts = (currentPostId, allPosts = []) => {
  const currentPost = allPosts.find((p) => p.id === currentPostId);
  if (!currentPost) return [];

  return allPosts
    .filter(
      (p) =>
        p.id !== currentPostId &&
        (p.category === currentPost.category ||
          p.tags?.some((tag) => currentPost.tags?.includes(tag)))
    )
    .slice(0, 3); // Return top 3 related posts
};

/**
 * Generate blog index page schema
 */
export const getBlogIndexSchema = (recentPosts = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "url": "https://legitworksolutions.com/blog",
    "name": "LegitWork Solutions Blog",
    "description": "Latest articles on labour law compliance, HR best practices, and statutory requirements",
    "author": {
      "@type": "Organization",
      "name": "LegitWork Solutions",
    },
    "blogPost": recentPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "image": post.featuredImage,
      "datePublished": post.publishedDate,
      "dateModified": post.modifiedDate || post.publishedDate,
      "author": {
        "@type": "Person",
        "name": post.author || "LegitWork Solutions",
      },
      "url": `https://legitworksolutions.com/blog/${post.slug}`,
    })),
  };
};

/**
 * Common blog SEO checklist for writers
 */
export const blogSEOChecklist = [
  {
    item: "Title is SEO-optimized (50-60 characters)",
    completed: false,
  },
  {
    item: "Meta description is compelling (150-160 characters)",
    completed: false,
  },
  {
    item: "Slug is URL-friendly and descriptive",
    completed: false,
  },
  {
    item: "Heading hierarchy is correct (one H1, proper H2/H3)",
    completed: false,
  },
  {
    item: "Internal links to relevant pages added (3-5 links)",
    completed: false,
  },
  {
    item: "Featured image has descriptive alt text",
    completed: false,
  },
  {
    item: "Content images have alt text",
    completed: false,
  },
  {
    item: "Primary keyword appears in first 100 words",
    completed: false,
  },
  {
    item: "Related posts are linked",
    completed: false,
  },
  {
    item: "Schema markup is valid (test with Google Rich Results)",
    completed: false,
  },
  {
    item: "Canonical URL is set correctly",
    completed: false,
  },
  {
    item: "Target keywords are included in tags",
    completed: false,
  },
];

/**
 * Blog publishing guidelines
 */
export const blogPublishingGuidelines = {
  minContentLength: 1000, // words
  recommendedContentLength: 2000,
  maxContentLength: 5000,
  imageRequirements: {
    minWidth: 1200,
    minHeight: 630,
    format: ["jpg", "png", "webp"],
    maxFileSize: 500, // KB
  },
  updateFrequency: "Weekly", // Target update frequency
  averageReadingTime: "5-10 minutes",
  targetAudience: "Indian business owners, HR professionals, compliance managers",
};
