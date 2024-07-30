<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

	import { ChevronDown } from "lucide-svelte";

	export let name: string;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost"
		        class="font-normal text-lg transition-colors">
			<ChevronDown size="1.5rem" class="mr-2" />
			{name}
		</Button>
	</DropdownMenu.Trigger>

	<DropdownMenu.Content align="start" class="mt-2.5">
		<DropdownMenu.Group>
			<slot />
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
