<script>
	import CategorizedPosts from '$lib/components/Home/CategorizedPosts.svelte';
	import ListPost from '$lib/components/ListPost.svelte';
	export let data;
	const { latest, featured, categorized } = data.posts;
	const { apps, code, design } = categorized;
	const latestFirst = latest[0];
	const latestRest = latest.slice(1, latest.length);
</script>

<section class="hero py-32">
	<div class="container space-y-8">
		<h1 class="font-bold text-4xl">Dev. Design. Fun.</h1>
		<div class="grid grid-cols-3 gap-8">
			<div class="col-span-3 lg:col-span-2">
				<a class="featured-image" href={latestFirst.path}>
					{#if latestFirst.cover}
						<img src={`${latestFirst.cover.image}`} alt="" class="w-full" />
					{:else}
						<img src="https://placehold.co/600x400" alt="" class="w-full" />
					{/if}
					<div class="overlay-text">
						<p class="variant-soft-primary inline-block p-2 mb-2">
							<span class="space-x-2">
								<p class="block opacity-50">{latestFirst.date}</p>
							</span>
						</p>
						<h2>{latestFirst.title}</h2>
					</div>
				</a>
			</div>
			<div class="col-span-3 lg:col-span-1 space-y-8 flex flex-col justify-end">
				{#each latestRest as post}
					<ListPost
						title={post.title}
						category={post.category}
						date={post.date}
						description={post.description}
						path={post.path}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>

<CategorizedPosts categorizedPosts={categorized} />

<style>
	.featured-image {
		position: relative;
		overflow: hidden;
		border-radius: 1rem;
		overflow: hidden;
		display: block;
	}
	.featured-image:hover img {
		scale: 1.1;
	}
	.featured-image img {
		display: block;
		width: 100%;
		transition: all 0.2s ease;
		height: auto;
	}

	.overlay-text {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(
			to top,
			rgb(var(--color-primary-500) / 0.9),
			rgb(var(--color-primary-500) / 0.001)
		);
		padding: 20px 120px 20px 20px;
		z-index: 1;
	}
	.overlay-text h2 {
		color: rgb(var(--on-primary));
	}
	.overlay-text a {
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>
