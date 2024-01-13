import { postsPerPage } from '$lib/config';
import { fetchPosts } from '$lib/api/post';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url, params, fetch }) => {
	const page = parseInt(params.page) || 1;

	// Keeps from duplicationg the blog index route as page 1
	if (page < 1) {
		redirect(301, '/archives/1');
	}

	const offset = page * postsPerPage - postsPerPage;

	const totalPostsRes = await fetch(`${url.origin}/api/posts/count`);
	const { total, totalPages } = await totalPostsRes.json();
	const posts = await fetchPosts(offset, postsPerPage);
	const entry = {
		start: offset + 1,
		end: offset + 1 + posts.length - 1
	};
	return {
		posts,
		page,
		totalPosts: total,
		totalPages,
		entry
	};
};
