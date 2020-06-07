import React, { Component } from "react";
import "./AboutPage.css";

export default class AboutPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <section id="aboutMain" className="animated fadeIn">
          <div className=" text-center">
            <img
              src="img/aboutUsBanner.png"
              alt="About Us Banner"
              className="img-fluid animated fadeIn hvr-grow-shadow"
              id="imageBanner"
              style={{ width: "50%", height: "70%" }}
            />
          </div>

          <div className="container my-2">
            <div className="row py-2">
              <div className=" col-lg-8 col-12 bg-dark text-white my-2 allText">
                <h3 className="paddedHead py-2"> OUR VISION: </h3>
                <p className="paddedText">
                  &nbsp; &nbsp; “Our top priority is to provide high quality
                  products with excellent after sales services.”
                </p>

                <h3 className="paddedHead ">ABOUT US:</h3>
                <p className="paddedText text-justify">
                  DTL Dynamic technology Leader has been established since 2013
                  starting with motorcycle wheel spokes and nipples. Today, our
                  wide range of product consists of sprocket kits, brake shoes,
                  engine valve sets, piston and rings, wheel rims, iridium
                  plugs, bearings and other engine and body parts for
                  motorcycles. We have a vast dealership network which is spread
                  all over Pakistan. Our company is committed to provide
                  satisfaction to customers with high quality products and after
                  sales services. With all support from customers, we share and
                  aggregate experience to continuously improve the strong
                  relationship with customers. Our marketing team is responsible
                  in making connections with the customers, not only attending
                  to their needs but also complaints, suggestions, idea and
                  provides information on the products. We really appreciate
                  comments and respond from our customers on our products as
                  indirectly it helps us in monitoring our products quality and
                  performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
