import React, {Component} from 'react';
import Product from './Product.js';
import products from '../seed.js';

class ProductList extends Component {

    state = {
        products: []
    }

    // constructor(props) {
    //     super(props);

    //     // this.state = {
    //     //     products: []
    //     // }
    //     //this.handleProductUpVote = this.handleProductUpVote.bind(this);
    // }

    componentDidMount() {
        this.setState({ products: products });
    }

    handleProductUpVote = (productId) => {
        // const currentProducts = this.state.products;
        // currentProducts.forEach((product) => {
        //     if (product.id === productId) {
        //         product.votes = product.votes + 1;
        //     }
        // });
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        });
        this.setState({ products: nextProducts });
    }

    render() {
        const productsSorted = this.state.products.sort((a, b) => (
            b.votes - a.votes
        ));
        const productComponents = productsSorted.map((product) => (
            <Product key={'product-' + product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        url={product.url}
                        votes={product.votes}
                        submitterAvatarUrl={product.submitterAvatarUrl}
                        productImageUrl={product.productImageUrl}
                        onVote={this.handleProductUpVote} />
        ));

        return(
            <div className="card-deck">
                {productComponents}
            </div>
        );
    }
}

export default ProductList;