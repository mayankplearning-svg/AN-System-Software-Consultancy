import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F6B35F',
          blue: '#A9D8FF',
          white: '#FFFFFF'
        }
      }
    }
  },
  plugins: []
}

export default config

