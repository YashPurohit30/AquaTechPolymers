/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:     '#101418',
        'ink-2': '#191F26',
        'ink-3': '#232B34',
        red:     '#D51E28',
        'red-2': '#FF3742',
        'red-3': '#8E0810',
        bone:    '#F7F5F3',
        line:    '#E6E3DF',
        steel:   '#8B929B',
      },
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
