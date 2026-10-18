import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const alt = `${siteConfig.name} — ${siteConfig.person}, ${siteConfig.identity}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Generated once at build time. Simple branded card — no claims or metrics.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#061426',
          backgroundImage: 'radial-gradient(circle at 20% 0%, #13345E 0%, #081B33 45%, #061426 100%)',
          color: '#F8FAFC',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
          <span style={{ color: '#F8FAFC' }}>{siteConfig.logo.first}</span>
          <span style={{ color: '#3B82F6' }}>{siteConfig.logo.second}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: '#22D3EE', textTransform: 'uppercase' }}>
            {siteConfig.identity}
          </div>
          <div style={{ marginTop: 20, fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {siteConfig.tagline}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#A9BCD2' }}>{siteConfig.person}</div>
      </div>
    ),
    size,
  );
}
