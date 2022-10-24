import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import * as sass from 'sass';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: 'build' }),
		alias: {
			$components: 'src/components',
		}
	},
	preprocess: preprocess({
		sass: {
			sync: true,
			implementation: sass
		}
	})
};

export default config;
