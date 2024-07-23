<script lang="ts">
	import type { Post } from "$lib/types/post";
	import Containers from "$lib/components/ui/containers"

	export let data: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		content: any,
		post: Post
	};
</script>

<Containers.Content>
	<svelte:component this={data.content} post={data.post} />
</Containers.Content>
