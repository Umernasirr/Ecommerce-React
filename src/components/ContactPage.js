import React, { Component } from "react";

export default class ContactPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <section id="contactMain">
          <div
            class=" bg-white text-center"
            style={{ margin: "0px", border: "0px", padding: "0px" }}
          >
            <img
              src="img/Contact.jpg"
              alt="Contact Banner"
              style={{ width: "60%", height: "50%" }}
              class="img-fluid animated fadeIn"
              id="contactBanner"
            />
          </div>

          <div class="container">
            <div class="row">
              <div class="col-12 py-3">
                <h2 class="paddedHead">OFFICE:</h2>
                <p class="paddedText">
                  Address: Aurangzeb market, M.A Jinnah Road Karachi Pakistan
                </p>

                <h2 class="paddedHead">CONTACT US:</h2>
                <p class="paddedText">Phone: 0331-2150583</p>
                <h2 class="paddedHead">EMAIL US:</h2>
                <p class="paddedText">Email us at: taimur.dtl@gmail.com</p>
                <h2 class="paddedHead">SOCIAL MEDIA:</h2>
                <p class="paddedText">
                  Follow us on
                  <a href="https://www.facebook.com/DTL.Pakistan/">Facebook</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
