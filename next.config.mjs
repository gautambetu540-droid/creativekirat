/** @type {import('next').NextConfig} */

// Security headers. CSP is intentionally narrow: it only restricts what we
// know we need to restrict (frames, plugins, base URI) so that Next.js inline
// hydration scripts, next/font and next/image keep working without nonces.
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "frame-src https://www.instagram.com",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "base-uri 'self'",
    ].join('; '),
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};

export default nextConfig;
