<script lang="ts">
	import type { Post } from "$lib/types/post";
	import type { Projects, Project } from "$lib/types/projects";

	import Metadata from "$lib/components/head/Metadata.svelte";

	import { Button } from "$lib/components/ui/button";
	import Containers from "$lib/components/ui/containers"

	import Grid from "$lib/components/ui/project/grid.svelte"
	import CompactProject from "$lib/components/ui/project/grid-item-compact.svelte"
	import FeaturedProject from "$lib/components/ui/project/project.svelte"

	import { ArrowRight, ArrowDown, Languages, DollarSign, Info } from "lucide-svelte";

	export let data: {
		projects: Projects,
		posts: Post[]
	}

	let allProjects: Array<Project>;
	let projects: Array<Project>;

	$: {
		allProjects = [...data.projects.bots, ...data.projects.libraries, ...data.projects.tools]
			.filter(it => it.featured !== true)

		projects = []

		allProjects = allProjects.sort(() => 0.5 - Math.random())
		projects.push(allProjects.pop()!)

		allProjects = allProjects.sort(() => 0.5 - Math.random())
		projects.push(allProjects.pop()!)

		allProjects = allProjects.sort(() => 0.5 - Math.random())
		projects.push(allProjects.pop()!)

		projects = projects.sort((l, r) => l.name.localeCompare(r.name))
	}

	$: {
		if (data.posts.length > 5) {
			data.posts = data.posts.splice(5)
		}
	}

</script>

<Metadata
	description="The premier Kotlin Discord bot framework."
/>

<Containers.Content class="bg-secondary py-6">
	<div class="my-4 lg:hidden">
		<picture>
			<img src="/banner-light.svg" alt="Kord Extensions" class="banner-image hidden mx-auto dark:block"/>
			<img src="/banner-dark.svg" alt="Kord Extensions" class="banner-image block mx-auto dark:hidden"/>
		</picture>
	</div>

	<div class="hidden lg:grid grid-cols-2">
		<div class="my-4">
			<picture>
				<img src="/banner-light.svg" alt="Kord Extensions" class="banner-image hidden mx-auto dark:block"/>
				<img src="/banner-dark.svg" alt="Kord Extensions" class="banner-image block mx-auto dark:hidden"/>
			</picture>
		</div>

		<div class="text-right flex flex-col">
			<h1 class="title font-semibold text-3xl mb-4 data-toc-ignore">
				Latest Blog Posts
			</h1>

			{#if data.posts.length > 0}
				<ul class="pb-4 list-none">
					{#each data.posts.slice(0, 2) as post}
						<li class="mb-2">
							<a class="link" href="/blog/{post.slug}">{post.title}</a>
							{#if post.summary}
								<p>
									<span class="text-muted-foreground">{post.summary}</span>
								</p>
							{/if}
						</li>
					{/each}
				</ul>

				<span class="flex-grow"></span>

				<div class="flex flex-row items-end content-end place-self-end space-x-4">
					<Button
						href="https://ko-fi.com/gsc"
						variant="orange"
					>
						<DollarSign size="1.5rem"/>
						Donate
					</Button>

					<Button href="/blog" variant="default">
						All Posts <ArrowRight size="1.3em" class="ml-2" />
					</Button>
				</div>
			{:else}
				<p class="mb-4">
					No posts have been written yet. Watch this space!
				</p>

				<Button
					href="https://ko-fi.com/gsc"
					variant="orange"
				>
					<DollarSign size="1.5rem"/>

					Donate
				</Button>
			{/if}
		</div>
	</div>
</Containers.Content>

<div class="mx-4 pt-3 pb-0 mb-0 grid grid-cols-s md:grid-cols-2 md:space-x-4">
	<div class="bg-accent rounded p-4 pb-0 mb-0 flex flex-col items-center text-center rounded-b-none border-b border-muted-foreground">
		<h1 class="title font-semibold text-3xl mb-0" data-toc-ignore>
			Discord Bot Framework
		</h1>

		<p class="mt-1 mb-3 text-muted-foreground">
			The premier, community-driven Discord bot framework for Kotlin.
		</p>

		<p class="mb-6">
			Built on top of <a class="link" href="https://kord.dev/">the excellent Kord library</a>,
			and providing a rich suite of tools for Discord bots of all sizes, including an easy-to-use
			command framework, rich argument parsing, <a class="link" href="https://sentry.io/">Sentry</a>
			integration, and much more.
		</p>

		<p class="mb-6">
			Includes optional first-party modules providing phishing link protection,
			<a class="link" href="https://pluralkit.me/">PluralKit</a> integration, a basic tag system,
			a welcome channel manager, and more.
		</p>

		<p class="mb-6">
			Trusted by large bots like <a class="link" href="https://hyacinthbots.org/bots/lily/about-lily">LilyBot</a>
			and <a class="link" href="https://nabbot.xyz/">NabBot</a>.
		</p>
	</div>

	<a href="/bots"
	   class="bg-muted hover:bg-muted-foreground rounded text-center text-3xl rounded-t-none mb-4 md:hidden"
	   style="height: 5rem; line-height: 5rem;"
	>
		Tap here to learn more.
	</a>

	<div class="bg-accent rounded p-4 flex flex-col items-center text-center pb-0 mb-0 rounded-b-none border-b border-muted-foreground">
		<h1 class="title font-semibold text-3xl mb-0" data-toc-ignore>
			Internationalisation Tools
		</h1>

		<p class="mt-1 mb-3 text-muted-foreground">
			The modular, multi-format i18n toolkit for Kotlin.
		</p>

		<p class="mb-6">
			A new i18n library and Gradle plugin, providing type-safe translations, a rich API, and
			support for mixing file and message formats &mdash; while minimizing magic and unexpected
			behaviour.
		</p>

		<p class="mb-6">
			We're unsatisfied with how most i18n toolkits work &mdash; we feel that many of them are
			unintuitive and don't take full advantage of the ecosystems they exist for.
		</p>

		<p class="mb-6">
			This work-in-progress toolkit aims to fix that.
		</p>
	</div>

	<p class="bg-muted cursor-not-allowed rounded text-center text-3xl rounded-t-none mb-4 md:hidden"
	   style="height: 5rem; line-height: 5rem;"
	>
		Check back soon!
	</p>
</div>

<div class="mx-4 !mt-0 !mb-4 grid-cols-s md:grid-cols-2 space-y-4 md:space-x-4 md:space-y-0 hidden md:grid">
	<a href="/bots"
	   class="bg-muted hover:bg-muted-foreground rounded text-center text-3xl rounded-t-none"
	   style="height: 5rem; line-height: 5rem;"
	>
		Click here to learn more.
	</a>

	<p class="bg-muted cursor-not-allowed rounded text-center text-3xl rounded-t-none"
	   style="height: 5rem; line-height: 5rem;"
	>
		Check back soon!
	</p>
</div>

<div class="bg-yellow-100 dark:bg-yellow-950 rounded mx-4 p-4 !mt-0 col-span-2 text-center lg:hidden">
	<h1 class="title font-semibold text-3xl mb-4 data-toc-ignore">
		Latest Blog Posts
	</h1>

	{#if data.posts.length > 0}
		<ul class="pb-4">
			{#each data.posts as post}
				<li class="mb-2">
					<a class="link" href="/blog/{post.slug}">{post.title}</a>
					{#if post.summary}
						<p>
							<span class="text-muted-foreground">{post.summary}</span>
						</p>
					{/if}
				</li>
			{/each}
		</ul>

		<div class="flex flex-row space-x-4">
			<span class="flex-grow"></span>

			<Button
				href="https://ko-fi.com/gsc"
				variant="orange"
			>
				<DollarSign size="1.5rem"/>
				Donate
			</Button>

			<Button href="/blog" variant="default">
				All Posts <ArrowRight size="1.3em" class="ml-2" />
			</Button>

			<span class="flex-grow"></span>
		</div>
	{:else}
		<p class="mb-4">
			No posts have been written yet. Watch this space!
		</p>

		<Button
			href="https://ko-fi.com/gsc"
			variant="orange"
		>
			<DollarSign size="1.5rem"/>

			Donate
		</Button>
	{/if}
</div>
