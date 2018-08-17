import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Plan from './Plan/Plan';
import './Pricing.css';

const pricingDetails = {
    Premium: {
        totalPrice: '$399 ',
        term: '/month',
        mealPrice: 'That’s only $13.30 per meal',
        feature1: {
            description: '1 meal every day',
            icon: 'checkmark'
        },
        feature2: {
            description: 'Order 24/7',
            icon: 'checkmark'
        },
        feature3: {
            description: 'Access to newest creations',
            icon: 'checkmark'
        },
        feature4: {
            description: 'Free delivery',
            icon: 'checkmark'
        },
        buttonClass: 'btn btn-full'
    },
    Pro: {
        totalPrice: '$149 ',
        term: '/month',
        mealPrice: 'That’s only $14.90 per meal',
        feature1: {
            description: '1 meal 10 days/month',
            icon: 'checkmark'
        },
        feature2: {
            description: 'Order 24/7',
            icon: 'checkmark'
        },
        feature3: {
            description: 'Access to newest creations',
            icon: 'checkmark'
        },
        feature4: {
            description: 'Free delivery',
            icon: 'checkmark'
        },
        buttonClass: 'btn btn-ghost'
    },
    Starter: {
        totalPrice: '$19 ',
        term: '/meal',
        mealPrice: ('\u00A0'),
        feature1: {
            description: '1 meal',
            icon: 'checkmark'
        },
        feature2: {
            description: 'Order 8am to 12pm',
            icon: 'checkmark'
        },
        feature3: {
            description: 'Access to newest creations',
            icon: 'close'
        },
        feature4: {
            description: 'Free delivery',
            icon: 'checkmark'
        },
        buttonClass: 'btn btn-ghost'
    }
}

const planList = (pricePulse) => {
    let planArray = [];
    for(let plan in pricingDetails) {
        planArray.push((
            <Plan 
                key={plan}
                plan={plan} 
                pricePulse = {pricePulse}
                totalPrice={pricingDetails[plan].totalPrice} 
                term={pricingDetails[plan].term}
                mealPrice={pricingDetails[plan].mealPrice} 
                feature1={pricingDetails[plan].feature1.description} 
                feature2={pricingDetails[plan].feature2.description} 
                feature3={pricingDetails[plan].feature3.description} 
                feature4={pricingDetails[plan].feature4.description} 
                feature1Icon={pricingDetails[plan].feature1.icon} 
                feature2Icon={pricingDetails[plan].feature2.icon} 
                feature3Icon={pricingDetails[plan].feature3.icon} 
                feature4Icon={pricingDetails[plan].feature4.icon} 
                btnClass={pricingDetails[plan].buttonClass}
            />
        ));
    }
    return planArray;
}

const Pricing = props => (
    <ScrollableAnchor id={'pricing'}>
        <section className="section-pricing">
            <div className="row">
                <h2>Start eating healthy today</h2>
            </div>
            <div className="row">
                {planList(props.pricePulse)}
            </div>
        </section>
    </ScrollableAnchor>
);

export default Pricing;
