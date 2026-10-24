import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonLink } from '../components/Button';
import { CareersApplicationForm } from '../components/CareersApplicationForm';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { careers, jobs } from '../content/careers';
import type { Job } from '../content/careers';
import { site } from '../content/site';
import { usePageMeta } from '../lib/seo';

type JobOpeningProps = {
  job: Job;
  onApply: (title: string) => void;
};

function JobOpening({ job, onApply }: JobOpeningProps) {
  const [open, setOpen] = useState(false);
  const panelId = `${job.id}-details`;

  return (
    <article className={`job-card${open ? ' is-open' : ''}`}>
      <div className="job-card__top">
        <div className="job-card__meta">
          <span>{job.type}</span>
          <span>{job.workModel}</span>
          <span>{job.location}</span>
        </div>
        <span className="job-card__index" aria-hidden="true">
          {String(jobs.findIndex((item) => item.id === job.id) + 1).padStart(2, '0')}
        </span>
      </div>
      <h3>{job.title}</h3>
      <p>{job.summary}</p>
      <div className="job-card__actions">
        <button
          type="button"
          className="job-card__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Hide role details' : 'View role details'}
          <Icon name="chevron-down" size={17} />
        </button>
        <button type="button" className="text-link" onClick={() => onApply(job.title)}>
          Apply for this role
          <Icon name="arrow-right" size={16} />
        </button>
      </div>
      <div className="job-card__details" id={panelId} hidden={!open}>
        <div>
          <h4>Key responsibilities</h4>
          <ul>
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>What we are looking for</h4>
          <ul>
            {job.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Button type="button" onClick={() => onApply(job.title)} icon="arrow-right" size="small">
          Apply for {job.title}
        </Button>
      </div>
    </article>
  );
}

export function CareersPage() {
  usePageMeta({
    title: 'Careers',
    description:
      'Build a publishing career with Thec Writers & Publishers in Keffi, Nasarawa State. Explore six full-time onsite roles and submit your application online.',
  });

  const [selectedPosition, setSelectedPosition] = useState('');
  const navigate = useNavigate();

  const handleApply = (title: string) => {
    setSelectedPosition(title);
    navigate('/careers#apply');
    window.setTimeout(() => {
      const applySection = document.getElementById('apply');
      applySection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const heading = applySection?.querySelector<HTMLElement>('h2');
      heading?.focus({ preventScroll: true });
    }, 40);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the next chapter <em>with us.</em>
          </>
        }
        intro={<p>{careers.introduction}</p>}
        note={
          <p>
            We are hiring for six full-time, onsite roles in Keffi, Nasarawa State. Read the
            details, find your fit, and apply by email or WhatsApp.
          </p>
        }
        aside={
          <div className="careers-vision-card">
            <p className="eyebrow">Our 2030 vision</p>
            <p className="careers-vision-card__statement">{careers.vision}</p>
            <div>
              <span>Our mission</span>
              <p>{careers.mission}</p>
            </div>
            <ButtonLink to="#openings" variant="secondary" size="small" icon="arrow-right">
              See open roles
            </ButtonLink>
          </div>
        }
      />

      <section className="section careers-values" aria-labelledby="careers-values-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Life at Thec"
            title="What we value in the people who join us."
            intro="We are looking for colleagues who care about the work, communicate honestly, and want to grow with a young publishing house."
            id="careers-values-heading"
          />
          <div className="careers-values__grid">
            {careers.values.map((value, index) => (
              <article key={value.title} className="career-value">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
          <div className="careers-marquee" aria-label="Working at Thec">
            <span>Publishing</span>
            <span aria-hidden="true">·</span>
            <span>Editorial craft</span>
            <span aria-hidden="true">·</span>
            <span>African ideas</span>
            <span aria-hidden="true">·</span>
            <span>Keffi, Nasarawa State</span>
            <span aria-hidden="true">·</span>
            <span>Full-time, onsite</span>
          </div>
        </div>
      </section>

      <section className="section openings-section" id="openings" aria-labelledby="openings-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Open roles"
            title="Six opportunities to shape the work."
            intro="Each role is full-time and onsite in Keffi. Open a role to read the responsibilities and requirements, then apply with the position title as your subject."
            id="openings-heading"
          />
          <div className="jobs-grid">
            {jobs.map((job) => (
              <JobOpening job={job} onApply={handleApply} key={job.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section apply-section" id="apply" aria-labelledby="apply-heading">
        <div className="container apply-section__grid">
          <div className="apply-section__intro">
            <p className="eyebrow">Apply now</p>
            <h2 id="apply-heading" tabIndex={-1}>
              Take the first step towards joining the THEC Publishers family.
            </h2>
            <p>
              Complete the application form and we will prepare an email for you to review and
              send. Attach your CV and any relevant portfolio files before sending.
            </p>
            <div className="apply-contact">
              <p className="apply-contact__title">Recruitment contact</p>
              <a href={`mailto:${site.contact.recruitmentEmail}`}>
                <Icon name="mail" size={18} />
                <span>
                  <strong>Email</strong>
                  {site.contact.recruitmentEmail}
                </span>
              </a>
              <a href={`tel:${site.contact.recruitmentPhoneHref}`}>
                <Icon name="phone" size={18} />
                <span>
                  <strong>Phone</strong>
                  {site.contact.recruitmentPhone}
                </span>
              </a>
              <a
                href={`https://wa.me/${site.contact.recruitmentPhoneHref.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={18} />
                <span>
                  <strong>WhatsApp</strong>
                  {site.contact.recruitmentPhone}
                </span>
              </a>
            </div>
            <p className="apply-instructions">
              Send your CV with the <strong>position title in the subject line</strong> of your
              email or at the start of your WhatsApp message.
            </p>
            <div className="apply-note">
              <Icon name="message" size={18} />
              <p>
                No online CV upload is connected. We use an email-based application so your
                documents are sent directly from your own account, not stored on this website.
              </p>
            </div>
          </div>

          <div className="apply-section__form">
            <CareersApplicationForm initialPosition={selectedPosition} />
          </div>
        </div>

        <div className="container">
          <div className="recruitment-footer">
            <div>
              <p className="eyebrow">Recruitment contact</p>
              <h3>Send your application directly.</h3>
            </div>
            <div className="recruitment-footer__links">
              <a href={`mailto:${site.contact.recruitmentEmail}`}>
                <Icon name="mail" size={18} />
                {site.contact.recruitmentEmail}
              </a>
              <a href={`tel:${site.contact.recruitmentPhoneHref}`}>
                <Icon name="phone" size={18} />
                {site.contact.recruitmentPhone}
              </a>
              <a
                href={`https://wa.me/${site.contact.recruitmentPhoneHref.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={18} />
                WhatsApp: {site.contact.recruitmentPhone}
              </a>
            </div>
            <p>
              Email your CV or message us on WhatsApp with the position title as the subject or
              opening line. Applications are considered for the roles listed on this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
