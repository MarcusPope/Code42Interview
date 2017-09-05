import React from 'react';

function Orgs(props) {
    return (
        <span className="c42-org">
            <img src={props.avatar} />
            <h3>{props.name}</h3>
        </span>
    );
}

export default Orgs;