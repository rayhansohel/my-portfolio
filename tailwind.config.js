/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ["Antonio", "serif"],
        poppins: ["Poppins", "serif"],
      },
      backgroundImage: {
        addcar: "url('https://i.ibb.co.com/q5ztbCd/4.png')",
        availablecar: "url('https://i.ibb.co.com/0hdZn3C/19.jpg')",
        cardetails: "url('https://i.ibb.co.com/NKVm7yn/1.png')",
        hero: "url('https://i.ibb.co.com/ngnJndJ/22862389.jpg')",
        login: "url('https://i.ibb.co.com/pLPTRDX/8960.jpg')",
        mybookings: "url('https://i.ibb.co.com/n6XK42N/2.png')",
        mycars: "url('https://i.ibb.co.com/yBBnPSk/3.png')",
        register: "url('https://i.ibb.co.com/Wcht9XT/2177.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#1A212F",
          secondary: "#FFFFFF",
          accent: "#ff0055",
          neutral: "#52525b",
          "base-100": "#030712",
          "base-200": "#10141E",
          "base-300": "#1A212F",
          info: "#4f46e5",
          success: "#059669",
          warning: "#ea580c",
          error: "#e11d48",
        },
        light: {
          primary: "#e4e4e7",
          secondary: "#000000",
          accent: "#ff0055",
          neutral: "#52525b",
          "base-100": "#ffffff",
          "base-200": "#EDEDEF",
          "base-300": "#e4e4e7",
          info: "#4f46e5",
          success: "#059669",
          warning: "#ea580c",
          error: "#e11d48",
        },
      },
    ],

    darkTheme: "dark",
  },
  plugins: [require("daisyui")],
};
