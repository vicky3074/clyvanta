import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clyvanta Brand Colors
        clyvanta: {
          'blue-light': '#00D4FF',
          'blue-dark': '#0066FF',
          'orange-light': '#FF6B35',
          'orange-dark': '#F7931E',
          'text-primary': '#2C3E50',
          'text-secondary': '#666666',
          'bg-light': '#F8F9FA',
        },
        // Semantic color mappings
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#00D4FF', // clyvanta-blue-light
          600: '#00aacc',
          700: '#008099',
          800: '#005566',
          900: '#002b33',
        },
        secondary: {
          50: '#fff2ed',
          100: '#ffe5db',
          200: '#ffcbb7',
          300: '#ffb193',
          400: '#ff976f',
          500: '#FF6B35', // clyvanta-orange-light
          600: '#e55a2a',
          700: '#cc491f',
          800: '#b23814',
          900: '#992709',
        },
        accent: {
          500: '#F7931E', // clyvanta-orange-dark
          600: '#de8319',
          700: '#c57314',
          800: '#ac630f',
          900: '#93530a',
        },
        text: {
          primary: '#2C3E50',
          secondary: '#666666',
          light: '#9CA3AF',
          white: '#FFFFFF',
        },
        background: {
          primary: '#FFFFFF',
          secondary: '#F8F9FA',
          dark: '#2C3E50',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        system: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        'hero': ['4rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '50': '12.5rem',
        '75': '18.75rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'clyvanta': '0.5rem',
        'clyvanta-lg': '1rem',
      },
      boxShadow: {
        'clyvanta': '0 4px 6px -1px rgba(0, 212, 255, 0.1), 0 2px 4px -1px rgba(0, 212, 255, 0.06)',
        'clyvanta-lg': '0 10px 15px -3px rgba(0, 212, 255, 0.1), 0 4px 6px -2px rgba(0, 212, 255, 0.05)',
        'orange': '0 4px 6px -1px rgba(255, 107, 53, 0.1), 0 2px 4px -1px rgba(255, 107, 53, 0.06)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.3' },
        },
      },
      backgroundImage: {
        'gradient-clyvanta': 'linear-gradient(135deg, #00D4FF 0%, #0066FF 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
        'gradient-hero': 'linear-gradient(135deg, #00D4FF 0%, #0066FF 50%, #FF6B35 100%)',
      },
    },
  },
  plugins: [],
};

export default config;