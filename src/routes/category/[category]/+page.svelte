<script lang="ts">
	import { base } from '$app/paths';

	export let data;
</script>

<div class="container pb-64">
	<h2 class="my-12 text-{data.category}">Category: {data.category}</h2>
	<div class="space-y-8">
		{#each data.posts as post}
			<article class="space-y-2 flex flex-col gap-4 lg:flex-row">
				<div class="grow lg:basis-1/4">
					<img src={post.cover?.image} alt="" />
				</div>
				<div class="grow lg:basis-3/4">
					<span class="space-x-2">
						<p class="inline opacity-50">
							{post.date}
						</p>
					</span>
					<a href="{base}/article/{post.slug}">
						<h3>{post.title}</h3>
						<p>{post.description}</p>
					</a>
				</div>
			</article>
		{/each}
	</div>
</div>
