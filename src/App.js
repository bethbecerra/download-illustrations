import React, { Component } from 'react';
import './App.css';
import Images from './Images';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <span>
              <i className="em em-whale2" />
            </span>
            Holi!
          </h1>
        </header>
        <div>{<Images />}</div>
        <footer>
          <a className="Contact-instagram" href="https://www.instagram.com/beth_becerra/">
            Free download by @beth_becerra
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
