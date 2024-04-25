---
date: 20240425
author: ive-verstappen
tags: agile,scrum
hidden: false
description: Use Cornucopia for planning your security features into your product backlog
---
# Avoid using "gut feeling" to prioritize your product backlog

After playing the Cornucopia card game, you should have created an ordered list of product backlog items. The concept of a Product Backlog is easy to understand: the highest priority Product Backlog Item (PBI) should be the next one to work on. So, prioritizing the PBIs of most importance is key. There are two categories of product backlog items:

- Functional Product Backlog Items
- Nonfunctional Product Backlog Items

Ok, but how should we decide which PBI's to work on next?

Let us look at 3 sources of value:

## Sources of Business value:

1. **Market Value**
   
- Does the PBI allow us to sell more units?
- Can we charge a higher price?
- Can we reduce the cost of providing the product/service?

2. **Risk Reduction**
- Can we reduce the risk of a security incident?
- Can we reduce the risk of downtime of the system?
- Can we refine our hypotheses of the market?
- Can we prove technical assumptions?

3. **Capability Building**
- Can we enable our team to build something we couldn't before?
- Can we reduce the need for low-value activity?
- Can we improve quality?
- Can we improve productivity?

## A pragmatic approach to prioritize your Product Backlog with Security in mind

I propose balancing 2 ideas in order to have a good grasp on your risks for your application:

1. Decide how high you want your "security-bar" to be for your application
2. Strategically plan your implementation and look for shortcuts

### Clear your "security bar"

Cornucopia and its inherent prioritization-system (by the value of the card) can provide a decent guide to define which bar to clear for the security of your application.

OWASP ASVS can be of great help to define your security bar. ASVS is divided into 3 levels, going for level 1 regarding security is an obvious choice.

On our website, we have provided a full overview of ASVS. Here is the overview of Level 1: [ASVS Level 1 Controls](https://cornucopia.dotnetlab.eu/taxonomy/ASVS-4.0.3/level-1-controls)

### Strategically plan your implementation and go for shortcuts

If you look at ASVS Level 1, you will see lots of requirements concerning authentication and the corresponding security. Implementing OAuth2 with the major systems (Google, Apple, Microsoft, Meta, ...) could provide an excellent shortcut and greatly simplify your implementation.

We strongly advise teams to go for an approach whereby you choose to entirely avoid storing user-information within your system.

## Embracing Automated Security Testing

As we continue to build our Product Backlog with security as a foundation, automated security testing becomes indispensable. By integrating tools that perform static and dynamic analysis, teams can identify vulnerabilities in real-time, as code is written and committed. This proactive approach ensures that security is not just a single checkpoint but a continuous thread throughout the software development lifecycle.

## Continuous Education and Security Awareness

Building secure software is an evolving challenge that requires a commitment to continuous education and awareness. Regular training sessions, security workshops, and game-based learning, such as the Cornucopia card game, can keep the team updated on the latest security trends and threats.

Furthermore, instilling a culture of security awareness where every team member feels responsible for the application’s security leads to better design decisions and coding practices. Encourage developers to obtain security certifications and participate in security forums and conferences. By investing in the team's knowledge, you can turn each developer into a security advocate.

## Conclusion

Prioritizing your product backlog with a strong emphasis on security can appear daunting at first, but with a structured approach, it becomes a strategic asset. Deciding on your application's security bar and planning strategically for implementation sets a clear path. Utilizing the OWASP ASVS as a guide, and embracing automated security testing, will ensure consistent security practices are embedded within your development process. Furthermore, fostering continuous education and a culture of security awareness will empower your team to build and maintain secure software. By taking these steps, you create a resilient, security-conscious product that stands up to the demands of the modern digital landscape.
