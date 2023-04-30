import { config } from '$lib/config';
import type { PostType } from '$lib/types';
export const prerender = true;
export async function GET({ fetch }) {
	const response = await fetch('api/posts');
	const posts: PostType[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<description>${config.description}</description>
				<link>${config.url}</link>
				<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${config.url}/article/${post.slug}</link>
							<guid isPermaLink="true">${config.url}/article/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
                            <category>${post.category}</category>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
