import { Link, useParams } from 'react-router-dom';
import { ButtonLink } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { SectionHeading } from '../components/SectionHeading';
import { getService, services } from '../content/services';
import { site } from '../content/site';
import { usePageMeta } from '../lib/seo';
import { NotFoundPage } from './NotFoundPage';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getService(slug ?? '');

  usePageMeta({
    title: service ? service.title : 'Service not found',
    description: service?.metaDescription ?? 'The requested service could not be found.',
  });

  if (!service) return <NotFoundPage />;

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const enquiryUrl = `/contact?service=${encodeURIComponent(service.title)}`;

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.number} · ${service.navTitle}`}
        title={service.title}
        intro={<p>{service.intro}</p>}
        note={<p>{service.shortDescription}</p>}
        breadcrumb={{ label: 'All services', to: '/services' }}
        aside={
          <div className="service-aside-card">
            <span className="service-aside-card__icon">
              <Icon name={service.icon} size={30} />
            </span>
            <p className="eyebrow">Next step</p>
            <h2>Discuss this service</h2>
            <p>
              Tell us about your manuscript, timeline, and what you need. We will recommend a
              practical route.
            </p>
            <ButtonLink to={enquiryUrl} icon="arrow-right" className="button--block">
              Make an enquiry
            </ButtonLink>
            <a href={`mailto:${site.contact.email}`} className="service-aside-card__link">
              <Icon name="mail" size={16} />
              {site.contact.email}
            </a>
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="service-aside-card__link"
            >
              <Icon name="whatsapp" size={16} />
              Chat on WhatsApp
            </a>
          </div>
        }
      />

      <section className="section service-detail" aria-labelledby="service-overview-heading">
        <div className="container service-detail__grid">
          <div className="service-detail__main">
            <div className="service-detail__image">
              <SafeImage src={service.image} alt={service.imageAlt} fallbackLabel="Service image unavailable" />
              <span className="image-placeholder-tag">Image placeholder</span>
            </div>

            <div className="prose service-detail__prose">
              <h2 id="service-overview-heading">How this service works</h2>
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="service-detail__columns">
              <div>
                <h2>What the work can include</h2>
                <ul className="check-list check-list--bordered">
                  {service.includes.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Who it is for</h2>
                <ul className="plain-list">
                  {service.suitableFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="service-note">
              <Icon name="message" size={22} />
              <div>
                <h2>Good to know</h2>
                <p>{service.note}</p>
              </div>
            </div>

            <div className="service-detail__next">
              <h2>What happens next</h2>
              <ol className="next-steps">
                <li>
                  <span>01</span>
                  <div>
                    <h3>Share your project</h3>
                    <p>
                      Send a short outline of the manuscript, its current stage, and what you hope
                      to achieve.
                    </p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Have a scoping conversation</h3>
                    <p>
                      We discuss the right scope, answer questions, and explain what information we
                      need before quoting.
                    </p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Agree the route</h3>
                    <p>
                      You receive a clear project outline covering scope, deliverables, timing, and
                      cost before work begins.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <aside className="service-detail__rail" aria-labelledby="rail-heading">
            <div className="rail-card">
              <h2 id="rail-heading">At a glance</h2>
              <dl>
                <div>
                  <dt>Service</dt>
                  <dd>{service.title}</dd>
                </div>
                <div>
                  <dt>Best for</dt>
                  <dd>Authors at different stages</dd>
                </div>
                <div>
                  <dt>Pricing</dt>
                  <dd>Project-specific quotation</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>Keffi, with remote collaboration</dd>
                </div>
              </dl>
              <ButtonLink to={enquiryUrl} variant="secondary" size="small" icon="arrow-right">
                Enquire about this service
              </ButtonLink>
            </div>
            <div className="rail-links">
              <p className="eyebrow">Other services</p>
              {related.map((item) => (
                <Link to={`/services/${item.slug}`} key={item.slug}>
                  <span>{item.title}</span>
                  <Icon name="arrow-up-right" size={15} />
                </Link>
              ))}
              <Link to="/services" className="rail-links__all">
                View all six services
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section related-services" aria-labelledby="related-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Continue exploring"
            title="Services that often work together."
            id="related-heading"
            action={
              <ButtonLink to="/services" variant="secondary" icon="arrow-right">
                All services
              </ButtonLink>
            }
          />
          <div className="related-service-grid">
            {related.map((item) => (
              <Link to={`/services/${item.slug}`} className="related-service" key={item.slug}>
                <span className="related-service__icon">
                  <Icon name={item.icon} size={24} />
                </span>
                <span className="related-service__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.shortDescription}</p>
                <span className="text-link">
                  Explore service
                  <Icon name="arrow-right" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to talk about ${service.title.toLowerCase()}?`}
        text="A short conversation is the quickest way to find out whether we are the right publishing partner for your book."
      />
    </>
  );
}
