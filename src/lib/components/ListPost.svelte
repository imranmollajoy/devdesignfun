<script lang="ts">
	import { getPlaceholder } from '$lib/utilities';
	import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';
	export let path: string;
	export let title: string;
	export let cover = {};
	export let category: string;
	export let date: string;
	export let description: string;
	export let author: string;
	export let smallTitle = false;
	let cls = '';
	let txtCls = '';
	$: if (cover.image) {
		cls = ' flex flex-wrap align-center';
		txtCls = 'grow basis-1/2 md:pl-2';
	}
	$: placeholder = getPlaceholder(cover?.image);
</script>

<div class="space-y-2 {cls} py-2">
	<div class="grow-0 md:basis-1/2">
		{#if cover}
			<img
				src={placeholder}
				data-src={cover?.image}
				alt={cover?.alt}
				use:lazyImage={{ threshold: 0.5 }}
				class="w-full"
			/>
		{/if}
	</div>

	<div class="{txtCls} space-y-2">
		<span class="space-x-2">
			{#if category}
				<a href="/category/{category}">
					<span class="badge {category} ">
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
				<a href="/article/{path}">
					{#if title}
						{#if smallTitle}
							<h4 class="font-bold">{title}</h4>
						{:else}
							<h3>{title}</h3>
						{/if}
					{/if}
					{#if !cover.image}
						<p class="my-2">{description}</p>
					{/if}
				</a>
			</div>
		{/if}
	</div>
</div>
