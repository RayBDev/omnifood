import React from 'react';

import omnifoodLogoWhite from '../../assets/img/logo-white.png';
import omnifoodLogoBlack from '../../assets/img/logo.png';
import './Navigation.css';

const Navigation = props => {
    return (
        <nav className={props.stickyNav ? 'sticky' : ''}>
            <div className="row">
                <img className="logo" src={omnifoodLogoWhite} alt="Omnifood Logo" />
                <img className="logo-black" src={omnifoodLogoBlack} alt="Omnifood Logo" />
                <ul className="main-nav">
                    <li><a href="#features">Food Delivery</a></li>
                    <li><a href="#steps">How it works</a></li>
                    <li><a href="#cities">Our cities</a></li>
                    <li><a href="#pricing">Sign up</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;