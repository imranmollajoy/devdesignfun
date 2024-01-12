import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';
import type { Cover, PostType } from '$lib/types';
import { getFormattedDate, getPlaceholder } from '$lib/utilities';
export const prerender = true;
async function getPosts(url) {
	let posts: PostType[] = [];

	const paths = import.meta.glob('/src/posts/**/index.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		const slug = path.split('/').at(-2);

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<PostType, 'slug'>;
			const { date, cover } = metadata;
			let updatedCover: Cover = {};
			const host = dev ? url.origin : 'https://devdesignfun.com';
			if (cover) {
				updatedCover = {
					...cover,
					image: `${host}/article/${slug}/${cover.image}`,
					placeholder: getPlaceholder(`${host}/article/${slug}/${cover.image}`)
				};
			} else {
				updatedCover = {
					...cover,
					image: `${host}/ddf.webp`,
					placeholder: `${host}/ddf_placeholder.webp`
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
	return [...posts].sort((firstElement, secondElement) => {
		return new Date(secondElement.date).getTime() - new Date(firstElement.date).getTime();
	});
}

export async function GET({ url }) {
	const posts = await getPosts(url);
	return json(posts);
}
