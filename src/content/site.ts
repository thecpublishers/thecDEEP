export const site = {
  name: 'Thec Writers & Publishers',
  shortName: 'THEC Publishers',
  legalName: 'Thec Writers & Publishers',
  founded: 2024,
  founder: 'Paul Elijah',
  location: 'Keffi, Nasarawa State, Nigeria',
  slogans: {
    primary: 'Empowering African ideas.',
    secondary: 'We bring your words to life.',
  },
  contact: {
    email: 'talk2thecservices@gmail.com',
    phone: '+234 706 856 6254',
    phoneHref: '+2347068566254',
    whatsapp: 'http://wa.link/2u3nsm',
    recruitmentEmail: 'thecjoborder@gmail.com',
    recruitmentPhone: '07065773625',
    recruitmentPhoneHref: '+2347065773625',
    hours: 'Monday–Saturday, 9:00 AM–5:00 PM',
    corporateHq:
      'Suite 31–34, Hassan Sadiq Plaza, Beside Atlantic Guest Inn, Total Roundabout, Keffi.',
    fulfilmentOffice:
      'Etari LLC Building, Beside Youth Center Hall, Inside Youth Center, Keffi.',
  },
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    x: null,
  },
} as const;

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Published Books', to: '/books' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
] as const;

export const contactOptions = [
  {
    label: 'Email',
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icon: 'mail' as const,
  },
  {
    label: 'Phone',
    value: site.contact.phone,
    href: `tel:${site.contact.phoneHref}`,
    icon: 'phone' as const,
  },
  {
    label: 'WhatsApp',
    value: 'Chat with our team',
    href: site.contact.whatsapp,
    icon: 'whatsapp' as const,
  },
] as const;

export const trustStatements = [
  {
    title: 'Author-first guidance',
    text: 'A considered, personal route through every publishing decision.',
    icon: 'users' as const,
  },
  {
    title: 'End-to-end publishing',
    text: 'From manuscript development to production and promotion.',
    icon: 'book' as const,
  },
  {
    title: 'Editorial care',
    text: 'Thoughtful editing and design shaped around each manuscript.',
    icon: 'pen' as const,
  },
  {
    title: 'Clear communication',
    text: 'Straight answers and a defined process at every stage.',
    icon: 'message' as const,
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    text: 'We listen to your idea, understand your goals, and map the right publishing route for your manuscript.',
  },
  {
    number: '02',
    title: 'Manuscript Development',
    text: 'Writing, editing, proofreading, and structural refinement prepare your work for the next stage.',
  },
  {
    number: '03',
    title: 'Production',
    text: 'Cover design, interior layout, print preparation, and publishing requirements are handled with care.',
  },
  {
    number: '04',
    title: 'Publication & Promotion',
    text: 'Your book is prepared for release, with practical support for reaching readers and sharing your work.',
  },
] as const;

export const publishingRoutes = [
  {
    title: 'I have a finished manuscript',
    text: 'Start with an editorial and production consultation. We will review the route from editing to publication.',
    cta: 'Discuss your manuscript',
    to: '/contact?enquiry=finished-manuscript',
  },
  {
    title: 'I have an idea but have not started',
    text: 'A ghostwriting or manuscript-development conversation can turn the idea into a clear writing plan.',
    cta: 'Explore ghostwriting',
    to: '/services/ghostwriting',
  },
  {
    title: 'I want to publish independently',
    text: 'Get guidance on ISBNs, digital publishing, print preparation, and distribution as a self-publishing author.',
    cta: 'Explore publishing support',
    to: '/services/digital-publishing-isbn',
  },
] as const;
