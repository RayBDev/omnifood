import React from 'react';

import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = (props) => { 
    return (
        <header>
            <Navigation stickyNav={props.stickyNav}/>
            <div className="hero-text-box">
                <h1>Goodbye junk food.<br /> Hello super healthy meals.</h1>
                <a className="btn btn-full" href="#pricing">I’m hungry</a>
                <a className="btn btn-ghost" href="#features">Show me more</a>
            </div>
        </header>
    )
};

export default Header;