export type Cover = {
	image: string;
	alt: string;
};
export type PostType = {
	title: string;
	description: string;
	path: string;
	author?: string;
	cover?: Cover;
	date: string;
	tags: string[];
	category: string;
	draft?: string;
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
