/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070a12',
          900: '#0B0F19',
          850: '#0f1626',
          800: '#141E33',
          700: '#1e293b',
          600: '#334155',
        },
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        accent: {
          cyan: '#06b6d4',
          indigo: '#6366f1',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(14, 165, 233, 0.25)',
        'glow': '0 0 25px -5px rgba(14, 165, 233, 0.35)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

