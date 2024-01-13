// mdsvex.config.js

import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
export default {
	layout: {
		_: './src/lib/templates/default.svelte'
	},
	extensions: ['.md'],
	rehypePlugins: [rehypeSlug],
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true, ordered: true }]]
};
