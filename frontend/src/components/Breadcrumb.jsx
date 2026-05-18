/**
 * Breadcrumb Component
 * SEO-optimized with schema markup
 * Improves navigation and internal linking
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { breadcrumbSchema } from '@/lib/seoSchemas';
import { CaretRight } from '@phosphor-icons/react';

const Breadcrumb = ({
  items = [],
  className = '',
  showSchema = true,
  ariaLabel = 'Breadcrumb navigation'
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  // Prepare breadcrumb data for schema
  const breadcrumbsForSchema = items.map(item => ({
    name: item.name,
    url: `https://legitworksolutions.com${item.url}`,
  }));

  return (
    <>
      {showSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema(breadcrumbsForSchema))}
        </script>
      )}
      <nav
        className={`py-3 px-4 text-sm ${className}`}
        aria-label={ariaLabel}
      >
        <ol className="flex items-center flex-wrap gap-1">
          {/* Home link */}
          <li>
            <Link
              to="/"
              className="text-primary hover:text-secondary transition-colors font-medium"
              title="Home"
            >
              Home
            </Link>
          </li>

          {/* Breadcrumb items */}
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <CaretRight
                size={16}
                weight="bold"
                className="mx-1 text-gray-400 flex-shrink-0"
                aria-hidden="true"
              />
              {item.url ? (
                <Link
                  to={item.url}
                  className="text-primary hover:text-secondary transition-colors font-medium"
                  title={item.name}
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className="text-gray-600 font-medium"
                  aria-current={index === items.length - 1 ? 'page' : undefined}
                >
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
