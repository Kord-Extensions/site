<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Drawer from "$lib/components/ui/drawer";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import * as Tooltip from "$lib/components/ui/tooltip";
	import { Separator } from "$lib/components/ui/separator";

	import Navbar from "$lib/components/ui/navbar/index";

	import { X, Menu, Moon, RefreshCw, Sun, Home, Book, LayoutGrid, Glasses, Rss } from "lucide-svelte";
	import { setMode } from "mode-watcher";

	import Discord from "virtual:icons/simple-icons/discord";
	import GitHub from "virtual:icons/simple-icons/github";

	let drawer0pen = false;
</script>

<Drawer.Root direction="bottom" bind:open={drawer0pen}>
	<Drawer.Portal>
		<Drawer.Content style="top: 4em;">
			<div role="presentation"
			     class="flex flex-col h-full my-4 pb-2"
			     on:click|stopPropagation
			>
				<div class="flex flex-row justify-between m-2 mt-0 items-center">
					<div class="flex flex-row items-center justify-items-center space-x-1">
						<a href="/" class="!size-10">
							<img src="/logo.png" alt="The Kord Extensions logo" class="!size-10" />
						</a>

						<Navbar.Header drawer class="hidden sm:block" href="/">
							Kord Extensions
						</Navbar.Header>
					</div>
<!--					<p class="p-2 ml-2 text-lg font-semibold">Main Menu</p>-->

					<div class="flex flex-row space-x-2 mr-2">
						<Navbar.IconLink target="_blank" href="https://discord.gg/nYzQWcjAmK">
							<Discord />
						</Navbar.IconLink>

						<Navbar.IconLink target="_blank" href="https://github.com/kord-extensions/">
							<GitHub />
						</Navbar.IconLink>

						<Navbar.IconLink target="_blank" href="/blog/feed.rss">
							<Rss />
						</Navbar.IconLink>

						<Drawer.Close
							class="sm:ml-0 p-2 pr-3 mr-2 flex flex-row justify-between space-x-2 rounded border hover:bg-border">
							<X size="1.5em" />
							<span>Close</span>
						</Drawer.Close>
					</div>
				</div>

				<Separator class="mt-2" />

				<div class="p-2 mt-1 overflow-y-auto w-full"
				     style="height: calc(100vh - (4em + 6px))">
					<Navbar.DrawerLink href="/" bind:open={drawer0pen}>
						<Home class="mr-2" size="1.5em" slot="icon" />

						Home
					</Navbar.DrawerLink>

					<Navbar.DrawerLink href="/blog" bind:open={drawer0pen}>
						<Glasses class="mr-2" size="1.5em" slot="icon" />

						Blog
					</Navbar.DrawerLink>

					<Navbar.DrawerLink href="https://docs.kordex.dev" bind:open={drawer0pen}>
						<Book class="mr-2" size="1.5em" slot="icon" />

						Docs
					</Navbar.DrawerLink>

					<Navbar.DrawerLink href="/projects" bind:open={drawer0pen}>
						<LayoutGrid class="mr-2" size="1.5em" slot="icon" />

						Projects
					</Navbar.DrawerLink>
				</div>
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>

<div class="border-b sticky top-0 bg-background z-50 navbar">
	<div class="flex justify-between h-16 items-center px-4">
		<!-- Add navigation items -->
		<div class="flex">
			<Button variant="ghost" class="md:hidden" on:click={() => (drawer0pen = !drawer0pen)}>
				<Menu />
			</Button>

			<div class="hidden md:flex items-center space-x-1 mr-6">
				<a href="/" class="!size-10">
					<img src="/logo.png" alt="The Kord Extensions logo" class="!size-10" />
				</a>

				<Navbar.Header href="/">
					Kord Extensions
				</Navbar.Header>

				<Navbar.Link href="/blog">
					Blog
				</Navbar.Link>

				<Navbar.Link href="https://docs.kordex.dev">
					Docs
				</Navbar.Link>

				<Navbar.Link href="/projects">
					Projects
				</Navbar.Link>
			</div>
		</div>

		<div class="flex items-center space-x-2">
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Navbar.IconLink hideOnTinyScreens target="_blank" href="https://discord.gg/nYzQWcjAmK">
						<Discord />
					</Navbar.IconLink>
				</Tooltip.Trigger>

				<Tooltip.Content>
					<p>Discord Server</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<Navbar.IconLink hideOnTinyScreens target="_blank" href="https://github.com/kord-extensions/">
						<GitHub />
					</Navbar.IconLink>
				</Tooltip.Trigger>

				<Tooltip.Content>
					<p>GitHub</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<Navbar.IconLink hideOnTinyScreens target="_blank" href="/blog/feed.rss">
						<Rss />
					</Navbar.IconLink>
				</Tooltip.Trigger>

				<Tooltip.Content>
					<p>RSS Feed</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<Button builders={[builder]} variant="outline" size="icon">
								<Sun
									class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
								/>

								<Moon
									class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
								/>

								<span class="sr-only">Change theme</span>
							</Button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Content align="end">
							<DropdownMenu.Item class="cursor-pointer" on:click={() => setMode("light")}>
								<Sun class="mr-2 h-[1.2rem] w-[1.2rem]" />

								Light
							</DropdownMenu.Item>

							<DropdownMenu.Item class="cursor-pointer" on:click={() => setMode("dark")}>
								<Moon class="mr-2 h-[1.2rem] w-[1.2rem]" />

								Dark
							</DropdownMenu.Item>

							<DropdownMenu.Item class="cursor-pointer" on:click={() => setMode("system")}>
								<RefreshCw class="mr-2 h-[1.2rem] w-[1.2rem]" />

								System
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</Tooltip.Trigger>

				<Tooltip.Content>
					<p>Switch Theme</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</div>
</div>
