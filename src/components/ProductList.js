import React, { Component } from "react";
import Product from "./Product";
import { MDBCol, MDBInput } from "mdbreact";
import { ProductConsumer } from "../context";
class ProductList extends Component {
  state = {
    products: [],
    search: "",
  };

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div>
              <div>
                <MDBInput
                  label="Search Products"
                  icon="search"
                  type="text"
                  name="search"
                  value={this.state.search}
                  onChange={(e) => {
                    // commendtout if u have any issues
                    value.setCategory(0);
                    this.setState({
                      search: e.target.value.toLowerCase(),
                    });
                  }}
                />

                <div className="row">
                  {value.products.map((product) => {
                    let re = `.*${this.state.search}.*`;
                    let title = product.title.toLowerCase();
                    let display = true;
                    if (value.currentCategory !== 0) {
                      display = product.categoryId === value.currentCategory;
                    }
                    if (display) {
                      return title.match(re) !== null ? (
                        <MDBCol key={product.id} lg="4" sm="12">
                          <Product
                            product={product}
                            handleDetail={value.handleDetail}
                            addToCart={value.addToCart}
                          />
                        </MDBCol>
                      ) : (
                        <React.Fragment> </React.Fragment>
                      );
                    }
                  })}
                  ;
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ProductList;
