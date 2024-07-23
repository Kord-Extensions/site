<script lang="ts">
	/* eslint-disable no-import-assign */

	import { Pencil, Sparkles, User } from "lucide-svelte";
	import { getContext } from "svelte";
	import Time from "svelte-time";
	import twemoji from "twemoji";

	import { afterNavigate } from "$app/navigation";

	import Metadata from "$lib/components/head/Metadata.svelte";
	import { Separator } from "$lib/components/ui/separator";
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";

	export let title = "";
	export let summary = "";

	// Note: mdsvex breaks typescript parsing, we can't specify types nor `import type { ... } from "..."`

	// @ts-expect-error See note in source code
	export let post = undefined;

	// Whether we're rendering the excerpt embedded in another page.
	let excerptMode = getContext("SHOW_ONLY_EXCERPT");

	// @ts-expect-error See note in source code
	let mainElement;

	// @ts-expect-error See note in source code
	let slug = undefined

	// @ts-expect-error See note in source code
	if (post && post.slug) {
		// @ts-expect-error See note in source code
		slug = post.slug.split("/")[1]
	}

	afterNavigate(() => {
		twemoji.parse(mainElement, {
			ext: ".svg",
			folder: "svg",
			className: "emoji",
			size: "1em",
		});
	});
</script>

{#if !excerptMode}
	<Metadata
		pageTitle={title}
		description={summary}

		{post}
	/>
{/if}

{#if slug}
	<span class="hidden">
		<a href="/blog/{slug}">Svelte needs this link to build.</a>
	</span>
{/if}

<div
	class={excerptMode ? undefined : "flex flex-col"}
	style={excerptMode ? undefined : "min-height: calc(100vh - 6em)"}
	bind:this={mainElement}
>
	<header class="grow-0 shrink-0">
		<h1 class="mb-0 font-semibold text-3xl">{title}</h1>

		{#if post && (post.author || post.createdDate || post.modifiedDate)}
			<h5 class="mb-0 text-muted-foreground flex flex-row space-x-2 items-center" data-toc-ignore>
				{#if post.author}
					<Tooltip.Root>
						<Tooltip.Trigger class="flex flex-row items-center">
							<User size="1rem" class="mr-1" />
							{post.author}
						</Tooltip.Trigger>
						<Tooltip.Content>
							Post author: {post.author}
						</Tooltip.Content>
					</Tooltip.Root>
				{/if}

				{#if post.author && (post.createdDate || post.modifiedDate)}
					<span>|</span>
				{/if}

				{#if post.createdDate}
					<Tooltip.Root>
						<Tooltip.Trigger class="flex flex-row items-center">
							<Sparkles size="1rem" class="mr-1" />
							<Time timestamp={post.createdDate} format="MMMM D YYYY" />
						</Tooltip.Trigger>
						<Tooltip.Content>
							Post created: <Time timestamp={post.createdDate} format="MMMM D, YYYY [at] HH:mm [(UTC)]" />
						</Tooltip.Content>
					</Tooltip.Root>
				{/if}

				{#if post.createdDate && post.modifiedDate && (post.createdDate.getTime() !== post.modifiedDate.getTime())}
					<span>|</span>
				{/if}

				{#if post.modifiedDate && (post.createdDate.getTime() !== post.modifiedDate.getTime())}
					<Tooltip.Root>
						<Tooltip.Trigger class="flex flex-row items-center">
							<Pencil size="1rem" class="mr-1" />
							<Time timestamp={post.modifiedDate} format="MMMM D YYYY" />
						</Tooltip.Trigger>
						<Tooltip.Content>
							Post modified: <Time timestamp={post.modifiedDate} format="MMMM D, YYYY [at] HH:mm [(UTC)]" />
						</Tooltip.Content>
					</Tooltip.Root>
				{/if}
			</h5>
		{/if}

		<h5 class="mb-4 text-muted-foreground" data-toc-ignore>
			{summary}
		</h5>
	</header>

	<article class="prose dark:prose-invert grow">
		<slot />
	</article>
</div>
