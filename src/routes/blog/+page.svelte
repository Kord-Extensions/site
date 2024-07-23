<script lang="ts">
	import { setContext } from "svelte";
	import Metadata from "$lib/components/head/Metadata.svelte";
	import Containers from "$lib/components/ui/containers"
	import type { Post } from "$lib/types/post";

	setContext("SHOW_ONLY_EXCERPT", true);

	export let data: { posts: Post[] };

	function transformPost(post: Post) {
		if (post.createdDate) {
			post.createdDate = new Date(post.createdDate);
		}

		if (post.modifiedDate) {
			post.modifiedDate = new Date(post.modifiedDate)
		}

		return post
	}
</script>

<Metadata
	pageTitle="Blog"
	description="News and announcements about the project."
/>

<Containers.Content>
	<h1 class="title font-semibold text-3xl mb-0" data-toc-ignore>
		Blog Posts
	</h1>

	<p class="mt-1 mb-6">
		News and announcements about the project.
	</p>

	<hr class="mb-2" />

	<div class="flex flex-col space-y-4 mb-2">
		{#if data.posts.length > 0}
			{#each data.posts as post}
				<a class="p-4 rounded-md hover:bg-accent" href="/blog/{post.slug}">
					<svelte:component this={post.content} post={transformPost(post)} />

					<p class="mb-2">
						<a class="underline" href="/blog/{post.slug}">Read more...</a>
					</p>
				</a>
			{/each}
		{:else}
			<div class="prose">
				<div>
					No post have been written yet. Watch this space!
				</div>
			</div>
		{/if}
	</div>
</Containers.Content>
