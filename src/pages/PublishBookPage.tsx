import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/Button';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';
import { EditorialImage } from '../components/EditorialImage';
import { FAQAccordion } from '../components/FAQAccordion';
import { Icon } from '../components/Icon';
import { ProcessSteps } from '../components/ProcessSteps';
import { SectionHeading } from '../components/SectionHeading';
import { faqs } from '../content/faqs';
import { services } from '../content/services';
import { publishingRoutes, site } from '../content/site';
import { usePageMeta } from '../lib/seo';

const publishingFaqs = faqs.filter((faq) =>
  ['timeline', 'rights', 'cost', 'start', 'formats'].includes(faq.id),
);

export function PublishBookPage() {
  usePageMeta({
    title: 'Publish Your Book',
    description:
      'Start your publishing journey with Thec Writers & Publishers. Tell us about your manuscript and get clear guidance on editing, production, ISBN, and publication.',
  });

  return (
    <>
      <section className="publish-hero" aria-labelledby="publish-heading">
        <div className="container publish-hero__grid">
          <div className="publish-hero__copy">
            <p className="eyebrow">Publish your book</p>
            <h1 id="publish-heading" tabIndex={-1}>
              Your book begins with a <em>conversation.</em>
            </h1>
            <p className="publish-hero__lede">
              You do not need a finished manuscript to start. Tell us what you have, and we will
              help you understand the editorial, production, and publishing decisions ahead.
            </p>
            <div className="publish-hero__actions">
              <ButtonLink to="#publishing-enquiry" icon="arrow-right">
                Start Your Publishing Journey
              </ButtonLink>
              <ButtonLink to="/services" variant="secondary" icon="arrow-right">
                Explore our services
              </ButtonLink>
            </div>
            <div className="publish-hero__reassurance">
              <span>
                <Icon name="check" size={16} />
                A conversation first
              </span>
              <span>
                <Icon name="check" size={16} />
                Project-specific guidance
              </span>
              <span>
                <Icon name="check" size={16} />
                Clear next steps
              </span>
            </div>
            <div className="publish-hero__direct">
              <span>Prefer to talk?</span>
              <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
              <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="publish-hero__visual">
            <EditorialImage
              src="/images/hero/about-studio.svg"
              alt="Designed editorial desk scene with a manuscript and stacked books."
              ratio="landscape"
              placeholder
              priority
            />
            <div className="publish-hero__quote">
              <span className="publish-hero__quote-mark" aria-hidden="true">
                <Icon name="quote" size={28} />
              </span>
              <p>
                “We begin by understanding the book you want to write — not by selling you a
                package.”
              </p>
              <span>Thec editorial approach</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section publishing-routes" aria-labelledby="routes-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Wherever you are"
            title="There is a route for your stage."
            intro="A book idea, a partial draft, and a finished manuscript each need a different first conversation. Choose the description that sounds most like you."
            id="routes-heading"
          />
          <div className="publishing-routes__grid">
            {publishingRoutes.map((route, index) => (
              <article className="route-card" key={route.title}>
                <span className="route-card__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{route.title}</h3>
                <p>{route.text}</p>
                <ButtonLink to={route.to} variant="ghost" icon="arrow-right">
                  {route.cta}
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section publishing-services" aria-labelledby="publish-services-heading">
        <div className="container publishing-services__grid">
          <div className="publishing-services__intro">
            <p className="eyebrow">What we can handle</p>
            <h2 id="publish-services-heading">One publishing partner, from draft to distribution.</h2>
            <p>
              Most books need a combination of writing, editorial, production, and publishing
              support. We help you assemble the right combination rather than force a preset
              package.
            </p>
            <ButtonLink to="/services" variant="secondary" icon="arrow-right">
              See all services
            </ButtonLink>
          </div>
          <ul className="publishing-services__list">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>
                  <span className="publishing-services__icon">
                    <Icon name={service.icon} size={21} />
                  </span>
                  <span>
                    <strong>{service.title}</strong>
                    <small>{service.shortDescription}</small>
                  </span>
                  <Icon name="arrow-up-right" size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section process-section process-section--publish" aria-labelledby="publish-process-heading">
        <div className="container">
          <div className="process-section__head">
            <div>
              <p className="eyebrow eyebrow--light">What happens after you get in touch</p>
              <h2 id="publish-process-heading">A considered process, not a rushed promise.</h2>
            </div>
            <p>
              We take the time to understand the manuscript before recommending scope or discussing
              cost. The process below is the shape of a typical project.
            </p>
          </div>
          <ProcessSteps />
          <p className="process-section__note">
            Timelines and fees depend on scope, manuscript condition, format, and production
            choices.{' '}
            <Link to="#publishing-enquiry">Tell us about your project</Link> for a considered
            conversation.
          </p>
        </div>
      </section>

      <section className="section publish-honesty" aria-labelledby="honesty-heading">
        <div className="container publish-honesty__grid">
          <div>
            <p className="eyebrow">What to expect</p>
            <h2 id="honesty-heading">Honest advice, including when the answer is “not yet.”</h2>
            <p className="lead">
              A publishing partner should help you make an informed decision, not simply agree with
              everything you propose.
            </p>
            <p>
              We will tell you when a manuscript needs more development before production, when a
              particular publishing route is a poor fit, or when we cannot responsibly promise the
              outcome you want. That honesty is part of the service.
            </p>
          </div>
          <div className="publish-honesty__columns">
            <div>
              <h3>What we bring</h3>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={16} />
                  A professional editorial and production process
                </li>
                <li>
                  <Icon name="check" size={16} />
                  Clear scope, pricing, and next steps before work begins
                </li>
                <li>
                  <Icon name="check" size={16} />
                  Respect for your voice, rights, and decisions
                </li>
                <li>
                  <Icon name="check" size={16} />
                  Practical guidance across formats and publication routes
                </li>
              </ul>
            </div>
            <div>
              <h3>What no honest publisher can promise</h3>
              <ul className="plain-list">
                <li>Guaranteed bestseller status or sales figures</li>
                <li>Guaranteed reviews, media coverage, or awards</li>
                <li>A fixed timeline before the manuscript is assessed</li>
                <li>ISBN approval, which belongs to the issuing agency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section publish-enquiry"
        id="publishing-enquiry"
        aria-labelledby="publishing-enquiry-heading"
      >
        <div className="container publish-enquiry__grid">
          <div className="publish-enquiry__intro">
            <p className="eyebrow">Start your journey</p>
            <h2 id="publishing-enquiry-heading">Tell us about your book.</h2>
            <p>
              Share as much or as little as you have. A short description of the idea, the
              manuscript stage, and the support you need is enough for us to respond usefully.
            </p>
            <div className="publish-enquiry__contact">
              <a href={`mailto:${site.contact.email}`}>
                <Icon name="mail" size={18} />
                {site.contact.email}
              </a>
              <a href={`tel:${site.contact.phoneHref}`}>
                <Icon name="phone" size={18} />
                {site.contact.phone}
              </a>
              <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} />
                Chat on WhatsApp
              </a>
            </div>
            <p className="publish-enquiry__hours">
              <Icon name="clock" size={16} />
              {site.contact.hours}
            </p>
          </div>
          <div className="publish-enquiry__form">
            <ContactForm initialService="Publishing consultation" />
          </div>
        </div>
      </section>

      <section className="section faq-section faq-section--publish" aria-labelledby="publish-faq-heading">
        <div className="container faq-layout">
          <div className="faq-layout__intro">
            <p className="eyebrow">Practical questions</p>
            <h2 id="publish-faq-heading">Before you send your manuscript.</h2>
            <p>
              Straight answers about timelines, rights, formats, and cost. For anything specific to
              your book, contact us directly.
            </p>
            <div className="faq-layout__contact">
              <p>Need a direct answer?</p>
              <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={17} />
                Chat with our team
              </a>
            </div>
          </div>
          <FAQAccordion items={publishingFaqs} defaultOpen="timeline" idPrefix="publish-faq" />
        </div>
      </section>

      <CTASection
        eyebrow="No pressure, just clarity"
        title="Not ready to send a manuscript? That is fine."
        text="Ask a question, request a conversation, or tell us what is holding you back. We will meet you there."
        primaryLabel="Contact our team"
        primaryTo="/contact"
      />
    </>
  );
}
