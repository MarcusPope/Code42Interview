import React, { Component } from 'react';
import Devs from './Devs.js';

class Menu extends Component {

    constructor() {
        super();

        //@todo: Populate initial state with members request
        this.state = {
            devs: [{
                id: 1,
                name: 'Philip J. Fry',
            }, {
                id: 2,
                name: 'Bender'
            }],
        };
    }

    render() {
        return (
            <div className="c42-developers row col-md-2">
                <ul className="nav">

                    <li className="active">
                        <a href="#home">
                            Home
                            <span className="pull-right glyphicon glyphicon-home"></span>
                        </a>
                    </li>

                    {this.state.devs.map((user) => {
                        return <Devs
                            name={user.name}
                            onClick={(e) => this.props.loadProfile(e, user)}
                            key={user.id}
                        />;
                    })}
                </ul>
            </div>
        );
    }
}

export default Menu;

