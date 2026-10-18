import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#061426',
          fontSize: 88,
          fontWeight: 700,
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ color: '#F8FAFC' }}>C</span>
        <span style={{ color: '#3B82F6' }}>K</span>
      </div>
    ),
    size,
  );
}
