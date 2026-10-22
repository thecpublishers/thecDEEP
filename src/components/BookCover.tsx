import { useState } from 'react';

type BookCoverProps = {
  src: string;
  alt: string;
  title: string;
  placeholder?: boolean;
  size?: 'small' | 'large';
};

export function BookCover({ src, alt, title, placeholder = false, size = 'small' }: BookCoverProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`book-cover book-cover--${size}`}>
      {failed ? (
        <div className="book-cover__fallback" role="img" aria-label={`${title} cover placeholder`}>
          <span className="book-cover__fallback-brand">THEC</span>
          <strong>{title}</strong>
          <span>Cover artwork pending</span>
        </div>
      ) : (
        <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      )}
      {placeholder ? <span className="book-cover__tag">Placeholder cover</span> : null}
    </div>
  );
}
