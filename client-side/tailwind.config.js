/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        navy:    '#0F1923',
        slate:   '#1A2535',
        'slate-light': '#243044',
        copper:  '#B87333',
        'copper-light': '#D4956A',
        'copper-dark':  '#8A5520',
        cream:   '#F9F6F0',
        'cream-dark': '#EDE8DF',

        // Sector colors (muted, intentional)
        education:  '#4A7FA5',
        technology: '#3D8B6E',
        finance:    '#8B6914',
        realestate: '#7A4F6D',
        travel:     '#7A4F6D', 

        // Text
        'text-primary':  '#F0EDE8',
        'text-muted':    '#9A9488',
        'text-dark':     '#1A1A2E',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem',  { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem',  { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem',  { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem',{ lineHeight: '1.3',  letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': '7rem',
        'section-sm': '4rem',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'draw-line':  'drawLine 1s ease forwards',
        'count-up':   'countUp 0.3s ease forwards',
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
        drawLine: {
          '0%':   { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}