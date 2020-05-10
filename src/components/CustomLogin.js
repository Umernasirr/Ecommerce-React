import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import { ProductConsumer } from "../context";
export default class CustomLogin extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };
  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                let user = {
                  name: this.state.name,
                  email: this.state.email,
                  phone: this.state.phone,
                  address: this.state.address,
                };

                value.setUser(user);
                console.log(value.getUser());
                value.closeLoginModal();
              }}
            >
              <p className="h4 text-center py-4">Confirm Checkout</p>
              <div className="grey-text">
                <MDBInput
                  label="Enter Name"
                  name="name"
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value,
                    });
                  }}
                />

                <MDBInput
                  label="Enter Phone Number"
                  type="text"
                  error="wrong"
                  name="number"
                  success="right"
                  value={this.state.phone}
                  onChange={(e) => {
                    this.setState({
                      phone: e.target.value,
                    });
                  }}
                />

                <MDBInput
                  label="Enter Shipping Address"
                  group
                  type="text"
                  validate
                  name="address"
                  value={this.state.address}
                  onChange={(e) => {
                    this.setState({
                      address: e.target.value,
                    });
                  }}
                />

                <MDBInput
                  label="Enter your Email"
                  group
                  type="text"
                  error="wrong"
                  success="right"
                  name="email"
                  value={this.state.email}
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
                <MDBBtn color="cyan" type="submit">
                  Place Order
                </MDBBtn>
              </div>
            </form>
          </div>
        )}
      </ProductConsumer>
    );
  }
}