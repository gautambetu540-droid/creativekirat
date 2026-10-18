import type { Experience } from '@/types';

/** Source of truth: supplied resume. Do not alter dates or add achievements. */
export const experience: Experience[] = [
  {
    role: 'SEO Intern',
    company: 'Web3Task',
    start: 'Oct 2025',
    end: 'Mar 2026',
    responsibilities: [
      'Backlink building',
      'Profile and directory submissions',
      'Content gap analysis',
      'Competitor research',
      'Article, blog and image submissions',
    ],
  },
  {
    role: 'SEO Intern',
    company: 'FD Business Service',
    start: 'Mar 2026',
    end: 'Jun 2026',
    responsibilities: [
      'Off-page SEO',
      'Keyword research',
      'Backlink building',
      'Content analysis',
      'Topical authority development',
    ],
  },
  {
    role: 'SEO Executive',
    company: '123webdesign',
    start: '15 June 2026',
    end: null,
    // Current employment is not verified — never label as "Present".
    dateLabel: 'From 15 June 2026 (resume date)',
    responsibilities: [
      'Daily SEO analysis',
      'Keyword discovery',
      'Backlink building',
      'Content writing and optimization',
      'SEO planning',
      'Coordinating and reviewing two team members or interns',
    ],
  },
];
