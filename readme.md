# Documentation

## Stack

    Code42Interview is built with React 15.6.1, ExpressJS and Node

## Getting Started

    Checkout the project from github:

        git clone https://github.com/MarcusPope/Code42Interview.git

    Install the Node v4 or later.  Developmed with 6.11.2

## Starting the application

    Navigate to code42 directory

    Run `npm start` for a dev server
    Run `npm run build` for a production build
    Run `npm test' to run the test harness

    Navigate to http://localhost:3000/

## Github API

#### Endpoints:

    Pagination Ref: https://developer.github.com/v3/#pagination
    CORS Ref: https://developer.github.com/v3/#cross-origin-resource-sharing
    Rate Limits: https://developer.github.com/v3/#rate-limiting

    Dev Team: https://api.github.com/orgs/code42/members
        User Avatar: avatar_url
        Profile Page: html_url
        Repos: repos_url

    User Data: https://api.github.com/users/ZuluForce
        Public Location: location
        Public Email: email
            @: We have access to the email used in a given commit in the commits query, ZuluForce did not have an email address in their public profile.
        Join Date: created_at

    Repos: https://api.github.com/users/ZuluForce/repos

    Orgs Memberships: https://api.github.com/users/ZuluForce/orgs

    Public Commits: /users/:username/events
        Strategy 1: (FAIL)
            [].type == "PushEvent"
            [].payload.commits[].length

            @caveat: this will include merged commits from other users according to SO, so we will need to verify that ...commits[].author.email == the code42 user's email
            @caveat: This is limited to ~90 Days OR 300 commits, doesn't meet reqs.

        Strategy 2: (meets requirements)
            Iterate over every repo and query for the following
            api.github.com/repos/:user/:repoName/commits?author=:user&since=:ISO8601&page=:pageIdx&per_page=100

    Orgs Memberships: https://api.github.com/users/ZuluForce/orgs

