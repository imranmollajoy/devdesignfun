// 	NOT NEEDED RIGHT NOW

// [page].ts
import { json } from '@sveltejs/kit';

import { postsPerPage } from '$lib/config';
import { fetchPosts } from '$lib/api/post';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const { page } = params;
	const options = {
		offset: (page - 1) * postsPerPage,
		limit: postsPerPage
	};
	const posts = await fetchPosts(options.offset, options.limit);

	return json(posts);
};

export const prerender = true;
