<script lang="ts">
	/**
	 * The title of the page.
	 */
	export let title: string = 'Dev. Design. Fun';

	/**
	 * The description of the page.
	 */
	export let description: string = 'A blog about web development and design';

	/**
	 * The keywords associated with the page.
	 */
	export let tags: string[] = ['web development', 'web design'];

	/**
	 * The Open Graph (OG) type of the page.
	 * @default 'website'
	 * 'website' or 'article'
	 */
	export let ogType: string = 'website';
	export let ogImage: string;
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
		<meta property="og:title" content={title} />
	{/if}

	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
	{/if}
	{#if tags.length > 0}
		<meta name="keywords" content={tags.join(',')} />
	{/if}
	<meta property="og:type" content={ogType} />
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}
</svelte:head>
