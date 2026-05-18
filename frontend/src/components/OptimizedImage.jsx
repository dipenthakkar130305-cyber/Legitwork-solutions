/**
 * Optimized Image Component
 * Handles lazy loading, responsive images, and proper alt text
 * SEO-optimized with semantic HTML
 */

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const OptimizedImage = ({
  src,
  alt,
  title,
  className = '',
  containerClassName = '',
  width,
  height,
  lazyLoad = true,
  loading = 'lazy',
  decoding = 'async',
  srcSet,
  sizes,
  onLoad,
  onError,
  isDecorative = false,
  importance = 'auto',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Validate alt text (should not be empty unless decorative)
  if (!isDecorative && !alt) {
    console.warn(
      `Image at ${src} is missing alt text. Add alt text for SEO or mark as decorative with isDecorative={true}`
    );
  }

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  // Determine loading strategy
  const loadingStrategy = lazyLoad ? loading : 'eager';

  return (
    <figure className={cn('', containerClassName)}>
      <img
        src={src}
        alt={isDecorative ? '' : alt}
        title={title || (isDecorative ? '' : alt)}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          hasError && 'opacity-50',
          className
        )}
        loading={loadingStrategy}
        decoding={decoding}
        width={width}
        height={height}
        srcSet={srcSet}
        sizes={sizes}
        importance={importance}
        onLoad={handleLoad}
        onError={handleError}
        role={isDecorative ? 'presentation' : 'img'}
        {...(isDecorative && { 'aria-hidden': 'true' })}
      />
      {!isLoaded && !hasError && (
        <div
          className={cn(
            'absolute inset-0 bg-gray-200 animate-pulse rounded',
            className
          )}
          aria-hidden="true"
        />
      )}
      {hasError && (
        <div className={cn('absolute inset-0 bg-gray-300 flex items-center justify-center rounded', className)}>
          <span className="text-gray-600 text-sm">Failed to load image</span>
        </div>
      )}
    </figure>
  );
};

export default OptimizedImage;
