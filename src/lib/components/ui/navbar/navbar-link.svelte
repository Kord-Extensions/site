<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	export let emphasis: boolean = false;

	export let href: string;
	export let target: string = "_self";
</script>

<a href={href}
   {target}
   class="hidden md:block"
>
	<Button variant={emphasis ? "accent" : "ghost"} class="font-normal text-lg transition-colors">
		<slot />
	</Button>
</a>
