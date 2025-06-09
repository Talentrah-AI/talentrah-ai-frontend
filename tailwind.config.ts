import type { Config } from 'tailwindcss';

const config: Config = {
   darkMode: ['class', "[data-theme='dark']"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-gabarito)'],
      },
      colors: {
        border: 'rbg(var(--border))',
        input: 'rbg(var(--input))',
        ring: 'rbg(var(--ring))',
        background: 'rbg(var(--background))',
        foreground: 'rbg(var(--foreground))',
        primary: {
          DEFAULT: 'rbg(var(--primary))',
          foreground: 'rbg(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rbg(var(--secondary))',
          foreground: 'rbg(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'rbg(var(--destructive))',
          foreground: 'rbg(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'rbg(var(--muted))',
          foreground: 'rbg(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'rbg(var(--accent))',
          foreground: 'rbg(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'rbg(var(--popover))',
          foreground: 'rbg(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'rbg(var(--card))',
          foreground: 'rbg(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
