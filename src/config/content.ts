import {
  BarChart3,
  Bug,
  ClipboardCheck,
  Code2,
  FileSearch,
  FileText,
  Gauge,
  KeyRound,
  Layers,
  Link2,
  Network,
  RefreshCcw,
  Search,
  Swords,
  Wrench,
} from 'lucide-react';
import type { IconCard, ProcessStep } from '@/types';

export const heroContent = {
  label: 'SEO EXECUTIVE · DIGITAL CONTENT CREATOR',
  headline: 'Turning Search Visibility Into Organic Growth.',
  supporting:
    "I help websites grow through smarter SEO, useful content, and data-led digital strategy.",
  primaryCta: { label: 'Explore My Work', href: '#projects' },
  secondaryCta: { label: "Let's Connect", href: '#contact' },
  scrollLabel: 'Scroll to About section',
  decor: {
    searchQuery: 'creative seo portfolio',
    keywordChips: ['keyword research', 'on-page', 'backlinks'],
  },
} as const;

export const aboutContent = {
  eyebrow: 'About',
  heading: 'Curiosity Drives My Creativity. Strategy Drives My SEO.',
  paragraphs: [
    "I'm Kirat Singh Dang, an SEO professional focused on search engine optimization, content strategy, and digital growth.",
    'My work includes keyword research, on-page and off-page SEO, technical optimization, backlink building, competitor analysis, and content improvement.',
    'I enjoy combining analytical thinking with creative problem-solving to identify opportunities, improve website discoverability, and develop structured SEO workflows.',
  ],
  focus: [
    {
      title: 'Search Visibility',
      description: 'Helping pages become easier for search engines and people to find.',
      icon: Search,
    },
    {
      title: 'Technical Optimization',
      description: 'Looking at crawlability, structure and page speed as part of SEO work.',
      icon: Wrench,
    },
    {
      title: 'Content Strategy',
      description: 'Aligning content with search intent and relevant keywords.',
      icon: FileText,
    },
    {
      title: 'Continuous Improvement',
      description: 'Reviewing, learning and refining the approach over time.',
      icon: RefreshCcw,
    },
  ] satisfies IconCard[],
};

export const expertiseContent = {
  eyebrow: 'Expertise',
  heading: 'SEO Expertise With a Creative Perspective.',
  intro: 'Areas and tools I work with across research, optimization and analysis.',
  items: [
    { title: 'On-Page SEO', description: 'Titles, headings, meta data and on-page content structure.', icon: Code2 },
    { title: 'Off-Page SEO', description: 'Building presence and relevance beyond the website itself.', icon: Network },
    { title: 'Technical SEO', description: 'Crawlability, indexing signals and site structure.', icon: Wrench },
    { title: 'SEO Audits', description: 'Reviewing a site to find issues and opportunities.', icon: ClipboardCheck },
    { title: 'Keyword Research', description: 'Finding terms that match what audiences search for.', icon: KeyRound },
    { title: 'Backlink Building', description: 'Earning relevant links through submissions and outreach.', icon: Link2 },
    { title: 'Competitor Analysis', description: 'Studying competing sites to spot content and link gaps.', icon: Swords },
    { title: 'Content Optimization', description: 'Improving content for clarity, intent and relevance.', icon: Layers },
    { title: 'Google Analytics', description: 'Reading traffic and behaviour data to guide decisions.', icon: BarChart3 },
    { title: 'Google Search Console', description: 'Monitoring indexing, queries and search appearance.', icon: FileSearch },
    { title: 'Screaming Frog', description: 'Crawling websites to surface technical SEO issues.', icon: Bug },
    { title: 'PageSpeed Optimization', description: 'Checking load performance and Core Web Vitals.', icon: Gauge },
  ] satisfies IconCard[],
};

export const experienceContent = {
  eyebrow: 'Experience',
  heading: 'Professional Experience',
  intro: 'Roles and responsibilities as listed on my resume.',
  dateNotSpecified: 'Date not specified',
};

export const projectsContent = {
  eyebrow: 'Projects',
  heading: 'Featured Projects',
  intro: 'A selection of projects I have been associated with.',
  visitLabel: 'Visit Project',
};

export const reelsContent = {
  eyebrow: 'Content',
  heading: 'Featured Reels',
  subtitle: 'A glimpse into the creative side of Kirat Singh.',
  badge: 'Reel',
  fallbackText: 'Watch on Instagram',
  viewAll: { label: 'View All Videos on Instagram', href: 'https://www.instagram.com/creative_kirat_96/' },
  modal: {
    originalLink: 'Watch original Instagram Reel',
    close: 'Close',
    loading: 'Loading Instagram preview…',
    failed: "This Reel can't be previewed here. Watch it on Instagram.",
  },
  /** ms before showing the fallback if the embed hasn't loaded */
  embedTimeoutMs: 7000,
};

export const socialContent = {
  eyebrow: 'Social',
  heading: 'Find Me Online',
  intro: 'Follow along for SEO notes and creative content.',
};

export const processContent = {
  eyebrow: 'Process',
  heading: 'From Research to Meaningful Improvements.',
  intro: 'A general workflow I follow — adapted to each website and its needs.',
  steps: [
    {
      number: '01',
      title: 'Research & Audit',
      description: 'Understand the website, target audience, keywords, and competitive landscape.',
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Prioritize opportunities and create a structured SEO action plan.',
    },
    {
      number: '03',
      title: 'Optimization & Execution',
      description: 'Work on content improvements, technical SEO, and relevant off-page activities.',
    },
    {
      number: '04',
      title: 'Review & Improve',
      description: 'Use available data and SEO tools to evaluate progress and identify new opportunities.',
    },
  ] satisfies ProcessStep[],
};

export const contactContent = {
  eyebrow: 'Contact',
  heading: "Let's Create Something Discoverable.",
  text: 'Have an SEO opportunity, a content idea, or a digital project in mind? Let\'s connect.',
  linkedinLabel: 'Connect on LinkedIn',
  instagramLabel: 'Follow on Instagram',
};

export const notFoundContent = {
  heading: 'Page not found',
  text: "The page you're looking for doesn't exist or has moved.",
  cta: 'Back to home',
};
