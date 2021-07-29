import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProducts() {
    fetch('https://wicked-sales.herokuapp.com/api/products')
      .then((responce) => responce.json())
      .then((data) => this.setState({ products: data }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="row space-cards mobile justify-content-center">
        {this.state.products.length
          ? this.state.products.map((product) => {
              return (
                <ProductListItem
                  key={product.productId}
                  product={product}
                  setView={this.props.setView}
                  addToCart={this.props.addToCart}
                />
              );
            })
          : null}
      </div>
    );
  }
}
