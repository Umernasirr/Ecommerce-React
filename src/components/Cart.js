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
  static contextType = Context;

  componentDidMount() {
    let email = this.context.email;
    let name = this.context.name;
    let phone = this.context.phone
    let address = this.context.address
    let cartItems = [...this.context.cart];

    if(email !== ''&& this.context.cart.length > 0 ){

      console.log('hi')
    cartItems = cartItems.map((element) => {
      delete element.id;
      delete element.img;
      delete element.inCart;
      delete element.category;
      delete element.categoryId;
      delete element.info;
      // delete element.
      return element;
    });

    let message_html = { email, name, phone,address,cartItems };

    console.log(JSON.stringify(message_html));
    this.handleSubmit(JSON.stringify(message_html), this.context.name, this.context.email)
  }

  }

  handleSubmit(message_html, from_name= "", reply_to="") {
    const templateId = "template_tPloQj5C";

    this.sendFeedback(templateId, {
      message_html: message_html,
      from_name: from_name,
      reply_to: reply_to,
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

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
