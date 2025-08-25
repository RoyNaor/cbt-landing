import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pistachio: '#A8D5BA',
        pistachioLight: '#DDEEDB',
        greenDark: '#2E6F4E',
        grayLight: '#F5F5F5',
        charcoal: '#333333'
      },
      container: { center: true, padding: '1rem' }
    },
  },
  plugins: [],
}
export default config