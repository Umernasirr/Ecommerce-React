import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavItem,
  MDBNavLink,
  MDBTableBody,
  MDBTableHead,
  MDBTable,
  MDBCollapse,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbarNav,
  MDBLink,
  MDBBtn,
} from "mdbreact";
import posed from "react-pose";
import { stack as Menu } from "react-burger-menu";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  state = {
    isOpen: false,
  };

  Item = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    },
    hover: {
      scale: 1.045,
      boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
    },

    idle: {
      scale: 1,
      boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
    },

    press: {
      scale: 1,
    },
  });

  ShowSettings = (event) => {
    event.preventDefault();
  };

  isMenuOpen = (state) => {
    this.setState({
      isOpen: state.isOpen,
    });
    return state.isOpen;
  };

  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <div className="outer-container mb-5 pb-2 ">
            <MDBNavbar
              expand="md"
              className=""
              fixed="top"
              // color="grey lighten-5  "
              style={{ backgroundColor: "rgba(246,245,260 ,1)" }}
              dark
            >
              <div className="justify-content-start ">
                <MDBNavbarBrand
                  stlye={{ float: "left", margin: " 0 10px 0 0" }}
                  className="d-block p-0 
               "
                >
                  <MDBLink className="p-0" to="/">
                    <img src="img/DTL.png" style={{ width: "60px" }} />
                  </MDBLink>
                </MDBNavbarBrand>
              </div>
              <div className="justify-content-end ">
                <div className="d-md-block d-none ">
                  <MDBNavbarNav className="">
                    <MDBNavLink
                      className="grey-text font-weight-bold hvr-grow"
                      to="/"
                    >
                      Home
                    </MDBNavLink>
                    <MDBNavLink
                      className="grey-text font-weight-bold  hvr-grow"
                      to="/about"
                    >
                      About Us
                    </MDBNavLink>

                    <MDBNavLink
                      className="grey-text font-weight-bold  hvr-grow"
                      to="/products"
                    >
                      Shop
                    </MDBNavLink>

                    <MDBNavLink
                      className="grey-text font-weight-bold  hvr-grow"
                      to="/inquiry"
                    >
                      Inquiry
                    </MDBNavLink>
                    <MDBNavLink
                      className="grey-text font-weight-bold  hvr-grow"
                      to="/contact"
                    >
                      Contact Us
                    </MDBNavLink>

                    <MDBNavLink
                      className="grey-text font-weight-bold  hvr-grow"
                      to="/cart"
                    >
                     View Cart
                    </MDBNavLink>
                  </MDBNavbarNav>
                </div>
              </div>
              <div
                className=""
                onClick={() => {
                  this.setState({
                    isOpen: !this.state.isOpen,
                  });
                }}
              >
                <span className="dtlText font-italic font-weight-bold  mr-1 hvr-grow ">
                  {this.state.isOpen ? "Close Menu" : "View Menu"}
                </span>

                <MDBIcon icon="shopping-cart" className="py-2 dtlText">
                  {" "}
                  <span
                    className="badge badge-primary"
                    style={{
                      fontSize: "12px",
                      paddingTop: "2px",
                    }}
                  >
                    {value.cart.length}
                  </span>
                </MDBIcon>
              </div>
            </MDBNavbar>

            {/*  */}

            <Menu
              isOpen={this.state.isOpen}
              onStateChange={this.isMenuOpen}
              outerContainerId={"outer-container"}
            >
              <MDBNavItem className="text-center br-0 mb-3">
                <MDBLink to="#"
                  onClick={() => {
                    this.setState({
                      isOpen: !this.state.isOpen,
                    });
                  }}
                >
                  <img src="img/DTL.png" style={{ width: "70px" }} />
                  <div className="border-bottom border-dark pt-2"></div>
                  <div className="border-top border-dark"></div>
                </MDBLink>
              </MDBNavItem>

              <MDBNavItem className="hvr-fade">
                <this.Item>
                  <MDBNavLink
                    onClick={() => {
                      this.setState({
                        isOpen: !this.state.isOpen,
                      });
                    }}
                    className="text-white"
                    to="/"
                  >
                    <MDBIcon icon="home" size="lg" className="mr-2" />
                    <h6 className="d-inline  "> Home</h6>
                  </MDBNavLink>
                </this.Item>
              </MDBNavItem>

              <div className="border-bottom border-dark"></div>
              <div className="border-top border-dark"></div>

              <MDBNavItem className=" hvr-fade">
                <this.Item>
                  <MDBNavLink
                    onClick={() => {
                      this.setState({
                        isOpen: !this.state.isOpen,
                      });
                    }}
                    className="text-white"
                    to="/about"
                  >
                    <MDBIcon
                      icon="question-circle"
                      size="lg"
                      className="mr-2"
                    />
                    <h6 className="d-inline  ">About Us</h6>
                  </MDBNavLink>
                </this.Item>
              </MDBNavItem>

              <div className="border-bottom border-dark"></div>
              <div className="border-top border-dark"></div>

              <MDBNavItem className=" hvr-fade">
                <this.Item>
                  <MDBNavLink
                    onClick={() => {
                      this.setState({
                        isOpen: !this.state.isOpen,
                      });
                    }}
                    className="text-white"
                    to="/cart"
                  >
                    <MDBIcon icon="shopping-cart" size="lg" className="mr-2" />
                    <h6 className="d-inline  ">Go To Your Cart</h6>
                  </MDBNavLink>
                </this.Item>
              </MDBNavItem>

              <div className="border-bottom border-dark"></div>
              <div className="border-top border-dark"></div>
              <MDBNavItem>
                <MDBDropdown dropleft>
                  <MDBDropdownToggle className="hvr-fade" nav>
                    <div className="text-white ">
                      <MDBIcon icon="shopping-bag" size="lg" className="mr-2" />
                      <h6 className="d-inline  "> Products </h6>
                      <MDBIcon icon="caret-down" />
                    </div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    {value.categories.map((item, idx) => {
                      let clr =
                        idx === value.currentCategory ? "#ff6600" : "#000000";

                      return (
                        <MDBDropdownItem key={idx}>
                          <this.Item>
                            <MDBNavLink
                              className="px-0"
                              onClick={() => {
                                this.setState({
                                  isOpen: !this.state.isOpen,
                                });
                                value.setCategory(idx);
                              }}
                              to="/products"
                              style={{ color: clr }}
                            >
                              {item}
                            </MDBNavLink>
                          </this.Item>
                          <div className="border-top border-grey"></div>
                        </MDBDropdownItem>
                      );
                    })}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              <div className="border-bottom border-dark"></div>
              <div className="border-top border-dark"></div>

              <MDBNavItem className="hvr-fade">
                <this.Item>
                  <MDBNavLink
                    onClick={() => {
                      this.setState({
                        isOpen: !this.state.isOpen,
                      });
                    }}
                    className="text-white"
                    to="/contact"
                  >
                    <MDBIcon icon="phone-alt" size="lg" className="mr-2" />
                    <h6 className="d-inline  "> Contact</h6>
                  </MDBNavLink>
                </this.Item>
              </MDBNavItem>

              <div className="border-bottom border-dark mt-2"></div>
              <div className="border-top border-dark "></div>

              <MDBNavItem className="text-center">
                <this.Item>
                  <MDBIcon icon="credit-card" size="lg" className="mr-2 my-3" />
                  <Link
                    to="/cart"
                    onClick={() => {
                      this.setState({
                        isOpen: !this.state.isOpen,
                      });
                    }}
                  >
                    <h5 className="d-inline text-white   "> Cart</h5>
                  </Link>
                </this.Item>
              </MDBNavItem>

              {value.cart.length > 0 ? (
                <div>
                  <div className="p-0 m-0">
                    <MDBTable responsive small>
                      <MDBTableHead color="white text-black">
                        <tr>
                          <th>Quantity</th>
                          <th>Name</th>
                          <th>Total</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody className="px-3" textWhite>
                        {value.cart.map((item) => (
                          <tr>
                            <td>{item.count}</td>
                            <td>{item.title}</td>
                            <td>Rs. {item.total}</td>
                          </tr>
                        ))}
                      </MDBTableBody>
                    </MDBTable>
                  </div>
                  <Link
                    to="/cart"
                    onClick={() => {
                      this.setState({
                        isOpen: !this.state.isOpen,
                      });
                    }}
                  >
                    <MDBBtn
                      textWhite
                      rounded
                      outline
                      className="ml-1"
                      color="white"
                    >
                      Goto Cart
                    </MDBBtn>
                  </Link>
                </div>
              ) : (
                <MDBNavItem
                  onClick={() => {
                    this.setState({
                      isOpen: !this.state.isOpen,
                    });
                  }}
                  className="text-center"
                >
                  <this.Item>
                    <MDBIcon icon="times" size="lg" className="mr-2 my-3" />
                    <h5 className="d-inline text-white   ">
                      {" "}
                      No items in Cart
                    </h5>
                  </this.Item>
                </MDBNavItem>
              )}
            </Menu>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default Navbar;
