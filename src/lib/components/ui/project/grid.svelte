<script lang="ts">
	export let centered: Boolean = false
</script>

{#if centered}
	<div class="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0 mt-4">
		<div class="flex-grow"></div>

		<slot />

		<div class="flex-grow"></div>
	</div>
{:else}
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row gap-4">
		<slot />
	</div>
{/if}

