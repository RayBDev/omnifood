import React from 'react';

import './Meals.css';
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";
import img5 from "../../assets/img/5.jpg";
import img6 from "../../assets/img/6.jpg";
import img7 from "../../assets/img/7.jpg";
import img8 from "../../assets/img/8.jpg";

const Meals = props => {
    return (
        <section className="section-meals">
            <ul className="meals-showcase">
                <li>
                    <figure className="meal-photo">
                        <img src={img1} alt="Korean bibimbap with egg and vegetables" />
                    </figure>
                </li>
                <li>
                    <figure className="meal-photo">
                        <img src={img2} alt="Simple italian pizza with cherry tomatoes" />
                    </figure>
                </li>
                <li>
                    <figure className="meal-photo">
                        <img src={img3} alt="Chicken breast steak with vegetables" />
                    </figure>
                </li>
                <li>
                    <figure className="meal-photo">
                        <img src={img4} alt="Autumn pumpkin soup" />
                    </figure>
                </li>
            </ul>
            <ul className="meals-showcase">
                <li>
                    <figure className="meal-photo">
                        <img src={img5} alt="Paleo beef steak with vegetables" />
                    </figure>
                </li>
                <li>
                    <figure className="meal-photo">
                        <img src={img6} alt="Healthy baguette with egg and vegetables" />
                    </figure>
                </li>
                <li>
                    <figure className="meal-photo">
                        <img src={img7} alt="Burger with cheddar and bacon" />
                    </figure>
                </li>
                <li>
                    <figure className="meal-photo">
                        <img src={img8} alt="Granola with cherries and strawberries" />
                    </figure>
                </li>
            </ul>
        </section>
    );
}

export default Meals;