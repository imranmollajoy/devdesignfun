<script lang="ts">
	import type { PostType } from '$lib/types';
	import ListPost from '../ListPost.svelte';

	export let posts: PostType[];
	export let title: string;
</script>

<div class="col-span-3 my-4 lg:col-span-1 space-y-4">
	<h3 class="variant-filled-tertiary p-4 rounded-token">{title}</h3>
	{#if posts.length !== 0}
		{#each posts as post}
			<ListPost
				title={post.title}
				date={post.date}
				path={post.path}
				smallTitle
				cover={post.cover}
				description={post.description}
			/>
		{/each}
	{:else}
		<h3>No posts</h3>
	{/if}
</div>
