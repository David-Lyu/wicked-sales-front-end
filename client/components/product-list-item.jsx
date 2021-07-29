import React, { useState } from 'react';

export default function ProductListItem(props) {
  const [hoverClass, setHoverClass] = useState('');
  let formatPrice = '$';
  const stringPrice = props.product.price.toString();
  for (let i = 0; i < stringPrice.length; i++) {
    if (i === stringPrice.length - 2) {
      formatPrice += '.' + stringPrice[i];
    } else {
      (
        formatPrice += stringPrice[i]
      );
    }
  }
  return (
    <div className={`card mb-3 col-sm-3 pointer px-0 mx-2 ${hoverClass}`}
      onMouseLeave={() => setHoverClass('')}
      onMouseEnter={() => setHoverClass('on-hover')}
      onClick={() => { props.setView('details', props.product.productId); }}>
      <img src={props.product.image} className="card-img-top" alt={`picture of ${props.product.name}`}/>
      < div className = "card-body pb-5">
        <h5 className="card-title">{props.product.name}</h5>
        <h6 className="card-sub-title mb-2 text-muted">{formatPrice}</h6>
        <p className="card-text">{props.product.shortDescription}</p>
      </div>
    </div>
  );
}
