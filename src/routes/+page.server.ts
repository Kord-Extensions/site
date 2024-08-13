import { XMLParser } from "fast-xml-parser";
import YAML from "yaml";
import fs from "fs";
import type { Projects } from "$lib/types/projects";
import type { Post } from "$lib/types/post";

const PACKAGE = "dev/kordex/kord-extensions";
const SNAPSHOTS_URL = `https://snapshots-repo.kordex.dev/${PACKAGE}/maven-metadata.xml`;

export const prerender = true;

export async function load({ fetch }) {
	const projects: Projects = YAML.parse(fs.readFileSync("src/projects.yml", "utf8"));

	const postResponse = await fetch(`/api/posts.json`);
	const posts: Post[] = await postResponse.json();

	// This is ludicrous, but it works around Vite's vile dynamic import requirements.
	const paths = import.meta.glob(
		"/src/blog/*.svelte.md",
		{ eager: true },
	);

	for (const post of posts) {
		let slug = post.slug

		if (slug.indexOf("/") != -1) {
			slug = slug.split("/")[1]
		}
	}

	return { projects, posts };
}
