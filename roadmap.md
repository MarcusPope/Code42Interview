
# Senior Web Engineer exercise

@overview: Create a single page application using a modern JavaScript library or
framework. Examples include but are not limited to: React, Ember.js, Vue.js. In
addition, leverage an HTTP client library, such as jQuery.ajax, github/fetch, or
what's included within your framework.

    @todo: Implement waiting spinner with fast-right-spinner
    
@todo: Wire up developer list in sidebar
    @req: In the sidebar, list each member of the Code42 organization using the public Github API.

    @todo: On selection make a request to Github API for user specific data
        @todo: Render fa spinner during request
        @todo: Handle errors with a basic template

@todo: Build main content view on the right for developer profile information
    @req: When you click on a member in the sidebar, the main content area should populate with that person's information.

    @todo: Render the following data points in the main profile view
        @: Their Github image
        @: A list of their repos
        @: Their public location
        @: Their public email
        @: Their join date

    @extra: Render Additional details for each Code42 Member
        @: Their total number of contributions in the last year
        @: The organizations to which they belong
        @: A list of repos they have contributed to
            @RFC: Should this include repos they are not members of? Or just a filter of their repositories for active commits?
            @: We could query the events api and check at least the last 90 days of activity
            @: According to several sources this isn't really accessible from the github api

@todo: Implement BrowserHistory logic for react router

@todo: Develop a simple test plan for the data sources
    @: This is extra credit so just describe what points should be tested and how if we don't get to it in time
