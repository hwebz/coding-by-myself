import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Pluralsight</a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <IndexLink to="/" activeClassName="active" className="nav-link">Home</IndexLink>
            </li>
            <li className="nav-item">
            <Link to="/about"  activeClassName="active" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
            <Link to="/courses"  activeClassName="active" className="nav-link">Courses</Link>
            {loading && <LoadingDots interval={100} dots={20}/>}
            </li>
          </ul>
        </div>
      </nav>
  );
};

Header.PropTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
