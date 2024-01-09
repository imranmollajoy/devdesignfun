import { error } from '@sveltejs/kit';
import { getRelatedPosts, getPostMetadata } from '$lib/api/post';
import type { PostType } from '$lib/types';

export async function load({ params, url, fetch }) {
	const post = await import(`../../../posts/${params.slug}/index.md`);
	const allPosts: PostType[] = await fetch(`${url.origin}/api/posts`).then((e) => e.json());

	const meta = await getPostMetadata(allPosts, post.metadata.title);
	const { title, category, tags, slug } = meta;

	const related: PostType[] = await getRelatedPosts(allPosts, title, category, tags);

	const action = 'view';
	const namespace = 'devdesignfun.com';
	const options = { behavior: 'view' };
	const key = slug;
	const viewsRes = await fetch(`https://counterapi.com/api/${namespace}/${action}/${key}`);
	let views;
	if (viewsRes) {
		views = await viewsRes.json();
	}

	const counter = { key, views, namespace, options, action };

	return {
		content: post.default,
		meta,
		counter,
		related
	};
}
