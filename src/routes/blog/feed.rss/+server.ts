import type { Post } from "$lib/types/post";

export const prerender = true

export async function GET({ fetch }): Promise<Response> {
	const response = await fetch("/api/posts.json")
	const posts: Post[] = await response.json();

	let xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">

<channel>
	<atom:link href="https://kordex.dev/blog/feed.rss" rel="self" type="application/rss+xml" />
	<category>Software development</category>
	<description>News and announcements about the project.</description>
	<language>en-gb</language>
	<link>https://kordex.dev/blog/</link>
	<title>Blog | Kord Extensions</title>
`

	for (const post of posts) {
		xml += `
	<item>
		<description>${post.summary}</description>
		<guid>https://kordex.dev/blog/${post.slug}</guid>
		<link>https://kordex.dev/blog/${post.slug}</link>
		<pubDate>${new Date(post.createdDate).toUTCString()}</pubDate>
		<title>${post.title}</title>
	</item>
`
	}

	xml += `</channel>

</rss>
  `

	return new Response(xml, {
		headers: { "Content-Type": "application/rss+xml" },
	})
}
