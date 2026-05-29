/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── BRP Premium Corporate Palette ───
        // Deep navy (primary) - Trust, heritage, corporate
        navy:         '#10264A',
        'navy-light': '#1A3B6B',
        
        // Royal indigo (accent) - Premium, distinctive
        indigo:       '#2F2B8F',
        'indigo-light': '#4A47B5',
        
        // Heritage gold (accent) - Prestige, luxury
        gold:         '#D8C64A',
        'gold-dark':  '#C9B633',
        
        // Backgrounds & Neutrals
        ivory:        '#F8F7F3', // Off-white background
        'ivory-dark': '#F1EFEA',
        white:        '#FFFFFF',
        
        // Text colors
        charcoal:     '#1E1E1E', // Dark text
        'text-muted': '#5C6479',
        'text-light': '#FFFFFF',
        'text-faint': '#8C95A6',
        
        // Soft grey
        grey:         '#E8E8E8',
        'grey-dark':  '#D5D5D5',
        
        // Legacy colors (for sectors/ventures)
        'education':    '#4A7FA5',  // Education blue
        'technology':   '#3D8B6E',  // Tech teal
        'finance':      '#8B6914',  // Finance gold-brown
        'realestate':   '#7A4F6D',  // Real estate purple
        'travel':       '#7A4F6D',  // Travel purple
        'healthcare':   '#C74E52',  // Healthcare red
        'community':    '#5A6E4F',  // Community green
      },

      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Poppins"', 'system-ui', 'sans-serif'],
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