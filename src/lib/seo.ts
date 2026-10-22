import { useEffect } from 'react';

type PageMeta = {
  title: string;
  description: string;
  type?: 'website' | 'article';
  image?: string;
};

const SITE_NAME = 'Thec Writers & Publishers';

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
}

export function usePageMeta({ title, description, type = 'website', image }: PageMeta) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const url = `${window.location.origin}${window.location.pathname}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
    if (image) {
      const absoluteImage = new URL(image, window.location.origin).toString();
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: absoluteImage });
      upsertMeta('meta[name="twitter:image"]', {
        name: 'twitter:image',
        content: absoluteImage,
      });
    }
  }, [title, description, type, image]);
}
