---
title: "Challenges in post-quantum cryptography: Finding and fixing quantum threats at scale"
description: "Discover how Moderne helps enterprises prepare for post‑quantum cryptography by finding and fixing quantum‑vulnerable code across massive, interconnected systems."
author: "Patricia Johnson"
published: 2026-06-25
tags: ["Code Security", "Developer Skills", "Code Analysis"]
originalUrl: "https://moderne.ai/blog/post-quantum-cryptography-implementation-at-scale"
publisher: "Moderne"
hero: "/writing/post-quantum-cryptography-implementation-at-scale/pqc.png"
---

<aside class="takeaways">
  <p class="tk-h">Key takeaways</p>
  <ul><li><strong>The threat is already active.</strong> “Harvest now, decrypt later” means data captured today can be cracked once quantum matures—long-shelf-life data is already at risk.</li><li><strong>The deadline moved up five years.</strong> A June 2026 executive order gives federal high-value systems until 2030, not 2035, and the rules extend to contractors and their vendors.</li><li><strong>Finding your exposure is step one.</strong> Vulnerable crypto patterns hide in shared libraries, infrastructure configs, and cross-repo code, often buried under abstraction layers.</li><li><strong>Surface scans aren’t enough.</strong> Pattern-matching tools produce false positives and miss how a vulnerability in a shared library ripples across services. Moderne’s LSTs enable semantic, cross-repo detection instead.</li><li><strong>Cross-enterprise taint tracking is the differentiator.</strong> Most tools trace data flow inside one repo; tracking taint across an entire enterprise is where Moderne stands alone—proven by the bank insight delivered in under 12 hours.</li></ul>
</aside>

No matter your industry, it’s time to prepare for the quantum computing threat. Think of all the encrypted systems in use today: banking apps, healthcare records, government communications. Every one of them is potentially breakable by quantum computers—and the risk isn’t as far off as it seems.

The real danger isn’t a future hack. It’s the “harvest now, decrypt later” strategy already in play. Malicious actors can capture encrypted data today and hold onto it, waiting until quantum capabilities mature enough to crack it.

In addition, the White House has issued an [executive order](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/), “Securing the Nation Against Advanced Cryptographic Attacks,” that moved the post-quantum deadline up by nearly five years. Federal high-value systems now have until 2030 to drop quantum-vulnerable encryption (not 2035), and the rules apply to contractors and their vendors too. For most organizations, that’s a hard deadline against a cryptographic inventory they’ve never measured.

That’s why post-quantum cryptography (PQC) is no longer theoretical. Designed to withstand both classical and quantum attacks, PQC is the path forward. But getting there requires a massive first step: finding quantum-vulnerable code across sprawling, interconnected systems.

## What is Post-quantum Cryptography?

Post-quantum cryptography (PQC) refers to encryption methods designed to remain secure against future quantum computers that are expected to break current cryptographic standards.

What’s your level of readiness for quantum-era threats?

Moderne co-founder and OpenRewrite creator Jonathan Schneider recently partnered with a global banking leader actively working to address this very question. The organization had identified a set of cryptographic anti-patterns they knew were risky—but had no clear path to find them across billions of lines of code. What followed was a breakthrough in both speed and scale of crypto detection—setting the foundation for PQC readiness at enterprise scale.

## The first step in PQC: Know where you’re exposed

Many large organizations—especially in finance and government—have already launched post-quantum initiatives. They have research teams mapping the threat landscape, staying close to the [National Institute of Standards and Technology (NIST)](https://csrc.nist.gov/projects/post-quantum-cryptography) algorithm standardization process, and contributing to working groups like [Evolution @ Scale](https://devops.finos.org/docs/working-groups/eas/) from FINOS alongside their peers.

Most recently, the White House executive order also requires CISA, in coordination with NIST, to [release public guidance](https://blog.cloudflare.com/post-quantum-eo-2026/) within 270 days on the minimum elements of a cryptographic bill of materials (CBOM). The point of a CBOM is an ingredient list of the cryptographic assets in a piece of hardware or software, structured so the assessment can be automated.

The main challenges of implementing a cryptographic assessment often lie in deeply embedded, legacy code structures and defaults. Vulnerable patterns are buried in shared libraries, infrastructure configs, and cross-repo code—and often obscured by abstraction layers.

Even if you have identified the problematic patterns, how do you find them throughout your large and complex codebases?

That was exactly the challenge the global bank brought to Moderne. Even with a well-researched list of cryptographic anti-patterns in hand, finding those patterns across their codebase had proven difficult—if not elusive. Two previous attempts working with other partners had failed. What they needed was a way to turn their PQC readiness strategy into an executable, repeatable engineering process.

> “Right now, every organization is trying to figure out what PQC readiness really means for their systems. Moderne is built to collaborate in exactly this moment. We’re helping teams accurately identify where they’re exposed, and working with them to define scalable ways to move forward to secure their codebases.”
>
> — Jonathan Schneider, CEO of Moderne

## From zero to insight in under 12 hours

Jonathan and the Moderne team responded with urgency. Within 12 hours of receiving the bank’s requirements, Moderne had:

- Built a suite of OpenRewrite recipes tailored to the bank’s anti-patterns
- Validated the recipes by running them across tens of millions of lines of open source code
- Delivered recipes to run across the bank’s code to highlight exactly where vulnerable cryptographic logic was located

These weren’t simple regex scans. Moderne used [Lossless Semantic Trees (LSTs)](https://moderne.ai/blog/lossless-semantic-tree-the-complete-code-data-model-for-automated-code-refactoring-and-analysis)—a structural, semantic representation of code that captures full syntactic fidelity and deep contextual understanding (like symbol resolution, type info, and config propagation). LSTs enable:

- Accurate detection across massive codebases
- Cross-repo visibility—even into shared libraries
- Version-aware scanning that accounts for library or JDK behavior
- Semantic accuracy that minimizes false positives

The result? The bank was able to see their exposure clearly across a set of repositories. They now have tools in place to plan their next steps.

While today’s work often focuses on detecting the use of classical encryption algorithms (e.g., RSA or ECC usage), the future will evolve to support remediation with specific PQC algorithms—like code-based post-quantum cryptography and lattice-based implementations. These transformations must reflect not only NIST selections but practical migration paths for enterprise systems.

## 10 vulnerable encryption algorithms open to quantum attack

Moderne’s recipes now support detection of more than 10 [cryptographic anti-patterns](https://codegenomeproject.org/recipes?q=io.moderne.cryptography) that can create enterprise risk from quantum computing. These anti-patterns reveal vulnerable encryption algorithms that are no longer considered safe in the post-quantum era. Identifying them is the first step toward scalable mitigation:

<table><thead><tr><th>PQC anti-pattern</th><th>Why it’s a risk</th></tr></thead><tbody><tr><td>Hardcoded PEM (privacy enhanced mail) keys</td><td>Vulnerable to exfiltration; hard to rotate</td></tr><tr><td>Protocols hardcoded (e.g., TLS 1.0)</td><td>Forces use of outdated versions that may be quantum‑vulnerable</td></tr><tr><td>Cipher suites hardcoded</td><td>May include unsafe or weak ciphers</td></tr><tr><td>Algorithms hardcoded (e.g., RSA, AES/ECB)</td><td>Locks in calls to insecure crypto choices</td></tr><tr><td>Algorithm‑specific parameters hardcoded</td><td>Uses weak key sizes or insecure modes</td></tr><tr><td>Global SSLContext overrides</td><td>Applies insecure settings system‑wide</td></tr><tr><td>Programmable security provider list</td><td>Ability to override secure defaults</td></tr><tr><td>Insecure <code>Security.setProperty()</code> usage</td><td>Overrides defaults and weakens security posture</td></tr><tr><td>SSL misconfigurations</td><td>Bypasses secure defaults; often missed in frameworks and wrappers</td></tr><tr><td>Issues invisible to scanners</td><td>Semantic patterns that bypass text‑based tools</td></tr></tbody></table>

## Why PQC remediation demands semantic depth, not surface scans

Most legacy code analysis tools simply weren’t built for the scale and complexity of post-quantum cryptography readiness. For example, regex-based scanning lacks the context to distinguish between meaningful patterns and harmless strings, and local development with wide context windows fails to scale effectively.

These tools also miss transitive relationships—tracing symbolic or semantic flow across boundaries. This means they can’t see how a vulnerability in a shared library might ripple across dozens of services.

That’s why modern remediation efforts, such as solving for PQC issues, demand a more intelligent, semantically aware layer of analysis, one that can follow how insecure logic actually flows through your systems.

PQC remediation is rarely a find-and-replace. The hard part is connecting the dots: an outdated algorithm named in one place can end up configuring your web server in a completely different part of the project—or in another repository entirely. Catching that means tracing how a value is *used*, not just where it’s *mentioned*.

Moderne’s serialized LSTs make that tracing possible at scale. Using control flow and data flow analysis, Moderne follows how values like hardcoded keys, insecure defaults, and outdated algorithm selections propagate through function calls, class hierarchies, and across repository boundaries. Plenty of tools can trace data flow inside a single repository. [Tracking taint across an entire enterprise’s codebases](https://moderne.ai/blog/overlapping-taint-sources-a-challenge-in-static-analysis-solved) is where Moderne stands alone.

The result: you don’t just locate vulnerabilities, you understand their full impact—what calls them, what they influence, and how to remediate them safely, without introducing regressions.

## Is your code ready for the quantum era?

Organizations don’t have the luxury of waiting for quantum machines to arrive. Several forces are driving the urgency:

- **Data with a long shelf life is already vulnerable.** Medical records, legal contracts, government communications—data stolen today may be decrypted years from now.
- **The deadline moved up 5 years.** A June 2026 executive order gives federal high-value systems until 2030, not 2035, to drop quantum-vulnerable encryption.
- **PQC is rapidly maturing.** NIST has developed standards, with algorithms selected and implementation recommendations available. They are also collaborating on CBOM guidelines with CISA.

Preparing critical systems for the quantum era is more than new algorithms. It requires a coordinated, code-level migration strategy. Now is the time to research, collaborate, and plan. The sooner you assess and reduce your quantum exposure, the more futureproof your systems become.

[Contact Moderne](https://moderne.ai/contact-us) to learn how we can help you prepare your codebase for the quantum era.
