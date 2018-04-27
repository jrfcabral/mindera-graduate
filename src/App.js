import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header leftIcon="menu" rightIcon="search" title="Open day"/>
      </div>
    );
  }
}

export default App;
