<script lang="ts">
	import { page } from '$app/stores';
	import { getAllCategories } from '$lib/api/post';
	import { onMount } from 'svelte';
	let categories: any[] = [];
	const get = async () => {
		const response = await fetch(`${$page.url.origin}/api/posts`);

		const allposts = await response.json();

		const cat = await getAllCategories(allposts);
		return cat;
	};
	onMount(async () => {
		categories = await get();
	});
</script>

<!-- @component
 Footer for all pages. will be used in the root +layout.svelte
 -->
<footer class="py-32 variant-ghost-surface">
	<div class="container">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="col space-y-4">
				<h4>Navigation</h4>
				<a href="/">Home</a>
			</div>
			<div class="col">
				<h4>Categories</h4>
				<div class="space-y-2">
					{#each categories as cat}
						<a href="/category/{cat}" class="block">{cat}</a>
					{/each}
				</div>
			</div>
			<div class="col" />
			<div class="col">
				<img src="/ddfllgotransparent.png" alt="" class="w-16" />
				<a href="/">
					<h3>DevDesignFun.com</h3>
				</a>
			</div>
		</div>
	</div>
</footer>
