import React, { useEffect } from "react";

import "./checkout.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar, Footer, CheckoutCard } from "../../components";
import {
  productShoe1,
  arrowDownBlack,
  menuIconBlack,
  searchIconBlack,
  cartIconBlack,
} from "../../assets";

const Checkout = ({ windowWidth, setWindowWidth }) => {
  useEffect(() => {
    // if (windowWidth < 800) {
    const menu = document.querySelector(
      ".checkout-section > header > nav > .menu"
    );
    const search = document.querySelector(
      ".checkout-section > header > nav > .cart .search-icon"
    );
    const cart = document.querySelector(
      ".checkout-section > header > nav > .cart .cart-icon"
    );
    menu && menu.setAttribute("src", menuIconBlack);
    search && search.setAttribute("src", searchIconBlack);
    cart && cart.setAttribute("src", cartIconBlack);
  }, []);

  return (
    <section className="checkout-section">
      <Navbar />
      <div className="max-screen-width checkout">
        <h1 className="">Checkout</h1>
        <CheckoutCard />
      </div>
      <Footer />
    </section>
  );
};

export default Checkout;
