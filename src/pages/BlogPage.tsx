import { BlogCard } from '../components/BlogCard';
import { ButtonLink } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { blogPosts } from '../lib/blog';
import { usePageMeta } from '../lib/seo';

export function BlogPage() {
  usePageMeta({
    title: 'Blog',
    description:
      'Publishing guides, editorial notes, and practical reading from Thec Writers & Publishers for authors developing a book.',
  });

  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="The editorial desk"
        title={
          <>
            Notes on the craft of <em>making a book.</em>
          </>
        }
        intro={
          <p>
            Practical publishing guides, editorial perspective, and thoughtful reading for authors
            at every stage of the journey.
          </p>
        }
        note={
          <div className="blog-hero-note">
            <Icon name="pen" size={18} />
            <p>
              Our current article is a clearly labelled <strong>sample</strong>, included to
              demonstrate the publishing workflow. Editorial articles are added only when they are
              ready.
            </p>
          </div>
        }
        aside={
          <div className="blog-hero-aside">
            <p className="eyebrow">In this journal</p>
            <ul>
              <li>Publishing guides</li>
              <li>Editorial practice</li>
              <li>Author workflows</li>
              <li>Book production notes</li>
            </ul>
            <p>
              No sponsored content. No invented company news. Just useful notes on the work of
              making books.
            </p>
          </div>
        }
      />

      <section className="section blog-listing" aria-labelledby="articles-heading">
        <div className="container">
          <div className="blog-listing__head">
            <div>
              <p className="eyebrow">Latest writing</p>
              <h2 id="articles-heading">From the editorial desk</h2>
            </div>
            <p className="blog-listing__count">
              {blogPosts.length} {blogPosts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>

          {blogPosts.length === 0 ? (
            <div className="empty-state empty-state--large">
              <Icon name="pen" size={30} />
              <h3>No articles have been published yet.</h3>
              <p>
                New editorial notes will appear here. In the meantime, explore our publishing
                services or speak with our team.
              </p>
              <ButtonLink to="/services" variant="secondary">
                Explore our services
              </ButtonLink>
            </div>
          ) : (
            <div className="blog-listing__grid">
              {featured ? <BlogCard post={featured} featured /> : null}
              <div className="blog-listing__side">
                {rest.slice(0, 2).map((post) => (
                  <BlogCard post={post} key={post.slug} />
                ))}
                <aside className="editorial-note">
                  <p className="eyebrow">Editorial standard</p>
                  <h3>We publish what we can stand behind.</h3>
                  <p>
                    Articles are reviewed for accuracy and clarity. We do not present invented
                    author stories, company announcements, testimonials, or statistics.
                  </p>
                  <ButtonLink to="/contact" variant="ghost" icon="arrow-right">
                    Suggest a topic
                  </ButtonLink>
                </aside>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section blog-purpose" aria-labelledby="blog-purpose-heading">
        <div className="container blog-purpose__grid">
          <div>
            <p className="eyebrow">Why this journal exists</p>
            <h2 id="blog-purpose-heading">Useful thinking, shared plainly.</h2>
          </div>
          <div className="blog-purpose__body">
            <p>
              Publishing is full of decisions that are easier to make when they are explained
              clearly. This journal is a place for those explanations: how editing works, what
              production involves, and how authors can approach the next stage with better
              questions.
            </p>
            <p>
              It is also a record of our perspective as an independent African publishing house.
              Expect practical guides and considered observations, not a stream of promotional
              announcements.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Keep the conversation going"
        title="Have a publishing question?"
        text="Some questions deserve a direct answer. Tell us where your manuscript stands and we will reply honestly."
        primaryLabel="Contact our team"
        primaryTo="/contact"
      />
    </>
  );
}
