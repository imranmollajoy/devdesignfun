import { getPostsByTag } from '$lib/api/post';
import type { PostType } from '$lib/types';
export const load = async ({ params, url, fetch }) => {
	const response = await fetch(`${url.origin}/api/post`);
	if (!response.ok) {
		throw new Error('💩 Could not fetch posts');
	}

	const allposts: PostType[] = await response.json();
	const posts = await getPostsByTag(allposts, params.tag);
	return { posts, tag: params.tag };
};
export const prerender = true;
