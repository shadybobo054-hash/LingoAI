import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        surface: 'var(--surf)',
        surface2: 'var(--surf2)',
        ink: 'var(--ink)',
        ink2: 'var(--ink2)',
        ink3: 'var(--ink3)',
        line: 'var(--line)',
        line2: 'var(--line2)',
        brand: 'var(--brand)',
        'brand-ink': 'var(--brand-ink)',
        'brand-soft': 'var(--brand-soft)',
        blue: 'var(--blue)',
        mint: 'var(--mint)',
        btn: 'var(--btn)',
        'btn-ink': 'var(--btn-ink)',
        'ai-card': 'var(--ai-card)',
        'ai-card-ink': 'var(--ai-card-ink)',
        'ai-on': 'var(--ai-on)',
        les: 'var(--les)',
        voc: 'var(--voc)',
        lis: 'var(--lis)',
        cou: 'var(--cou)',
        pra: 'var(--pra)',
        ai: 'var(--ai)',
        'les-t': 'var(--les-t)',
        'voc-t': 'var(--voc-t)',
        'lis-t': 'var(--lis-t)',
        'cou-t': 'var(--cou-t)',
        'pra-t': 'var(--pra-t)',
        'ai-t': 'var(--ai-t)',
        ok: 'var(--ok)',
        'ok-t': 'var(--ok-t)',
        no: 'var(--no)',
        'no-t': 'var(--no-t)'
      },
      boxShadow: {
        soft: 'var(--sh)',
        'soft-strong': 'var(--sh2)'
      },
      borderRadius: {
        app: 'var(--r)'
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        arabic: ['"IBM Plex Sans Arabic"', '"IBM Plex Sans"', 'sans-serif']
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.6' }],
        base: ['16px', { lineHeight: '1.5' }],
        lg: ['18px', { lineHeight: '1.7' }],
        xl: ['20px', { lineHeight: '1.5' }],
        '2xl': ['24px', { lineHeight: '1.3' }],
        '3xl': ['30px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.1' }]
      }
    }
  },
  plugins: []
}

export default config
