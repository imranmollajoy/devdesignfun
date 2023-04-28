import { getFormattedDate } from '$lib/utilities';
import { dev } from '$app/environment';
export const GET = async ({ url }) => {
	const allPostFiles = import.meta.glob('../../post/**/**/**/*.svx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-expect-error
			// can't bother defining
			const { metadata } = await resolver();
			const postPath = path.slice(5, -10);
			const { date, cover } = metadata;

			let updatedCover = {};
			const host = dev ? url.origin : 'https://devdesignfun.com';
			if (cover) {
				updatedCover = {
					...cover,
					image: `${host}${postPath}/${cover.image}`
				};
			}

			const updatedMetadata = {
				...metadata,
				date: getFormattedDate(date),
				cover: updatedCover
			};

			return {
				...updatedMetadata,
				path: postPath
			};
		})
	);

	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};

	return new Response(JSON.stringify(allPosts), responseOptions);
};

export const prerender = true;
