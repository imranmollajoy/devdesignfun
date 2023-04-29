<script>
	import CategorizedPosts from '$lib/components/Home/CategorizedPosts.svelte';
	import HeroPosts from '$lib/components/Home/HeroPosts.svelte';
	import ListPost from '$lib/components/ListPost.svelte';
	import Seo from '$lib/components/SEO.svelte';
	export let data;
	const { posts, featured, categorized } = data.posts;
</script>

<Seo />
<HeroPosts {featured} />

<section class="py-12">
	<div class="container">
		<CategorizedPosts categorizedPosts={categorized} />
	</div>
</section>
<section class="py-12">
	<div class="container">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{#each posts as post}
				<ListPost
					title={post.title}
					category={post.category}
					date={post.date}
					description={post.description}
					path={post.slug}
					smallTitle
				/>
			{/each}
		</div>
	</div>
</section>
