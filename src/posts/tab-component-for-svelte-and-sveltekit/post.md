---
title: Tab Component for Svelte/SvelteKit
date: 2023-05-01T06:10:57.032Z
category: Code
author:
  name: Imran Molla Joy
  link: https://imranmollajoy.github.io
description: A reusable tab component for svelte
tags:
  - how-to
  - svelte
  - tutorial
  - web-dev

weight: 13
image: ''
draft: false
keywords: {}
updated: 2023-05-01T07:36:26.006Z
readingTime: 1 minutes
slug: tab-component-for-svelte-and-sveltekit
---

<script>
    import Interactive from "./components/Interactive.svelte"
</script>

A tab is a versetile element to pack many related info without taking up many space. Let's make one for Svelte/Sveltekit which can be reused in any of your future projects.

## Final Result

<Interactive />

## Code

```svelte
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
```

## Usage

```svelte
<script lang="ts">
	import Tabs from './Tabs.svelte';

	const tabItems = [{ name: 'Latest' }, { name: 'Popular' }, { name: 'Breaking' }];

	let selected = tabItems[0].name;
	function tabChanged(e) {
		selected = e.detail;
	}
</script>

<Tabs on:tabChanged={tabChanged} items={tabItems} {selected}>
	{#if selected === tabItems[0].name}
		<h4>Demands rising, not supply</h4>
		<h4>10 Memes of All Time</h4>
		<h4>MUST SEE: Redditor eats raw salt</h4>
		<p>More</p>
	{/if}
	{#if selected === tabItems[1].name}
		<h4>Protest in Pluto, Civilians Want Immediate Action</h4>
		<h4>Scientists Discover Sleeping is A Phenomenon Among All Animals</h4>
		<h4>Wild Ants Wreck Havoc in Mars Capital</h4>
		<p>More</p>
	{/if}
	{#if selected === tabItems[2].name}
		<h4>Breaking is Bad</h4>
	{/if}
</Tabs>
```
