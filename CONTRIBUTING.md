# Commit message guide

When writing a commit message, it must start with one of the following types:

- content: Making changes to, or creating any type of content (blogposts, cards, taxonomy, authors, ...)
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- docs: Documentation only changes
- build: Changes that affect the build system (npm) or external dependencies
- ci: Changes to our CI configuration files and scripts 
- test: Adding missing tests or correcting existing tests

## Examples
### Creating a blogpost

    content(20240201): 

    Created the initial blogpost folder and files

### Updating an author

    content(author jef-meijvis): updated biography text and profile picture

    Updated the biography text for author jef-meijvis and uploaded a new picture

### Fixing a code bug 

    fix(headings) Added missing href attribute to h3 tags

    All markdown to html rendered headings have href attribute with their respective anchor. 
    Fixed a bug in the heading rendering component where the h3 heading tag didn't have a working href attribute.  