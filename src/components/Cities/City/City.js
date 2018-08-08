import React from 'react';

import './City.css';

const City = props => {
    return (
        <div className="col span-1-of-4 box">
            <img src={props.img} alt={props.alt} />
            <h3>{props.city}</h3>
            <div className="city-feature">
                <ion-icon name={props.customerIcon} class="icon-small"></ion-icon>
                {props.customers}
            </div>
            <div className="city-feature">
                <ion-icon name={props.chefIcon} class="icon-small"></ion-icon>
                {props.chefs}
            </div>
            <div className="city-feature">
                <ion-icon name={props.socialMediaIcon} class="icon-small"></ion-icon>
                <a href="#">{props.twitterHandle}</a>
            </div>
        </div>
    );
}

export default City;