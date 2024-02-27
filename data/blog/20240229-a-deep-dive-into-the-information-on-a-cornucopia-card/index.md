---
date: 20240229
author: ive-verstappen
tags: DeepDive
hidden: false
description: A deep dive into the information on a cornucopia card
---
# A Deep Dive into the Information on a Cornucopia Card

While the OWASP Cornucopia card game provides lots of information about threats, more than is commonly understood by developers.

To address this, we've added a unique QR code to each card, linking directly to additional information. At dotNET lab, our goal is to ensure that every card is as clear and understandable as possible for developers.

Let's examine one [card—Authentication-3](https://cornucopia.dotnetlab.eu/authentication/3) as a representative example and review the information it contains.

## The General Structure of the Authentication-3 Card
1. Card-101 with 4 chapters:
    a. Scenario
    b. Example
    c. Risks
    d. Mitigation
2. The card, including its image and the text on the card
3. Mappings
    a. Interactive mappings
        i. OWASP ASVS
        ii. CAPEC
    b. Non-interactive mappings (for now)
        i. OWASP SCP
        ii. OWASP AppSensor
        iii. Savecode
4. ASVS (4.0) Cheat Sheet Series index

## The Card-101

We've created a 101 section for each card, based on the original text. This 101 is structured into four detailed chapters, which we'll outline below.

### Scenario
Here, we provide an overview of how the attack might unfold. For each card, we aim to offer multiple examples of potential scenarios and how an attack could be executed.

In the case of Authentication-3, we've outlined 8 scenarios demonstrating how this vulnerability could be exploited.

### Example
We take one scenario—number 4, "Interception in transit"—and use it to illustrate how an attack could occur.

### Risks
This section offers a succinct description of the risks tied to the threat addressed by the card. Here, the risks are significant and can instantly compromise the entirety of the system's security.

### Mitigation
We suggest several "best practices" that developers can implement to avert this threat.

## The Card
A visual link to the original card is provided, along with a reproduction of the text that appears on the card itself.

## Mappings
We have incorporated interactive links to the mappings listed on the Cornucopia card whenever possible.

### OWASP ASVS (4.0)

We've transitioned from ASVS Version 3 to ASVS Version 4. The physical cards display the mappings to ASVS v3.0, but the website has been updated to reflect the mappings to ASVS 4.0. I believe that the OWASP ASVS is one of the most practical projects for enhancing the cybersecurity of your application.

The OWASP Application Security Verification Standard (ASVS) is a framework established by the Open Web Application Security Project (OWASP) for securing web applications. 
Learning about OWASP ASVS and incorporating its requirements into your application development process is highly recommended.
The OWASP Application Security Verification Standard (ASVS) is a framework for securing web applications developed by the Open Web Application Security Project (OWASP). It establishes a foundation for testing web application security controls and provides developers with a comprehensive set of requirements for secure development.

OWASP ASVS offers a definitive suite of functionalities that should be integrated into your application to ensure its security.

Engaging with OWASP ASVS and incorporating its mandates into your development process is highly beneficial. Utilizing the Cornucopia Card's mapping to OWASP ASVS is an effective way to verify that your application meets the necessary security benchmarks.

References to ASVS 2.5.2 and 2.5.3 appear within Authentication-3, and are as follows:

#### ASVS 2.5.2: "No Secret Questions"
Ensure that password hints or knowledge-based authentication methods, commonly referred to as "secret questions," are absent from your system.

If you have a feature whereby a user can enter secret questions, you should plan to delete this feature.

A corresponding CWE-ID link is also provided for deeper insight.

#### ASVS 2.5.3: "Verify Password Credential Recovery Does Not Expose Current Password"
Confirm that there are no means to retrieve a user's current password under any circumstances.

#### CWE-640: "Weak Password Recovery Mechanism for Forgotten Password"
By clicking on each ASVS description link, you can explore the Common Weakness Enumeration, which aids in understanding the nuances of these weaknesses, related with password recovery.

#### Capec
A detailed discussion on Capec will be featured in an upcoming post. We recommend that players of Cornucopia temporarily set Capec aside, as it demands a substantial understanding from developers. 

Capec, or the Common Attack Pattern Enumeration and Classification, serves as an extensive catalog of tactics that attackers employ to infiltrate applications and systems—essentially a compendium of hacking strategies. Navigating through Capec enables developers to learn about and to anticipate and mitigate hacker methodologies.

CAPEC also provides strategic defenses against each attack technique.  Over time, it can allows you as a developer to start mastering defensive counter-moves for specific attack-patterns.

#### Non-Interactive Mappings

Currently, certain mappings such as those for OWASP SCP, Appsensor, and Safecode are static due to the lack of a method for linking directly to discrete information segments.

### ASVS (4.0) Cheatsheet Series Index

The Cheatsheet Series Index is a noteworthy OWASP initiative.

We urge you to delve into the cheatsheets provided when devising your threat model. However, these resources should not be consulted concurrently with gameplay.

For the current context, we present a link to a relevant cheatsheet:

#### ASVS 2.5 - Credential Recovery Requirements Cheatsheet
[Credential Recovery Requirements Cheatsheet](https://cheatsheetseries.owasp.org/IndexASVS.html#v25-credential-recovery-requirements)

### Attacks
Our cybersecurity specialists have examined various attack instances and aligned them with corresponding Cornucopia cards. These instances represent notorious attack patterns. The alignment aims to provide developers with a tangible understanding of how a card's vulnerability might translate into actual security threats.

#### Conclusion
OWASP Cornucopia serves as an invaluable primer to the realm of cybersecurity knowledge. This article merely introduces the wealth of insights available within the Cornucopia cards.

