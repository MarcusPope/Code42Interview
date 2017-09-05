import React, { Component } from 'react';
import Repos from './Repos.js';
import Orgs from './Orgs.js';
import { GitReq } from './GithubAPIHelper.js';

class Profile extends Component {

    constructor() {
        super();
        this.state = { user: {} };
    }

    componentDidMount() {
        this.updateUserProfile(this.props.location);
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.updateUserProfile(nextProps.location);
            return false;
        }

        return true;
    }

    updateUserProfile(user) {

        GitReq([
            "https://api.github.com/users/" + user.userName,
            "https://api.github.com/users/" + user.userName + "/repos",
            "https://api.github.com/users/" + user.userName + "/orgs",
        ])
        .then((res) => {

            console.log(res);

            var basic = res[0];

            this.setState({
                user: {
                    id: user.userId,
                    avatar: basic.avatar_url,
                    name: basic.name,
                    profile_api: basic.url,
                    profile_link: basic.html_url,
                    repos_api: basic.repos_url,
                    location: basic.location,
                    since: basic.created_at,
                    email: basic.email,
                },
                repos: res[1].map((repo) => {
                    return {
                        id: repo.id,
                        name: repo.name,
                        description: repo.description,
                        language: repo.language
                    };
                }),
                orgs: res[2].map((org) => {
                    return {
                        id: org.id,
                        avatar: org.avatar_url,
                        name: org.login,
                    };
                }),
            });
        })
        .catch((err) => {
            //@todo: render error message
            console.log("Error: ", err);
        })
    }

    render() {

        return (
            <div className="c42-profile">
                <img alt={this.state.user.name} src={this.state.user.avatar} />
                <h1>{this.state.user.name}</h1>
                <div className="c42-card">
                    <div>{this.state.user.location}</div>
                    <div><a href={"mailto:" + this.state.user.email}>{this.state.user.email}</a></div>
                    <div>Joined: {this.state.user.since}</div>
                </div>
                <div className="c42-repos">
                    <h2>Repositories</h2>

                    {(this.state.repos || []).map((repo) => {
                        return <Repos
                            id={repo.id}
                            key={repo.id}
                            name={repo.name}
                            lang={repo.language}
                            desc={repo.description}
                        />;
                    })}
                </div>
                <div className="c42-orgs">
                    <h2>Organizations</h2>
                    {(this.state.orgs || []).map((org) => {
                        return <Orgs
                            id={org.id}
                            key={org.id}
                            name={org.name}
                            avatar={org.avatar}
                        />;
                    })}
                </div>
            </div>
        );
    }
}

export default Profile;