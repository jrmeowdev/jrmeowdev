/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 60% - Dominant neutral backgrounds (clean, minimal)
        'dominant-light': '#fefefe',
        'dominant-dark': '#0f0f0f',
        'dominant-light-alt': '#fafafa',
        'dominant-dark-alt': '#1a1a1a',
        
        // 30% - Secondary grays (structure, subtle contrast)
        'secondary-50': '#f8fafc',
        'secondary-100': '#f1f5f9',
        'secondary-200': '#e2e8f0',
        'secondary-300': '#cbd5e1',
        'secondary-400': '#94a3b8',
        'secondary-500': '#64748b',
        'secondary-600': '#475569',
        'secondary-700': '#334155',
        'secondary-800': '#1e293b',
        'secondary-900': '#0f172a',
        
        // 10% - Elegant accent (sophisticated highlight)
        'accent-primary': '#2563eb',
        'accent-primary-dark': '#3b82f6',
        'accent-secondary': '#1e40af',
        'accent-light': '#dbeafe',
        'accent-dark': '#1e3a8a',
        
        // Text colors (refined hierarchy)
        'text-primary': '#0f172a',
        'text-primary-dark': '#f8fafc',
        'text-secondary': '#475569',
        'text-secondary-dark': '#cbd5e1',
        'text-muted': '#64748b',
        'text-muted-dark': '#94a3b8',
        
        // Legacy support (keeping some for compatibility)
        'background-light': '#fefefe',
        'background-dark': '#0f0f0f',
        'primary-100': '#f1f5f9',
        'primary-200': '#e2e8f0',
        'primary-300': '#cbd5e1',
        'primary-700': '#334155',
        'primary-800': '#1e293b',
        'accent-light': '#2563eb',
        'accent-dark': '#3b82f6',
        'text-light': '#0f172a',
        'text-dark': '#f8fafc',
        'text-light-secondary': '#475569',
        'text-dark-secondary': '#cbd5e1',
      },
      boxShadow: {
        'minimal': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'minimal-lg': "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        'spin-slow': 'spin-slow 8s linear infinite',
        'spin-reverse': 'spin-reverse 6s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 10s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float-delayed 3s ease-in-out infinite 0.5s',
        'float-slow': 'float-slow 4s ease-in-out infinite',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' }
        },
        'spin-slow-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' }
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      transform: {
        'translateZ-24': 'translateZ(6rem)',
        'rotateY-180': 'rotateY(180deg)',
        'rotateY-90': 'rotateY(90deg)',
        'rotateY-neg-90': 'rotateY(-90deg)',
        'rotateX-90': 'rotateX(90deg)',
        'rotateX-neg-90': 'rotateX(-90deg)',
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}

