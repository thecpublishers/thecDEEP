# Thec Writers & Publishers — Website & Content Guide

A complete, independent website for **Thec Writers & Publishers**, built with React, Vite, and
TypeScript. It includes the public publishing website, a locally managed book catalogue, a
GitHub-managed blog, careers applications, and a direct-enquiry bookstore.

This README is written for the person who will maintain the site. You do **not** need to edit
React components or routing code to add a book, publish an article, replace a photograph, or
update service and team details.

---

## 1. Quick start

Requirements:

- Node.js **20.19 or newer** (Node 22 LTS recommended)
- pnpm (recommended) or npm

```bash
pnpm install
pnpm dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

Other commands:

```bash
pnpm build      # Type-check and create a production build in dist/
pnpm preview    # Preview the production build locally
pnpm typecheck  # Type-check only
```

With npm, use `npm install`, `npm run dev`, `npm run build`, and so on.

---

## 2. What is included

### Public pages

| Page | URL |
| --- | --- |
| Home | `/` |
| About Us | `/about` |
| Services overview | `/services` |
| Service detail | `/services/:slug` (six services) |
| Published Books | `/books` |
| Book detail | `/books/:slug` (eight titles) |
| Bookstore entry | `/bookstore` |
| Blog listing | `/blog` |
| Blog article | `/blog/:slug` |
| Careers | `/careers` |
| Contact | `/contact` |
| Publish Your Book | `/publish-your-book` |
| Referral Program | `/referral-program` |
| Not found | Any unknown URL |

Every route opens from the navigation, a pasted URL, or a page refresh. `vercel.json` provides
the SPA fallback while letting Vercel serve static assets first.

### Features

- Responsive header, accessible mobile menu with focus trapping, Escape-to-close, and
  close-on-navigation.
- Shared footer with approved contact details, addresses, hours, and social-link placeholders.
- Homepage sections: hero, qualitative trust strip, six services, about, featured books,
  four-step process, team, latest article, honest empty testimonial state, FAQ accordion, final
  CTA.
- Central content files for services, books, team, careers, FAQs, testimonials, and site details.
- Markdown blog with frontmatter and automatic article discovery.
- Local book cover artwork and local editorial imagery. No remote image dependencies.
- Accessible FAQ and job-detail accordions.
- Contact and careers forms with complete validation states and a transparent email handoff.
- Per-page titles, meta descriptions, canonical URLs, and Open Graph metadata.
- 404 page and route-level loading state.

---

## 3. Project structure

```text
.
├── .gitignore
├── .npmrc
├── .nvmrc
├── index.html
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
├── vercel.json
├── vite.config.ts
├── public/
│   ├── robots.txt
│   └── images/
│       ├── README.md
│       ├── brand/
│       │   ├── favicon.svg
│       │   └── logo.svg
│       ├── hero/
│       │   ├── about-studio.svg
│       │   └── hero-editorial.svg
│       ├── team/
│       │   ├── aardhan-abdull.svg
│       │   ├── joshua-caleb-mechi.svg
│       │   └── paul-elijah.svg
│       ├── services/
│       │   ├── book-marketing-distribution.svg
│       │   ├── digital-publishing-isbn.svg
│       │   ├── editing-proofreading.svg
│       │   ├── ghostwriting.svg
│       │   ├── printing-publishing-consultation.svg
│       │   └── transcription.svg
│       ├── books/
│       │   ├── extra-ordinary.svg
│       │   ├── fund-it.svg
│       │   ├── logistics.svg
│       │   ├── palace-of-thieves.svg
│       │   ├── second-halve.svg
│       │   ├── tyrannus.svg
│       │   ├── whisper-in-bukavu.svg
│       │   └── wisdom.svg
│       ├── blog/
│       │   └── manuscript-to-book.svg
│       └── careers/
│           └── careers-shelf.svg
├── scripts/
│   └── generate_placeholders.py
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── components/
    │   ├── BlogCard.tsx
    │   ├── BookCard.tsx
    │   ├── BookCover.tsx
    │   ├── Button.tsx
    │   ├── CTASection.tsx
    │   ├── CareersApplicationForm.tsx
    │   ├── ContactForm.tsx
    │   ├── EditorialImage.tsx
    │   ├── FAQAccordion.tsx
    │   ├── Footer.tsx
    │   ├── FormField.tsx
    │   ├── Header.tsx
    │   ├── Icon.tsx
    │   ├── Layout.tsx
    │   ├── Logo.tsx
    │   ├── PageHero.tsx
    │   ├── ProcessSteps.tsx
    │   ├── SafeImage.tsx
    │   ├── SectionHeading.tsx
    │   ├── ServiceCard.tsx
    │   ├── TeamCard.tsx
    │   └── Testimonials.tsx
    ├── content/
    │   ├── blog/
    │   │   └── how-a-manuscript-becomes-a-book.md
    │   ├── books.ts
    │   ├── careers.ts
    │   ├── faqs.ts
    │   ├── services.ts
    │   ├── site.ts
    │   ├── team.ts
    │   └── testimonials.ts
    ├── lib/
    │   ├── blog.ts
    │   ├── forms.ts
    │   └── seo.ts
    ├── pages/
    │   ├── AboutPage.tsx
    │   ├── BlogArticlePage.tsx
    │   ├── BlogPage.tsx
    │   ├── BookDetailPage.tsx
    │   ├── BooksPage.tsx
    │   ├── BookstorePage.tsx
    │   ├── CareersPage.tsx
    │   ├── ContactPage.tsx
    │   ├── HomePage.tsx
    │   ├── NotFoundPage.tsx
    │   ├── PublishBookPage.tsx
    │   ├── ReferralPage.tsx
    │   ├── ServiceDetailPage.tsx
    │   └── ServicesPage.tsx
    └── styles/
        ├── global.css
        └── pages.css
```

### Where the important content lives

| What you want to change | File |
| --- | --- |
| Company name, contact details, hours, addresses, social links | `src/content/site.ts` |
| Services | `src/content/services.ts` |
| Published books | `src/content/books.ts` |
| Team profiles | `src/content/team.ts` |
| Careers roles and values | `src/content/careers.ts` |
| FAQs | `src/content/faqs.ts` |
| Testimonials | `src/content/testimonials.ts` |
| Blog articles | `src/content/blog/*.md` |
| Images | `public/images/` |

---

## 4. Add or update a book

All book content is in **`src/content/books.ts`**. The homepage featured books, full catalogue,
bookstore, and individual book pages all use this one file.

### Step by step

1. Open the repository on GitHub.
2. Upload the approved cover image to `public/images/books/`.
   - Use a lowercase, hyphenated filename, for example `the-fourth-estate.jpg`.
   - A portrait ratio of **2:3** is best (for example 1200 × 1800 px).
   - JPG, WebP, PNG, or SVG is accepted. Use JPG or WebP for photographs.
3. Open `src/content/books.ts` and add a new object to the `books` array.
4. Copy an existing entry and replace every value. Keep every property.
5. Save the file. The site will rebuild and publish automatically after deployment.
6. Visit `/books` and the new detail page to confirm the entry.

### Complete example entry

```ts
  {
    id: 'the-fourth-estate',
    slug: 'the-fourth-estate',
    title: 'The Fourth Estate',
    author: 'Author Name',
    cover: '/images/books/the-fourth-estate.jpg',
    coverAlt: 'Book cover for The Fourth Estate by Author Name.',
    shortDescription:
      'A short, factual description of the book in one or two sentences.',
    genre: 'Non-fiction',
    publishedYear: '2026',
    isbn: '978-0-00-000000-0',
    purchaseUrl: `mailto:${site.contact.email}?subject=${encodeURIComponent('Book enquiry: The Fourth Estate')}`,
    featured: true,
    placeholder: false,
  },
```

### Field rules

| Field | What to enter |
| --- | --- |
| `id` | A unique internal identifier. Lowercase and hyphenated. Never reuse it for another book. |
| `slug` | The URL ending. `/books/the-fourth-estate`. Must be unique. |
| `title` | The approved book title. |
| `author` | The approved author name, or `null` if not confirmed. |
| `cover` | Local path beginning with `/images/books/`. Never use an external image URL. |
| `coverAlt` | A useful description of the cover for screen readers. |
| `shortDescription` | A factual description, or `null`. Do not invent one. |
| `genre` | Approved genre, or `null`. |
| `publishedYear` | Year as a string (`'2026'`), or `null`. |
| `isbn` | The approved ISBN, or `null`. |
| `purchaseUrl` | A real approved link, an email enquiry link, or `null`. |
| `featured` | `true` to show it in the homepage featured selection; otherwise `false`. |
| `placeholder` | `true` only while the cover is designed placeholder artwork. Set to `false` when the approved cover is uploaded. |

The initial eight catalogue entries intentionally have `author`, `genre`, `publishedYear`,
`isbn`, and `shortDescription` set to `null`, and they use placeholder covers. The interface
labels those records clearly. When verified information arrives, replace the `null` values and
the cover path.

To remove a book, delete its whole object from the array. To update a cover, replace the image
file at the same path or change the `cover` value.

> **Never add an estimated ISBN, invented author, invented book description, or unapproved
> purchase link.**

---

## 5. Publish a blog article

The blog reads Markdown files from **`src/content/blog/`**. Each `.md` file is one article. The
filename can be anything, but using the slug is clearest. The `slug` field, not the filename,
controls the URL.

### Step by step

1. Upload the featured image to `public/images/blog/`.
   - Landscape, ideally 1600 px wide. JPG, WebP, PNG, or SVG.
   - Use a lowercase, hyphenated filename, for example `editing-a-first-draft.jpg`.
2. In `src/content/blog/`, create a new file such as `editing-a-first-draft.md`.
3. Start the file with the frontmatter block shown below, then write the article in Markdown.
4. Reference the image with a local path beginning with `/images/blog/`.
5. Save the file. The listing page discovers it automatically and sorts by date, newest first.
6. Visit `/blog`, open the new article, and confirm the image, title, and date.
7. After deployment, refresh the article URL directly to confirm the SPA fallback.

### Complete example article

```md
---
title: "What to Expect from a First Editorial Conversation"
slug: "first-editorial-conversation"
date: "2026-10-20"
author: "Thec Editorial Team"
category: "Publishing Guides"
excerpt: "A practical look at what an editor needs to know before recommending the right kind of support for a manuscript."
image: "/images/blog/first-editorial-conversation.jpg"
imageAlt: "An editor's desk with a manuscript, pencil, and notebook."
imageCaption: "The first conversation should clarify the book's purpose and next step."
featured: false
readingTime: "5 min read"
sample: false
---

Opening paragraph of the article. Keep it clear and specific.

## A heading inside the article

Write the body here. You can use:

- bullet lists
- **bold text**
- *italic text*
- [links to internal pages](/services)
- [links to external pages](https://example.com)

> A blockquote is supported.

## Another heading

The article ends here.
```

### Frontmatter rules

| Field | Required | Notes |
| --- | --- | --- |
| `title` | Yes | Enclose in double quotes. |
| `slug` | Yes | Unique URL ending. Use lowercase words and hyphens. |
| `date` | Yes | `YYYY-MM-DD`. The date is displayed in UK style. |
| `author` | Yes | Use a real editorial attribution, not an invented person. |
| `category` | Yes | Short category name. |
| `excerpt` | Yes | One or two sentences used on cards and in search results. |
| `image` | Yes | Local path beginning with `/images/blog/`. |
| `imageAlt` | Yes | Describe the image meaningfully. |
| `imageCaption` | No | Optional caption displayed under the image. |
| `featured` | No | `true` or `false`. Defaults to false. |
| `readingTime` | No | For example `"6 min read"`. |
| `sample` | No | Keep `true` only for the existing labelled demonstration article. |

The built-in frontmatter reader supports single-line quoted strings and the boolean values
`true` / `false`. Keep each value on one line. Do not use nested metadata or multi-line values.
If a required field is missing, the build will report the filename that needs attention.
Duplicate slugs also stop the build with a clear error.

### Verify after deployment

1. Open `/blog` and confirm the card shows the correct image, title, date, category, and excerpt.
2. Open the article at `/blog/your-slug`.
3. Refresh the page. It must still load; this confirms the Vercel SPA fallback.
4. Check the browser tab title and page description.

The current article is a clearly labelled **sample** and is not a company announcement.

---

## 6. Replace photographs and artwork

All images live under `public/images/`. The interface overlays a small label on intentional
placeholders. Replace the file and update the relevant content record when the image is real.

### Common replacements

| What to replace | File / location | What else to update |
| --- | --- | --- |
| Homepage hero | `public/images/hero/hero-editorial.svg` | No code change if you keep the same filename. Prefer a high-resolution photograph. |
| About photography | `public/images/hero/about-studio.svg` | Used on the homepage, About, and Publish pages. Keep the filename or update each use. |
| Team portraits | `public/images/team/` | Update `image` and `imageAlt` in `src/content/team.ts`; set `imagePlaceholder: false`. |
| Service images | `public/images/services/` | Update `image` and `imageAlt` in `src/content/services.ts`. |
| Book covers | `public/images/books/` | Update `cover` and `coverAlt` in `src/content/books.ts`; set `placeholder: false`. |
| Blog featured image | `public/images/blog/` | Update `image`, `imageAlt`, and `imageCaption` in the article frontmatter. |
| Careers imagery | `public/images/careers/` | Careers imagery is available for future editorial use. |
| Logo / favicon | `public/images/brand/` | Header and footer use the same mark in code. For a complete rebrand, ask a developer. |

### File rules

- Use **local paths only**: `/images/books/example.jpg`.
- Never use a temporary URL, a Google Drive link, a social media URL, or an image from an old
  website.
- Use lowercase, hyphenated filenames without spaces.
- Optimise photographs. Aim for under 300 KB where practical.
- Use JPG or WebP for photographs; use SVG for approved vector artwork.
- Keep book covers at a 2:3 ratio and team portraits at 4:5 so cards remain consistent.
- Always write alt text that describes the image. Do not write “image of” unless it helps.
- Do not present generated face imagery as a real team member. Use a real, permissioned
  photograph or keep the labelled placeholder.

The current team portraits, book covers, hero, service, blog, and careers images are **original
designed placeholders**. They are not photographs of real people or final published covers.
See `public/images/README.md` for folder-by-folder guidance.

---

## 7. Edit services and team details

### Services

Open `src/content/services.ts`. Each array entry is one service. You can safely edit:

- `title` and `navTitle`
- `shortDescription`
- `intro`
- `description` paragraphs
- `includes`
- `suitableFor`
- `note`
- `metaDescription`
- `image` and `imageAlt`
- `number`

Keep the `slug` unchanged unless you also update every link that points to it. Changing a slug
changes the URL. The number and icon should remain unique and consistent.

Do not add prices, guarantees, turnaround promises, or unapproved service terms. The current
content intentionally directs visitors to a project-specific conversation.

### Team

Open `src/content/team.ts`. Each entry supports `name`, `role`, `image`, `imageAlt`, `summary`,
`initials`, and `imagePlaceholder`. Add another object to display another card. The homepage and
About page both use the same list.

Only list real, approved team members. Keep `imagePlaceholder: true` until a permissioned
portrait replaces the placeholder.

### Careers roles

Open `src/content/careers.ts`. You can add, remove, or edit roles and their responsibilities and
requirements. The application dropdown is generated from the same `jobs` array, so a new role
appears in the form automatically. Keep `id` values unique.

Do not add salary figures or employment terms that have not been approved.

### Testimonials

`src/content/testimonials.ts` intentionally contains an empty array. The website displays a
clearly labelled empty state. To add genuine feedback:

1. Obtain permission to publish the quote and attribution.
2. Add an object with `id`, `quote`, `author`, `role`, and optionally `bookTitle`.
3. Confirm the exact wording with the author before deployment.

Never invent a quote, identity, rating, or composite testimonial.

### FAQs

Edit `src/content/faqs.ts`. Each item needs a unique `id`, `question`, and factual `answer`.
Keep answers honest and direct project-specific pricing or timelines to the Contact page.

### Social links

`src/content/site.ts` contains the social configuration. All are currently `null` because no
profile URLs were approved. Until a URL is added, the footer shows a non-clickable, labelled
pending icon rather than a broken link. Add an approved URL to make it live.

### Referral programme

`src/pages/ReferralPage.tsx` intentionally publishes only confirmed information: the programme
is in development and no incentives or terms are live. Replace that content only after the
company approves written programme terms. Do not invent commission rates or rewards.

---

## 8. Forms and application handling

### Current, implemented behaviour

The Contact, Publish Your Book, and Careers forms are **real client-side validated forms with an
email handoff**:

1. The visitor completes the form.
2. The browser validates the fields and shows inline errors plus an accessible error summary.
3. On a valid submission, the site prepares a pre-filled `mailto:` email addressed to the
   approved company address.
4. The visitor reviews the draft in their own email app and sends it.
5. The confirmation state explicitly says the email is **ready, not sent**, and that the company
   has not received it until the visitor sends it.

No application data is posted to a server, stored in the repository, or written to a database.
There is no fake success message and no invented API endpoint. There is no CV upload field.
Applicants are told to attach their CV to the email.

Recruitment details:

- Email: `thecjoborder@gmail.com`
- Phone/WhatsApp: `07065773625`
- Applications should include the position title in the subject line or WhatsApp message.

### What is required for secure online submission later

To replace the email handoff with true server submission, a developer should add:

1. A secure server-side endpoint or serverless function (for example on Vercel) that validates
   input again, applies rate limiting and spam protection, and sends email or stores the
   application.
2. A protected recruitment inbox or applicant-tracking destination.
3. A private file-upload flow for CVs. Applicant documents must **not** be committed to a public
   GitHub repository.
4. Privacy notice, consent, retention period, and deletion process for applicant data.
5. Environment variables and secrets configured in the hosting dashboard. Never place secrets
   in `src/` or commit a `.env` file.

The current email/WhatsApp fallback is intentional and fully usable in the meantime.

---

## 9. Accessibility and quality notes

The implementation includes:

- Semantic page landmarks and a single `h1` per page.
- Skip-to-content link.
- Visible keyboard focus states.
- Accessible mobile menu with `aria-expanded`, `role="dialog"`, focus trap, Escape support,
  background scroll lock, and close-on-navigation.
- FAQ and job accordions using `aria-expanded`, `aria-controls`, and labelled regions.
- Form labels, required indicators, `aria-invalid`, inline error associations, and an error
  summary that receives focus.
- Meaningful alt text and labelled designed placeholders.
- Reduced-motion support.
- Responsive layouts at desktop, tablet, and 390px mobile widths.
- No horizontal overflow at the tested widths.
- Direct route refresh handling via `vercel.json`.

When making content edits, preserve heading order and alt text. Do not use colour alone to
communicate status.

---

## 10. Test locally

```bash
pnpm install
pnpm typecheck
pnpm build
pnpm preview
```

Then check:

- `/`, `/about`, `/services`, `/books`, `/blog`, `/careers`, `/contact`,
  `/publish-your-book`, `/bookstore`, `/referral-program`.
- One service detail, one book detail, and the sample article.
- A direct URL paste and a refresh on a detail page.
- The mobile menu at a narrow window width: open, Tab through links, press Escape.
- Form validation with empty fields and an invalid email.
- The FAQ accordion and job-detail panels.
- Book search and the empty search state.

The project is a client-side SPA. Production hosting needs a fallback rewrite to `index.html`;
`vercel.json` in this repository provides it.

---

## 11. Deploy to Vercel

1. Create a new, empty GitHub repository. Do not connect or import anything from a previous
   website or content system.
2. Commit this project to the new repository.
3. In Vercel, choose **Add New → Project** and import the new repository.
4. Vercel should detect **Vite**. Confirm:
   - Framework preset: **Vite**
   - Install command: `pnpm install` (or `npm install`)
   - Build command: `pnpm build` (or `npm run build`)
   - Output directory: `dist`
5. Deploy. No environment variables are required for the current email-based forms.
6. Open the production URL and test every page, including a direct detail-page refresh.
7. Add the final production domain to the canonical/SEO setup if it changes. The current code
   derives canonical URLs from the live page origin.

`vercel.json` keeps static assets working and rewrites unknown application routes to
`index.html`.

### Before launch, replace the placeholders

- Approved cover artwork and verified catalogue metadata.
- Approved photographs for team, hero, about, services, blog, and careers.
- Real social profile URLs, if available.
- Genuine, permissioned testimonials, if any.
- Approved referral programme terms, if launching the programme.
- Any approved prices or availability information. None are currently published.

---

## 12. Known assumptions and open items

These are deliberate, clearly labelled omissions rather than fabricated content:

1. **Book metadata.** Only the eight titles were supplied. Authors, genres, descriptions,
   publication years, ISBNs, prices, and approved covers are unconfirmed. The interface labels
   those records as pending and uses designed placeholder covers.
2. **Photography.** No approved company or team photographs were supplied. Original designed
   placeholders are used and labelled. No generated portrait represents a real person.
3. **Testimonials.** No genuine, permissioned feedback was supplied. The section is an explicit
   empty state.
4. **Referral terms.** No approved incentives or eligibility rules were supplied. The page
   publishes only that the programme is in development and invites expressions of interest.
5. **Social profiles.** No URLs were confirmed. Footer icons are non-clickable pending states.
6. **Prices and guarantees.** No prices, delivery fees, sales guarantees, award claims, or
   turnaround promises are published. Enquiries are directed to a project conversation.
7. **Forms.** No backend, database, or file upload is connected. The forms prepare an email in
   the visitor’s own email app, with direct email/WhatsApp fallbacks.
8. **Bookstore.** There is no online checkout, payment collection, or external commerce
   dependency. Orders are confirmed directly by the team.
9. **Careers role details.** Role summaries, responsibilities, and requirements were written to
   make the supplied six roles usable. They should be reviewed by the company before launch.
10. **Domain and analytics.** No production domain, analytics, cookies, or tracking are
    configured. Add only with approval and, where required, a privacy notice.

---

## 13. Optional placeholder artwork utility

The current SVG artwork was generated with `scripts/generate_placeholders.py`, a development
utility. Regenerating it is optional and requires Python 3:

```bash
python scripts/generate_placeholders.py
```

It only writes files under `public/images/`. It does not affect the application at runtime.
Package fonts are self-hosted through `@fontsource-variable/inter` and
`@fontsource-variable/manrope`; both are open-source font families distributed under the SIL Open
Font License.
