import React from 'react';

import './Footer.css';

import NavLinks from './NavLinks/NavLinks';
import SocialIcons from './SocialIcons/SocialIcons';

const footerLinkData = {
    linkNames: {
        link1: 'About Us',
        link2: 'Blog',
        link3: 'Press',
        link4: 'iOS App',
        link5: 'Android App',
    }
};

const socialIconData = {
    logoNames: {
        logo1: 'logo-facebook',
        logo2: 'logo-twitter',
        logo3: 'logo-googleplus',
        logo4: 'logo-instagram',
    }
};

let navLinks = [];
let socialIcons = [];

for(let navLink in footerLinkData.linkNames){
    navLinks.push((
        <NavLinks key={navLink} linkName={footerLinkData.linkNames[navLink]} />
    ));
}

for(let icon in socialIconData.logoNames){
    socialIcons.push((
        <SocialIcons key={icon} socialIcon={socialIconData.logoNames[icon]} />
    ));
}

const Footer = () => (
    <footer>
        <div className="row">
            <div className="col span-1-of-2">
                <ul className="footer-nav">
                    {navLinks}
                </ul>
            </div>
            <div className="col span-1-of-2">
                <ul className="social-links">
                    {socialIcons}
                </ul>
            </div>
        </div>
        <div className="row">
            <p>
                Copyright &copy; 2018 by Omnifood. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;