<script lang="ts">
	import { cn } from "$lib/utils";

	import { Button } from "$lib/components/ui/button";

	export let emphasis: boolean = false;

	export let href: string;
	export let open: boolean = false;

	let className: Props["class"] = undefined;
	export { className as class };
</script>

<Button {href}
        variant={emphasis ? "accent" : "ghost"}
        class={cn(
	        "font-medium text-left transition-colors flex flex-row items-center content-center w-full self-start justify-start my-1",
	        className
        )}
        on:click={() => open = false}
>
	<span class="sidebar-link-icon"><slot name="icon"></slot></span>
	<span><slot /></span>
</Button>

<style>
	.sidebar-link-icon {
		margin-right: 0.7rem;
	}

	.sidebar-link-icon:empty {
		margin-right: 0;
	}
</style>
