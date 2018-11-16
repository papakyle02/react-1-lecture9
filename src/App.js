import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Title of App</h1>
        <p>App app app app app</p>
        <input/>
        <button>Press me!</button>
        <ul>
          <li><a href="www.google.com">One</a></li>
          <li><a href="www.reddit.com">Two</a></li>
          <li><a href="www.homedepot.com">Three</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
