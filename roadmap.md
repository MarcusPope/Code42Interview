
# Senior Web Engineer exercise

@overview: Create a single page application using a modern JavaScript library or
framework. Examples include but are not limited to: React, Ember.js, Vue.js. In
addition, leverage an HTTP client library, such as jQuery.ajax, github/fetch, or
what's included within your framework.

@note: Fixed bug with IE11, browser reports Object.assign is not defined.
    @note: Despite plenty of reports indicating babel-polyfill would suffice, it did not and I had to rely on a manual polyfill in the dom itself.
    @note: Finally found the right ticket, IE11 is no longer supported despite what the current docs and many other tickets report :/
    
@todo: Review Github's API docs

@todo: Register for Github API key
    
@todo: Configure oAuth connection for Github

@todo: Embed bootstrap, fetch, font-awesome

@todo: Build left sidebar component to display dev list
    @todo: Flesh out CSS for sidebar
    @todo: Implement waiting throbber with fa-spinner
    
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
        
@todo: Implement BrowserHistory logic for react router

@todo: Develop a simple test plan for the data sources
    @: This is extra credit so just describe what points should be tested and how if we don't get to it in time
