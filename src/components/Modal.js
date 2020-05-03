import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
} from "mdbreact";

import { ProductConsumer } from "../context";
import { Redirect } from "react-router-dom";

class Modal extends Component {
  state = {
    modal: null,
    redirect: null,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    } else {
      return (
        <ProductConsumer>
          {(value) => {
            let { closeModal, modalIsOpen } = value;
            let { id, img, price, title, inCart, info } = value.modalProduct;

            if (!modalIsOpen) {
              return null;
            } else {
              return (
                <MDBContainer
                  onClick={() => {
                    closeModal();
                  }}
                >
                  <MDBModal
                    className="my-5 py-5 modal-dialog"
                    isOpen={modalIsOpen}
                    toggle={this.toggle}
                  >
                    <MDBModalBody>
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-6">
                            <img alt={title} src={img} className="img-fluid" />
                          </div>
                          <div className="col-sm-6 text-center ">
                            <h3 className="text-primary my-4">{title}</h3>
                            <h4>Price: Rs. {price}</h4>
                            <p className=" my-4">{info.slice(0, 100)}...</p>
                          </div>
                        </div>
                      </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn
                        color="secondary"
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Store
                      </MDBBtn>

                      <MDBBtn
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.handleDetail(id);
                          closeModal();
                          this.setState({
                            redirect: "/details",
                          });
                        }}
                        color="warning"
                      >
                        View Details
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                </MDBContainer>
              );
            }
          }}
        </ProductConsumer>
      );
    }
  }
}

export default Modal;
