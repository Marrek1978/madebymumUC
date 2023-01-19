/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
        'hero': "url('./public/images/bg.png')"
				// 'hero-patter..n': "url('/img/hero-pattern.svg')",
      }
		}
	},
	plugins: [],
}
