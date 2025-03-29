import { getAllCategories } from '$lib/api/post';
import { base } from '$app/paths';
import { dev } from '$app/environment';
const host = dev
	? 'http://localhost:5173/devdesignfun'
	: 'https://imranmollajoy.github.io/devdesignfun';
export const prerender = true;
export const trailingSlash = 'always';
export const load = async ({ url, fetch }) => {
	const response = await fetch(host + `/api/posts.json`); //${url.origin}/
	const allposts = await response.json();
	const categories = await getAllCategories();

	return { categories };
};
