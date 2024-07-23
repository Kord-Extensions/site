<script lang="ts">
	import Metadata from "$lib/components/head/Metadata.svelte";

	import Grid from "$lib/components/ui/project/grid.svelte"
	import Project from "$lib/components/ui/project/grid-item.svelte"

	import Containers from "$lib/components/ui/containers"
	import type { Projects } from "$lib/types/projects";

	export let data: {
		projects: Projects,
	}
</script>

<Metadata
	pageTitle="Third-Party Projects"
	description="Projects that use or extend Kord Extensions."
/>

<Containers.Content>
	<h1 class="title font-semibold text-3xl">
		Third-Party Projects
	</h1>

	<p class="mb-2">
		The following projects are powered by Kord Extensions.
		If you'd like to see your project mentioned on this site, please
		<a class="link" href="https://discord.gg/nYzQWcjAmK">contact us on Discord</a>.
	</p>

	<p class="font-bold">
		Please note that we are not responsible for the projects linked to below, and you use them at your own risk.
	</p>
</Containers.Content>

<Containers.Content>
	<hr class="mb-5" />

	<h2 class="title font-semibold text-2xl">
		Discord Bots
	</h2>

	<p class="mb-4">
		Discord bots that use Kord Extensions.
	</p>

	<Grid>
		{#each data.projects.bots as project}
			<Project {project} />
		{/each}
	</Grid>
</Containers.Content>

<Containers.Content>
	<hr class="mb-5" />

	<h2 class="title font-semibold text-2xl">
		Libraries
	</h2>

	<p class="mb-4">
		Libraries that add features to Kord Extensions, or integrate well with KordEx bots.
	</p>

	<Grid>
		{#each data.projects.libraries as project}
			<Project {project} />
		{/each}
	</Grid>
</Containers.Content>

<Containers.Content>
	<hr class="mb-5" />

	<h2 class="title font-semibold text-2xl">
		Tools
	</h2>

	<p class="mb-4">
		Tools that make working with Kord Extensions easier.
	</p>

	<Grid>
		{#each data.projects.tools as project}
			<Project {project} />
		{/each}
	</Grid>
</Containers.Content>
