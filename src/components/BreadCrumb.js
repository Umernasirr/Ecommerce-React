import React, { Component } from "react";
import { MDBBreadcrumbItem, MDBBreadcrumb } from "mdbreact";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
export default class BreadCrumb extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          let breadcrumbArray = value.breadcrumbs.splice();
          console.log(breadcrumbArray);
          return (
            <div>
              <MDBBreadcrumb dark>
                <MDBBreadcrumbItem>
                  <Link to="/" className="text-dark">
                    Home
                  </Link>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>                                                                 
                  <Link to="/" className="text-primary">
                    Products
                  </Link>
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
