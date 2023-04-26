export const GET = async () => {
	const allPostFiles = import.meta.glob('../../post/**/**/**/*.svx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-expect-error
			// can't bother defining
			const { metadata } = await resolver();
			const postPath = path.slice(5, -10);

			return {
				...metadata,
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
