import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/Button';
import { Icon } from '../components/Icon';
import { usePageMeta } from '../lib/seo';

export function NotFoundPage() {
  usePageMeta({
    title: 'Page not found',
    description: 'The page you were looking for could not be found. Explore Thec Writers & Publishers.',
  });

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <p className="eyebrow">Page not found</p>
        <h1 tabIndex={-1}>This page has not been written yet.</h1>
        <p>
          The address may be incorrect, or the page may have moved. Let us help you find the right
          place to continue.
        </p>
        <div className="not-found__actions">
          <ButtonLink to="/" icon="arrow-right">
            Return home
          </ButtonLink>
          <ButtonLink to="/contact" variant="secondary" icon="arrow-right">
            Contact us
          </ButtonLink>
        </div>
        <div className="not-found__links">
          <p>Popular destinations</p>
          <div>
            <Link to="/services">
              <Icon name="pen" size={18} />
              Services
            </Link>
            <Link to="/books">
              <Icon name="book" size={18} />
              Published books
            </Link>
            <Link to="/careers">
              <Icon name="users" size={18} />
              Careers
            </Link>
            <Link to="/blog">
              <Icon name="message" size={18} />
              Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
