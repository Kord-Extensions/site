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

<Containers.Content class="bg-accent py-6">
	<div class="my-4">
		<picture>
			<img src="/banner-light.svg" alt="Kord Extensions" class="banner-image hidden mx-auto dark:block"/>
			<img src="/banner-dark.svg" alt="Kord Extensions" class="banner-image block mx-auto dark:hidden"/>
		</picture>
	</div>

	<div class="mt-4 mb-2">
		<h1 class="text-3xl font-semibold text-center">The premier, community-driven Discord bot framework for Kotlin</h1>
		<div class="flex flex-row justify-center items-center mt-4 space-x-2">
			<Button
				id="scroll-button"
				href="#about"
				variant="secondary"
				class="motion-safe:animate-bounce shadow"
				style="animation-iteration-count: 2.53;"
			>
				<ArrowDown size="1.5rem" class="mr-1" />
				Scroll to info
			</Button>

			<Button
				href="https://hosted.weblate.org/engage/kord-extensions/"
				class="shadow"
			>
				<Languages size="1.5rem" class="mr-1" />
				Translate
			</Button>

			<Button
				href="https://ko-fi.com/gsc"
				variant="orange"
			>
				<DollarSign size="1.5rem" class="mr-1" />
				Donate
			</Button>
		</div>
	</div>
</Containers.Content>

<Containers.Content>
	<div class="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
		<FeaturedProject
			name="LilyBot"
			image="/projects/lilybot.png"
			padImage

			discordAddUrl="https://discord.com/api/oauth2/authorize?client_id=876278900836139008&permissions=1151990787078&scope=bot%20applications.commands"
			discordInvite="https://discord.gg/hy2329fcTZ"
			donationUrl="https://buymeacoffee.com/Hyacinthbots"
			site="https://hyacinthbots.org/bots/lily/about-lily"
			vcs="https://github.com/HyacinthBots/LilyBot/tree/main"
		>
			<p>
				LilyBot is an open-source, general-purpose Discord bot with a focus on moderation tooling and general utilities.
				It was originally developed by members of <a href="https://www.irisshaders.dev/">the Iris project</a>, but has
				since grown in scope and been split off into <a href="https://hyacinthbots.org/">the Hyacinth Bots organisation</a>.
			</p>

			<p>
				The LilyBot developers occasionally contribute to Kord Extensions, and they are responsible for a myriad of
				features and fixes over the years.
			</p>
		</FeaturedProject>

		<div class="self-center border-t pb-1 h-0 w-full md:border-r md:h-64 md:w-0 md:pb-0"></div>

		<FeaturedProject
			name="NabBot"
			image="/projects/nabbot.png"

			discordAddUrl="https://discord.com/oauth2/authorize?client_id=168155574725246976&permissions=138244779216&scope=bot%20applications.commands"
			discordInvite="https://support.nabbot.xyz/"
			donationUrl="https://patreon.nabbot.xyz/"
			site="https://nabbot.xyz/"
		>
			<p>
				NabBot is a Discord bot that integrates with Tibia, a MMORPG from 1997. It provides a variety of utility
				commands, as well as an account-linking system, supporting linked roles based on your guild, level/death
				announcements, wiki lookup commands, and much more.
			</p>

			<p>
				NabBot is a long-running bot that recently moved to Kord Extensions. It's been recognised as a "Promoted
				Fansite" by the Tibia developers since 2020, with over 21,000 users and 15,000 servers,
				<a class="link" href="https://nabbot.xyz/stats/2024/all">according to their 2024 stats page</a>.
			</p>
		</FeaturedProject>
	</div>

	<hr class="block md:hidden mt-6" />

	<Grid centered>
		{#each projects as project}
			<CompactProject {project} />
		{/each}

		<Button href="/projects" variant="accent" size="lg">
			More Projects <ArrowRight size="1.3em" class="ml-2" />
		</Button>
	</Grid>
</Containers.Content>

<hr />

<Containers.Content>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<section>
			<h2 class="title font-semibold text-2xl mb-0" id="about">About Kord Extensions</h2>

			<p>
				Kord Extensions (AKA KordEx) is a Discord bot framework built on top of
				<a class="link" href="https://kord.dev/">the excellent Kord library</a>.
				It provides a framework for Discord bots of all sizes, with easy-to-use commands, rich argument parsing, and
				many more useful features.
			</p>

			<p class="mt-4">
				KordEx provides an idiomatic API that makes full use of Kotlin's niceties.
				Instead of providing a light DSL wrapper meant for prototyping or implementing small bots, KordEx takes
				inspiration from
				<a class="link" href="https://docs.pycord.dev/en/stable/ext/commands/cogs.html">PyCord's Cogs feature</a>,
				keeping your bot's code organised into distinct modules.
			</p>

			<p class="mt-4">
				KordEx was built from the ground up with a priority on the developer experience, and we believe the code speaks
				for itself.
				If you're new to KordEx, we recommend checking out
				<a class="link" href="https://github.com/kord-extensions/template">the template project</a> and the
				<a class="link" href="https://docs.kordex.dev/beginner-tutorial">beginner tutorial</a>.
			</p>

			<p class="mt-4">
				Alternatively, KordEx has
				<a class="link" href="https://discord.gg/nYzQWcjAmK">a small but dedicated community on Discord</a>.
			</p>

			<hr class="mt-5 md:hidden" />
		</section>

		<section>
			<h2 class="title font-semibold text-2xl mb-0">Getting Started</h2>

			<h3 class="sub-title text-muted-foreground mb-4">
				To learn about Kord Extensions and how to get started, check out
				<a class="link" href="https://docs.kordex.dev/getting-started.html">the Getting Started guide</a>.
			</h3>

			<hr class="my-5" />

			<h2 class="title font-semibold text-2xl mb-0">Useful Links</h2>

			<div>
				<ul class="list-disc ml-5 space-y-1 mt-1">
					<li><a class="link" href="https://github.com/Kord-Extensions/kord-extensions">GitHub repo</a></li>
					<li><a class="link" href="https://www.answeroverflow.com/c/1121419906995458098">Indexed support questions</a></li>
					<li><a class="link" href="https://kord.dev/">Kord's documentation</a></li>
					<li><a class="link" href="https://discord.gg/nYzQWcjAmK">Official Discord server</a></li>
					<li><a class="link" href="https://docs.kordex.dev/">Official documentation</a></li>
					<li><a class="link" href="https://hosted.weblate.org/engage/kord-extensions/">Weblate (crowdsourced translations)</a></li>
				</ul>
			</div>
		</section>
	</div>
</Containers.Content>
