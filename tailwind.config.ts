import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx', './src/**/*.mdx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },

      colors: {},
    },
  },
  plugins: [],
}
export default config
