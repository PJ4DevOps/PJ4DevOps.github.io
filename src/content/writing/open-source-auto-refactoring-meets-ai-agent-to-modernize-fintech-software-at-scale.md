---
title: "Banks modernize legacy code at scale with deterministic recipes and coding agents"
description: "How banks and financial firms modernize legacy code without a rewrite: code as data, deterministic OpenRewrite recipes, and coding agents that call them."
author: "Patricia Johnson and Benjamin Stark"
published: 2025-06-20
updated: "October 5, 2026"
tags: ["Code Modernization", "AI/ML"]
originalUrl: "https://moderne.ai/blog/open-source-auto-refactoring-meets-ai-agent-to-modernize-fintech-software-at-scale"
publisher: "Moderne"
hero: "/writing/open-source-auto-refactoring-meets-ai-agent-to-modernize-fintech-software-at-scale/hero.png"
---

The software that runs global finance is tightly interdependent, and much of it is decades old. Every change to it has to be secure, compliant, and traceable.

Coding agents help developers write new code, but they work in a local loop, one developer and one repository at a time. Modernizing a bank’s software means making the same precise change across thousands of repositories and millions of lines of code, in a way auditors can check afterwards.

A bank can do that without a full rewrite by treating its code as data. With Moderne, one migration or security fix can be made the same way everywhere it applies, and coding agents can plan the work and have deterministic programs make the edits. The foundation is [OpenRewrite](https://moderne.ai/openrewrite), the open source automated refactoring framework.

## Fintech modernization needs more than AI code generation.

Legacy architectures have to keep evolving under business pressure, and open source makes that harder. Sonatype’s [2026 State of the Software Supply Chain report](https://www.sonatype.com/state-of-the-software-supply-chain/introduction) found that four vulnerable Java components with published fixes still accounted for nearly 1.8 billion downloads in 2025. Financial firms depend on sprawling dependency trees that change constantly, and a security patch or breaking change upstream can ripple across hundreds of systems.

Doing that work repository by repository doesn’t scale. One [leading global bank](https://moderne.ai/case-study/tackling-technical-debt-at-big-bank-scale) with more than 10,000 developers had tens of thousands of repositories on older JDKs, outdated Spring versions, and custom internal frameworks. Security fixes arrived faster than teams could close them.

Coding agents can’t change that on their own. They generate edits from patterns without live knowledge of the bank’s codebase or dependency versions, so their output still needs manual checking. In Sonatype’s analysis of nearly 37,000 dependency upgrades recommended by a leading LLM, 27.76% pointed to versions that don’t exist. Refactoring across thousands of repositories isn’t what they were built to do.

## Fintech modernization starts with better code data.

What agents lack is a complete, accurate model of the codebase and a repeatable way to change it. OpenRewrite provides both: the [Lossless Semantic Tree (LST)](https://moderne.ai/blog/lossless-semantic-tree-the-complete-code-data-model-for-automated-code-refactoring-and-analysis) and [deterministic recipes](https://moderne.ai/recipes).

The LST is a full-fidelity model of source code, similar to the understanding an IDE has of one project. It captures syntax plus semantic detail: type attribution, formatting, build configuration, and transitive dependencies. Moderne builds and stores an LST for every repository, so a bank can search and change its whole codebase at once instead of one project at a time.

Recipes are programs that analyze and transform the LST. They’re versioned, testable, and auditable, so the same change lands the same way in every file and repository. Teams can also write their own recipes for in-house libraries and frameworks. Whether the job is a Java 25 upgrade, a switch of monitoring frameworks, or a vulnerability fix, the recipe makes the change and the team reviews the result.

## Coding agents get more done when recipes make the edits.

Coding agents such as Claude Code, Cursor, and GitHub Copilot can now call tools as well as write code. Through Moderne, an agent can pick from a catalog of 10,000+ recipes and run it, instead of working out an upgrade path and editing every file itself. The agent handles intent and planning, and the recipe makes the change.

![Existing code in many repositories becomes code as data (LSTs), which an AI agent works with through OpenRewrite recipes and knowledge graphs on a user&#x27;s behalf](/writing/open-source-auto-refactoring-meets-ai-agent-to-modernize-fintech-software-at-scale/code-as-data-architecture.png)
*A coding agent plans the change and calls Moderne’s tools, built from the LSTs, to make it. Developers review the pull requests.*

Moderne also gives agents codebase context they can’t get by reading files one at a time. [Trigrep](https://moderne.ai/moderne-agent-tools/code-search) is type-aware code search over the same LSTs, and [Prethink](https://moderne.ai/moderne-agent-tools/prethink) gives agents pre-resolved context about how a repository is built, so they don’t have to rediscover it every session. (For more on why agents need tools like these, see [AI coding agents need better tools](https://moderne.ai/blog/ai-coding-agents-better-tools).)

For a fintech team, that combination covers four kinds of work:

- **Migrations and modernization:** move to new Java versions, cloud platforms, and tooling without working through every repository by hand
- **Security:** patch known vulnerabilities in direct and transitive dependencies, fix risky code patterns, and find code that exposes PII
- **Regulatory evidence:** show that a change was applied consistently and traceably, in line with internal policy
- **Architecture standards:** keep logging frameworks consistent, remove deprecated APIs, and hold services to approved design patterns

While a script may work once and break the next time, a recipe is reviewed once and reused. That model fits a bank’s architecture governance far better than scripts do.

Watch how BNY uses Moderne to make AI agents more efficient and accurate:

[▶ Watch on YouTube](https://www.youtube.com/watch?v=7GY9oTNPOek)

### How do coding agents fit into an enterprise SDLC?

Agents plan and coordinate the change, and deterministic tools execute it. Through Moderne, an agent runs a recipe across the affected repositories, and developers review and merge the pull requests through the same pipeline as any other change.

## Banks and financial firms already run this pattern.

- [**A leading global bank**](https://moderne.ai/case-study/tackling-technical-debt-at-big-bank-scale) estimates it saved 70 developer-years: 30 each on Java and Spring upgrades, and 10 on OWASP Top 10 remediation, by running OpenRewrite recipes on Moderne across 50,000 repositories. In one rollout, an agent used a recipe to make a Java build cache change across hundreds of repositories over a weekend.
- [**A global financial services company**](https://moderne.ai/case-study/financial-services-leader-improves-security-and-developer-experience-with-automated-code-remediation) now fixes more than 100 critical security issues in a single CI/CD run across hundreds of Java services. Remediation that took weeks of coordination between security, development, and QA now takes hours, and one process covers PCI, SOX, and its internal security domains.
- [**A mid-sized US insurance provider**](https://moderne.ai/case-study/insurance-productivity-with-automated-code-migration) cut a Spring Boot upgrade from three weeks to part of a day. The work once took nearly its entire engineering team and now takes one developer.

## Modernizing a bank’s code no longer means a rewrite.

Many teams feel stuck with architecture decisions made years ago, because refactoring a large application has looked too costly and too risky. With recipes, a migration becomes a program the team can test and rerun, and a coding agent can call it as easily as a developer can.

Recipes don’t stop at the first upgrade. As frameworks release new versions, new recipes from the community, Moderne, or the team itself keep the codebase current, with every change traceable afterwards.

To work with other financial institutions on automating change across large numbers of repositories, join the FINOS [Evolution @ Scale working group](https://devops.finos.org/docs/working-groups/eas/).
