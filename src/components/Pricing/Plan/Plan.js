import React from 'react';
import {Animated} from "react-animated-css";

import './Plan.css';

const Plan = props => (
    <Animated animationIn={props.plan === 'Premium' ? 'pulse': null} isVisible={props.plan === 'Premium' ?props.pricePulse : true }>
        <div className="col span-1-of-3">
            <div className="plan-box">
                <div>
                    <h3>{props.plan}</h3>
                    <p className="plan-price">{props.totalPrice}<span>{props.term}</span></p>
                    <p className="plan-price-meal">{props.mealPrice}</p>
                </div>
                <div>
                    <ul>
                        <li><ion-icon name={props.feature1Icon} class="icon-small"></ion-icon>{props.feature1}</li>
                        <li><ion-icon name={props.feature2Icon} class="icon-small"></ion-icon>{props.feature2}</li>
                        <li><ion-icon name={props.feature3Icon} class="icon-small"></ion-icon>{props.feature3}</li>
                        <li><ion-icon name={props.feature4Icon} class="icon-small"></ion-icon>{props.feature4}</li>
                    </ul>
                </div>
                <div>
                    <a href="#" className={props.btnClass}>Sign Up Now</a>
                </div>
            </div>
        </div>
    </Animated>
);

export default Plan;