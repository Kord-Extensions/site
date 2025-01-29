<script lang="ts">
	import "../../app.pcss";

	import Containers from "$lib/components/ui/containers"
	import Navbar from "$lib/components/ui/navbar"

	import { ModeWatcher } from "mode-watcher";

	import { useRootLayout } from "$lib/stores/ui"

	$useRootLayout = false
</script>

<Navbar.Bots />
<ModeWatcher />

<Containers.Main>
	<main class="flex flex-col flex-grow space-y-2">
		<slot></slot>
	</main>
</Containers.Main>
