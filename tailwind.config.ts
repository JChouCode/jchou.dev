import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter Display', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'bg-gray': '#ECEFF3',
        'pane-gray': '#F6F8FA',
        'secondary': '#666D80',
        'dark-green': '#629B6A',
        'light-green': '#DEF8E1',
        'light-red': '#FFE5E9',
        'dark-red': '#C62828',
        'light-gray': '#EBEEF3',
        'light-pink': '#FCE4EC',
        'dark-pink': '#FF4081',
        'light-blue': '#D2ECFF',
        'dark-blue': '#1565C0',
        'light-purple': '#FCE4FF',
        'dark-purple': '#4527A0',
      },
      backgroundColor: {
        'gray': '#ECEFF3',
      },
      boxShadow: {
        'button': '0px 1px 1px 0px rgba(102, 109, 128, 0.08), 0px 4px 8px 0px rgba(102, 109, 128, 0.2), 0px 0px 0px 0px var(--token-17aea52f-75cc-4210-9cfa-54c6a6e98e8e, rgb(255, 255, 255)) /* {"name":"White"} */, 0px 0px 0px 0px rgba(53, 56, 73, 0.16)',
        'custom': '0 1.267198085784912px 1.267198085784912px #666d8014, 0 5.068792343139648px 10.137584686279297px #666d8014',
      }
    }
  },
  plugins: [],
}
export default config
