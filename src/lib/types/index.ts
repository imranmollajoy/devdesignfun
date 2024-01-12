export type Cover = {
	image?: string;
	alt?: string;
	placeholder?: string;
};
type Author = {
	name: string;
	link: string;
};
export type PostType = {
	title: string;
	description: string;
	draft?: string;
	slug: string;
	author: Author;
	cover?: Cover;
	date: string;
	updated?: string;
	readingTime: string;
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
