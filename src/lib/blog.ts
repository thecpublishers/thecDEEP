export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  featured: boolean;
  readingTime?: string;
  sample: boolean;
  content: string;
};

const files = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const requiredFields = [
  'title',
  'slug',
  'date',
  'author',
  'category',
  'excerpt',
  'image',
  'imageAlt',
] as const;

function unquote(value: string) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).replace(/\\"/g, '"');
  }
  return trimmed;
}

/**
 * A deliberately small frontmatter reader for the blog.
 * Supported values: plain strings, quoted strings, true, and false.
 * This keeps article publishing approachable without requiring special tooling.
 */
export function parseBlogFile(filePath: string, raw: string): BlogPost {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`Blog article ${filePath} is missing frontmatter between --- lines.`);
  }

  const metadata: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const separator = line.indexOf(':');
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    metadata[key] = unquote(line.slice(separator + 1));
  }

  for (const field of requiredFields) {
    if (!metadata[field]) {
      throw new Error(`Blog article ${filePath} is missing the "${field}" field.`);
    }
  }

  return {
    title: metadata.title,
    slug: metadata.slug,
    date: metadata.date,
    author: metadata.author,
    category: metadata.category,
    excerpt: metadata.excerpt,
    image: metadata.image,
    imageAlt: metadata.imageAlt,
    imageCaption: metadata.imageCaption || undefined,
    featured: metadata.featured === 'true',
    readingTime: metadata.readingTime || undefined,
    sample: metadata.sample === 'true',
    content: match[2].trim(),
  };
}

export const blogPosts: BlogPost[] = Object.entries(files)
  .map(([filePath, raw]) => parseBlogFile(filePath, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const slugCounts = new Map<string, number>();
for (const post of blogPosts) {
  slugCounts.set(post.slug, (slugCounts.get(post.slug) ?? 0) + 1);
}
for (const [slug, count] of slugCounts) {
  if (count > 1) {
    throw new Error(`Duplicate blog slug "${slug}". Each article needs a unique slug.`);
  }
}

export const featuredPosts = blogPosts.filter((post) => post.featured);
export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`));
}
