import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), preprocess(), mdsvex(mdsvexConfig)],
	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		adapter: adapter({
			precompress: false
		}),
		paths: {
			base: '/devdesignfun'
		},
		prerender: {
			crawl: true,
			entries: ['*'],
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				return;
			}
		}
	}
};

export default config;
