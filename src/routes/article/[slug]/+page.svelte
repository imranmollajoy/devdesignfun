<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Img from '$lib/components/img.svelte';
	import { getFormattedDate } from '$lib/utilities';
	import { TableOfContents } from '@skeletonlabs/skeleton';
	export let data;
	const { title, description, category, tags, cover, slug } = data.meta;
</script>

<Seo {title} {description} {tags} ogType="article" ogImage="./{slug}/{cover.image}" />

<div class="container my-8">
	<div class="grid grid-cols-3 gap-8">
		<article class="col-span-3 lg:col-span-2 space-y-8">
			<a href="/category/{category}">
				<span class="badge variant-filled-primary">
					{category}
				</span>
			</a>
			<h1>{title}</h1>
			{#if cover}
				<Img src="./{slug}/{cover.image}" alt="" />
			{/if}
			<div class="prose-xl max-w-none" id="toc-target">
				<svelte:component this={data.content} />
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
		</article>
		<div class="col col-span-3 lg:col-span-1">
			<div class="space-y-8 sticky top-32">
				<TableOfContents target="#toc-target" class="hidden lg:block" />

				<div class="space-y-4">
					<h3>Related</h3>
					{#each data.related as post}
						<article>
							<p class="opacity-50">{post.date}</p>
							<a href="article/{post.slug}">
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
