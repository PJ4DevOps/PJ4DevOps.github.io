---
title: "From tech debt to tech stack liquidity: A new model for modernization"
description: "Technical debt is continuous. Explore how tech stack liquidity and automated refactoring help enterprises modernize faster, reduce risk, and stay ahead of framework change."
author: "Patricia Johnson"
published: 2025-12-04
tags: ["Code Modernization", "Code Analysis"]
originalUrl: "https://moderne.ai/blog/tech-stack-liquidity-managing-tech-debt"
publisher: "Moderne"
hero: "/writing/tech-stack-liquidity-managing-tech-debt/tech-debt-to-liquidity.jpg"
---

Smart money managers will tell you to eliminate debt so you can move forward. Technical debt feels similar—until you try to pay it down. Unlike financial debt, it re-forms instantly. Every framework release, every CVE, every dependency change adds another layer. Even “clean” code can age overnight.

In fact, the most modern stacks are often the most fragile. Today’s applications are highly composed—built from dozens of open-source libraries with versions that shift constantly. A single Spring Boot change can ripple across thousands of applications. For a global bank running more than 25,000 Spring Boot services, a newly discovered CVE in one of those versions doesn’t lead to instant fixes. Instead, teams scramble to prioritize what to address first, second, and third—leaving many vulnerabilities lingering far longer than anyone wants to admit.

There’s also an economic driver many overlook. Vendors raise prices, change licensing, or tighten support windows. In theory, you should be able to switch to an alternative. In reality, most organizations can’t. Their codebases aren’t liquid enough to move, so what should be a simple vendor swap can instead be stagnation.

The cost of tech debt isn’t just maintenance hours or extended support fees—it’s the opportunity cost of not building the future. It slows innovation, weakens security, inflates operating costs, and traps teams in an endless loop of reactive maintenance. Tech debt isn’t something to eliminate; it’s something to manage continuously. The goal isn’t zero—it’s liquidity.

Let’s explore what tech stack liquidity really means—and how organizations can finally regain the agility to adapt and modernize on their own terms.

## What is tech stack liquidity?

In finance, liquidity describes how quickly you can convert an asset into usable money. Cash is liquid. Real estate, not so much. Liquidity gives you flexibility—the ability to act quickly when opportunities arise.

In software, liquidity works the same way. Tech stack liquidity is your ability to adapt to change—upgrading dependencies, patching vulnerabilities, modernizing frameworks, and shifting technologies without slowing teams down. Instead of a disruptor, modernization becomes a strategic advantage for building your next great product, capability, or AI-driven experience.

Today, most organizations lack this kind of adaptability. Instead, they rely on short-term fixes that only chip away at the edges of debt:

- **Developer-led fixes**—Asking developers to modernize and secure one repo at a time is slow and inconsistent. And AI assistants don’t solve this. Tools like GitHub Copilot are designed for *generating new code*, not for safely refactoring existing logic across thousands of applications. In fact, a [January 2025 GitClear study](https://www.gitclear.com/ai_assistant_code_quality_2025_research) shows a decrease in refactoring and code reuse, and an increase in duplicated code—maybe okay for a single file but problematic when happening across an enterprise codebase.
- **Consultant-driven modernization**—Hiring outside experts might work for a one-off upgrade, but at enterprise scale it can be prohibitively expensive and painfully slow. One bank estimated that upgrading 15,000 codebases to Java 21 would take 50,000 hours—the equivalent of 25 full-time consultants. And that effort would only solve today’s debt, while new debt continues to accumulate tomorrow.

The reality is clear: software has been industrialized, and its maintenance must be industrialized too. Without systemic automation, organizations cannot achieve the liquidity they need to keep up with change.

## Case in point: Large bank stuck with a vulnerability

What should have been a routine patch of a single vulnerable dependency to satisfy an auditor actually required a full stack migration touching thousands of applications. This bank wasn’t just behind—they were stuck because:

- The fix for the vulnerable dependency required Java 17.
- Java 17 couldn’t be adopted because the estate was pinned to Java 8.
- Java 8 couldn’t be upgraded because 3,000 apps were running on WebSphere Traditional (also known as WAS), which required Java 8.

But the reality was even more complicated. An intermediate step of moving from WebSphere Traditional to IBM’s modern, modular WebSphere successor, Open Liberty, would be a significant change in its own right. Instead, the bank wanted to modernize directly to a containerized Tomcat environment, making a strategic shift toward microservices and cloud-native operations. That move also meant replacing WebSphere MQ—tightly coupled to WebSphere Traditional—with RabbitMQ, their new enterprise messaging standard. Even the first step required untangling years of architectural decisions. This was nowhere near a simple fix.

Fixing one thing can become an archaeological dig through a decade of accumulated decisions—each layer blocking the next. This is the real cost of falling behind: when even a small vulnerability forces a multi-year modernization program. Without automation and tech stack liquidity, organizations can’t move fast enough to mitigate risk, and every delay compounds cost, pressure, and exposure at precisely the moment they need to move fastest.

![](/writing/tech-stack-liquidity-managing-tech-debt/d1df4c85.png)

## Why mass-scale automation is essential

Traditional modernization approaches treat codebases like siloed projects—fixing one application, one repository, one dependency at a time. But in today’s enterprise environments, that’s not how change happens. When a framework like Spring Boot introduces a breaking change, or when a vulnerability is discovered in a widely used library, the impact isn’t isolated—it ripples across hundreds or thousands of applications simultaneously.

This is why mass-scale automation is essential. Built on the OpenRewrite refactoring framework, Moderne enables horizontal change—automated modernization that spans thousands of repositories and billions of lines of code at once. Instead of upgrading one application while the rest of the estate drifts further out of date, organizations can modernize across the board, in parallel, and keep the entire stack aligned. What once took months of expensive, piecemeal work can now be completed cohesively at scale.

![](/writing/tech-stack-liquidity-managing-tech-debt/baec8977.png)

At the core of this capability is Moderne’s [Lossless Semantic Tree (LST)](https://moderne.ai/platform/lst)—a next-generation code data model that captures not just text, but also the structure, semantics, and relationships embedded in code. Paired with deterministic recipes, the LST gives enterprises the power to remediate vulnerabilities, update dependencies, and enforce best practices consistently across all repositories, not just one at a time. Moderne executes transformations with the same accuracy every time, across every repository.

This shift from vertical, app-by-app fixes to horizontal, system-wide transformation is what makes liquidity possible. Instead of a fragmented, reactive approach, organizations gain the ability to adapt continuously—keeping their entire tech stack secure, modern, and ready for the future.

## Keeping pace with framework upgrades

Technical debt doesn’t just come from messy code—it comes from the relentless pace of change in the frameworks and platforms your business depends on. Even “perfect” code written today will age as frameworks evolve, security vulnerabilities emerge, and best practices shift. Staying current isn’t optional; it’s essential to remain competitive.

Framework upgrades are a prime example. Every new release introduces more than patches—it brings performance improvements, stronger security, and capabilities that unlock developer productivity.

Take [Java 25](https://moderne.ai/solutions/java-upgrades-and-modernization) as an example. It’s the latest Long-Term Support (LTS) release, and it’s a milestone many enterprises are targeting. LTS releases are the versions that organizations standardize on, since they promise years of stability and vendor support. Java 25 introduces new language features, concurrency improvements, and big performance optimizations that will shape the ecosystem for the next decade. Falling behind means missing out not only on innovation, but also on security patches and ecosystem compatibility.

Spring Boot illustrates the same challenge. With a major or minor release roughly every six months, and support windows often just 12–18 months, organizations can’t afford to lag. The jump from 2.x to 3.x was massive, requiring Jakarta namespace changes, new dependency versions, and removal of deprecated APIs. Without automation, even a single upgrade cycle can consume months of developer time. [Spring Boot 4](https://moderne.ai/blog/spring-boot-4x-migration-guide) is already here, setting a major new baseline in the Spring ecosystem.

That’s why industrialized automation is essential. Moderne’s recipes can encode thousands of individual upgrades (aligning framework and dependency upgrades), turning what would otherwise be months or years of manual effort into days or weeks. Enterprises can align with each new release confidently, without sacrificing innovation cycles. If your organization is more risk-averse or deeply behind, you can modernize one version at a time. If you’re ready to leap forward, recipes can take you across multiple versions in a single, safe, automated pass. You choose the pace; automation handles the complexity.

In practice, this means that keeping up with Spring Boot’s cadence or preparing for Java 25 goes from a fire drill to a continuous, automated discipline. And with that, organizations gain true tech stack liquidity: the ability to adapt as fast as the frameworks that power their business evolve.

## Tech replacement: The hardest test of liquidity

Upgrading within a framework—say from Spring Boot 3.5 to 4.0—is an essential part of staying current and secure. But the real test of tech stack liquidity comes when an organization must move from one technology to another altogether.

This kind of modernization happens for a few common reasons:

- **Vendor cost hikes**—A platform or tool raises licensing or support fees, suddenly consuming millions from the IT budget. Organizations get stuck, dreaming of lower-cost alternatives to protect margins.
- **Obsolescence**—Legacy databases, application servers, and frameworks eventually reach end-of-life. Unsupported technologies carry unacceptable security and compliance risks, forcing a migration.
- **M&A**—After big org shifts, like in a merger and acquisition, consolidation eventually happens. Maintaining multiple platforms for the same function creates duplication in licensing and infrastructure. Rationalizing to a single modern stack can cut costs dramatically and simplify operations.
- **Strategic shift**s—A move to cloud-native or container-based architectures can require new runtimes, orchestration layers, and development frameworks.

A long-time Moderne customer amplifies this: “We don’t want to be beholden or reactive to vendor roadmaps,” said [Jason Simpson, VP of Engineering at Choice Hotels](https://moderne.ai/blog/enterprise-java-modernization-choice-hotels). “We want to be positioned to leverage new technology and release value faster.”

Consider a real example: moving from Oracle WebLogic to a lightweight, modern runtime like Jetty or Tomcat. This can involve cross-repo code changes, replacing WebLogic-specific APIs and configuration, rewriting application and server config, aligning with modern Jakarta EE or Spring-based standards, and updating deployment and operational models for Kubernetes. For enterprises running hundreds of legacy Java applications, this transition can take years when tackled one application at a time.

With automation and tech stack liquidity, organizations can execute these migrations horizontally across their entire portfolio—with far greater consistency and confidence, and significantly less time. When you can replace a major technology across hundreds of services without grinding the business to a halt, modernization stops being a crisis and becomes a capability.

Now your organization can pivot quickly instead of being trapped by yesterday’s choices.

## The endgame: Turn modernization into momentum

If you want to understand the real impact of technical debt, start by looking at where your time, risk, and opportunity are going today.

- **How much capacity is your engineering organization spending on code maintenance?** Multiple industry studies put that number between 30–45% of total engineering time, with some large enterprises reporting even higher. That means nearly half of your development capacity is tied up in patching, upgrading, or working around aging code instead of building new value.
- **What security risks are embedded in your stack?** Third-party dependencies remain one of the largest and fastest-growing attack surfaces in modern software. According to Snyk and Synopsys data, roughly 75% of application vulnerabilities originate in open-source libraries, and the average enterprise application contains hundreds of transitive dependencies—many of them outdated or unmaintained. The longer you stay behind, the harder it becomes to defend.**‍**
- **What is the business cost of running on older frameworks and libraries?** Outdated technology slows teams down, increases build and runtime instability, limits access to new platform features (such as Java 25’s performance and security improvements), and blocks the path to building AI-native products. Modernization friction shows up directly in KPIs: slower release cycles, rising incident volume, degraded developer experience, and product teams unable to deliver what the business needs.

Technical debt isn’t just a software problem—it’s a competitiveness problem. The organizations that win are the ones that can adapt quickly, consistently, and safely. That requires more than heroics from developers or AI coding assistants. It requires industrialized modernization: automated, scalable, and rooted in rich, deterministic code data.

Moderne’s approach to future-proofing your software helps ensure a competitive edge.

Learn 7 ways tech stack liquidity changes how you think about tech debt:

![](/writing/tech-stack-liquidity-managing-tech-debt/tsl-vs-tech-debt.png)

[](https://info.moderne.ai/tech-stack-liquidity-vs-tech-debt)
