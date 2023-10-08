import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx', './src/**/*.mdx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
      },

      colors: {},
    },
  },
  plugins: [],
}
export default config
