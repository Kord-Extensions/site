<script lang="ts">
	import Metadata from "$lib/components/head/Metadata.svelte";

	import Grid from "$lib/components/ui/project/grid.svelte"
	import Project from "$lib/components/ui/project/grid-item.svelte"

	import Containers from "$lib/components/ui/containers"
</script>

<Metadata
	pageTitle="Third-Party Projects"
	description="Projects that use or extend Kord Extensions."
/>

<Containers.Content>
	<h1 class="title font-semibold text-3xl">
		Third-Party Projects
	</h1>

	<p class="mb-2">
		The following projects are powered by Kord Extensions.
		If you'd like to see your project mentioned on this site, please
		<a class="link" href="https://discord.gg/nYzQWcjAmK">contact us on Discord</a>.
	</p>

	<p class="font-bold">
		Please note that we are not responsible for the projects linked to below, and you use them at your own risk.
	</p>
</Containers.Content>

<Containers.Content>
	<hr class="mb-5" />

	<h2 class="title font-semibold text-2xl">
		Discord Bots
	</h2>

	<p class="mb-4">
		Discord bots that use Kord Extensions.
	</p>

	<Grid>
		<Project
			name="Allium"
			author="HyacinthBots"
			license="GPL 3.0"

			discordAddUrl="https://discord.com/api/oauth2/authorize?client_id=1013045351852298280&permissions=347136&scope=bot%20applications.commands"
			discordInvite="https://discord.gg/hy2329fcTZ"
			donationUrl="https://ko-fi.com/jansel"
			site="https://hyacinthbots.org/allium/"
			vcs="https://github.com/HyacinthBots/Allium"
		>
			<p>
				A Minecraft-modding-focused Discord bot, providing commands to look up mappings, or search for mods on mod
				hosting websites, among other things.
			</p>
		</Project>

		<Project
			name="Athena"
			author="Pyrrha"

			discordAddUrl="https://discord.com/api/oauth2/authorize?client_id=1175660459152642158&permissions=274878220352&scope=bot%20applications.commands"
			discordInvite="https://discord.gg/3sFQPXMqVF"
		>
			<p>
				A TTRPG utility bot, including an advanced dice-roller, and with support for a wide range of game systems.
			</p>
		</Project>

		<Project
			name="kose kata"
			author="mazziechai"
			license="MPL 2.0"

			discordAddUrl="https://discord.com/api/oauth2/authorize?client_id=1079265734456250439&permissions=0&scope=bot%20applications.commands"
			discordInvite="https://discord.gg/Eb8faZKx5d"
			vcs="https://github.com/mazziechai/kose-kata"
		>
			<p>
				A fully-featured tag-management bot with many in-depth features, including the ability to link tags together,
				create tags from existing messages, and more.
			</p>
		</Project>

		<Project
			name="LilyBot"
			author="HyacinthBots"
			license="GPL 3.0"

			discordAddUrl="https://discord.com/api/oauth2/authorize?client_id=876278900836139008&permissions=1151990787078&scope=bot%20applications.commands"
			discordInvite="https://discord.gg/hy2329fcTZ"
			donationUrl="https://buymeacoffee.com/Hyacinthbots"
			site="https://hyacinthbots.org/lily/"
			vcs="https://github.com/HyacinthBots/LilyBot/tree/main"
		>
			<p>
				LilyBot is a general-purpose Discord bot with a focus on moderation tooling and general utilities, with support
				for link filtering and many other features.
			</p>
		</Project>

		<Project
			name="NabBot"
			author="NabBot"

			discordAddUrl="https://discord.com/oauth2/authorize?client_id=168155574725246976&permissions=138244779216&scope=bot%20applications.commands"
			discordInvite="https://support.nabbot.xyz/"
			donationUrl="https://patreon.nabbot.xyz/"
			site="https://nabbot.xyz/"
		>
			<p>
				NabBot integrates with Tibia, a MMORPG from 1997, providing a variety of utility commands, an account-linking
				system including linked roles, level/death announcements, and much more.
			</p>
		</Project>

		<Project
			name="Tonbrett"
			author="DRSchlaubi"
			license="MIT"

			vcs="https://github.com/DRSchlaubi/Tonbrett"
		>
			<p>
				A self-hostable soundboard bot with a Web UI, built using the
				<a href="https://github.com/DRSchlaubi/mikbot">Mikbot meta-framework</a>.
				Allows users to play sound effects in Discord voice channels without paying for Nitro.
			</p>
		</Project>

		<Project
			name="VoteBot"
			author="VoteBot"
			license="MIT"

			discordAddUrl="https://look-at.it/votebot"
			vcs="https://github.com/votebot/votebot-plugin"
		>
			<p>
				Simple voting bot that can create pie charts from the results.
				This is a <a href="https://github.com/DRSchlaubi/mikbot">Mikbot</a> plugin with a hosted
				instance available.
			</p>
		</Project>
	</Grid>
</Containers.Content>

<Containers.Content>
	<hr class="mb-5" />

	<h2 class="title font-semibold text-2xl">
		Libraries
	</h2>

	<p class="mb-4">
		Libraries that add features to Kord Extensions, or integrate well with KordEx bots.
	</p>

	<Grid>
		<Project
			name="Mikbot"
			author="DRSchlaubi"
			license="MIT"

			discordInvite="https://discord.gg/Eb8faZKx5d"
			vcs="https://github.com/DRSchlaubi/mikbot"
		>
			<p>
				A meta-framework built on top of KordEx, which provides a plugin framework, GDPR compliance tools, and built-in
				database tools, among other things.
			</p>
		</Project>
	</Grid>
</Containers.Content>

<Containers.Content>
	<hr class="mb-5" />

	<h2 class="title font-semibold text-2xl">
		Tools
	</h2>

	<p class="mb-4">
		Tools that make working with Kord Extensions easier.
	</p>

	<Grid>
		<Project
			name="doc-generator"
			author="HyacinthBots"
			license="MIT"

			discordInvite="https://discord.gg/hy2329fcTZ"
			site="https://github.com/HyacinthBots/doc-generator/blob/main/docs/usage-guide.md"
			vcs="https://github.com/HyacinthBots/doc-generator"
		>
			<p>
				A simple tool that generates a Markdown file, which contains documentation on all of the commands registered
				to your Kord Extensions bot on startup.
			</p>
		</Project>
	</Grid>
</Containers.Content>
