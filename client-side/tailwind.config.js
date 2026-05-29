/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── Core palette ───
        ivory:        '#F5F0E8',
        'ivory-dark': '#EDE8DF',
        charcoal:     '#2B2B2B',
        'charcoal-warm': '#3D3830',
        terra:        '#C14E2A',
        'terra-light':'#D4694A',
        'terra-dark': '#9E3D1F',

        // ─── Text ───
        'text-primary': '#1C1C1C',
        'text-muted':   '#6B6560',
        'text-light':   '#F5F0E8',
        'text-faint':   '#9A8878',

        // ─── Surfaces ───
        'surface-card':   '#FFFFFF',
        'surface-dark':   '#2B2B2B',
        'surface-warm':   '#3D3830',
        'border-warm':    '#E5DDD0',
        'border-dark':    'rgba(255,255,255,0.08)',

        // ─── Sector colors ───
        education:    '#C14E2A',
        technology:   '#2B6B52',
        finance:      '#8B6914',
        realestate:   '#5C4033',
        travel:       '#5C4033',
      },

      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display-xl': ['4.5rem',  { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['3.25rem', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.3',  letterSpacing: '-0.01em' }],
      },

      spacing: {
        'section':    '7rem',
        'section-sm': '4rem',
      },

      transitionDuration: { '400': '400ms' },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

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

      borderRadius: {
        'xl':  '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}