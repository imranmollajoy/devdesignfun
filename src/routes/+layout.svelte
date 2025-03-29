<script>
	import { base } from '$app/paths';

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
<svelte:head>
	<link rel="icon" href="{base}/favicon.ico" />
	<link rel="alternate" type="application/atom+xml" href="{base}/rss.xml" />
	<link rel="sitemap" href="{base}/sitemap.xml" />
	<link rel="apple-touch-icon" sizes="180x180" href="{base}/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="{base}/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="{base}/favicon-16x16.png" />
	<link rel="manifest" href="{base}/site.webmanifest" />
</svelte:head>
<AppBar class="sticky top-0 z-10 {cls}" background="bg-surface-50-900-token ">
	<svelte:fragment slot="lead">
		<a href="{base}/">
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
