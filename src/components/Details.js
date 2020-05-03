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
                    <h5 className="text-uppercase text-muted mt-3 mb-2">
                      Category: {category}
                    </h5>
                    <h5 className="text-primary">
                      Price:
                      <p>
                        Rs. <strong> {price} </strong>
                      </p>
                    </h5>
                    <p className="text-uppercase text-muted mt-3 mb-2 text-primary">
                      <h5>
                        <strong>Product Info: </strong>
                      </h5>
                    </p>
                    <div className="text-muted text-left ">{info}</div>
                    <Link to="/">
                      <MDBBtn color="primary mb-3" outline rounded>
                        Back to Products
                      </MDBBtn>
                    </Link>

                    <MDBBtn
                      disabled={inCart ? true : false}
                      color="warning mb-3"
                      outline
                      rounded
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "Added To Cart" : "Add To Cart"}
                    </MDBBtn>
                  </div>
                </div>
              </div>

              <MDBContainer>
                <MDBRow className="">
                  <div className="col-10 mx-auto text-center text-primary my-5">
                    <h1>Similar Products</h1>
                  </div>

                  {value.products.map((item) => {
                    if (
                      item.categoryId === value.detailProduct.categoryId &&
                      this.counts < 4 &&
                      item.id !== value.detailProduct.id
                    ) {
                      this.counts = this.counts + 1;

                      return (
                        <MDBCol
                          className="text-center align-content-center"
                          md="4"
                          xs="12"
                          sm="12"
                        >
                          <SimilarProduct item={item} />
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
