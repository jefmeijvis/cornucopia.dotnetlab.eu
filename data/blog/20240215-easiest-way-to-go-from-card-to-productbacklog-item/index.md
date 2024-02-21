---
date: 20240215
author: ive-verstappen
tags: scrum,agile
hidden: false
description: The easiest way to go from card to Product Backlog Item. Cornucopia is aimed at the developer, not the security engineer. Therefore, we feel that there should be an easy way to go from identifying a threat or vulnerabiltiy to a Product Backlog Item.
---
# 3 scenarios for transforming a Cornucopia Card to a Product Backlog Item

The purpose of playing the Owasp Cornucopia card game is to easily identify threats as a development team.  In an earlier blogpost, I described how to optimally integrate Threat Modeling by playing the Owasp Cornucopia game in the Scrum process.  In this blogpost, I will explore 3 real-world scenarios to transform a Cornucopia card to a Product Backlog Item.

The Owasp Cornucopia cardgame is a lightweight way to do threat modeling and is aimed at the developer, not the security engineer.  Therefore, in this blogpost, I focused on the easiest way to get a working threat model for each Cornucopia Card.

The assumption is that you played the Cornucopia game with your team before and you have now a list of identified cards, possibly with some notes of why this card is relevant for your project.

The job at hand is that you now need to transfer the list of cards to the product backlog and you have to create Product Backlog Items.

## Playing cornucopia: a practical scenario
Suppose your team has used three Cornucopia suits: Authentication, Authorization, and Data Validation & Encoding, identifying threats relevant to your project:

- Authentication: 3, 4, 8, 5
- Authorization: 5, 9, Q, K
- Data Validation & Encoding: 2, 7, 8

The next step is to form Product Backlog Items from these cards.

### Prioritize the cards
Cornucopia naturally suggests ordering the cards by value:

1. Authorization-K
2. Authorization-Q
3. Authorization-9
4. Data Validation & Encoding-8
5. Authentication-8
6. Data Validation & Encoding-7
7. Authorization-5
8. Authentication-4
9. Authentication-3
10. Data Validation & Encoding-2

This is a great way to start, but you can reshuffle the prioritization according to your own ideas and priorities.

For our sample, lets take 3 cards and work them out.

1. Authorization-K
2. Data Validation & Encoding-8
3. Authentication-4

### Scenario 1: Analysis of Authorization-K
While the development-team assumes that they implement server-side controls, they acknowledged that there is no logging in place that logs changes to the allocation of roles to the users.  You wrote this on the scorecard for Authentication-K:
	- "Add Logging to each change of role-allocation for a user".

You simply create the Product Backlog Item: "Add logging to all changes of user-information in the application".

### Scenario 2: Analysis of Data Validation & Encoding-8
You haven't got notes for this card, so you only have the information that this card is written down as a valid card for your application.

Now what do you do?

1. check the ASVS mapping on the card
2. We use the mapping to ASVS 3.0 in our example

ASVS 3.0 - 1.7: "Central implementation for security controls"

You realise you don't have a central implementation for the sanitization of your input-fields and strings (eg URL-strings) of your application.

You create the Product Backlog Item: "Add central implementation for the sanitization of all input-data for the system".

### Scenario 3: Analysis of Authentication-4
You wrote down "it's easy to enumerate all users".

You realize that the way e-mailadresses are defined in your company provides an easy patterns to identify and enlist all accounts of your company.

After discussions with the managers of the company, you conclude that you can't impact the e-mail policy of your organization.  You write down that you need to accept this threat and discuss with IT how to cope with this issue.

No Product Backlog Items is created for this card.

### Prioritization of the Product Backlog Items
Treat security threats like any other Backlog item.  As a technical lead, you discuss the threats with the Product Owner and prioritize the items.

## OWASP ASVS provides guidance

Owasp ASVS is a great resource to dive in depth into each card.  By going through the ASVS-items for each card, you gain quickly detailed insights into security features that should be implemented.

Going through the ASVS-mapping for each card means taking the most effiective path to identifying and analyzing relevant threats for your application.

## Conclusion
One of the great features about Owasp Cornucopia is that it doens't exist in a vacuum.  Playing Owasp Cornucopia does not only provide your team with a great way to collaboratively identify threats.  Thanks to its references to other excellent Owasp projects, it will provide you with easy to digest information to allow you to quickly define excellent Product Backlog Items to enable you to improve the security-levels of your application.

By leveraging Cornucopia and OWASP ASVS, even those with limited security expertise can make significant security improvements in a short time.

Good Luck!

Ive

Please use the comment section below to give feedback or ask questions.