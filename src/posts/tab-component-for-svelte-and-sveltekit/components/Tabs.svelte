<script lang="ts">
	type Item = {
		/**
		 * The name of the tab
		 */
		name: string;
	};
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/**
	 * The items of the tab component
	 */
	export let items: Item[] = [];
	/**
	 * The currently selected tab.
	 */
	export let selected = items[0].name;
</script>

<div class="tabs">
	{#each items as item}
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-interactive-supports-focus -->
		<a
			class="tab"
			data-sveltekit-noscroll
			class:active={selected === item.name}
			role="tab"
			on:click={() => {
				dispatch('tabChanged', item.name);
			}}
		>
			<span>{item.name}</span>
		</a>
	{/each}
</div>
<div class="tab-panel">
	<slot />
</div>

<style>
	:root {
		--active: cyan;
		--on-active: black;
	}
	.tabs {
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
		gap: 1rem;
		border-bottom: 1px solid var(--active);
	}
	a {
		text-decoration: none !important;
		cursor: pointer;
	}

	.tab {
		padding: 0.5rem;
		border-radius: 1rem 1rem 0 0;
	}
	.tab.active {
		background-color: var(--active);
		color: var(--on-active) !important;
	}
	.tab-panel {
		padding: 1rem;
		border: 1px solid var(--active);
		border-radius: 0 0 1rem 1rem;
	}
</style>
