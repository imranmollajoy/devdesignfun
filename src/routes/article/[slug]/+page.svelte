<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Img from '$lib/components/img.svelte';
	import { getFormattedDate } from '$lib/utilities';
	export let data;
</script>

{#if data.meta.cover}
	<Seo
		title={data.meta.title}
		description={data.meta.description}
		tags={data.meta.tags}
		ogType="article"
		ogImage="./{data.meta.slug}/{data.meta.cover.image}"
	/>
{:else}
	<Seo
		title={data.meta.title}
		description={data.meta.description}
		tags={data.meta.tags}
		ogType="article"
	/>
{/if}
<div class="container my-8">
	<div class="space-y-4 my-16 mx-auto text-center">
		<div class="flex gap-4 flex-wrap align-center justify-center">
			<a href="/category/{data.meta.category}">
				<span class="badge {data.meta.category}">
					{data.meta.category}
				</span>
			</a>
			<p class="opacity-50 space-x-4">
				<span>
					{data.meta.readingTime} to read
				</span>
				<span>
					{getFormattedDate(data.meta.date)}
				</span>
			</p>
		</div>

		<h1>{data.meta.title}</h1>
		{#if data.meta.cover}
			<img
				src="./{data.meta.slug}/{data.meta.cover?.image}"
				alt=""
				loading="lazy"
				class="max-w-96 mx-auto"
			/>
		{/if}
	</div>
	<div class="max-w-[1000px] mx-auto px-4">
		<article class="col-span-3 lg:col-span-2 space-y-8">
			<main class="prose-xl max-w-none">
				<h3>Table of contents</h3>
				<svelte:component this={data.content} />
			</main>
			<div class="tags space-x-4">
				{#each data.meta.tags as tag}
					<a href="/tag/{tag}">
						<span class="chip variant-filled-secondary">
							{tag}
						</span>
					</a>
				{/each}
			</div>
			{#if data.meta.updated}
				<p class="opacity-50 py-16">
					<strong>Last updated: {getFormattedDate(data.meta.updated)}</strong>
				</p>
			{/if}
		</article>
		<div class="py-8">
			<!-- {#key data.content}
				{/key} -->
			<div class="space-y-4">
				<h3>Related</h3>
				{#each data.related as post}
					<article>
						<p class="opacity-50">{post.date}</p>
						<a href="/article/{post.slug}">
							<h3>
								{post.title}
							</h3>
							<p>{post.description}</p>
						</a>
					</article>
				{/each}
			</div>
		</div>
	</div>
</div>
