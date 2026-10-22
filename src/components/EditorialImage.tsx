import { useState } from 'react';
import { Icon } from './Icon';

type EditorialImageProps = {
  src: string;
  alt: string;
  caption?: string;
  placeholder?: boolean;
  ratio?: 'landscape' | 'portrait' | 'square' | 'wide';
  className?: string;
  priority?: boolean;
};

export function EditorialImage({
  src,
  alt,
  caption,
  placeholder = false,
  ratio = 'landscape',
  className = '',
  priority = false,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`editorial-image editorial-image--${ratio} ${className}`.trim()}>
      <div className="editorial-image__frame">
        {failed ? (
          <div className="image-fallback" role="img" aria-label={`${alt} (image unavailable)`}>
            <Icon name="book" size={30} />
            <span>Editorial image placeholder</span>
            <small>The image file could not be loaded.</small>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
        {placeholder ? <span className="image-placeholder-tag">Image placeholder</span> : null}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
