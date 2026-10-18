import type { Reel } from '@/types';
import { assertReels } from '@/lib/reel-utils';

/**
 * Exact reels, in the supplied order.
 * `thumbnail` stays null here; it is resolved at build time from
 * /public/reels/reel-{order}.(webp|jpg|jpeg|png) if the owner adds the file.
 */
export const reels: Reel[] = [
  {
    id: 'DdF4cXLzIoK',
    order: 1,
    url: 'https://www.instagram.com/reel/DdF4cXLzIoK/',
    title: 'Reel 1',
    thumbnail: null,
    thumbnailAlt: 'Thumbnail of Instagram Reel 1 by Creative Kirat',
  },
  {
    id: 'DcAX_FMyXfZ',
    order: 2,
    url: 'https://www.instagram.com/reel/DcAX_FMyXfZ/',
    title: 'Reel 2',
    thumbnail: null,
    thumbnailAlt: 'Thumbnail of Instagram Reel 2 by Creative Kirat',
  },
  {
    id: 'DZWaKbRhTyu',
    order: 3,
    url: 'https://www.instagram.com/reel/DZWaKbRhTyu/',
    title: 'Reel 3',
    thumbnail: null,
    thumbnailAlt: 'Thumbnail of Instagram Reel 3 by Creative Kirat',
  },
  {
    id: 'DdnWjKYP4HM',
    order: 4,
    url: 'https://www.instagram.com/reel/DdnWjKYP4HM/',
    title: 'Reel 4',
    thumbnail: null,
    thumbnailAlt: 'Thumbnail of Instagram Reel 4 by Creative Kirat',
  },
  {
    id: 'Dc5AgJpStH9',
    order: 5,
    url: 'https://www.instagram.com/reel/Dc5AgJpStH9/',
    title: 'Reel 5',
    thumbnail: null,
    thumbnailAlt: 'Thumbnail of Instagram Reel 5 by Creative Kirat',
  },
];

// Build-time sanity check: throws during `next build` if data is invalid.
assertReels(reels);
