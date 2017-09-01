import React, { Component } from 'react';
import Devs from './Devs.js';
import creds from './creds.json';
import { Link } from 'react-router-dom';

class Menu extends Component {

    constructor() {
        super();

        this.state = {};

        //Populate initial state with members request
        fetch("https://api.github.com/orgs/code42/members", {
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

            if (!res.length) {
                throw new Error("No Results");
            }

            this.setState({
                devs: res.map((member) => {
                    return {
                        id: member.id,
                        avatar: member.avatar_url,
                        name: member.login,
                        profile: member.url,
                    };
                })
            });
        })
        .catch((err) => {
            //@todo: render message in sidebar about API issues
            console.log("Error: ", err);
        })
        .finally(() => {
            //let ui show busy state before we expand
            setTimeout(() => {

                global.$('#devMenu span')
                    .removeClass("glyphicon-repeat")
                    .addClass('glyphicon-menu-down');

                this.selectItem({
                    target: global.$('#devMenu')[0]
                });

                global.$('#userList').collapse('show');
            }, 500)
        });
    }

    selectItem(e) {

        var parent = e.target.parentElement;
        var cls = parent.classList;

        //only let selection state apply to certain elements
        var sel = cls.contains('selectable');
        if (sel) {
            global.$('.nav li.active').removeClass('active');
            global.$(parent).addClass('active');
        }

        //handle dev menu item uniquely
        var toggle = cls.contains("toggleable");
        if (toggle) {
            cls.toggle('expanded');
            global.$('#devMenu span').toggleClass('glyphicon-menu-up');
        }
    }

    render() {
        return (
            <div className="c42-developers row col-md-2">
                <ul className="nav" onClick={this.selectItem.bind(this)}>

                    <li className="selectable active">
                        {/* @future: use NavLink instead to access className sync feature
                          * @ref: https://reacttraining.com/react-router/web/api/NavLink/activeClassName-string */}
                        <Link to="/" id="homeMenu">
                            Home
                            <span className="pull-right glyphicon glyphicon-home"></span>
                        </Link>
                    </li>

                    <li className="toggleable">
                        <a href="javascript:;" data-toggle="collapse" data-target="#userList" id="devMenu">
                            Developers
                            <span className="pull-right glyphicon glyphicon-repeat"></span>
                        </a>
                    </li>

                    <div id="userList" className="collapse">
                        <ul className="nav">
                            {(this.state.devs || []).map((user) => {
                                return <Devs
                                    name={user.name}
                                    id={user.id}
                                    onClick={(e) => this.props.loadProfile(e, user)}
                                    key={user.id}
                                />;
                            })}
                        </ul>
                    </div>
                </ul>
            </div>
        );
    }
}

export default Menu;

