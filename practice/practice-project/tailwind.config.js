/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			keyframes: {
				"bounce-light": {
					"0%, 100%": {
						transform: "translateY(-5%)",
						"animation-timing-function":
							"cubic-bezier(0.8, 0, 1, 1)",
					},
					"50%": {
						transform: "translateY(0)",
						"animation-timing-function":
							"cubic-bezier(0, 0, 0.2, 1)",
					},
				},
			},
			animation: {
				"bounce-light": "bounce-light 1s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
