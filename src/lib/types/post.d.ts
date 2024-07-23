export type Post = {
	createdDate: Date | undefined,
	modifiedDate: Date | undefined,

	author: string,
	summary: string,
	slug: string,
	title: string,

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any | undefined,
}
