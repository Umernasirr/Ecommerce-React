import React, { Component } from "react";

export default class InquiryPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <section id="inquiryMain">
          <div className="container">
            <div className="row">
              <div
                className=" col-12 text-center"
                style={{ margin: "0px", border: "0px", padding: "0px" }}
              >
                <img
                  src="img/inquiry.jpg"
                  alt="No image found"
                  style={{ width: "65%", height: "86%" }}
                  className="img-fluid animated fadeIn hvr-grow-shadow"
                  id="inquiryBanner"
                />
              </div>
            </div>
          </div>

          <div className="container text-white">
            <div className="row">
              <div className="col-322md-8">
                <div className="well well-sm">
                  <form
                    action="https://formspree.io/umernasirr@gmail.com"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="name">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter name"
                            required="required"
                            name="name"
                          />
                        </div>
                        <div className="form-group">
                          <label for="email">Email Address</label>
                          <div className="input-group">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter email"
                              required="required"
                              name="_replyto"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="subject">Subject</label>
                          <select
                            id="subject"
                            name="subject"
                            className="form-control"
                            required="required"
                          >
                            <option value="na" selected="">
                              Select Inquiry:
                            </option>
                            <option value="service">
                              General Customer Service
                            </option>
                            <option value="suggestions">Suggestions</option>
                            <option value="product">Product Support</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="name">Message</label>
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows="9"
                            cols="25"
                            required="required"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          value="Send"
                          className="btn pull-right btn-primary"
                          id="btnContactUs "
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <form
                  className="lead p-3 "
                  style={{ fontWeight: "600", color: "black" }}
                >
                  <h3 className=" paddedHeading py-3">Office</h3>
                  <address className="paddedText">
                    <h4>
                      <strong> DTL Motorcycle Parts</strong>
                    </h4>
                    2nd Floor, Office # 4, Corner Castle Building,
                    <br /> Opposite Bahadur-Shah Market,
                    <br /> Karachi-Pakistan
                    <br /> +92-21-32712153 dreamzpakistan@gmail.com
                  </address>
                </form>
              </div>
            </div>

            <div className="p-4"></div>
            <div className="p-2"></div>
          </div>
        </section>
      </div>
    );
  }
}
