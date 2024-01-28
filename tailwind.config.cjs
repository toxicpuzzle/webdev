/** @type {import('tailwindcss').Config}*/

import { join } from 'path';
// import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
const config = {
  darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
      themes: { preset: [ "modern" ] }
    })
	]
};

module.exports = config;
