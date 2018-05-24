import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Header from './common/header';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
