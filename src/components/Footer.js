import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <footer className="card-footer">
        <div className="container p-2">
          <div className="row text-center">
            <div className="col-lg-4 col-6">
              <nav
                className="nav justify-content-center|justify-content-end  d-block footer"
                style={{ color: "black" }}
              >
                <h4 className="p-2 d-block">Company</h4>
                <Link className="nav-link hvr-grow d-block" to="/">
                  Home
                </Link>
                <Link className="nav-link hvr-grow d-block" to="/about">
                  About Us
                </Link>
                <Link className="nav-link hvr-grow d-block" to="/products">
                  Shop
                </Link>

                <Link className="nav-link hvr-grow d-block" to="/cart">
                  View Cart
                </Link>

                <Link className="nav-link hvr-grow d-block" to="/contact">
                  Contact Us
                </Link>
                <Link className="nav-link hvr-grow d-block" to="/inquiry">
                  Inquiry
                </Link>
              </nav>
            </div>
            <div className="col-lg-4 col-6 " style={{ color: "black" }}>
              <h4 className="p-2 ">Contact</h4>
              <p className="email">
                taimur.dtl
                <br />
                @gmail.com
              </p>
              <p>Phone: 0331-2150583</p>
            </div>
            <div className="col-lg-4" style={{ color: "black" }}>
              <div className="container">
                <div className="row">
                  <div className="col-0 col-md-2"></div>
                  <div className="col-12 col-md-8 ">
                    <h4 className="p-2">Address</h4>
                    <address className="text-center">
                      Aurangzeb market, M.A Jinnah Road Karachi Pakistan
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center" style={{ color: "black" }}>
          <p>
            <small> COPYRIGHT &copy; 2020 - DTL MOTORCYCLE PARTS </small>
          </p>
        </div>
      </footer>
    );
  }
}
