import type { LucideIcon } from 'lucide-react';

export type ReelOrder = 1 | 2 | 3 | 4 | 5;

export type Reel = {
  /** Instagram shortcode, e.g. "DdF4cXLzIoK" */
  id: string;
  order: ReelOrder;
  /** Canonical reel URL */
  url: string;
  /** Neutral label: "Reel 1" */
  title: string;
  /** "/reels/reel-1.jpg" only if the file exists (resolved at build time) */
  thumbnail: string | null;
  thumbnailAlt: string;
};

export type Project = {
  name: string;
  category: string;
  /** Only verified description. Empty string => not shown. */
  description: string;
  /** null => hide external link */
  url: string | null;
  tags: string[];
  /** false => do not describe contribution */
  contributionVerified: boolean;
};

export type Experience = {
  role: string;
  company: string;
  start: string;
  /** null => "Date not specified" */
  end: string | null;
  /** Optional override for the date line (e.g. "Resume date: 15 June 2026") */
  dateLabel?: string;
  responsibilities: string[];
};

export type NavItem = {
  id: SectionId;
  label: string;
};

export type SectionId =
  | 'home'
  | 'about'
  | 'expertise'
  | 'experience'
  | 'projects'
  | 'reels'
  | 'contact';

export type SocialKey = 'instagram' | 'linkedin' | 'unstop';

export type Social = {
  key: SocialKey;
  label: string;
  handle: string;
  description: string;
  url: string | null;
  enabled: boolean;
};

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
