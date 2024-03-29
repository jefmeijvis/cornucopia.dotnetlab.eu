Many ecommerce webservers (and other base software) usually provide error messages with information about the nature of the error by default. This is most useful to the developer, as it helps to identify where the error is happening and why. The default configuration also sometimes provides some admin functions to ease their learning curve. However, if this default behaviour is not changed in non-development environments, users (and attackers) can profit from it to acquire knowledge about the internal workings of the application and supporting systems/components.

Other sources of information disclosure are often generated by the developer. These range from messages for internal use, and are not removed when deployed in production, to simple bad programming practices. Some examples of these are:

Exposing sensitive information (such as session identifiers, variables references, login data, etc.) in HTTP headers, URLs, custom error messages, comments, logs, related email messages, etc.
Including server-side source code in outputs accessible by users.
Including sensitive comments in outputs accessible by users.
Allowing user access to configuration files.
Leaving default install, unused or old files in web accessible locations.
Revealing the application file structure (path to files in error messages or misuse of the robots.txt file).
Giving hints about the application workflow and/or security checks as user friendly messages.
See Authentication AT 7 relating to different messages at the user login page to indicate that the username or the password are wrong.
