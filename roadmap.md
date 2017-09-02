
# Senior Web Engineer exercise

@bug: Fix overflow issue in sidebar on small viewports
@bug: Fix responsive breakpoint for sidebar on tablet to be height: auto
@bug: Refresh on developers page doesn't load proper state for navbar
@bug: Clicking on down arrow toggles accordion but not the arrow direction
@bug: Refresh doesn't handle loss of state very well, either persist to session storage or redirect to home

@extra: Render Additional details for each Code42 Member
    @: Their total number of contributions in the last year
    @: The organizations to which they belong
    @: A list of repos they have contributed to
        @RFC: Should this include repos they are not members of? Or just a filter of their repositories for active commits?
        @: We could query the events api and check at least the last 90 days of activity
        @: According to several sources this isn't really accessible from the github api

@todo: Develop a simple test plan for the data sources
    @: This is extra credit so just describe what points should be tested and how if we don't get to it in time
