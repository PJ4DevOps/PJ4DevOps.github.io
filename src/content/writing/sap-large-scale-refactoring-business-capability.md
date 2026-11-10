---
title: "Technical debt at scale: inside SAP’s refactoring program"
description: "Technical debt topped SAP's own survey of what blocks developers. Harald Aamot on the ROI case, the recipe community, and holding remediation to a steady rate."
author: "Patricia Johnson"
published: 2026-08-13
tags: ["Code Modernization", "Case Studies", "OpenRewrite"]
originalUrl: "https://moderne.ai/blog/sap-large-scale-refactoring-business-capability"
publisher: "Moderne"
hero: "/writing/sap-large-scale-refactoring-business-capability/hero.png"
---

<aside class="takeaways">
  <p class="tk-h">Key takeaways</p>
  <ul><li>Establishing large-scale refactoring meant selling a different argument to every constituency, from developers to the board. The result: the SAP executive board approved large-scale refactoring as a business capability.</li><li>Technical debt remediation works as a rate, not a project. SAP’s goal is steady capacity so debt never gets steep enough to stall feature delivery, buying the tech stack liquidity to migrate by choice.</li><li>Deterministic refactoring makes AI-speed code change safer. The answer to the board’s “can we do this with AI?” was that rule-based transformation is critical for AI to work at scale. OpenRewrite recipes on Lossless Semantic Trees supply that determinism.</li><li>Scale needs to be built-in from the start. Delivered by Hyperspace (SAP’s internal developer platform organization), the Large Scale Refactoring Center of Expertise, and Moderne, the platform manages 3,500 to 4,000 Lossless Semantic Trees today, with scaling exercises underway toward 100,000.</li><li>A central team cannot write every refactoring recipe, so SAP built an InnerSource community. Contributions are reviewed within three days, contributors become reviewers, and the community now spans 21 repositories, six teams, and 79 contributors, with co-authored recipes ahead of their Spring Boot 4 migration.</li></ul>
</aside>

Harald Aamot, Development Lead for Large Scale Refactoring at SAP, put the Apollo 11 crew portrait on screen at Code Remix Summit and asked the room which of the three astronauts maps to large-scale refactoring.

<figure class="fig-inset">
<img src="/writing/sap-large-scale-refactoring-business-capability/apollo-11-crew.jpg" alt="The Apollo 11 crew in white pressure suits: Neil Armstrong, Michael Collins holding his helmet, and Buzz Aldrin.">
<figcaption>The Apollo 11 crew: Armstrong, Collins, Aldrin. Source: <a href="https://images.nasa.gov/details/S69-31740" target="_blank" rel="noopener">NASA</a>.</figcaption>
</figure>

His answer, the man in the middle. Michael Collins flew a quarter of a million miles to the moon and never set foot on it. While Armstrong and Aldrin took those first steps, Collins stayed with the command module Columbia, alone in lunar orbit. Then he flew all three of them home.

> *“Everybody’s heading for the moon. Everybody’s going on the AI journey. Sooner or later we will need somebody that can bring us back safe to Earth.… looking at refactoring code bases at scale on a rule-based level combined with AI, I see large-scale refactoring as this critical path to get safely back on the ground.”*
>
> — [Harald Aamot](https://www.linkedin.com/in/dr-harald-aamot-09440468/), SAP

SAP’s Hyperspace LLM proxy became generally available to SAP’s entire development community, tens of thousands of developers, in early 2026. Code change on the corporate GitHub has been, in Aamot’s words, “simply exploding.”

<figure class="fig fig-trend">
<p class="fig-h">SAP corporate GitHub</p>
<p class="fig-t">Repositories updated per month, 24 months to April 2026</p>
<div class="tr-plot"><i class="tr-bar" style="height:7%"></i><i class="tr-bar" style="height:6%"></i><i class="tr-bar" style="height:9%"></i><i class="tr-bar" style="height:7%"></i><i class="tr-bar" style="height:6%"></i><i class="tr-bar" style="height:6%"></i><i class="tr-bar" style="height:8%"></i><i class="tr-bar" style="height:6%"></i><i class="tr-bar" style="height:6%"></i><i class="tr-bar" style="height:7%"></i><i class="tr-bar" style="height:7%"></i><i class="tr-bar" style="height:5%"></i><i class="tr-bar" style="height:6%"></i><i class="tr-bar" style="height:7%"></i><i class="tr-bar" style="height:6%"></i><i class="tr-bar" style="height:10%"></i><i class="tr-bar" style="height:7%"></i><i class="tr-bar" style="height:6%"></i><i class="tr-bar is-hot" style="height:11%"></i><i class="tr-bar is-hot" style="height:13%"></i><i class="tr-bar is-hot" style="height:16%"></i><i class="tr-bar is-hot" style="height:21%"></i><i class="tr-bar is-hot" style="height:45%"></i><i class="tr-bar is-hot" style="height:100%"></i></div>
<div class="tr-x"><span>May 24</span><span></span><span></span><span>Aug 24</span><span></span><span></span><span>Nov 24</span><span></span><span></span><span>Feb 25</span><span></span><span></span><span>May 25</span><span></span><span></span><span>Aug 25</span><span></span><span></span><span>Nov 25</span><span></span><span></span><span>Feb 26</span><span></span><span></span></div>
<figcaption>Monthly totals indexed to the highest month in the window. Source: Aamot’s Code Remix Summit session.</figcaption>
</figure>

The pace of change has been accelerating since SAP’s cloud transformation, with code that now evolves every 6 to 12 months. With AI, it’s simpler to change code all the time. SAP’s challenge is to make sure it never feels that way to customers, who still expect decades-long stability.

“We cannot change that the world is changing,” Aamot said. “The world keeps spinning.” What SAP can control is how the change lands: migrate more often so each step stays small, automate the upgrades and migrations, keep up with technology changes instead of saving them up for a decade-sized jump. Hiding that much motion from customers, across thousands of repositories, is command-module work.

Watch Aamot’s full session that tracks how refactoring at scale with Moderne and OpenRewrite became a sanctioned business capability at a 100,000-person company.

<div class="post-embed" style="padding:56.25% 0 0;position:relative"><iframe src="https://player.vimeo.com/video/1214604182?badge=0&#x26;autopause=0&#x26;player_id=0&#x26;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="width:100%;height:100%;position:absolute;top:0;left:0" title="Large Scale Refactoring at SAP | Code Remix Summit 2026" loading="lazy"></iframe></div>

## Tech debt remediation is a rate, not a project

As the pace of change speeds up, compounding technical debt makes it harder to keep up, let alone get ahead. SAP’s developers perceive exactly this. Aamot shared the SAP internal DX Survey 2025, which asked 3,754 developers to name their top three blockers to engineering productivity. Poor or missing documentation led with 1,303 votes, technical debt came second with 1,171, and technical dependencies third with 1,114. Developers described the debt and the dependencies as:

- Massive, over-engineered legacy code with little test coverage
- Culture of shortcuts and throwaway solutions, coping with feature pressure
- Over-engineered and over-complicated app stacks
- Misaligned priorities and ownership of dependencies across teams
- Migrations forced by deprecations, incompatible upgrades

<figure class="fig fig-rank">
<p class="fig-h">SAP internal developer survey, 2025</p>
<p class="fig-t">Top blockers of development productivity</p>
<div class="rk"><div class="rk-row" style="display:contents"><div class="rk-l">Poor or missing documentation</div><div class="rk-t"><span class="rk-bar" style="width:100%"></span><span class="rk-v">1,303</span></div></div><div class="rk-row is-key" style="display:contents"><div class="rk-l">Technical debt</div><div class="rk-t"><span class="rk-bar is-key" style="width:89.9%"></span><span class="rk-v">1,171</span></div></div><div class="rk-row is-key" style="display:contents"><div class="rk-l">Technical dependencies</div><div class="rk-t"><span class="rk-bar is-key" style="width:85.5%"></span><span class="rk-v">1,114</span></div></div><div class="rk-row" style="display:contents"><div class="rk-l">Landscape / infrastructure issues</div><div class="rk-t"><span class="rk-bar" style="width:66.8%"></span><span class="rk-v">871</span></div></div><div class="rk-row" style="display:contents"><div class="rk-l">Product requirements definition and refinement</div><div class="rk-t"><span class="rk-bar" style="width:66.2%"></span><span class="rk-v">863</span></div></div><div class="rk-row" style="display:contents"><div class="rk-l">Team setup (incl. team expertise gaps)</div><div class="rk-t"><span class="rk-bar" style="width:56.1%"></span><span class="rk-v">731</span></div></div><div class="rk-row" style="display:contents"><div class="rk-l">CI/CD (release process)</div><div class="rk-t"><span class="rk-bar" style="width:41.3%"></span><span class="rk-v">538</span></div></div></div>
<figcaption>3,754 responses. Technical debt and technical dependencies rank second and third, behind documentation.</figcaption>
</figure>

Developers live between product owners and customers shouting for new features on one side, and technical debt growing on the other. Aamot contends that “Technical debt is there. It will never disappear. It starts to pile up, and you need strategies to make sure it doesn’t get too steep.”

Debt remediation needs to be managed as a rate. Plan capacity at a steady rate, 20 percent, or one day per week, whatever fits the product, and the mountain never gets steep enough to stall feature delivery. Aamot described it as the Kaizen argument applied to large-scale refactoring: small, frequent, controllable changes, because big jumps end in a mess. Held at a constant rate, remediation buys [tech stack liquidity](https://moderne.ai/blog/tech-stack-liquidity-managing-tech-debt), which is the ability to migrate when you want to rather than because you’re cornered.

## Getting every constituency excited and engaged

Knowing the answer and getting a 100,000-person company to fund it are different problems. “This is where the politics starts,” Aamot said. Establishing the capability meant getting every community at SAP excited about it, one at a time, with an argument built for each.

<figure class="fig fig-who">
<p class="fig-h">Establishing the capability</p>
<p class="fig-t">Who had to say yes, and what won each of them over</p>
<div class="fig-scroll"><svg viewBox="0 0 940 430" role="img" aria-label="Five constituencies had to approve large-scale refactoring at SAP: software developers won by grassroots work and workshops, product owners by constant-rate capacity planning, IT operators by a platform they know how to scale, controllers by concrete cases that save money, and executives as sponsors with an innovation story. All five converge on large-scale refactoring becoming a sanctioned business capability approved by the executive board.">
<defs><marker id="wa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0 0.6 L9.5 5 L0 9.4 z" fill="var(--muted)"></path></marker></defs>
<rect x="16" y="30" width="372" height="66" rx="10" class="nb"></rect>
<g class="pi"><circle cx="46" cy="59.0" r="5.6"></circle><path d="M36.5 74.0 a 9.5 9.5 0 0 1 19 0"></path></g>
<text x="72" y="57" class="nt">Software developers</text>
<text x="72" y="78" class="nw">won by grassroots + workshops</text>
<rect x="16" y="108" width="372" height="66" rx="10" class="nb"></rect>
<g class="pi"><circle cx="46" cy="137.0" r="5.6"></circle><path d="M36.5 152.0 a 9.5 9.5 0 0 1 19 0"></path></g>
<text x="72" y="135" class="nt">Product owners</text>
<text x="72" y="156" class="nw">won by constant-rate capacity planning</text>
<rect x="16" y="186" width="372" height="66" rx="10" class="nb"></rect>
<g class="pi"><circle cx="46" cy="215.0" r="5.6"></circle><path d="M36.5 230.0 a 9.5 9.5 0 0 1 19 0"></path></g>
<text x="72" y="213" class="nt">IT operators</text>
<text x="72" y="234" class="nw">won by a platform they know how to scale</text>
<rect x="16" y="264" width="372" height="66" rx="10" class="nb"></rect>
<g class="pi"><circle cx="46" cy="293.0" r="5.6"></circle><path d="M36.5 308.0 a 9.5 9.5 0 0 1 19 0"></path></g>
<text x="72" y="291" class="nt">Controllers</text>
<text x="72" y="312" class="nw">won by concrete cases that save money</text>
<rect x="16" y="342" width="372" height="66" rx="10" class="nb"></rect>
<g class="pi"><circle cx="46" cy="371.0" r="5.6"></circle><path d="M36.5 386.0 a 9.5 9.5 0 0 1 19 0"></path></g>
<text x="72" y="369" class="nt">Executives</text>
<text x="72" y="390" class="nw">won as sponsors with an innovation story</text>
<rect x="588" y="153.0" width="336" height="132" rx="13" class="ob"></rect>
<text x="756.0" y="203.0" class="ot" text-anchor="middle">Large scale refactoring</text>
<text x="756.0" y="234.0" class="os" text-anchor="middle">sanctioned business capability</text>
<text x="756.0" y="257.0" class="oa" text-anchor="middle">approved by the executive board</text>
<path d="M388 63.0 C492 63.0 475 175.0 579 175.0" class="fl" marker-end="url(#wa)"></path>
<path d="M388 141.0 C492 141.0 475 197.0 579 197.0" class="fl" marker-end="url(#wa)"></path>
<path d="M388 219.0 C492 219.0 475 219.0 579 219.0" class="fl" marker-end="url(#wa)"></path>
<path d="M388 297.0 C492 297.0 475 241.0 579 241.0" class="fl" marker-end="url(#wa)"></path>
<path d="M388 375.0 C492 375.0 475 263.0 579 263.0" class="fl" marker-end="url(#wa)"></path>
</svg></div>
</figure>

**Developers** came first and took a while. Engineers who had run stable stacks for 10 or 15 years needed a real shift in how they thought about change, and that took nine to twelve months of talks, workshops, and grassroots projects through SAP’s Developer Experience Program and engineering ecosystem, seeded with the opinion leaders who carry weight in the community. “You can dictate a lot of things on engineers,” Aamot said, “but you cannot dictate a mindset. It’s something that grows via communication and workshops.” His operating principle: go where the energy flows. Work with the people who care, and the rest get left out of the activities.

**Product owners** were won with the capacity-planning reframe. Remediation at a constant rate protects feature velocity instead of competing with it. The best product managers he sees set a specific number for their teams and hold it.

**IT operators** know the value of platforms. SAP’s tools team already runs Jira and the corporate GitHubs at company scale. They know about simplifying complexity and operating services the whole company depends on. And the pitch nearly wrote itself: host a large-scale refactoring platform, and a lot of developers will be happy with you.

**Controllers** were, in Aamot’s words, the toughest nut to crack, but also the simplest, because only one thing works: money. Specific migration projects, business cases, return-on-investment calculations and a balanced scorecard, built with the controller’s own help so the numbers spoke their language. One case put the work at 60 employee months without OpenRewrite against 17 with it.

> *“You cannot advertise the platform. You’ve got to advertise concrete cases where you can save money.”*
>
> — Harald Aamot, SAP

## Compounding ROI, grounding AI

No single migration justifies a company-wide capability. What worked was what Aamot calls a colorful set of use cases that added up to an overwhelming mass of potential savings.

The scale of repositories does a lot of the convincing. SAP’s cloud ERP alone has 4,000 UI repositories, so one central UI change is instantly a large-scale refactoring problem. And there are [security use cases](https://moderne.ai/solutions/improve-security-posture), both knowing whether a CVE actually affects you, and fixing it when it does. Aamot said he ran an impact analysis and saw the panic from the alerts was bigger than the exposure, because the advisory only applied to one specific use case. With proof you don’t use the affected code pattern, you can skip the emergency patch with confidence. And the list goes on:

- Recipes that detect PII handling and verify audit-logging calls for the regulated industries SAP serves
- [Tech-stack transparency and SBOM generation](https://moderne.ai/moderne-agent-tools) across repositories
- A post-quantum cryptography team evaluating OpenRewrite alongside other vendors to find vulnerable algorithms at scale.

Working with the controller on ROI calculations across these use cases made the savings potential of automating large-scale refactoring evident.

<figure class="fig fig-delta">
<p class="fig-t">Employee months</p>
<div class="dl">
<div class="dl-i"><span class="dl-n">60</span><span class="dl-u">Without OpenRewrite</span></div>
<div class="dl-arrow">→</div>
<div class="dl-i is-key"><span class="dl-n">17</span><span class="dl-u">With OpenRewrite</span></div>
</div>
</figure>

Then came the executives. The first question Aamot got from the board: “Can’t we do this with AI?”

His answer reached back to an earlier career. Before SAP, Aamot spent ten years at the German Cancer Research Center, where he met Emmanuelle Charpentier, co-inventor of CRISPR-Cas9. Gene editing works because it changes specific parts of the DNA, precisely and repeatably. What if you could do that to code? That’s what a [Lossless Semantic Tree](https://moderne.ai/blog/lossless-semantic-tree-the-complete-code-data-model-for-automated-code-refactoring-and-analysis) makes possible: transformation targeted at the exact code that needs to change, deterministic enough to run across thousands of repositories.

> *“This OpenRewrite technology and this Lossless Semantic Tree is exactly something where we can see a lot of innovation in the future.”*
>
> — Harald Aamot, SAP

Large-scale refactoring was not positioned against AI. It runs, in his words, on a rule-based level combined with AI. The precision is what makes the speed of AI safer.

## Implementation: engineered and enabled for scale

Large Scale Refactoring was approved by the SAP executive board as a business capability, delivered collaboratively by Hyperspace (SAP’s internal developer platform organization), the Large Scale Refactoring Center of Expertise (CoE), and Moderne. The plan moves from exploration through rollout to company-wide expansion, and SAP is in the rollout phase today.

Most of what Aamot shared from this phase is operational. Nothing at SAP installs off the shelf. “It’s always super size me,” whether the tool is a security scanner or a refactoring platform. That’s why hosting it with the platform organization mattered so much. The teams that run Jira and the corporate GitHubs at company scale, and that have weathered the AI-driven explosion in GitHub Actions, know how to scale one more platform. Joining them also brought pipelines, automation, and documentation infrastructure that a standalone project would have spent years rebuilding.

The architecture was designed for scale. The [Moderne Platform](https://moderne.ai/platform) runs on SAP-hosted cloud infrastructure, with connectors bridging into the corporate network, a mass-ingest pipeline building Lossless Semantic Trees, and an Artifactory content-delivery network storing them. It manages three and a half to four thousand LSTs today, with scaling exercises underway toward “the 100,000 barrier maybe next year.” The lesson he repeats is that scale needs to be in the architecture in advance.

<figure class="fig fig-arch">
<p class="fig-h">Deployment</p>
<p class="fig-t">How the Moderne Platform is wired into SAP</p>
<div class="fig-scroll"><svg viewBox="0 0 1200 800" role="img" aria-label="SAP deployment map. In the SAP corporate network an admin manages the SAP-hosted infrastructure, and a developer authorizes Moderne against GitHub Enterprise Server (1c) and accesses the Moderne UI (1a). GitHub Enterprise Server holds GitHub Actions and source repositories. A SAP-hosted GCP zone runs the Moderne connector, a mass-ingest pipeline that builds LSTs, and a cleanup script; the connector commits as the user and syncs permissions, the pipeline handles repository management and accesses repos (2a). LSTs are built and stored (2b) and retrieved for cleanup (2c) in LST storage, holding Artifactory as a Maven repository and one Lossless Semantic Tree per repository. The connector sends LSTs outbound (2d) to Moderne SaaS on the internet side, which contains the Moderne UI and Moderne API gateway and authenticates through Keycloak to the corporate Entra ID identity provider (1b).">
<defs>
<marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0 0.6 L9.5 5 L0 9.4 z" fill="var(--muted)"></path></marker>
<marker id="ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0 0.6 L9.5 5 L0 9.4 z" fill="var(--muted)"></path></marker>
</defs>
<rect x="8" y="30" width="700" height="750" rx="12" class="zn"></rect><text x="23" y="52" class="zl">SAP corporate network</text>
<rect x="736" y="30" width="456" height="750" rx="12" class="zn"></rect><text x="751" y="52" class="zl">Internet</text>
<rect x="88" y="62" width="330" height="96" rx="12" class="zn zn-sub"></rect><text x="103" y="84" class="zl">Users</text>
<rect x="104" y="84" width="145" height="56" rx="9" class="nb"></rect>
<g class="pi"><circle cx="136" cy="107.0" r="5.6"></circle><path d="M126.5 122.0 a 9.5 9.5 0 0 1 19 0"></path></g>
<text x="160" y="117.0" class="nt">Admin</text>
<rect x="261" y="84" width="145" height="56" rx="9" class="nb"></rect>
<g class="pi"><circle cx="293" cy="107.0" r="5.6"></circle><path d="M283.5 122.0 a 9.5 9.5 0 0 1 19 0"></path></g>
<text x="317" y="117.0" class="nt">Developer</text>
<rect x="88" y="200" width="430" height="126" rx="10" class="nc"></rect>
<text x="103" y="230" class="nct">GitHub Enterprise Server</text>
<rect x="104" y="250" width="196" height="60" rx="9" class="nb"></rect>
<text x="118" y="285.0" class="nt">GitHub Actions</text>
<rect x="312" y="250" width="194" height="60" rx="9" class="nb"></rect>
<text x="326" y="285.0" class="nt">Source repos</text>
<rect x="24" y="386" width="510" height="262" rx="12" class="zn zn-sub"></rect><text x="39" y="408" class="zl">SAP-hosted cloud (GCP)</text>
<rect x="44" y="430" width="210" height="66" rx="9" class="nb nb-key"></rect>
<text x="58" y="461.0" class="nt">Moderne connector</text>
<text x="58" y="480.0" class="ns">Dials out, never in</text>
<rect x="278" y="430" width="236" height="66" rx="9" class="nb"></rect>
<text x="292" y="461.0" class="nt">Mass-ingest pipeline</text>
<text x="292" y="480.0" class="ns">Builds LSTs</text>
<rect x="44" y="520" width="210" height="54" rx="9" class="nb"></rect>
<text x="58" y="552.0" class="nt">Cleanup script</text>
<rect x="24" y="668" width="510" height="108" rx="12" class="zn zn-sub"></rect><text x="39" y="690" class="zl">LST storage</text>
<rect x="44" y="706" width="210" height="56" rx="9" class="nb"></rect>
<text x="58" y="732.0" class="nt">Artifactory</text>
<text x="58" y="751.0" class="ns">Maven repository</text>
<rect x="278" y="706" width="236" height="56" rx="9" class="nb"></rect>
<text x="292" y="732.0" class="nt">Lossless Semantic Trees</text>
<text x="292" y="751.0" class="ns">One per repository</text>
<rect x="770" y="70" width="300" height="62" rx="9" class="nb"></rect>
<text x="784" y="99.0" class="nt">Entra ID</text>
<text x="784" y="118.0" class="ns">Corporate identity provider</text>
<rect x="830" y="164" width="240" height="54" rx="9" class="nb"></rect>
<text x="844" y="196.0" class="nt">Keycloak</text>
<rect x="760" y="262" width="400" height="240" rx="10" class="nc"></rect>
<text x="775" y="292" class="nct">Moderne SaaS</text>
<rect x="780" y="312" width="360" height="60" rx="9" class="nb"></rect>
<text x="794" y="347.0" class="nt">Moderne UI</text>
<rect x="780" y="392" width="360" height="60" rx="9" class="nb"></rect>
<text x="794" y="427.0" class="nt">Moderne API gateway</text>
<path d="M176 140 L176 168 L52 168 L52 426" class="fl" marker-end="url(#a)"></path>
<text x="60" y="196" class="fll">Manage SAP-hosted infrastructure</text>
<path d="M333 140 L333 196" class="fl" marker-end="url(#a)"></path>
<text x="341" y="172" class="fll">(1c) Authorize via GitHub App</text>
<path d="M406 111 C580 111 620 342 776 342" class="fl" marker-end="url(#a)"></path>
<text x="560" y="170" class="fll">(1a) Access Moderne via UI</text>
<path d="M950 164 L950 136" class="fl" marker-end="url(#a)"></path>
<text x="960" y="156" class="fll">(1b) IDP auth flow</text>
<path d="M950 218 L950 258" class="fl" marker-end="url(#a)"></path>
<path d="M130 426 L130 332" class="fl" marker-end="url(#a)" marker-start="url(#ab)"></path>
<text x="138" y="356" class="fll">Commit as user, sync permissions</text>
<path d="M340 426 L340 332" class="fl" marker-end="url(#a)"></path>
<text x="348" y="378" class="fll">Repository management</text>
<path d="M460 426 L460 316" class="fl" marker-end="url(#a)"></path>
<text x="468" y="356" class="fll">(2a) Access repos</text>
<path d="M396 496 L396 702" class="fl" marker-end="url(#a)"></path>
<text x="404" y="626" class="fll">(2b) Build &#x26; store LSTs</text>
<path d="M149 574 L149 702" class="fl" marker-end="url(#a)" marker-start="url(#ab)"></path>
<text x="157" y="618" class="fll">(2c) Retrieve cleanup LSTs</text>
<text x="157" y="640" class="fll">Clean LSTs</text>
<path d="M254 452 L266 452 L266 600 L640 600 L640 422 L776 422" class="fl" marker-end="url(#a)"></path>
<text x="648" y="560" class="fll">(2d) Send LSTs</text>
<rect x="540" y="656" width="164" height="112" rx="9" class="note"></rect>
<text x="554" y="682" class="notet">Bi-directional over</text>
<text x="554" y="702" class="notet">RSocket. The</text>
<text x="554" y="722" class="notet">connector initiates</text>
<text x="554" y="742" class="notet">every request.</text>
<text x="770" y="560" class="lgd">(1x) User flow</text>
<text x="770" y="584" class="lgd">(2x) LST flow</text>
</svg></div>
<figcaption>Simplified from SAP’s deployment diagram. The connector initiates every connection to the SaaS side over RSocket, so nothing dials into the corporate network. It reads repositories and commits back as the user.</figcaption>
</figure>

Onboarding developers to large-scale refactoring during the frontrunner phase requires a registration. This was automated with a GitHub issue template: a team files a frontrunner registration, and GitHub Actions and AI take it from there, scanning the orgs the team signed up and ingesting the codebases into the platform automatically. This made a developer’s first contact with large-scale refactoring as easy as opening an issue.

The Large Scale Refactoring CoE operates the platform compliantly, helps teams select and implement the right recipes from a catalog of thousands, fields refactoring questions from across SAP, and runs a growing enablement team to get development teams up to speed. As Aamot put it, in the end it’s always humans standing behind it.

## InnerSource: the recipe community

Everything the platform does runs on recipes: deterministic programs that encode a change once (like upgrade this framework, swap that API, fix this vulnerability pattern) and apply it identically across any number of repositories. [Thousands of recipes exist off the shelf](https://moderne.ai/recipes), but enterprise code is so much more, with internal frameworks, reuse libraries, and house conventions. SAP’s is no different, needing custom recipes written once and shared across teams. With SAP’s InnerSource model, the recipe catalog grows the way the code does: from the teams closest to it. The platform becomes a way to render any repetitive change at scale.

Building the community involved lunches, talks, and consulting from SAP’s InnerSource program team. The process lesson Aamot drew from it is blunt: you can design elaborate structures and contribution processes to encourage InnerSource, but “It’s got to be as easy as possible and as simple as possible. Start small. Make it possible for developers to just contribute something and see their code popping up in the platform.” The commitments are concrete, with every contribution reviewed within three days and experienced contributors becoming reviewers. The [OpenRewrite community](https://moderne.ai/openrewrite) at SAP now spans 21 repositories, six teams, and 79 contributors.

A key principle of how they operate: “it’s like we are eating our own dog food,” said Aamot. “All the problems that development teams have to upgrade their dependencies, we apply the same techniques to that ecosystem.” Autonomous bots handle dependency updates across the recipe repositories, so the team can point any product team at a working example. One migration is underway now. Ahead of the [Spring Boot 4 migration](https://moderne.ai/blog/spring-boot-4x-migration-guide), central technology teams and the CoE are co-authoring recipes so a huge tree of downstream dependencies and reuse libraries can migrate automatically.

## All systems go for large-scale refactoring

Aamot’s assessment two years in: “It works so far really stable and really good… Currently, we feel very confident to go up.” Whether large-scale refactoring proves to be the critical path — “we’ll see in two or three years how the journey went.”

Every company is running its own AI moonshot right now. But there’s still a lot of down-to-earth work that must get done across the whole estate: upgrades, migrations, CVEs, impact analyses, and everything coding agents add to the maintenance load. This is work someone has to sell as a company-wide capability, at every level, from the developer to the board, and that’s the hard part. SAP got it done, with a platform to run it, a center of expertise to support developers, and a community writing deterministic recipes that drive large-scale refactoring.

See how Morgan Stanley approached the same conference’s other big question: [what happens to code review when AI writes the code](https://moderne.ai/blog/ai-didnt-break-coding-it-broke-code-review).
