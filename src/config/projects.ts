import type { Project } from '@/types';

/** Project links point to official websites; logo paths use assets in /public. */
export const projects: Project[] = [
  {
    name: 'RozgarAI', category: 'Jobs & Careers', logo: '/project-logos/rozgarai.png',
    description: 'A job discovery and career community platform.',
    url: 'https://rozgarai.com', tags: ['Jobs', 'Career Community'], contributionVerified: false,
  },
  {
    name: 'VoiceToNotes.ai', category: 'AI & Productivity', logo: '/project-logos/voicetonotes.jpg',
    description: 'A platform that turns voice into organised notes and useful content.',
    url: 'https://voicetonotes.ai', tags: ['AI', 'Voice Notes'], contributionVerified: false,
  },
  {
    name: 'AskTravelo', category: 'Travel', logo: '/project-logos/asktravelo.webp',
    description: 'A travel booking platform for exploring flight and cruise options.',
    url: 'https://www.asktravelo.com', tags: ['Travel', 'Booking'], contributionVerified: false,
  },
  {
    name: 'TinyMinyMo', category: 'E-commerce', logo: '/project-logos/tinyminymo.avif',
    description: 'An online store for unique gifts, cute stationery and lifestyle products.',
    url: 'https://www.tinyminymo.com', tags: ['E-commerce', 'Gifting'], contributionVerified: false,
  },
  {
    name: 'Blue Ridge Cabinet Connection', category: 'Home & Interiors', logo: '/project-logos/blueridge.avif',
    description: 'A cabinet retailer serving homes and projects in Western North Carolina.',
    url: 'https://blueridgecabinetconnection.com', tags: ['Cabinets', 'Home'], contributionVerified: false,
  },
  {
    name: 'MEOWMATES', category: 'Digital Project', logo: '/project-logos/meowmates.png',
    description: 'A featured brand and digital project.',
    url: 'https://meowwmates.com/', tags: [], contributionVerified: false,
  },
];
