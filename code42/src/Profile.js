import React, { Component } from 'react';
import creds from './creds.json';

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
        
        //@todo: lookup user name from map, not last storage item
        fetch("https://api.github.com/users/" + user.userName, {
            method: "GET",
            headers: {
                'Authorization': 'Basic ' + btoa([creds.user, creds.token].join(":")),
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        })
        .then((res) => {
            
            console.log(res);
            
            this.setState({
                user: {
                    id: user.userId,
                    avatar: res.avatar_url,
                    name: res.name,
                    profile_api: res.url,
                    profile_link: res.html_url,
                    repos_api: res.repos_url,
                    location: res.location,
                    since: res.created_at,
                    email: res.email,
                }
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
                    
                    {/* @todo: render list of repositories */}
                </div>
            </div>
        );
    }
}

export default Profile;