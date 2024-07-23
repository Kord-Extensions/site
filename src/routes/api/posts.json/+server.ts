import { json } from "@sveltejs/kit";
import { getGitTimes } from "$lib/utils-server";
import type { Post } from "$lib/types/post";

export const prerender = true;

async function getPosts(): Promise<Post[]> {
	const posts: Post[] = [];

	const paths = import.meta.glob(
		"/src/blog/*.svelte.md",

		{ eager: true },
	);

	for (const path in paths) {
		const file = paths[path] as { metadata: object };

		if (file && typeof file === "object") {
			const slug = path
				.replace("/src/blog/", "")
				.replace(".svelte.md", "");

			if (slug && "title" in file.metadata && "summary" in file.metadata) {
				let realSlug = slug

				const data = file.metadata as Omit<Post, "slug">;
				const times = await getGitTimes(path);

				if (times.createdDate) {
					realSlug = times.createdDate.toLocaleDateString("en-CA") + "/" + slug
				}

				const post = { ...data, ...times, slug: realSlug } satisfies Post;

				posts.push(post);
			}
		}
	}

	return posts.sort((first, second) =>
		first.slug.localeCompare(second.slug),
	);
}

export async function GET(): Promise<Response> {
	const posts = await getPosts();

	return json(posts);
}
