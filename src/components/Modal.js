import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdbreact";

import { ProductConsumer } from "../context";
import { Redirect } from "react-dom";
class Modal extends Component {
  state = {
    modal: null,
    redirect: null,
    quantity: 1,
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
                    value.closeModal();
                  }}
                >
                  <MDBModal
                    className="modal-dialog mt-5"
                    isOpen={modalIsOpen}
                    toggle={this.toggle}
                  >
                    <MDBModalBody
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-6">
                            <img
                              alt={title}
                              src={img}
                              className="img-thumbnail hvr-grow"
                              style={{ maxHeight: "70%" }}
                            />
                          </div>
                          <div className="col-6 text-center ">
                            <h3 className="text-primary my-4">{title}</h3>
                            <h4>Price: Rs. {price}</h4>
                            <p className=" my-2">{info.slice(0, 100)}...</p>
                          </div>
                        </div>
                      </div>
                      <MDBContainer>
                        <MDBRow>
                          <MDBCol>
                            <MDBInput
                              className="mr-3"
                              label="Enter Quantity"
                              icon="price"
                              name="quantity"
                              type="text"
                              validate
                              default="1"
                              error="wrong"
                              success="right"
                              value={this.state.quantity}
                              onChange={(e) => {
                                e.preventDefault();
                                this.setState({
                                  quantity: e.target.value,
                                });
                              }}
                            />
                          </MDBCol>
                        </MDBRow>
                      </MDBContainer>
                    </MDBModalBody>

                    <MDBModalFooter
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <MDBBtn
                        color="danger"
                        outline
                        rounded
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Back to Store
                      </MDBBtn>

                      <MDBBtn
                        color="primary"
                        outline
                        rounded
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id, this.state.quantity);

                          closeModal();
                          this.setState({
                            quantity: 1,
                          });
                        }}
                      >
                        {inCart ? "Added to Cart" : "Add to Cart"}
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
