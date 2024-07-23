import type { Post } from "$lib/types/post";

export async function load({ fetch }) {
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

		// @ts-expect-error This is not properly typed.
		post.content = paths[`/src/blog/${slug}.svelte.md`].default;
	}

	return {
		posts,
	};
}
