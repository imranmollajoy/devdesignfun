import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';
import type { PostType } from '$lib/types';
import { getFormattedDate } from '$lib/utilities';
export const prerender = true;
async function getPosts(url) {
	let posts: PostType[] = [];

	const paths = import.meta.glob('/src/posts/**/post.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		const slug = path.split('/').at(-2);

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<PostType, 'slug'>;
			const { date, cover } = metadata;
			let updatedCover = {};
			const host = dev ? url.origin : 'https://devdesignfun.com';
			if (cover) {
				updatedCover = {
					...cover,
					image: `${host}/article/${slug}/${cover.image}`
				};
			}
			const updatedMetadata = {
				...metadata,
				date: getFormattedDate(date),
				cover: updatedCover
			};
			const post = { ...updatedMetadata, slug } satisfies PostType;
			!post.draft && posts.push(post);
		}
	}
	// posts = posts.sort(
	// 	(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	// );

	return posts;
}

export async function GET({ url }) {
	const posts = await getPosts(url);
	return json(posts);
}
