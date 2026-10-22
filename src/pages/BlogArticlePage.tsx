import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ButtonLink } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { Icon } from '../components/Icon';
import { SafeImage } from '../components/SafeImage';
import { formatDate, getBlogPost } from '../lib/blog';
import { usePageMeta } from '../lib/seo';
import { site } from '../content/site';
import { NotFoundPage } from './NotFoundPage';

export function BlogArticlePage() {
  const { slug } = useParams();
  const post = getBlogPost(slug ?? '');

  usePageMeta({
    title: post ? post.title : 'Article not found',
    description: post?.excerpt ?? 'The requested article could not be found.',
    type: 'article',
    image: post?.image,
  });

  if (!post) return <NotFoundPage />;

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);
  const shareLinks = [
    {
      label: 'Share on X',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: 'x' as const,
    },
    {
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: 'linkedin' as const,
    },
    {
      label: 'Share on WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: 'whatsapp' as const,
    },
    {
      label: 'Share by email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: 'mail' as const,
    },
  ];

  return (
    <>
      <article className="article" aria-labelledby="article-title">
        <header className="article-header">
          <div className="container article-header__inner">
            <Link to="/blog" className="back-link">
              <Icon name="arrow-right" size={15} />
              Back to the blog
            </Link>
            <div className="article-header__meta">
              <span className="article-category">{post.category}</span>
              {post.sample ? <span className="sample-badge">Sample article</span> : null}
            </div>
            <h1 id="article-title" tabIndex={-1}>
              {post.title}
            </h1>
            <p className="article-header__excerpt">{post.excerpt}</p>
            <div className="article-byline">
              <div className="article-byline__author">
                <span className="article-byline__avatar" aria-hidden="true">
                  T
                </span>
                <span>
                  <strong>{post.author}</strong>
                  <small>Thec Writers &amp; Publishers</small>
                </span>
              </div>
              <div className="article-byline__details">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.readingTime ? <span>{post.readingTime}</span> : null}
              </div>
            </div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-main">
            <figure className="article-image">
              <SafeImage src={post.image} alt={post.imageAlt} fallbackLabel="Article image unavailable" />
              <span className="image-placeholder-tag">Image placeholder</span>
              {post.imageCaption ? <figcaption>{post.imageCaption}</figcaption> : null}
            </figure>

            {post.sample ? (
              <aside className="sample-notice" aria-label="Sample article notice">
                <Icon name="sparkle" size={22} />
                <div>
                  <strong>This is a sample article.</strong>
                  <p>
                    It demonstrates the article layout and the GitHub-based publishing workflow. It
                    is not a company announcement.
                  </p>
                </div>
              </aside>
            ) : null}

            <div className="article-body prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ href, children, ...props }) => {
                    if (href?.startsWith('/')) {
                      return <Link to={href}>{children}</Link>;
                    }
                    return (
                      <a href={href} {...props} target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <div className="article-share">
              <p>Share this article</p>
              <div>
                {shareLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    title={link.label}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  >
                    <Icon name={link.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="article-return">
              <Link to="/blog" className="text-link">
                <Icon name="arrow-right" size={16} />
                Return to all articles
              </Link>
            </div>
          </div>

          <aside className="article-aside" aria-labelledby="article-aside-heading">
            <div className="article-aside__card">
              <p className="eyebrow">Work with Thec</p>
              <h2 id="article-aside-heading">Your manuscript, in careful hands.</h2>
              <p>
                We help authors move from draft to finished book with editorial, production, and
                publishing support.
              </p>
              <ButtonLink to="/publish-your-book" size="small" icon="arrow-right">
                Publish your book
              </ButtonLink>
              <a href={`mailto:${site.contact.email}`} className="article-aside__email">
                <Icon name="mail" size={15} />
                {site.contact.email}
              </a>
            </div>
            <div className="article-aside__note">
              <h2>About this journal</h2>
              <p>
                Written and edited by the Thec editorial team. We publish practical publishing
                guidance and clearly label sample content.
              </p>
            </div>
          </aside>
        </div>
      </article>

      <CTASection
        eyebrow="From reading to publishing"
        title="Ready to take the next step with your book?"
        text="Tell us about your manuscript and we will help you understand the route ahead."
        primaryLabel="Start your publishing journey"
        primaryTo="/publish-your-book"
      />
    </>
  );
}
