import { Link } from 'react-router-dom';

type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`logo logo--${variant} ${className}`.trim()}
      aria-label="Thec Writers & Publishers — Home"
    >
      <img
        className="logo__image"
        src="/images/brand/thec-wordmark.png"
        alt=""
        aria-hidden="true"
        draggable={false}
      />
    </Link>
  );
}
