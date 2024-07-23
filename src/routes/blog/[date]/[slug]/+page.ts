import { error } from "@sveltejs/kit";
import type { Post } from "$lib/types/post";

export async function load({ params, fetch }) {
	const response = await fetch(`/api/post/${params.date}/${params.slug}.json`);
	const serverMetadata: Post | undefined = await response.json();

	try {
		// This is ludicrous, but it works around Vite's vile dynamic import requirements.
		const paths = import.meta.glob(
			"/src/blog/*.svelte.md",
			{ eager: true },
		);

		const post = paths[`/src/blog/${params.slug}.svelte.md`];

		// @ts-expect-error This is not properly typed.
		const metadata = serverMetadata || post.metadata;

		if (
			metadata.createdDate &&
			(metadata.createdDate instanceof String || typeof metadata.createdDate === "string")
		) {
			metadata.createdDate = new Date(metadata.createdDate);
		}

		if (
			metadata.modifiedDate &&
			(metadata.modifiedDate instanceof String || typeof metadata.modifiedDate === "string")
		) {
			metadata.modifiedDate = new Date(metadata.modifiedDate);
		}

		return {
			// @ts-expect-error This is not properly typed.
			content: post.default,
			post: metadata,
		};
	} catch (e) {
		error(404, `Could not find ${params.date}/${params.slug}`);
	}
}
