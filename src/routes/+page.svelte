<script>
	import { getFormattedDate } from '$lib/utilities';
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
						<img src={`${latestFirst.path}/${latestFirst.cover.image}`} alt="" class="w-full" />
					{:else}
						<img src="https://placehold.co/600x400" alt="" class="w-full" />
					{/if}
					<div class="overlay-text">
						<p>
							<span class="space-x-2">
								<p class="inline opacity-50">{getFormattedDate(latestFirst.date)}</p>
								<!-- <p class="inline opacity-50">{latestFirst.author}</p> -->
							</span>
						</p>
						<h2>{latestFirst.title}</h2>
					</div>
				</a>
			</div>
			<div class="col-span-3 lg:col-span-1 space-y-8 flex flex-col justify-end">
				{#each latestRest as post}
					<div class="space-y-2">
						<p>
							<span class="space-x-2">
								<a href="/category/{post.category}">
									<span class="badge variant-filled-primary">
										{post.category}
									</span>
								</a>
								<p class="inline opacity-50">
									{getFormattedDate(post.date)}
								</p>
								<!-- <p class="inline opacity-50">{post.author}</p> -->
							</span>
						</p>
						<div>
							<a href={post.path}>
								<h3>{post.title}</h3>
								<p>{post.description}</p>
							</a>
						</div>
					</div>
				{/each}
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
		width: 100%;
		transition: all 0.2s ease;
		height: auto;
	}

	.overlay-text {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
		backdrop-filter: blur(4px);
		padding: 20px 120px 20px 20px;
		z-index: 1;
	}

	.overlay-text a {
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>
