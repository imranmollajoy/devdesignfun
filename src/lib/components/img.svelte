<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<figure>
	<img {src} {alt} loading="lazy" />
	<div>
		<p>{alt}</p>
	</div>
</figure>

<style>
	figure {
		background-color: rgba(var(--color-surface-500) / 0.1);
		margin: 0;
	}
	img {
		margin-inline: auto;
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
