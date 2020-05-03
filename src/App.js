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
import Modal from "./components/Modal";
import Checkout from "./components/Checkout";
import BreadCrumb from "./components/BreadCrumb";
function App() {
  return (
    <ProductProvider>
      <Router>
        <React.Fragment>
          <Navbar />
          {/* <BreadCrumb /> */}
          <Switch>
            <Route path="/" exact component={ProductPage} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />

            <Route component={Default} />
          </Switch>
          <Modal />
        </React.Fragment>
      </Router>
    </ProductProvider>
  );
}

export default App;
