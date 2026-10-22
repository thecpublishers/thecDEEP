import { site } from '../content/site';
import { ButtonLink } from './Button';

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  showSecondary?: boolean;
  className?: string;
};

export function CTASection({
  eyebrow = 'Start a conversation',
  title = 'Ready to Bring Your Book to Life?',
  text = 'Tell us about your manuscript and let us help you plan your next step.',
  primaryLabel = 'Start Your Publishing Journey',
  primaryTo = '/publish-your-book',
  secondaryLabel = 'Chat With Our Team',
  secondaryTo = site.contact.whatsapp,
  showSecondary = true,
  className = '',
}: CTASectionProps) {
  return (
    <section className={`cta-section ${className}`.trim()} aria-labelledby="cta-heading">
      <div className="cta-section__pattern" aria-hidden="true" />
      <div className="container cta-section__inner">
        <div className="cta-section__copy">
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h2 id="cta-heading">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-section__actions">
          <ButtonLink to={primaryTo} variant="light" icon="arrow-right">
            {primaryLabel}
          </ButtonLink>
          {showSecondary ? (
            <ButtonLink
              to={secondaryTo}
              external
              variant="outline-light"
              icon="whatsapp"
              iconPosition="start"
            >
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
