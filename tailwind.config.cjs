/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('flowbite/plugin')],
	daisyui: {
		themes: [
			'dark',
			{
				'nano-dark': {
					primary: '#eab308',

					secondary: '#facc15',

					accent: '#bef264',

					neutral: '#3730a3',

					'base-100': '#3730a3',

					info: '#1d4ed8',

					success: '#0d9488',

					warning: '#fde047',

					error: '#be123c'
				}
			}
		]
	}
};
