export type Project = {
	name: string
	author: string
	license: string | undefined

	botInvite: string | undefined
	serverInvite: string | undefined

	donationUrl: string | undefined
	site: string | undefined
	vcs: string | undefined

	description: string
	shortDescription: string
}

export type Projects = {
	bots: Array<Project>
	libraries: Array<Project>
	tools: Array<Project>
}
