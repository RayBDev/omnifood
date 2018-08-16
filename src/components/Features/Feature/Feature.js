import React from 'react';

import './Feature.css';

const Feature = props => {
    return (
        <div className="col span-1-of-4 box">
            <ion-icon name={props.icon} class="icon-big"></ion-icon>
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
        </div>
    );
};

export default Feature;