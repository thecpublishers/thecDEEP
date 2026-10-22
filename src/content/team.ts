export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  summary: string;
  initials: string;
  imagePlaceholder: boolean;
};

export const team: TeamMember[] = [
  {
    id: 'paul-elijah',
    name: 'Paul Elijah',
    role: 'Founder & Chief Executive Officer',
    image: '/images/team/paul-elijah.svg',
    imageAlt:
      'Portrait placeholder for Paul Elijah, Founder and CEO. A real photograph has not yet been supplied.',
    summary:
      'Leads the company’s publishing vision, author relationships, and long-term direction.',
    initials: 'PE',
    imagePlaceholder: true,
  },
  {
    id: 'joshua-caleb-mechi',
    name: 'Joshua Caleb Mechi',
    role: 'Human Resources',
    image: '/images/team/joshua-caleb-mechi.svg',
    imageAlt:
      'Portrait placeholder for Joshua Caleb Mechi, Human Resources. A real photograph has not yet been supplied.',
    summary:
      'Supports recruitment, people operations, and the working culture of the publishing team.',
    initials: 'JM',
    imagePlaceholder: true,
  },
  {
    id: 'aardhan-abdull',
    name: 'Aardhan Abdull',
    role: 'Project Manager',
    image: '/images/team/aardhan-abdull.svg',
    imageAlt:
      'Portrait placeholder for Aardhan Abdull, Project Manager. A real photograph has not yet been supplied.',
    summary:
      'Coordinates publishing projects, production schedules, and communication across each stage.',
    initials: 'AA',
    imagePlaceholder: true,
  },
];

export const companyValues = [
  {
    title: 'Righteousness',
    text: 'We aim to act with integrity, fairness, and respect in every author relationship.',
  },
  {
    title: 'Smart Work',
    text: 'We look for thoughtful, efficient ways to move a manuscript forward without cutting corners.',
  },
  {
    title: 'Hard Work',
    text: 'Publishing rewards persistence. We bring discipline and care to the unglamorous parts of the work.',
  },
  {
    title: 'Excellence',
    text: 'We hold the finished book to a professional standard and pay attention to the details readers notice.',
  },
  {
    title: 'Continuous Learning',
    text: 'We keep learning about craft, technology, and the changing publishing landscape.',
  },
  {
    title: 'Results Orientation',
    text: 'We define what a successful project looks like with each author and work deliberately toward it.',
  },
] as const;

export const mission = {
  statement:
    'To develop, produce, and promote African ideas through books that are crafted with care and shared with confidence.',
  supporting:
    'Thec Writers & Publishers exists to help authors move from an idea or manuscript to a finished, professionally presented book — with clear guidance, editorial attention, and respect for the author’s voice.',
  vision:
    'To be a trusted publishing partner for African writers, thinkers, and institutions — recognised for the quality of its books and the care of its author experience.',
  ethos:
    'We believe African stories and ideas deserve thoughtful publishing. Our work is built around the author’s purpose, not a template.',
} as const;
