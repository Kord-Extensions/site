<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte"
	import * as Card from "$lib/components/ui/card"

	import { DollarSign, Dot, Plus, Code, Globe } from "lucide-svelte"
	import Discord from "virtual:icons/simple-icons/discord";

	export let name: string
	export let author: string
	export let license: string | undefined = undefined

	export let site: string | undefined = undefined
	export let vcs: string | undefined = undefined

	export let discordAddUrl: string | undefined = undefined
	export let discordInvite: string | undefined = undefined
	export let donationUrl: string | undefined = undefined
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{ name }</Card.Title>
		<Card.Description class="flex flex-col">
			<div class="flex flex-row items-center">
				{ author }

				<Dot style={license === undefined ? "opacity: 0%" : ""} />

				{#if license !== undefined}
					{ license }
				{/if}
			</div>

			<div class="pt-2 flex flex-row space-x-1">
				{#if site !== undefined}
					<Button href={site} variant="secondary" size="sm">
						<Globe size="1rem" />
					</Button>
				{/if}

				{#if vcs !== undefined}
					<Button href={vcs} variant="secondary" size="sm">
						<Code size="1rem" />
					</Button>
				{/if}

				{#if donationUrl !== undefined}
					<Button href={donationUrl} variant="secondary" size="sm">
						<DollarSign size="1rem" />
					</Button>
				{/if}

				{#if discordInvite !== undefined}
					<Button href={discordInvite} variant="secondary" size="sm">
						<Discord height="1rem" width="0.95rem" />
					</Button>
				{/if}

				{#if discordAddUrl !== undefined}
					<div class="flex-grow"></div>

					<Button href={discordAddUrl} variant="accent" size="sm">
						<Plus size="1rem" />
					</Button>
				{/if}
			</div>
		</Card.Description>
	</Card.Header>

	<Card.Content class="prose dark:prose-invert">
		<slot />
	</Card.Content>
</Card.Root>
