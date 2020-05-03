import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBadge,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdbreact";
import posed from "react-pose";
class SimilarProduct extends React.Component {
  Square = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.05 },
  });
  state = {
    hovering: false,
    hoverText: "",
  };

  state = { hovering: false };
  render() {
    const { id, title, info, price, img } = this.props.item;
    return (
      <MDBCol className="align-content-center my-2">
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
              // value.openModal(product.id);
            }}
          >
            <MDBCardImage
              src={img}
              top
              style={{ height: "10rem", width: "10rem" }}
              className="img"
              alt="Similar Product"
              overlay="white-slight"
            />
          </this.Square>
          <MDBCardBody className="text-center">
            <h5>
              <strong>{title}</strong>
            </h5>

            <h5 className="font-weight-bold blue-text">
              <strong>Rs. {price}</strong>
            </h5>

            <p>{info.slice(0, 50)}...</p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}
export default SimilarProduct;
