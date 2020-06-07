import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";

import { Link } from "react-router-dom";
const Carousel = () => {
  return (
    <MDBContainer fluid>
      <MDBRow className="mx-2">
        <MDBCol
          className="justify-content-right text-center d-none d-md-block"
          md="3"
        >
          <MDBCard style={{ height: "90%" }}>
            <Link to="/about">
              <MDBCardImage
                className="img-fluid d-block w-100"
                src="/img/dtlgif2.gif"
                waves
              />
            </Link>
            <MDBCardBody className="">
              <Link to="/about">
                <MDBCardTitle className="text-dark text-center ">
                  <h5>Want to know more about DTL??</h5>
                </MDBCardTitle>
                .
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="mb-3" sm="12" md="9" lg="9">
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="/img/carousel/1.jpg"
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="/img/carousel/2.jpg"
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="/img/carousel/3.jpg"
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Carousel;
