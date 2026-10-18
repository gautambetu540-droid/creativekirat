import type { Project } from '@/types';

/**
 * No project URLs or verified descriptions were supplied.
 * - `url: null` hides the "Visit Project" link.
 * - `description: ''` shows name + category only.
 * - `contributionVerified: false` means no contribution is described.
 * Update these entries only with information the owner has verified.
 */
export const projects: Project[] = [
  { name: 'RozgarAI', category: 'Project', description: '', url: null, tags: [], contributionVerified: false },
  { name: 'Voicetonotes.ai', category: 'Project', description: '', url: null, tags: [], contributionVerified: false },
  { name: 'AskTravelo', category: 'Project', description: '', url: null, tags: [], contributionVerified: false },
  { name: 'TinyMinyMo', category: 'Project', description: '', url: null, tags: [], contributionVerified: false },
  {
    name: 'BlueRidgeCabinetConnection',
    category: 'Project',
    description: '',
    url: null,
    tags: [],
    contributionVerified: false,
  },
  { name: 'MEOWMATES', category: 'Project', description: '', url: null, tags: [], contributionVerified: false },
];
