import React from 'react';

import './Testimonials.css';
import Testimonial from './Testimonial/Testimonial';
import alberto from '../../assets/img/customer-1-min.jpg';
import joana from '../../assets/img/customer-2-min.jpg';
import milton from '../../assets/img/customer-3-min.jpg';

const testimonials = {
    Alberto: {
        testimonial: 'Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn\'t live without my daily meals!',
        img: alberto,
        name: 'Alberto Duncan'
    },
    Joana: {
        testimonial: 'Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!',
        img: joana,
        name: 'Joana Silva'
    },
    Milton: {
        testimonial: 'I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!',
        img: milton,
        name: 'Milton Chapman'
    }
}

const testimonialList = () => {
    const testimonialArray = [];
    for(let test in testimonials) {
        testimonialArray.push((
            <Testimonial 
                key={testimonials[test].name}
                clientName={testimonials[test].name} 
                img={testimonials[test].img} 
                alt={testimonials[test].name} 
                testimonial={testimonials[test].testimonial} 
            />
        ));
    }
    return testimonialArray;
}

const Testimonials = () => {
    return (
        <section className="section-testimonials">
            <div className="row">
                <h2>Our customers can't live without us</h2>
            </div>
            <div className="row">
                {testimonialList()}
            </div>
        </section>
    );
}

export default Testimonials;