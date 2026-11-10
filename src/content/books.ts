import { site } from './site';

/** Central catalogue for the homepage, published books, bookstore and book pages. */
export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string | null;
  subtitle: string | null;
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
    author: 'Francis Nwaoha',
    subtitle: 'Shepherding Lives, Transforming Destinies, Making Impact',
    cover: '/images/books/pulpit.jpg',
    coverAlt: 'Cover of Pastoring Beyond the Pulpit.',
    shortDescription: 'A reflection on pastoral leadership, shepherding lives, and making a lasting impact beyond the pulpit.',
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
    title: 'The Waiting Room',
    author: 'Felix Akaninyene',
    subtitle: 'Faith & Patience Factor',
    cover: '/images/books/waiting-room.jpg',
    coverAlt: 'Cover of The Waiting Room.',
    shortDescription: 'A book exploring faith and patience through seasons of waiting.',
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('The Waiting Room'),
    featured: true,
    placeholder: false,
  },
  {
    id: 'grace-dimension',
    slug: 'grace-dimension',
    title: 'The Grace Dimension',
    author: 'Monday Adanu',
    subtitle: 'Secrets of True Fulfillment',
    cover: '/images/books/grace-dimension.jpg',
    coverAlt: 'Cover of The Grace Dimension.',
    shortDescription: 'An exploration of grace and the secrets of living a truly fulfilled life.',
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('The Grace Dimension'),
    featured: true,
    placeholder: false,
  },
  {
    id: 'effective-kingdom',
    slug: 'effective-kingdom',
    title: 'Effective Kingdom Stewardship',
    author: 'Matthew Owoicho Olofu',
    subtitle: null,
    cover: '/images/books/effective-kingdom.jpg',
    coverAlt: 'Cover of Effective Kingdom Stewardship.',
    shortDescription: 'A book on responsible and effective stewardship in the Kingdom.',
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Effective Kingdom Stewardship'),
    featured: true,
    placeholder: false,
  },
  {
    id: 'my-husband',
    slug: 'my-husband',
    title: "My Husband Doesn't Love Me Again",
    author: 'Samuel Yakubu',
    subtitle: 'A Journey Through Emotional Distance, Healing & Hope',
    cover: '/images/books/my-husband.jpg',
    coverAlt: "Cover of My Husband Doesn't Love Me Again.",
    shortDescription: 'A journey through emotional distance, with a focus on healing and hope.',
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry("My Husband Doesn't Love Me Again"),
    featured: false,
    placeholder: false,
  },
  {
    id: 'the-first-million',
    slug: 'the-first-million',
    title: 'The First Million Is Mental',
    author: 'Celestine Agbodike',
    subtitle: null,
    cover: '/images/books/the-first-million.jpg',
    coverAlt: 'Cover of The First Million Is Mental.',
    shortDescription: 'A perspective on the mindset required to pursue the first million.',
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('The First Million Is Mental'),
    featured: false,
    placeholder: false,
  },
  {
    id: 'untamed-poetic',
    slug: 'untamed-poetic',
    title: 'Untamed Poetic Outburst',
    author: 'Charissa Davis',
    subtitle: 'Brutal Spill',
    cover: '/images/books/untamed-poetic.jpg',
    coverAlt: 'Cover of Untamed Poetic Outburst.',
    shortDescription: 'A collection of bold, unrestrained poetic expression.',
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('Untamed Poetic Outburst'),
    featured: false,
    placeholder: false,
  },
  {
    id: 'african-humanoid',
    slug: 'african-humanoid',
    title: 'The African Humanoid',
    author: 'Emi Yusuf',
    subtitle: 'How Young Africans Can Compete with Generative AI',
    cover: '/images/books/african-humanoid.jpg',
    coverAlt: 'Cover of The African Humanoid.',
    shortDescription: 'A look at how young Africans can compete in a world shaped by generative AI.',
    genre: null,
    publishedYear: null,
    isbn: null,
    purchaseUrl: enquiry('The African Humanoid'),
    featured: false,
    placeholder: false,
  },
  {
    id: 'odu',
    slug: 'odu',
    title: 'Odu',
    author: 'Danasabe Ibrahim Osori',
    subtitle: 'A Bilingual Play',
    cover: '/images/books/odu.jpg',
    coverAlt: 'Cover of Odu.',
    shortDescription: 'A bilingual play presenting its story across two languages.',
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
