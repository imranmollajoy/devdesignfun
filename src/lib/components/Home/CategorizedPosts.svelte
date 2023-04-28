<script lang="ts">
	import type { Categorized } from '$lib/types';
	import CategorizedColumn from './CategorizedColumn.svelte';
	export let categorizedPosts: Categorized;
</script>

<div class="grid lg:grid-cols-3 gap-4">
	<CategorizedColumn posts={categorizedPosts.code} title="Code" />
	<CategorizedColumn posts={categorizedPosts.apps} title="Apps" />
	<CategorizedColumn posts={categorizedPosts.design} title="Design" />
</div>
