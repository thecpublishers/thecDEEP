import { Link } from 'react-router-dom';
import type { Book } from '../content/books';
import { BookCover } from './BookCover';
import { Icon } from './Icon';

type BookCardProps = {
  book: Book;
  index?: number;
};

export function BookCard({ book, index }: BookCardProps) {
  return (
    <article className="book-card">
      <Link to={`/books/${book.slug}`} className="book-card__cover-link" aria-label={`View ${book.title}`}>
        <BookCover src={book.cover} alt={book.coverAlt} title={book.title} placeholder={book.placeholder} />
      </Link>
      <div className="book-card__body">
        <div className="book-card__meta">
          {typeof index === 'number' ? <span>{String(index + 1).padStart(2, '0')}</span> : null}
          <span>{book.genre ?? 'Catalogue details pending'}</span>
        </div>
        <h3>
          <Link to={`/books/${book.slug}`}>{book.title}</Link>
        </h3>
        <p className="book-card__author">{book.author ?? 'Author to be confirmed'}</p>
        <p className="book-card__description">
          {book.shortDescription ??
            'Publication details for this title are being prepared. Contact our team to enquire about availability.'}
        </p>
        <Link to={`/books/${book.slug}`} className="text-link">
          View book
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </article>
  );
}
