import type { PostType } from '$lib/types';
import { getPosts } from '$lib/api/post';
export const load = async ({ setHeaders, url, fetch }) => {
	const posts = await getPosts();
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return { posts };
};
