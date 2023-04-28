<script>
	import ListPost from '../ListPost.svelte';

	export let featured;
	const featuredFirst = featured[0];
	const featuredRest = featured.slice(1, featured.length);
</script>

<section class="hero">
	<div class="container py-12">
		<h1 class="font-bold text-4xl">Dev. Design. Fun.</h1>
	</div>
	<div class="bg-surface-200-700-token py-32">
		<div class="container space-y-8">
			<div class="grid grid-cols-3 gap-8">
				<div class="col-span-3 lg:col-span-2">
					<a class="featured-image h-full" href={featuredFirst.path}>
						{#if featuredFirst.cover}
							<img src={`${featuredFirst.cover.image}`} alt="" class="w-full h-full object-cover" />
						{:else}
							<img src="https://placehold.co/600x400" alt="" class="w-full" />
						{/if}
						<div class="overlay-text">
							<p class="variant-filled-primary inline-block p-2 mb-2">
								<span class="space-x-2">
									<p class="block opacity-50">Featured</p>
								</span>
							</p>
							<h2>{featuredFirst.title}</h2>
						</div>
					</a>
				</div>
				<div
					class="col-span-3 lg:col-span-1 space-y-8 flex flex-col justify-end bg-surface-50-900-token p-4 rounded-2xl"
				>
					{#each featuredRest as post}
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
	</div>
</section>

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
		transition: all 0.2s ease;
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
