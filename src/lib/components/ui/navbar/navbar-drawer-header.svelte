<script lang="ts">
	import { cn } from "$lib/utils";

	import { Button } from "$lib/components/ui/button";

	export let borderTop: boolean = false;

	let className: Props["class"] = undefined;
	export { className as class };
</script>

<div
        class={cn(
					"whitespace-nowrap h-10 px-4 py-2 font-medium text-lg text-left transition-colors flex",
					"flex-row items-center content-center w-full self-start justify-start pb-4 mb-1 border-b",
					borderTop ? "mt-4 pt-4" : "",
	        className
        )}
>
	<span class="sidebar-link-icon"><slot name="icon"></slot></span>
	<span><slot /></span>
</div>

<style>
	.sidebar-link-icon {
		margin-right: 0.7rem;
	}

	.sidebar-link-icon:empty {
		margin-right: 0;
	}
</style>
