import { Link } from 'react-router-dom';

type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <Link to="/" className={`logo logo--${variant} ${className}`.trim()} aria-label="Thec Writers & Publishers — Home">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" role="presentation">
          <path d="M9 12.5c4-1 7 .1 11 3.2v14c-4-3.1-7-4.2-11-3.2v-14Z" fill="currentColor" opacity=".96" />
          <path d="M31 12.5c-4-1-7 .1-11 3.2v14c4-3.1 7-4.2 11-3.2v-14Z" fill="currentColor" opacity=".72" />
          <path d="M9 12.5 20 6l11 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </span>
      <span className="logo__type">
        <span className="logo__name">
          THEC<span className="logo__dot">.</span>
        </span>
        <span className="logo__descriptor">Writers &amp; Publishers</span>
      </span>
    </Link>
  );
}
