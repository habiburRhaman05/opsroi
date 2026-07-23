import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        opsroi: {
          navy: '#1D4E5F',
          deep: '#163C49',
          green: '#7DC243',
          greenDeep: '#5FA02E',
          gold: '#ECB84D',
          darkBg: '#12313C',
        },
      },
    },
  },
  plugins: [],
};

export default config;

