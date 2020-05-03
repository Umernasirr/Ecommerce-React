import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <MDBRow>
      <MDBCol className="m-5" style={{ maxWidth: "100rem" }}>
        <MDBCard className="text-center" reverse>
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Your Cart is Currently Empty</MDBCardTitle>
            <MDBCardText>
              Please Add some items to the cart to continue
            </MDBCardText>
            <Link to="/">
              <MDBBtn size="lg" color="primary" className="my-4" href="#">
                Go Back To All Products
              </MDBBtn>
            </Link>
            <p>
              <a href="#!" className="icons-sm li-ic ml-1">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="icons-sm tw-ic ml-1">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="icons-sm fb-ic ml-1">
                <MDBIcon fab icon="facebook-f" />
              </a>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default EmptyCart;
