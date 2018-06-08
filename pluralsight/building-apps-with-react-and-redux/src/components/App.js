import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from './common/header';

class App extends Component {
  render() {
    return(
      <div>
        <Header loading={this.props.loading} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
