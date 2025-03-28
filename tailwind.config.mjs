/** @type {import('tailwindcss').Config} */
import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        accent: colors.lime,
        gray: colors.stone,
      },
      fontFamily: {
        sans: ['"Sans Serif"'],
      },
    },
	},
	plugins: [starlightPlugin()],
};
