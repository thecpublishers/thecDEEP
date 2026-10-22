import { useState } from 'react';
import { Icon } from './Icon';

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallbackLabel?: string;
};

/**
 * Local image with a designed fallback, so a mistyped content path never
 * produces a browser broken-image icon.
 */
export function SafeImage({
  src,
  alt,
  className,
  loading = 'lazy',
  fallbackLabel = 'Image placeholder',
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`safe-image-fallback ${className ?? ''}`.trim()}
        role={alt ? 'img' : undefined}
        aria-label={alt ? `${alt} (image unavailable)` : undefined}
        aria-hidden={alt ? undefined : true}
      >
        <Icon name="book" size={24} />
        <span>{fallbackLabel}</span>
        <small>Replace the image file or check its local path.</small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
