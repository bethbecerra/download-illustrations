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
          <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">
            <img
              className="img_license"
              alt="Creative Commons License"
              src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png"
            />
          </a>
          <br />This work is licensed under a{' '}
          <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">
            Creative Commons Attribution-NoDerivatives 4.0 International License
          </a>
          {'  '}
          | Create by <a href="https://www.instagram.com/beth_becerra/">@beth_becerra</a>
        </footer>
      </div>
    );
  }
}

export default App;
