import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  if (props.cart.length) {
    let itemTotal = 0;
    const getAllCartItems = props.cart.map(cartItem => {
      itemTotal += parseInt(cartItem.price);
      return <CartSummaryItem key={cartItem.cartItemId} deleteCartItem={props.deleteCartItem} cartItem={cartItem}/>;
    });
    itemTotal = itemTotal.toString();
    itemTotal = '$' + itemTotal.slice(0, -2) + '.' + itemTotal.slice(-2);
    return (
      <div className="mobile bg-white p-3">
        <nav className="nav nav-tabs">
          <button className="nav-item nav-link text-white bg-success" onClick={() => { props.setView('catalog', {}); }}>
            {'< back to catalog'}
          </button>
        </nav>
        <h1>My Cart</h1>
        {getAllCartItems}
        <div className="d-flex justify-content-between mb-3">
          <h3>Item Total: {itemTotal}</h3>
          <button onClick={() => { props.setView('order', {}); }} className="btn btn-primary btn-sm">Checkout</button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <nav className="nav nav-tabs bg-white p-3">
          <button className="nav-item nav-link text-white bg-success" onClick={() => { props.setView('catalog', {}); }}>
            {'< back to catalog'}
          </button>
        </nav>
        <h1 className="bg-white text-center py-3">Cart is Empty</h1>
      </>
    );
  }
}
