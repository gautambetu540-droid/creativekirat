import type { Config } from 'tailwindcss';

/**
 * Design tokens (mirrored as CSS variables in src/app/globals.css)
 *  bg-main        #061426  -> navy-950
 *  bg-secondary   #081B33  -> navy-900
 *  card           #0B2340  -> navy-800
 *  border         #183654  -> navy-700
 *  blue           #3B82F6  -> electric
 *  cyan           #22D3EE  -> aqua
 *  text-primary   #F8FAFC  -> ink
 *  text-secondary #A9BCD2  -> mist
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  future: {
    // `hover:` utilities only apply on devices that actually support hover.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#061426',
          900: '#081B33',
          800: '#0B2340',
          700: '#183654',
        },
        electric: '#3B82F6',
        aqua: '#22D3EE',
        ink: '#F8FAFC',
        mist: '#A9BCD2',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        nav: '72px',
      },
    },
  },
  plugins: [],
};

export default config;
