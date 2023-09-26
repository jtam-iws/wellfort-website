module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      borderWidth: {
        10: '10px'
      },
      colors: {
        gray: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e9e9e9',
          300: '#d9d9d9',
          400: '#aeaeae',
          500: '#828282',
          600: '#505050',
          700: '#2c2c2c',
          800: '#1c1c1c',
          900: '#101010'
        },
        blue: {
          50: '#cde1f0',
          100: '#9bc3e1',
          200: '#4f95cb',
          300: '#3686c3',
          400: '#1d77bc',
          500: '#0468b4',
          600: '#005ea5',
          700: '#03497e',
          800: '#023e6c',
          900: '#02345a',
          DEFAULT: '#0468b4'
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#f26327',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#fb923c'
        },
        yellow: {
          50: '#fff4cc',
          100: '#ffeeb3',
          200: '#ffe999',
          300: '#ffdd66',
          400: '#ffd233',
          500: '#ffc700',
          600: '#e6b300',
          700: '#b38b00',
          800: '#806400',
          900: '#4d3c00',
          DEFAULT: '#ffc700'
        }
      },
      height: {
        128: '36rem'
      },
      padding: {
        128: '36rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
