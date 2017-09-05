import React, { Component } from 'react';
import Devs from './Devs.js';
import { Link } from 'react-router-dom';
import { GitReq } from './GithubAPIHelper.js';

class Menu extends Component {

    constructor() {
        super();

        this.state = {};

        //Populate initial state with members request
        GitReq(["https://api.github.com/orgs/code42/members"])
        .then((res) => {

            var devs = res[0];

            if (!devs.length) {
                throw new Error("No Results");
            }

            this.setState({
                devs: devs.map((member) => {
                    return {
                        id: member.id,
                        name: member.login,
                    };
                })
            });
        })
        .catch((err) => {
            //@future: render message in sidebar about API issues
            console.log("Error: ", err);
        })
        .then(() => {
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

        var parent = global.$(e.target).closest('li a')[0].parentElement;
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
                        <a href="/" data-toggle="collapse" data-target="#userList" id="devMenu" onClick={e => e.preventDefault()}>
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

