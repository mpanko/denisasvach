import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: {
              color: 'var(--foreground)',
              '&:hover': {
                color: 'var(--background)',
                backgroundColor: 'var(--foreground)',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--foreground)',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            },
          },
        },
        invert: {
          css: {
            color: 'var(--background)',
            a: {
              color: 'var(--background)',
              '&:hover': {
                color: 'var(--foreground)',
                backgroundColor: 'var(--background)',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--background)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;