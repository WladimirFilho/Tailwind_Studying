/* eslint-disable prettier/prettier */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx', './src/**/*.mdx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },

      colors: {
        violet: {
          25: '#fcfaff'
        }
      },

      borderWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
}
export default config
