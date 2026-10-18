import type { Reel } from '@/types';

export const REEL_URL_PATTERN = /^https:\/\/www\.instagram\.com\/reel\/([A-Za-z0-9_-]+)\/$/;

/** Extract the shortcode from a canonical reel URL, or null if invalid. */
export function getReelShortcode(url: string): string | null {
  const match = REEL_URL_PATTERN.exec(url);
  return match ? match[1] : null;
}

/** Official Instagram embed URL for a shortcode. */
export function getReelEmbedUrl(shortcode: string): string {
  return `https://www.instagram.com/reel/${encodeURIComponent(shortcode)}/embed`;
}

/**
 * Sanity check run at module load (therefore at build time).
 * Ensures exactly 5 reels, valid URLs, matching ids and order 1–5.
 */
export function assertReels(list: readonly Reel[]): void {
  if (list.length !== 5) {
    throw new Error(`[reels] Expected exactly 5 reels, found ${list.length}.`);
  }
  list.forEach((reel, index) => {
    const expectedOrder = index + 1;
    if (reel.order !== expectedOrder) {
      throw new Error(`[reels] Reel at index ${index} must have order ${expectedOrder}, got ${reel.order}.`);
    }
    const code = getReelShortcode(reel.url);
    if (!code) {
      throw new Error(`[reels] Invalid reel URL: ${reel.url}`);
    }
    if (code !== reel.id) {
      throw new Error(`[reels] Reel id "${reel.id}" does not match URL shortcode "${code}".`);
    }
  });
}
