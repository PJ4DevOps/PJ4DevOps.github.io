---
title: "How to modernize at scale: Batch changes and mass PR issuance with Moderne"
description: "Simplify and centralize multi-repository PR issuance and management with Moderne's Batch Changes capability—whether your changes come from CI pipelines, custom containers, or even Sourcegraph."
author: "Bryce Tompkins and Pat Johnson"
published: 2025-04-17
tags: ["Code Modernization", "Product", "Developer Skills"]
originalUrl: "https://moderne.ai/blog/how-to-modernize-at-scale-batch-changes-and-mass-pr-issuance-with-moderne"
publisher: "Moderne"
hero: "/writing/how-to-modernize-at-scale-batch-changes-and-mass-pr-issuance-with-moderne/m-batch-changes.jpg"
---

Modern development teams are under constant pressure to keep codebases up-to-date, secure, and compliant—across potentially hundreds or thousands of repositories. This can include performing framework migrations for multiple apps, upgrading dependencies across hundreds of services, or reacting to security or compliance alerts.

The Moderne Platform is purpose-built to automate large-scale code transformations using OpenRewrite recipes—with the ability to issue and manage pull requests across many repositories as a native part of the platform. At the same time, we recognize that many teams also use their own batch processes to create code diffs. What’s often missing is a centralized way to review those diffs, issue pull requests (PRs), and track them through to merge. Batch processing and PR issuance may sound simple, but what is complex is the interaction with Source Code Management (SCM) systems with multiple layers of rate limits and time outs.

Moderne supports these workflows now with a new Batch Changes capability that provides centralized issuing and tracking of PRs for all changes—enabling you to manage the flow of code updates effectively and at scale. Read on to learn more about Moderne’s new Batch Changes feature and how we simplify multi-repository PR management.

## Moderne Batch Changes: Built for real-world teams and complex environments

Many teams already rely on CI pipelines—like Jenkins, GitHub Actions, and others—to automate code changes and issue pull requests on multiple repositories. Some organizations go further, building specialized internal systems such as custom containerized workflows or batch execution frameworks. All manner of code changes are batched—from dependency updates, code formatting, and license headers to logging standardization, dead code cleanup, and infrastructure configuration updates.

While these tools can execute changes effectively, they often operate in isolation—each with its own PR flow, approval process, and tracking quirks. The result is fragmented visibility, duplicated effort, and manual coordination just to answer basic questions like: *What changed? Where are the reviews stuck? What’s ready to merge?*

Without a centralized way to manage these distributed processes, teams struggle to maintain consistency and momentum. Moderne’s Batch Changes capability addresses this by bringing everything into a single, unified view within the Moderne Platform—regardless of where the changes originate.

Whether your changes come from Jenkins pipelines, Argo-based workflows, or even Sourcegraph batch changes, you can easily hand off diffs to the Moderne Platform via a secure API. The platform handles the rest—issuing PRs, tracking approvals, and managing merges at scale—all while complementing the systems you already have in place.

Moderne works seamlessly with your existing development workflows. You can simply update your existing batch scripts to include a Moderne CLI command, which automatically imports code diffs into the Moderne Platform as soon as they’re available:

**mod batch publish –recipe com.acme.CollectionsSortToListSort       –recipe-name “Prefer List#sort over Collections#sort”       –recipe-description “Migrate java.util.Collections#sort calls to      java.util.List#sort”       –recipe-run ChangeCampaignApr25       . – git diff**

Diffs from individual publish commands using the same recipe run ID are grouped together in the platform. In addition, recipe names and descriptions allow you to provide human readable metadata about batch changes and are required to be the same for all runs with the same recipe run ID. The batch job shows up in Moderne as shown in Figure 1.

Code diffs submitted to Moderne are encrypted with your own managed key (BYOK), in the same way Lossless Semantic Trees (LSTs) are, ensuring your intellectual property is always protected.

![Figure 1. Batch changes imported into the Moderne Platform for PR issuance](/writing/how-to-modernize-at-scale-batch-changes-and-mass-pr-issuance-with-moderne/ad-4nxdccbgnqbubcvx1bx6j3cfdgvjm3wgkddh96ravl83nbh-f4610df1.png)
*Figure 1. Batch changes imported into the Moderne Platform for PR issuance*

From there, you can issue PRs and review statuses across all relevant repositories.

## Centralizing and automating mass pull request issuance with Moderne

At Moderne, [mass pull request issuance](https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides/track-commits/) is foundational to what we do. Built to support automated, large-scale code changes across thousands of repositories, the Moderne Platform enables development teams to go from change detection to mass PR issuance—all within a single platform—now including your existing batch change workflows. The Moderne Platform’s centralized control supports your organization’s standards and policies for code review workflows, CI checks, and merge conditions.

Once batch changes are loaded into the Moderne Platform, they appear just like the results of an OpenRewrite recipe run—fully integrated into the user interface as shown in Figure 1. From there, you can take action on all changes with ease. Moderne supports issuing pull requests with fully customizable commit messages, branch naming conventions, and PR metadata, giving you complete control over how changes are presented and reviewed. Beyond just PRs, the platform also supports direct commits, branch creation, forks, and PRs from forks to accommodate a wide range of organizational workflows and governance models. Figures 2 and 3 show examples of committing and merging batch changes.

![Figure 2. Creating a pull request in the Moderne Platform](/writing/how-to-modernize-at-scale-batch-changes-and-mass-pr-issuance-with-moderne/ad-4nxczpwfveiay2gnqjapfbhaszrnwqdah1paoz8ehddq6ej-a3aa8e75.png)
*Figure 2. Creating a pull request in the Moderne Platform*

![Figure 3. Merging changes directly from the Moderne Platform](/writing/how-to-modernize-at-scale-batch-changes-and-mass-pr-issuance-with-moderne/batch-changes-merge.png)
*Figure 3. Merging changes directly from the Moderne Platform*

Automating PR issuance at scale can be tricky—potentially leading to SCM outages and CI storms, especially when you’re working across hundreds or thousands of repositories. Moderne handles the complexity for you, automating interactions with SCM systems while accounting for rate limits, timeouts, and load distribution. Moderne is designated as a co-author on these PRs, which also allows you to know what PRs are made with automation.

You have access to centralized tracking for all the batch change campaigns, with status and accountability, enabling better coordination across teams and initiatives as shown in Figure 4.

![Figure 4. Tracking commit and PR status in the Batch Changes Activity View](/writing/how-to-modernize-at-scale-batch-changes-and-mass-pr-issuance-with-moderne/ad-4nxex7t0rmbaa-jhkmcy-rlkiiaopqk8ieseog6fy-dvi3j-c380ea48.png)
*Figure 4. Tracking commit and PR status in the Batch Changes Activity View*

Watch the whole process of working with batch changes in the Moderne Platform:

[▶ Watch on YouTube](https://www.youtube.com/watch?v=StNNJp4pL2A)

## Drive PR issuance at scale

Whether you’re issuing 10 or 10,000 pull requests, Moderne makes it easy to deliver, track, and merge changes across your entire codebase—with automation, security, and scale built in. From native OpenRewrite-driven transformations to diffs generated by your own scripts or pipelines, Moderne is your central hub for multi-repo PR management.

With a simple CLI command or API call, your internal systems (like Jenkins or custom containers) can hand off code diffs to Moderne. From there, Moderne takes over—issuing PRs, visualizing the scope of changes, and helping you manage approvals and merges with confidence.

Ready to simplify and scale your change workflows? [Get in touch](https://moderne.ai/contact-us) to see how Moderne can power mass PR issuance across your organization.
