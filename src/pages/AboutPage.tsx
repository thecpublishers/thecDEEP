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
      'Thec Writers & Publishers is part of Thec Prints & Publishing Ltd, an integrated group operating across editorial and academic publishing, digital distribution, print-on-demand, and commercial printing.',
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

      <section className="section imprint-section" aria-labelledby="imprints-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our operational structure & services"
            title="Three specialised imprints. One integrated group."
            intro="Thec Prints & Publishing Ltd operates through three specialised imprints, each structured to serve distinct segments across publishing, print-on-demand, and commercial printing."
            id="imprints-heading"
          />
          <div className="imprint-grid">
            <article className="imprint-card">
              <span className="imprint-card__number">01</span>
              <p className="imprint-card__focus">Full-Service Editorial, Academic & Commercial Publishing</p>
              <h3>Thec Writers &amp; Publishers</h3>
              <p className="imprint-card__intro">
                Our publishing house is dedicated to end-to-end editorial development, curriculum
                publishing, and trade book production.
              </p>
              <ul>
                <li><strong>Ghostwriting &amp; Editorial Advisory:</strong> Manuscript development, ghostwriting, structural editing, and publishing guidance for corporate leaders, scholars, and trade authors.</li>
                <li><strong>Academic &amp; Curriculum Publishing:</strong> Bound course packs, laboratory manuals, workbooks, and departmental lecture series for tertiary schedules.</li>
                <li><strong>Journals &amp; Research Monographs:</strong> Peer-reviewed institutional journals, research monographs, and faculty inaugural lecture booklets.</li>
                <li><strong>Textbooks &amp; Instructional Material:</strong> Core subject textbooks and supplementary educational publications for institutions, faculty departments, and commercial distribution.</li>
                <li><strong>Trade &amp; Professional Book Publishing:</strong> Custom publishing solutions for individual authors, corporate memoirs, and professional reference titles.</li>
              </ul>
            </article>
            <article className="imprint-card">
              <span className="imprint-card__number">02</span>
              <p className="imprint-card__focus">Digital Marketplace &amp; Print-on-Demand Infrastructure</p>
              <h3>Axon by Thec</h3>
              <p className="imprint-card__intro">
                Axon provides digital publishing, distribution, and print-on-demand infrastructure.
              </p>
              <ul>
                <li><strong>Digital &amp; Global eBook Distribution:</strong> Author storefronts, digital rights management, and global eBook distribution.</li>
                <li><strong>Dynamic Print-on-Demand:</strong> A low-friction POD network supporting zero-inventory printing and rapid fulfilment for independent authors and publishers.</li>
                <li><strong>Institutional &amp; Library Supply Chain:</strong> Digital distribution networks and physical supply pipelines for institutional readerships, academic libraries, and academic networks.</li>
              </ul>
            </article>
            <article className="imprint-card">
              <span className="imprint-card__number">03</span>
              <p className="imprint-card__focus">Enterprise, Institutional &amp; Print Management</p>
              <h3>Etari LLC</h3>
              <p className="imprint-card__intro">
                Etari LLC is the group’s commercial print imprint, managing institutional contracts,
                secure administrative documents, and high-volume press runs.
              </p>
              <ul>
                <li><strong>Academic &amp; Administrative Publications:</strong> Prospectuses, information handbooks, university bulletins, and official institutional stationery.</li>
                <li><strong>Secure Examination Materials:</strong> Examination question papers, answer scripts, and administrative assessment tools.</li>
                <li><strong>Certificates &amp; Academic Transcripts:</strong> Tamper-evident transcripts, diplomas, and official institutional certificates.</li>
                <li><strong>Event &amp; Ceremonial Publishing:</strong> Programmes of events, coronation brochures, and commemorative event publications.</li>
                <li><strong>Commercial &amp; General Print Contracts:</strong> High-volume commercial offset printing, corporate branding assets, and tailored enterprise printing solutions.</li>
              </ul>
            </article>
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
            intro="Meet the people contributing to the group’s publishing, management, finance, project coordination, human resources, and graphics work."
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
              This public team profile currently features {team.length} colleagues across Thec Prints &amp;
              Publishing Ltd and its specialised imprints. For roles and recruitment, visit{' '}
              <Link to="/careers">Careers</Link>.
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
