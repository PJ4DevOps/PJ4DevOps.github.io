---
title: "Choice Hotels Java modernization at enterprise scale"
description: "Modernize code at enterprise scale with automation. See how Choice Hotels approached Java upgrades with a playbook built for continuous modernization."
author: "Patricia Johnson"
published: 2026-06-25
tags: ["Case Studies", "Code Modernization"]
originalUrl: "https://moderne.ai/blog/enterprise-java-modernization-choice-hotels"
publisher: "Moderne"
hero: "/writing/enterprise-java-modernization-choice-hotels/choice-hotels-java-25.jpg"
---

[Choice Hotels International](https://www.choicehotels.com/about) has long been a technology pioneer in hospitality. In 1983, it launched the industry’s first global reservation system. Two decades later, it was first to offer a SaaS property management system to franchisees. In 2017, it became the first hotel company to fully rebuild its central reservation system from scratch—100% in Java, deployed on AWS.

Today, Choice Hotels supports 22 global brands, 7,500 franchisee-operated hotels, and more than 650,000 rooms across 46 countries and territories. Behind the scenes, this operation is powered by over 2,300 applications, including 691 Java apps and 4,800 active code repositories.

After the company shut down its last data center, retiring 331 applications in the process, the Choice Hotels engineering team turned to a new challenge: migrate their Java application estate from Java 8 to Java 25, and build a sustainable path to stay modern going forward.

> “We don’t want to be beholden or reactive to vendor roadmaps,” said Jason Simpson, VP of Engineering at Choice Hotels. “We want to be positioned to leverage new technology and release value faster.”

With Moderne as a core enabler of their Java 25 migration (plus so much more), Choice Hotels is proving that modernization at enterprise scale doesn’t have to be incremental and slow, and doesn’t have to stop business in the process.

Get an overview of Choice Hotels’ Java migration from Jason Simpson in his Code Remix Summit session, and read on for all the details.

[▶ Watch on YouTube](https://www.youtube.com/watch?v=YBfwJlmCq58)

## A platform team driving enterprise scale transformation

Choice Hotels’ engineering is organized into 15 different application groups, each supporting critical domains—from reservations and loyalty to data warehouses and property systems. But at the center is a cloud platform team that equips developers with the tools and patterns they need to move quickly and safely.

Stephen Cihak, Senior Director of Cloud Platform, describes their mission:

> “Our job is to help developers go faster, stronger, better. Moderne fits into that mission perfectly.”

Choice Hotels has been a Moderne customer for more than three years—an early adopter that saw the value of automation after facing industry-wide disruptions like the Log4shell vulnerability. What started as a strategic investment in refactoring tools has now expanded into a full-scale modernization initiative across the enterprise.

When facing a company-wide Java migration, the platform team enabled the top-down mandate by providing Moderne automation to development teams as well as Java 25 images and the build, bake, and deploy processes. They also offered guidance, training, and a clear migration plan, all to ensure smooth adoption across the company’s application domains without impacting product delivery.

## Why leapfrog from Java 8 to Java 25?

Previously, Choice Hotels was running the majority of its Java services on Java 8. But with end-of-life deadlines looming, and vendors like Amazon beginning to phase out older runtimes, the company needed to move. Choice Hotels had been through this kind of transition before: the move from Java 6 to 8 took a full year and only covered 50 applications. Repeating that playbook wouldn’t scale.

Instead of moving incrementally through Java 11, 17, or 21, the team made a bold call: go straight to Java 25. Cihak said the team compared the effort of going from Java 8 to 11 with making a bigger jump using a tool like Moderne. “And we realized it was going to be a relatively similar effort—so we made the bolder move.”

Skipping intermediary upgrades meant fewer rewrites, fewer test cycles, and fewer migration waves to coordinate. It also enabled the company to land on a version with long-term support, modern language features, and a fast path to future Java releases.

> “We’re not just upgrading—we’re leapfrogging,” said Cihak. “Moderne made it safe to jump multiple Java versions in a single wave, instead of doing slow, incremental migrations.”

## Automating the Java 25 migration with Moderne

Choice Hotels had already been using Moderne for security vulnerability upgrades and fixes, as well as Spring upgrades across various areas of the company. The Java 25 upgrade reflected the first major use of the Moderne Platform across all their Java apps.

### Prepping for the migration: OpenRewrite recipe readiness

They began with inventory and analysis, using Moderne to assess Java versions, parent POMs, and framework usage across 4,800 repositories. That initial visibility made it easier to align teams and standardize the strategy before any code changes began.

The platform team worked with their Distinguished Engineer, Michael Bennett, and his development team to create the custom recipe set that all teams used. They began with Moderne’s out-of-the-box [OpenRewrite recipes for Java 25](https://docs.openrewrite.org/running-recipes/popular-recipe-guides/migrate-to-java-25) and Spring upgrades, then refined and tested them. These deterministic recipes encode and coordinate transformations that developers would otherwise have to do by hand such as:

- Renaming packages (e.g., javax.* to jakarta.*)
- Updating method signatures
- Migrating deprecated APIs
- Aligning with Spring Boot 3+ conventions
- Resolving transitive dependency conflicts
- Applying consistent code formatting
- Adopting modern language features like text blocks or enhanced switch expressions

The result: fast, repeatable, and safe modernization across hundreds of codebases.

To scale adoption, the platform team provided a developer’s guide, ran workshops with key engineers, and equipped each application group to lead their own rollouts. They also updated CI pipelines, refreshed base AMIs, and validated testing tools for Java 25.

![Figure 1. Choice Hotels’ prep work for Java 25 migration with Moderne (from Code Remix Summit session by Jason Simpson, VP of Engineering, Choice Hotels)](/writing/enterprise-java-modernization-choice-hotels/ad-4nxemkxqhlqgv2gxhqbsmk1llhltqc-tarpo6fwouoho1b6-c18fb72d.png)
*Figure 1. Choice Hotels’ prep work for Java 25 migration with Moderne (from Code Remix Summit session by Jason Simpson, VP of Engineering, Choice Hotels)*

### Running the Java 25 migration: Pilots to full roll-out

With the foundation in place, each application group nominated a lead engineer to pilot the migration. In June, teams began validating the recipes on small sets of services. By August, the rollout was underway in earnest.

Moderne’s deterministic recipes eliminated guesswork, enabling developers to refactor large volumes of code automatically and review safe, structured diffs.  Manish Mehta, a software engineer on the Revenue Management team (which also owns the bulk of the application workloads) stated:

> “Most of the transition—especially moving from javax to jakarta and Spring version changes—was handled by Moderne. It made every developer’s life easier.”

“We expected legacy applications to be a bottleneck,” added Mehta. “But Moderne helped us achieve the migration within our timelines. It was much faster than doing it manually.”

## Automate the common, isolate the edge

While most upgrades were fully automated, a few required custom handling. Test frameworks like PowerMock and EasyMock had to be migrated manually to Mockito. Some applications used internal libraries that had been aged out of Choice Hotels’ internal Nexus repository—causing unexpected build failures. Others were built on unsupported frameworks like Apache Tiles and had to be rewritten entirely.

“We’ve had to go back and update the recipes multiple times,” said Cihak. “You test on a sample of repos, but inevitably, you find edge cases when scaling out.”

Rather than let these blockers slow things down, the team isolated them and moved the rest of the org forward. The platform team also began building automation to continuously flag outdated apps and keep them building cleanly—so that next time, the path is even smoother.

## Choice Hotels’ Java 25 migration outcomes

What used to take weeks per service in prior migrations now happened in parallel across domains. In the first three months, over 200 applications were successfully upgraded. In under a year, nearly 50% of Java services were running on Java 25 in production.

The scope of the migration was substantial:

- 691 total codebases examined for upgrading
- 165 apps determined to not require the upgrade due to near (or past) retirement or not Java (i.e., mis-labeled JavaScript).
- 526 apps in the upgrade queue (with 298 completed to date)
- Legacy and modern Spring applications included
- Major package and framework changes automated using OpenRewrite
- Coordinated rollout across teams using Moderne’s centralized platform

![Figure 2. Comparing scope and productivity of two Choice Hotels Java migrations](/writing/enterprise-java-modernization-choice-hotels/ad-4nxch9vfpxqyp3n-upv1sm7nunonievhj4mff8zvdaywvmt-e6515360.png)
*Figure 2. Comparing scope and productivity of two Choice Hotels Java migrations*

The cloud platform team provided the tools and patterns, while application teams took ownership of running migrations and deploying confidently. Moderne became the hub for central governance and distributed execution for the migration. Instead of performing one upgrade per version across hundreds of services, teams were able to execute a single coordinated transformation with Moderne.

To stay on pace, each domain tracked its own progress. Some teams even got competitive—racing each other to get their services over the finish line. The result: faster execution, fewer disruptions, and significantly less risk of drift or inconsistency among teams.

And most importantly, this Java 25 migration didn’t stop the business. It happened alongside normal feature delivery.

## From migration to modernization muscle

The Java 25 upgrade has already saved hundreds of hours of engineering effort, but its biggest value is what it unlocked for the future.

- Legacy services were brought into compliance and made buildable again.
- Security posture improved with aligned libraries and current runtime support.
- A culture of continuous modernization began to take hold.

> “This started as a version upgrade,” said Cihak. “But it’s really a shift in how we maintain and evolve our software over time.”

Choice Hotels now has a scalable, repeatable playbook for managing large-scale modernization—one that combines deterministic automation, structured rollout, and platform enablement. Whether upgrading to future Java versions, addressing security patches, or removing dead code, modernization does not have to be a reactive, high-cost effort. It can be a continuous, automated process embedded into the company’s platform operations.

Choice Hotels’ experience offers a clear takeaway: you don’t need to modernize code one repo—or one version—at a time. With the help of Moderne, you can execute broad changes confidently and consistently across your entire software ecosystem.

## What other teams can learn about modernizing at scale

Choice Hotels’ journey to Java 25 offers a model for large organizations that want to move faster without compromising stability:

- **Inventory first**: Use data to understand where you are before making changes (and Moderne can help with this!).
- **Don’t be afraid to leap**: With the right automation, multi-version upgrades are achievable—and worth it.
- **Automate the 80%**: Let developers focus on exceptions, not boilerplate refactoring.
- **Track progress visibly**: Empower teams to own their migration with clear metrics.
- **Build for the future**: Treat modernization as a habit, not a hero moment.

What’s next for Choice Hotels? Whatever the next platform shift brings, they’ll be ready—and equipped to handle it at scale with Moderne.

‍[Contact Moderne](https://moderne.ai/contact-us) to learn about how you can automate and manage large migrations like Java, dependency upgrades, security vulnerability remediations, and so much more.
