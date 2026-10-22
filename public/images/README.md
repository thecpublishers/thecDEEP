# Image library

All imagery on the website is local. Nothing is loaded from an external CMS,
remote image host, or another website.

## Folders

| Folder | Purpose | Recommended replacement |
| --- | --- | --- |
| `brand/` | Approved logo artwork and brand files. | Replace `logo.svg` only when an official master file is approved. The live header uses the same mark in code. |
| `hero/` | Homepage hero artwork. | Use a high-resolution landscape or portrait publishing photograph, ideally 1600–2400px on the long edge. Keep the focal point near the centre. |
| `team/` | Team portraits. | Replace each SVG with a real JPG/WebP portrait with the person’s permission. Use a 4:5 portrait crop. Update the path in `src/content/team.ts` and set `imagePlaceholder: false`. |
| `services/` | Service editorial imagery. | Replace with relevant publishing/work photography. Landscape 3:2 works best. Update the image path in `src/content/services.ts`. |
| `books/` | Book cover images. | Replace each placeholder SVG with the approved cover. A 2:3 portrait ratio is best (for example 1200×1800px). Update `cover` and `coverAlt` in `src/content/books.ts`, then set `placeholder: false`. |
| `blog/` | Blog featured images. | Use a 16:10 or 3:2 image, ideally 1600px wide. Update `image`, `imageAlt`, and `imageCaption` in the article frontmatter. |
| `careers/` | Careers page imagery. | Replace with genuine team/office photography. Landscape 3:2 works best. |

## Current status

The designed SVG files in `hero/`, `team/`, `services/`, `books/`, `blog/`,
and `careers/` are **intentional placeholders**. The interface labels them as
placeholders. They are original artwork created for this build, not photographs
of real people or approved book covers.

Do not present a placeholder as evidence of a real team member, a published
cover, or genuine company photography.

## File rules

- Use relative local paths that start with `/images/`.
- Prefer `.webp` or `.jpg` for photographs. SVG is suitable for artwork and
  placeholders.
- Use lowercase, hyphenated filenames, for example `team-paul-elijah.webp`.
- Keep filenames unique and descriptive.
- Optimise photographs before upload. Aim for under 300KB where practical.
- Always write useful alt text. Describe the image, not the filename.
- When replacing a book cover or team portrait, update the content file and
  remove the placeholder label.
