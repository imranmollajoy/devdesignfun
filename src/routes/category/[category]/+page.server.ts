import { getPostsByCategory } from '$lib/api/post';
import type { PostType } from '$lib/types';
export const load = async ({ params, url, fetch }) => {
	const posts = await getPostsByCategory(params.category);
	return { posts, category: params.category };
};
export const prerender = true;
