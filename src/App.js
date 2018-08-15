import React, { Component } from 'react';
import './App.css';

import Aux from './hoc/Aux/Aux';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Meals from './components/Meals/Meals';
import Steps from './components/Steps/Steps';
import Cities from './components/Cities/Cities';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
        <Aux>
          <Header />
          <Features />
          <Meals />
          <Steps />
          <Cities />
          <Testimonials />
          <Pricing />
          <Contact />
        </Aux>
    );
  }
}

export default App;
