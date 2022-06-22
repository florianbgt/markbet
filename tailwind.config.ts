/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      dark: "#0b0c59",
      grey: "#808080",
      light: "#fafaff",
      primary: "#bb19fc",
      secondary: "#0ec3f9",
      tertiary: "#6512ac",
      quaternary: "#ec05fb",
      red: "#ff4136",
      yellow: "#ffc107",
      green: "#198754"
    },
    spacing: {
      '0': '0px',
      '1': '8px',
      '2': '16px',
      '3': '32px',
      '4': '64px',
      '5': '128px',
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "28px",
      title: "44px",
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
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
      tight: '16px',
      normal: '24px',
      spaced: '32px',
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
      lg: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
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
      none: 'opx',
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
