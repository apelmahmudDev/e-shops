/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#7480cd",
				secondary: "#7f8d98",
				light: "#e1eaf9",
				"light-dark": "#b2bac5",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				// xl: "5rem",
				// "2xl": "6rem",
			},
		},
	},

	plugins: [require("flowbite/plugin")],
};
