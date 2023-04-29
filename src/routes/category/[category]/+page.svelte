<script lang="ts">
	export let data;
</script>

<div class="container">
	<h2 class="my-12">Category: {data.category}</h2>
	<div class="space-y-8">
		{#each data.posts as post}
			<div class="space-y-2">
				<p>
					<span class="space-x-2">
						<a href="/category/{post.category}">
							<span class="badge variant-filled-primary">
								{post.category}
							</span>
						</a>
						<p class="inline opacity-50">
							{post.date}
						</p>
						<!-- <p class="inline opacity-50">{post.author}</p> -->
					</span>
				</p>
				<div>
					<a href="/article/{post.slug}">
						<h3>{post.title}</h3>
						<p>{post.description}</p>
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
