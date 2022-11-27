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
	},
	plugins: [require("flowbite/plugin")],
};
