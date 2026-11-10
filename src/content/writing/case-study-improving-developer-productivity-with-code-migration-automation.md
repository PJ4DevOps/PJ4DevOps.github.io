---
title: "Case study: Insurer improves developer productivity with code migration automation"
description: "Learn how automated code migration boosts developer productivity by 1,100% and business value by 30%. How did one insurer do it? Dive into our case study."
author: "Patricia Johnson"
published: 2024-01-05
tags: ["Case Studies", "Code Modernization"]
originalUrl: "https://moderne.ai/blog/case-study-improving-developer-productivity-with-code-migration-automation"
publisher: "Moderne"
hero: "/writing/case-study-improving-developer-productivity-with-code-migration-automation/6684882950bb969f5708a559-63db012f88516ff6b19d70b6-47dafb7f.jpeg"
---

This mid-sized insurance company is a provider of automobile, home, and other insurance products in the United States. One of the company’s divisions was struggling to close code maintenance stories without impacting productivity of the development team. Sound familiar?

This largely Java development organization had 20 million lines of code across 1,200 repositories. They were averaging one maintenance project per quarter, often led by the need to remediate security vulnerabilities from their codebase. Maintenance work covered all types of code migration and dependency upgrades of their software supply chain. This work was folded under technical debt in their systems, a category that seemed to be in chronic stasis. It’s hard to make a dent when third-party software updates are never ending.

By adopting the Moderne platform and automating software migrations, this insurance company increased development productivity on all fronts—significantly more maintenance stories completed alongside a 30% gain in business value delivery. They also reframed how they approached code maintenance. Instead of being treated as occasional technical debt projects, maintenance work became a part of their critical everyday work of running a modern software system. Read on to learn more.

> “I just wanted to sing some praises about my experience with Moderne. During my team’s review of our quarterly metrics for the year, we noticed a productivity increase since we started using the Moderne Platform. We’re excited to continue to mature our processes and integrate this further into our pipelines for additional automation.”
>
> — Technical Lead, Underwriting

## Manual code maintenance projects killing productivity

Prior to Moderne, the insurance provider treated software maintenance activities as large projects, with each type of change reflecting a story (one for each repository impacted). For example, in Q2 they had to prioritize a Spring Boot version upgrade to secure their code from the Spring4Shell vulnerability. This was entered as 32 different stories—one per repository. It also required assigning one developer per repository who was the ‘migration expert’ for the update. This was someone familiar with the current Spring Boot version and knowledgeable about the steps needed to upgrade to the secure version.

Because this was all manual effort by the developers, the work was prioritized from the most critical to patch to the least vulnerable code. This one migration effort took three weeks to complete and consumed the entire engineering team, creating significant lag in work that added business value. It was all consuming and reduced their business output, as you can see by the Q2 results in Figure 1. This was a typical problem for their maintenance projects.

## Automated code migration and maintenance with Moderne

In late Q3, the company brought on the Moderne platform to automate their code maintenance and migration work. Because the platform does not require changes to any existing DevOps processes, the company was able to onboard fast and start building out a continuous software modernization practice. By Q4, they were seeing a clear impact on the company’s day-to-day operations.

Instead of a whole development team touching multiple repositories to maintain code, maintenance stories would take a single developer and only a part of a day to have the Moderne platform update code and generate pull requests on their behalf across all the repositories. Then the code would follow the normal workflow to test and deploy. Much of the overhead and work of code migration was handled by the Moderne platform.

Three key ways the Moderne platform has proved invaluable:

1. They gained comprehensive, accurate visibility into their codebase (a better understanding of code and transitive code health) that is actionable through automation, enabling them to make significant, constant progress in code maintenance.
2. The transformation recipes became the migration expert, holding the knowledge of prior software versions and the changes that must be made to upgrade. This reduced the time developers had to spend on onerous migration efforts—particularly the senior developers who often had to drive the projects.
3. They can run migration campaigns centrally across their codebase, automatically updating code wherever there was an identified need. These code changes are then committed and managed through their standard CI/CD process. This creates minimal disruption to the development team’s deeper work.

## Productivity gains on both maintenance and business stories

In Q4, the development team managed to close 384 maintenance stories (12 upgrades times 32 repositories they maintain)—an increase of 1,100 percent from the previous year’s average. When their business partners saw the growing number of maintenance stories being closed, they were initially worried that the development team was prioritizing work on technical debt over feature development. The reality was that they were not only closing more maintenance stories, but they were also more productive adding business value. In fact, they were able to add 40 more business stories in Q4, representing a 30 percent increase in value delivered.

They found that with Moderne’s continuous modernization, their codebase was inherently cleaner to work with. What’s more, since developers weren’t context switching to migration projects every month, they could focus and innovate.

![Figure 1. With Moderne, developer productivity soars for maintenance and business stories](/writing/case-study-improving-developer-productivity-with-code-migration-automation/6684882950bb969f5708a590-63db01e38133af5fd08011ef-e0f02b74.png)
*Figure 1. With Moderne, developer productivity soars for maintenance and business stories*

A side effect of having automation perform software migrations is that the way the company was classifying and reporting maintenance stories no longer worked. When writing maintenance stories per repository, automated maintenance work would show an outsized level of effort. For example, the Q4 results showed the team closing 384 maintenance stories. This led them to change the way they write stories for automated maintenance.

Another change that they have made was to separate true ‘technical debt’ from ‘maintenance’ stories. Upgrades in software versions and their cascading dependencies—something that is outside the development team’s control—are now re-categorized as maintenance. This significantly reduced the black hole of technical debt and the perception of bad coding practices. Instead, they now have a clear way to identify and action the important work of software maintenance.

It’s evident to the organization that Moderne has greatly accelerated the amount of maintenance the team can achieve while being more productive delivering business value. They are focusing Moderne’s automation on maintenance work today, but they see the potential to cover many other areas of their code as they establish their continuous software modernization practice.

Check out the [infographic summary](https://bit.ly/InsuranceCo-CaseStudy) of this case study.

And [contact us](https://moderne.ai/contact-us) to see a demo and learn more about how your organization can benefit from using Moderne.
