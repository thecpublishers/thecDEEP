import { Link, useParams } from 'react-router-dom';
import { BookCard } from '../components/BookCard';
import { BookCover } from '../components/BookCover';
import { ButtonLink } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { Icon } from '../components/Icon';
import { SectionHeading } from '../components/SectionHeading';
import { books, getBook } from '../content/books';
import { site } from '../content/site';
import { usePageMeta } from '../lib/seo';
import { NotFoundPage } from './NotFoundPage';

export function BookDetailPage() {
  const { slug } = useParams();
  const book = getBook(slug ?? '');

  usePageMeta({
    title: book ? book.title : 'Book not found',
    description: book
      ? `${book.title}, a title in the Thec Writers & Publishers catalogue. Catalogue details are being confirmed.`
      : 'The requested catalogue title could not be found.',
    type: 'article',
    image: book?.cover,
  });

  if (!book) return <NotFoundPage />;

  const related = books.filter((item) => item.id !== book.id).slice(0, 3);
  const enquiryUrl = book.purchaseUrl ?? `mailto:${site.contact.email}`;
  const fields = [
    { label: 'Author', value: book.author },
    { label: 'Genre', value: book.genre },
    { label: 'Publication year', value: book.publishedYear },
    { label: 'ISBN', value: book.isbn },
  ];

  return (
    <>
      <section className="book-detail" aria-labelledby="book-title">
        <div className="container">
          <Link to="/books" className="back-link">
            <Icon name="arrow-right" size={15} />
            All published books
          </Link>
          <div className="book-detail__grid">
            <div className="book-detail__visual">
              <BookCover
                src={book.cover}
                alt={book.coverAlt}
                title={book.title}
                placeholder={book.placeholder}
                size="large"
              />
              <div className="book-detail__visual-note">
                <Icon name="book" size={17} />
                <span>Cover artwork shown is a designed placeholder.</span>
              </div>
            </div>

            <div className="book-detail__content">
              <p className="eyebrow">Catalogue record · Thec Publishers</p>
              <h1 id="book-title" tabIndex={-1}>
                {book.title}
              </h1>
              <p className="book-detail__author">{book.author ?? 'Author to be confirmed'}</p>

              <div className="catalogue-status catalogue-status--inline">
                <span className="catalogue-status__dot" aria-hidden="true" />
                <p>
                  <strong>This record is being completed.</strong> Verified author, description,
                  genre, ISBN, publication, and availability details have not yet been supplied.
                </p>
              </div>

              <div className="book-detail__description">
                <h2>About this title</h2>
                {book.shortDescription ? (
                  <p>{book.shortDescription}</p>
                ) : (
                  <p className="placeholder-copy">
                    A verified description for <em>{book.title}</em> is not yet available. We have
                    chosen not to invent one. Please contact our team for confirmed information
                    about this title.
                  </p>
                )}
              </div>

              <div className="book-detail__actions">
                <ButtonLink to={enquiryUrl} external icon="mail" iconPosition="start">
                  Enquire about this title
                </ButtonLink>
                <ButtonLink
                  to={site.contact.whatsapp}
                  external
                  variant="secondary"
                  icon="whatsapp"
                  iconPosition="start"
                >
                  Ask on WhatsApp
                </ButtonLink>
              </div>

              <dl className="book-facts">
                {fields.map((field) => (
                  <div key={field.label}>
                    <dt>{field.label}</dt>
                    <dd className={field.value ? undefined : 'is-pending'}>
                      {field.value ?? 'To be confirmed'}
                    </dd>
                  </div>
                ))}
                <div>
                  <dt>Publisher</dt>
                  <dd>{site.name}</dd>
                </div>
                <div>
                  <dt>Availability</dt>
                  <dd>Enquire directly</dd>
                </div>
              </dl>

              <p className="book-detail__correction">
                Have verified information for this title?{' '}
                <a
                  href={`mailto:${site.contact.email}?subject=${encodeURIComponent(`Catalogue correction: ${book.title}`)}`}
                >
                  Send a catalogue note
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section book-detail-related" aria-labelledby="related-books-heading">
        <div className="container">
          <SectionHeading
            eyebrow="More from the catalogue"
            title="Continue exploring our books."
            id="related-books-heading"
            action={
              <ButtonLink to="/books" variant="secondary" icon="arrow-right">
                Full catalogue
              </ButtonLink>
            }
          />
          <div className="books-grid books-grid--related">
            {related.map((item, index) => (
              <BookCard book={item} index={index} key={item.id} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="From the catalogue"
        title="Interested in this book?"
        text="Our team can confirm availability, edition details, and the best way to order."
        primaryLabel="Make a book enquiry"
        primaryTo={`mailto:${site.contact.email}?subject=${encodeURIComponent(`Book enquiry: ${book.title}`)}`}
        secondaryLabel="Visit the bookstore"
        secondaryTo="/bookstore"
      />
    </>
  );
}
