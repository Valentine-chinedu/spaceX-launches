module.exports = {
	content: ['./src/**/*.{js,ts,tsx,jsx}', './index.html'],
	theme: {
		extend: {
			backgroundImage: {
				landing_img: "url('/images/landing_bg.jpg')",
				launch_img: "url('/images/launch_bg2.jpg')",
				rocket_img: "url('/images/rocket_bg.jpg')",
				starlink_img: "url('/images/starlink_bg.jpg')",
				starship_img: "url('/images/starship_bg.jpg')",
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
