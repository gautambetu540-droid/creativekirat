import type { Project } from '@/types';

/** Project links point to official websites; logo paths use assets in /public. */
export const projects: Project[] = [
  {
    name: 'RozgarAI', category: 'Jobs & Careers', logo: '/rozgarai.png',
    description: 'A job discovery and career community platform.',
    url: 'https://rozgarai.com', tags: ['Jobs', 'Career Community'], contributionVerified: false,
  },
  {
    name: 'VoiceToNotes.ai', category: 'AI & Productivity', logo: '/Voicetonotes.ai',
    description: 'A platform that turns voice into organised notes and useful content.',
    url: 'https://voicetonotes.ai', tags: ['AI', 'Voice Notes'], contributionVerified: false,
  },
  {
    name: 'AskTravelo', category: 'Travel', logo: '/asktravelocom-logo-V3Ugv.webp',
    description: 'A travel booking platform for exploring flight and cruise options.',
    url: 'https://www.asktravelo.com', tags: ['Travel', 'Booking'], contributionVerified: false,
  },
  {
    name: 'TinyMinyMo', category: 'E-commerce', logo: '/tmm-logo1.avif',
    description: 'An online store for unique gifts, cute stationery and lifestyle products.',
    url: 'https://www.tinyminymo.com', tags: ['E-commerce', 'Gifting'], contributionVerified: false,
  },
  {
    name: 'Blue Ridge Cabinet Connection', category: 'Home & Interiors', logo: '/blue_ridge.avif',
    description: 'A cabinet retailer serving homes and projects in Western North Carolina.',
    url: 'https://blueridgecabinetconnection.com', tags: ['Cabinets', 'Home'], contributionVerified: false,
  },
  {
    name: 'MEOWMATES', category: 'Digital Project', logo: '/MEOWMATES.png',
    description: 'A featured brand and digital project.',
    url: null, tags: [], contributionVerified: false,
  },
];
