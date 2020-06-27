import React, { Component } from "react";
import "./HomePage.css";
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
            <ProductConsumer>
              {(value) => {
                return value.bundledProducts.map((bundleItem) => (
                  <MDBCol key={bundleItem.id} className="my-2" sm="12" md="3">

                    <MDBCard style={{ height: "90%" }}>
                      <MDBCardImage
                        className="img-fluid d-block w-100"
                        src={bundleItem.img}
                        waves
                      />

                      <MDBCardBody className="text-center">
                        <MDBCardTitle>{bundleItem.title}</MDBCardTitle>
                        <MDBCardText>{bundleItem.info}</MDBCardText>

                        <MDBBtn
                          disabled={bundleItem.inCart ? true : false}
                          color="primary "
                          outline
                          rounded
                          onClick={() => {
                            if (!value.isLoggedIn) {
                              value.openLoginModal();
                            }else{
                              console.log(bundleItem.inCart)
                              value.openModal(bundleItem.id);

                            }
                          }}
                        >
                          {bundleItem.inCart ? "Added To Cart" : "Add To Cart"}
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ));
              }}
            </ProductConsumer>
          </MDBRow>

          <MDBRow>
            <h4 className="col-10 text-primary  mx-auto text-center mb-3 mx-5">
              Featured Products
              <hr />
            </h4>

            <ProductConsumer>
              {(value) => {
                // eslint-disable-next-line no-lone-blocks
                return value.featuredProducts.map((item) => (
                  <MDBCol key={item.id}
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
