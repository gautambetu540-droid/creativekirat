import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Shared easing curve from the motion spec. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Secure attributes for every external link. */
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
