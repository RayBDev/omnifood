import React from 'react';

import './Meals.css';
import Meal from './Meal/Meal';
import img1 from "../../assets/img/1-min.jpg";
import img2 from "../../assets/img/2-min.jpg";
import img3 from "../../assets/img/3-min.jpg";
import img4 from "../../assets/img/4-min.jpg";
import img5 from "../../assets/img/5-min.jpg";
import img6 from "../../assets/img/6-min.jpg";
import img7 from "../../assets/img/7-min.jpg";
import img8 from "../../assets/img/8-min.jpg";

const meals = {
    meal1: {
        imageName: img1,
        imageAlt: "Korean bibimbap with egg and vegetables"
    },
    meal2: {
        imageName: img2,
        imageAlt: "Simple italian pizza with cherry tomatoes"
    },
    meal3: {
        imageName: img3,
        imageAlt: "Chicken breast steak with vegetables"
    },
    meal4: {
        imageName: img4,
        imageAlt: "Autumn pumpkin soup"
    },
    meal5: {
        imageName: img5,
        imageAlt: "Paleo beef steak with vegetables"
    },
    meal6: {
        imageName: img6,
        imageAlt: "Healthy baguette with egg and vegetables"
    },
    meal7: {
        imageName: img7,
        imageAlt: "Burger with cheddar and bacon"
    },
    meal8: {
        imageName: img8,
        imageAlt: "Granola with cherries and strawberries"
    }
}

const mealList = () => {
    let mealArray = [];
    for(let meal in meals) {
        mealArray.push((<Meal key={meals[meal].imageName} img={meals[meal].imageName} alt={meals[meal].imageAlt} />));
    }
    return mealArray;
}

const Meals = props => {
    return (
        <section className="section-meals">
            <ul className="meals-showcase clearfix">
                {mealList()}
            </ul>
        </section>
    );
}

export default Meals;