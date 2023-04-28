<script>
	export let path;
	export let title;
	export let cover = {};
	export let category;
	export let date;
	export let description;
	export let author;
	export let smallTitle = false;
	let cls = '';
	let txtCls = '';
	$: if (cover.image) {
		cls = ' flex flex-wrap align-center';
		txtCls = 'grow basis-2/3 md:pl-2';
	}
</script>

<div class="space-y-2 {cls} pb-2 border-b-2 border-b-surface-100">
	{#if cover}
		<div class="grow-0 md:basis-1/3">
			<img src={cover?.image} alt={cover?.alt} />
		</div>
	{/if}

	<div class="{txtCls} space-y-2">
		<span class="space-x-2">
			{#if category}
				<a href="/category/{category}">
					<span class="badge variant-filled-primary">
						{category}
					</span>
				</a>
			{/if}
			{#if date}
				<p class="inline opacity-50">
					{date}
				</p>
			{/if}
			{#if author}
				<p class="inline opacity-50">
					{author}
				</p>
			{/if}
			<!-- <p class="inline opacity-50">{author}</p> -->
		</span>
		{#if path}
			<div>
				<a href={path}>
					{#if title}
						{#if smallTitle}
							<h4>{title}</h4>
						{:else}
							<h3>{title}</h3>
						{/if}
					{/if}
					{#if !cover.image}
						<p>{description}</p>
					{/if}
				</a>
			</div>
		{/if}
	</div>
</div>
