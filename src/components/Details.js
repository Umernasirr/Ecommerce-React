import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
} from "mdbreact";
import "./Details.css";
import { InnerImageZoom } from "react-inner-image-zoom";
import SimilarProduct from "./SimilarProduct";
export default class Details extends Component {
  counts = 0;
  componentDidMount() {
    this.counts = 0;
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            category,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="col-10 mx-auto text-center text-primary my-5">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>
                      <h1>{title}</h1>
                    </MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <InnerImageZoom
                      zoomSrc={img}
                      src={img}
                      className="bg-white"
                      fadeDuration="300"
                      alt="product"
                    />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2 className="text-uppercase text-muted mt-3 mb-2">
                      Category: {category}
                    </h2>

                    <h2 className="text-primary">Price: Rs. {price}</h2>
                    <p className="text-uppercase text-muted mt-3 text-danger">
                      <hr />
                      <h4>Product Info:</h4>
                    </p>

                    <div className="text-muted text-left ">{info}</div>
                    <hr />

                    <div className="mt-3">
                      <MDBBtn
                        disabled={inCart ? true : false}
                        color="primary "
                        outline
                        rounded
                        onClick={() => {
                          if (!value.isLoggedIn) {
                            value.openLoginModal();
                          }else{
                            value.openModal(id);
                        
                          }                        }}
                      >
                        {inCart ? "Added To Cart" : "Add To Cart"}
                      </MDBBtn>

                      <Link to="/products">
                        <MDBBtn color="danger" outline rounded>
                          Back to Products
                        </MDBBtn>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <MDBContainer>
                <MDBRow className="">
                  <div className="col-10 mx-auto text-center text-primary my-5">
                    {value.products.map((item) => {
                      if (
                        item.categoryId === value.detailProduct.categoryId &&
                        item.id !== value.detailProduct.id
                      ) {
                        return (
                          <h1>
                            Similar Products
                            <hr />
                          </h1>
                        );
                      }
                    })}
                  </div>

                  {value.products.map((item )=> {
                    if (
                      item.categoryId === value.detailProduct.categoryId &&
                      this.counts < 4 &&
                      item.id !== value.detailProduct.id
                    ) {
                      return (
                        <MDBCol
                          className="text-center align-content-center"
                          md="4"
                          xs="12"
                          sm="12"
                        >
                          <SimilarProduct item={item} value={value} />
                        </MDBCol>
                      );
                    }
                  })}
                </MDBRow>
              </MDBContainer>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
