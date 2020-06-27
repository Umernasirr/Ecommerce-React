import React, { Component } from "react";
import { ProductConsumer } from "../context";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
  MDBBtn,
  MDBCardBody,
} from "mdbreact";
export class Checkout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };
  shipping = 50;
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { name, email, phone, address } = value;

          return (
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="my-5">
                    <MDBCardBody>
                      <form
                        action="https://formspree.io/myyngvlw"
                        method="POST"
                      >
                        <p className="h4 text-center py-4">Confirm Checkout</p>
                        <div className="grey-text">
                          <MDBInput
                            label="Enter Name"
                            icon="user"
                            name="name"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            value={name}
                            onChange={(e) => {
                              this.setState({
                                name: e.target.value,
                              });
                            }}
                          />

                          <MDBInput
                            label="Enter Phone Number"
                            icon="phone"
                            group
                            type="text"
                            error="wrong"
                            name="number"
                            success="right"
                            value={phone}
                            onChange={(e) => {
                              this.setState({
                                phone: e.target.value,
                              });
                            }}
                          />

                          <MDBInput
                            label="Enter Shipping Address"
                            icon="address-book"
                            group
                            type="text"
                            validate
                            name="address"
                            value={address}
                            onChange={(e) => {
                              this.setState({
                                address: e.target.value,
                              });
                            }}
                          />

                          <MDBInput
                            label="Enter your Email"
                            icon="envelope"
                            group
                            type="text"
                            error="wrong"
                            success="right"
                            name="mail"
                            value={email}
                            onChange={(e) => {
                              this.setState({
                                email: e.target.value,
                              });
                            }}
                          />

                          {value.cart.map((item, idx) => {
                            let clonedItem = { ...item };
                            delete clonedItem.id;
                            delete clonedItem.img;
                            delete clonedItem.company;
                            delete clonedItem.info;
                            delete clonedItem.inCart;

                            clonedItem = JSON.stringify(clonedItem);
                            return (
                              <MDBInput
                                key={item.id}
                                className="d-none"
                                name={`ProductRs. {idx + 1}`}
                                value={clonedItem}
                              />
                            );
                          })}

                          <MDBInput
                            className="d-none"
                            name={`Total`}
                            value={value.calculateTotal()}
                          />

                          <MDBInput
                            className="d-none"
                            name={`Total with Shipping Fee`}
                            value={value.calculateTotal() + 50}
                          />
                        </div>
                        <div className="text-center py-4 mt-3">
                          <MDBBtn color="primary" type="submit">
                            Place Order
                          </MDBBtn>
                        </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>{" "}
                <MDBCol md="6">
                  <div>
                    <div className="">
                      <h4 className="d-flex justify-content-between align-items-center mb-3 mt-5">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">
                          {value.cart.length}
                        </span>
                      </h4>

                      <ul className="list-group mb-3 z-depth-1">
                        {value.cart.map((item) => {
                          return (
                            <li className="list-group-item d-flex justify-content-between lh-condensed py-3">
                              <div>
                                <h6 className="my-0">{item.title}</h6>
                                <small className="text-muted">
                                  Quantity: {item.count}
                                </small>
                              </div>
                              <span className="text-muted">
                                Rs. {item.total}
                              </span>
                            </li>
                          );
                        })}

                        <li className="list-group-item d-flex justify-content-between">
                          <span>Total without Shipping (Pkr)</span>
                          <strong>Rs. {value.calculateTotal()}</strong>
                        </li>

                        <li className="list-group-item d-flex justify-content-between">
                          <span>Total (Karachi Shipping) </span>
                          <strong>
                            Rs. {value.calculateTotal() + this.shipping}
                          </strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Checkout;
