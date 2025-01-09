/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			openSans: [
				'var(--font-open-sans)'
			]
			// galanoGrotesque: [
			// 	'var(--font-galano-Grotesque-alt)'
			// ],
			// nunito: [
			// 	'var(--font-nunito)'
			// ]
		},
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/path/to/image.jpg')"
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }) {
			addUtilities(
				{
					".scrollbar-hide": {
						/* IE and Edge */
						"-ms-overflow-style": "none",
						/* Firefox */
						"scrollbar-width": "none",
						/* Safari and Chrome */
						"&::-webkit-scrollbar": {
							display: "none",
						},
					},
					".scrollbar": {
						/* IE and Edge */
						"-ms-overflow-style": "auto",
						/* Firefox */
						"scrollbar-width": "auto",
						/* Safari and Chrome */
						"&::-webkit-scrollbar": {
							display: "block",
							width: "8px",
							height: "8px",
						},
						"&::-webkit-scrollbar-track": {
							background: "transparent",
						},

						"&::-webkit-scrollbar-thumb": {
							background: "gray",
							borderRadius: "35px",
						},

						"&::-webkit-scrollbar-thumb:hover": {
							background: "gray",
						},

						"&::-webkit-scrollbar-corner": {
							background: "transparent",
						},
					},
					".scrollbar:hover": {
						"&::-webkit-scrollbar-thumb": {
							background: "gray",
						},
					},
					'.scrollbar-hide': {
						'-ms-overflow-style': 'none',
						'scrollbar-width': 'none',
					},
					'.scrollbar-hide::-webkit-scrollbar': {
						display: 'none',
					},
				},
				["responsive"]
			)
		},
	],
};
