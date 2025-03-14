/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/game/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        tertiary: 'var(--tertiary)',
        'neural-blue': 'var(--neural-blue)',
        'neural-purple': 'var(--neural-purple)',
        'neural-pink': 'var(--neural-pink)',
        'neural-green': 'var(--neural-green)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(0.95)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(74, 158, 255, 0.5)' },
          '33%': { boxShadow: '0 0 10px rgba(156, 86, 255, 0.5)' },
          '66%': { boxShadow: '0 0 10px rgba(255, 86, 169, 0.5)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neural-grid': 'linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)',
      },
      backgroundSize: {
        'neural-grid': 'var(--grid-size) var(--grid-size)',
      },
    },
  },
  plugins: [],
};
