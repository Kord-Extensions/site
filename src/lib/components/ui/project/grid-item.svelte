<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte"
	import * as Card from "$lib/components/ui/card"

	import { DollarSign, Dot, Plus, Code, Globe } from "lucide-svelte"
	import Discord from "virtual:icons/simple-icons/discord";
	import type { Project } from "$lib/projects";

	export let project: Project
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{ project.name }</Card.Title>
		<Card.Description class="flex flex-col">
			<div class="flex flex-row items-center">
				{ project.author }

				<Dot style={project.license === undefined ? "opacity: 0%" : ""} />

				{#if project.license !== undefined}
					{ project.license }
				{/if}
			</div>

			<div class="pt-2 flex flex-row space-x-1">
				{#if project.site !== undefined}
					<Button href={project.site} variant="secondary" size="sm">
						<Globe size="1rem" />
					</Button>
				{/if}

				{#if project.vcs !== undefined}
					<Button href={project.vcs} variant="secondary" size="sm">
						<Code size="1rem" />
					</Button>
				{/if}

				{#if project.donationUrl !== undefined}
					<Button href={project.donationUrl} variant="secondary" size="sm">
						<DollarSign size="1rem" />
					</Button>
				{/if}

				{#if project.serverInvite !== undefined}
					<Button href={project.serverInvite} variant="secondary" size="sm">
						<Discord height="1rem" width="0.95rem" />
					</Button>
				{/if}

				{#if project.botInvite !== undefined}
					<div class="flex-grow"></div>

					<Button href={project.botInvite} variant="accent" size="sm">
						<Plus size="1rem" />
					</Button>
				{/if}
			</div>
		</Card.Description>
	</Card.Header>

	<Card.Content class="prose dark:prose-invert">
		{@html project.description}
	</Card.Content>
</Card.Root>
