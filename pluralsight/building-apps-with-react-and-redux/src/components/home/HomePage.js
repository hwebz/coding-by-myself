import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return(
        <main role="main">
          <div className="jumbotron">
            <h1>Navbar example</h1>
            <p className="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you
              scroll, it will remain fixed to the top of your browser's viewport.</p>
            <a className="btn btn-lg btn-primary" href="#" role="button">View navbar
              docs &raquo;</a>
          </div>
        </main>
    );
  }
}

export default HomePage;
