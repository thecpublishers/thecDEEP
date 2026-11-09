import { site } from './site';

/**
 * CENTRAL BOOK CATALOGUE
 * ----------------------
 * The homepage, catalogue, bookstore, and individual book pages read from here.
 * Cover images are stored locally in public/images/books/.
 * Author names and publication metadata remain unlisted until verified.
 */
export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string | null;
  cover: string;
  coverAlt: string;
  shortDescription: string | null;
  genre: string | null;
  publishedYear: string | null;
  isbn: string | null;
  purchaseUrl: string | null;
  featured: boolean;
  placeholder: boolean;
};

const enquiry = (title: string) =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(`Book enquiry: ${title}`)}`;

export const books: Book[] = [
  {
    id: 'pulpit',
    slug: 'pulpit',
    title: 'Pastoring Beyond the Pulpit',
    author: null,
    cover: '/images/books/pulpit.jpg',
    coverAlt: 'Cover of Pastoring Beyond the Pulpit.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Pastoring Beyond the Pulpit'),
    featured: true,
    placeholder: false,
  },
  {
    id: 'waiting-room',
    slug: 'waiting-room',
    title: 'Waiting Room',
    author: null,
    cover: '/images/books/waiting-room.jpg',
    coverAlt: 'Cover of Waiting Room.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Waiting Room'),
    featured: true,
    placeholder: false,
  },
  {
    id: 'grace-dimension',
    slug: 'grace-dimension',
    title: 'Grace Dimension',
    author: null,
    cover: '/images/books/grace-dimension.jpg',
    coverAlt: 'Cover of Grace Dimension.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Grace Dimension'),
    featured: true,
    placeholder: false,
  },
  {
    id: 'effective-kingdom',
    slug: 'effective-kingdom',
    title: 'Effective Kingdom',
    author: null,
    cover: '/images/books/effective-kingdom.jpg',
    coverAlt: 'Cover of Effective Kingdom.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Effective Kingdom'),
    featured: true,
    placeholder: false,
  },
  {
    id: 'my-husband',
    slug: 'my-husband',
    title: 'My Husband',
    author: null,
    cover: '/images/books/my-husband.jpg',
    coverAlt: 'Cover of My Husband.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('My Husband'),
    featured: false,
    placeholder: false,
  },
  {
    id: 'the-first-million',
    slug: 'the-first-million',
    title: 'The First Million',
    author: null,
    cover: '/images/books/the-first-million.jpg',
    coverAlt: 'Cover of The First Million.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('The First Million'),
    featured: false,
    placeholder: false,
  },
  {
    id: 'untamed-poetic',
    slug: 'untamed-poetic',
    title: 'Untamed Poetic',
    author: null,
    cover: '/images/books/untamed-poetic.jpg',
    coverAlt: 'Cover of Untamed Poetic.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Untamed Poetic'),
    featured: false,
    placeholder: false,
  },
  {
    id: 'african-humanoid',
    slug: 'african-humanoid',
    title: 'African Humanoid',
    author: null,
    cover: '/images/books/african-humanoid.jpg',
    coverAlt: 'Cover of African Humanoid.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('African Humanoid'),
    featured: false,
    placeholder: false,
  },
  {
    id: 'odu',
    slug: 'odu',
    title: 'Odu',
    author: null,
    cover: '/images/books/odu.jpg',
    coverAlt: 'Cover of Odu.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Odu'),
    featured: false,
    placeholder: false,
  },
];

export const featuredBooks = books.filter((book) => book.featured);
export const getBook = (slug: string) => books.find((book) => book.slug === slug);
