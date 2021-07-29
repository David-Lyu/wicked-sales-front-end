import React from 'react';

export default class Disclaimer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAcknowledgeClick = this.handleAcknowledgeClick.bind(this);
    this.state = {
      showModal: 'block'
    };
  }

  handleAcknowledgeClick(e) {
    e.preventDefault();
    this.setState({ showModal: '' });
  }

  render() {

    return (
      <div className="modal custom-modal" style={{ display: this.state.showModal }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLongTitle">Disclaimer</h3>
            </div>
            <div className="modal-body">
              <p>
              This site is a demo site and is and will not be used for commercial purposes and cannot make any real purchases
                <br></br> By checking this box you acknowledge that this site is for demo purposes and that you cannot make any
              real purchases and will not put any real information when asked for it.
              </p>
            </div>

            <div className="modal-footer">
              <form className="d-flex justify-content-between w-100" onSubmit={this.handleAcknowledgeClick} >
                <label className="d-flex justify-content-around align-items-center pointer">
                  I acknowledge
                  <input type="checkbox" required/>
                </label>
                <button>Close</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
