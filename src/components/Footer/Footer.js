import React from 'react';

const Footer = () => (
    <footer>
        <div className="row">
            <div className="col span-1-of-2">
                <ul className="footer-nav">
                    <li><a href="#">About Us    </a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">iOS App</a></li>
                    <li><a href="#">Android App</a></li>
                </ul>
            </div>
            <div className="col span-1-of-2">
                <ul className="social-links">
                <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-googleplus"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                </ul>
            </div>
            <div className="row">
                <p>
                    Copyright &copy; 2018 by Omnifood. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;