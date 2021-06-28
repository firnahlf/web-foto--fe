module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      270: '270deg',
    },
    extend: {
      colors: {
        primary: {
          light: '#4963ad',
          DEFAULT: '#4963ad',
          dark: '#3d5498',
        },
        secondary: {
          light: '#bdb151',
          DEFAULT: '#bdb151',
          dark: '#bdb151',
        },
        black: {
          light: '#252627',
          DEFAULT: '#0a0c0c',
        },
        white: {
          solid: '#ffffff',
          DEFAULT: '#f7f7f7',
          dark: '#a2a2a2',
        },
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus', 'active'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
