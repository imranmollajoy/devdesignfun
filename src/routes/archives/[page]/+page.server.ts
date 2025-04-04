import { postsPerPage } from '$lib/config';
import { fetchPosts } from '$lib/api/post';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { dev } from '$app/environment';
const host = dev
	? 'http://localhost:5173/devdesignfun'
	: 'https://imranmollajoy.github.io/devdesignfun';
export const load = async ({ url, params, fetch }) => {
	const page = parseInt(params.page) || 1;

	// Keeps from duplicationg the blog index route as page 1
	if (page < 1) {
		redirect(301, base + '/archives/1');
	}

	const offset = page * postsPerPage - postsPerPage;

	const totalPostsRes = await fetch(host + `/api/posts/count`); //${url.origin}/
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
