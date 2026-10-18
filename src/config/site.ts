import type { NavItem, Social } from '@/types';

/**
 * Placeholder used only when NEXT_PUBLIC_SITE_URL is not set.
 * Set NEXT_PUBLIC_SITE_URL in Vercel → Project → Settings → Environment Variables.
 */
export const PLACEHOLDER_SITE_URL = 'https://creative-kirat.example.com';

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return PLACEHOLDER_SITE_URL;
  return raw.replace(/\/+$/, '');
}

export const siteConfig = {
  name: 'Creative Kirat',
  logo: { first: 'Creative', second: 'Kirat' },
  person: 'Kirat Singh Dang',
  shortName: 'Kirat Singh',
  jobTitle: 'SEO Executive',
  identity: 'SEO Executive · Digital Content Creator',
  tagline: 'Creativity Meets Search Visibility.',
  url: resolveSiteUrl(),
  title: 'Creative Kirat — Kirat Singh Dang | SEO Executive & Content Creator',
  // 150–160 characters
  description:
    'Creative Kirat is the portfolio of Kirat Singh Dang, an SEO Executive and digital content creator working on keyword research, technical SEO and content.',
  locale: 'en_US',
  email: 'kiratsinghdang0809@gmail.com',
  footerTagline: 'SEO, content, and digital creativity.',
  keywords: [
    'Kirat Singh Dang',
    'Creative Kirat',
    'SEO Executive',
    'SEO portfolio',
    'keyword research',
    'technical SEO',
    'content optimization',
    'digital content creator',
  ],
} as const;

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'reels', label: 'Featured Reels' },
  { id: 'contact', label: 'Contact' },
];

export const navCta = { label: "Let's Connect", href: '#contact' } as const;

export const socials: Social[] = [
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@creative_kirat_96',
    description: 'Reels, creative experiments and content.',
    url: 'https://www.instagram.com/creative_kirat_96/',
    enabled: true,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    handle: 'Kirat Singh',
    description: 'Professional profile and SEO career updates.',
    url: 'https://www.linkedin.com/in/kirat-singh-b61777324/',
    enabled: true,
  },
  {
    // Hidden until a verified URL is supplied. Set `url` and `enabled: true`.
    key: 'unstop',
    label: 'Unstop',
    handle: 'Unstop profile',
    description: 'Competitions and opportunities profile.',
    url: null,
    enabled: false,
  },
];

/** Socials that are enabled and have a verified URL. */
export const activeSocials = socials.filter(
  (s): s is Social & { url: string } => s.enabled && typeof s.url === 'string' && s.url.length > 0,
);

export function getSocial(key: Social['key']) {
  return activeSocials.find((s) => s.key === key) ?? null;
}
