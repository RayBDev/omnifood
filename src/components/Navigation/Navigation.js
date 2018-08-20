import React, { Component } from 'react';

import omnifoodLogoWhite from '../../assets/img/logo-white-min.png';
import omnifoodLogoBlack from '../../assets/img/logo-min.png';
import './Navigation.css';

class Navigation extends Component {
    state = {
        displayNav: false,
        style: 'main-nav hidden',
        icon: 'menu'
    }

    menuClickHandler = () => {
        if (this.state.displayNav === false){
            this.setState({
                displayNav: true,
                style: 'main-nav show',
                icon: 'close'
            });
        } else {
            this.setState({
                displayNav: false,
                style: 'main-nav hidden',
                icon: 'menu'
            });
        }

    }

    render () {
        return (
            <nav className={this.props.stickyNav ? 'sticky' : ''}>
                <div className="row">
                    <img className="logo" src={omnifoodLogoWhite} alt="Omnifood Logo" />
                    <img className="logo-black" src={omnifoodLogoBlack} alt="Omnifood Logo" />
                    <ul className={this.state.style} >
                        <li><a href="#features">Food Delivery</a></li>
                        <li><a href="#steps">How it works</a></li>
                        <li><a href="#cities">Our cities</a></li>
                        <li><a href="#pricing">Sign up</a></li>
                    </ul>
                    <a className="mobile-nav-icon" onClick={this.menuClickHandler}><ion-icon name={this.state.icon}></ion-icon></a>
                </div>
            </nav>
        );
    }
}

export default Navigation;