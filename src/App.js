import React, { Component } from 'react';
import { configureAnchors } from 'react-scrollable-anchor';

import './App.css';
import Aux from './hoc/Aux/Aux';
import Waypoint from 'react-waypoint';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Meals from './components/Meals/Meals';
import Steps from './components/Steps/Steps';
import Cities from './components/Cities/Cities';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    stickyNav: false,
    featureFade: false,
    phoneFade: false,
    cityFade: false,
    pricePulse: true
  }

  onEnterHandler = () => {
    this.setState({stickyNav: false});
  };

  onLeaveHandler = () => {
    this.setState({stickyNav: true});
  };

  featureAnimationHandler = () => {
    this.setState({featureFade: true})
  }

  phoneFade = () => {
    this.setState({phoneFade: true})
  }

  cityAnimationHandler = () => {
    this.setState({cityFade: true})
  }

  pricePulse = () => {
    this.setState({pricePulse: !this.state.pricePulse})
  }

  render() {
    
    configureAnchors({offset: -60, scrollDuration: 1000});
    
    return (
        <Aux>
          <Header stickyNav={this.state.stickyNav}/>
          <Waypoint onEnter={this.onEnterHandler} />
          <Waypoint onLeave={this.onLeaveHandler} />
          <Waypoint onLeave={this.featureAnimationHandler} topOffset='35%'/>
          <Features featureFade={this.state.featureFade}/>
          <Meals />
          <Waypoint onLeave={this.phoneFade} topOffset='15%'/>
          <Steps phoneFade={this.state.phoneFade}/>
          <Waypoint onLeave={this.cityAnimationHandler} topOffset='35%'/>
          <Cities cityFade={this.state.cityFade}/>
          <Testimonials />
          <Waypoint onLeave={this.pricePulse} topOffset='35%'/>
          <Waypoint onLeave={this.pricePulse} topOffset='35%'/>
          <Pricing pricePulse={this.state.pricePulse}/>
          <Contact />
          <Footer />
        </Aux>
    );
  }
}

export default App;
