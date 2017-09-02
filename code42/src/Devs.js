import React from 'react';
import { Link } from 'react-router-dom';

function Devs(props) {
    return (
        <li className="selectable">
            <Link to={{
                pathname: "/developer/" + parseInt(props.id, 10),
                userName: props.name,
                userId: props.id,
            }} onClick={props.onClick}>
                {props.name}
                <span className="pull-right glyphicon glyphicon-user"></span>
            </Link>
        </li>
    );
}

export default Devs;