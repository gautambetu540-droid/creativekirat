import { activeSocials, siteConfig } from '@/config/site';

/** Single server-rendered JSON-LD graph: Person, ProfilePage, WebSite. */
export function JsonLd() {
  const url = siteConfig.url;
  const personId = `${url}/#person`;
  const websiteId = `${url}/#website`;

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: siteConfig.person,
        alternateName: siteConfig.name,
        jobTitle: siteConfig.jobTitle,
        url: `${url}/`,
        email: `mailto:${siteConfig.email}`,
        sameAs: activeSocials.map((s) => s.url),
        knowsAbout: [
          'Search Engine Optimization',
          'Keyword Research',
          'Technical SEO',
          'Content Optimization',
          'Backlink Building',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: siteConfig.name,
        url: `${url}/`,
        inLanguage: 'en',
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}/#profilepage`,
        url: `${url}/`,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: 'en',
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output with "<" escaped prevents breaking out of the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
