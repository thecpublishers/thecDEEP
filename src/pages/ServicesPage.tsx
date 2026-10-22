import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { SectionHeading } from '../components/SectionHeading';
import { services } from '../content/services';
import { processSteps, site } from '../content/site';
import { usePageMeta } from '../lib/seo';

export function ServicesPage() {
  usePageMeta({
    title: 'Publishing Services',
    description:
      'Explore Thec Writers & Publishers services: ghostwriting, editing and proofreading, printing consultation, digital publishing and ISBN support, marketing, and transcription.',
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Publishing support, shaped around <em>your book.</em>
          </>
        }
        intro={
          <p>
            Whether you need one specialist service or a partner across the whole journey, we meet
            your manuscript where it is and help it move forward.
          </p>
        }
        note={
          <p>
            No fixed packages. No invented promises. We scope each project after understanding the
            work and the outcome you have in mind.
          </p>
        }
        aside={
          <div className="hero-aside-list">
            <p className="eyebrow">At a glance</p>
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                <span>{service.number}</span>
                <span>{service.title}</span>
                <Icon name="arrow-up-right" size={16} />
              </Link>
            ))}
          </div>
        }
      />

      <section className="section services-overview" aria-labelledby="all-services-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Six areas of support"
            title="Choose the support your manuscript needs."
            id="all-services-heading"
            intro="Each service can stand alone or combine with others into a coherent publishing plan. Every enquiry begins with a conversation, not a sales script."
          />
          <div className="service-overview-grid">
            {services.map((service) => (
              <article className="service-overview-card" key={service.slug}>
                <div className="service-overview-card__image">
                  <SafeImage src={service.image} alt={service.imageAlt} fallbackLabel="Service image unavailable" />
                  <span className="image-placeholder-tag">Image placeholder</span>
                  <span className="service-overview-card__number">{service.number}</span>
                </div>
                <div className="service-overview-card__body">
                  <span className="service-overview-card__icon">
                    <Icon name={service.icon} size={23} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <ul className="service-overview-card__list">
                    {service.includes.slice(0, 3).map((item) => (
                      <li key={item}>
                        <Icon name="check" size={15} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="service-overview-card__actions">
                    <ButtonLink to={`/services/${service.slug}`} icon="arrow-right" size="small">
                      Explore service
                    </ButtonLink>
                    <ButtonLink
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="ghost"
                      size="small"
                    >
                      Enquire
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-process" aria-labelledby="services-process-heading">
        <div className="container services-process__inner">
          <div className="services-process__copy">
            <p className="eyebrow">How we begin</p>
            <h2 id="services-process-heading">A good project starts with a clear brief.</h2>
            <p>
              Tell us what you have written, where it currently stands, and what you want the
              finished book to do. We will ask the questions needed to recommend a route.
            </p>
            <ButtonLink to="/contact" variant="secondary" icon="arrow-right">
              Start an enquiry
            </ButtonLink>
          </div>
          <ol className="mini-process">
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section services-notes" aria-labelledby="service-terms-heading">
        <div className="container services-notes__grid">
          <div>
            <p className="eyebrow">Working with us</p>
            <h2 id="service-terms-heading">Clear expectations, from the start.</h2>
          </div>
          <div className="services-notes__items">
            <div>
              <h3>Project-specific scope</h3>
              <p>
                Fees and timelines are agreed after a manuscript review or detailed project
                conversation. We do not publish fixed prices because the work varies substantially.
              </p>
            </div>
            <div>
              <h3>Author involvement</h3>
              <p>
                Editorial work is collaborative. Decisions that affect your voice, rights, or
                finished book remain part of the conversation.
              </p>
            </div>
            <div>
              <h3>Honest limits</h3>
              <p>
                We cannot promise sales, awards, media coverage, or approval from ISBN agencies and
                retailers. We aim for a professional process and clear communication.
              </p>
            </div>
            <div>
              <h3>A real next step</h3>
              <p>
                If we are not the right fit for your project, we will say so. A useful
                recommendation is more valuable than a misplaced contract.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="section-footnote">
            Prefer to talk it through? Email{' '}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or{' '}
            <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              message us on WhatsApp
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection
        title="Let’s find the right next step for your manuscript."
        text="Share your project and we will help you choose the service or combination that fits."
      />
    </>
  );
}
