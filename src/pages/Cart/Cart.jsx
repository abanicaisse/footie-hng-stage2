import React from "react";

import "./cart.css";

import { Navbar, Footer, Hero, CartItem, Trending } from "../../components";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CartItem />
      <Trending />
      <Footer />
    </>
  );
};

export default Cart;
