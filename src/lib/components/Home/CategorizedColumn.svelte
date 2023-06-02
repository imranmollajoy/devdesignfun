<script lang="ts">
	import type { PostType } from '$lib/types';
	import ListPost from '../ListPost.svelte';

	export let posts: PostType[];
	export let title: string;
</script>

<div class="col my-4">
	<a href="/category/{title}">
		<h2 class="mb-4 text-{title}">
			{title}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				viewBox="0 0 16 16"
				class="inline"
			>
				<path
					fill-rule="evenodd"
					d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
				/>
			</svg>
		</h2>
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
