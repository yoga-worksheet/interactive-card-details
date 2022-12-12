/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				color1: "hsl(249, 99%, 64%)",
				color2: "hsl(278, 94%, 30%)",
				error: "hsl(0, 100%, 66%)",
				lightGrayishViolet: "hsl(270, 3%, 87%)",
				darkGrayishViolet: "hsl(279, 6%, 55%)",
				veryDarkViolet: "hsl(278, 68%, 11%)",
			},
			backgroundImage: {
				mobile: "url(/bg-main-mobile.png)",
				desktop: "url(/bg-main-desktop.png)",
				"card-front": "url(/bg-card-front.png)",
				"card-back": "url(/bg-card-back.png)",
			},
		},
	},
	plugins: [],
};
