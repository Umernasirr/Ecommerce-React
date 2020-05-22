import React, { Component } from "react";
import "./HomePage.css";
import Carousel from "./Carousel";
import SimilarProduct from "./SimilarProduct";
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBBtn,
  MDBCardBody,
} from "mdbreact";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
export default class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="indexBackground "></div>

        <div className="background-text text-center text-white">
          <div className=" ">
            <p id="logo-DTL-text" className="display-4  ">
              DYNAMIC TECHNOLOGY LEADER
            </p>
          </div>
          <div className="animated h4">
            Providing Quality that has no parallel
          </div>
        </div>
        {/* Body */}

        <div className="my-4  mx-5">
          <h3 className="mx-auto text-center mx-5 display-5">
            Welcome to the Official DTL Parts Website
            <hr />
          </h3>

          {/* <Carousel /> */}
        </div>
        <MDBContainer fluid>
          <MDBRow className="text-center justify-content-center my-3">
            <Link to="/products">
              <MDBBtn color="primary " outline rounded size="lg">
                Visit Our New and Improved Store
              </MDBBtn>
            </Link>
          </MDBRow>

          {/* The fancy 3 column thingy */}

          <MDBRow className="text-center justify-content-center my-3">
            <MDBCol className="mt-2" sm="12" md="3">
              <MDBCard style={{ height: "90%" }}>
                <MDBCardImage
                  className="img-fluid d-block w-100"
                  src="/img/dtlgif3.gif"
                  waves
                />
                <MDBCardBody className="text-center">
                  <MDBCardTitle>Visit Our Store</MDBCardTitle>
                  <MDBCardText>
                    Buy Products on the Official DTL Motorcycle Parts Online
                    Store with Cash on Delivery
                  </MDBCardText>
                  <Link>
                    <MDBBtn color="primary " outline rounded href="#">
                      Goto Store
                    </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="mt-2" sm="12" md="3">
              <MDBCard style={{ height: "90%" }}>
                <MDBCardImage
                  className="img-fluid d-block w-100"
                  src="/img/dtlgif4.gif"
                  waves
                />
                <MDBCardBody className="text-center">
                  <MDBCardTitle>Contact Us</MDBCardTitle>
                  <MDBCardText>
                    Get in touch with us and submit your queries on the site
                  </MDBCardText>
                  <Link>
                    <MDBBtn color="primary " outline rounded href="#">
                      Contact Us
                    </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="mt-2" sm="12" md="3">
              <MDBCard style={{ height: "90%" }}>
                <MDBCardImage
                  className="img-fluid d-block w-100"
                  src="/img/dtlgif1.gif"
                  waves
                />
                <MDBCardBody className="text-center">
                  <MDBCardTitle>Visit Our DARAZ Store</MDBCardTitle>
                  <MDBCardText>
                    Shop online using the OFFICIAL DARAZ Store of DTL Motorcycle
                    Parts
                  </MDBCardText>
                  <Link>
                    <MDBBtn color="primary " outline rounded href="#">
                      Daraz Shop
                    </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="mt-2" sm="12" md="3">
              <MDBCard style={{ height: "90%" }}>
                <MDBCardImage
                  className="img-fluid d-block w-100"
                  src="/img/dtlgif1.gif"
                  waves
                />
                <MDBCardBody className="text-center">
                  <MDBCardTitle>Visit Our DARAZ Store</MDBCardTitle>
                  <MDBCardText>
                    Shop online using the OFFICIAL DARAZ Store of DTL Motorcycle
                    Parts
                  </MDBCardText>
                  <Link>
                    <MDBBtn color="primary " outline rounded href="#">
                      Daraz Shop
                    </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          {/* Featured Products */}

          <MDBRow>
            <h4 className="col-10 mx-auto text-center mb-3">
              Featured Products
              <hr />
            </h4>

            <ProductConsumer>
              {(value) => {
                // eslint-disable-next-line no-lone-blocks
                return value.featuredProducts.map((item) => (
                  <MDBCol
                    className="text-center align-content-center"
                    md="3"
                    xs="12"
                    sm="12"
                  >
                    <SimilarProduct item={item} value={value} />
                  </MDBCol>
                ));
              }}
            </ProductConsumer>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
