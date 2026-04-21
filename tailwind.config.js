/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f1c1a',
          glow: '#1a2f2c',
        },
        secondary: {
          DEFAULT: '#e67e22',
          soft: '#fdf2e9',
        },
        accent: '#d4f216',
        linen: '#fcfbf7',
        textMain: '#1a1a1a',
        textBody: '#4a4a4a',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        prata: ['Prata', 'serif'],
      },
      boxShadow: {
        'sm': '0 4px 20px rgba(0, 0, 0, 0.03)',
        'md': '0 20px 60px rgba(0, 0, 0, 0.06)',
        'lg': '0 40px 100px rgba(15, 28, 26, 0.1)',
      },
    },
  },
  plugins: [],
}
