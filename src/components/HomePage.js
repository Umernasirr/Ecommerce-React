import React, { Component } from "react";
import "./HomePage.css";
import Carousel from "./Carousel";

export default class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="indexBackground "></div>

        <div className="background-text text-center text-white">
          <div className="text-warning ">
            <p className="h1 ">DYNAMIC TECHNOLOGY LEADER</p>
          </div>
          <div id="logo-DTL-line" className="animated">
            Providing Quality that has no parallel
          </div>
        </div>
        {/* Body */}

        <div class="container-fluid py-4">
          <div class="row " id="news ">
            <div class="col-0 col-sm-0 col-lg-4"></div>
            <div class="col-sm-12 col-md-8">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
