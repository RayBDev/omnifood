import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Features from './components/Features/Features';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Features />
        </div>
    );
  }
}

export default App;
