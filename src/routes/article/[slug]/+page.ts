import { error } from '@sveltejs/kit';
import { getRelatedPosts, getPostMetadata } from '$lib/api/post';
import type { PostType } from '$lib/types';

export async function load({ params, url, fetch }) {
	const post = await import(`../../../posts/${params.slug}/post.md`);
	const allPosts: PostType[] = await fetch(`${url.origin}/api/posts`).then((e) => e.json());

	const meta = await getPostMetadata(allPosts, post.metadata.title);
	const { title, category, tags } = meta;

	const related: PostType[] = await getRelatedPosts(allPosts, title, category, tags);
	return {
		content: post.default,
		meta,
		related
	};
}
