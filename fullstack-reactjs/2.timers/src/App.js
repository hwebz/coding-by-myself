import React, { Component } from 'react';
import TimersDashboard from './TimersDashboard.js';

class App extends Component {
  render() {
    return (
      <div className="timer-app mt-4">
        <TimersDashboard />        
      </div>
    );
  }
}

export default App;
