import React from 'react';

import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = (props) => { 
    return (
        <header>
            <Navigation />
            <div className="hero-text-box">
                <h1>Goodbye junk food.<br /> Hello super healthy meals.</h1>
                <a className="btn btn-full" href="#">I’m hungry</a>
                <a className="btn btn-ghost" href="#">Show me more</a>
            </div>
        </header>
    )
};

export default Header;