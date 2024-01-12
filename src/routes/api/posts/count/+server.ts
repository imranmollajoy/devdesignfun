import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { postsPerPage } from '$lib/config';
export const GET: RequestHandler = async () => {
	const posts = import.meta.glob('/src/posts/**/index.md');
	const total = Object.keys(posts).length;
	return json({
		total,
		totalPages: Math.ceil(total / postsPerPage)
	});
};

export const prerender = true;
