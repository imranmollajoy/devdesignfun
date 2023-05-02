<script lang="ts">
	import { getPlaceholder } from '$lib/utilities';
	import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';
	export let src: string;
	export let alt: string;

	const placeholder = getPlaceholder(src);
</script>

<figure>
	<img src={placeholder} data-src={src} {alt} use:lazyImage={{ threshold: 0.5 }} />
	{#if alt}
		<div>
			<p>{alt}</p>
		</div>
	{/if}
</figure>

<style>
	figure {
		background-color: rgba(var(--color-surface-500) / 0.1);
		margin: 0;
	}
	img {
		margin-inline: auto;
		width: 100%;
	}
	div {
		padding: 1rem;
	}
	div p {
		margin: 0;
		text-align: center;
		font-style: italic;
		opacity: 50%;
	}
</style>
