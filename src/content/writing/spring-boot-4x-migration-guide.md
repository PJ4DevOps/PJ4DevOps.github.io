---
title: "How to speed and scale your Spring Boot 4 migration"
description: "Upgrade to Spring Boot 4 faster and with less risk. Learn how OpenRewrite and Moderne automate Java, Jakarta, Spring Framework, and dependency changes at scale."
author: "Pat Johnson"
published: 2025-11-20
tags: ["Code Modernization", "OpenRewrite", "Engineering"]
originalUrl: "https://moderne.ai/blog/spring-boot-4x-migration-guide"
publisher: "Moderne"
hero: "/writing/spring-boot-4x-migration-guide/spring-boot-4-migration2.jpg"
---

A new day. A new baseline for the Spring ecosystem. Spring Boot 4.0 is here, and the question is simple: where does this leave your services? The 4.x line ushers in another evolution across the Spring ecosystem, and for many teams it feels like the biggest modernization push since the jump from Spring Boot 2.x.

Upgrading to 4.0 is not just about updating Spring Boot. It reaches into your Java runtime, testing stack, build plugins, and any part of your codebase still tied to older APIs or namespaces. Spring Framework 7, Jakarta EE 11 alignment, the Java 17 baseline (Java 25 even better), Jackson 3.x, JUnit 6, and a long list of dependency shifts all arrive at once. Most organizations also run multiple versions of Spring, Jakarta, Jackson, and the JDK across hundreds or thousands of services, which makes the path forward even more complex.

The good news is that migration doesn’t have to be painful. With predictable, automated upgrades behind the scenes, you can move to Spring Boot 4.0 confidently and at scale. Read on to see how OpenRewrite and Moderne make this possible—even across your entire organization.

## Why migrate your services to Spring Boot 4

It’s tempting to think “if it’s not broken, why fix it?” Aside from the inherent benefits of staying current—stronger security posture, lower support costs, and easier long-term maintenance—Spring Boot 4 represents a leaner, more powerful framework with capabilities that developers dream about.

Upgrading isn’t just about keeping up; it’s how your services take advantage of the latest performance, productivity, and cloud-native improvements across the ecosystem:

1. **Adopt modern Java capabilities.** With Java 17 required and Java 25 recommended, teams see faster runtimes, better GC behavior, modern language features, and high-throughput concurrency via virtual threads.
2. **Boost performance and startup.** Continued Ahead-of-Time (AOT) compilation and native-image improvements deliver up to 3x faster startup and ~40% lower memory usage—ideal for microservices, containers, and serverless workloads.
3. **Run more workload with less effort.** Virtual threads enable handling massive request volumes (10,000+ concurrent operations) without reactive rewrites or thread-pool exhaustion.
4. **Strengthen security.** Older Spring Boot and Java lines lose OSS support and security patching (e.g., Spring Boot 3.4 support ends December 2025; 3.5 ends June 2026). Spring Boot 4.0 places your services on current, actively maintained baselines.
5. **Increase the modularity of your services and reduce artifact size.** Spring Boot 4 renders the heavyweight generic parent obsolete. Only pull in the dependencies you need by using the starters from 70+ options. Reducing surface for CVEs from dependencies is a welcome byproduct.
6. **Resolve ‘the billion-dollar mistake’ with null safety.** The Spring Team made their null handling explicit at the API level using JSpecify. Your team can do the same by adopting the annotations to eliminate surprise (and debilitating) `NullPointerExceptions` in production.
7. **Improve observability.** With Micrometer 2 and Actuator 4, Spring Boot 4 unifies metrics, logs, and traces with minimal setup—get clearer visibility into service behavior, faster incident diagnosis, and more reliable operations.
8. **Be cloud-native by default.** Built-in Kubernetes probes, ConfigMaps, Secrets, and unified telemetry reduce the need for custom wiring and make deployments more predictable.
9. **Future-proof your AI strategy.** Aligning with Spring Boot 4 ensures compatibility with the rapidly evolving Spring AI ecosystem, preventing architectural dead ends as AI becomes a first-class requirement.
10. **Reduce long-term operational drag.** Upgrading now establishes a clean, consistent foundation and ecosystem alignment—and reduces the surface area of outdated APIs that slow teams down over time.

## Tech to upgrade for Spring Boot 4.x migration

The Spring Boot 4.x migration introduces new baselines for Java, Jakarta, Spring Framework, testing, serialization, and major third-party libraries. Understanding the breadth of these changes helps prevent surprises as you upgrade large portfolios with years of version drift.

### Required platform upgrades (affecting every application)

Before tackling application-specific changes, it’s important to understand the core platform shifts that arrive with Spring Boot 4.x. These upgrades affect every service and form the foundation of a successful migration:

- **Java 17 minimum (Java 25 recommended)** – Spring Boot 4.x requires Java 17. Most teams target Java 25 to unlock better runtime performance, improved GC behavior, modern language features, and the latest virtual-thread enhancements. Older JDK APIs and reflective-access patterns must be removed as part of the upgrade.
- **Jakarta EE 11** – Spring Boot 4 moves to Spring Framework 7, which removes the final compatibility layers. Applications and third-party libraries must fully align with Jakarta EE 11 (jakarta.* namespaces for servlet, validation, JPA, messaging, JSON-B, and more).
- **Spring Framework 7** – Framework 7 introduces updates across WebFlux, MVC, Micrometer Tracing, HTTP client behavior, configuration validation, and bean lifecycle rules. Shared organizational starters require careful review.
- **Jackson 3.x** – A breaking upgrade: removed annotations, stricter type handling, module consolidation, and changes to `ObjectMapper` behavior affect any custom serialization logic.
- **JUnit 6** – Updated annotations, lifecycle methods, and extension APIs. Older testing utilities and slice annotations are removed.

### Deprecations and removals in Spring Boot 4.x

Spring Boot 4.x removes a large portion of APIs deprecated across the 2.x and 3.x lines. In total, 36 deprecated classes—roughly 88% of all deprecations—have been removed.

Key removals include:

- `MockBean` and `SpyBean`, deprecated in 3.4 and removed in 4.0 (replacements introduced in 3.5).
- Deprecated configuration keys across actuator, security, web, data, messaging, and server.
- Legacy security configuration, including `WebSecurityConfigurerAdapter`.
- Outdated MVC/WebFlux APIs and message conversion paths.
- Spring Data repository base class variants.
- Legacy embedded server utilities and outdated starter dependencies.

### Spring ecosystem compatibility

Many Spring modules require updated versions aligned to Spring Framework 7 and Jakarta EE 11. Areas to review:

- **Spring Data** – Updated repository behavior, query derivation adjustments, Jakarta alignment across all modules (JPA, JDBC, MongoDB, Redis, Neo4j, R2DBC).
- **Spring Security** – Fully component-based configuration; older OAuth/OIDC/SAML patterns removed.
- **Spring Cloud** – Config, Gateway, Discovery, Observability components require updated release trains.
- **Spring Integration & Spring Batch** – Updated adapters, DSL enhancements, Jakarta-based artifacts.
- **Spring for GraphQL** – Updated schema mapping, error-handling logic, and WebFlux transport behavior.
- **Spring AI** – Evolving rapidly; requires updated WebClient/WebFlux behavior and modern runtime defaults.

Spring Boot 4.x provides the foundation these libraries are being built on, so upgrading ensures long-term compatibility across the full Spring stack.

### Major external ecosystem upgrades (if used)

These upgrades may apply depending on your organization’s architecture:

- **Elasticsearch 9** – The client and API surface have changed significantly. Index management, query composition, serialization, and transport behavior may require updates, especially for applications still using older REST clients or custom query DSLs.
- **Kafka 4.1** – Introduces protocol, security, and client changes. Spring for Apache Kafka has aligned its abstractions, which means older consumer/producer configurations, listener container settings, and custom serializers may require updates.
- **Hibernate 7** – Full Jakarta EE 11 alignment. Changes to entity lifecycle, fetch behavior, and SQL generation. Deprecated Hibernate configuration keys.
- **JSpecify** – Nullness metadata supported across APIs. Organizations that rely on strict static analysis or platform-enforced coding standards can take advantage of improved nullability signals and safer APIs.

These ecosystem shifts can present real-world friction, since applications and internal libraries may rely on older behaviors or extension points.

Check out our quick reference for Spring Boot 4.x migration and tech alignment.

![](/writing/spring-boot-4x-migration-guide/screenshot-2025-11-19-at-4-03-06-pm.png)

[](https://info.moderne.ai/spring-boot-4-migration-reference)

<aside class="post-note"><strong>See the full Spring Boot migration workflow</strong> <a href="https://moderne.ai/on-demand-webinars/preparing-for-your-next-spring-boot-migration">Watch the training</a> →</aside>

## Migrating to Spring Boot 4.x with OpenRewrite recipes

For a migration like Spring Boot 4, the challenge is not any single change—it’s orchestrating all of them consistently and safely across every service, team, and repository. That’s where automation becomes essential.

OpenRewrite is a semantically-aware code search and transformation ecosystem. It is capable of making sophisticated, deterministic changes to code, build files, and configurations that are idiomatically consistent with the existing project’s formatting standards.

The OpenRewrite library of automated upgrade recipes applies consistent, safe, and repeatable changes, helping developers and organizations make the shift to newer Spring Boot versions regardless of your starting point. Each recipe encodes a specific transformation—updating dependencies, migrating deprecated APIs, adjusting configuration keys, or rewriting code constructs to newer patterns.

### Composite recipes: The foundation for large-scale migrations

OpenRewrite deterministic recipes are composable, which is how large, multi-step migrations become predictable. Migrations for Java, Jakarta, Spring Framework, and Spring Boot are built by chaining together many smaller, purpose-built recipes.

A composite migration recipe like “[Migrate to Spring Boot 4.0](https://codegenomeproject.org/recipes/io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0)” includes:

- All the Spring Boot migrations before it (e.g., it includes the Spring Boot 3.5 migration, which includes the 3.4 migration, and so on)
- A [Java 25](https://docs.openrewrite.org/running-recipes/popular-recipe-guides/migrate-to-java-25) upgrade recipe
- A Jakarta EE 11 migration recipe
- A Spring Framework 7 API update recipe
- A Jackson 3.x compatibility recipe
- A [JUnit 6](https://codegenomeproject.org/recipes/org.openrewrite.java.testing.junit6.JUnit5to6Migration) upgrade recipe
- Move from generic parent to only needed modules
- Migrate to JSpecify and annotate fields that are provably never null
- Build-file updates for Maven or Gradle
- Configuration key migrations
- Removal and replacement of deprecated APIs
- Optional organization-specific hardening or policy rules

Each of these steps is independently tested, versioned, and applied consistently across every service. That makes composite recipes both predictable and easy to evolve as new changes arise. And any of the recipes also can be customized, for example, if you have a different best practice than what a recipe prescribes.

![](/writing/spring-boot-4x-migration-guide/bf65e539.png)

Teams can also use composite recipes selectively, applying only the pieces they need when full migration isn’t feasible yet. For example, without moving immediately to Spring Boot 4.0, a team could:

- Migrate to an earlier version of [Spring Boot](https://moderne.ai/blog/speed-your-spring-boot-3-0-migration) (e.g., if you are moving from 2.7 and want to move to 3.x)
- Migrate to [Java 21](https://docs.openrewrite.org/running-recipes/popular-recipe-guides/migrate-to-java-21)
- Migrate JUnit versions
- Adopt recommended Spring Security configuration patterns
- Apply best-practices for Spring Boot 2.x or 3.x
- Update Jackson usage or unsupported APIs
- Modernize configuration files

This incremental approach reduces the surface area of a future full migration.

### Automated and safe code transformations

OpenRewrite’s [Lossless Semantic Tree (LST)](https://moderne.ai/platform/lst) model enables code changes that remain structurally correct and format-preserving. This means:

- New imports follow your project’s formatting and ordering conventions
- Deprecated APIs are replaced safely and consistently
- Complex structural changes (like removing legacy security adapters) maintain indentation and style
- Configuration updates preserve comments and context

Refactorings that would normally require careful review become reliable and repeatable.

For Spring Boot 4, deterministic recipes can transform everything from straightforward Maven or Gradle build file dependencies to the shift of dependency structure from monolithic to modular. See the example below of how a recipe handles the change from the single monolithic starter that pulled in more dependencies than required to the Spring Boot 4 fully modular set of starters reflecting only the dependencies actually used:

![](/writing/spring-boot-4x-migration-guide/55491b04.png)

### Getting to know the OpenRewrite recipe marketplace

There are thousands of different recipes like the Spring Boot migrations currently available in the [recipe marketplace](https://codegenomeproject.org/recipes), with more being added as the project continues to grow.

The OpenRewrite core framework is OSS and Apache licensed. This allows framework authors to provide free Apache-licensed migrations to their consumers (for example, Quarkus and Micronaut). However, organizations can also provide proprietary recipe packages and custom recipe authorship services to fill in the gaps. Moderne not only created OpenRewrite, but the company also spends significant time developing recipes for the community and for our customers.

There are two distinct recipe modules available to aid your Spring Boot migrations:

- `Org.openrewrite.recipe:rewrite-spring` includes basic recipes that are community maintained and available for free.
- [Moderne proprietary recipes](https://codegenomeproject.org/recipes?license=proprietary) available to users of Moderne provide broad and deep coverage for migrating the Spring Boot ecosystem, encompassing thousands of potential steps, including Spring Boot 4.x now.

It’s also possible to create your own [custom recipes](https://docs.openrewrite.org/running-recipes/customize-recipe) and then apply those recipes to your projects to perform safe, automated refactoring that will save you and your team hours of work that would normally have to be applied by hand.

## Migrating and collaborating at scale with Moderne

Upgrading to Spring Boot 4.x isn’t just a code change—it’s a coordinated effort across platform teams, application teams, and security and architecture stakeholders. Moderne provides the shared visibility, orchestration, and refactoring capabilities required to move an entire engineering organization forward together.

### DevCenter: All-org visibility, tracking, and coordination

Moderne’s [DevCenter](https://moderne.ai/blog/new-moderne-devcenter) gives teams a unified control center for understanding the full scope of the Spring Boot migration across hundreds or thousands of repositories. Teams can see:

- How many repos are running each version of Spring Boot and migration progress
- How many places Jakarta, Jackson, or JUnit are still used, and what version
- What security vulnerabilities still exist across the codebase

Instead of chasing spreadsheets or status meetings, Moderne provides real-time visibility into progress, blockers, and remaining work. Platform teams can coordinate migration waves, while application teams can focus only on their relevant services.

![](/writing/spring-boot-4x-migration-guide/image-46.png)

### Recipe Builder: Your organizational migration playbook

Recipe Builder allows platform and architecture teams to construct, visualize, and version composite recipes that represent your organization’s upgrade playbook.

For complex migrations like Spring Boot 4.x, Recipe Builder helps teams:

- Combine official OpenRewrite recipes with internal standards or constraints
- Customize the sequence across Java, Jakarta, Spring Framework, Jackson, and JUnit upgrades
- Add organization-specific rules for logging, observability, security, or custom frameworks
- Iterate safely before rolling out changes across the portfolio
- Publish playbooks for application teams to run self-serve—establishing a repeatable pattern: define once, run everywhere

![](/writing/spring-boot-4x-migration-guide/58e827c2.png)

### Managing pull requests at scale (pull or push workflows)

Moderne generates consistent, transparent pull requests across all repositories, each driven by the same deterministic transformations. The question is how teams execute those changes.

**Pull-based workflow (team-driven)**

- Platform teams publish the migration bundle.
- Application teams pull the changes when ready (often the preferable option).
- Teams review diffs, test locally, and merge on their timeline.
- Ideal for larger, more complex migrations, particularly with teams that have autonomy and varied release cadences.

**Push-based workflow (coordinated wave)**

- Platform teams run the migration across all repos.
- Platform teams open PRs.
- Teams receive ready-to-review updates without soliciting them.
- Ideal for time-sensitive security, compliance, or architecture-driven migrations that are small and easy to review.

Regardless of whether teams adopt a pull-based or push-based workflow, Moderne centralizes modernization campaigns, showing teams the true impact of an upgrade effort across every service. After all, PRs tell only part of the story. A merged PR doesn’t guarantee that the intended changes actually remain in the codebase—and a closed PR doesn’t mean the migration never happened. Teams rebase, squash, modify, and sometimes partially undo changes as they work. The only reliable way to measure real migration progress is to periodically rerun your recipes and the DevCenter dashboards against the source of truth: your actual repositories.

What was once a chaotic, manual upgrade process becomes structured, observable, and far easier to manage across an entire engineering organization.

## How platform teams can ease Spring Boot 4.x upgrades for developers

Many large organizations build an internal platform layer on top of Spring Boot: a curated starter, a standardized build configuration, a base dependency bill of materials, or a framework of organization-specific conventions. These wrapper layers are powerful, but they also mean that a Spring Boot upgrade is never just a Spring Boot upgrade. Centralized teams are responsible for updating the foundation, validating compatibility across shared libraries, and ensuring every downstream service can adopt the new version safely. This requires coordinating changes across potentially hundreds of consumer teams.

This is where recipe-driven modernization changes the game.

With OpenRewrite and Moderne, central teams can provide a predictable, consistent upgrade path for every service built on their internal Spring Boot platform—without disrupting developers or slowing delivery. Instead of asking hundreds of services to interpret documentation, central teams can:

- Update the organization’s Spring Boot baseline once and publish it as a curated recipe bundle.
- Encode required API changes, namespace migrations, configuration updates, and dependency shifts into custom deterministic recipes.
- Push consistent, validated upgrades to every service using the shared platform.
- Give development teams a one-click or self-serve way to adopt the new version without deciphering breaking changes.
- Ensure every service converges on the same patterns, versions, and security posture (minimizing stragglers).

For organizations with strong platform engineering practices, this approach turns a large, risky upgrade into a repeatable workflow that scales, where everyone moves forward together with far less friction.

## Want to learn more about automating your Spring Boot 4.x migration?

Spring Boot 4.0 represents more than a version bump—it’s the new foundation the Spring ecosystem will build on for years. The sooner your teams standardize on this baseline, the sooner you unlock the performance, security, and developer-experience improvements that future work will depend on.

If you want to accelerate your organization’s Spring Boot upgrades, sign up for our virtual, hands-on training, [Preparing for Your Next Spring Boot Migration](https://moderne.ai/on-demand-webinars/preparing-for-your-next-spring-boot-migration), which covers how to reduce friction and shorten the upgrade timeline—whatever version you’re starting on!
