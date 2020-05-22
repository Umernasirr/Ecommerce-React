import React from "react";
import { MDBCard, MDBCardBody, MDBBtn, MDBCardImage, MDBCol } from "mdbreact";
import posed from "react-pose";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class SimilarProduct extends React.Component {
  state = {
    hovering: false,
    hoverText: "",
    redirect: null,
  };

  Square = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.05 },
  });

  componentDidMount() {
    this.setState({
      redirect: null,
    });
  }

  state = { hovering: false };
  render() {
    const { id, title, info, price, img, inCart } = this.props.item;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <MDBCol className="align-content-center my-2">
        <MDBCard onClick={() => {}} className="align-items-center">
          <this.Square
            pose={this.state.hovering ? "hovered" : "idle"}
            onMouseEnter={() => {
              this.setState({ hovering: true });
            }}
            onMouseLeave={() => {
              this.setState({ hovering: false });
            }}
            onClick={() => {
              this.props.value.handleDetail(id);
              this.setState({
                redirect: "/details",
              });
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

            <MDBCol md="12" xs="5">
              <MDBBtn
                disabled={inCart ? true : false}
                color="primary "
                outline
                rounded
                onClick={() => {
                  this.props.value.openModal(id);
                }}
              >
                {inCart ? "Added To Cart" : "Add To Cart"}
              </MDBBtn>
            </MDBCol>
            <MDBCol md="12" xs="5">
              <Link className="mb-2 my-0" to="/details">
                <MDBBtn
                  outline
                  color="danger"
                  onClick={() => {
                    this.props.value.handleDetail(id);
                  }}
                >
                  View Details
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}
export default SimilarProduct;
