import React from 'react';

function Repos(props) {
    return (
        <span className="c42-repo ">
            <h4>{props.name}</h4>
            <span className="lang">{props.lang}</span>
            <span className="desc">{props.desc}</span>
        </span>
    );
}

export default Repos;