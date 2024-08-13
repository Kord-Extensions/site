<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLDivElement>;
	let className: Props["class"] = undefined;

	export let style: string | undefined = undefined;

	export { className as class };
</script>

<div
	class={cn(
		"px-5 md:px-12 lg:px-24 py-4",
		className
	)}

	{style}
>
	<slot />
</div>
