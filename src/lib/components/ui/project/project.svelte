<script lang="ts">
	import { cn } from "$lib/utils"
	import Button from "$lib/components/ui/button/button.svelte"

	import { DollarSign, Plus, Code, Globe } from "lucide-svelte"
	import Discord from "virtual:icons/simple-icons/discord";

	export let name: string
	export let image: string | undefined = undefined
	export let padImage: boolean = false

	export let site: string | undefined = undefined
	export let vcs: string | undefined = undefined

	export let discordAddUrl: string | undefined = undefined
	export let discordInvite: string | undefined = undefined
	export let donationUrl: string | undefined = undefined
</script>

<div class="flex flex-col items-center md:items-start md:flex-row">
	<div class={cn(
		"mb-4 md:mr-4 md:mb-0 bg-accent rounded-lg h-40 w-40",
		padImage ? "p-4" : "",
	)}>
		{#if image !== undefined}
			<img src={image} alt={`Logo for ${name}`} class={cn(
					"rounded-lg",
					padImage ? "max-w-32 max-h-32" : "max-w-40 max-h-40 m-auto"
				)}/>
		{/if}
	</div>

	<div>
		<div class="flex flex-col md:flex-row space-y-1 md:space-x-4 md:space-y-0">
			<h3 class="title font-semibold text-2xl mb-1">
				{ name }
			</h3>

			<div>
				{#if site !== undefined}
					<Button href={site} variant="secondary" size="sm" title="Website">
						<Globe size="1rem" />
					</Button>
				{/if}

				{#if vcs !== undefined}
					<Button href={vcs} variant="secondary" size="sm" title="Source Code">
						<Code size="1rem" />
					</Button>
				{/if}

				{#if donationUrl !== undefined}
					<Button href={donationUrl} variant="secondary" size="sm" title="Donations">
						<DollarSign size="1rem" />
					</Button>
				{/if}

				{#if discordInvite !== undefined}
					<Button href={discordInvite} variant="secondary" size="sm" title="Discord Server">
						<Discord height="1rem" width="0.95rem" />
					</Button>
				{/if}

				{#if discordAddUrl !== undefined}
					<Button href={discordAddUrl} variant="accent" size="sm" title="Add to Server">
						<Plus size="1rem" class="mr-2" /> Add to server
					</Button>
				{/if}
			</div>
		</div>

		<div class="prose dark:prose-invert mt-2">
			<slot></slot>
		</div>
	</div>
</div>
