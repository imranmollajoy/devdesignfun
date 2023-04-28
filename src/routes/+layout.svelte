<script>
	import '../theme.postcss';

	import '@skeletonlabs/skeleton/styles/all.css';

	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Seo from '$lib/components/SEO.svelte';
</script>

<Seo />
<AppBar class="sticky top-0 z-10">
	<svelte:fragment slot="lead">
		<a href="/">
			<h4>Dev.Design.Fun</h4>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>

<slot />
