/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				darkPrimary: "#215DFD",
				bgDark: "#252331",
				bgDarkSecondary: "#211F2C",
			},
			screens: {
				"3xl": "1920px",
			},
		},
	},

	plugins: [],
};

module.exports = config;
