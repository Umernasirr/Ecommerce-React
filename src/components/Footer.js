import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBFooter, MDBRow, MDBCol, MDBContainer } from "mdbreact";
export default class Footer extends Component {
  render() {
    return (
      <MDBFooter
        color="special-color-dark
"
        className="font-small  "
      >
        <br />
        <MDBContainer fluid className=" text-center text-left">
          <MDBRow>
            <MDBCol md="6">
              <div className="d-none d-md-block">
                <h5 className="title white-text font-weight-bold ">About Us</h5>
                <p>
                  DTL Dynamic technology Leader has been established since 2013
                  Today, our wide range of product consists of sprocket kits,
                  brake shoes, bearings, engine and body parts for motorcycles.
                </p>
                <hr />
              </div>

              <h5 className="title white-text font-weight-bold">Contact Us</h5>
              <p>
                Email: taimur.dtl@gmail.com
                <br />
                Phone: 0331-2150583
                <br />
                Aurangzeb market, M.A Jinnah Road Karachi Pakistan
              </p>
              <hr />
            </MDBCol>
            <MDBCol className="" md="6">
              <h5 className="title white-text font-weight-bold ">
                Page Navigation
              </h5>

              <div className="container mt-2">
                <div className="row">
                  <div className="col-4 col-md-6 col-lg-12">
                    <Link className=" nav-link hvr-grow d-block" to="/">
                      Home
                    </Link>
                  </div>

                  <div className="col-4 col-md-6 d-lg-none">
                    <Link className=" nav-link hvr-grow d-block" to="/about">
                      About
                    </Link>
                  </div>

                  <div className="col-4 col-md-6 col-lg-12">
                    <Link className="nav-link hvr-grow d-block " to="/products">
                      Shop
                    </Link>
                  </div>
                  <div className="col-4 col-md-6 col-lg-12">
                    <Link className="nav-link hvr-grow d-block " to="/cart">
                      View Cart
                    </Link>
                  </div>

                  <div className="col-4 col-md-6 col-lg-12">
                    <Link className="nav-link hvr-grow d-block " to="/inquiry">
                      Inquiry
                    </Link>
                  </div>

                  <div className="col-4 col-md-6 col-lg-12">
                    <Link className="nav-link hvr-grow d-block " to="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright mt-4 text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.mdbootstrap.com"> DTL Motorcycle Parts </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
