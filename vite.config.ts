import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		// alias: {
		//   "plotly.js-dist": "plotly.js-basic-dist-min",
		//   lodash: "lodash-es",
		// },
	  },
});
