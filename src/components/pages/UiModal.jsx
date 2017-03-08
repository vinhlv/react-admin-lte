import React from 'react';
import Modal from 'react-modal';

class UiModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (

      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Modals
            <small>new</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">Modals</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box box-primary">
                <div className="box-header">
                  <h3 className="box-title">Bootstrap Modals</h3>
                </div>

                <div className="box-body">
                  <div className="row margin">
                    <button onClick={this.openModal}>Open Modal</button>
                    <Modal
                     isOpen={this.state.modalIsOpen}
                     onAfterOpen={this.afterOpenModal}
                     onRequestClose={this.closeModal}
                     className="modal-dialog"
                     overlayClassName="modal-overlay"
                     contentLabel="Example Modal">
                      <div className="modal-content">
                         <div className="modal-header">
                           <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                             <span aria-hidden="true">&times;</span></button>
                           <h4 className="modal-title">Default Modal</h4>
                         </div>
                         <div className="modal-body">
                           <p>One fine body&hellip;</p>
                         </div>
                         <div className="modal-footer">
                           <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                           <button type="button" className="btn btn-primary">Save changes</button>
                         </div>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    );
  }
}

export default UiModal;
