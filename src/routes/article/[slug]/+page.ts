import { error } from '@sveltejs/kit';
import { getRelatedPosts } from '$lib/api/post';
export async function load({ params, url, fetch }) {
	const post = await import(`../../../posts/${params.slug}/post.md`);
	const allPosts = await fetch(`${url.origin}/api/posts`).then((e) => e.json());
	const related = await getRelatedPosts(
		allPosts,
		post.metadata.title,
		post.metadata.category,
		post.metadata.tags
	);

	return {
		content: post.default,
		meta: post.metadata,
		related
	};
}
