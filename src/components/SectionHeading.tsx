import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  action?: ReactNode;
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  action,
  id,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`.trim()}>
      <div className="section-heading__main">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={id}>{title}</h2>
        {intro ? <div className="section-heading__intro">{intro}</div> : null}
      </div>
      {action ? <div className="section-heading__action">{action}</div> : null}
    </div>
  );
}
