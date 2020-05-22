import React, { Component } from "react";
import posed from "react-pose";
import {
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../context";

class Product extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  Square = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.05 },
  });
  state = {
    hovering: false,
    hoverText: "",
  };

  render() {
    const product = this.props.product;
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <section className="text-center ">
              <MDBCol className="mb-3">
                <MDBCard className="align-items-center">
                  <this.Square
                    pose={this.state.hovering ? "hovered" : "idle"}
                    onMouseEnter={() => {
                      this.setState({ hovering: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ hovering: false });
                    }}
                    onClick={() => {
                      value.openModal(product.id);
                    }}
                  >
                    <MDBCardImage
                      src={product.img}
                      top
                      style={{ height: "10rem", width: "10rem" }}
                      className="img"
                      alt="sample photo"
                      overlay="white-slight"
                    />
                  </this.Square>
                  <MDBCardBody className="text-center">
                    <h5>
                      <strong>
                        {product.title}
                        <MDBBadge pill color="primary"></MDBBadge>
                      </strong>
                    </h5>
                    <p className="text-muted">{product.category}</p>

                    <h5 className="font-weight-bold blue-text">
                      <strong>Rs. {product.price}</strong>
                    </h5>
                  </MDBCardBody>
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol md="12" xs="5">
                        <MDBBtn
                          disabled={product.inCart ? true : false}
                          color="primary "
                          outline
                          rounded
                          onClick={() => {
                            value.openModal(product.id);
                          }}
                        >
                          {product.inCart ? "Added To Cart" : "Add To Cart"}
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol md="12" xs="5">
                        <Link className="mb-2 my-0" to="/details">
                          <MDBBtn
                            outline
                            color="danger"
                            onClick={() => {
                              this.props.handleDetail(product.id);
                            }}
                          >
                            View Details
                          </MDBBtn>
                        </Link>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBCard>
              </MDBCol>
            </section>
          );
        }}
      </ProductConsumer>
    );
  }
}

// Product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number,
//     img: PropTypes.string,
//     title: PropTypes.string,
//     price: PropTypes.number,
//     inCart: PropTypes.bool,
//   }).isRequired,
// };

export default Product;
