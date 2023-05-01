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

<style>
	h4 {
		text-decoration: underline;
		margin-bottom: 1rem;
	}
</style>
