import type { PostType } from '$lib/types';
import { getPosts } from '$lib/api/post';
export const load = async ({ setHeaders, url, fetch }) => {
	const response = await fetch(`${url.origin}/api/posts`);

	const allposts: PostType[] = await response.json();

	const posts = await getPosts(allposts);
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return { posts };
};
