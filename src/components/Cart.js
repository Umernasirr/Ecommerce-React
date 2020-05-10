import React, { Component } from "react";
import {
  MDBTableHead,
  MDBTable,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdbreact";

import { ProductConsumer, Context } from "../context";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { Link } from "mdbreact";
export default class Cart extends Component {
  static contextType = Context;

  componentDidMount() {
    let value = this.context;
    console.log(value);

    if (value.cart.length > 0) {
      value.openLoginModal();
    }
  }
  render() {
    return (
      <MDBContainer>
        <ProductConsumer>
          {(value) => {
            if (value.cart.length <= 0) {
              return <EmptyCart />;
            } else {
              const cartItems = value.cart;

              console.log("hi");
              return (
                <div>
                  <MDBTable responsive hover small>
                    <MDBTableHead>
                      <tr className="text-center">
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                        <th>Total</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {cartItems.map((item) => (
                        <CartItem item={item} key={item.id} />
                      ))}
                    </MDBTableBody>
                  </MDBTable>

                  {/* <Checkout value={value} /> */}
                  <MDBContainer>
                    <MDBRow className="float-right">
                      <MDBBtn
                        onClick={() => {
                          value.cart.forEach((item) => {
                            value.removeFromCart(item.id);
                          });
                          value.clearCart();
                        }}
                        color="primary px-5 mx-3"
                      >
                        Clear Cart
                      </MDBBtn>
                      <Link className="text-white p-2 " to="/checkout">
                        <MDBBtn className="text-white "> Go To Checkout</MDBBtn>
                      </Link>
                    </MDBRow>
                  </MDBContainer>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </MDBContainer>
    );
  }
}
