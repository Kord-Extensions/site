import { defineMDSveXConfig } from "mdsvex";

import remarkExcerpt from "mdsvex-excerpt";
import remarkGfm from "remark-gfm";

import rehypeShiftHeading from "rehype-shift-heading";
import rehypeSlug from "rehype-slug";

import remarkOembed from "remark-oembed";

import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";

export default defineMDSveXConfig({
	extensions: [".svelte.md", ".md", ".svx"],
	smartypants: false,

	layout: {
		"_": "/src/lib/markdown-layout.svelte",
	},

	rehypePlugins: [
		// Header shifting
		[rehypeShiftHeading, { shift: 1 }],

		// Header linking
		rehypeSlug,
	],

	remarkPlugins: [
		// Link embedding
		[remarkOembed, { syncWidget: true }],

		// Markdown linting
		remarkPresetLintConsistent,
		remarkPresetLintRecommended,

		// GFM
		[remarkGfm, { singleTilde: false }],

		// Excerpts
		remarkExcerpt,
	],
});
