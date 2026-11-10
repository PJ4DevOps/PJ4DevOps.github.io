---
title: "Introducing the Moderne DX Edition: Fully air-gapped automated code remediation at scale"
description: "Enables teams with the tightest corporate security controls to reap the benefits of automated code remediation and analysis coordinated across multiple repositories."
author: "Patricia Johnson"
published: 2024-01-11
tags: ["Product"]
originalUrl: "https://moderne.ai/blog/moderne-dx-edition-air-gapped-automated-code-remediation-at-scale"
publisher: "Moderne"
hero: "/writing/moderne-dx-edition-air-gapped-automated-code-remediation-at-scale/6684882d8100cbb93aa85337-65a05d497af70f0bab8c2e6d-devteam.jpeg"
---

The Moderne Platform automates code insights and remediation at scale, enabling you to secure and maintain source code with speed and accuracy across your entire codebase. We are now providing this powerful capability in a highly secure, fully on-premises offering called the Moderne DX Edition. This edition delivers a great developer experience for automatically maintaining and migrating codebases with no internal security hurdles.

You operate the Moderne DX Edition using your own security controls, and all of your data stays on-premises. It includes a centralized, internal service that enables you to coordinate across teams, share and improve recipes, and access reporting. It also leverages the Moderne CLI for developers to work locally on automated code remediation tasks.

See the architecture of the Moderne DX Edition below and read on for more information about how it can become invaluable to your development teams.

![Figure 1. Moderne DX Edition architecture](/writing/moderne-dx-edition-air-gapped-automated-code-remediation-at-scale/6684882d8100cbb93aa85344-6627d68f009627c5a1b7700a-82ac3ea7.png)
*Figure 1. Moderne DX Edition architecture*

## Moderne DX Central Service: Coordinating across organizations

The Moderne DX Central Service is an essential component that you install and configure on-premises, enabling you to coordinate and manage automated code search, remediation, and analysis work across multiple repositories and teams.

Through the Central Service, platform teams can:

- **Provide easy access to [Lossless Semantic Tree (LST)](https://moderne.ai/platform/lst) artifacts**—the code representations that developers work on. It’s about building the artifacts centrally and distributing as needed, which saves compute space and time for individual developers working in the [Moderne CLI](https://moderne.ai/blog/moderne-cli-multi-repo-developer-experience-automated-code-refactoring).
- **Share recipes among developers using the CLI**, as well as collecting feedback on recipe quality. Recipes are rules-based programs that apply specific changes to the LST. These recipes typically include custom ones defined by central platform or security teams that are critical for migrations and updates of specific codebases.
- **Track and report on activity from the CLIs at large**, enabling visibility into the great work development teams are doing (and all the time saved) when automating remediation and migration of the code across repositories. Through the Central Service, you can manage reports, ROI, chargebacks, and so on.

By setting up organizations in the Central Service (using the optional Organization service), you also gain the ability to coordinate and report via your organizational alignment.

You can run the Central Service using an Open Containers Initiative (OCI) image with any OCI runtime such as Docker or Podman or using a Spring Boot executable Java ARchive (JAR) that can be run with Java. Follow the [documentation](https://docs.moderne.io/administrator-documentation/moderne-DX) for more details on installation.

LSTs and recipes are both stored in an artifact repository, which is connected to the Central Service for sharing. Review the documentation for [configuration instructions](https://docs.moderne.io/administrator-documentation/moderne-DX).

## Migration and security use cases for Moderne DX

Platform teams coordinate source code maintenance, migration, and security work with Moderne—potentially across 1,000s of repositories and millions of lines of code.

These platform teams not only use open-source software (OSS) frameworks, they often wrap them in their own internal developer portals (IDPs) or platforms that they maintain. This means that developers are not using Spring Boot, or other frameworks, directly but through these internal wrappers. Platform teams can get development teams to new versions of the platform by distributing custom recipes and other useful OSS recipes through Moderne DX. They also are able to collect feedback from the developers on the quality of recipes, enabling them to improve and optimize the automated updates.

Similarly, for security issues, the central team can publish the required remediation or upgrade recipes for developers to access from the Moderne CLI. They are also able to have visibility into which teams have applied the recipe, allowing them to know and manage the remaining security risk footprint.

Developers can also automate and analyze their own code maintenance and security tasks with the Moderne CLI by accessing multiple LSTs at once through the Central Service. This is useful, for example, when making changes to an API and understanding how that change will impact code across many repositories.

## Connecting Moderne CLIs within Moderne DX

The Moderne CLI is the refactoring engine of the Moderne DX Edition. It enables developers to work efficiently to examine and auto-remediate code on multiple repositories. You configure the Moderne CLI by pointing it to the URL of the Central Service. From a developer’s perspective, though, the Moderne CLI operation is the same whether configured and working with the Moderne SaaS Platform or the Moderne DX Edition.

To learn more about using the CLI, check out our [workshop](https://docs.moderne.io/hands-on-learning/moderne-cli-workshop).

The Moderne CLI can also work with the Moderne IDE integration, which can be an accelerant for authoring and testing transformation recipes in particular. You just have to pick up the Moderne plugin from the [IDE marketplace](https://plugins.jetbrains.com/plugin/17565-moderne).

## Organizing work by organizations in Moderne DX

To manage automated remediation and migration work more effectively, many organizations prefer to structure the work in Moderne through an organizational lens, grouping certain developers with certain code repositories (with specified commit options). To facilitate this need, Moderne provides a template for building this optional Organization service that is hosted in your environment.

You can[ implement this service](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/org-service/) by either configuring the organization membership statically or by querying internal HR systems and returning that information via a standard GraphQL API contract, which specifies the:

- List of organizations that a repository belongs to
- List of organizations that a user belongs to
- Ordered list of commit options available

Then, you will need to configure the Moderne DX Central Service to point to the Organization service you build. For more information, see the [documentation](https://docs.moderne.io/administrator-documentation/moderne-DX).

## What’s the difference between Moderne DX and the Moderne SaaS Platform?

There are clear distinctions between the Moderne DX Edition and the [Moderne SaaS Platform](https://moderne.ai/downloads/moderne-product-brief-automated-code-remediation):

- **Moderne DX** is a *fully on-premises solution* as described in this article, enabling teams with the tightest corporate security controls to reap the benefits of automated code remediation and analysis coordinated across multiple repositories. Code search, transformation, and analysis actions take place solely through the Moderne CLI.
- **Moderne SaaS Platform** is a *horizontally scalable code warehouse* that includes more extensive code management features than those available through Moderne DX, such as code visualizations, codebase intelligence dashboards, AI integrations, and change campaigns. Code search, transformation, and analysis actions can take place through both the SaaS platform and the Moderne CLI.

While organizations may start with the Moderne DX Edition to get up and running quickly under corporate security policies, we do see many of them moving to the [Moderne Platform Enterprise Edition](https://moderne.ai/downloads/moderne-platform-editions-standard-and-enterprise) over time. This enables teams to advance their source code maintenance and security practices even further using our secure, private, single-tenant SaaS environment.

Check out our [product brief](https://moderne.ai/downloads/moderne-dx-air-gapped-automated-code-modernization-at-scale) to see a detailed comparison between the Moderne DX Edition and the Moderne Platform Enterprise Edition.

To learn more about the Moderne DX Edition and what it can do for your organization, [contact us](https://moderne.ai/contact-us).
