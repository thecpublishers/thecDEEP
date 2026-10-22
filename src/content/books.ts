import { site } from './site';

/**
 * CENTRAL BOOK CATALOGUE
 * ----------------------
 * Add, edit, or remove a book here. The homepage, portfolio, bookstore,
 * and individual book pages all read from this one file.
 *
 * Cover images live in public/images/books/ and must use a local path.
 * Author, year, genre, ISBN, and description are intentionally left null
 * for the initial catalogue because those details were not supplied.
 * Never present placeholder metadata as confirmed.
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
    id: 'fund-it',
    slug: 'fund-it',
    title: 'Fund It',
    author: null,
    cover: '/images/books/fund-it.svg',
    coverAlt: 'Typographic placeholder cover for Fund It, with the author still to be confirmed.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Fund It'),
    featured: true,
    placeholder: true,
  },
  {
    id: 'second-halve',
    slug: 'second-halve',
    title: 'Second Halve',
    author: null,
    cover: '/images/books/second-halve.svg',
    coverAlt: 'Typographic placeholder cover for Second Halve, with the author still to be confirmed.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Second Halve'),
    featured: true,
    placeholder: true,
  },
  {
    id: 'tyrannus',
    slug: 'tyrannus',
    title: 'Tyrannus',
    author: null,
    cover: '/images/books/tyrannus.svg',
    coverAlt: 'Typographic placeholder cover for Tyrannus, with the author still to be confirmed.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Tyrannus'),
    featured: true,
    placeholder: true,
  },
  {
    id: 'wisdom',
    slug: 'wisdom',
    title: 'Wisdom',
    author: null,
    cover: '/images/books/wisdom.svg',
    coverAlt: 'Typographic placeholder cover for Wisdom, with the author still to be confirmed.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Wisdom'),
    featured: true,
    placeholder: true,
  },
  {
    id: 'logistics',
    slug: 'logistics',
    title: 'Logistics',
    author: null,
    cover: '/images/books/logistics.svg',
    coverAlt: 'Typographic placeholder cover for Logistics, with the author still to be confirmed.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Logistics'),
    featured: false,
    placeholder: true,
  },
  {
    id: 'palace-of-thieves',
    slug: 'palace-of-thieves',
    title: 'Palace of Thieves',
    author: null,
    cover: '/images/books/palace-of-thieves.svg',
    coverAlt:
      'Typographic placeholder cover for Palace of Thieves, with the author still to be confirmed.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Palace of Thieves'),
    featured: false,
    placeholder: true,
  },
  {
    id: 'whisper-in-bukavu',
    slug: 'whisper-in-bukavu',
    title: 'Whisper in Bukavu',
    author: null,
    cover: '/images/books/whisper-in-bukavu.svg',
    coverAlt:
      'Typographic placeholder cover for Whisper in Bukavu, with the author still to be confirmed.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Whisper in Bukavu'),
    featured: false,
    placeholder: true,
  },
  {
    id: 'extra-ordinary',
    slug: 'extra-ordinary',
    title: 'Extra Ordinary',
    author: null,
    cover: '/images/books/extra-ordinary.svg',
    coverAlt:
      'Typographic placeholder cover for Extra Ordinary, with the author still to be confirmed.',
    shortDescription: null,
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Extra Ordinary'),
    featured: false,
    placeholder: true,
  },
];

export const featuredBooks = books.filter((book) => book.featured);
export const getBook = (slug: string) => books.find((book) => book.slug === slug);
