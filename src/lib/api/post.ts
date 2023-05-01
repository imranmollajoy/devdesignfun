import type { PostsType, PostType } from '$lib/types';
/**
 * Turn posts from GitHub into categories
 */
export async function getPosts(data: PostType[]): Promise<PostsType> {
	const postLimit = 8;

	const posts = data.filter((post) => !post.draft);
	function sortedPosts(): PostType[] {
		return [...posts].sort((firstElement, secondElement) => {
			return new Date(secondElement.date).getTime() - new Date(firstElement.date).getTime();
		});
	}

	function getLatestPosts(): PostType[] {
		return sortedPosts().slice(0, postLimit);
	}

	function getPicks(): PostType[] {
		return [...sortedPosts()].sort((f, s) => s.weight - f.weight).slice(0, 4);
	}

	async function getCategorizedPosts() {
		return {
			code: await getPostsByCategory(sortedPosts(), 'Code', 3),
			apps: await getPostsByCategory(sortedPosts(), 'Apps', 3),
			design: await getPostsByCategory(sortedPosts(), 'Design', 3)
		};
	}

	return {
		posts: sortedPosts(),
		latest: getLatestPosts(),
		featured: getPicks(),
		categorized: await getCategorizedPosts()
	};
}

export async function getAllCategories(data: PostType[]) {
	const posts = data;
	return [...new Set(posts.map((post) => post.category))];
}

/**
 * Gets posts by category
 */
export async function getPostsByCategory(
	data: PostType[],
	category: string,
	limit?: number
): Promise<PostType[]> {
	const postsByCategory = data.filter((post) => post.category === category && !post.draft);

	if (limit && limit < postsByCategory.length) {
		return postsByCategory.slice(0, limit);
	} else {
		return postsByCategory;
	}
}

export async function getAllTags(posts: PostType[]) {
	const allTags = new Set();

	posts.forEach((post) => {
		post.tags.forEach((tag) => {
			allTags.add(tag);
		});
	});

	return Array.from(allTags);
}

/**
 * Gets posts by tag
 */
export async function getPostsByTag(data: PostType[], tag: string): Promise<PostType[]> {
	return data.filter((post) => post.tags.includes(tag));
}

/**
 * Gets limited posts from a category, for homepage
 */

export async function getPostsByCategoryForHomepage(
	data: PostType[],
	category: string
): Promise<PostType[]> {
	const postLimit = 4;
	return getPostsByCategory(data, category).then((e) => e.slice(0, postLimit));
}

export async function getRelatedPosts(
	posts: PostType[],
	currentPostTitle: string,
	category: string,
	tags: string[]
) {
	// Filter posts with the same category
	const relatedPosts = posts.filter(
		(post) => post.category === category && post.title !== currentPostTitle
	);
	// Get all tags from the current post
	const currentPostTags = new Set(tags);

	// Filter related posts that have at least one tag in common with the current post
	const filteredPosts = relatedPosts.filter((post) => {
		const postTags = new Set(post.tags);
		for (const tag of postTags) {
			if (currentPostTags.has(tag)) {
				return true;
			}
		}
		return false;
	});

	// Sort filtered posts by number of tags in common with the current post (descending)
	filteredPosts.sort((a, b) => {
		const aTags = new Set(a.tags);
		const bTags = new Set(b.tags);
		const aCommonTags = [...currentPostTags].filter((tag) => aTags.has(tag));
		const bCommonTags = [...currentPostTags].filter((tag) => bTags.has(tag));
		return bCommonTags.length - aCommonTags.length;
	});

	// Return the top 3 filtered posts
	return filteredPosts.slice(0, 3);
}
