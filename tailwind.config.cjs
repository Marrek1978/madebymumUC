/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				dynamic: "clamp(2rem, 7.5vw, 5rem)"
      },
			backgroundImage: {
        'hero': "url('/images/bg.png')"
				// 'hero-patter..n': "url('/img/hero-pattern.svg')",
      }
		},
		screens: {
      
			'lgMobile': '500px',
			'tablet': '640px',
      // => @media (min-width: 640px) { ... }
			'middle': '800px',

      'laptop': '1000px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
	},
	plugins: [],
}
