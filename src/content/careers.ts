export type Job = {
  id: string;
  title: string;
  type: 'Full-Time';
  location: string;
  workModel: 'Onsite';
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const careers = {
  vision:
    'To become a leading voice in Africa’s publishing landscape, capturing 15% market share by 2030.',
  mission: 'To empower African ideas, one book at a time.',
  introduction:
    'Be part of a dynamic team transforming African literature and ideas. We are building a publishing house in Keffi where careful craft, honest work, and ambitious thinking belong together.',
  values: [
    {
      title: 'Result Oriented',
      text: 'We define the outcome, take ownership, and follow the work through to completion.',
    },
    {
      title: 'Righteousness',
      text: 'We act with integrity and treat authors, colleagues, and partners fairly.',
    },
    {
      title: 'Continuous Learning',
      text: 'We stay curious and keep improving our craft, tools, and understanding of publishing.',
    },
    {
      title: 'Honesty',
      text: 'We communicate plainly, acknowledge what we do not know, and keep our commitments.',
    },
    {
      title: 'Hard & Smart Work',
      text: 'We bring both effort and judgement to the problems worth solving.',
    },
  ],
} as const;

export const jobs: Job[] = [
  {
    id: 'resident-digital-marketer',
    title: 'Resident Digital Marketer',
    type: 'Full-Time',
    location: 'Keffi, Nasarawa State',
    workModel: 'Onsite',
    summary:
      'Plan and run digital campaigns that help readers discover Thec titles, services, and editorial work.',
    responsibilities: [
      'Develop and execute social media and digital campaign plans.',
      'Create and coordinate content for the company’s digital channels.',
      'Track campaign performance and prepare clear monthly reports.',
      'Support book launch and service promotion with practical marketing assets.',
      'Coordinate with design, editorial, and sales colleagues on campaign messaging.',
      'Research audience trends and suggest improvements to digital activity.',
    ],
    requirements: [
      'Demonstrated experience in digital marketing or social media management.',
      'Comfortable with analytics tools, scheduling tools, and content planning.',
      'Strong written communication and attention to detail.',
      'Ability to work independently and manage several campaigns at once.',
      'A portfolio or examples of previous digital work are an advantage.',
      'Willingness to work onsite in Keffi.',
    ],
  },
  {
    id: 'resident-graphic-designer',
    title: 'Resident Graphic Designer',
    type: 'Full-Time',
    location: 'Keffi, Nasarawa State',
    workModel: 'Onsite',
    summary:
      'Create considered visual work for books, campaigns, and the growing Thec brand.',
    responsibilities: [
      'Design book covers, interior layouts, and print-ready production files.',
      'Create digital and print assets for campaigns and events.',
      'Maintain consistency with the company’s visual identity.',
      'Prepare files for printers and digital platforms to agreed specifications.',
      'Review proofs and make thoughtful corrections.',
      'Collaborate with editors, authors, and the marketing team.',
    ],
    requirements: [
      'Demonstrated experience in graphic design, preferably in publishing or a related field.',
      'Strong command of design software such as Adobe Creative Suite or equivalent tools.',
      'Understanding of typography, layout, and print production basics.',
      'A portfolio showing book, editorial, or brand design work.',
      'Ability to receive feedback and refine work carefully.',
      'Willingness to work onsite in Keffi.',
    ],
  },
  {
    id: 'resident-business-developer',
    title: 'Resident Business Developer',
    type: 'Full-Time',
    location: 'Keffi, Nasarawa State',
    workModel: 'Onsite',
    summary:
      'Build relationships and identify opportunities that connect more authors and institutions with Thec’s publishing services.',
    responsibilities: [
      'Research prospective authors, organisations, and publishing partners.',
      'Develop and manage a pipeline of service opportunities.',
      'Prepare proposals, follow up on enquiries, and support contract discussions.',
      'Represent Thec at relevant meetings, events, and industry conversations.',
      'Work with the team to improve service positioning and client experience.',
      'Maintain accurate records of conversations and opportunities.',
    ],
    requirements: [
      'Experience in business development, partnerships, or client relationship work.',
      'Clear written and verbal communication skills.',
      'Confidence initiating conversations and following through.',
      'Ability to understand a creative service and explain it clearly.',
      'Organised approach to pipeline and relationship management.',
      'Willingness to work onsite in Keffi.',
    ],
  },
  {
    id: 'resident-content-creator',
    title: 'Resident Content Creator',
    type: 'Full-Time',
    location: 'Keffi, Nasarawa State',
    workModel: 'Onsite',
    summary:
      'Create thoughtful content that expresses the company’s editorial perspective and supports its authors.',
    responsibilities: [
      'Write and produce content for the website, social channels, and campaigns.',
      'Develop short-form video, photography, and written content where appropriate.',
      'Interview authors and team members for stories and features.',
      'Maintain a content calendar and coordinate with marketing colleagues.',
      'Edit and proofread content before publication.',
      'Monitor engagement and suggest improvements to the content approach.',
    ],
    requirements: [
      'Demonstrated content creation experience across written or visual formats.',
      'Strong writing, editing, and storytelling ability.',
      'Comfort with basic photo, video, or design tools.',
      'Ability to research accurately and represent people fairly.',
      'A portfolio of relevant work.',
      'Willingness to work onsite in Keffi.',
    ],
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    type: 'Full-Time',
    location: 'Keffi, Nasarawa State',
    workModel: 'Onsite',
    summary:
      'Help readers, authors, and institutions find the right books and publishing services.',
    responsibilities: [
      'Engage prospective customers and explain books and services clearly.',
      'Manage sales enquiries from first contact through to a decision.',
      'Prepare quotations and follow up with clients professionally.',
      'Maintain records of sales activity and customer conversations.',
      'Support book launches, events, and institutional sales conversations.',
      'Share customer feedback with the wider team.',
    ],
    requirements: [
      'Experience in sales, customer service, or a related commercial role.',
      'Confident, respectful communication with a range of customers.',
      'Ability to listen carefully and match a service to a need.',
      'Organised record-keeping and reliable follow-up.',
      'Comfort with targets and a structured sales process.',
      'Willingness to work onsite in Keffi.',
    ],
  },
  {
    id: 'customer-support-representative',
    title: 'Customer Support Representative',
    type: 'Full-Time',
    location: 'Keffi, Nasarawa State',
    workModel: 'Onsite',
    summary:
      'Give authors and customers a clear, helpful, and human experience at every point of contact.',
    responsibilities: [
      'Respond to enquiries across email, phone, and WhatsApp.',
      'Guide authors through initial questions about services and process.',
      'Log enquiries accurately and route them to the right colleague.',
      'Follow up on open conversations and keep customers informed.',
      'Support order, event, and application enquiries.',
      'Identify recurring questions and help improve support resources.',
    ],
    requirements: [
      'Experience in customer support, administration, or client service.',
      'Excellent written and spoken communication.',
      'Patience, empathy, and a calm approach to difficult questions.',
      'Comfort using email, messaging, and basic office tools.',
      'Reliable organisation and attention to detail.',
      'Willingness to work onsite in Keffi.',
    ],
  },
];

export const experienceOptions = ['Less than 1 year', '1–2 years', '2–5 years', '5+ years'] as const;
export const startOptions = [
  'Immediately',
  '2 weeks notice',
  '1 month notice',
  'Other (specify in cover letter)',
] as const;
