import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Menu from './Menu.js';
import Profile from'./Profile.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row c42-header">
                        <img src={logo} alt="Powered By React" />
                        <h2>Code42 Developer Profiles</h2>
                    </div>
    
                    <Menu />
    
                    <div className="col-md-10 c42-main">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/developer/:id" component={Profile} />
                    </div>
                </div>
            </Router>
        );
    }
}

const Home = () => (
    <div>
        <h1>Meet the team @ Code42</h1>
        <p className="c42-intro">
            On your left is a list of the developers on the Code42
            Github profile. Select a name to view more about their
            contributions to the Code42 team.
        </p>
    </div>
)

export default App;
