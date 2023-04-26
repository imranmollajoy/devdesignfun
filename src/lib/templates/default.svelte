<script>
	// @ts-nocheck

	import './code.postcss';
	import { page } from '$app/stores';
	import { getRelatedPosts } from '$lib/api/post';
	import { onMount } from 'svelte';
	import { TableOfContents } from '@skeletonlabs/skeleton';
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {string}
	 */
	export let date;
	/**
	 * @type {string}
	 */
	export let category;
	/**
	 * @type {string}
	 */
	export let author;
	/**
	 * @type {string[]}
	 */
	export let tags;
	/**
	 * @type {string}
	 */
	export let cover;
	/**
	 * @type {string}
	 */
	export let slug;
	/**
	 * @type {any[]}
	 */
	let related = [];
	const get = async () => {
		const response = await fetch(`${$page.url.origin}/api/post`);

		const allposts = await response.json();

		const posts = await getRelatedPosts(allposts, title, category, tags);
		return posts;
	};
	onMount(async () => {
		related = await get();
	});
</script>

<div class="container my-8">
	<div class="grid grid-cols-3 gap-8">
		<div class="col-span-3 lg:col-span-2 space-y-8">
			<a href="/category/{category}">
				<span class="badge variant-filled-primary">
					{category}
				</span>
			</a>
			<h1>{title}</h1>
			{#if cover}
				<img src="{$page.url.href}/{cover.image}" alt="" />
			{/if}
			<img src="" alt="" />
			<div class="prose-xl max-w-none" id="toc-target">
				<slot />
			</div>
			<div class="tags space-x-4">
				{#each tags as tag}
					<a href="/tag/{tag}">
						<span class="chip variant-filled-secondary">
							{tag}
						</span>
					</a>
				{/each}
			</div>
		</div>
		<div class="col">
			<div class="space-y-8 sticky top-32">
				<TableOfContents target="#toc-target" />

				<div class="space-y-4">
					<h3>Related</h3>
					{#each related as post}
						<article>
							<a href={post.path}>{post.title}</a>
						</article>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
