import { site } from './site';

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  bookTitle?: string;
};

/**
 * Genuine, permissioned author feedback only.
 *
 * Add an entry only after the author has approved the wording and the
 * attribution. Do not add invented reviews, star ratings, or composite quotes.
 * While this array is empty, the site displays a clearly labelled empty state.
 */
export const testimonials: Testimonial[] = [];

export const testimonialEmptyState = {
  title: 'Author stories, only when they are real.',
  text: 'We publish feedback only after an author has given permission and approved the wording. Verified author reflections will appear here as they are received.',
  cta: 'Share feedback with our team',
  href: `mailto:${site.contact.email}?subject=${encodeURIComponent('Author feedback')}`,
};
