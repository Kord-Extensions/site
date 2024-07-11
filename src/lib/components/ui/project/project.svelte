<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte"

	import { DollarSign, Plus, Code, Globe } from "lucide-svelte"
	import Discord from "virtual:icons/simple-icons/discord";

	export let name: string
	export let image: string | undefined = undefined

	export let site: string | undefined = undefined
	export let vcs: string | undefined = undefined

	export let discordAddUrl: string | undefined = undefined
	export let discordInvite: string | undefined = undefined
	export let donationUrl: string | undefined = undefined
</script>

<div class="flex flex-row">
	<div class="w-48 h-48 mr-4">
		{#if image !== undefined}
			<img src={image} alt={`Logo for ${name}`} />
		{/if}
	</div>

	<div>
		<div class="flex flex-col md:flex-row space-y-1 md:space-x-4 md:space-y-0">
			<h3 class="title font-semibold text-2xl mb-1">
				{ name }
			</h3>

			<div>
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
					<Button href={discordAddUrl} variant="accent" size="sm">
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
