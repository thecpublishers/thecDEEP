import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { EditorialImage } from '../components/EditorialImage';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { TeamCard } from '../components/TeamCard';
import { companyValues, mission, team } from '../content/team';
import { site } from '../content/site';
import { usePageMeta } from '../lib/seo';

export function AboutPage() {
  usePageMeta({
    title: 'About Us',
    description:
      'Thec Writers & Publishers is a Nigerian publishing house founded in 2024, committed to developing, producing, and promoting African ideas through books.',
  });

  return (
    <>
      <PageHero
        eyebrow="About Thec"
        title={
          <>
            A publishing house for <em>African ideas.</em>
          </>
        }
        intro={
          <p>
            Founded in Keffi in 2024, Thec Writers &amp; Publishers exists to help authors turn
            ideas and manuscripts into books they are proud to share.
          </p>
        }
        note={
          <p>
            We believe the best publishing is personal: a considered partnership between an author
            and a team that understands what the book is for.
          </p>
        }
        aside={
          <dl className="fact-card">
            <div>
              <dt>Founded</dt>
              <dd>{site.founded}</dd>
            </div>
            <div>
              <dt>Founder</dt>
              <dd>{site.founder}</dd>
            </div>
            <div>
              <dt>Home</dt>
              <dd>Keffi, Nasarawa State</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>African ideas, professionally published</dd>
            </div>
          </dl>
        }
      />

      <section className="section about-story" aria-labelledby="story-heading">
        <div className="container about-story__grid">
          <div className="about-story__copy">
            <p className="eyebrow">Who we are</p>
            <h2 id="story-heading">Publishing with purpose, patience, and precision.</h2>
            <p className="lead">
              Thec Writers &amp; Publishers is an independent publishing services company working
              with writers, thinkers, and institutions to bring African ideas into print.
            </p>
            <p>
              Our work begins with listening. A manuscript may need structural editing, a cover,
              ISBN guidance, print preparation, or a clear plan for reaching readers. Sometimes it
              needs all of those things. We help authors understand the options and move forward
              with confidence.
            </p>
            <p>
              The company was founded by {site.founder} in {site.founded} and is based in Keffi,
              Nasarawa State. Our team combines editorial, production, and project support under
              one roof, allowing authors to work with a consistent group of people from first
              conversation to finished book.
            </p>
            <div className="about-story__quote">
              <Icon name="quote" size={26} />
              <blockquote>{site.slogans.primary}</blockquote>
              <span>{site.slogans.secondary}</span>
            </div>
          </div>
          <div className="about-story__visual">
            <EditorialImage
              src="/images/hero/about-studio.svg"
              alt="Designed editorial desk scene with a manuscript, pencil, and stacked books."
              ratio="landscape"
              placeholder
            />
            <div className="about-story__caption">
              <span>Based in Keffi.</span>
              <span>Working with authors everywhere.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section" aria-labelledby="mission-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Mission & vision"
            title="Why we publish."
            intro="A clear sense of purpose keeps the details of publishing in perspective."
            id="mission-heading"
          />
          <div className="mission-grid">
            <article className="mission-card">
              <span className="mission-card__label">Our mission</span>
              <h3>{mission.statement}</h3>
              <p>{mission.supporting}</p>
            </article>
            <article className="mission-card mission-card--dark">
              <span className="mission-card__label">Our vision</span>
              <h3>{mission.vision}</h3>
              <p>{mission.ethos}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section values-section" aria-labelledby="values-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our values"
            title="How we choose to work."
            intro="Values are only useful when they shape behaviour. These are the standards we use to guide our relationships and the work itself."
            id="values-heading"
          />
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span className="value-card__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section about-team" id="team" aria-labelledby="team-heading">
        <div className="container">
          <SectionHeading
            eyebrow="The team"
            title="The people behind the pages."
            intro="Thec’s publicly listed team. Portraits are clearly labelled placeholders until approved photographs are supplied; no generated likeness is presented as a real team member."
            id="team-heading"
          />
          <div className="team-grid">
            {team.map((member) => (
              <TeamCard member={member} key={member.id} />
            ))}
          </div>
          <div className="team-note">
            <Icon name="users" size={22} />
            <p>
              This public list currently includes {team.length} people. Approved replacement
              portraits and additional team profiles can be added as the company grows. For roles
              and recruitment, visit <Link to="/careers">Careers</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section author-approach" aria-labelledby="approach-heading">
        <div className="container author-approach__inner">
          <div>
            <p className="eyebrow">An author-first approach</p>
            <h2 id="approach-heading">You should always know where your book stands.</h2>
          </div>
          <div className="author-approach__points">
            <p>
              We explain the work in plain language, document the decisions that matter, and keep
              you involved in the parts of the process that require your voice. Publishing can be
              complex; the conversation around it does not need to be.
            </p>
            <ButtonLink to="/contact" variant="secondary" icon="arrow-right">
              Talk to our team
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s make your book a reality."
        text="Whether you have a full manuscript or only the beginning of an idea, we would like to hear about it."
      />
    </>
  );
}
