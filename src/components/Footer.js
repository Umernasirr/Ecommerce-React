import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <footer class="card-footer">
        <div class="container p-2">
          <div class="row text-center">
            <div class="col-lg-4 col-6">
              <nav
                class="nav justify-content-center|justify-content-end  d-block footer"
                style={{ color: "black" }}
              >
                <h4 class="p-2 d-block">Company</h4>
                <Link class="nav-link hvr-grow d-block" to="/">
                  Home
                </Link>
                <Link class="nav-link hvr-grow d-block" to="/about">
                  About Us
                </Link>
                <Link class="nav-link hvr-grow d-block" to="/products">
                  Shop
                </Link>

                <Link class="nav-link hvr-grow d-block" to="/cart">
                  View Cart
                </Link>

                <Link class="nav-link hvr-grow d-block" to="/contact">
                  Contact Us
                </Link>
                <Link class="nav-link hvr-grow d-block" to="/inquiry">
                  Inquiry
                </Link>
              </nav>
            </div>
            <div class="col-lg-4 col-6 " style={{ color: "black" }}>
              <h4 class="p-2 ">Contact</h4>
              <p class="email">
                taimur.dtl
                <br />
                @gmail.com
              </p>
              <p>Phone: 0331-2150583</p>
            </div>
            <div class="col-lg-4" style={{ color: "black" }}>
              <div class="container">
                <div class="row">
                  <div class="col-0 col-md-2"></div>
                  <div class="col-12 col-md-8 ">
                    <h4 class="p-2">Address</h4>
                    <address class="text-center">
                      Aurangzeb market, M.A Jinnah Road Karachi Pakistan
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="text-center" style={{ color: "black" }}>
          <p>
            <small> COPYRIGHT &copy; 2020 - DTL MOTORCYCLE PARTS </small>
          </p>
        </div>
      </footer>
    );
  }
}
