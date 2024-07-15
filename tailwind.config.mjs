/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "tw-",
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1000px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        // primary: "#8860d0",
        // secondry: "#5680e9",
        // tertiary: "#5ab9ea",
        // quaternary: "#84ceeb",
        // quinary: "#c1c8ea",
        // app_text_dark: "#1e293b",
        // app_text_light: "#4b5563",
        primary: "#fff",
        secondry: "#fff",
        tertiary: "#fff",
        quaternary: "#fff",
        quinary: "#fff",
        app_text_dark: "#fff",
        app_text_light: "#fff",
      },
    },
  },
  plugins: [],
};
