---
title: "Changing the AI context: How Moderne Prethink accelerates coding agents and reduces token use"
description: "Moderne Prethink gives coding agents pre-resolved codebase context so they work faster, use fewer tokens, and hallucinate less in large codebases."
author: "Patricia Johnson"
published: 2026-02-10
tags: ["AI/ML", "Product"]
originalUrl: "https://moderne.ai/blog/changing-ai-code-context-moderne-prethink"
publisher: "Moderne"
hero: "/writing/changing-ai-code-context-moderne-prethink/moderne-prethink.jpg"
---

<aside class="takeaways">
  <p class="tk-h">Key takeaways</p>
  <ul><li>AI coding agents underperform in large enterprise repos because they lack semantic context. A METR study found developers took 19% longer to complete tasks when using AI tools in large, mature codebases, and accepted less than half of the AI-generated code. The institutional knowledge agents miss (architectural intent, conventions, dependencies) is already in the code, but agents have no reliable way to read it.</li><li>Moderne Prethink gives coding agents pre-resolved, compiler-accurate code knowledge. It’s built on the Lossless Semantic Tree (LST). The LST is a fully resolved model of the repository, where every symbol, type, method call, and dependency is already linked to what it refers to.</li><li>Prethink shifts agent token budgets from understanding to execution. Agents start from a versioned knowledge base committed alongside the code, so they don’t rebuild context from files and READMEs on every prompt.</li><li>Prethink artifacts live in the repo and refresh as the code changes. A starter recipe generates structured outputs (CSV, Markdown, CALM architecture JSON, Mermaid) covering dependencies, service endpoints, security configuration, test coverage, and deployment context. The recipe also updates agent configuration files like CLAUDE.md, AGENTS.md, .cursorrules, and copilot-instructions.md, so agents reference Prethink automatically.</li></ul>
</aside>

A [study by METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that experienced developers took 19% longer to complete tasks when using AI tools. They were working in large, mature open source repositories that averaged about 10 years old and more than a million lines of code. Developers consistently overestimated how much the tools would help, and spent additional time correcting and rewriting generated code. They accepted less than half of the AI-generated code, and every developer reported having to modify the code they kept. The tools struggled most in large, complex repositories, where the knowledge that matters (architectural intent, conventions, dependencies, and the reasons behind old decisions) is not visible from any individual file or prompt.

Without [reliable semantic context](https://moderne.ai/platform/lst), agents infer, and inference produces rework and lost trust. If AI is going to deliver inside real-world codebases, the quality and structure of the context agents work from is the foundation to fix.

Moderne has been working on this problem since before agents entered the SDLC. As the creators of OpenRewrite, we built a multi-repo control plane that gives developers accurate, semantic insight into how code works at scale. Agents need the same thing.

We built [**Moderne Prethink**](https://moderne.ai/moderne-agent-tools/prethink) to make that deterministic code understanding available to coding agents as structured knowledge, so they work faster and more accurately.

Prethink is not MCP, RAG, embeddings, or prompt engineering. Prethink is *compiler-accurate* code knowledge with patterns, dependencies, connections, endpoints, configurations, and conventions already resolved. Agents spend far less time working out how code is structured or behaves, and far fewer tokens rebuilding that understanding on every prompt. The source of truth is resolved ahead of time, refreshes with the code, and belongs to the team.

This 1-minute demo shows Prethink cutting an agent’s token spend on a real codebase question:

[▶ Watch on YouTube](https://www.youtube.com/watch?v=bpeiMayG92w)

## Coding agents are working without deterministic codebase context.

Most complaints about coding agents in enterprise codebases (“they can’t see all of my code,” “they burn through token budgets,” “they hallucinate and need checking constantly”) are a data problem rather than a model problem. The models don’t have the semantic context to be accurate and efficient, so they work from ad hoc, unstructured context, scoped by token limits and assembled differently every time.

Today an agent builds that context one of a few ways. It reads the code directly, file by file, which is expensive in tokens and still gives it a partial picture. It reads the documentation, which is only as reliable as the last person who updated it. Or it retrieves snippets on demand through grep, embeddings, RAG, or MCP-style tools. Retrieval finds text that looks relevant without resolving what it refers to, and the agent repeats it on every interaction.

All of that work to approximate understanding shows up downstream:

- **Tokens and time.** The agent reconstructs how the repo works before it can start on the task, so even a correct answer takes longer than it should.
- **Fragmented understanding.** Stitched-together snippets mean more inference, more blind spots, and more wrong assumptions.
- **Context rot.** As prompts and retrieved artifacts pile up over a session, the context gets noisier, and stale or oversized context makes performance worse.
- **Inconsistent results.** Without deterministic inputs, results vary between runs, need verification, and erode developer trust.

The knowledge teams worry agents lack (architectural boundaries, dependency relationships, security conventions, organizational standards) is already in the codebase, encoded in structure, configuration, dependencies, and patterns. Agents have no reliable way to read it.

## Prethink resolves the codebase once so agents stop rebuilding it.

Prethink gives coding agents repository context as a structured, versioned summary derived from the Lossless Semantic Tree and committed alongside the code. An agent reads it once instead of exploring file by file. Context stops being a pile of prompts and snippets and becomes [resolved, semantic knowledge derived directly from the code](https://moderne.ai/moderne-agent-tools).

<aside class="post-note"><strong>Want to see Prethink working in a real codebase?</strong> <a href="https://moderne.ai/on-demand-webinars/dont-blame-the-agent-blame-the-context">Watch the on-demand demo →</a></aside>

<figure class="fig fig-loop" id="fig-prethink-loop">
<style>#fig-prethink-loop{--cx:56px;--lw:40px;--top:25px;--tail:28px}#fig-prethink-loop ol{padding:0 0 var(--tail);margin:0;list-style:none;position:relative}#fig-prethink-loop ol:before{content:"";left:calc(var(--cx) - var(--lw));width:var(--lw);top:calc(var(--top) + 15px);border:1.6px solid var(--spectral-blue);border-right:0;border-radius:14px 0 0 14px;position:absolute;bottom:0}#fig-prethink-loop ol:after{content:"";left:calc(var(--cx) - 23px);top:calc(var(--top) + 11px);border-top:1.6px solid var(--spectral-blue);border-right:1.6px solid var(--spectral-blue);width:7px;height:7px;position:absolute;transform:rotate(45deg)}#fig-prethink-loop li{grid-template-columns:calc(var(--cx) + 15px) 48px 1fr;column-gap:20px;margin:0;padding:0;display:grid;position:relative}#fig-prethink-loop li:after{content:"";left:calc(var(--cx) - .7px);width:1.4px;top:calc(var(--top) + 30px);bottom:calc(-1 * var(--top));background:var(--muted2);position:absolute}#fig-prethink-loop li:before{content:"";left:calc(var(--cx) - 4px);bottom:calc(-1 * var(--top) + 2px);border-right:1.4px solid var(--muted2);border-bottom:1.4px solid var(--muted2);width:7px;height:7px;position:absolute;transform:rotate(45deg)}#fig-prethink-loop li:last-child:after{bottom:calc(-1 * var(--tail));background:var(--spectral-blue);width:1.6px}#fig-prethink-loop li:last-child:before{display:none}#fig-prethink-loop .pl-n{z-index:1;margin-top:var(--top);box-sizing:border-box;border:1.6px solid var(--bone);background:var(--surface);width:30px;height:30px;font:600 12px/1 var(--font-mono);color:var(--bone);border-radius:50%;justify-self:end;place-items:center;display:grid;position:relative}#fig-prethink-loop .pl-i,#fig-prethink-loop .pl-x{padding:24px 0 26px}#fig-prethink-loop li+li .pl-i,#fig-prethink-loop li+li .pl-x{border-top:1px solid var(--line)}#fig-prethink-loop .pl-i svg{width:48px;height:48px;color:var(--bone);display:block}#fig-prethink-loop .pl-i .s{fill:none;stroke:currentColor;stroke-width:1.8px;stroke-linecap:round;stroke-linejoin:round}#fig-prethink-loop .pl-i .b{fill:var(--surface)}#fig-prethink-loop .pl-i .f{fill:currentColor}#fig-prethink-loop .pl-t{font:600 1.15rem/1.35 var(--font-sans);letter-spacing:-.01em;color:var(--bone);margin:0}#fig-prethink-loop .pl-d{color:var(--bone-dim);max-width:640px;margin:.4em 0 0;font-size:.95rem;line-height:1.5}@media (width<=600px){#fig-prethink-loop{--cx:40px;--lw:30px}#fig-prethink-loop li{grid-template-columns:calc(var(--cx) + 15px) 1fr;column-gap:16px}#fig-prethink-loop .pl-i{display:none}}</style>
<ol aria-label="The Prethink loop: five steps, with the last feeding back into the first">
<li><span class="pl-n" aria-hidden="true">01</span><div class="pl-i" aria-hidden="true"><svg viewBox="0 0 48 48"><g class="s"><path d="M22 9 L12 22 M22 9 L32 22 M12 22 L7 35 M12 22 L17 35 M32 22 L32 35"></path><circle class="b" cx="22" cy="9" r="3"></circle><circle class="b" cx="12" cy="22" r="3"></circle><circle class="b" cx="32" cy="22" r="3"></circle><circle class="b" cx="7" cy="35" r="3"></circle><circle class="b" cx="17" cy="35" r="3"></circle><circle class="b" cx="32" cy="35" r="3"></circle></g></svg></div><div class="pl-x"><p class="pl-t">Build LST code models of repos</p><p class="pl-d">An LST is a fully resolved, compiler-accurate model of the repository, capturing both structure and meaning of the code.</p></div></li>
<li><span class="pl-n" aria-hidden="true">02</span><div class="pl-i" aria-hidden="true"><svg viewBox="0 0 48 48"><g class="s"><path d="M5 12 V36 H39 V16 H22 L18 12 Z"></path><path d="M19 22 L14 26 L19 30 M27 22 L32 26 L27 30"></path></g></svg></div><div class="pl-x"><p class="pl-t">Run Moderne Prethink recipes to build context</p><p class="pl-d">Prethink is generated using a set of recipes that run on the LSTs, bootstrapping repository-level knowledge quickly and consistently—structure, intent, constraints, and relationships.</p></div></li>
<li><span class="pl-n" aria-hidden="true">03</span><div class="pl-i" aria-hidden="true"><svg viewBox="0 0 48 48"><g class="s"><rect class="b" x="4" y="19" width="11" height="9" rx="1.5"></rect><rect class="b" x="28" y="7" width="11" height="9" rx="1.5"></rect><rect class="b" x="28" y="31" width="11" height="9" rx="1.5"></rect><path d="M15 23.5 H21 V11.5 H28 M21 23.5 V35.5 H28"></path></g></svg></div><div class="pl-x"><p class="pl-t">Store resulting Prethink knowledge</p><p class="pl-d">Prethink recipes output inspectable CSV, Markdown, and CALM artifacts to a repo or context registry; agent configurations are updated to point to Prethink.</p></div></li>
<li><span class="pl-n" aria-hidden="true">04</span><div class="pl-i" aria-hidden="true"><svg viewBox="0 0 48 48"><g class="s"><path d="M6 15 V8 H13 M29 38 H36 V31 M6 31 V38 H13"></path><path d="M18 19 L13 23.5 L18 28 M24 19 L29 23.5 L24 28"></path></g><path class="f" d="M34 3 L38 7 L34 11 L30 7 Z"></path><path class="f" d="M40 13 L42 15 L40 17 L38 15 Z"></path></svg></div><div class="pl-x"><p class="pl-t">Agents access Prethink in their workflow</p><p class="pl-d">Agents reference Prethink to understand resolved knowledge about the code without needing to parse it—shifting agent effort away from inferring and toward execution.</p></div></li>
<li><span class="pl-n" aria-hidden="true">05</span><div class="pl-i" aria-hidden="true"><svg viewBox="0 0 48 48"><g class="s"><path d="M34 14 A13 13 0 0 0 9 19"></path><path d="M34 6 V14 H26"></path><path d="M10 30 A13 13 0 0 0 35 25"></path><path d="M10 38 V30 H18"></path></g></svg></div><div class="pl-x"><p class="pl-t">Re-run Prethink recipes regularly</p><p class="pl-d">Teams control exactly when and how that context is refreshed—as part of the CI pipeline, on a scheduled cadence, or after major dependency updates and refactors.</p></div></li>
</ol>
</figure>

### The context starts from the Lossless Semantic Tree (LST).

The LST is the full-fidelity code model that has powered deterministic transformation in OpenRewrite for years. It captures both structure and meaning, reflecting what the code represents rather than what it looks like.

Unlike an AST or an embedding, it is a fully resolved, compiler-accurate model of the repository. The LST is:

- **Lossless**. No loss of actionable context for agents, including full type attribution, code intent, and comments.
- **Semantic**. Every symbol, type, method call, configuration reference, and dependency is resolved to what it actually refers to.
- **Tree-based**. Structured and navigable for search, extraction, and transformation with recipes.

That level of [semantic resolution](https://moderne.ai/platform/lst) is what makes it possible to build context agents can trust and reuse. The same model is behind [Trigrep](https://moderne.ai/moderne-agent-tools/code-search), Moderne’s type-aware code search for agents.

### A starter recipe builds the knowledge base.

The starter runs on the LSTs and bootstraps repository-level knowledge in one pass, and customers can customize it.

[**io.moderne.prethink.UpdatePrethinkContextStarter**](https://docs.moderne.io/user-documentation/agent-tools/prethink/#update-prethink-context) builds a comprehensive Prethink knowledge base using deterministic analysis. It exports structured data on dependencies (including transitive trees), test coverage, and related signals, and generates a CALM-formatted architecture diagram.

As a final step, the recipe updates the AI agent configuration files so agents know how to reference Prethink in their day to day work. The starter can also be customized to push Prethink data elsewhere, such as to a context registry.

### The output is committed to the repository in formats agents can read.

Prethink writes its artifacts to the repository’s `.moderne/context/` directory as Markdown, CSV, and [CALM](https://calm.finos.org/) models, where they are versioned and reviewable like any other file.

<table><thead><tr><th>Files</th><th>What it contains</th><th>Examples</th></tr></thead><tbody><tr><td>CSV files (data tables)</td><td>Structured data that AI agents can parse and query directly; used to generate CALM JSON</td><td><code>service-endpoints.csv</code>, <code>database-connections.csv</code>, <code>dependencies.csv</code></td></tr><tr><td>Markdown files</td><td>Context and schema information readable by humans and agents</td><td><code>service-endpoints.md</code>, <code>database-connections.md</code>, <code>dependencies.md</code></td></tr><tr><td>Architecture files</td><td>Architecture as a CALM JSON model, visualized with CALM-compatible tools, plus a Mermaid diagram</td><td><code>calm-architecture.json</code>, <code>architecture.md</code></td></tr><tr><td>Updated agent configuration</td><td>Enables progressive discovery so agents learn about context first, then read relevant files as needed</td><td><code>CLAUDE.md</code>, <code>AGENTS.md</code>, <code>.cursorrules</code>, <code>.github/copilot-instructions.md</code></td></tr></tbody></table>

### Agents read Prethink before they read code.

The updated configuration files tell the agent to consult Prethink as its primary source of repository context. The agent starts from resolved knowledge about the codebase instead of parsing it, and it understands the schema and meaning of the data without extra prompting. It can also use the CALM architecture model. Every agent working in the repo uses the same Prethink knowledge base.

### The context refreshes when the code changes.

Because Prethink is derived from the code, agents work from context that reflects the current state of the repository. Teams control when it’s regenerated: in the CI pipeline, on a schedule, or after major dependency updates and refactors. Agents working through Moderne’s agent tools can also regenerate context incrementally after their own edits, so the knowledge base keeps up with the work the agent is doing. Nobody has to update it by hand.

## Prethink covers the knowledge an experienced developer carries in their head.

To be effective in a real repository, an agent needs the same kinds of knowledge an experienced developer relies on (structure, intent, constraints, and relationships) made explicit and easy to consume. Prethink is designed around that principle, so agents reason faster and more consistently without having to infer or reconstruct it.

### Agents see how the codebase is organized and which conventions recur.

Conventions like error handling, dependency usage, and idiomatic structures aren’t obvious from any single file. Prethink records them, so an agent learns how the code is used in practice.

### Service endpoints, database connections, and messaging patterns are resolved.

External service calls are resolved too, so agents can reason about impact, integration boundaries, and downstream effects with confidence.

### The dependency tree includes transitives.

Version relationships between direct and transitive dependencies are recorded, so impact, compatibility, and risk are visible without relying on incomplete scans.

### Security configuration is visible without reading scattered files.

Prethink surfaces framework-level authentication setup and access controls, so an agent can check a change against how security is actually configured.

### Architecture is described in CALM.

Component relationships are exported as [CALM-formatted](https://calm.finos.org/introduction/key-features) architectural artifacts that describe system structure explicitly. CALM (Common Architecture Language Model) was defined in FINOS as a model both humans and machines can read, so architectural decisions are applied consistently and are easy to audit.

### Tests are mapped to the code they cover.

Coverage is mapped at the endpoint or method level, with each test linked to the implementation it exercises.

### Deployment artifacts are connected back to the code they affect.

Docker and Kubernetes configurations are included, so agents account for deployment constraints and operational considerations when evaluating a change.

<aside class="post-note"><strong>Ready to go deeper?</strong> <a href="https://docs.moderne.io/user-documentation/agent-tools/prethink/" rel="noopener" target="_blank">Explore the Prethink documentation →</a></aside>

## Teams decide what context gets generated.

Recipes generate Prethink’s knowledge, and teams can edit and compose those recipes like any other code. Teams decide what context matters most for their agents: architectural boundaries, dependency usage, security considerations, conventions, migration goals, or all of the above.

Agents then reason from the understanding the organization expects instead of from ad hoc prompts or tribal knowledge. Generating only the context a team chose also keeps irrelevant data out of the agent’s context and removes the need for brittle prompt engineering.

For a closer look at where agent tokens go, and why most of them are spent reading rather than writing, see [Context engineering: why AI coding agents spend most of their tokens reading, not writing](https://moderne.ai/blog/context-engineering-why-ai-coding-agents-spend-most-of-their-tokens-reading-not-writing).

## Agents start every task already knowing the codebase.

When agents have access to Moderne Prethink, they don’t need to guess how a repository works or what’s allowed. They reason from facts, spend their token budget on the task instead of on understanding the code, and produce consistent results across developers and sessions.
