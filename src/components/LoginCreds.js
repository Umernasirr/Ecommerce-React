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

  value = this.props.value;
  render() {
    const responseFacebook = (response) => {
      console.log(response);
    };

    const responseGoogle = async (response) => {
      const user = await this.makeUser(response.profileObj);
      this.value.setUser(user);

      console.log(this.value.getUser());
      this.value.login();
      this.value.closeLoginModal();
    };

    return (
      <div className="text-center align-content-center">
        <FacebookLogin
          appId="167722334591221" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />
        <GoogleLogin
          clientId="86368302418-incu7e1uvd9o8o9hbr2vvk31p94346uu.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

        <CustomLogin />
      </div>
    );
  }
}
