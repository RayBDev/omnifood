import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Meals from './components/Meals/Meals';
import Steps from './components/Steps/Steps';
import Cities from './components/Cities/Cities';
import Testimonials from './components/Testimonials/Testimonials';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Features />
          <Meals />
          <Steps />
          <Cities />
          <Testimonials />
        </div>
    );
  }
}

export default App;
