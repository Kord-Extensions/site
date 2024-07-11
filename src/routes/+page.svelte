<script lang="ts">
	import Metadata from "$lib/components/head/Metadata.svelte";
	import Project from "$lib/components/ui/project/project.svelte";

	import * as Tabs from "$lib/components/ui/tabs";

	import { Button } from "$lib/components/ui/button";
	import Containers from "$lib/components/ui/containers"

	import { ArrowRight } from "lucide-svelte";

	import Prism from "prismjs"

	import "prismjs/components/prism-groovy"
	import "prismjs/components/prism-kotlin"
	import "prismjs/components/prism-markup"

	import "prismjs/components/prism-java"
	import "prismjs/components/prism-scala"

	export let data: {
		version: string
	}

	const groovyCode = `repositories {
	mavenCentral()

	maven {
		name "Sonatype Snapshots (Legacy)"
		url "https://oss.sonatype.org/content/repositories/snapshots"
	}

	maven {
		name "Sonatype Snapshots"
		url "https://s01.oss.sonatype.org/content/repositories/snapshots"
	}
}

dependencies {
	implementation "com.kotlindiscord.kord.extensions:kord-extensions:1.9.0-SNAPSHOT"
}`

	const kotlinCode = `repositories {
	mavenCentral()

	maven {
		name = "Sonatype Snapshots (Legacy)"
		url = uri("https://oss.sonatype.org/content/repositories/snapshots")
	}

	maven {
		name = "Sonatype Snapshots"
		url = uri("https://s01.oss.sonatype.org/content/repositories/snapshots")
	}
}

dependencies {
	implementation("com.kotlindiscord.kord.extensions:kord-extensions:${data.version}")
}`

	const sbtCode = `resolvers += Resolver.sonatypeOssRepos("snapshots")

libraryDependencies ++= Seq(
	"com.kotlindiscord.kord.extensions" % "kord-extensions" % "${data.version}"
)`

	const mavenCode = `<repositories>
	<repository>
		<id>sonatype-snapshots-legacy</id>
		<name>Sonatype Snapshots (Legacy)</name>
		<url>https://oss.sonatype.org/content/repositories/snapshots</url>
	</repository>

	<repository>
		<id>sonatype-snapshots</id>
		<name>Sonatype Snapshots</name>
		<url>https://s01.oss.sonatype.org/content/repositories/snapshots</url>
	</repository>
</repositories>

<dependencies>
	<dependency>
		<groupId>com.kotlindiscord.kord.extensions</groupId>
		<artifactId>kord-extensions</artifactId>
		<version>${data.version}</version>
	</dependency>
</dependencies>`

	const groovyHtml = `
<pre class="language-groovy rounded-lg border shadow-sm h-full">
<code class="language-groovy">
${Prism.highlight(groovyCode, Prism.languages.groovy, "groovy")}
</code>
</pre>`

	const kotlinHtml = `
<pre class="language-kotlin rounded-lg border shadow-sm h-full">
<code class="language-kotlin">
${Prism.highlight(kotlinCode, Prism.languages.kotlin, "kotlin")}
</code>
</pre>`

	const sbtHtml = `
<pre class="language-scala rounded-lg border shadow-sm h-full">
<code class="language-scala">
${Prism.highlight(sbtCode, Prism.languages.scala, "scala")}
</code>
</pre>`

	const mavenHtml = `
<pre class="language-xml rounded-lg border shadow-sm h-full">
<code class="language-xml">
${Prism.highlight(mavenCode, Prism.languages.xml, "xml")}
</code>
</pre>`


</script>

<Metadata
	description="The premier Kotlin Discord bot framework."
/>

<Containers.Content class="bg-accent py-10">
	<div class="my-4">
		<picture>
			<img src="/banner-light.svg" alt="Kord Extensions" class="banner-image hidden mx-auto dark:block"/>
			<img src="/banner-dark.svg" alt="Kord Extensions" class="banner-image block mx-auto dark:hidden"/>
		</picture>
	</div>

	<div class="my-4">
		<h1 class="text-3xl font-semibold text-center">The premier Discord bot framework for Kotlin</h1>
	</div>
</Containers.Content>

<Containers.Content>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<section>
			<h2 class="title font-semibold text-2xl mb-0">About Kord Extensions</h2>

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

			<hr class="mt-5 md:hidden" />
		</section>

		<section>
			<h2 class="title font-semibold text-2xl mb-0">Build Config</h2>

			<h3 class="sub-title text-muted-foreground mb-4">
				For more information, see
				<a class="link" href="https://docs.kordex.dev/getting-started.html">the Getting Started guide</a>.
			</h3>

			<Tabs.Root value="gradle-kt">
				<Tabs.List class="w-full">
					<Tabs.Trigger value="gradle-kt">Gradle (Kotlin)</Tabs.Trigger>
					<Tabs.Trigger value="gradle-groovy">Gradle (Groovy)</Tabs.Trigger>
					<Tabs.Trigger value="maven">Maven</Tabs.Trigger>
					<Tabs.Trigger value="sbt">SBT</Tabs.Trigger>
				</Tabs.List>

				<Tabs.Content value="gradle-kt">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html kotlinHtml}
				</Tabs.Content>

				<Tabs.Content value="gradle-groovy">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html groovyHtml}
				</Tabs.Content>

				<Tabs.Content value="maven">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html mavenHtml}
				</Tabs.Content>

				<Tabs.Content value="sbt">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html sbtHtml}
				</Tabs.Content>
			</Tabs.Root>
		</section>
	</div>
</Containers.Content>

<Containers.Content>
	<hr class="mb-5" />

	<div>
		<h2 class="title font-semibold text-2xl">
			Featured Projects
		</h2>

		<p class="mb-2">
			The following top-tier projects are powered by Kord Extensions.
			If you'd like to see your project mentioned on this site, please
			<a class="link" href="https://discord.gg/nYzQWcjAmK">contact us on Discord</a>.
		</p>

		<p class="mb-4 font-bold">
			Please note that we are not responsible for the projects linked to below, and you use them at your own risk.
		</p>

		<Project
			name="LilyBot"
			image="/projects/lilybot.png"
			discordAddUrl="https://discord.com/api/oauth2/authorize?client_id=876278900836139008&permissions=1151990787078&scope=bot%20applications.commands"
			discordInvite="https://discord.gg/hy2329fcTZ"
			donationUrl="https://buymeacoffee.com/Hyacinthbots"
			site="https://hyacinthbots.org/lily/"
			vcs="https://github.com/HyacinthBots/LilyBot/tree/main"
		>
			<p>
				LilyBot is an open-source, general-purpose Discord bot with a focus on moderation tooling and general utilities.
				It was originally developed by members of <a href="https://www.irisshaders.dev/">the Iris project</a>, but has
				since grown in scope and been split off into <a href="https://hyacinthbots.org/">the Hyacinth Bots organisation</a>.
			</p>

			<p>
				The LilyBot developers occasionally contribute to Kord Extensions, and are responsible for a myriad of fixes over
				the years.
			</p>
		</Project>

		<Button href="/projects" variant="accent" class="mt-2">
			More Projects <ArrowRight size="1.3em" class="ml-2" />
		</Button>
	</div>
</Containers.Content>
