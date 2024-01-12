import { config } from '$lib/config';
import type { PostType } from '$lib/types';
import { getAllCategories, getAllTags } from '$lib/api/post';
export const prerender = true;
export async function GET({ fetch }): Promise<Response> {
	const baseUrl = config.url;
	const response = await fetch('api/posts.json');
	const posts: PostType[] = await response.json();
	const categories = await getAllCategories(posts);
	const tags = await getAllTags(posts);
	const pages: string[] = [
		/* Add an array of all other pages of your website */
	];
	const currentDate = new Date().toISOString();

	const urlset = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
              <loc>${baseUrl}</loc>
              <changefreq>daily</changefreq>
              <priority>1</priority>
              <lastmod>${currentDate}</lastmod>
            </url>
      ${posts
				.map(
					(post) => `
            <url>
              <loc>${baseUrl}/article/${post.slug}</loc>
              <lastmod>${new Date(post.updated).toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `
				)
				.join('')}
      ${categories
				.map(
					(page) => `
            <url>
              <loc>${baseUrl}/category/${page}</loc>
              <lastmod>${currentDate}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.5</priority>
            </url>
          `
				)
				.join('')}
         ${tags
						.map(
							(page) => `
            <url>
              <loc>${baseUrl}/tag/${page}</loc>
              <lastmod>${currentDate}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.5</priority>
            </url>
          `
						)
						.join('')}
    </urlset>
  `;

	const headers = {
		'Content-Type': 'application/xml'
	};
	const res = new Response(urlset, {
		headers
	});
	return res;
}
