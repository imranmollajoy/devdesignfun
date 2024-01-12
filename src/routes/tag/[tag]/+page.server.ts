import { getPostsByTag } from '$lib/api/post';
import type { PostType } from '$lib/types';
export const load = async ({ params, url, fetch }) => {
	const posts = await getPostsByTag(params.tag);
	return { posts, tag: params.tag };
};
export const prerender = true;
