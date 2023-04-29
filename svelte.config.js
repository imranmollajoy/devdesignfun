import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import relativeImage from 'mdsvex-relative-images';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess(),
		mdsvex({
			layout: {
				_: './src/lib/templates/default.svelte'
			},
			extensions: ['.md'],
			remarkPlugins: [relativeImage]
		})
	],
	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		adapter: adapter({
			precompress: false
		}),
		prerender: {
			crawl: true,
			entries: ['*']
		}
	}
};

export default config;
