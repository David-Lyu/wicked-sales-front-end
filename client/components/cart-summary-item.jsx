import React from 'react';

export default function CartSummaryItem(props) {
  const cartItem = props.cartItem;
  const cartItemPrice = props.cartItem.price.toString();
  const formatPrice = '$' + cartItemPrice.slice(0, -2) + '.' + cartItemPrice.slice(-2);
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <img className="col-md-5" src={`${cartItem.image}`} alt={`image of ${cartItem.name}`} />
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{cartItem.name}</h5>
              <h6 className="card-sub-title mb-2 text-muted">
                {formatPrice}
              </h6>
              <p className="card-text">{cartItem.shortDescription}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={() => props.deleteCartItem(cartItem.cartItemId)}>Delete Item</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
