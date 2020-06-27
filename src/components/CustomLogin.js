import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
export default class CustomLogin extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    display: "d-none",
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

                if (
                  this.state.name === "" ||
                  this.state.phone === ""
                ) {
                  this.setState({
                    display: "d-block",
                  });
                } else {
                  value.setUser(user);
                  value.closeLoginModal();
                  value.isLoggedIn = true;
                  value.login()
                                }
              }}
            >
              <p className="h5 text-center p-2">OR </p>
              <hr />
              <h5>Login to the site to access Products</h5>
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
                  label="Enter Email (Optional)"
                  type="text"
                  error="wrong"
                  name="email"
                  success="right"
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

              <p className={`red-text ${this.state.display}`}>
                Please Enter The Details Above
              </p>
              <div className="text-center py-2 ">
                <MDBBtn color="primary" type="submit">
                  Login to Website
                </MDBBtn>

                <Link to="/">
                  <MDBBtn
                    color="secondary"
                    onClick={() => {
                      value.closeLoginModal();
                    }}
                  >
                    Go Back to Home Without Logging In
                  </MDBBtn>
                </Link>
              </div>
            </form>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
