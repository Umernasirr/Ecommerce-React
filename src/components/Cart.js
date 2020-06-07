import React, { Component } from "react";
import {
  MDBTableHead,
  MDBTable,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
} from "mdbreact";

import { ProductConsumer, Context } from "../context";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { Link } from "mdbreact";
export default class Cart extends Component {
  
  render() {
    return (
      <MDBContainer>
        <br></br>
        <p className=" mt-2 bt-5 h3  text-primary text-center">Your Cart</p>
        <hr />
        <ProductConsumer>
          {(value) => {
            if (value.cart.length <= 0) {
              return <EmptyCart />;
            } else {
              const cartItems = value.cart;

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

                  <div className="">
                    <hr />
                    <Link to="#">
                      <MDBBtn
                        outline
                        rounded
                        onClick={() => {
                          value.cart.forEach((item) => {
                            value.removeFromCart(item.id);
                          });
                          value.clearCart();
                        }}
                        color="danger "
                      >
                        Clear Cart
                      </MDBBtn>
                    </Link>
                    <Link className="text-white " to="/checkout">
                      <MDBBtn
                        color="primary"
                        outline
                        rounded
                        className="text-white "
                      >
                        {" "}
                        Go To Checkout
                      </MDBBtn>
                    </Link>
                  </div>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </MDBContainer>
    );
  }
}
