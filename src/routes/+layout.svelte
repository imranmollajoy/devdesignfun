<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	let y = 0;
	let cls = '';
	$: cls = y > 0 ? 'shadow-lg' : '';
</script>

<svelte:window bind:scrollY={y} />

<AppBar class="sticky top-0 z-10 {cls}" background="bg-surface-50-900-token ">
	<svelte:fragment slot="lead">
		<a href="/">
			<h4>Dev.Design.Fun</h4>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>

<div class="bg-surface-50-900-token">
	<slot />
</div>
<Footer categories={data.categories} />
