import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">Fixed navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="about" className="nav-link">About Us</Link>
              </li>
            </ul>
          </div>
        </nav>

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
