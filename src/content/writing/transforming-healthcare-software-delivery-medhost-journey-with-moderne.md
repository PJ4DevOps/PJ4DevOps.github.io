---
title: "Transforming healthcare software delivery: MEDHOST’s journey with Moderne"
description: "Learn how MEDHOST tackled technical debt with automated code refactoring and quality, transforming its software delivery process."
author: "Pat Johnson and Chris Prendergast"
published: 2024-09-27
tags: ["Case Studies", "Code Modernization", "Code Analysis"]
originalUrl: "https://moderne.ai/blog/transforming-healthcare-software-delivery-medhost-journey-with-moderne"
publisher: "Moderne"
hero: "/writing/transforming-healthcare-software-delivery-medhost-journey-with-moderne/medhost-blog.jpg"
---

[MEDHOST](https://www.medhost.com/), a pioneer in healthcare technology, has been at the forefront of providing software solutions tailored to the unique needs of small and medium-sized hospitals, particularly those in rural areas. For over 40 years, MEDHOST has navigated the complexities of the healthcare industry, enabling its customers to better manage hospital operations while meeting the stringent demands of regulatory compliance and patient safety.

In a rapidly evolving industry, MEDHOST is committed to advancing their technology tools and optimizing codebases to ensure they remain at the forefront of innovation and compliance. This case study explores how MEDHOST is leveraging Moderne for automated code refactoring and quality, transforming its software delivery process.

## MEDHOST: Leading the charge on compliant, secure, modern software

MEDHOST’s mission is clear: to empower healthcare organizations to advance the patient care experience and improve business operations. They do this through software solutions covering everything from patient registration to clinical and emergency department experiences to discharge and billing—all within a framework that ensures compliance with strict healthcare regulations.

> Pandian Velayutham, MEDHOST’s VP of Technology Strategy, explains, “Our software is not just about functionality; it’s about adhering to legal compliance and government regulations, especially in the rural communities where we operate.”

Velayutham manages the Cloud and Modern Technologies Team that works on the cloud-based solutions, web applications, and mobile technologies that form the new face of MEDHOST product offerings. Java is their main programming language, and AWS is their primary cloud provider. This team handles everything from the development of new features to the automation of infrastructure through DevOps practices.

Operating in such a regulated environment comes with many challenges. MEDHOST’s software must undergo rigorous testing and certification processes before it can be deployed in hospitals—making it crucial for the company to maintain high standards of code quality and security.

Technical debt is a significant consideration in software development; as Velayutham explains: “When it comes to technical debt, we make decisions based on how much time it’s going to take to develop, test, and push to production. Managing this debt is critical, especially in healthcare.” MEDHOST understands that outdated code, obsolete libraries, and security vulnerabilities can slow down development and pose significant risks.

## The MEDHOST and Moderne partnership forms

The process of upgrading and maintaining codebases had become increasingly complex, particularly as the company moved towards cloud-based solutions. This is where Moderne came into the picture. Velayutham, who has been hands-on throughout his career, understood the pain points of upgrading software:

> “Addressing one library often means addressing several others, and this can lead to a cascade of changes that are difficult to manage manually.”

Before Moderne, Velayutham and his team would manage code upgrades as projects involving strategic planning and developer training. “We would sit down as a team, develop a strategy, and then educate our developers on how to implement it,” Velayutham recalls. The team would assess the impact of technical debt on the overall system and prioritize tasks based on factors such as regulatory deadlines, potential security risks, and the availability of resources.

Moderne offered a solution that could automate much of this process, ensuring consistency and reducing the potential for human error. “Now, with Moderne, the validation and fixing happen automatically as part of the development process,” Velayutham says. The platform allowed MEDHOST to create and apply code refactoring recipes across their more than 45 repositories, standardizing changes and ensuring they met the company’s rigorous quality standards.

## Migrating to Java 17 with Moderne

MEDHOST’s initial priority with Moderne was to manage the[ upgrade from Java 11 to Java 17](https://docs.openrewrite.org/running-recipes/popular-recipe-guides/migrate-to-java-17). This was no small task, given the complexity of their software and the critical nature of their applications. “We started by working closely with Moderne’s team to create custom recipes tailored to our needs,” says Velayutham. “These recipes helped us automate the upgrade process, ensuring consistent changes across all relevant repositories.” The automated upgrades included not only Java 17, but also Spring Boot 2.7.4, JUnit 5, and dependency changes, among many others.

One of the early successes was the ability for developers who were not traditionally Java experts to perform these upgrades. “One of our .NET developers was able to upgrade Java technologies because of Moderne. That’s a huge testament to how user-friendly and effective the tool is,” adds Velayutham.

Their organization estimated a 30-50% reduction in the time required to complete the upgrade and refactoring tasks to Java 17 as opposed to doing it manually, resulting in substantial time savings across the board.

> “For each repository, we’ve saved up to three days of developer time, which adds up to over 100 days of savings across our microservices. And this is repeatable going forward,” Velayutham reports.

With the successful implementation of Moderne for their Java upgrade, MEDHOST is already looking ahead to future upgrades and other potential uses for the platform. “We’re already talking about the next Java upgrades, to versions 21 and 22,” says Velayutham. This will be an ongoing process for MEDHOST, and Moderne will play a crucial role in helping them stay current without the usual headaches associated with large-scale upgrades.

## Implementing CI security and quality gates with Moderne

Following the success of the Java upgrade, MEDHOST expanded its use of Moderne. The next priority was to implement a standard recipe that could be applied to every code commit, ensuring that all changes met the company’s quality standards before being merged into the main codebase.

Previously, developers would find a problem during a code review and decide whether to fix it immediately or defer it. Moderne can identify and resolve these issues automatically and consistently, reducing the need for manual intervention.

MEDHOST has bundled the following transformation recipes into one composite recipe that runs during the CI/CD process:

- [Find secrets](https://codegenomeproject.org/recipes/org.openrewrite.java.security.secrets.FindSecrets) like passwords, encryption keys, access tokens
- [Use secure random number generation](https://codegenomeproject.org/recipes/org.openrewrite.java.security.SecureRandom)
- [Java security best practices](https://codegenomeproject.org/recipes/org.openrewrite.java.security.JavaSecurityBestPractices)
- [OWASP Top 10](https://codegenomeproject.org/recipes/org.openrewrite.java.security.OwaspTopTen)
- [Find and fix vulnerable dependencies](https://codegenomeproject.org/recipes/org.openrewrite.java.dependencies.DependencyVulnerabilityCheck)
- [Common static analysis fixes](https://codegenomeproject.org/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis)
- [SLF4J logging best practices](https://codegenomeproject.org/recipes/org.openrewrite.java.logging.slf4j.Slf4jBestPractices)

“This has been a game-changer for us,” Velayutham says. “We now have a recipe in place that ensures consistency across our products. We no longer have to worry about whether every developer is applying the same standards—Moderne takes care of that.” Because the platform does the heavy lifting to clean up the code, MEDHOST developers can focus on building new features rather than worrying whether their code meets the organization’s standards.

## Adapting to a new way of working

Despite the clear benefits, the transition to using Moderne was not without its challenges. As with any new tool, there was a learning curve and some initial resistance from developers. “There was some friction implementing this tool with the developers,” admits Velayutham. “But as people got used to it, that resistance began to fade.”

Another challenge was the impact on the quality assurance (QA) process. The volume of changes introduced by Moderne automation meant that QA teams had to adapt their testing strategies to ensure nothing was missed. Sagar Shah, Principal Software Architect at MEDHOST, states, “We need thorough regression testing to make sure that the automated changes don’t introduce new issues.”

However, both Velayutham and Shah are confident that these challenges are temporary. “Once we stabilize these products and developers get used to it, the benefits will far outweigh the initial challenges,” Velayutham concludes.

A side effect that Velayutham sees as a big success is that junior engineers learning Java can see how to write better code by using the Moderne recipes.

## Expanding the use of Moderne in MEDHOST

The introduction of Moderne at MEDHOST has been nothing short of transformative. What began as an initiative to streamline the Java upgrade process has evolved into a broader strategy for modernizing the company’s entire software development lifecycle.

> “Moderne has definitely improved our code quality and helped us standardize our code,” says Velayutham. “It is an important tool that positions us to keep pace with the rapidly evolving technology landscape.”

MEDHOST is also exploring using Moderne for other technologies, including front-end frameworks and infrastructure-as-code tools like Terraform. “The flexibility of Moderne is one of its greatest strengths,” says Velayutham. “We’re looking forward to exploring its potential in other areas of our development process, especially as we modernize our tech stack.”

For other organizations facing similar challenges, Velayutham has a clear message: “If you’re facing the same challenges we did, Moderne can help you. The tool integrates seamlessly with our CI/CD pipeline, and our developers barely notice it’s there.”

> Velayutham adds, “Your code quality is going to get much, much better, and you are going to have fun upgrading to the next version instead of fearing it.”

By adopting Moderne, MEDHOST has improved its ability to manage technical debt and positioned itself to handle future upgrades and regulatory changes with greater agility. This proactive approach ensures that the company can continue to deliver high-quality, compliant software to its healthcare clients without being weighed down by the burdens of technical debt.

To learn how Moderne can help you modernize, maintain, and secure your codebase more effectively,[ contact us](https://moderne.ai/contact-us).
