import type { PostsType, Cover, PostType } from '$lib/types';
import { postsPerPage } from '$lib/config';
import { dev } from '$app/environment';
import { getFormattedDate, getPlaceholder } from '$lib/utilities';
import { page } from '$app/stores';
export async function fetchPosts(offset = 0, limit = 100) {
	let posts: PostType[] = [];

	const paths = import.meta.glob('/src/posts/**/index.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		const slug = path.split('/').at(-2);

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<PostType, 'slug'>;
			const { date, cover } = metadata;
			let updatedCover: Cover = {};
			const host = dev
				? 'http://localhost:5173/devdesignfun'
				: 'https://imranmollajoy.github.io/devdesignfun';
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
	posts = [...posts].sort((firstElement, secondElement) => {
		return new Date(secondElement.date).getTime() - new Date(firstElement.date).getTime();
	});

	if (offset) {
		posts = posts.slice(offset);
	}

	if (limit && limit < posts.length && limit != -1) {
		posts = posts.slice(0, limit);
	}

	return posts;
}
// for homepage
export async function getPosts(): Promise<PostsType> {
	const posts = await fetchPosts();
	const postLimit = 8;
	function getLatestPosts(): PostType[] {
		return [...posts].slice(0, postLimit);
	}

	function getPicks(): PostType[] {
		return [...posts].sort((f, s) => s.weight - f.weight).slice(0, 4);
	}

	async function getCategorizedPosts() {
		return {
			code: await getPostsByCategory('Code', 3),
			tech: await getPostsByCategory('Tech', 3),
			design: await getPostsByCategory('Design', 3)
		};
	}

	return {
		latest: getLatestPosts(),
		featured: getPicks(),
		categorized: await getCategorizedPosts()
	};
}

export async function getArchivedPosts() {
	const posts = await fetchPosts();

	return {
		posts
	};
}

export async function getPostMetadata(title: string) {
	const posts = await fetchPosts();
	return [...posts].filter((p) => p.title === title)[0];
}

export async function getAllCategories() {
	const posts = await fetchPosts();
	return [...new Set(posts.map((post) => post.category))];
}

/**
 * Gets posts by category
 */
export async function getPostsByCategory(category: string, limit?: number): Promise<PostType[]> {
	const posts = await fetchPosts();
	const postsByCategory = posts.filter((post) => post.category === category && !post.draft);

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
export async function getPostsByTag(tag: string): Promise<PostType[]> {
	const posts = await fetchPosts();
	return posts.filter((post) => post.tags.includes(tag));
}

/**
 * Gets limited posts from a category, for homepage
 */

export async function getPostsByCategoryForHomepage(category: string): Promise<PostType[]> {
	const postLimit = 4;
	return getPostsByCategory(category).then((e) => e.slice(0, postLimit));
}

export async function getRelatedPosts(currentPostTitle: string, category: string, tags: string[]) {
	const posts = await fetchPosts();
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
