import React, { Component } from "react";
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
export default class Default extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <MDBRow>
        <MDBCol className="m-5" style={{ maxWidth: "100rem" }}>
          <MDBCard className="text-center" reverse>
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle>Page Not Found 404</MDBCardTitle>
              <MDBCardText>
                There is no page found on the following domain
              </MDBCardText>
              <Link to="/">
                <MDBBtn size="lg" color="primary" className="my-4" href="#">
                  Go Back To Home
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
  }
}
