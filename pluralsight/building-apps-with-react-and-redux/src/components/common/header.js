import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <a className="navbar-brand" href="#">Fixed navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" activeClassName="active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link" activeClassName="active">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="courses" className="nav-link" activeClassName="active">Courses</Link>
          </li>
          {loading && <LoadingDots interval={100} dots={20} />}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
