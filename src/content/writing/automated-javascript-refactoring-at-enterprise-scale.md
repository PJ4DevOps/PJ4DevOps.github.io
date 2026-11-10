---
title: "Moderne adds JavaScript: Universal modernization across the stack"
description: "Moderne expands its platform to support JavaScript and TypeScript, delivering the first enterprise-scale solution for automated refactoring and modernization."
author: "Bryan Friedman and Patricia Johnson"
published: 2025-10-14
tags: ["Code Modernization", "Product"]
originalUrl: "https://moderne.ai/blog/automated-javascript-refactoring-at-enterprise-scale"
publisher: "Moderne"
hero: "/writing/automated-javascript-refactoring-at-enterprise-scale/js-announce.jpg"
---

Modern enterprises don’t live in a single language. They operate across entire stacks—Java powering services, JavaScript driving experiences, infrastructure shaping delivery. Yet code transformation has long been fragmented: different tools for different languages, no shared foundation, no way to evolve the stack together.

For Java modernization, enterprises already benefit from a structured foundation in OpenRewrite and its Lossless Semantic Tree (LST). But for JavaScript, the world’s most widely used language, teams are left navigating a scattered codemod ecosystem with no common standard, no guarantees of accuracy, and no way to scale.

Now that changes.

With Moderne, the same rich, type-attributed LST that powers Java evolution now extends to JavaScript, giving enterprises a single, reliable platform for cross-language modernization.

## The breakthrough: First type-attributed refactoring engine for JavaScript

For the first time, JavaScript and TypeScript can be parsed into the [LST](https://moderne.ai/platform/lst)—a compiler-accurate, format-preserving model of code that captures syntax, types, symbols, dependencies, control and data flow, and even whitespace. JavaScript now has a semantic foundation for safe, automated modernization.

This shifts JavaScript refactoring from *syntax-bound* to *semantically-aware*. Codemods may apply deterministic edits to raw syntax, but they lack the context to distinguish between lookalike methods, resolve types, or understand dependency graphs. With the LST, OpenRewrite recipes operate at a semantic level, finding methods, tracing types, and changing APIs with precision.

But the real impact of the LST comes when it’s paired with Moderne, where recipes don’t just work in a single repo, they scale across thousands of repositories as well as providing orchestration, reporting, and auditability. That’s what makes Moderne the first platform to unify full-stack, multi-language modernization for the enterprise.

![Figure 1. Universal Moderne Platform—frontend, backend, and infrastructure modernization](/writing/automated-javascript-refactoring-at-enterprise-scale/full-stack-image.png)
*Figure 1. Universal Moderne Platform—frontend, backend, and infrastructure modernization*

## Why codemods fall short

Codemods have supported various refactoring operations in JavaScript/TypeScript, but for enterprises they can end up introducing as many problems as they solve:

- Scattered scripts and inconsistent quality.
- No shared foundation across repos or teams.
- No reporting or orchestration for visibility.
- Risk of partial upgrades, with no way to answer impact questions.
- Frequent breakage of formatting and style, creating friction for reviewers.

A great example of these limitations is managing imports. JavaScript supports a dizzying range of variations—CommonJS `require`, ES6 imports, destructuring, full namespace imports, and more. Frameworks like Babel codemods, `ts-morph`, `ast-grep`, or `jscodeshift` directly expose the raw syntax tree, meaning every codemod author has to re-implement their own logic for adding and removing imports. If a migration involves replacing one API with another, that logic gets duplicated in every codemod, leading to brittle, inconsistent, and error-prone transformations.

OpenRewrite takes a different approach: it brings the principle of *encapsulation* to refactoring. Instead of requiring recipe authors to wrestle with every syntax variation, the platform abstracts these details into consistent, reusable operations:

- **Semantic refactoring.** Recipe authors don’t need to understand every edge case or syntax permutation because the platform handles them automatically. Removing or adding an import is a single operation, applied consistently across every syntax form.
- **Reusable building blocks.** Authors focus on the what (e.g. “replace this API with that one”), not the how of manipulating syntax.
- **Cleaner, safer recipes.** Because operations are encapsulated, recipes are shorter, more reusable, and safer to apply across massive code estates.
- **Consistent, reliable diffs.** Changes preserve whitespace and formatting, producing idiomatic code that makes reviewing diffs easy.

## JavaScript migration: Node.js 20 to 24 (util fix)

Node.js 20 is reaching end of life, and Node.js 22+ deprecates long-standing util type-checking methods (`util.isArray()`, `util.isBoolean()`, `util.isDate()`, etc.). Teams get stuck on this tedious first step.

To upgrade, developers would need to hunt down every instance of `util.isX()` and replace it with the correct modern equivalent—such as `Array.isArray()` or `typeof x === "boolean"`. Spread across thousands of repositories, this becomes slow, error-prone, and nearly impossible to track with confidence.

With Moderne, this migration is automated and reliable. A single recipe can:

- Precisely detect every deprecated `util.isX()` call.
- Replace them systematically with the correct native JavaScript equivalent.
- Update imports automatically and consistently, regardless of syntax style.

Because the LST understands types, it can distinguish between `util.isArray()` and an unrelated `isArray()` function, eliminating both false positives and missed cases. The result is a precise, safe migration executed across the entire codebase.

Why this works at enterprise scale:

- **Encapsulation.** Common transformations (like updating imports) are abstracted into reusable operations—recipes don’t need to re-implement the same logic for every framework or syntax variation.
- **Consistency.** Recipes behave identically across all repos and projects, preserving formatting and code style.
- **Scale.** A single recipe can upgrade thousands of repositories, with results tracked and reported through Moderne.

With Moderne, moving from Node 20 to 24 is no longer a brittle, manual effort. It’s a precise, consistent, and scalable migration—completed safely and at enterprise speed.

## JavaScript research and impact analysis at mass scale

For the first time, developers can answer questions that were previously impossible in sprawling, multi-repo JavaScript estates:

- *“Where is this method or type used across thousands of repos?”*
- *“What breaks if we change this API?”*
- *“Where are deprecated or insecure patterns still hiding in our codebase?”*

With the LST, recipes have all the information they need to generate data tables that give security teams, architects, and developers visibility into patterns across the entire estate.

[](https://docs.google.com/spreadsheets/d/1OL49y7rFQM-EnIw4z0Z4YnID-TRoSAcAiG1u5W1wcY8/edit?gid=0#gid=0)

![Figure 2. Part of a data table listing React hooks found across multiple repositories. Click to explore.](/writing/automated-javascript-refactoring-at-enterprise-scale/3dff6025.png)
*Figure 2. Part of a data table listing React hooks found across multiple repositories. Click to explore.*

This unlocks research use cases such as:

- Tracing data and control flow across repos, following chains of method calls or variable assignments.
- Producing accurate inventories of React components or Angular services, especially in prep for a major migration.
- Running security and compliance queries at enterprise scale.

[Program analysis](https://docs.moderne.io/openrewrite-advanced-program-analysis/control-flow) isn’t limited to a single repo anymore—it’s portfolio-wide.

## Cross-language modernization: One platform, all stacks

Because [LST elements are shared across languages ](https://moderne.ai/platform/lst)(e.g., types, methods, imports, variables, control flow, and data flow), impact analysis doesn’t stop at JavaScript or TypeScript—it extends across Java and infrastructure. With Moderne, you can trace data and control flow end-to-end: from a React form, through a Spring backend, into an API response.

Existing recipes make this power actionable. You can:

- Find methods and types across multi-language estates.
- Trace untrusted inputs through JavaScript frontends into Java backends for security analysis.
- Identify and map API dependencies across services to understand the ripple effects of change.

Looking ahead, the same foundation unlocks full-stack campaigns—such as aligning observability standards across frontend and backend or preparing for Post Quantum Cryptography (PQC). These use cases highlight the long-term value of a single semantic model that spans the entire enterprise.

And for the first time, leaders will be able to see and manage frontend and backend modernization side by side—from a React migration running in parallel with a Spring Boot upgrade, to dependency clean-up across npm and Maven.

For leaders, the value is clear: one platform, one pane of glass to run campaigns across thousands of repos with confidence.

## Recipe reuse and native JavaScript authoring

Adding a JavaScript LST to the Moderne Platform provides immediate value on two fronts:

1. **Cross-language reuse.** Many proven Java recipes—like [*find methods*](https://codegenomeproject.org/recipes/org.openrewrite.java.search.FindMethods), [*find types*](https://codegenomeproject.org/recipes/org.openrewrite.java.search.FindTypes), and [*change method name*](https://codegenomeproject.org/recipes/org.openrewrite.java.ChangeMethodName)—already work directly on JavaScript with little or no modification. Others can be customized or referenced for applying to the JavaScript ecosystem.
2. **Native JS authoring**. The API for authoring is designed specifically for the way JavaScript and TypeScript developers work. Recipes align with language idioms like async/await, immer for immutable objects, and decorators for option definition. Even the test harness reflects the JS ecosystem—function-centric rather than class-centric—so authors write tests the way they already do. The result: recipes that feel truly native to JavaScript, not ported from Java.

This dual path gives enterprises immediate value from day one by applying proven recipes across both Java and JavaScript, while also providing the flexibility to author new recipes tailored to their frameworks, libraries, and modernization needs.

Developers can accelerate this with AI assistants, which are already well versed in JavaScript. AI can draft a recipe (for example, replacing the old Lodash JavaScript library with the new standard library), while OpenRewrite’s encapsulation ensures the results are safe and consistent by handling every variation of imports and syntax. The developer reviews, refines, and uses Moderne to roll it out enterprise-wide with confidence.

With AI-assisted authoring, teams can go from idea to custom recipe to cross-repo rollout faster than ever.

## The universal platform for code transformation

With JavaScript support, Moderne is the only platform capable of managing modernization campaigns across backend, frontend, and infrastructure together, enabling teams to work more efficiently and deliver better value all the time.

Instead of piecemeal fixes, enterprises can now tackle tech debt holistically—standardizing frameworks, hardening security, and upgrading dependencies across every repo, no matter what language. The result is not just less debt, but true [tech stack liquidity](https://moderne.ai/ebook/unlock-the-hidden-liquidity-in-your-tech-stack): a codebase that adapts as quickly as business priorities shift.

Bringing JavaScript into the LST is a significant milestone that reshapes how modernization works across the ecosystem, for customers, and for the industry at large:

- **For the JavaScript ecosystem,** non-trivial refactors (like upgrades, vulnerability fixes, and standardization) now have the missing foundation for safe, automated, large-scale transformation.
- **For Moderne customers,** modernization capacity expands to full-stack, multi-language campaigns across thousands of repos.
- **For the industry,** a key proof point that rich, semantic models like the LST are the future of modernization and codebase management in general.

With JavaScript and TypeScript now on board, Moderne is your universal platform where enterprises modernize, adapt, and evolve to build the future.

Learn more about modernizing JavaScript and TypeScript apps at scale alongside your Java apps and infrastructure.
