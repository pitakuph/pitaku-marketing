import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'

/**
 * ACETERNITY
 */
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')
/** */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    // "./src/**/*.{ts,tsx,js,jsx}", // adjust if needed
    // "./src/**/*.{js,ts,jsx,tsx,html}", // make sure this includes your CSS usage
    // './src/styles/**/*.{css}', // include your CSS files with @apply
    './src/**/*.{js,ts,jsx,tsx,html,css}',
    './src/styles/**/*.css',
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-lexend)',
        display: 'var(--font-sora)',
        opensans: 'var(--font-opensans)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      // backgroundImage: {
      // 	'dot-pattern': 'url('../images/dot.png')',
      // 	'dot-white-pattern': 'url('../images/dot-white.png')'
      // },
      animation: {
        aurora: 'aurora 60s linear infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
        spotlight: {
          '0%': {
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      colors: {
        shamrock: '#068E10',
        'dark-green': '#1c2a10',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [
    formsPlugin,
    headlessuiPlugin,
    // aceternity
    addVariablesForColors,
    //
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}
