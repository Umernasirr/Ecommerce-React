import React from "react";
// Routing
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
//
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import { ProductProvider } from "./context";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";
import Modal from "./components/Modal";
import Checkout from "./components/Checkout";
import BreadCrumb from "./components/BreadCrumb";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

import InquiryPage from "./components/InquiryPage";
function App() {
  return (
    <ProductProvider>
      <Router basename="/">
        <React.Fragment>
          <Navbar />
          {/* <BreadCrumb /> */}
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/inquiry" component={InquiryPage} />

            <Route path="/products" component={ProductPage} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />

            <Route component={HomePage} />
          </Switch>
          <Footer />
          <LoginModal />
          <Modal />
        </React.Fragment>
      </Router>
    </ProductProvider>
  );
}

export default App;
