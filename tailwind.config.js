/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#0072f5', // Primary brand color
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
        },
        secondary: {
          50: '#e6f8fa',
          100: '#ccf1f5',
          200: '#99e3eb',
          300: '#66d5e0',
          400: '#33c7d6',
          500: '#00b9cc',
          600: '#0094a3',
          700: '#006f7a',
          800: '#004a52',
          900: '#002529',
        },
        accent: {
          50: '#fff2e6',
          100: '#ffe5cc',
          200: '#ffca99',
          300: '#ffb066',
          400: '#ff9533',
          500: '#ff7a00', // Accent color
          600: '#cc6200',
          700: '#994900',
          800: '#663100',
          900: '#331800',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.08)',
        dropdown: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};