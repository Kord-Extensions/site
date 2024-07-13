<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte"
	import * as Card from "$lib/components/ui/card"

	import { Plus, Code, Globe } from "lucide-svelte"
	import Discord from "virtual:icons/simple-icons/discord";
	import type { Project } from "$lib/projects";

	export let project: Project

	$: projectDesc = project.shortDescription
</script>

<Card.Root class="w-full md:w-fit">
	<Card.Header class="p-4 pt-2 pb-2">
		<div class="pt-2 flex flex-row space-x-1 items-center">
			<Card.Title>{ project.name }</Card.Title>

			<div class="flex-grow"></div>

			<Card.Description>
				{#if project.site !== undefined}
					<Button href={project.site} variant="secondary" size="sm">
						<Globe size="1rem" />
					</Button>
				{:else if project.vcs !== undefined}
					<Button href={project.vcs} variant="secondary" size="sm">
						<Code size="1rem" />
					</Button>
				{:else if project.serverInvite !== undefined}
					<Button href={project.serverInvite} variant="secondary" size="sm">
						<Discord height="1rem" width="0.95rem" />
					</Button>
				{:else if project.botInvite !== undefined}
					<Button href={project.botInvite} variant="accent" size="sm">
						<Plus size="1rem" />
					</Button>
				{/if}
			</Card.Description>
		</div>
	</Card.Header>

	<Card.Content class="prose dark:prose-invert p-4 pt-0">
		{ projectDesc }
	</Card.Content>
</Card.Root>
