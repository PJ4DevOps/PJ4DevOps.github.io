---
title: "Modern, scalable AppSec: Advances in automation and AI security"
description: "Learn how to modernize AppSec with automated fixes for legacy code, AI security threats, and compliance needs."
author: "Patricia Johnson"
published: 2025-07-07
tags: ["Code Security", "AI/ML", "Code Modernization"]
originalUrl: "https://moderne.ai/blog/scaling-appsec-with-ai-and-automation"
publisher: "Moderne"
hero: "/writing/scaling-appsec-with-ai-and-automation/crs-appsec-blog.jpg"
---

Application security has long been a challenge for development teams, especially without the automation or visibility needed to manage risk at scale. The [numbers](https://www.veracode.com/wp-content/uploads/2025/02/State-of-Software-Security-2025.pdf) tell the story: nearly half of enterprise applications still contain OWASP Top 10 flaws, and over 56% have high-severity vulnerabilities. Even well-known threats like Log4Shell remain unpatched years after disclosure.

At the same time, a new threat landscape is emerging. As generative AI and large language models (LLMs) become embedded in modern applications, security teams are contending with vulnerabilities that defy traditional analysis: prompt injection, model abuse, data leakage, and hallucinated logic paths. These are challenges that demand new thinking, new tools, and new safeguards.

So how can you manage both the vulnerabilities piling up in aging codebases and the new class of security concerns introduced by AI-powered systems?

In this post, we’ll look to Code Remix Summit speakers and sponsors for answers. Whether you’re securing what you’ve already built or what AI is helping you build next, one thing is clear: now is the time for application security to scale.

## Existential question: What is application security (and can I automate it!)?

Brian Sletten, in his [session at Code Remix Summit](https://youtu.be/wu31UfOUOgY), shares that AppSec is contextual based on what you are trying to protect the business and users from. Application security is a practice embedded in how software is developed, resourced, and maintained across the organization. And because security competes with every other engineering priority, organizations need a method for balancing risk management with development progress.

> “We can’t spend all of our time doing security, but we can’t spend none of our time doing security either. We have to find a way to define what ‘good enough’ is and put some risk model and metrics around it.”
>
> — Brian Sletten

What’s good enough, though? Not every vulnerability is critical, and not every system needs the same level of attention. He emphasizes building a risk model based on business impact, so teams can focus on what matters and avoid wasting cycles on the rest. He also urges teams to think beyond use cases—what the system should do—and consider abuse cases: what it should never do. These patterns of misuse are essential inputs to validate coverage of your risk model:

![](/writing/scaling-appsec-with-ai-and-automation/ad-4nxd2dzt8sa-lglakr9r6y4cwsb83s3hdxlnicxhd2e9xby-1130a04a.png)

And increasingly, Sletten points out, elements of your risk model can be automated, like automating security policies, security testing, and vulnerability remediations. That’s where automated software security tools like OpenRewrite come in.

OpenRewrite enables teams to [codify security rules and remediations as reusable recipes](https://moderne.ai/solutions/improve-security-posture)—automating everything from dependency upgrades to the removal of insecure code constructs across thousands of repositories. Sletten sees OpenRewrite as a critical tool for tackling the “low-hanging fruit” of AppSec—issues that are clearly defined, repeatable, and widespread. While no tool alone can secure a system, OpenRewrite and the Moderne Platform give teams the power to encode, apply, and repeat security policy as code.

He highlights how the tools can be used to:

- Identify vulnerabilities using rules-based logic
- Apply automated patches rather than just flagging issues
- Provide visibility and customization, allowing teams to define their own rules and enforce security policies consistently
- Integrate with build pipelines to support continuous enforcement

Sletten demonstrates OpenRewrite security capabilities and reviews recipes for finding and fixing vulnerable dependencies, Java security best practices, OWASP Top Ten remediations, finding secrets in source code, among many useful others. “So this is why getting something like the OpenRewrite or Moderne tool chain into your build system is so crucial.” It’s about tackling what’s most fixable and embedding safeguards directly into development workflows.

## AppSec at scale: Accelerating upgrades and saving millions

While Sletten laid out the what, Kevin Brockhoff [in his session](https://www.youtube.com/watch?v=XckFPrw0wkM) delivered the how—sharing a real-world story of remediating security vulnerabilities across a massive, fragmented enterprise. Urgency was high in this organization due to a platform change, a FedRAMP mandate, and a discovery that the container image scanner had been disabled because it was flagging too many issues and slowing feature delivery.

> “Imagine a giant corporation with hundreds of product development teams… How do you remediate thousands of container images with 80 to 100 vulnerabilities each when facing a deadline for FedRAMP compliance?”
>
> — Kevin Brockhoff

Brought in as a consultant, Brockhoff wasn’t just tasked with rapidly fixing code at scale. He had to win hearts and minds across hundreds of development teams made up of acquisitions and siloed stacks. In fact, one acquisition had brought in over 3,000 Java applications sharing a centrally-developed, opinionated framework.

And the scars of the past were still fresh: a previous Log4j remediation project had been estimated at $24 million in developer effort and coordination overhead. They were still running critical services on Spring Boot 1.5 and legacy Java versions. And there was no single way to coordinate security upgrades.

Brockhoff’s team took the approach to automate everything possible with OpenRewrite.

The project began with a full codebase inventory, identifying the most outdated and vulnerable systems. They then prioritized updates that would both reduce risk and consolidate tech debt—targeting Spring Boot, Java, and key third-party dependencies.

By encoding upgrade logic and security fixes as deterministic OpenRewrite recipes, they were able to:

- Upgrade Spring Boot 1.x to 2.x+ and Java 8 to 11+ across disjointed teams, including config file and API changes
- Eliminate deprecated annotations and insecure logging patterns
- Remediate transitive vulnerabilities in third-party libraries
- Standardize container build pipelines and manifest definitions
- Apply repeatable, testable refactorings that preserved application stability

A key result: the entire Spring Boot and Java modernization across codebases was accomplished for $300,000, including consulting time, recipe build/testing time, and developer time to validate the changes.

Additional follow-on infrastructure work reaped some surprising savings for the client. The client was facing a $3 million hardware purchase to support their Kubernetes workloads, a price tag they wanted validated. Brockhoff’s team was able to create a custom OpenRewrite recipe that integrated with an observability platform to analyze average CPU usage/spikes and existing manifest configurations. They discovered the real issue: most containers were significantly overprovisioned. By fixing resource allocation settings in deployment files, they enabled the client to avoid the massive hardware spend entirely.

> “The average CPU utilization went from 3% to 17%, which sounds low but that’s actually higher than average for the industry.”
>
> — Kevin Brockhoff

But the breakthrough wasn’t just technical. Brockhoff had to lead a cultural shift—helping teams see modernization not as toil, but as leverage. His team showed how automated upgrades could reduce long-term risk, consolidate fragmented platforms, and protect delivery velocity. The client’s Java Framework team took over remediation with OpenRewrite and Moderne, adoption of automation grew across client teams as projects progressed, and release upgrade recipes are now in place for use by the client with each framework or platform release.

## Smarter AppSec: Fix weaponized threats first

Between CVE feeds, GitHub alerts, SCA reports, and internal scans, security teams are overwhelmed with findings. The real question isn’t what’s vulnerable—it’s what actually poses a threat *now*. That’s why [VulnCheck](https://vulncheck.com/), a Code Remix Summit sponsor, partnered with Moderne to bring VulnCheck Exploit Intelligence directly into the remediation workflow.

By default, Moderne includes recipes to detect and fix vulnerable dependencies based on data from sources like the GitHub Advisory Database. But those recipes focus on known vulnerabilities, not exploited ones. VulnCheck adds the missing layer of real-world threat intelligence, helping development teams feed their risk models with actionable data.

By tracking which CVEs are being actively exploited by ransomware gangs, botnets, or state-backed threat actors, VulnCheck enriches OpenRewrite recipes with the ability to prioritize based on what’s happening in the wild. This lets teams zero in on the small subset of vulnerabilities that actually represent the highest business risk.

Through the VulnCheck-powered recipe in Moderne, teams can:

- Focus only on actively exploited vulnerabilities
- Configure upgrades based on exploit severity (e.g., public, commercial, or weaponized)
- Choose upgrade depth and whether to override transitive dependencies
- Execute secure, source-aware upgrades across all affected repositories

Check out our demo of the VulnCheck recipe in action:

[▶ Watch on YouTube](https://www.youtube.com/watch?v=mPi8DzVyRPY)

## AppSec for the AI age

While most application security practices focus on conventional code and architecture, Brian Clark brought the spotlight to a fast-emerging risk surface: the security of AI-driven applications. As he outlined in his [Code Remix Summit talk](https://www.youtube.com/watch?v=1IVpW9J93_k), modern generative AI systems are introducing a new class of vulnerabilities—ones that often defy traditional analysis.

Clark walks through the [OWASP Top 10 for LLM applications](https://genai.owasp.org/2023/10/18/llm-to-10-v1-1/), which introduces threats like:

- **Prompt injection** – where attackers manipulate input to override or influence model behavior
- **Excessive agency** – where agents have too much functionality, permissions, autonomy
- **Data and model poisoning** – injecting malicious data to skew outputs or enable a backdoor
- **Supply chain** – when LLM supply chains are injected with malicious code or outdated
- **Misinformation** – when hallucinated, inaccurate, or misleading results are trusted by downstream systems**‍**
- **Sensitive information disclosure** – where models expose proprietary or private data in their output

![](/writing/scaling-appsec-with-ai-and-automation/ad-4nxcbhyerojrakbg1auzm-vzi-vn7aebwex5pfxyaihar8x-9f7dc216.png)

These aren’t just speculative. Clark live hacked AI assistants during his session to demonstrate how even widely adopted AI tools can be manipulated in real time. He shows how easily they can be tricked into revealing information, bypassing safeguards, and generating insecure code.

So how do we defend against something that’s dynamic by design?

Clark recommends multiple layers of mitigation strategies, including:

- Input validation and output filtering—don’t rely on LLMs alone to enforce rules
- Fine-tuning and reinforcement learning with human feedback (RLHF)
- Rate limiting and behavioral analytics to detect abnormal usage patterns and abuse
- Model compartmentalization that breaks tasks into isolated components to reduce risk
- Continuous red teaming, regularly testing the system with adversarial prompts

He emphasizes that developer education is critical, as many engineers building with AI don’t have a background in security.

The takeaway: we need to rethink security boundaries in systems that are probabilistic, generative, and adaptive by nature. Traditional defenses like SAST and SCA still have a role—but alone, they’re not enough.

## Adapting to the new shape of software risk

The threat landscape isn’t standing still. From aging dependencies to the chaos of AI behavior, vulnerabilities are everywhere—and growing. To meet this moment, application security must scale.

With tools like [OpenRewrite and the Moderne Platform](https://moderne.ai/platform), organizations can stop chasing issues one by one and instead build an automated, scalable approach to remediation—one that adapts to new security challenges, application complexity, and evolving compliance requirements.

As LLM-driven applications accelerate and introduce new classes of threats, the foundation built through scalable security practices becomes even more critical. It provides the structure to detect, prioritize, and address risk no matter how fast the landscape evolves.

Don’t wait. Moderne can help you identify and eliminate security threats in your code.

**List of videos:**

- [Taming Vulnerability Remediation at a Sprawling Fortune 50 Company](https://www.youtube.com/watch?v=XckFPrw0wkM) – Kevin Brockhoff
- [Securing AI: A practical guide to AI threats and mitigation strategies](https://www.youtube.com/watch?v=1IVpW9J93_k) – Brian Clark
- [Automating Security Fixes with OpenRewrite: Patching Vulnerabilities Across the Codebase](https://drive.google.com/file/d/1yp5uvOcc5_nk8a9InjGcV7-d4rZ1P7jX/view?usp=sharing) – Brian Sletten
