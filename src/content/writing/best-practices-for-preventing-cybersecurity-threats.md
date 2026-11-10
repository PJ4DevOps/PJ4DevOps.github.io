---
title: "Four ways to fix security vulnerabilities across every repository"
description: "Find and fix security vulnerabilities across every repository: exposed secrets, code weaknesses, vulnerable dependencies, and outdated frameworks."
author: "Olga Kundzich and Patricia Johnson"
published: 2024-04-30
updated: "October 7, 2026"
tags: ["Code Security", "Developer Skills"]
originalUrl: "https://moderne.ai/blog/best-practices-for-preventing-cybersecurity-threats"
publisher: "Moderne"
hero: "/writing/best-practices-for-preventing-cybersecurity-threats/hero.png"
---

Finding a vulnerability is the start of the work. Fixing it in every repository where it appears takes far longer, and that’s where security backlogs grow. [Moderne](https://moderne.ai/platform) closes the gap between finding and fixing with [OpenRewrite](https://moderne.ai/openrewrite) recipes that find and fix vulnerabilities across all of an organization’s code at once.

The gap is already wide. Veracode’s [2025 State of Software Security report](https://www.veracode.com/resources/analyst-reports/state-of-software-security-2025/) found that the average time to fix a security flaw rose from 171 days to 252 days over five years. It gets harder to close as [AI models find flaws faster](https://moderne.ai/blog/agentic-coding-mythos-remediation-gap).

Moderne works on it in four places, from exposed secrets to framework migrations. Together they cover both layers of the stack: the code your teams write and the supply chain it depends on. For the step-by-step version, read [the playbook for secure code at scale](https://moderne.ai/blog/vulnerability-remediation-playbook).

![Address the OWASP Top 10 in four ways: in-depth code analysis, static code analysis (SAST), software composition analysis (SCA), and third-party code migration](/writing/best-practices-for-preventing-cybersecurity-threats/owasp-coverage.png)

## 1. Code analysis finds exposed secrets and insecure APIs.

Moderne can search every repository for the places where data leaves an application or secrets sit in the open, including code that comes in through direct and transitive dependencies. Security teams usually can’t see into a large codebase that way without an expert digging through it by hand.

The [Find Spring API endpoints](https://codegenomeproject.org/recipes/org.openrewrite.java.spring.search.FindApiEndpoints) recipe lists every HTTP endpoint an application exposes, so a team can assess what’s reachable. [Find sensitive API endpoints](https://codegenomeproject.org/recipes/org.openrewrite.java.security.search.FindSensitiveApiEndpoints) narrows that to data models that expose PII or secrets, which [this post](https://moderne.ai/blog/find-personally-identifiable-information-and-secrets-exposed-by-apis) covers in detail. [Find secrets](https://codegenomeproject.org/recipes/org.openrewrite.java.security.secrets.FindSecrets) looks for credentials stored in plain text, with detectors for 28 kinds of secrets from AWS, GitHub, Stripe, and other services.

## 2. Static analysis with automated fixes repairs weaknesses in your own code.

Moderne’s static analysis finds security weaknesses in the code a team writes, and then fixes them. Developers review and merge the change instead of working out the fix themselves.

The analysis follows both control flow and data flow. Data flow, or taint analysis, tracks how untrusted values move through a program, which is how injection and encoding problems are found. [This post on overlapping taint sources](https://moderne.ai/blog/overlapping-taint-sources-a-challenge-in-static-analysis-solved) explains how Moderne tells a real risk from a harmless use.

Examples of fixes Moderne applies:

- [**Common static analysis issues**](https://codegenomeproject.org/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis): fixes the findings traditional SAST tools report most, in the code’s existing style
- [**OWASP Top Ten**](https://codegenomeproject.org/recipes/org.openrewrite.java.security.OwaspTopTen): remediates vulnerabilities from the OWASP Top Ten, such as broken access control, cryptographic failures, and security misconfigurations
- [**Partial path traversal vulnerability**](https://codegenomeproject.org/recipes/org.openrewrite.java.security.PartialPathTraversalVulnerability): fixes code to prevent a common directory traversal attack
- [**Zip slip**](https://codegenomeproject.org/recipes/org.openrewrite.java.security.ZipSlip): adds path checks so a malicious archive can’t overwrite files outside its target directory
- [**Enable CSRF attack prevention**](https://codegenomeproject.org/recipes/org.openrewrite.java.security.spring.CsrfProtection): turns on Spring’s protection against cross-site request forgery

<aside class="post-note"><strong>Related:</strong> <a href="https://moderne.ai/blog/cve-2026-22732-spring-security-openrewrite-recipe">How a recipe for CVE-2026-22732 was built in an afternoon →</a></aside>

## 3. Software composition analysis with automated upgrades fixes vulnerable dependencies.

Moderne checks every direct and transitive dependency in every repository against the GitHub Advisory Database, then fixes what it can. That matters because much of an application is code its team didn’t write, and open source dependencies change on their own schedules. The [Find and fix vulnerable dependencies](https://codegenomeproject.org/recipes/org.openrewrite.java.dependencies.DependencyVulnerabilityCheck) recipe starts with patch upgrades, which aren’t supposed to break anything, and can override vulnerable transitive versions. Its data table lists every remaining vulnerability with the version that fixes it. The same check runs on [npm](https://codegenomeproject.org/recipes/org.openrewrite.nodejs.security.DependencyVulnerabilityCheck) and [NuGet](https://codegenomeproject.org/recipes/org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck) dependencies, along with recipes that surface packages past end of life. [Dockerfile recipes](https://codegenomeproject.org/recipes/org.openrewrite.docker.DockerSecurityBestPractices) cover the container base images underneath. [Manage your software dependencies or they will manage you](https://moderne.ai/blog/manage-your-software-dependencies-or-they-will-manage-you) walks through the full flow, and the [docs how-to](https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides/vulnerable-dependencies) covers the options.

A version bump often isn’t enough. In one analysis, 70% of vulnerable dependencies needed a minor or major upgrade or had no fix available ([Dependency updates unmasked](https://moderne.ai/blog/security-dependency-updates-unmasked)), and those upgrades can break code. That’s where the migrations in the next section come in.

Two more recipes help around the edges. [Exclude Maven dependency](https://codegenomeproject.org/recipes/org.openrewrite.maven.ExcludeDependency) removes a vulnerable transitive dependency that can’t be patched and isn’t needed at runtime, and [Find licenses in use in third-party dependencies](https://codegenomeproject.org/recipes/org.openrewrite.java.dependencies.DependencyLicenseCheck) reports every license in the codebase for compliance or due diligence.

## 4. Automated migrations remove vulnerabilities a version bump can’t.

Some vulnerabilities only close with a move to a newer framework or library, and those moves change application code. A major framework migration usually brings a chain of dependency changes with it, which is why teams put them off until a vulnerability forces the issue.

Recipes make those migrations routine. A [global financial services company](https://moderne.ai/case-study/financial-services-leader-improves-security-and-developer-experience-with-automated-code-remediation) runs its Spring Boot and Java migrations and its vulnerability fixes as recipes in its existing pipelines. It now fixes more than 100 critical security issues in a single CI/CD run. Migrations that remove known vulnerabilities include:

- [**Spring Boot 4.0**](https://codegenomeproject.org/recipes/io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0): upgrades build files, deprecated APIs, and configuration, and chains the Spring Framework and Spring Security migrations (see the [Spring Boot 4 migration guide](https://moderne.ai/blog/spring-boot-4x-migration-guide))
- [**Java 25**](https://codegenomeproject.org/recipes/org.openrewrite.java.migrate.UpgradeToJava25): replaces deprecated APIs and updates build files and plugins
- [**Log4j to SLF4J**](https://codegenomeproject.org/recipes/org.openrewrite.java.logging.slf4j.Log4jToSlf4j): moves logging calls from the Log4j API to SLF4J
- [**Marshalling**](https://codegenomeproject.org/recipes?q=org.openrewrite.java.security.marshalling): secures Jackson default typing, SnakeYAML constructors, and JMS deserialization against malicious input
- [**Post-quantum cryptography**](https://codegenomeproject.org/recipes/io.moderne.cryptography.PostQuantumCryptography): audits TLS configuration and key exchange and moves them to post-quantum ready settings

When the fix is in a major version a team can’t take yet, a [backpatch](https://moderne.ai/blog/backpatching-enterprise-software-security) applies the security fix to the version it’s on.

## Agent-written code needs the same checks.

Keeping new vulnerabilities out means running the same checks on every change, including the ones a coding agent writes. Agents can use the fixes too: Claude Code or Copilot can call the same recipes through Moderne instead of writing a fix by hand.

Agents can also write the recipe for a brand-new vulnerability. When an AI model finds a new flaw, an agent working with Moderne can turn that finding into a deterministic recipe, and Moderne runs it across every affected repository at once, so the fix reaches everywhere the vulnerability does.

**The State of AppSec in the Era of AI [Panel]**  

[▶ Watch on YouTube](https://www.youtube.com/watch?v=R9JNNW5c5Ss)

### How do you prevent new vulnerabilities from entering the codebase?

Run the same deterministic checks on every change. That means type-aware searches for known-bad patterns, dependency checks that include transitive dependencies, and recipes that fix a finding in the same pull request. The first run fixes the backlog, and later runs on each change keep it from coming back.

## Moderne keeps your code under your control.

Your code is never exposed to anyone outside your organization. Moderne holds [SOC 2 Type 2 certification](https://moderne.ai/blog/moderne-achieves-soc-2-type-2-certification) and runs as a single-tenant hybrid-cloud SaaS deployment. For teams that can’t use a SaaS platform, [Moderne DX](https://moderne.ai/moderne-dx) runs fully air-gapped, and the [Moderne CLI](https://moderne.ai/blog/moderne-cli-multi-repo-developer-experience-automated-code-refactoring) runs recipes locally.

Operations follow your company’s security controls. Authentication runs through your SSO, and authorization matches the access developers already have in your source control system. You manage encryption with your own keys. Your source code stays in your environment, and an on-premises, egress-only agent tunnels all communication to your single-tenant SaaS.

To see security recipes run on open source code, [try the Moderne Platform](https://moderne.ai/try-moderne), or [book a demo](https://moderne.ai/contact-us) to see them on your own repositories.
