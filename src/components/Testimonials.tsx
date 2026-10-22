import { Link } from 'react-router-dom';
import { testimonialEmptyState, testimonials } from '../content/testimonials';
import { Icon } from './Icon';

export function Testimonials() {
  if (testimonials.length === 0) {
    return (
      <div className="testimonial-empty">
        <span className="testimonial-empty__icon" aria-hidden="true">
          <Icon name="quote" size={34} />
        </span>
        <div>
          <p className="eyebrow">Testimonials · Empty state</p>
          <h3>{testimonialEmptyState.title}</h3>
          <p>{testimonialEmptyState.text}</p>
        </div>
        <a href={testimonialEmptyState.href} className="button button--secondary">
          {testimonialEmptyState.cta}
          <Icon name="arrow-up-right" size={16} />
        </a>
      </div>
    );
  }

  return (
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
        <figure className="testimonial-card" key={testimonial.id}>
          <Icon name="quote" size={26} />
          <blockquote>{testimonial.quote}</blockquote>
          <figcaption>
            <strong>{testimonial.author}</strong>
            <span>{testimonial.role}</span>
            {testimonial.bookTitle ? <span>{testimonial.bookTitle}</span> : null}
          </figcaption>
        </figure>
      ))}
      <p className="testimonial-grid__note">
        <Link to="/contact">Speak with an author advisor</Link>
      </p>
    </div>
  );
}
