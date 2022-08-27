/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      black: "#000000",
      "black-500": "#333333",
      dark: "#0B0C40",
      dark500: "#0B0C59",
      grey: "#808080",
      light: "#FFFFFF",
      primary: "#bb19fc",
      secondary: "#0ec3f9",
      tertiary: "#6512ac",
      quaternary: "#ec05fb",
      red: "#ff4136",
      yellow: "#ffc107",
      green: "#198754"
    },
    spacing: {
      '0': '0rem',
      '1': '0.5rem',
      '2': '1rem',
      '3': '2rem',
      '4': '4rem',
      '5': '8rem',
    },
    fontSize: {
      xs: "0.75",
      sm: "0.9rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.75rem",
      title: "2.5rem",
    },
    fontFamily: {
      roboto: ['Roboto'],
      lato: ['Lato'],
      staatliches: ['Staatliches'],
      sans: ['sans'],
    },
    fontWeight: {
      thin: "200",
      normal: "400",
      bold: "800"
    },
    letterSpacing: {
      normal: "0px"
    },
    lineHeight: {
      tight: '1rem',
      normal: '2rem',
      spaced: '4rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    boxShadow: {
      none: 'none',
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      lg: '0 25px 50px -12px rgb(0 0 0 / 0.5)',
    },
    opacity: {
      transparent: '0',
      thin: '0.1',
      light: '0.25',
      half: '0.5',
      strong: '0.75',
      full: '1',
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '8px',
      lg: '16px',
      full: '9999px',
    },
    borderWidth: {
      none: '0px',
      sm: '2px',
      md: '4px',
      lg: '8px',
    },
    
  },
  plugins: [],
}
