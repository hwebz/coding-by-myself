import React, { Component } from 'react';
import ProductList from './product/ProductList.js';

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h1>Product List</h1>
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
