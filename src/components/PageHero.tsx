import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  note?: ReactNode;
  aside?: ReactNode;
  variant?: 'default' | 'soft';
  breadcrumb?: { label: string; to: string };
};

export function PageHero({
  eyebrow,
  title,
  intro,
  note,
  aside,
  variant = 'default',
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${variant}`.trim()}>
      <div className="container page-hero__grid">
        <div className="page-hero__copy">
          {breadcrumb ? (
            <Link to={breadcrumb.to} className="back-link">
              <Icon name="arrow-right" size={15} />
              {breadcrumb.label}
            </Link>
          ) : null}
          <p className="eyebrow">{eyebrow}</p>
          <h1 tabIndex={-1}>{title}</h1>
          <div className="page-hero__intro">{intro}</div>
          {note ? <div className="page-hero__note">{note}</div> : null}
        </div>
        {aside ? <div className="page-hero__aside">{aside}</div> : null}
      </div>
    </section>
  );
}
