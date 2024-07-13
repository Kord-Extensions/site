import YAML from "yaml";
import fs from "fs";
import type { Projects } from "$lib/projects";

export const prerender = true;

export async function load() {
	const projects: Projects = YAML.parse(fs.readFileSync("src/projects.yml", "utf8"));

	return { projects };
}
