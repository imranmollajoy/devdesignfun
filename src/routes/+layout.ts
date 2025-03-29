import { getAllCategories } from '$lib/api/post';
export const prerender = true;
export const trailingSlash = 'always';
export const load = async ({ url, fetch }) => {
	const response = await fetch(`api/posts.json`); //${url.origin}/
	const allposts = await response.json();
	const categories = await getAllCategories();

	return { categories };
};
