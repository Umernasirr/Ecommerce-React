import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
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
            <MDBNavbar className="" fixed="top" color="indigo" dark>
              <MDBNavbarBrand>
                <Link to="/">
                  <strong className="white-text">DTL Parts</strong>
                </Link>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                className=" "
                onClick={() => {
                  this.setState({
                    isOpen: !this.state.isOpen,
                  });
                }}
              >
                <MDBIcon icon="bars" className="py-2">
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
              </MDBNavbarToggler>
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              ></MDBCollapse>
            </MDBNavbar>

            {/*  */}

            <Menu
              isOpen={this.state.isOpen}
              onStateChange={this.isMenuOpen}
              outerContainerId={"outer-container"}
            >
              <MDBNavItem className="text-capitalize text-center border border-warning mb-3">
                <MDBNavbarBrand>
                  <strong className="white-text ">DTL Logo</strong>
                </MDBNavbarBrand>
              </MDBNavItem>

              <MDBNavItem className="border hvr-fade">
                <this.Item>
                  <MDBNavLink
                    onClick={() => {
                      console.log(this.state.isOpen);
                      this.setState({
                        isOpen: !this.state.isOpen,
                      });
                    }}
                    className="text-white"
                    to="/"
                  >
                    Home
                  </MDBNavLink>
                </this.Item>
              </MDBNavItem>

              <MDBNavItem className="border hvr-fade">
                <this.Item>
                  <MDBNavLink
                    onClick={() => {
                      console.log(this.state.isOpen);
                      this.setState({
                        isOpen: !this.state.isOpen,
                      });
                    }}
                    className="text-white"
                    to="/cart"
                  >
                    Cart
                  </MDBNavLink>
                </this.Item>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown className="border ">
                  <MDBDropdownToggle className="hvr-fade" nav>
                    <div className="text-white ">
                      Products <MDBIcon icon="caret-down" />
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
                              onClick={() => {
                                console.log(this.state.isOpen);
                                this.setState({
                                  isOpen: !this.state.isOpen,
                                });
                                value.setCategory(idx);
                              }}
                              to="/"
                              style={{ color: clr }}
                            >
                              {item}
                            </MDBNavLink>
                          </this.Item>
                        </MDBDropdownItem>
                      );
                    })}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </Menu>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default Navbar;
