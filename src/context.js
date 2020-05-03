import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalIsOpen: false,
    modalProduct: detailProduct,
    categories: ["ALL PRODUCTS"],
    currentCategory: 0,
    breadcrumbs: [],
  };

  setBreadCrumbs = (array) => {
    this.setState({
      breadcrumbs: [...array],
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((product) => product.id === id);
    return product;
  };

  handleDetail = (id) => {
    console.log("ho");
    const product = this.getItem(id);
    this.setState({
      detailProduct: product,
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    // Error
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState({
      products: tempProducts,
      cart: [...this.state.cart, product],
    });
  };

  removeFromCart = (id) => {
    console.log("called");
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    console.log(product);
    product.inCart = false;
    product.count = 0;
    product.total = 0;

    let tempCart = this.state.cart.filter((item) => {
      return item.id !== id;
    });
    console.log(tempCart);

    this.setState({
      products: tempProducts,
      cart: tempCart,
    });
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState({
      modalProduct: product,
      modalIsOpen: true,
    });
  };

  closeModal = (id) => {
    this.setState({
      modalIsOpen: false,
    });
  };

  setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItems = { ...item };
      products = [...products, singleItems];
    });

    this.setState({
      products,
    });
  };

  setCategories = () => {
    let categories = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };

      categories = [...categories, singleItem.category.toUpperCase()];
    });
    categories = new Set(categories);

    categories = Array.from(categories);
    this.setState({
      categories: [...this.state.categories, ...categories],
    });
  };

  componentDidMount() {
    this.setProducts();
    this.setCategories();
  }

  increment = (id) => {
    let tempCart = this.state.cart.map((item) => {
      if (item.id === id) {
        item.count = item.count + 1;
        item.total = item.count * item.price;
        return item;
      } else {
        return item;
      }
    });

    this.setState({
      cart: tempCart,
    });
  };

  remove = (id) => {
    let tempCart = this.state.cart.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      cart: tempCart,
    });
  };

  clearCart = () => {
    this.setState({
      cart: [],
    });
  };

  decrement = (id) => {
    let tempCart = this.state.cart.map((item) => {
      if (item.id === id && item.count > 0) {
        item.count = item.count - 1;
        item.total = item.count * item.price;

        return item;
      } else {
        return item;
      }
    });

    this.setState({
      cart: tempCart,
    });
  };

  calculateTotal = () => {
    let total = 0;

    this.state.cart.forEach((item) => {
      total += item.price * item.count;
    });
    return total;
  };

  setCategory = (categoryId) => {
    this.setState({
      currentCategory: categoryId,
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          modalIsOpen: this.state.modalIsOpen,
          decrement: this.decrement,
          increment: this.increment,
          calculateTotal: this.calculateTotal,
          removeFromCart: this.removeFromCart,
          setCategory: this.setCategory,
          setBreadCrumbs: this.setBreadCrumbs,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
