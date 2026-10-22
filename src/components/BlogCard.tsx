import { Link } from 'react-router-dom';
import type { BlogPost } from '../lib/blog';
import { formatDate } from '../lib/blog';
import { Icon } from './Icon';
import { SafeImage } from './SafeImage';

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={`blog-card${featured ? ' blog-card--featured' : ''}`}>
      <Link to={`/blog/${post.slug}`} className="blog-card__image" tabIndex={-1} aria-hidden="true">
        <SafeImage src={post.image} alt="" fallbackLabel="Article image unavailable" />
        {post.sample ? <span className="blog-card__sample">Sample article</span> : null}
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__category">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <div className="blog-card__footer">
          <Link to={`/blog/${post.slug}`} className="text-link">
            Read article
            <Icon name="arrow-right" size={16} />
          </Link>
          {post.readingTime ? <span>{post.readingTime}</span> : null}
        </div>
      </div>
    </article>
  );
}
