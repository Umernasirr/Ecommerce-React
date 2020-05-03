import React, { Component } from "react";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import { ProductConsumer } from "../context";
export default class ProductPage extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="3">
            <CategoryList />
          </MDBCol>
          <MDBCol md="9">
            <ProductList />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
