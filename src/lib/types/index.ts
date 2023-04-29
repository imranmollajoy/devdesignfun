export type Cover = {
	image: string;
	alt: string;
};
export type PostType = {
	title: string;
	description: string;
	draft?: string;
	slug: string;
	author?: string;
	cover?: Cover;
	date: string;
	tags: string[];
	category: string;
	weight: number;
};
export type Categorized = {
	apps: PostType[];
	code: PostType[];
	design: PostType[];
};
export type PostsType = {
	posts: PostType[];
	latest: PostType[];
	featured: PostType[];
	categorized: Categorized;
};
