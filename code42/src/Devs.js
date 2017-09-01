import React from 'react';
import { Link } from 'react-router-dom';

function Devs(props) {
    return (
        <li className="selectable">
            <Link to={"/developer/" + parseInt(props.id, 10)} onClick={props.onClick}>
                {props.name}
                <span className="pull-right glyphicon glyphicon-user"></span>
            </Link>
        </li>
    );
}

export default Devs;