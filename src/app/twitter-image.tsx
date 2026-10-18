import OpengraphImage from './opengraph-image';
import { siteConfig } from '@/config/site';

export const alt = `${siteConfig.name} — ${siteConfig.person}, ${siteConfig.identity}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return OpengraphImage();
}
