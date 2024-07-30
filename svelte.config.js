import adapter from "@sveltejs/adapter-static";
import mdsvexConfig from "./mdsvex.config.js"
import { mdsvex } from "mdsvex"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte", ...(mdsvexConfig.extensions || [])],

	preprocess: [
		vitePreprocess({}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),

		paths: {
			relative: false,
		},

		prerender: {
			entries: ["*"]
		}
	},
};

export default config;
