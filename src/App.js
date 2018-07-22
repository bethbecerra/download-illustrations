import React, { Component } from 'react';
import './App.css';
import Images from './Images';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">LoL</h1>
        </header>
        <div>{<Images />}</div>
      </div>
    );
  }
}

export default App;
