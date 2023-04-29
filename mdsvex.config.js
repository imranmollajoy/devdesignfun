// mdsvex.config.js

import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeSlug from 'rehype-slug';
import rehypeToc from '@jsdevtools/rehype-toc';
export default {
	layout: {
		_: './src/lib/templates/default.svelte'
	},
	extensions: ['.md'],
	rehypePlugins: [rehypeSlug, rehypeToc],
	remarkPlugins: [
		remarkUnwrapImages,
		
	]
};
