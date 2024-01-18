<script lang="ts">
	export let href: string;

	function noTarget(href: string) {
		return href.includes('localhost') || href.includes('devdesignfun.com');
	}
</script>

{#if noTarget(href)}
	<a {href}>
		<slot />
	</a>
{:else}
	<a {href} target="_blank" rel="noopener noreferrer">
		<slot />
	</a>
{/if}
