import { error } from '@sveltejs/kit';
import { getRelatedPosts } from '$lib/api/post';
import type { PostType } from '$lib/types';

export async function load({ params, url, fetch }) {
	const post = await import(`../../../posts/${params.slug}/post.md`);
	const allPosts: PostType[] = await fetch(`${url.origin}/api/posts`).then((e) => e.json());
	const related: PostType[] = await getRelatedPosts(
		allPosts,
		post.metadata.title,
		post.metadata.category,
		post.metadata.tags
	);
	const meta: PostType = post.metadata;
	return {
		content: post.default,
		meta,
		related
	};
}
