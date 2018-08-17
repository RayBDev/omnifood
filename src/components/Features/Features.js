import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {Animated} from "react-animated-css";

import './Features.css';
import Feature from './Feature/Feature';

const features = [
    {
        feature: {
            icon: 'infinite',
            heading: 'Up to 365 days/year',
            content: 'Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that\'s your style.'
        }
    },
    {
        feature: {
            icon: 'stopwatch',
            heading: 'Ready in 20 minutes',
            content: 'You\'re only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you\'re 100% happy.'
        }
    },
    {
        feature: {
            icon: 'nutrition',
            heading: '100% organic',
            content: 'All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!'
        }
    },
    {
        feature: {
            icon: 'cart',
            heading: 'Order anything',
            content: 'We don\'t limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It\'s up to you!'
        }
    }
]

const Features = props => {
    return (
        <ScrollableAnchor id={'features'}>    
            <section className="section-features">
                <div className="row">
                    <h2>Get food fast &mdash; not fast food.</h2>
                    <p className="long-copy">
                        Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
                    </p>
                </div>
                <Animated animationIn="fadeIn" isVisible={props.featureFade}>
                    <div className="row">
                        {features.map(feat => (
                            <Feature 
                                key={feat.feature.heading}
                                icon={feat.feature.icon} 
                                heading={feat.feature.heading}
                                content={feat.feature.content} 
                            />   
                        ))}
                    </div>
                </Animated>
            </section>
        </ScrollableAnchor>
    );
}

export default Features;