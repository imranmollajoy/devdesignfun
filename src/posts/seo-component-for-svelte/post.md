---
title: SEO Component for Svelte
date: 2023-04-26
category: Code
description: Robust and flexible SEO component for your Svelte/SvelteKit project
tags:
  - tutorial
  - how-to
  - svelte
  - web-dev
slug: seo-component-for-svelte
weight: 10
cover:
  image: featured.webp
readingTime: 4 minutes
updated: 2023-04-30T03:25:13.955Z
author:
  name: Imran Molla Joy
  link: https://imranmollajoy.github.io
---

It's really easy to make a component handling all the SEO stuff which can be used (and reused) throughout your Sveltekit website.
Svelte has a really handy element `svelte:head` which can be used anywhere, and it will automatically inject the data into head in your site.

Assuming you already know what SEO means, I'm not going to bother explaining it. All you need is a component for SEO, so here you go:

## Initial step

Create a `.svelte` file and name it `SEO.svelte` (or whatever you want) in your desired directory. In my case, it's _src/lib/components_.

Next, add ` <svelte:head> </svelte:head>` in the newly created component like so

```html
<!-- SEO.svelte -->
<svelte:head> </svelte:head>
```

Inside of that tag, now we can use all the tags that are needed for ` <head>`.
` title` is the most important part of SEO. So let's add that next.

```diff svelte
<!-- SEO.svelte -->
<svelte:head>
+   <title>An Awesome Title</title>
</svelte:head>

```

What about meta tags like description, tags etc? I got you covered.

```diff svelte
<!-- SEO.svelte -->
<svelte:head>
    <title>An Awesome Title</title>
+   <meta name="description" content="Describe what your site is about" />
+   <meta name="keywords" content="Awesome, site, very nice, website" />
</svelte:head>

```

In next step we will add OpenGraph meta tags.

```diff svelte
<!-- SEO.svelte -->
<svelte:head>
    <title>An Awesome Title</title>
+	<meta property="og:title" content="An Awesome Title" />
    <meta name="description" content="Describe what your site is about" />
+   <meta property="og:description" content="Describe what your site is about" />
    <meta name="keywords" content="Awesome, site, very nice, website" />
+   <meta property="og:type" content="website" />
</svelte:head>

```

If your site contains only one page, you can just import this component in your +page.svelte file like so:

```svelte
<script>
	import SEO from 'path/to/SEO.svelte';
	// rest of your code
</script>

<SEO />
```

But in most cases, you have multiple pages, each containing different metadata. In that case, we need to make our component dynamic.

## Making the component dynamic

```diff svelte
<!-- SEO.svelte -->
+ <script>
+    export let title = "An Awesome Title";
+    export let description = "Describe what your site is about";
+    export let tags = ["Awesome", "site", "very nice", "website"];
+    export let ogType = "website"
+ </script>
<svelte:head>
-   <title>An Awesome Title</title>
-   <meta property="og:title" content="An Awesome Title" />
-   <meta name="description" content="Describe what your site is about" />
-   <meta property="og:description" content="Describe what your site is about" />
-   <meta name="keywords" content="Awesome, site, very nice, website" />
-   <meta property="og:type" content="website" />
+   {#if title}
+		<title>{title}</title>
+	    <meta property="og:title" content={title} />
+   {/if}
+   {#if description}
+		<meta name="description" content={description} />
+		<meta property="og:description" content={description} />
+   {/if}
+
+	{#if tags.length > 0}
+		<meta name="keywords" content={tags.join(',')} />
+	{/if}
+	<meta property="og:type" content={ogType} />
</svelte:head>

```

Now you should add this to your `+layout.svelte` file. It will use the default values. To use a different value on a page, just pass the value you want to override. For example:

```svelte
<!-- routes/about-us/+page.svelte -->
<!-- rest of you code -->

<SEO title="About us" />
```

This will overwrite the default value with "About us". Don't worry, meta tags won't be duplicated.

## Final code

```svelte
<script lang="ts">
	/**
	 * The title of the page.
	 */
	export let title: string = 'An Awesome Title';

	/**
	 * The description of the page.
	 */
	export let description: string = 'Describe what your site is about';

	/**
	 * The keywords associated with the page.
	 */
	export let tags: string[] = ['Awesome', 'site', 'very nice', 'website'];

	/**
	 * The Open Graph (OG) type of the page.
	 * @default 'website'
	 * 'website' or 'article'
	 */
	export let ogType: string = 'website';
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
</svelte:head>
```
