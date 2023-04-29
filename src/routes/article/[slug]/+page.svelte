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
	<div class="grid grid-cols-3 gap-8">
		<article class="col-span-3 lg:col-span-2 space-y-8">
			<a href="/category/{data.meta.category}">
				<span class="badge variant-filled-primary">
					{data.meta.category}
				</span>
			</a>
			<h1>{data.meta.title}</h1>
			{#if data.meta.cover}
				<Img src="./{data.meta.slug}/{data.meta.cover?.image}" alt="" />
			{/if}
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
		</article>
		<div class="col col-span-3 lg:col-span-1">
			<div class="space-y-8 sticky top-32">
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
</div>
