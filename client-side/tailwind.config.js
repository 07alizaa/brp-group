/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // ─── Colors ───
      // Every color has a name. Never use arbitrary hex in JSX.
      colors: {
        navy:            '#0F1923',
        slate:           '#1A2535',
        'slate-light':   '#243044',

        copper:          '#B87333',
        'copper-light':  '#D4956A',
        'copper-dark':   '#8A5520',

        cream:           '#F9F6F0',
        'cream-dark':    '#EDE8DF',

        // Sector colors — muted, intentional, not loud
        education:       '#4A7FA5',
        technology:      '#3D8B6E',
        finance:         '#8B6914',
        realestate:      '#7A4F6D',
        travel:          '#7A4F6D',

        // Semantic text tokens
        'text-primary':  '#F0EDE8',
        'text-muted':    '#9A9488',
        'text-dark':     '#1A1A2E',
      },

      // ─── Typography ───
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },

      // Named display sizes — used for headings only
      // Never use arbitrary font sizes in JSX
      fontSize: {
        'display-xl': ['4.5rem',  { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['3.25rem', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.3',  letterSpacing: '-0.01em' }],
      },

      // ─── Spacing ───
      spacing: {
        'section':    '7rem',
        'section-sm': '4rem',
      },

      // ─── Transitions ───
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      // ─── Animations ───
      animation: {
        'fade-up': 'fadeUp 0.65s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      // ─── Border radius ───
      borderRadius: {
        'xl':  '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}