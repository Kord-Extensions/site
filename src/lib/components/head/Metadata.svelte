<script lang="ts">
	import { page } from "$app/stores";

	export let description: string;
	export let pageTitle: string | undefined = undefined;

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
	<meta property="og:url" content="https://kordex.dev${$page.url.pathname}" />
</svelte:head>
