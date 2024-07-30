<script lang="ts">
import Metadata from "$lib/components/head/Metadata.svelte";
import Containers from "$lib/components/ui/containers"
import { Button } from "$lib/components/ui/button";
</script>

<Metadata
	description="Error 404: Page not found. Oink!"
	pageTitle="404"
/>

<Containers.Content class="flex flex-col items-center">
	<picture class="w-full flex flex-col items-center">
		<img alt="404 - Page Not Found" src="/404-light.svg" class="my-8 hidden dark:block" style="max-width: 60%" />
		<img alt="404 - Page Not Found" src="/404.svg" class="my-8 dark:hidden" style="max-width: 60%" />
	</picture>

	<div style="padding-top: 1em" class="text-3xl title">
		<Button href="/" size="lg" class="text-3xl py-10">Click here to return home</Button>
	</div>
</Containers.Content>
