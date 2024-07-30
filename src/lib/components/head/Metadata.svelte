<script lang="ts">
	import { page } from "$app/stores";
	import type { Post } from "$lib/types/post"

	export let description: string;
	export let pageTitle: string | undefined = undefined;

	export let post: Post | undefined = undefined;

	let fullPageTitle = "Kord Extensions";

	if (pageTitle !== undefined) {
		fullPageTitle = `${pageTitle} | Kord Extensions`
	}
</script>

<svelte:head>
	<title>{fullPageTitle}</title>

	<meta property="og:site_name" content="Kord Extensions" />

	<meta property="og:title" content={fullPageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://kordex.dev{$page.url.pathname}" />

	{#if post}
		{#if post.author}
			<meta property="og:article:author:username" content={post.author} />
		{/if}

		{#if post.createdDate}
			<meta property="og:article:published_time" content={post.createdDate.toISOString()} />
		{/if}

		{#if post.modifiedDate}
			<meta property="og:article:modified_time" content={post.modifiedDate.toISOString()} />
		{/if}
	{/if}
</svelte:head>
