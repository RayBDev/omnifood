import React from 'react';

import omnifoodLogo from '../../assets/img/logo-white.png';
import './Navigation.css';

const Navigation = props => {
    return (
        <nav>
            <div className="row">
                <img className="logo" src={omnifoodLogo} alt="Omnifood Logo" />
                <ul className="main-nav">
                    <li><a href="#">Food Delivery</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Our cities</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;