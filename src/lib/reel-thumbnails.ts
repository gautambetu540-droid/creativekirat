import fs from 'node:fs';
import path from 'node:path';
import type { Reel } from '@/types';

const EXTENSIONS = ['webp', 'jpg', 'jpeg', 'png'] as const;

/**
 * Server-only (runs at build time for the static page).
 * Attaches an owner-supplied thumbnail path if /public/reels/reel-{n}.{ext} exists.
 * Never fabricates a thumbnail — returns null when no file is present.
 */
export function withResolvedThumbnails(list: readonly Reel[]): Reel[] {
  const dir = path.join(process.cwd(), 'public', 'reels');
  return list.map((reel) => {
    if (reel.thumbnail) return reel;
    for (const ext of EXTENSIONS) {
      const file = `reel-${reel.order}.${ext}`;
      if (fs.existsSync(path.join(dir, file))) {
        return { ...reel, thumbnail: `/reels/${file}` };
      }
    }
    return reel;
  });
}
