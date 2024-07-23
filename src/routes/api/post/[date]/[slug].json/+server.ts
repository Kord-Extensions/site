import { json } from "@sveltejs/kit";
import type { Post } from "$lib/types/post";
import { getGitTimes } from "$lib/utils-server";

export const prerender = true;

async function getPost(slug: string): Promise<Post | null> {
	const paths = import.meta.glob(
		"/src/blog/*.svelte.md",
		{ eager: true },
	);

	const path = `/src/blog/${slug}.svelte.md`;

	if (path in paths) {
		// @ts-expect-error This is not properly typed.
		const metadata = paths[path].metadata as Post;
		const times = await getGitTimes(path);

		return { ...metadata, ...times } satisfies Post;
	} else {
		return null;
	}
}

export async function GET({ params }): Promise<Response> {
	return json(
		await getPost(params.slug)
	);
}

