import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {Animated} from "react-animated-css";

import City from './City/City';
import lisbon from '../../assets/img/lisbon-3-min.jpg';
import sanfrancisco from '../../assets/img/san-francisco-min.jpg';
import berlin from '../../assets/img/berlin-min.jpg';
import london from '../../assets/img/london-min.jpg';
import './Cities.css';

const cities = {
    Lisbon: {
        cityName: 'Lisbon',
        img: lisbon,
        customerIcon: 'person',
        chefIcon: 'star',
        socialMediaIcon: 'logo-twitter',
        customers: '1600+ happy eaters',
        chefs: '60+ top chefs',
        twitterHandle: '@omnifood_lx'
    },
    SanFrancisco: {
        cityName: 'San Francisco',
        img: sanfrancisco,
        customerIcon: 'person',
        chefIcon: 'star',
        socialMediaIcon: 'logo-twitter',
        customers: '3700+ happy eaters',
        chefs: '160+ top chefs',
        twitterHandle: '@omnifood_sf'
    },
    Berlin: {
        cityName: 'Berlin',
        img: berlin,
        customerIcon: 'person',
        chefIcon: 'star',
        socialMediaIcon: 'logo-twitter',
        customers: '2300+ happy eaters',
        chefs: '110+ top chefs',
        twitterHandle: '@omnifood_berlin'
    },
    London: {
        cityName: 'London',
        img: london,
        customerIcon: 'person',
        chefIcon: 'star',
        socialMediaIcon: 'logo-twitter',
        customers: '1200+ happy eaters',
        chefs: '50+ top chefs',
        twitterHandle: '@omnifood_london'
    }
}

const cityDisplay = () => {
    let cityArray = [];
    for(let city in cities) {
        cityArray.push((
            <City 
                key={cities[city].cityName} 
                img={cities[city].img} 
                alt={cities[city].cityName} 
                city={cities[city].cityName} 
                customerIcon={cities[city].customerIcon} 
                customers={cities[city].customers} 
                chefIcon={cities[city].chefIcon} 
                chefs={cities[city].chefs} 
                socialMediaIcon={cities[city].socialMediaIcon} 
                twitterHandle={cities[city].twitterHandle}
            />
        ));
    }
    return cityArray;
}

const Cities = props => {
    return (
        <ScrollableAnchor id={'cities'}>
            <Animated animationIn="fadeIn" isVisible={props.cityFade}>    
            <section className="section-cities">
                    <div className="row">
                        <h2>We're currently in these cities</h2>
                    </div>
                    <div className="row">
                        {cityDisplay()}
                    </div>
                </section>
            </Animated>
        </ScrollableAnchor>
    );
}

export default Cities;