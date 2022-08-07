/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        googleRed: '#c00',
        facebookBlue: '#166fe5',
        githubBlack: '#24292f',
        redishPink: '#fe2c54',
        blueForget: '#0969da',
        navbarBg: '#242526',
        loginBg: '#f0f2f5',
        cardBackground: '#242526',
        navItemBackground: '#484a4d'
      },
      animation: {
        'spin-one': 'spin 3s linear '
      }
    },
  },
  plugins: [],
}
