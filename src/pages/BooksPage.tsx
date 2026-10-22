import { useMemo, useState } from 'react';
import { BookCard } from '../components/BookCard';
import { ButtonLink } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { books } from '../content/books';
import { site } from '../content/site';
import { usePageMeta } from '../lib/seo';

export function BooksPage() {
  usePageMeta({
    title: 'Published Books',
    description:
      'Explore the published catalogue of Thec Writers & Publishers. Catalogue records and placeholder covers are clearly labelled while verified details are completed.',
  });

  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return books;
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(term) ||
        (book.author ?? '').toLowerCase().includes(term),
    );
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Published books"
        title={
          <>
            Stories and ideas, <em>made into books.</em>
          </>
        }
        intro={
          <p>
            Thec Writers &amp; Publishers works with authors to turn manuscripts into finished
            books. This is our public catalogue — a living record that will grow as titles are
            confirmed and new books are published.
          </p>
        }
        note={
          <div className="catalogue-status">
            <span className="catalogue-status__dot" aria-hidden="true" />
            <p>
              <strong>Catalogue in progress.</strong> Author, genre, ISBN, publication, and cover
              details are pending for the initial titles. Placeholder covers are clearly marked.
            </p>
          </div>
        }
        aside={
          <div className="books-hero-aside">
            <span className="books-hero-aside__number">{String(books.length).padStart(2, '0')}</span>
            <p>titles currently listed</p>
            <p className="books-hero-aside__note">
              Verified catalogue details will be added as they are approved.
            </p>
            <ButtonLink to="/bookstore" variant="secondary" size="small" icon="arrow-right">
              Visit the bookstore
            </ButtonLink>
          </div>
        }
      />

      <section className="section catalogue-section" aria-labelledby="catalogue-heading">
        <div className="container">
          <div className="catalogue-toolbar">
            <div>
              <p className="eyebrow">The catalogue</p>
              <h2 id="catalogue-heading">All published titles</h2>
            </div>
            <div className="catalogue-search">
              <label htmlFor="book-search">Search by title or author</label>
              <div className="search-field">
                <Icon name="book" size={18} />
                <input
                  id="book-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search books"
                  autoComplete="off"
                />
                {query ? (
                  <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
                    <Icon name="close" size={16} />
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          <p className="results-count" role="status" aria-live="polite">
            {query
              ? `${filtered.length} ${filtered.length === 1 ? 'title' : 'titles'} matching “${query}”`
              : `${books.length} titles in the current catalogue`}
          </p>

          {filtered.length > 0 ? (
            <div className="books-grid books-grid--catalogue">
              {filtered.map((book, index) => (
                <BookCard book={book} index={index} key={book.id} />
              ))}
            </div>
          ) : (
            <div className="empty-state empty-state--large">
              <Icon name="book" size={30} />
              <h3>No titles match that search yet.</h3>
              <p>Try a different title or clear the search to see the full catalogue.</p>
              <button type="button" className="button button--secondary" onClick={() => setQuery('')}>
                Clear search
              </button>
            </div>
          )}

          <div className="catalogue-note">
            <Icon name="message" size={20} />
            <p>
              <strong>Looking for a specific title?</strong> Some records are still being verified.
              Email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or message us
              on WhatsApp for availability and edition details.
            </p>
          </div>
        </div>
      </section>

      <section className="section books-info" aria-labelledby="books-info-heading">
        <div className="container books-info__grid">
          <div>
            <p className="eyebrow">About the catalogue</p>
            <h2 id="books-info-heading">Verified details only.</h2>
          </div>
          <div className="books-info__items">
            <div>
              <h3>Clearly marked placeholders</h3>
              <p>
                The initial catalogue contains titles for which full publication metadata has not
                yet been supplied. We label those records rather than guessing.
              </p>
            </div>
            <div>
              <h3>Independent and self-contained</h3>
              <p>
                Book covers and records are stored with this website. We do not load them from an
                external media library or third-party store.
              </p>
            </div>
            <div>
              <h3>Direct enquiries</h3>
              <p>
                Our bookstore page explains how to enquire about a title. No external checkout is
                presented as live when it is not.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Your book could be next."
        text="If you are ready to publish, or want to understand what publishing would involve, start with a conversation."
      />
    </>
  );
}
