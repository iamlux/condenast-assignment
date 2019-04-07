import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="condenast">
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;
