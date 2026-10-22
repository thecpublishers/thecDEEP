import { Link } from 'react-router-dom';
import { BlogCard } from '../components/BlogCard';
import { BookCard } from '../components/BookCard';
import { ButtonLink } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { EditorialImage } from '../components/EditorialImage';
import { FAQAccordion } from '../components/FAQAccordion';
import { Icon } from '../components/Icon';
import { ProcessSteps } from '../components/ProcessSteps';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { TeamCard } from '../components/TeamCard';
import { Testimonials } from '../components/Testimonials';
import { featuredBooks } from '../content/books';
import { faqs } from '../content/faqs';
import { services } from '../content/services';
import { site, trustStatements } from '../content/site';
import { team } from '../content/team';
import { blogPosts } from '../lib/blog';
import { usePageMeta } from '../lib/seo';

const aboutPoints = [
  'Professional writing and editorial support',
  'Personalised publishing guidance',
  'Transparent communication at every stage',
  'Careful attention to production quality',
  'Support throughout the author journey',
];

export function HomePage() {
  usePageMeta({
    title: 'Thec Writers & Publishers | Empowering African Ideas',
    description:
      'Thec Writers & Publishers is an independent Nigerian publishing house helping authors develop, refine, publish, print, and share their books with confidence.',
  });

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              Independent publishing house · Nigeria
            </p>
            <h1 id="hero-heading" tabIndex={-1}>
              Your Story Deserves to Become a <em>Book.</em>
            </h1>
            <p className="hero__lede">
              From the first idea to the finished book, we help authors develop, refine, publish,
              print, and share their work with confidence.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/publish-your-book" icon="arrow-right">
                Publish Your Book
              </ButtonLink>
              <ButtonLink to="/services" variant="secondary" icon="arrow-right">
                Explore Our Services
              </ButtonLink>
            </div>
            <div className="hero__aside">
              <div className="hero__aside-item">
                <span className="hero__aside-label">Based in</span>
                <span>Keffi, Nasarawa State</span>
              </div>
              <div className="hero__aside-item">
                <span className="hero__aside-label">Working with</span>
                <span>Authors across Nigeria &amp; beyond</span>
              </div>
              <div className="hero__aside-item">
                <span className="hero__aside-label">Our approach</span>
                <span>Your voice, carefully carried</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <EditorialImage
              src="/images/hero/hero-editorial.svg"
              alt="Designed editorial still life with books and a manuscript in Thec’s red and near-black palette."
              ratio="portrait"
              placeholder
              priority
              className="hero__image"
            />
            <div className="hero__stamp" aria-hidden="true">
              <span>THEC</span>
              <span>Est. 2024</span>
              <span>Keffi</span>
            </div>
            <div className="hero__caption">
              <span className="hero__caption-mark">
                <Icon name="sparkle" size={16} />
              </span>
              <span>
                <strong>Empowering African ideas.</strong>
                We bring your words to life.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why authors work with Thec">
        <div className="container trust-strip__grid">
          {trustStatements.map((item) => (
            <div className="trust-item" key={item.title}>
              <span className="trust-item__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section services-section" aria-labelledby="services-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our services"
            title="Everything your book needs, under one roof."
            intro="From the first draft to the final edition, our services are designed to meet your manuscript where it is — and take it where it needs to go."
            id="services-heading"
            action={
              <ButtonLink to="/services" variant="secondary" icon="arrow-right">
                View all services
              </ButtonLink>
            }
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
          <p className="section-footnote">
            Not sure where to begin? <Link to="/contact">Tell us about your project</Link> and we
            will help you identify the right next step.
          </p>
        </div>
      </section>

      <section className="section about-section" aria-labelledby="about-heading">
        <div className="container about-editorial">
          <div className="about-editorial__visual">
            <EditorialImage
              src="/images/hero/about-studio.svg"
              alt="Designed overhead study of a manuscript, pencil, and books on a warm editorial desk."
              ratio="landscape"
              placeholder
            />
            <div className="about-editorial__badge">
              <span className="about-editorial__badge-number">2024</span>
              <span>Founded in Keffi, with a national outlook</span>
            </div>
          </div>
          <div className="about-editorial__copy">
            <p className="eyebrow">About Thec</p>
            <h2 id="about-heading">Turning Ideas into Books That Matter.</h2>
            <p className="about-editorial__lede">
              Thec Writers &amp; Publishers is a Nigerian publishing house built around a simple
              belief: African ideas deserve books made with care.
            </p>
            <p>
              We work with authors at every stage of the journey — developing the manuscript,
              bringing editorial rigour to the page, guiding production decisions, and helping a
              finished book find its readers. Our approach is personal because every book is
              personal.
            </p>
            <ul className="check-list">
              {aboutPoints.map((point) => (
                <li key={point}>
                  <Icon name="check" size={17} />
                  {point}
                </li>
              ))}
            </ul>
            <ButtonLink to="/about" variant="secondary" icon="arrow-right">
              Discover Our Story
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section featured-books" aria-labelledby="books-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Published books"
            title="Books we have helped bring into the world."
            intro="A selection from our growing catalogue. These are catalogue records; confirmed author, genre, publication, and purchase details are being prepared."
            id="books-heading"
            action={
              <ButtonLink to="/books" variant="secondary" icon="arrow-right">
                Explore the catalogue
              </ButtonLink>
            }
          />
          <div className="books-grid books-grid--home">
            {featuredBooks.slice(0, 4).map((book, index) => (
              <BookCard book={book} index={index} key={book.id} />
            ))}
          </div>
          <div className="catalogue-note">
            <Icon name="book" size={20} />
            <p>
              <strong>A note on our catalogue.</strong> We publish verified book information only.
              Placeholder covers and pending metadata are clearly marked while the catalogue is
              completed. For availability, <Link to="/contact">contact our team</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section" aria-labelledby="process-heading">
        <div className="container">
          <div className="process-section__head">
            <div>
              <p className="eyebrow eyebrow--light">The publishing process</p>
              <h2 id="process-heading">A clear path from manuscript to publication.</h2>
            </div>
            <p>
              Every project is different, but the care is consistent. Here is how we move from the
              first conversation to a book in readers’ hands.
            </p>
          </div>
          <ProcessSteps />
          <p className="process-section__note">
            Timelines and costs are project-specific. We confirm scope after reviewing your
            manuscript and goals.{' '}
            <Link to="/publish-your-book">Start a publishing conversation.</Link>
          </p>
        </div>
      </section>

      <section className="section team-section" aria-labelledby="team-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our team"
            title="People who care about the work."
            intro="A small, hands-on team building a publishing house around craft and accountability. Portrait placeholders are shown until approved photographs are supplied."
            id="team-heading"
            action={
              <ButtonLink to="/about#team" variant="secondary" icon="arrow-right">
                Meet the team
              </ButtonLink>
            }
          />
          <div className="team-grid">
            {team.map((member) => (
              <TeamCard member={member} key={member.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-section" aria-labelledby="blog-heading">
        <div className="container">
          <SectionHeading
            eyebrow="From the editorial desk"
            title="Notes on writing, publishing, and the work between."
            id="blog-heading"
            action={
              <ButtonLink to="/blog" variant="secondary" icon="arrow-right">
                Visit the blog
              </ButtonLink>
            }
          />
          {recentPosts.length > 0 ? (
            <div className="home-blog-grid">
              {recentPosts.map((post) => (
                <BlogCard post={post} key={post.slug} featured />
              ))}
              <aside className="home-blog-aside">
                <p className="eyebrow">A publishing note</p>
                <h3>Clarity before polish.</h3>
                <p>
                  The most useful editorial conversation often begins before a single sentence is
                  changed. We start with what the book is for, who it serves, and what it needs
                  next.
                </p>
                <ButtonLink to="/contact" variant="ghost" icon="arrow-right">
                  Talk to our editorial team
                </ButtonLink>
              </aside>
            </div>
          ) : (
            <p className="empty-state">Editorial articles are being prepared. Please check back soon.</p>
          )}
        </div>
      </section>

      <section className="section testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Author voices"
            title="The proof is in the relationship."
            intro="We only share words we have permission to publish. Our testimonial space remains open until verified author feedback is available."
            id="testimonials-heading"
          />
          <Testimonials />
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-heading">
        <div className="container faq-layout">
          <div className="faq-layout__intro">
            <p className="eyebrow">Questions, answered</p>
            <h2 id="faq-heading">Before you begin.</h2>
            <p>
              A few practical answers for authors considering their next step. For anything
              project-specific, we would rather have a real conversation than guess.
            </p>
            <div className="faq-layout__contact">
              <p>Still wondering?</p>
              <a href={`mailto:${site.contact.email}`}>
                <Icon name="mail" size={17} />
                {site.contact.email}
              </a>
              <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={17} />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
          <FAQAccordion items={faqs} defaultOpen="services" idPrefix="home-faq" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
