import type { SVGProps } from 'react';

export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'menu'
  | 'close'
  | 'check'
  | 'chevron-down'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'clock'
  | 'whatsapp'
  | 'quote'
  | 'users'
  | 'book'
  | 'pen'
  | 'message'
  | 'ghostwriting'
  | 'editing'
  | 'printing'
  | 'digital'
  | 'marketing'
  | 'transcription'
  | 'sparkle'
  | 'copy'
  | 'linkedin'
  | 'instagram'
  | 'facebook'
  | 'x';

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
    focusable: false,
    ...props,
  } as const;

  switch (name) {
    case 'arrow-right':
      return (
        <svg {...common}>
          <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'arrow-up-right':
      return (
        <svg {...common}>
          <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'chevron-down':
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...common}>
          <path d="M8.2 3.5H5.7c-1 0-1.9.8-1.7 1.9.6 5.8 4.8 12.8 12.4 14.9.9.3 1.9-.5 1.9-1.5v-2.6c0-.7-.5-1.3-1.2-1.5l-2.3-.6c-.6-.2-1.2 0-1.6.5l-.8 1c-3-1.4-5-3.4-6.1-6.1l1-.8c.5-.4.7-1 .5-1.6l-.6-2.3c-.2-.7-.8-1.2-1.5-1.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...common}>
          <path d="M20.3 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20.2l1.3-5a8.2 8.2 0 1 1 16-3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8.2 8.4c.3-.7.6-.8 1-.8h.5c.2 0 .4.2.5.5l.7 1.6c.1.3 0 .5-.2.7l-.6.6c.7 1.5 1.7 2.4 3.2 3.1l.6-.7c.2-.2.4-.3.7-.2l1.7.8c.2.1.4.3.4.5 0 .8-.4 1.8-1 2.2-.5.4-1.4.6-2.2.4-1.4-.4-3-1.2-4.4-2.6-1.2-1.2-2-2.6-2.3-3.7-.2-.8 0-1.8.4-2.4Z" fill="currentColor" />
        </svg>
      );
    case 'quote':
      return (
        <svg {...common}>
          <path d="M9.6 6.2C6.4 7.2 5 9.5 5 13.2v4.6h5.6v-5.4H8c0-2 .8-3.4 2.6-4.2l-1-2Zm9 0c-3.2 1-4.6 3.3-4.6 7v4.6h5.6v-5.4H17c0-2 .8-3.4 2.6-4.2l-1-2Z" fill="currentColor" />
        </svg>
      );
    case 'users':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3.5 19c.4-3.4 2.3-5.4 5.5-5.4s5.1 2 5.5 5.4M16 5.2a3 3 0 0 1 0 5.7M17.4 13.9c1.8.6 2.8 2.3 3.1 5.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'book':
      return (
        <svg {...common}>
          <path d="M4 5.2c2.8-.8 5.4-.3 8 1.4v13c-2.6-1.7-5.2-2.2-8-1.4v-13ZM20 5.2c-2.8-.8-5.4-.3-8 1.4v13c2.6-1.7 5.2-2.2 8-1.4v-13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case 'pen':
      return (
        <svg {...common}>
          <path d="m4 20 4.2-1 10.9-10.9a2.2 2.2 0 0 0 0-3.1l-.1-.1a2.2 2.2 0 0 0-3.1 0L5 15.8 4 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="m14 6.9 3.1 3.1M5 15.8l3.2 3.2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'message':
      return (
        <svg {...common}>
          <path d="M20.5 11.5a7.5 7.5 0 0 1-10.9 6.7L4 20l1.7-5.2a7.5 7.5 0 1 1 14.8-3.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8.5 10.5h7M8.5 13.5h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'ghostwriting':
      return (
        <svg {...common}>
          <path d="M6 3.5h9l4 4v13H6v-17Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M15 3.5v4h4M9 11h6M9 14h6M9 17h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'editing':
      return (
        <svg {...common}>
          <path d="M4 5h9M4 9h7M4 13h5M4 17h4M14.5 19l5.3-5.3a1.8 1.8 0 0 0-2.5-2.5l-5.3 5.3-.8 3.3 3.3-.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'printing':
      return (
        <svg {...common}>
          <path d="M7 9V3.5h10V9M7 18H4.5V9.5c0-.8.7-1.5 1.5-1.5h12c.8 0 1.5.7 1.5 1.5V18H17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <rect x="7" y="14" width="10" height="6.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17 12h.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'digital':
      return (
        <svg {...common}>
          <rect x="3.5" y="4" width="17" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3.5 8h17M7 6h.1M10 6h.1M7 12h5M7 15h7M16.5 12v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'marketing':
      return (
        <svg {...common}>
          <path d="M4 10v4.5h3l8 4V6L7 10H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M18 9c1.4.8 2.2 1.8 2.2 3s-.8 2.2-2.2 3M7 15v5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'transcription':
      return (
        <svg {...common}>
          <path d="M4 10v4M7 7v10M10 4v16M13 7v10M16 9v6M19 10v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'sparkle':
      return (
        <svg {...common}>
          <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case 'copy':
      return (
        <svg {...common}>
          <rect x="8" y="8" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 5.5V4.5A1.5 1.5 0 0 0 14.5 3h-10A1.5 1.5 0 0 0 3 4.5v10A1.5 1.5 0 0 0 4.5 16h1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M6.5 8.2V20M6.5 4.2v.1M10.5 20V8.2h3.2v1.6c.9-1.2 2-1.9 3.6-1.9 2.6 0 4.2 1.7 4.2 5V20h-3.4v-6.3c0-1.7-.6-2.7-2-2.7-1.5 0-2.3 1.1-2.3 2.8V20h-3.3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M14.2 21v-8h2.9l.5-3.3h-3.4V7.5c0-1 .3-1.7 1.7-1.7h1.8V2.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.4H8v3.3h2.7v8h3.5Z" fill="currentColor" />
        </svg>
      );
    case 'x':
      return (
        <svg {...common}>
          <path d="M4 3h4.6l4.6 6 5.2-6H21l-6.8 7.8L21.5 21h-4.6l-5-6.5-5.7 6.5H3.5l7.3-8.3L4 3Z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
