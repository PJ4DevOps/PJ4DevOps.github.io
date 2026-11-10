---
title: "Make large-scale code changes that teams can review and trust with Moderne"
description: "How teams run large-scale code changes they can trust: deterministic recipes, review before commit, and push or pull rollout across every repository."
author: "Patricia Johnson"
published: 2025-08-07
updated: "October 1, 2026"
tags: ["Code Modernization", "OpenRewrite", "Product"]
originalUrl: "https://moderne.ai/blog/large-scale-code-changes"
publisher: "Moderne"
hero: "/writing/large-scale-code-changes/trusting-big-scale-code-changes.jpg"
---

Large-scale code changes are trustworthy when every change comes from a deterministic recipe, every result can be reviewed before it’s committed, and developers decide what merges. Moderne runs that process across thousands of repositories at once, so a fix or migration lands everywhere it’s needed.

Even when the process is sound, change at this scale makes people nervous. We once worked with a large bank whose junior developer (let’s call him Lou) was eager to use Moderne to fix a widespread issue. Lou ran a recipe that made deterministic, rule-based changes across hundreds of repositories and committed them.

When the VP of Engineering saw a wave of commits from someone named “Lou,” they asked the team: “Who is Lou, and why did he change everything?” The changes were sound, the builds passed, and nothing broke. Large-scale change still made people uneasy, even with automation they could trust.

Most teams already know what needs fixing. They lack a way to make one careful change across hundreds of repositories.

## Development workflows built for one repository don’t scale to thousands.

Code reviews, CI pipelines, and even organizational policies assume one repository and one team at a time. When a security issue or framework update affects hundreds of services, handing the work out repository by repository is slow and hard to track.

As [Will Larson has explained](https://lethain.com/migrations/), migrations are often the only way to meaningfully address technical debt, especially when individual teams can’t fix it in isolation. They become more frequent as companies grow, and running them well can become a constraint on engineering velocity. Larson’s playbook has three phases:

- **Derisk:** design and validate the migration with the hardest, most edge-case-heavy teams first.
- **Enable:** build tools and documentation that automate the easy 90%, so teams can self-serve.
- **Finish:** stop new code from using the old system, then push through the long tail to 100% adoption.

Automation has long covered infrastructure configuration and simple version bumps in that playbook, while code changes stayed manual, one developer and one repository at a time. Moderne brings code migrations into it with OpenRewrite recipes, which developers and coding agents can both run. Teams validate a migration recipe on the hardest repositories first, run it to automate the easy majority, and rerun it to push the long tail to completion.

<figure id="fig-compare">
<style>#fig-compare{--cmp-surface:#f0eee9;--cmp-text:#1c1c21;--cmp-body:#4b4d55;--cmp-muted:#7a7c85;--cmp-line:#dcd9d2;--cmp-line2:#e4e1da;--cmp-blue:#3e7bf6;--cmp-slot:#c6c2b9;margin:2.3em 0}#fig-compare .cmp{grid-template-columns:1fr 1fr;gap:20px;display:grid}#fig-compare .cmp-card{background:var(--cmp-surface);border-radius:4px;min-width:0;padding:24px 24px 20px}#fig-compare .cmp-h{font:600 15px/1.3 var(--font-sans);color:var(--cmp-text);min-height:2.6em;margin:0 0 4px}#fig-compare .cmp-b{margin:10px 0 22px;padding:0;list-style:none}#fig-compare .cmp-b li{color:var(--cmp-body);margin:0;padding-left:18px;font-size:15px;line-height:1.7;position:relative}#fig-compare .cmp-b li:before{content:"";background:var(--cmp-blue);border-radius:50%;width:6px;height:6px;position:absolute;top:.72em;left:0}#fig-compare .cmp-grid{grid-template-columns:repeat(25,1fr);gap:4px;margin:0 0 22px;display:grid}#fig-compare .cmp-grid i{aspect-ratio:1;border:1px solid var(--cmp-slot);background:#fff;border-radius:3px}#fig-compare .cmp-grid i.on{background:var(--cmp-blue);border-color:#0000}#fig-compare table{border-collapse:collapse;background:0 0;border:0;border-radius:0;width:100%;margin:0;font-size:14px;overflow:visible}#fig-compare th{font:500 13px/1.4 var(--font-sans);letter-spacing:0;text-transform:none;color:var(--cmp-muted);text-align:right;border-bottom:1px solid var(--cmp-line);padding:0 0 10px}#fig-compare td{border-bottom:1px solid var(--cmp-line2);text-align:right;font-family:var(--font-mono);color:var(--cmp-body);padding:9px 0;line-height:1.4}#fig-compare th:first-child,#fig-compare td:first-child{text-align:left}#fig-compare td:first-child{font-family:var(--font-sans);color:var(--cmp-text)}#fig-compare tr:last-child td{border-bottom:0}#fig-compare .cmp-dot{vertical-align:-1px;box-sizing:border-box;border:1px solid var(--cmp-slot);background:#fff;border-radius:3px;width:11px;height:11px;margin-right:10px;display:inline-block}#fig-compare .cmp-dot.on{background:var(--cmp-blue);border-color:#0000}@media (width<=640px){#fig-compare .cmp{grid-template-columns:1fr;gap:16px}#fig-compare .cmp-grid{gap:3px}#fig-compare .cmp-card{padding:20px 18px 16px}}</style>
<div class="cmp">
<section class="cmp-card"><p class="cmp-h">The traditional way: one app, one repo</p><ul class="cmp-b"><li>4 of 125 tasks completed</li><li>App-by-app, sequential</li></ul><div class="cmp-grid" aria-hidden="true"><i class="on"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="on"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="on"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="on"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><table><thead><tr><th>Category</th><th># of tasks</th><th>Percentage</th></tr></thead><tbody><tr><td><span class="cmp-dot on"></span>Completed</td><td>4</td><td>3.2%</td></tr><tr><td><span class="cmp-dot"></span>Remaining</td><td>121</td><td>96.8%</td></tr></tbody></table></section>
<section class="cmp-card"><p class="cmp-h">The Moderne way: horizontal change across the organization</p><ul class="cmp-b"><li>100 of 125 tasks completed</li><li>Across the whole organization</li></ul><div class="cmp-grid" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><table><thead><tr><th>Category</th><th># of tasks</th><th>Percentage</th></tr></thead><tbody><tr><td><span class="cmp-dot on"></span>Completed</td><td>100</td><td>80%</td></tr><tr><td><span class="cmp-dot"></span>Remaining</td><td>25</td><td>20%</td></tr></tbody></table></section>
</div>
<figcaption>In a 125-task example, horizontal change reaches most of the estate in the time the traditional path (one app, one repo, one team) covers a fraction.</figcaption>
</figure>

An OpenRewrite recipe is a deterministic, testable transformation, so it makes the same change in every repository it runs on. Moderne runs it across the whole organization and reports the results in one place.

### How do you keep code consistent across thousands of repositories?

Write the change once as a deterministic recipe and run it against every repository from one place. Review the results before anything is committed, then open one pull request per repository, each with the same audit trail.

## Seven safeguards build trust in large-scale change.

Moderne builds a check into every step, from how a recipe is tested to how its pull requests are reviewed:

1. **Deterministic, rules-based recipes.** A recipe only changes code when it finds a clear, known match for the pattern it targets.
2. **Extensive unit testing.** Moderne tests recipes against broad sets of real-world examples, and the test code is often longer than the recipe code.
3. **Validation against open source code.** Moderne runs recipes against tens of thousands of open source repositories on Moderne’s [public tenant](https://app.moderne.io/) before release.
4. **Compile verification.** After a change, the [Verify compilation](https://codegenomeproject.org/recipes/io.moderne.compiled.verification.VerifyCompilation) recipe checks that the code still compiles, using the type information in the Lossless Semantic Tree (LST), without a full build of every repository.
5. **CI status in the platform.** Build and test results for each pull request show up in Moderne, so developers don’t have to switch tools or chase logs.
6. **Incremental change.** Big changes can be broken into smaller, staged or draft pull requests to match developer workflows and release schedules.
7. **Real-world use.** Recipes run constantly across open source and enterprise codebases, so edge cases surface and get fixed.

### How should a team choose a refactoring tool for cross-repo consistency?

Look for deterministic changes (the same input always gives the same output), type-aware matching instead of text search, results you can review across every repository before committing, and pull requests that leave developers in control of the merge.

## Some changes should be pushed to teams and others pulled by them.

Teams using Moderne run both modes from the same recipes. Which one fits depends on how urgent the change is and how much it depends on each team’s context.

- **Push-based changes** are small and urgent, like security vulnerability fixes. A central team issues them as pull requests across the organization, and teams expect and accept them with little disruption. Fixing Log4j once took [Choice Hotels](https://moderne.ai/case-study/choice-hotels-automates-secure-code-modernization-at-scale) six weeks of all-hands engineering. The team now opens 200 remediation pull requests in an hour.
- **Pull-based changes** are complex and context-sensitive, like framework migrations or large refactors, and are often staged. Developers on product teams drive them, usually with a platform or architecture team leading a cross-team working group. That group prepares and validates the recipes and supports rollout across teams, including code that lacks clear ownership.

Customers describe both modes in practice:

- **Code quality and build tool upgrades:** “If our priority is to standardize code quality or upgrade tools like Gradle, we issue PRs through Moderne. These changes are safe, tested, and easily reviewed. We do them at the start of every sprint—just one commit that triggers the pipeline. It’s quick and worth doing every two weeks.”
- **Complex migrations using draft PRs:** “For migrations like Spring Boot 2 to 3, we use draft PRs. These don’t trigger CI, so there’s no infra load. Developers pull the draft PR locally, compile, test, and make final changes. When ready, they finalize and merge. It saves time and respects developer flow.”
- **Vulnerable dependencies:** “Instead of letting surprise CVEs break the build mid-sprint, we run scans weekly. Fixes are issued as a single commit. It’s less stressful and more strategic. If a critical vulnerability is announced, we can run it on demand.”

Run regularly and visibly, remediation stops being a disruption and becomes part of the development rhythm.

## Developers stay in control of every change.

Developers co-author changes with Moderne, whether they run a recipe themselves or hand it to a coding agent, and review every diff before it merges. Source code management permissions mirror existing access controls, so there’s no shadow system. Recipes can be dry-run and tested locally, and Moderne can commit directly, create a branch or fork, or open pull requests, depending on how a team works.

Preparing a change starts with data. Impact analysis shows where the change applies, then refactoring recipes make it, and anything that needs manual attention or cross-team coordination is flagged. Migrating from Java 8 to Java 25, for example, may also require updates to Docker images or build configurations. The same analysis shows which parts of the codebase have automated tests and which need extra regression testing before the change goes out. Coding agents work from the same data: [Trigrep](https://moderne.ai/moderne-agent-tools/code-search) finds every place a pattern lives by type and symbol, and [Prethink](https://moderne.ai/moderne-agent-tools/prethink) gives the agent each repository’s context before it plans the change. The agent then runs the same recipes a developer would to make it.

<figure id="fig-cicd">
<style>#fig-cicd{background:#fff;border:1px solid #d9dce3;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);align-items:center;gap:clamp(20px,3vw,36px);margin:2.3em 0;padding:clamp(24px,4vw,44px);display:grid}#fig-cicd .cc-h{font:600 clamp(19px,2.2vw,22px)/1.2 var(--font-sans);color:#1b2230;letter-spacing:-.01em;margin:0}#fig-cicd .cc-sub{font:400 12px/1.6 var(--font-mono);color:#5d626d;margin:8px 0 24px}#fig-cicd ul{border-top:2px solid #1b2230;margin:0;padding:0;list-style:none}#fig-cicd li{font:500 15px/1.3 var(--font-sans);color:#1b2230;border-bottom:1px solid #d9dce3;align-items:center;gap:16px;margin:0;padding:14px 0;display:flex}#fig-cicd li:before{content:"";background:#3e7bf6;border-radius:50%;flex:none;width:9px;height:9px}#fig-cicd .cc-foot{font:400 11px/1.6 var(--font-mono);color:#8d9199;margin:20px 0 0}#fig-cicd svg{width:100%;height:auto;display:block}#fig-cicd .arc{font:500 18px var(--font-mono);letter-spacing:.08em}#fig-cicd .ctr{font:600 26px var(--font-sans);fill:#1b2230;letter-spacing:-.01em}@media (width<=720px){#fig-cicd{grid-template-columns:1fr}#fig-cicd svg{max-width:440px;margin:0 auto}}</style>
<div class="cc-text"><p class="cc-h">Moderne developer-driven multi-repo automation</p><p class="cc-sub">Integrates with existing developer/SCM workflows.</p><ul><li>Developer research and impact analysis</li><li>Migration campaigns with code changes</li><li>Security vulnerability remediations</li><li>CI quality gates</li><li>Develop and test auto-refactoring recipes</li></ul><p class="cc-foot">* Mass building LSTs to enable multi-repo work is executed through a separate, non-production CI workflow.</p></div>
<svg viewBox="186 36 556 468" role="img" aria-label="Moderne multi-repo work wraps around the enterprise CI/CD workflow of plan, dev, test/QA and deploy"><defs><path id="cicd-t_test" d="M459.6,158.5 A150.0,150.0 0 0 1 660.4,158.5"></path><path id="cicd-t_deploy" d="M671.5,169.6 A150.0,150.0 0 0 1 671.5,370.4"></path><path id="cicd-t_plan" d="M459.6,381.5 A150.0,150.0 0 0 0 660.4,381.5"></path><path id="cicd-t_dev" d="M448.5,370.4 A150.0,150.0 0 0 1 448.5,169.6"></path><path id="cicd-t_multi" d="M348.9,465.5 A208.0,208.0 0 0 1 348.9,74.5"></path></defs><path d="M634.9,200.2 A226,226 0 1 0 634.9,339.8 L600.7,328.7 A190,190 0 1 1 600.7,211.3 Z" fill="#3E7BF6" stroke="#16306B" stroke-width="1.4" stroke-linejoin="round"></path><circle cx="560" cy="270" r="128" fill="#fff"></circle><path d="M665.9,405.5 A172,172 0 0 1 454.1,405.5 L455.8,377.9 L481.2,370.9 A128,128 0 0 0 638.8,370.9 L639.5,397.2 Z" fill="#fff" stroke="#16306B" stroke-width="1.4" stroke-linejoin="round"></path><path d="M424.5,375.9 A172,172 0 0 1 424.5,164.1 L452.1,165.8 L459.1,191.2 A128,128 0 0 0 459.1,348.8 L432.8,349.5 Z" fill="#fff" stroke="#16306B" stroke-width="1.4" stroke-linejoin="round"></path><path d="M454.1,134.5 A172,172 0 0 1 665.9,134.5 L664.2,162.1 L638.8,169.1 A128,128 0 0 0 481.2,169.1 L480.5,142.8 Z" fill="#fff" stroke="#16306B" stroke-width="1.4" stroke-linejoin="round"></path><path d="M695.5,164.1 A172,172 0 0 1 695.5,375.9 L667.9,374.2 L660.9,348.8 A128,128 0 0 0 660.9,191.2 L687.2,190.5 Z" fill="#fff" stroke="#16306B" stroke-width="1.4" stroke-linejoin="round"></path><text class="arc" fill="#16306B" dominant-baseline="central"><textPath href="#cicd-t_test" startOffset="50%" text-anchor="middle">TEST/QA</textPath></text><text class="arc" fill="#16306B" dominant-baseline="central"><textPath href="#cicd-t_deploy" startOffset="50%" text-anchor="middle">DEPLOY</textPath></text><text class="arc" fill="#16306B" dominant-baseline="central"><textPath href="#cicd-t_plan" startOffset="50%" text-anchor="middle">PLAN</textPath></text><text class="arc" fill="#16306B" dominant-baseline="central"><textPath href="#cicd-t_dev" startOffset="50%" text-anchor="middle">DEV</textPath></text><text class="arc" fill="#fff" dominant-baseline="central"><textPath href="#cicd-t_multi" startOffset="50%" text-anchor="middle">MULTI-REPO WORK</textPath></text><text x="560" y="264" class="ctr" text-anchor="middle">Enterprise CI/CD</text><text x="560" y="294" class="ctr" text-anchor="middle">workflow</text></svg>
</figure>

Every diff gets the review a coding assistant’s suggestion would get. The difference is scale: one recipe makes the same reviewed change across thousands of repositories.

That review also keeps floods of failing pull requests out of the pipeline, so teams keep trusting it. One principal developer put it this way: “I’m tired of going around telling my kids to pick up their socks.” With automation, the fix becomes routine.

### How can AI help with cross-repository refactoring?

Use the agent to plan the change and a deterministic recipe to make it. An agent editing files directly can make a slightly different edit in each repository. A recipe makes the same one everywhere, and through Moderne, agents like Claude Code and Cursor can run recipes across thousands of repositories.

## Platform teams curate the recipes, and product teams choose when to run them.

Moderne gives platform teams a proactive role in code quality and modernization that doesn’t depend on top-down enforcement. Central teams can:

- **Manage the recipe catalog:** curate open source recipes, write internal ones, and test them for safety and style.
- **Align recipes with security and compliance goals**, then publish them across the organization, so developers always have trusted recipes to use.
- **Advise on larger transformations** like [Java 25 migrations](https://moderne.ai/blog/enterprise-java-modernization-choice-hotels), logging standardization, or right-sizing cloud configurations, helping product teams scope multi-repo change.
- **Launch change campaigns** in [DevCenter](https://moderne.ai/blog/new-moderne-devcenter), so developers run remediations when the timing fits and platform teams can see adoption repository by repository.
- **Track every change** with [Changelog](https://moderne.ai/moderne-agent-tools/changelog), which follows pull requests and commits across repositories and source control systems, organized the way the company is.
- **Lead on urgent issues** like critical vulnerabilities, pushing fixes at scale so they’re adopted fast.

![Moderne DevCenter dashboard showing organizational ownership and change campaigns tracking each repository&#x27;s progress toward Spring Boot 4.0, Java 25 and JUnit 6](/writing/large-scale-code-changes/devcenter-dashboard.png)
*Change campaigns in DevCenter. Each campaign tracks every repository’s progress toward the target version.*

## Large-scale change becomes routine when the process supports it.

Lou’s commits were sound. What alarmed the VP of Engineering was that nobody saw them coming. Tested recipes, scheduled remediation, and campaigns every team can see turn large-scale change into something the organization plans for, across every repository at once.
