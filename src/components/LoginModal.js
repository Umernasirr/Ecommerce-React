import React, { Component } from "react";

import { ProductConsumer } from "../context";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdbreact";
import LoginCreds from "./LoginCreds";
import { Redirect } from "react-router-dom";

class LoginModal extends Component {
  state = {
    model: true,
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
      return <Redirect to="/" />;
    }
    return (
      <ProductConsumer>
        {(value) => {
          let { closeModal, loginModalIsOpen } = value;
          let { id, img, price, title, inCart, info } = value.modalProduct;

          if (!loginModalIsOpen) {
            return null;
          } else {
            return (
              <MDBContainer onClick={() => {}}>
                <MDBModal
                  className="modal-dialog mt-5"
                  isOpen={loginModalIsOpen}
                  toggle={this.toggle}
                >
                  <MDBModalBody
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <h1 className="lead text-bold h1">
                      Login To Proceed to Cart
                    </h1>
                    <MDBContainer>
                      <MDBRow>
                        <MDBCol>
                          <LoginCreds value={value} />
                          {/* <MDBInput
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
                          /> */}
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </MDBModalBody>

                  <MDBModalFooter
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  ></MDBModalFooter>

                  <MDBBtn
                    color="secondary"
                    onClick={() => {
                      value.closeLoginModal();
                    }}
                  >
                    Back to Store
                  </MDBBtn>
                </MDBModal>
              </MDBContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default LoginModal;
