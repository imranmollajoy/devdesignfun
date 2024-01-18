<script lang="ts">
	export let href: string;

	// Function to check if href is an external link
	function isExternalLink(href) {
		return href.startsWith('http') || href.startsWith('//');
	}
</script>

{#if isExternalLink(href)}
	<a {href} class="external-link text-secondary-500" target="_blank" rel="noopener noreferrer">
		<slot />
	</a>
{:else}
	<a {href}>
		<slot />
	</a>
{/if}

<style>
	.external-link::after {
		content: ' ↪';
		font-size: 0.8em;
		text-decoration: none !important;
	}
</style>
