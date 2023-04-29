import { getPostsByCategory } from '$lib/api/post';
import type { PostType } from '$lib/types';
export const load = async ({ params, url, fetch }) => {
	const response = await fetch(`${url.origin}/api/posts`);
	if (!response.ok) {
		throw new Error('💩 Could not fetch posts');
	}

	const allposts: PostType[] = await response.json();
	const posts = await getPostsByCategory(allposts, params.category);
	return { posts, category: params.category };
};
export const prerender = true;
