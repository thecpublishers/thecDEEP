import { useSearchParams } from 'react-router-dom';
import { ButtonLink } from '../components/Button';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { contactOptions, site } from '../content/site';
import { usePageMeta } from '../lib/seo';

export function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description:
      'Contact Thec Writers & Publishers in Keffi, Nasarawa State. Email, call, or WhatsApp our team for publishing enquiries, manuscripts, books, and careers.',
  });

  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service') ?? '';
  const enquiry = searchParams.get('enquiry');
  const initialService =
    requestedService ||
    (enquiry === 'finished-manuscript' ? 'Publishing consultation' : '');

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s talk about <em>your book.</em>
          </>
        }
        intro={
          <p>
            Tell us what you are writing, where you are in the process, and what you need. A real
            conversation is the best place to begin.
          </p>
        }
        note={
          <p>
            We work from Keffi, Nasarawa State, and collaborate with authors wherever they are.
            Email, phone, and WhatsApp are all welcome.
          </p>
        }
        aside={
          <div className="contact-hero-card">
            <p className="eyebrow">Direct contact</p>
            <a href={`mailto:${site.contact.email}`} className="contact-hero-card__primary">
              <Icon name="mail" size={20} />
              <span>{site.contact.email}</span>
            </a>
            <a href={`tel:${site.contact.phoneHref}`} className="contact-hero-card__secondary">
              <Icon name="phone" size={18} />
              {site.contact.phone}
            </a>
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--block"
            >
              <Icon name="whatsapp" size={17} />
              Chat on WhatsApp
            </a>
            <p className="contact-hero-card__hours">
              <Icon name="clock" size={16} />
              {site.contact.hours}
            </p>
          </div>
        }
      />

      <section className="section contact-main" aria-labelledby="contact-form-heading">
        <div className="container contact-main__grid">
          <div className="contact-main__form">
            <p className="eyebrow">Send an enquiry</p>
            <h2 id="contact-form-heading">Tell us about your project.</h2>
            <p className="contact-main__intro">
              Use this form to prepare an email to our team. We keep the process direct: review
              your message, send it from your own email app, and we will reply from there.
            </p>
            <ContactForm initialService={initialService} />
          </div>

          <aside className="contact-main__info" aria-labelledby="contact-details-heading">
            <div className="contact-info-card">
              <h2 id="contact-details-heading">Contact details</h2>
              <div className="contact-method-list">
                {contactOptions.map((option) => (
                  <a
                    href={option.href}
                    key={option.label}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="contact-method-list__icon">
                      <Icon name={option.icon} size={19} />
                    </span>
                    <span>
                      <strong>{option.label}</strong>
                      {option.value}
                    </span>
                    <Icon name="arrow-up-right" size={15} />
                  </a>
                ))}
              </div>
              <div className="contact-info-hours">
                <Icon name="clock" size={18} />
                <div>
                  <strong>Business hours</strong>
                  <p>{site.contact.hours}</p>
                </div>
              </div>
            </div>

            <div className="address-card">
              <h2>Visit or send post</h2>
              <div>
                <p className="address-card__label">
                  <Icon name="pin" size={17} />
                  Corporate HQ
                </p>
                <address>{site.contact.corporateHq}</address>
              </div>
              <div>
                <p className="address-card__label">
                  <Icon name="pin" size={17} />
                  Fulfilment office
                </p>
                <address>{site.contact.fulfilmentOffice}</address>
              </div>
              <p className="address-card__note">
                Please contact us before visiting so we can make sure the right person is available
                to meet you.
              </p>
            </div>

            <div className="contact-recruitment">
              <p className="eyebrow">Recruitment</p>
              <p>
                For job applications, use our recruitment line rather than the general enquiry
                form.
              </p>
              <a href={`mailto:${site.contact.recruitmentEmail}`}>
                <Icon name="mail" size={16} />
                {site.contact.recruitmentEmail}
              </a>
              <a href={`tel:${site.contact.recruitmentPhoneHref}`}>
                <Icon name="phone" size={16} />
                {site.contact.recruitmentPhone}
              </a>
              <ButtonLink to="/careers" variant="ghost" size="small" icon="arrow-right">
                View open roles
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="section contact-prompts" aria-labelledby="contact-prompts-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Make your message useful"
            title="A few details help us reply well."
            id="contact-prompts-heading"
            intro="You do not need a polished pitch. A little context is enough for us to point you in the right direction."
          />
          <div className="contact-prompts__grid">
            <article>
              <span>01</span>
              <h3>What are you writing?</h3>
              <p>
                Share the kind of book, its subject, and roughly how long the manuscript is — even
                if it is still an outline.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Where are you now?</h3>
              <p>
                Tell us whether you have an idea, a partial draft, a finished manuscript, or a
                published book that needs support.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>What do you need?</h3>
              <p>
                Editorial help, production, ISBN guidance, marketing, or a complete publishing
                conversation — name the outcome you have in mind.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Prefer a direct conversation?"
        title="Call or message our team."
        text="Sometimes a five-minute conversation is more useful than a long email. We are available Monday to Saturday, 9:00 AM to 5:00 PM."
        primaryLabel="Message us on WhatsApp"
        primaryTo={site.contact.whatsapp}
        secondaryLabel={`Call ${site.contact.phone}`}
        secondaryTo={`tel:${site.contact.phoneHref}`}
      />
    </>
  );
}
