<script lang="ts">
	import { base } from '$app/paths';

	const pages = [
		{
			href: base,
			title: 'Home'
		},
		{
			href: base + '/archives',
			title: 'Archives'
		},
		{
			href: base + '/privacy-policy',
			title: 'Privacy Policy'
		},
		{
			href: base + '/about-us',
			title: 'About Us'
		}
	];
	export let categories: any[];
</script>

<!-- @component
 Footer for all pages. will be used in the root +layout.svelte
 -->
<footer class="py-32 bg-surface-100-800-token">
	<div class="container">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="col">
				<h4>Navigation</h4>
				<div class="space-y-2">
					{#each pages as p}
						<a href={p.href} class="block">{p.title}</a>
					{/each}
				</div>
			</div>
			<div class="col">
				<h4>Categories</h4>
				<div class="space-y-2">
					{#each categories as cat}
						<a href="{base}/category/{cat}" class="block">{cat}</a>
					{/each}
				</div>
			</div>
			<div class="col" />
			<div class="col">
				<img src="{base}/ddfllgotransparent.png" alt="" class="w-16" />
				<a href="{base}/">
					<h3>DevDesignFun.com</h3>
				</a>
			</div>
		</div>
	</div>
</footer>
