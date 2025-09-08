---
author: Gareth Coles
title: "Moving to Codeberg"
summary: >-
    We're moving to Codeberg! Let's talk about why.
---

Over the coming weeks and months, we'll be moving all of our projects to Codeberg!
Let's talk about why.

<!--more-->

---

Since the release of ChatGPT in 2022, the world has seen the rise of a rampant growth in generative AI tooling.
As many of our users will be aware, there's no such thing as a free lunch — and this tooling comes at a huge cost, both
literal and otherwise.

As GitHub [becomes directly controlled by Microsoft's AI division](https://www.theverge.com/news/757461/microsoft-github-thomas-dohmke-resignation-coreai-team-transition)
and [engineers are forced to implement AI tools that don't align with their ethics](https://www.msn.com/en-us/news/technology/github-engineer-claims-team-was-coerced-to-put-grok-into-copilot/ar-AA1LuYP4),
we've been thinking about how much we rely on it — and what we can do to lower that reliance.

We've banned using generative AI tools to contribute to our projects since 2023, but now it is time to take things
a step further.

## What Happened?

In 2021, GitHub announced their first technical preview for GitHub Copilot, as an extension for Visual Studio Code.
Initially powered by [the OpenAI Codex](https://en.wikipedia.org/wiki/OpenAI_Codex), Copilot promised to speed up
software development by allowing users to generate code based on simple, natural-language prompts.

It didn't take long for this tool to start generating controversy, when it
[directly copied Quake's fast inverse square root function](https://news.ycombinator.com/item?id=27710287)
with a very incorrect licence.
In 2022, the Software Freedom Conservancy began calling for users to
[Give Up GitHub](https://sfconservancy.org/GiveUpGitHub/), providing detailed reasons to move away, and a list of
resources to help with that.

Fast-forward to 2025, and we can see how this first version of Copilot was a harbinger of what was to follow.
Not only has [GitHub shown how Copilot was trained on open-source GitHub projects without permission](https://github.blog/ai-and-ml/github-copilot/github-copilot-research-recitation/),
but Copilot has become a major focus for Microsoft, even [building the next version of Windows around it](https://windowsforum.com/threads/windows-12-ai-first-modular-security-focused-os-redefining-pcs.379904/).
GitHub has become infested with AI tools, with an intrusive prompt input box on the homepage providing a poor version
of potentially useful tools that should be a core part of the platform, AI generation tools for issues and PRs that
projects can't opt out of, and a deluge of bots that have replaced real, human review with hallucinatory and dangerous
AI-generated code reviews.

When the GitHub CEO announced that he would step down at the end of 2025 and GitHub would be directly controlled by
Microsoft's AI division, we decided that enough was enough, and it was time to leave before the platform became even
more abusive, and our rights under copyright law were infringed upon even more.

## Moving to Codeberg

In June, in the `#make-yourself-heard` channel [our Discord server](https://discord.gg/nYzQWcjAmK), we asked our
community what we should do, and where we should potentially move our projects.
After some discussion, our community members overwhelmingly voted to move our projects to Codeberg — so that's what
we're doing!

As of this blog post, we've set up our own Forgejo Actions runner and finished moving our two template projects
[to our Codeberg organisation](https://codeberg.org/Kord-Extensions).
These projects prove that moving to Codeberg (or another Forgejo host, including potentially our own in the future) is
a viable approach for us, and we'll be working on moving our other projects there over the coming months.

We plan on maintaining GitHub Actions workflows for our template projects, as we understand our users may wish to
continue using it.

Kord Extensions doesn't generate any income as of this writing, and the project owner doesn't have much money,
but we intend on [joining Codeberg e.V.](https://join.codeberg.org/) in the future if this changes, or regular
donations can cover the cost.

## Thanks for being here!

Kord Extensions can only be what it is thanks to its users.
It has been a long and winding road, but one we feel has been incredibly worth travelling, and we intend on continuing
well into the future.

To all users, past, present, and future — thanks for sticking with us!

---

## AI Tool Notes

For those not in the loop, here are some key points about generative AI tooling:

- Generative AI tools do not think or feel. They can't make logical conclusions, often hallucinating their output and
  breaking the rules set out by their prompts.
- Generative AI tools rely on other people's work, and have often been called "copyright violations at scale".
  They can't produce any meaningful output without consuming and training on work made by real people, and AI companies
  often state they must be granted copyright exceptions to be able to continue working.
- Generative AI tools benefit the rich by giving them a reason to fire swathes of people (and replace them with AI),
  and a way to leverage copyright law for themselves while working to remove its protections from regular people.
- Generative AI tools have shown to be incredibly bad for the environment, and companies/governments rushing to take
  advantage of gaps in the market have markedly lowered living standards for already disadvantaged minorities.
- Generative AI tools rely on exploiting all forms of labour without giving back in return, amounting to what some
  workers have described as "modern-day slavery".

### Relevant Links

[//]: # (For whatever reason, I couldn't use a normal Markdown list here. Wtf?)

<ul>
    <li>
        <a href="https://www.bbc.com/news/articles/cy8gy7lv448o">BBC: "I can't drink the water" - life next to a US data centre</a>
    </li>
    <li>
        <a href="https://jskfellows.stanford.edu/theft-is-not-fair-use-474e11f0d063">David Carson: Theft is not fair use</a>
    </li>
    <li>
        <a href="https://www.ft.com/content/f26bda64-1237-4188-8540-210367567089">Financial Times: AI's assault on our intellectual property must be stopped</a>
    </li>
    <li>
        <a href="https://futurism.com/grok-mechahitler-meltdown-xai-government-contract">Futurism: Grok's "MechaHitler" Meltdown Reportedly Cost xAI a Massive Government Contract</a>
    </li>
    <li>
        <a href="https://goodlawproject.org/ai-giants-are-stealing-our-creative-work/">Good Law Project: AI giants are stealing our creative work</a>
    </li>
    <li>
        <a href="https://www.thejournal.ie/investigates-data-centres-6554698-Nov2024/">The Journal: Ireland's data centres turning to fossil fuels after maxing out country's electricity grid</a>
    </li>
    <li>
        <a href="https://www.npr.org/2025/09/05/nx-s1-5529404/anthropic-settlement-authors-copyright-ai">NPR: Anthropic pays authors $1.5 billion to settle copyright infringement lawsuit</a>
    </li>
    <li>
        <a href="https://www.politico.com/news/2025/05/06/elon-musk-xai-memphis-gas-turbines-air-pollution-permits-00317582">Politico: "How come I can’t breathe?": Musk's data company draws a backlash in Memphis</a>
    </li>
    <li>
        <a href="https://societyofauthors.org/2025/03/21/the-libgen-data-set-what-authors-can-do/">Society of Authors: The LibGen data set – what authors can do</a>
    </li>
    <li>
        <a href="https://time.com/7308925/elon-musk-memphis-ai-data-center/">TIME: "We Are the Last of the Forgotten:" Inside the Memphis Community Battling Elon Musk's xAI</a>
    </li>
    <li>
        <a href="https://www.theverge.com/2024/9/12/24242789/meta-training-ai-models-facebook-instagram-photo-post-data">The Verge: Meta fed its AI on almost everything you've posted publicly since 2007</a>
    </li>
    <li>
        <a href="https://www.wired.com/story/low-paid-humans-ai-biden-modern-day-slavery/">Wired: The Low-Paid Humans Behind AI's Smarts Ask Biden to Free Them From "Modern Day Slavery"</a>
    </li>
</ul>
