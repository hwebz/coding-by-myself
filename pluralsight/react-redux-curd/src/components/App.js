import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';



class App extends Component {
  render() {
    return (
      <div>
        <Header loading={this.props.loading}/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}


App.PropTypes = {
  children: PropTypes.object.isRequired,
  loading:PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading:state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
