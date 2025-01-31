---
author: Gareth Coles
title: "KordEx 2.0.0 - What's Next?"
summary: >-
    Learn about the future of KordEx, and what to expect!
---

As Kord Extensions enters its fifth year, significant changes are on the horizon.
Read this post to learn what's coming, where the ideas came from, and why KordEx is moving in a new direction.

<!--more-->

---

Hello, and welcome to the first post written for this blog.
Please grab a drink and strap in — this will be long!

# A Brief Introduction

I created Kord Extensions on May 7th, 2020.
I had discovered Kotlin only a few months prior and immediately realised it was everything I was looking for.
It felt like Java, but much more fun — with lots of useful features, and without the boilerplate.
As a long-time Python developer, Kotlin's human-friendly approach immediately grabbed my attention.

I quickly noticed that the Kotlin library ecosystem was lacking, aside from Java- and Android-centric libraries.
I had always enjoyed writing Discord bots, and so I set out to find a library I could use to do so, finding
[Kord](https://kord.dev) via
[a Reddit post](https://www.reddit.com/r/Kotlin/comments/gcsq3u/which_wrapper_should_i_use_for_a_kotlin_discord/).

Realising that Kord was more low-level than I'd hoped, I decided to create my own framework, something that I'd enjoy
using to write my own bots — resulting in Kord Extensions.
Inspired by popular Python bot frameworks like [Discord.py](https://github.com/Rapptz/discord.py), I tried to design
something that forced you to think about keeping your code organised, while providing everything you'd need to write
almost any Discord bot.

So far, I think KordEx has met those goals!
However, the last four years haven't been without their challenges, and maintaining a project of this size can be
tough for a sole maintainer.

# Problems?

KordEx is a complex project with many moving parts.
While [Kord](https://kord.dev) underpins the framework and makes a lot of things much easier, KordEx has grown
significantly, to a point where I'm unable to give it as much attention as it deserves.

This isn't the only issue, either:

- Kotlin Discord, a Discord server project I shuttered due to lack of time and energy, still overshadows KordEx due
  to its package - `com.kotlindiscord.kord.extensions`.
- While I've rewritten most of KordEx's documentation on [the new docs site](https://kordex.dev), I haven't yet had the
  time and energy to finish it.
  This means that you still need to read [the old documentation](https://kordex.netlify.app/) to learn about some
  topics, such as internationalisation (i18n).
- Multiple [issues](https://github.com/kord-extensions/kord-extensions/issues) exist that I don't have the correct
  knowledge to solve, and I lack the time and energy to research them.
- My time is steadily draining, as I have to continue focusing on finding a real income and becoming more independent.
- They often say that no programmer is happy with the first few iterations of their projects, and while I don't think
  KordEx needs to be rewritten, some things need changing in ways that will break older bots.

# Solutions!

To address these problems (and more that I haven't talked about), it is time to think about making some changes to the
project.

## Project Structure

The first upcoming changes directly affect the project structure, and in particular the package namespace.

### Package/Maven

Firstly, I'll be changing the root package from `com.kotlindiscord.kord.extensions` to `dev.kordex`.
Bots will need to update their imports and build scripts to account for this, but there's another problem:
Maven hosting.

Additionally, as Sonatype continues to work on their new Maven Central offering, it has become clear that `SNAPSHOT`
releases aren't something they wish to support.
This means that KordEx will ultimately need to move away from OSSRH and Maven Central (at least for `SNAPSHOT`
releases).

The obvious question, then, is "Where do we move it to?"
Right now, I'm talking with the Kord developers about setting up some kind of shared Maven server, which will also
benefit Kord given they also release many `SNAPSHOT` versions.
If this doesn't end up happening, then I'll set up a Maven server myself, and use that instead.

### Gradle Plugin

I've recently published [a Gradle plugin](https://plugins.gradle.org/plugin/dev.kordex.gradle.kordex), and that will
soon become the default way to work with KordEx.
The plugin takes care of setting up the repositories and dependencies for you, so I recommend moving to it as soon as
possible if you're able to.

The plugin is already functional, and you can
[learn how to use it here](https://github.com/Kord-Extensions/gradle-plugins#kordex-plugin).
I'll also update the template project when I have time.

### Module Flattening

The structure used for first-party KordEx modules is a mess and needs to be fixed.
While I do think they still belong in the main repository, I ended up arranging them almost at random:

- `data-adapters` contains one single module, for MongoDB support.
- `extra-modules` contains a set of useful (but hard to discover) functional modules.
- `modules` confusingly contains a set of developer-focused utility modules.
- Library modules that don't depend on KordEx are also present in the main repo.

I'd like to flatten the module layout, moving them to a single subdirectory with a useful naming convention.
Additionally, I want to move libraries that don't need KordEx to their own repositories.

## Data Collection

While there appears to be little doubt that KordEx is a relatively popular framework within its own sphere, the only
concrete stats available are the Maven Central download statistics, which only track stable release versions.
Because KordEx has a snapshot-based release cycle, this isn't very useful.

After a poll and some discussions on [the KordEx Discord server](https://discord.gg/nYzQWcjAmK), I now plan to collect
some data from running KordEx bots and provide public dashboards with anonymised data.
Four levels of data collection will be available, including an option to disable all data collection, and with
multiple ways to configure data collection.

As of this writing, **I haven't yet implemented any forms of data collection.**
However, you can already configure it using [the Gradle plugin](#gradle-plugin) in advance.
**I won't be implementing data collection in any versions older than KordEx 2.0.0.**

### Configuration

Configuration will primarily be done using [the Gradle plugin](#gradle-plugin) I mentioned earlier.
This plugin creates a `.properties` file containing dependency versioning information and your bot's data collection
settings, automatically included in the bot's resources.
Additionally, you will be able to configure data collection settings at runtime via an environmental variable.

### Levels

I plan to support four different levels of data collection:

- **None** – Doesn't collect any data and won't phone home.
- **Minimal** – not associated with an identifier. Includes:
  - Your bot's Kord and KordEx version.
  - Which first-party KordEx modules it is using.
  - Whether it is running in development mode.
- **Standard (Default)** – Associated with the bot's Discord user ID, and submissions replace the data, which I will
  automatically remove after 30 days without submissions. Includes:
  - Everything in **Minimal**.
  - The number of loaded extensions and plugins.
  - The number of guilds the bot can see, but no IDs or guild/member/channel/etc information.
- **Extra** – Associated with the bot's Discord user ID, and submissions replace the data, which I will
  automatically remove after 30 days without submissions. Includes:
  - Everything in **Standard**.
  - The name of the bot.
  - The name and ID of the bot's owning team (if it has one), but no member information.
  - Registered intents and types of registered event handlers, excluding third-party event types.
  - Names of loaded extensions and plugins.
  - Resources (e.g. RAM and CPU) allocated to the JVM and available in the execution context (e.g. Docker container).
  - Event throughput and delay.

I'll also try to figure out a good way to request that your bot's data be removed, and a way to apply for server-side
exclusions.

### Poll Results

I ran a single-choice poll on [the KordEx Discord server](https://discord.gg/nYzQWcjAmK), along with a discussion
thread.
The poll asked, _"Which form of data collection should KordEx use?"_, and the results were as follows:

- **Full – 36%**
- **Standard – 36%**
- Minimal – 21%
- None – 7%

Due to the tie, I felt that defaulting to **Standard** was the best option.

## Funding

KordEx has grown significantly since I founded it, and I feel that it has grown to a point where it requires me to
spend more time on it than I actually have.

Due to a poor job market in my area, it has been more than a decade since my last stable job, and I also have several
disabilities to deal with.
I'd also like to have the money to explore ways to offer more services to KordEx users, and perhaps work on KordEx
full-time – if I'm very lucky.

Before I explain my thoughts, I'd like to make some things crystal clear:
- **Kord Extensions will always be open-source and free for non-commercial use.**
- If I end up making enough money, **excess income will be split between future maintainers, and the Kord project.**

### Option 1: Commercial Use Licensing

The first option we discussed was the possibility of re-licensing Kord Extensions, moving to a viral open-source
licence that would require all bots to be open-source, such as
[the AGPL 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html).

I would pair this with some processes that developers could use to get a licence with more favourable terms:
- Commercial projects would need to pay a set amount every month, likely based on their income or profits.
- Non-commercial (or non-profit) projects would be able to apply for free, after a verification process.

I'm not sure what the pricing model for commercial projects would look like right now, but I'm happy to take
suggestions!

### Option 2: Proprietary Modules

Another idea was the possibility for me to create closed-source, proprietary modules, which would provide blocks of
functionality for KordEx bots — but wouldn't be available for free.
I'd only do this with new, functional modules that directly add features to bots, rather than modules that would be
useful for developers.

I'm not sure what the pricing model would look like right now, although someone suggested the idea of a subscription
model providing access to everything at once.
As always, I'm happy to take other suggestions!

### Option 3: Bot Development Services

The most unlikely option in this section was the idea of providing bot development services, wherein I'd work with
paying clients to create bespoke Discord bots for their communities.

While I feel like I'm in a good spot to provide these services as the sole KordEx maintainer, I realistically don't
think I have the time or energy for this right now.
Still, I've decided to keep the idea around for the future if I happen to change my mind.

### Option 4: Web Advertising/Sponsorships

Another possibility was to attempt to get sponsorships or advertising deals of some kind.
This would likely take the form of accepting contributions via GitHub Sponsors or similar, allowing individuals and
organisations that provide large enough contributions to be listed on the site and on GitHub.

I thought this seemed unlikely at first, but it has turned out to be a surprisingly common approach for many large
projects on GitHub.

### Option 5: Donations

Finally, I decided to list the [donations](https://donate.stripe.com/3csg29aPp95Rgxi7ss) I've been collecting.
While I was always planning to continue to collect donations, I was wondering how many people thought it was an
effective idea — especially since I almost never receive donations.

### Poll Results

I ran a multiple-choice poll on [the KordEx Discord server](https://discord.gg/nYzQWcjAmK), along with a discussion
thread.
The poll asked, _"Which funding options should KordEx use?"_, and the results were as follows:

- **Option 1: Commercial Use Licensing – 25%**
- Option 2: Proprietary Modules – 17%
- Option 3: Bot Development Services – 22%
- Option 4: Web Advertising/Sponsorships – 22%
- Option 5: Donations – 14%

### Conclusions

After some thought (and having read the poll results), I've made the following decisions:

- Continue to collect donations, potentially using a different platform later.
- Think about places to put sponsorship icons, which I'll award to donators with regular, significant contributions.
- Keep the idea of proprietary modules in the back of my mind going forward, but don't prioritise it for now.
- Re-licence Kord Extensions, likely under [the AGPL 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html).
  - Move translations to their own repository (and don't change their licence).
  - Come up with new licences for (non-)commercial uses and figure out pricing, ways to get them, etc.
  - Figure out how any licence changes might affect third-party libraries, integrations with proprietary software, etc.

## Maintainership

As mentioned earlier, KordEx is a large and complex project, and I've been the sole maintainer for four years now.
KordEx has a specific vision in mind, taking design decisions to best meet it — so finding maintainers has been hard.

However, I'm still interested in onboarding more maintainers, and I'd like to find some help with the workload.
I set up a discussion thread on [the KordEx Discord server](https://discord.gg/nYzQWcjAmK), and I'm interested in
hearing about which long-time contributors and community members may want to step up as maintainers.

If you'd like to help out, please do join [the KordEx Discord server](https://discord.gg/nYzQWcjAmK), and chat in the
discussion thread in `#polls`.
Alternatively, if you'd prefer to be an occasional contributor, please consider looking through
[the GitHub issues](https://github.com/Kord-Extensions/kord-extensions/issues), and working on whatever you feel you
may be able to help with.

# Conclusion

While big changes are coming for KordEx, I'd like to remind everyone that it is still the framework that it has always
been, and that it isn't going anywhere, regardless of what happens regarding these plans.

Ultimately, no project can exist without its community, and I can't thank everyone enough for sticking around,
[providing translations](https://hosted.weblate.org/engage/kord-extensions/) or code contributions, making bug reports,
asking support questions, and generally using KordEx in your projects.

We've come a long way.
Here's to another four great years!
