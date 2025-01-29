<script lang="ts">
	import "../app.pcss";

	import Containers from "$lib/components/ui/containers"
	import Navbar from "$lib/components/ui/navbar"

	import { useRootLayout } from "$lib/stores/ui"

	import { ModeWatcher } from "mode-watcher";
</script>

{#if ($useRootLayout)}
	<Navbar.Base />
	<ModeWatcher />

	<Containers.Main>
		<main class="flex flex-col flex-grow space-y-2">
			<slot></slot>
		</main>
	</Containers.Main>
{:else}
	<slot></slot>
{/if}
