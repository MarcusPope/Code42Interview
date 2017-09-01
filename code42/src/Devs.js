import React from 'react';

function Devs(props) {
    return (
        <li className="selectable">
            {/* @todo: probably need to update href once we figure out how routing works */}
            <a href="javascript:;" onClick={props.onClick}>
                {props.name}
                <span className="pull-right glyphicon glyphicon-user"></span>
            </a>
        </li>
    );
}

export default Devs;