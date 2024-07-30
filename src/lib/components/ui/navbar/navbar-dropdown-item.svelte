<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

	export let href: string;
	export let target: string = "_self";
</script>

<DropdownMenu.Item {href} {target} class="cursor-pointer flex flex-row text-lg items-center">
	<slot name="icon" />

	<slot />
</DropdownMenu.Item>
