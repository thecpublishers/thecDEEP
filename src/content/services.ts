export type Service = {
  slug: string;
  number: string;
  title: string;
  navTitle: string;
  shortDescription: string;
  intro: string;
  icon: 'ghostwriting' | 'editing' | 'printing' | 'digital' | 'marketing' | 'transcription';
  image: string;
  imageAlt: string;
  description: string[];
  includes: string[];
  suitableFor: string[];
  note: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'ghostwriting',
    number: '01',
    title: 'Ghostwriting',
    navTitle: 'Ghost Writing',
    shortDescription:
      'Turn your expertise, experience, or idea into a manuscript while keeping your voice at the centre.',
    intro:
      'A book can begin with a memory, a framework, a body of expertise, or an idea that has not yet found its shape. Our ghostwriting service gives that material a considered structure and a clear voice.',
    icon: 'ghostwriting',
    image: '/images/services/ghostwriting.svg',
    imageAlt:
      'Editorial artwork placeholder for ghostwriting, showing layered pages and a red pencil line.',
    description: [
      'Ghostwriting is a close collaboration. We begin with extended conversations about your purpose, audience, story, and the way you naturally communicate. Those decisions guide the outline, the research, and the drafting process.',
      'You remain the author of the work and the source of its perspective. Our role is to help organise the material, find the clearest expression, and carry the manuscript through successive revisions with you.',
      'Whether you are writing a memoir, a business book, a guide, or another form of non-fiction, the process is tailored to the complexity of the subject and the level of support you need.',
    ],
    includes: [
      'Discovery conversations to clarify purpose, audience, and scope',
      'Manuscript outline and chapter planning',
      'Interview-based research and source organisation',
      'Drafting and revision in collaboration with you',
      'A final manuscript prepared for editorial review',
    ],
    suitableFor: [
      'Leaders and founders with a book concept',
      'Experts who want to share practical knowledge',
      'Authors with a story but limited writing time',
      'Anyone who needs help giving an idea a written structure',
    ],
    note: 'Scope, timelines, and fees are agreed after a consultation. We do not publish fixed project prices because every manuscript has a different shape.',
    metaDescription:
      'Explore ghostwriting services from Thec Writers & Publishers. We help authors shape ideas, expertise, and stories into clear, considered manuscripts.',
  },
  {
    slug: 'editing-proofreading',
    number: '02',
    title: 'Editing & Proofreading',
    navTitle: 'Editing & Proofreading',
    shortDescription:
      'Refine clarity, structure, consistency, and correctness without losing the character of your writing.',
    intro:
      'Good editing is not about making every sentence sound the same. It is about helping the reader hear your meaning more clearly while preserving the qualities that make the work yours.',
    icon: 'editing',
    image: '/images/services/editing-proofreading.svg',
    imageAlt:
      'Editorial artwork placeholder for editing and proofreading, with marked-up manuscript pages.',
    description: [
      'We assess each manuscript on its own terms. A developmental edit considers argument, organisation, pacing, and reader experience. A copyedit focuses on grammar, usage, consistency, and style. A proofread is the final careful pass before publication.',
      'The right level of editing depends on the condition of the draft and what you intend to do next. We explain what we are recommending, provide clear notes, and keep you involved in decisions that affect your voice.',
      'We work with fiction and non-fiction in a range of lengths and formats. If your manuscript is not yet complete, we can advise on the most useful next editorial step.',
    ],
    includes: [
      'Manuscript assessment and editorial recommendations',
      'Developmental feedback on structure and clarity',
      'Copyediting for grammar, style, and consistency',
      'Final proofreading before publication',
      'Clear queries and revision guidance',
    ],
    suitableFor: [
      'Authors preparing a manuscript for publication',
      'Writers who want an objective editorial assessment',
      'Self-publishing authors managing production',
      'Organisations preparing reports, memoirs, or institutional books',
    ],
    note: 'Editorial scope is confirmed after a sample review. Timing depends on manuscript length, condition, and the level of editing required.',
    metaDescription:
      'Professional editing and proofreading for authors. Developmental feedback, copyediting, and final proofreading from Thec Writers & Publishers.',
  },
  {
    slug: 'printing-publishing-consultation',
    number: '03',
    title: 'Printing & Publishing Consultation',
    navTitle: 'Printing & Consultation',
    shortDescription:
      'Make informed decisions about print preparation, formats, binding, and the practical path to publication.',
    intro:
      'Publishing involves a series of practical choices: trim size, paper, binding, print quantities, file preparation, and the route that best fits your goals. We help you understand those choices before you commit.',
    icon: 'printing',
    image: '/images/services/printing-publishing-consultation.svg',
    imageAlt:
      'Editorial artwork placeholder for printing consultation, with stacked book blocks and production marks.',
    description: [
      'Our printing and publishing consultation begins with the format and purpose of your book. A poetry collection, a business guide, and a family history may each call for a different physical treatment and production plan.',
      'We help you prepare and review print-ready files, understand common binding and finishing options, and ask the right questions of a printer. Where you need production coordination, we can help manage that process.',
      'We also explain the difference between publishing routes so that you can make an informed decision. Our role is to provide practical guidance, not to pressure you toward one option.',
    ],
    includes: [
      'Publishing route consultation',
      'Print specification and format guidance',
      'Print-ready file checks',
      'Binding, paper, and finishing considerations',
      'Supplier and production coordination guidance',
    ],
    suitableFor: [
      'Authors planning a first print run',
      'Self-publishing authors preparing production files',
      'Organisations producing commemorative or institutional books',
      'Authors comparing publishing routes',
    ],
    note: 'Printing costs vary by specification, quantity, and supplier. We gather requirements before discussing a project-specific quotation.',
    metaDescription:
      'Printing and publishing consultation for authors. Practical guidance on formats, print preparation, binding, and publishing routes.',
  },
  {
    slug: 'digital-publishing-isbn',
    number: '04',
    title: 'Digital Publishing & ISBN Procurement',
    navTitle: 'Digital Publishing & ISBN',
    shortDescription:
      'Navigate ISBN requirements and prepare your book for digital publishing and distribution.',
    intro:
      'Digital publishing works best when the foundations are right: clean files, accurate metadata, and a clear understanding of ISBN requirements. We help authors prepare carefully for that step.',
    icon: 'digital',
    image: '/images/services/digital-publishing-isbn.svg',
    imageAlt:
      'Editorial artwork placeholder for digital publishing, with a tablet, metadata lines, and a book shape.',
    description: [
      'An ISBN identifies a specific edition of a book. Requirements differ depending on format and publishing route, so we begin by clarifying what your project needs and which agency handles the assignment.',
      'We can guide you through the application process and help organise the metadata that accompanies a published book, including title, author, format, and imprint information. ISBN assignment always remains subject to the issuing agency’s rules.',
      'We also prepare book files and metadata for digital distribution where appropriate. We do not promise placement in a particular store or a particular sales outcome; those decisions belong to the retailer or distribution platform.',
    ],
    includes: [
      'ISBN requirements guidance',
      'Application process support and document coordination',
      'Digital file and metadata preparation guidance',
      'Edition and format planning',
      'Distribution checklist and platform considerations',
    ],
    suitableFor: [
      'Authors publishing an ebook or print edition',
      'Self-publishing authors who need ISBN guidance',
      'Authors preparing metadata for distribution',
      'Publishers managing multiple editions',
    ],
    note: 'ISBN eligibility, assignment, and fees are controlled by the issuing agency. We explain the process and support your application; we cannot guarantee approval.',
    metaDescription:
      'ISBN procurement and digital publishing guidance for authors. Understand editions, metadata, and preparation for digital distribution.',
  },
  {
    slug: 'book-marketing-distribution',
    number: '05',
    title: 'Book Marketing & Distribution',
    navTitle: 'Marketing & Distribution',
    shortDescription:
      'Build a practical plan for launching your book, reaching readers, and making it available.',
    intro:
      'A finished book still needs a route to readers. Marketing and distribution support should begin with a realistic understanding of your audience, your capacity, and the channels available to you.',
    icon: 'marketing',
    image: '/images/services/book-marketing-distribution.svg',
    imageAlt:
      'Editorial artwork placeholder for book marketing, with concentric audience rings and a book at the centre.',
    description: [
      'We work with authors to clarify positioning, audience, and the central message of a book. From there, we can help shape launch activity, prepare promotional copy, and plan the content that supports a release.',
      'Distribution is a separate set of decisions. We explain available routes and the requirements each one imposes, then help you prepare the information and files they typically request.',
      'We do not guarantee sales, reviews, media coverage, or bestseller placement. Our work is to help you make deliberate choices and present your book professionally in the channels you choose.',
    ],
    includes: [
      'Audience and positioning discussion',
      'Launch planning support',
      'Promotional copy and content guidance',
      'Distribution route considerations',
      'Post-launch review and next-step planning',
    ],
    suitableFor: [
      'Authors preparing for a book launch',
      'Self-publishing authors planning distribution',
      'Authors who need help describing their book clearly',
      'Organisations releasing a book to a specific audience',
    ],
    note: 'Marketing activity is planned around your goals and budget. We do not promise specific sales, rankings, reviews, or media placements.',
    metaDescription:
      'Book marketing and distribution support for authors. Plan a considered launch, reach the right readers, and prepare for distribution.',
  },
  {
    slug: 'transcription',
    number: '06',
    title: 'Transcription Services',
    navTitle: 'Transcription',
    shortDescription:
      'Convert interviews, recordings, and spoken material into clear, usable written records.',
    intro:
      'Spoken material often holds the raw material of a book, an article, a case study, or an institutional record. Transcription turns it into text you can work with.',
    icon: 'transcription',
    image: '/images/services/transcription.svg',
    imageAlt:
      'Editorial artwork placeholder for transcription, with waveform lines transforming into typed text.',
    description: [
      'We transcribe audio and video into written text for authors, researchers, and organisations. The format can be clean verbatim, edited for readability, or prepared with time references where useful.',
      'Clear audio and a short brief improve the result. Before starting, we confirm the recording format, the number of speakers, the required level of detail, and how the transcript will be used.',
      'Transcripts are reviewed for spelling, consistency, and readability. Where a recording is unclear, we flag it rather than inventing words.',
    ],
    includes: [
      'Audio and video transcription',
      'Speaker identification where required',
      'Clean or edited-for-readability formats',
      'Consistency review and quality check',
      'Delivery in an agreed document format',
    ],
    suitableFor: [
      'Authors developing interview-based books',
      'Researchers and oral historians',
      'Organisations documenting meetings or stories',
      'Podcasters and content creators',
    ],
    note: 'Turnaround and pricing depend on recording length, audio quality, speaker count, and the level of detail required.',
    metaDescription:
      'Transcription services for authors, researchers, and organisations. Turn interviews and recordings into accurate, usable text.',
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
