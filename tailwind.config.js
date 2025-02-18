/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      darkGray: '#2E2E2E',
      green: '#5DC266',
      lightGreen: '#EEF3E7',
      background: '#F0F2EC',
    },
    screens: {
      sm: '375px', // Mobile (Figma)
      md: '768px', // Tablet breakpoint
      lg: '1024px', // Larger tablet screens
      xl: '1280px', // Small desktops
      '2xl': '1440px', // Full desktop (Figma)
    },
  },
  plugins: [],
};
