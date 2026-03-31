import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        soft: 'rgb(var(--color-soft) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accent2: 'rgb(var(--color-accent-2) / <alpha-value>)'
      },
      boxShadow: {
        panel: '0 18px 60px -28px rgba(15, 23, 42, 0.22)',
        glow: '0 0 0 1px rgba(78, 99, 124, 0.14), 0 18px 48px -30px rgba(78, 99, 124, 0.34)'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(110, 118, 129, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(110, 118, 129, 0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
