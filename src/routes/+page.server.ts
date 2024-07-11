import { XMLParser } from "fast-xml-parser";

const PACKAGE = "com/kotlindiscord/kord/extensions/kord-extensions"
const SNAPSHOTS_URL = `https://s01.oss.sonatype.org/service/local/repositories/snapshots/content/${PACKAGE}/maven-metadata.xml`

export const prerender = true;

export async function load({ fetch }) {
	const response = await fetch(SNAPSHOTS_URL)
	const data = new XMLParser().parse(await response.text())

	const version = data.metadata.versioning.latest as string

	return { version }
}
