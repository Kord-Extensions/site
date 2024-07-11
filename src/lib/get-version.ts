import axios from "axios";
import { XMLParser } from "fast-xml-parser"

const PACKAGE = "com/kotlindiscord/kord/extensions/kord-extensions"
const SNAPSHOTS_URL = `https://s01.oss.sonatype.org/service/local/repositories/snapshots/content/${PACKAGE}/maven-metadata.xml`

async function getLatest(url: string) {
	const response = await axios.get(url, { responseType: "text" })
	const data = new XMLParser().parse(response.data as string)

	return data.metadata.versioning.latest as string
}

export async function getVersion() {
	return getLatest(SNAPSHOTS_URL)
}
