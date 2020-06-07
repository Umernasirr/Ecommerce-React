import React, { Component } from "react";

import { ProductConsumer } from "../context";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
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
          let { loginModalIsOpen, isLoggedIn } = value;

          if (isLoggedIn) {
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
                    <MDBContainer>
                      <MDBRow>
                        <MDBCol>
                          <LoginCreds value={value} />
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </MDBModalBody>

                  <MDBModalFooter
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  ></MDBModalFooter>
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
