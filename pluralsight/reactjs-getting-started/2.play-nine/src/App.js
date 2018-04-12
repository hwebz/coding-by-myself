import React, { Component } from 'react';
import Game from './Game.js';
class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <h3>Play Nine</h3>
        <hr />
        <Game />
      </div>
    );
  }
}

export default App;
