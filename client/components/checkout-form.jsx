import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.resetClicks = this.resetClicks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditClick = this.handleCreditClick.bind(this);
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
    this.handleAddressIsClicked = this.handleAddressIsClicked.bind(this);
    this.handleShippingAddressChange = this.handleShippingAddressChange.bind(this);
    this.state = {
      userName: '',
      creditCard: '',
      shippingAddress: ''
    };
  }

  handleClick() {
    this.props.setView('catalog', {});
  }

  handleSubmit(e) {
    const formInput = this.state;
    e.preventDefault();
    this.props.placeOrder(formInput.userName, formInput.creditCard, formInput.shippingAddress);
    this.setState({
      userName: '',
      creditCard: '',
      shippingAddress: '',
      creditIsClicked: false,
      addressIsClicked: false
    });
    this.props.setView('catalog', {});
  }

  handleNameChange(e) {
    this.setState({
      userName: e.target.value
    });
  }

  handleCreditCardChange(e) {
    this.setState({
      creditCard: e.target.value
    });
  }

  handleCreditClick(e) {
    e.stopPropagation();
    this.setState({
      creditIsClicked: true,
      addressIsClicked: false
    });
  }

  handleShippingAddressChange(e) {
    this.setState({
      shippingAddress: e.target.value
    });
  }

  handleAddressIsClicked(e) {
    e.stopPropagation();
    this.setState({
      addressIsClicked: true,
      creditIsClicked: false
    });
  }

  resetClicks() {
    if (this.state.addressIsClicked || this.state.creditIsClicked) {
      this.setState({
        addressIsClicked: false,
        creditIsClicked: false
      });
    }
  }

  render() {
    let totalCost = 0;
    this.props.cart.forEach(cartItem => {
      totalCost += parseInt(cartItem.price);
    });
    totalCost = totalCost.toString();
    totalCost = '$' + totalCost.slice(0, -2) + '.' + totalCost.slice(-2);
    return (
      <div className="container mobile bg-white p-3 " onClick={this.resetClicks} >
        <h1 className="">My Cart</h1>
        <h6 className=" text-muted">Order Total: {totalCost}</h6>
        <form className="container" onSubmit={this.handleSubmit}>
          <label className="form-group row">
            Name
            <input onChange={this.handleNameChange} required type="text" value={this.state.userName}
              className="form-control"/>
          </label>
          <label className="form-group row">
            Credit Card
            <input onChange={this.handleCreditCardChange} onClick={this.handleCreditClick} type="number"
              value={this.state.creditCard} required className="form-control"/>
          </label>
          {this.state.creditIsClicked ? <p className="text-danger">Do not put any actual credit card number</p> : null}
          <label className="form-group row">
            Shipping Address
            <textarea onChange={this.handleShippingAddressChange} onClick={this.handleAddressIsClicked}
              value={this.state.shippingAddress} cols="3" required rows="3" className="form-control"/>
          </label>
          {this.state.addressIsClicked ? <p className="text-danger">Do not put any real address inside</p> : null}
          <div className="d-flex justify-content-between align-items-end">
            <p onClick={this.handleClick} className="pointer text-muted">
              {'<-- Continue Shopping'}
            </p>
            <button className="btn btn-primary">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}
