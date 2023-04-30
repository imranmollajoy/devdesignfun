<script lang="ts">
	import type { PostType } from '$lib/types';
	import ListPost from '../ListPost.svelte';

	export let posts: PostType[];
	export let title: string;
</script>

<div class="col my-4">
	<a href="/category/{title}">
		<h2 class="mb-4 text-{title}">{title}</h2>
	</a>
	{#if posts.length !== 0}
		{#each posts as post}
			<ListPost
				title={post.title}
				date={post.date}
				path={post.slug}
				smallTitle
				cover={post.cover}
				description={post.description}
			/>
		{/each}
	{:else}
		<h3>No posts</h3>
	{/if}
</div>
