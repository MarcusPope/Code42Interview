import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './Menu.js';

class App extends Component {

    loadProfile(e, user) {
        //@todo: Populate the initial profile view with user data
        console.log(user.name);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row c42-header">
                    <img src={logo} alt="Powered By React" />
                    <h2>Code42 Developer Profiles</h2>
                </div>

                <Menu loadProfile={this.loadProfile} />

                <div className="c42-profile col-md-10">
                    <h1>Meet the team @ Code42</h1>
                    <p className="c42-intro">
                        On your left is a list of the developers on the Code42
                        Github profile. Select a name to view more about their
                        contributions to the Code42 team.
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
