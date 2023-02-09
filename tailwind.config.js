/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#FFFFFF",
          // secondary: "#0B1F32",
          // accent: "#F3A712",
          // neutral: "#ffffff",
          // "base-100": "#ffffff",
          // info: "#000000",
          // success: "#50ffb1",
          // warning: "#F3A712",
          // error: "#ff6201",
          // footer: "#4D4D4D",
        }
      }
      ]
    },
  plugins: [require("daisyui")],
}
