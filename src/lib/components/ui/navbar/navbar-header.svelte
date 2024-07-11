<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	export let emphasis: boolean = false;

	export let href: string;
	export let target: string = "_self";
	export let drawer: Boolean = false

	type Props = HTMLAttributes<HTMLDivElement>;
	let className: Props["class"] = undefined;

	export { className as class };
</script>

<a href={href}
   {target}

   class={cn(
		drawer ? "" : "border-r pr-1",
		className
	)}
>
	<Button variant={emphasis ? "accent" : "ghost"} class="font-medium text-lg transition-colors">
		<slot />
	</Button>
</a>
