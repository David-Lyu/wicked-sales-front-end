import React from 'react';

export default function Header(props) {
  return (
    <header className="row d-flex align-items-center bg-dark text-white">
      <div className="d-flex justify-content-center col-sm-1 offset-sm-1">
        <i className="fas fa-lightbulb h2 logo text-warning pointer" onClick={() => props.setView('catalog')}>
          <i className="fas fa-leaf text-success"></i>
        </i>
      </div>
      <h1 className="col-sm-7">Plant and Lamp Store</h1>
      <div onClick={() => { props.setView('cart', {}); }} className="d-flex align-items-center col-sm-3 justify-content-center pointer">
        <h6>{props.cartItemCount + ' items'}</h6>
        <i className="fas fa-shopping-cart h3"></i>
      </div>
    </header>
  );
}
