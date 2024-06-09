/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "tw-",
  theme: {
	colors: {
		'primary':'#8860d0',
		'secondry': '#5680e9',
		'tertiary': '#5ab9ea',
		'quaternary': '#84ceeb',
		'quinary': '#c1c8ea',
	  },
    extend: {},
  },
  plugins: [],
};
