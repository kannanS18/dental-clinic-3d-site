/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dental: {
          bg: '#FAF9F6',
          surface: '#FFFFFF',
          'surface-hover': '#F3F0FF',
          primary: '#7C3AED',
          'primary-hover': '#6D28D9',
          secondary: '#06B6D4',
          accent: '#8B5CF6',
          text: '#1E1B4B',
          muted: '#6B7280',
          border: 'rgba(124, 58, 237, 0.18)',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      }
    }
  },
  plugins: [],
};