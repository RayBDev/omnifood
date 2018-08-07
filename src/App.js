import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Meals from './components/Meals/Meals';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Features />
          <Meals />
        </div>
    );
  }
}

export default App;
