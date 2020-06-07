import React, { Component } from "react";
import { ProductConsumer } from "../context";

import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import CustomLogin from "./CustomLogin";
export default class LoginCreds extends Component {
  makeUser = ({ name, email, phone, address }) => {
    return {
      name,
      email,
      phone,
      address,
    };
  };
  // fix fb and google login idk how tho lol
  responseFacebook = async (response) => {
    const user = await this.makeUser(response);
    await this.value.setUser(user);
    this.value.login();
    this.value.closeLoginModal();
    console.log(this.value.getUser());
  };

  value = this.props.value;
  render() {
    const responseGoogle = async (response) => {
      const user = await this.makeUser(response);
      console.log("hi");
      // await this.value.setUser(user);
      // if (this.value.user !== "" || this.value.email !== "") {
      //   console.log("data ayaa");
      //   this.value.login();
      //   console.log(this.value.getUser());
      //   this.value.closeLoginModal();
      // }
    };

    {
      console.log(this.value.isLoggedIn);
      return !this.value.isLoggedIn ? (
        <div className="text-center align-content-center">
          <FacebookLogin
            autoLoad={false}
            appId="167722334591221" //APP ID NOT CREATED YET
            fields="name,email,picture"
            callback={(response) => {
              this.responseFacebook(response);
            }}
          />
          <br />
          <br />
          {/* <GoogleLogin
            clientId="86368302418-incu7e1uvd9o8o9hbr2vvk31p94346uu.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}

          <CustomLogin value={this.value} />
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      );
    }
  }
}
